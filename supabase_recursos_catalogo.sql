-- =============================================================
-- TABLA: recursos_catalogo
-- Catálogo compartido de recursos (materiales, equipos, etc.)
-- Visible para todos los usuarios autenticados y activos.
-- Ejecutar en el SQL Editor de Supabase.
-- =============================================================

-- 1. Función set_updated_at (si no existe ya)
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 2. Crear tabla
create table if not exists public.recursos_catalogo (
  id                          bigserial primary key,

  -- Identificación y compra
  codigo                      text null,
  codigo_fabricante            text null,
  descripcion                 text not null,
  categoria                   text null,
  marca                       text null,
  unidad                      text null,
  tiempo_entrega              text null,
  moneda                      text null default 'PEN',
  costo_unitario              numeric(18, 4) null,
  proveedor                   text null,
  observacion                 text null,

  -- Imagen de referencia (adjunto principal)
  imagen_url                  text null,
  imagen_nombre_archivo        text null,
  imagen_source               text null,
  imagen_mime_type            text null,
  imagen_size_bytes           bigint null,
  imagen_adjuntos             jsonb not null default '[]'::jsonb,

  -- Ficha técnica (adjunto principal)
  ficha_tecnica_url           text null,
  ficha_tecnica_nombre_archivo text null,
  ficha_tecnica_source        text null,
  ficha_tecnica_mime_type     text null,
  ficha_tecnica_size_bytes    bigint null,
  ficha_tecnica_adjuntos      jsonb not null default '[]'::jsonb,

  -- Auditoría
  created_by                  uuid null references auth.users(id) on delete set null,
  created_at                  timestamptz not null default now(),
  updated_at                  timestamptz not null default now()
);

-- 3. Trigger de updated_at
drop trigger if exists trg_recursos_catalogo_updated_at on public.recursos_catalogo;
create trigger trg_recursos_catalogo_updated_at
  before update on public.recursos_catalogo
  for each row execute function public.set_updated_at();

-- 4. Índices útiles
create index if not exists idx_recursos_catalogo_descripcion
  on public.recursos_catalogo using gin(to_tsvector('spanish', descripcion));

create index if not exists idx_recursos_catalogo_categoria
  on public.recursos_catalogo (categoria);

create index if not exists idx_recursos_catalogo_created_by
  on public.recursos_catalogo (created_by);

-- 5. Habilitar RLS
alter table public.recursos_catalogo enable row level security;

-- 6. Políticas RLS

-- Lectura: todos los usuarios autenticados con perfil activo pueden leer
create policy "recursos_catalogo_select_authenticated"
  on public.recursos_catalogo
  for select
  to authenticated
  using (true);

-- Inserción: cualquier usuario autenticado puede crear recursos
create policy "recursos_catalogo_insert_authenticated"
  on public.recursos_catalogo
  for insert
  to authenticated
  with check (
    auth.uid() is not null
    and exists (
      select 1 from public.user_profiles
      where user_id = auth.uid()
        and active = true
    )
  );

-- Actualización: el creador o un admin pueden actualizar
create policy "recursos_catalogo_update_own_or_admin"
  on public.recursos_catalogo
  for update
  to authenticated
  using (
    created_by = auth.uid()
    or exists (
      select 1 from public.user_profiles
      where user_id = auth.uid()
        and role in ('admin')
        and active = true
    )
  )
  with check (
    created_by = auth.uid()
    or exists (
      select 1 from public.user_profiles
      where user_id = auth.uid()
        and role in ('admin')
        and active = true
    )
  );

-- Eliminación: solo admin o el propio creador
create policy "recursos_catalogo_delete_own_or_admin"
  on public.recursos_catalogo
  for delete
  to authenticated
  using (
    created_by = auth.uid()
    or exists (
      select 1 from public.user_profiles
      where user_id = auth.uid()
        and role in ('admin')
        and active = true
    )
  );

-- 7. Verificar que la tabla está bien
-- (Puedes correr esto manualmente para ver las columnas)
-- select column_name, data_type from information_schema.columns
-- where table_schema = 'public' and table_name = 'recursos_catalogo'
-- order by ordinal_position;

-- 8. OPCIONAL: Listar todas las tablas de tu esquema para verificar
-- select tablename from pg_tables where schemaname = 'public' order by tablename;
