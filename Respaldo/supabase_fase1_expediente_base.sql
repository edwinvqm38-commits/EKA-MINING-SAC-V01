begin;

-- =========================================================
-- FASE 1A
-- Seguimiento operativo y evidencias transversales
-- Compatibilidad total con cotizaciones, requerimientos_log,
-- requerimiento_items y requerimiento_adjuntos existentes.
-- No elimina ni migra adjuntos legacy.
-- =========================================================

-- ---------------------------------------------------------
-- Tabla: seguimiento_eventos
-- Timeline operativo para cotizaciones y requerimientos.
-- Las comunicaciones se registran como subtipo de evento.
-- ---------------------------------------------------------
create table if not exists public.seguimiento_eventos (
  id uuid primary key default gen_random_uuid(),

  -- Entidad a la que pertenece el evento:
  -- cotizacion o requerimiento.
  entity_type text not null
    check (entity_type in ('cotizacion', 'requerimiento')),

  -- ID de la cabecera principal:
  -- cotizaciones.id o requerimientos_log.id.
  entity_id bigint not null,

  -- Código legible para búsquedas y trazabilidad rápida:
  -- ej. FOR-EKA-PRO-3_2026-001 o RQ-UMSR-2501-12
  entity_code text not null,

  -- Tipo principal del hecho operativo.
  event_type text not null
    check (
      event_type in (
        'registro',
        'actualizacion',
        'cambio_estado',
        'observacion',
        'comentario',
        'sustento',
        'validacion',
        'aprobacion',
        'rechazo',
        'derivacion',
        'atencion',
        'entrega',
        'cierre',
        'comunicacion'
      )
    ),

  -- Subtipo opcional para detallar el evento.
  event_subtype text null,

  -- Estados anterior/nuevo cuando aplique.
  status_before text null,
  status_after text null,

  -- Título corto visible en expediente.
  title text not null,

  -- Comentario o descripción del evento.
  comment text null,

  -- Comunicación como subtipo de evento.
  channel text null
    check (
      channel is null or channel in ('email', 'telefono', 'whatsapp', 'reunion', 'interna', 'otro')
    ),
  communication_subject text null,
  communication_ref text null,
  communication_from text null,
  communication_to text null,

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by uuid null default auth.uid() references auth.users(id) on delete set null,
  updated_by uuid null default auth.uid() references auth.users(id) on delete set null
);

comment on table public.seguimiento_eventos is
'Timeline operativo de cotizaciones y requerimientos. Registra comentarios, observaciones, cambios de estado, sustentos y comunicaciones manuales.';

comment on column public.seguimiento_eventos.entity_type is
'Indica si el evento pertenece a una cotizacion o a un requerimiento.';

comment on column public.seguimiento_eventos.entity_id is
'ID de la entidad principal: cotizaciones.id o requerimientos_log.id.';

comment on column public.seguimiento_eventos.entity_code is
'Código visible de la entidad, útil para búsqueda rápida y trazabilidad.';

comment on column public.seguimiento_eventos.communication_ref is
'Referencia libre a correo, hilo, acta, asunto o identificador externo.';

create index if not exists idx_seguimiento_eventos_entity
  on public.seguimiento_eventos (entity_type, entity_id, created_at desc);

create index if not exists idx_seguimiento_eventos_entity_code
  on public.seguimiento_eventos (entity_type, entity_code);

create index if not exists idx_seguimiento_eventos_event_type
  on public.seguimiento_eventos (event_type);

create index if not exists idx_seguimiento_eventos_created_by
  on public.seguimiento_eventos (created_by);

drop trigger if exists trg_seguimiento_eventos_updated_at on public.seguimiento_eventos;
create trigger trg_seguimiento_eventos_updated_at
before update on public.seguimiento_eventos
for each row execute function public.set_updated_at();


