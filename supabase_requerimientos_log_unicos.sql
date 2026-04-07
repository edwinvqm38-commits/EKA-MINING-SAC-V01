begin;

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
  fecha_entrega date null,
  tipo_servicio text null,
  area text null,
  estado text null,
  descripcion_cotizacion text null,
  cantidad_items integer not null default 0,
  origen text not null default 'manual',
  observaciones text null,
  import_alertas jsonb not null default '[]'::jsonb,
  extra_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint requerimientos_log_unique unique (cotizacion_codigo, centro_costos, rq_codigo)
);

alter table public.requerimientos_log add column if not exists fecha_entrega date null;
alter table public.requerimientos_log add column if not exists tipo_servicio text null;
alter table public.requerimientos_log add column if not exists area text null;
alter table public.requerimientos_log add column if not exists descripcion_cotizacion text null;
alter table public.requerimientos_log add column if not exists import_alertas jsonb not null default '[]'::jsonb;
alter table public.requerimientos_log add column if not exists extra_payload jsonb not null default '{}'::jsonb;

create index if not exists idx_requerimientos_log_rq on public.requerimientos_log (rq_codigo);
create index if not exists idx_requerimientos_log_cc on public.requerimientos_log (centro_costos);
create index if not exists idx_requerimientos_log_cot on public.requerimientos_log (cotizacion_codigo);

insert into public.requerimientos_log (
  cotizacion_codigo,
  centro_costos,
  rq_codigo,
  cliente,
  unidad,
  solicitante,
  fecha_rq,
  fecha_entrega,
  tipo_servicio,
  area,
  estado,
  descripcion_cotizacion,
  cantidad_items,
  origen,
  import_alertas,
  extra_payload
)
select
  base.cotizacion_codigo,
  base.centro_costos,
  base.rq_codigo,
  base.cliente,
  base.unidad,
  base.solicitante,
  base.fecha_rq,
  cot.fecha_entrega,
  coalesce(cot.tipo_servicio, base.tipo_servicio) as tipo_servicio,
  null::text as area,
  case
    when nullif(trim(base.estado), '') is not null then base.estado
    else 'REGISTRADO'
  end as estado,
  coalesce(cot.descripcion, base.descripcion_cotizacion, '[SIN DESCRIPCION DE COTIZACION]') as descripcion_cotizacion,
  base.cantidad_items,
  'excel',
  base.import_alertas,
  jsonb_build_object(
    'origen_migracion', 'requerimiento_items',
    'fecha_migracion', now(),
    'rq_unico', true
  )
from (
  select
    i.cotizacion_codigo,
    i.centro_costos,
    i.rq_codigo,
    max(i.cliente) filter (where i.cliente is not null and trim(i.cliente) <> '') as cliente,
    max(i.unidad) filter (where i.unidad is not null and trim(i.unidad) <> '') as unidad,
    max(i.solicitante) filter (where i.solicitante is not null and trim(i.solicitante) <> '') as solicitante,
    min(i.fecha_rq) as fecha_rq,
    max(i.tipo_limpio) filter (where i.tipo_limpio is not null and trim(i.tipo_limpio) <> '') as tipo_servicio,
    max(i.estado) filter (where i.estado is not null and trim(i.estado) <> '') as estado,
    count(*)::integer as cantidad_items,
    coalesce(
      jsonb_agg(distinct alert.value) filter (where alert.value is not null),
      '[]'::jsonb
    ) as import_alertas,
    null::text as descripcion_cotizacion
  from public.requerimiento_items i
  left join lateral jsonb_array_elements_text(coalesce(i.import_alertas, '[]'::jsonb)) as alert(value) on true
  where nullif(trim(i.rq_codigo), '') is not null
  group by i.cotizacion_codigo, i.centro_costos, i.rq_codigo
) as base
left join lateral (
  select
    c.id,
    c.cotizacion,
    c.oc,
    c.descripcion,
    c.fecha_entrega,
    c.tipo_servicio
  from public.cotizaciones c
  where
    (base.cotizacion_codigo is not null and c.cotizacion = base.cotizacion_codigo)
    or (base.centro_costos is not null and c.oc = base.centro_costos)
  order by
    case when c.cotizacion = base.cotizacion_codigo then 0 else 1 end,
    c.id
  limit 1
) as cot on true
on conflict (cotizacion_codigo, centro_costos, rq_codigo) do update
set
  cliente = excluded.cliente,
  unidad = excluded.unidad,
  solicitante = excluded.solicitante,
  fecha_rq = excluded.fecha_rq,
  fecha_entrega = excluded.fecha_entrega,
  tipo_servicio = excluded.tipo_servicio,
  estado = excluded.estado,
  descripcion_cotizacion = excluded.descripcion_cotizacion,
  cantidad_items = excluded.cantidad_items,
  import_alertas = excluded.import_alertas,
  extra_payload = coalesce(public.requerimientos_log.extra_payload, '{}'::jsonb) || excluded.extra_payload,
  updated_at = now();

update public.requerimientos_log rl
set cotizacion_id = c.id,
    updated_at = now()
from public.cotizaciones c
where
  (
    (rl.cotizacion_codigo is not null and c.cotizacion = rl.cotizacion_codigo)
    or (rl.centro_costos is not null and c.oc = rl.centro_costos)
  )
  and rl.cotizacion_id is distinct from c.id;

update public.requerimiento_items i
set requerimiento_log_id = rl.id,
    updated_at = now()
from public.requerimientos_log rl
where
  rl.cotizacion_codigo = i.cotizacion_codigo
  and rl.centro_costos = i.centro_costos
  and rl.rq_codigo = i.rq_codigo
  and i.requerimiento_log_id is distinct from rl.id;

update public.requerimientos_log
set import_alertas = coalesce(import_alertas, '[]'::jsonb)
where import_alertas is null;

update public.requerimientos_log
set import_alertas =
  coalesce(import_alertas, '[]'::jsonb)
  ||
  case
    when (
      coalesce(nullif(trim(centro_costos), ''), '') like 'SIN_CC::%'
      or nullif(trim(centro_costos), '') is null
      or nullif(trim(descripcion_cotizacion), '') is null
      or nullif(trim(tipo_servicio), '') is null
      or nullif(trim(estado), '') is null
    )
    then jsonb_build_array('REQUIERE_REVISION_LOG')
    else '[]'::jsonb
  end
where true;

commit;
