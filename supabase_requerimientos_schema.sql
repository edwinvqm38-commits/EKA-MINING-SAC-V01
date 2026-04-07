begin;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.requerimientos_log (
  id bigserial primary key,
  cotizacion_id bigint null references public.cotizaciones(id) on delete set null,
  cotizacion_codigo text null,
  centro_costos text not null,
  rq_codigo text not null,
  cliente text null,
  unidad text null,
  solicitante text null,
  fecha_rq date null,
  tipo_principal text null,
  estado text null,
  descripcion_resumen text null,
  descripcion_cotizacion text null,
  cantidad_items integer not null default 0,
  origen text not null default 'excel',
  observaciones text null,
  prioridad text null,
  archivo_principal_path text null,
  archivo_principal_url text null,
  archivo_principal_meta jsonb not null default '[]'::jsonb,
  fotos_evidencia jsonb not null default '[]'::jsonb,
  adjuntos jsonb not null default '[]'::jsonb,
  extra_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint requerimientos_log_unique unique (cotizacion_codigo, centro_costos, rq_codigo)
);

create table if not exists public.requerimiento_items (
  id bigserial primary key,
  requerimiento_log_id bigint null references public.requerimientos_log(id) on delete cascade,
  cotizacion_codigo text not null,
  centro_costos text not null,
  rq_codigo text not null,
  cliente text null,
  unidad text null,
  solicitante text null,
  fecha_rq date null,
  tipo text null,
  tipo_limpio text null,
  tipo_obs text null,
  descripcion text not null,
  und text null,
  cant_rq numeric(18,4) null,
  ajuste numeric(18,4) null,
  atencion_real numeric(18,4) null,
  cant_stock numeric(18,4) null,
  compra numeric(18,4) null,
  costo_unitario_dolar numeric(18,6) null,
  costo_unitario_soles numeric(18,6) null,
  tc numeric(18,6) null,
  pu_soles_sin_igv numeric(18,6) null,
  costo_total_presupuestado_s numeric(18,6) null,
  costo_total_presupuestado_usd numeric(18,6) null,
  fecha_coti date null,
  estado text null,
  import_batch text null,
  source_row_hash text not null unique,
  raw_row jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.requerimiento_adjuntos (
  id bigserial primary key,
  requerimiento_log_id bigint not null references public.requerimientos_log(id) on delete cascade,
  requerimiento_item_id bigint null references public.requerimiento_items(id) on delete cascade,
  tipo text not null check (tipo in ('archivo', 'foto', 'evidencia', 'otro')),
  bucket text not null default 'requerimientos',
  storage_path text not null,
  public_url text null,
  file_name text null,
  mime_type text null,
  size_bytes bigint null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_requerimientos_log_centro_costos on public.requerimientos_log (centro_costos);
create index if not exists idx_requerimientos_log_rq_codigo on public.requerimientos_log (rq_codigo);
create index if not exists idx_requerimientos_log_cotizacion_codigo on public.requerimientos_log (cotizacion_codigo);
create index if not exists idx_requerimientos_items_centro_costos on public.requerimiento_items (centro_costos);
create index if not exists idx_requerimientos_items_rq_codigo on public.requerimiento_items (rq_codigo);
create index if not exists idx_requerimientos_items_cotizacion_codigo on public.requerimiento_items (cotizacion_codigo);
create index if not exists idx_requerimiento_adjuntos_log on public.requerimiento_adjuntos (requerimiento_log_id);

drop trigger if exists trg_requerimientos_log_updated_at on public.requerimientos_log;
create trigger trg_requerimientos_log_updated_at
before update on public.requerimientos_log
for each row
execute function public.set_updated_at();

drop trigger if exists trg_requerimiento_items_updated_at on public.requerimiento_items;
create trigger trg_requerimiento_items_updated_at
before update on public.requerimiento_items
for each row
execute function public.set_updated_at();

drop trigger if exists trg_requerimiento_adjuntos_updated_at on public.requerimiento_adjuntos;
create trigger trg_requerimiento_adjuntos_updated_at
before update on public.requerimiento_adjuntos
for each row
execute function public.set_updated_at();

create or replace function public.sync_requerimientos_log_from_items()
returns void
language plpgsql
as $$
begin
  insert into public.requerimientos_log (
    cotizacion_codigo,
    centro_costos,
    rq_codigo,
    cliente,
    unidad,
    solicitante,
    fecha_rq,
    tipo_principal,
    estado,
    descripcion_resumen,
    cantidad_items,
    origen
  )
  select
    i.cotizacion_codigo,
    i.centro_costos,
    i.rq_codigo,
    max(i.cliente) filter (where i.cliente is not null),
    max(i.unidad) filter (where i.unidad is not null),
    max(i.solicitante) filter (where i.solicitante is not null),
    min(i.fecha_rq),
    max(i.tipo) filter (where i.tipo is not null),
    max(i.estado) filter (where i.estado is not null),
    min(i.descripcion) filter (where i.descripcion is not null),
    count(*)::integer,
    'excel'
  from public.requerimiento_items i
  group by i.cotizacion_codigo, i.centro_costos, i.rq_codigo
  on conflict (cotizacion_codigo, centro_costos, rq_codigo) do update
  set
    cliente = excluded.cliente,
    unidad = excluded.unidad,
    solicitante = excluded.solicitante,
    fecha_rq = excluded.fecha_rq,
    tipo_principal = excluded.tipo_principal,
    estado = excluded.estado,
    descripcion_resumen = excluded.descripcion_resumen,
    cantidad_items = excluded.cantidad_items,
    updated_at = now();

  update public.requerimientos_log rl
  set
    cotizacion_id = c.id,
    cotizacion_codigo = coalesce(rl.cotizacion_codigo, c.cotizacion),
    descripcion_cotizacion = c.descripcion,
    updated_at = now()
  from public.cotizaciones c
  where
    (
      (rl.cotizacion_codigo is not null and c.cotizacion = rl.cotizacion_codigo)
      or (rl.centro_costos is not null and c.oc = rl.centro_costos)
    )
    and (
      rl.cotizacion_id is distinct from c.id
      or rl.descripcion_cotizacion is distinct from c.descripcion
    );

  update public.requerimiento_items i
  set
    requerimiento_log_id = rl.id,
    updated_at = now()
  from public.requerimientos_log rl
  where
    rl.cotizacion_codigo = i.cotizacion_codigo
    and rl.centro_costos = i.centro_costos
    and rl.rq_codigo = i.rq_codigo
    and i.requerimiento_log_id is distinct from rl.id;
end;
$$;

create or replace view public.vw_requerimientos_log as
select
  rl.id,
  rl.cotizacion_id,
  coalesce(c_match.cotizacion, rl.cotizacion_codigo) as cotizacion_codigo,
  rl.centro_costos,
  rl.rq_codigo,
  rl.cliente,
  rl.unidad,
  rl.solicitante,
  rl.fecha_rq,
  rl.tipo_principal,
  rl.estado,
  rl.descripcion_resumen,
  coalesce(c_match.descripcion, rl.descripcion_cotizacion) as descripcion_cotizacion,
  rl.cantidad_items,
  rl.origen,
  rl.observaciones,
  rl.prioridad,
  rl.archivo_principal_path,
  rl.archivo_principal_url,
  rl.archivo_principal_meta,
  rl.fotos_evidencia,
  rl.adjuntos,
  rl.extra_payload,
  rl.created_at,
  rl.updated_at
from public.requerimientos_log rl
left join lateral (
  select c.id, c.cotizacion, c.descripcion
  from public.cotizaciones c
  where
    (rl.cotizacion_codigo is not null and c.cotizacion = rl.cotizacion_codigo)
    or (rl.centro_costos is not null and c.oc = rl.centro_costos)
  order by
    case when c.cotizacion = rl.cotizacion_codigo then 0 else 1 end,
    c.id
  limit 1
) as c_match on true;

commit;