-- ---------------------------------------------------------
-- Tabla: evidencias_relacionadas
-- Nuevo estándar documental del expediente.
-- No reemplaza ni elimina requerimiento_adjuntos.
-- ---------------------------------------------------------
create table if not exists public.evidencias_relacionadas (
  id uuid primary key default gen_random_uuid(),

  -- Entidad dueña de la evidencia.
  entity_type text not null
    check (entity_type in ('cotizacion', 'requerimiento')),

  -- ID de cabecera principal.
  entity_id bigint not null,

  -- Código legible de la entidad.
  entity_code text not null,

  -- Relación opcional a un evento específico del timeline.
  seguimiento_evento_id uuid null references public.seguimiento_eventos(id) on delete set null,

  -- Tipo documental.
  evidence_type text not null
    check (
      evidence_type in (
        'foto',
        'pdf',
        'excel',
        'word',
        'link',
        'ficha_tecnica',
        'correo_cliente',
        'sustento_campo',
        'cotizacion_proveedor',
        'acta',
        'guia',
        'captura',
        'otro'
      )
    ),

  -- Modo de origen. Legacy permite convivir con documentos
  -- heredados sin migrarlos agresivamente.
  source_type text not null default 'upload'
    check (
      source_type in ('upload', 'link', 'manual', 'legacy')
    ),

  title text not null,
  description text null,

  -- Storage / archivo
  bucket text null,
  storage_path text null,
  public_url text null,

  -- Enlace externo
  external_url text null,

  file_name text null,
  mime_type text null,
  size_bytes bigint null,

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  uploaded_by uuid null default auth.uid() references auth.users(id) on delete set null,
  updated_by uuid null default auth.uid() references auth.users(id) on delete set null
);

comment on table public.evidencias_relacionadas is
'Evidencias y documentos del expediente para cotizaciones y requerimientos. Nuevo estándar documental incremental.';

comment on column public.evidencias_relacionadas.source_type is
'Indica si la evidencia fue subida, enlazada, registrada manualmente o referenciada como legacy.';

comment on column public.evidencias_relacionadas.seguimiento_evento_id is
'Si existe, la evidencia está asociada a un evento específico del timeline.';

create index if not exists idx_evidencias_relacionadas_entity
  on public.evidencias_relacionadas (entity_type, entity_id, created_at desc);

create index if not exists idx_evidencias_relacionadas_entity_code
  on public.evidencias_relacionadas (entity_type, entity_code);

create index if not exists idx_evidencias_relacionadas_evento
  on public.evidencias_relacionadas (seguimiento_evento_id);

create index if not exists idx_evidencias_relacionadas_type
  on public.evidencias_relacionadas (evidence_type);

create index if not exists idx_evidencias_relacionadas_uploaded_by
  on public.evidencias_relacionadas (uploaded_by);

drop trigger if exists trg_evidencias_relacionadas_updated_at on public.evidencias_relacionadas;
create trigger trg_evidencias_relacionadas_updated_at
before update on public.evidencias_relacionadas
for each row execute function public.set_updated_at();


-- ---------------------------------------------------------
-- RLS mínimo de Fase 1A
-- Solo para tablas nuevas. No toca RLS actual del sistema.
-- ---------------------------------------------------------
alter table public.seguimiento_eventos enable row level security;
alter table public.evidencias_relacionadas enable row level security;

drop policy if exists "fase1 read seguimiento_eventos" on public.seguimiento_eventos;
drop policy if exists "fase1 write seguimiento_eventos" on public.seguimiento_eventos;
drop policy if exists "fase1 read evidencias_relacionadas" on public.evidencias_relacionadas;
drop policy if exists "fase1 write evidencias_relacionadas" on public.evidencias_relacionadas;

create policy "fase1 read seguimiento_eventos"
on public.seguimiento_eventos
for select
to authenticated
using (public.current_profile_active());

create policy "fase1 write seguimiento_eventos"
on public.seguimiento_eventos
for all
to authenticated
using (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'))
with check (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'));

create policy "fase1 read evidencias_relacionadas"
on public.evidencias_relacionadas
for select
to authenticated
using (public.current_profile_active());

create policy "fase1 write evidencias_relacionadas"
on public.evidencias_relacionadas
for all
to authenticated
using (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'))
with check (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'));

commit;
