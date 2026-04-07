begin;

create or replace function public.try_parse_import_date(input_text text)
returns date
language sql
immutable
as $$
  select
    case
      when nullif(trim(input_text), '') is null then null
      when trim(input_text) ~ '^\d{4}-\d{2}-\d{2}$' then trim(input_text)::date
      when trim(input_text) ~ '^\d{5}(\.\d+)?$' then (date '1899-12-30' + floor(trim(input_text)::numeric)::int)
      else null
    end
$$;

alter table public.requerimiento_items
  add column if not exists import_alertas jsonb not null default '[]'::jsonb;

alter table public.requerimientos_log
  add column if not exists import_alertas jsonb not null default '[]'::jsonb;

with stage_prepared as (
  select
    nullif(trim(cotizacion_codigo), '') as cotizacion_codigo,
    coalesce(
      nullif(trim(centro_costos), ''),
      concat('SIN_CC::', coalesce(nullif(trim(rq_codigo), ''), coalesce(nullif(trim(cotizacion_codigo), ''), 'SIN_REFERENCIA')))
    ) as centro_costos,
    nullif(trim(rq_codigo), '') as rq_codigo,
    nullif(trim(cliente), '') as cliente,
    nullif(trim(unidad), '') as unidad,
    nullif(trim(solicitante), '') as solicitante,
    public.try_parse_import_date(fecha_rq) as fecha_rq,
    nullif(trim(tipo), '') as tipo,
    nullif(trim(tipo_limpio), '') as tipo_limpio,
    nullif(trim(tipo_obs), '') as tipo_obs,
    coalesce(
      nullif(trim(descripcion), ''),
      concat('[SIN DESCRIPCION] ', coalesce(nullif(trim(rq_codigo), ''), 'RQ-SIN-CODIGO'))
    ) as descripcion,
    nullif(trim(und), '') as und,
    case when trim(coalesce(cant_rq, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(cant_rq), ',', '.')::numeric(18,4) else null end as cant_rq,
    case when trim(coalesce(ajuste, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(ajuste), ',', '.')::numeric(18,4) else null end as ajuste,
    case when trim(coalesce(atencion_real, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(atencion_real), ',', '.')::numeric(18,4) else null end as atencion_real,
    case when trim(coalesce(cant_stock, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(cant_stock), ',', '.')::numeric(18,4) else null end as cant_stock,
    case when trim(coalesce(compra, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(compra), ',', '.')::numeric(18,4) else null end as compra,
    case when trim(coalesce(costo_unitario_dolar, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(costo_unitario_dolar), ',', '.')::numeric(18,6) else null end as costo_unitario_dolar,
    case when trim(coalesce(costo_unitario_soles, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(costo_unitario_soles), ',', '.')::numeric(18,6) else null end as costo_unitario_soles,
    case when trim(coalesce(tc, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(tc), ',', '.')::numeric(18,6) else null end as tc,
    case when trim(coalesce(pu_soles_sin_igv, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(pu_soles_sin_igv), ',', '.')::numeric(18,6) else null end as pu_soles_sin_igv,
    case when trim(coalesce(costo_total_presupuestado_s, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(costo_total_presupuestado_s), ',', '.')::numeric(18,6) else null end as costo_total_presupuestado_s,
    case when trim(coalesce(costo_total_presupuestado_usd, '')) ~ '^[-+]?\d+([.,]\d+)?$' then replace(trim(costo_total_presupuestado_usd), ',', '.')::numeric(18,6) else null end as costo_total_presupuestado_usd,
    public.try_parse_import_date(fecha_coti) as fecha_coti,
    nullif(trim(estado), '') as estado,
    nullif(trim(import_batch), '') as import_batch,
    nullif(trim(source_row_hash), '') as source_row_hash,
    coalesce(raw_row, '{}'::jsonb) as raw_row,
    to_jsonb(array_remove(array[
      case when nullif(trim(centro_costos), '') is null then 'CENTRO_COSTOS_VACIO' end,
      case when nullif(trim(descripcion), '') is null then 'DESCRIPCION_VACIA' end,
      case when nullif(trim(fecha_coti), '') is not null and public.try_parse_import_date(fecha_coti) is null then 'FECHA_COTI_INVALIDA:' || trim(fecha_coti) end,
      case when nullif(trim(fecha_coti), '') ~ '^\d{5}(\.\d+)?$' then 'FECHA_COTI_EXCEL_SERIAL:' || trim(fecha_coti) end,
      case when nullif(trim(fecha_rq), '') is not null and public.try_parse_import_date(fecha_rq) is null then 'FECHA_RQ_INVALIDA:' || trim(fecha_rq) end,
      case when nullif(trim(pu_soles_sin_igv), '') is not null and not trim(pu_soles_sin_igv) ~ '^[-+]?\d+([.,]\d+)?$' then 'PU_SOLES_SIN_IGV_NO_NUMERICO:' || trim(pu_soles_sin_igv) end
    ], null)) as import_alertas,
    row_number() over (
      partition by nullif(trim(source_row_hash), '')
      order by
        case when coalesce(raw_row, '{}'::jsonb) <> '{}'::jsonb then 0 else 1 end,
        coalesce(public.try_parse_import_date(fecha_rq), date '1900-01-01') desc,
        coalesce(public.try_parse_import_date(fecha_coti), date '1900-01-01') desc
    ) as source_row_rank
  from public.requerimiento_items_stage
  where nullif(trim(source_row_hash), '') is not null
),
stage_deduped as (
  select *
  from stage_prepared
  where source_row_rank = 1
)
insert into public.requerimiento_items (
  cotizacion_codigo,
  centro_costos,
  rq_codigo,
  cliente,
  unidad,
  solicitante,
  fecha_rq,
  tipo,
  tipo_limpio,
  tipo_obs,
  descripcion,
  und,
  cant_rq,
  ajuste,
  atencion_real,
  cant_stock,
  compra,
  costo_unitario_dolar,
  costo_unitario_soles,
  tc,
  pu_soles_sin_igv,
  costo_total_presupuestado_s,
  costo_total_presupuestado_usd,
  fecha_coti,
  estado,
  import_batch,
  source_row_hash,
  raw_row,
  import_alertas
)
select
  cotizacion_codigo,
  centro_costos,
  rq_codigo,
  cliente,
  unidad,
  solicitante,
  fecha_rq,
  tipo,
  tipo_limpio,
  tipo_obs,
  descripcion,
  und,
  cant_rq,
  ajuste,
  atencion_real,
  cant_stock,
  compra,
  costo_unitario_dolar,
  costo_unitario_soles,
  tc,
  pu_soles_sin_igv,
  costo_total_presupuestado_s,
  costo_total_presupuestado_usd,
  fecha_coti,
  estado,
  import_batch,
  source_row_hash,
  raw_row,
  import_alertas
from stage_deduped
on conflict (source_row_hash) do update
set
  cotizacion_codigo = excluded.cotizacion_codigo,
  centro_costos = excluded.centro_costos,
  rq_codigo = excluded.rq_codigo,
  cliente = excluded.cliente,
  unidad = excluded.unidad,
  solicitante = excluded.solicitante,
  fecha_rq = excluded.fecha_rq,
  tipo = excluded.tipo,
  tipo_limpio = excluded.tipo_limpio,
  tipo_obs = excluded.tipo_obs,
  descripcion = excluded.descripcion,
  und = excluded.und,
  cant_rq = excluded.cant_rq,
  ajuste = excluded.ajuste,
  atencion_real = excluded.atencion_real,
  cant_stock = excluded.cant_stock,
  compra = excluded.compra,
  costo_unitario_dolar = excluded.costo_unitario_dolar,
  costo_unitario_soles = excluded.costo_unitario_soles,
  tc = excluded.tc,
  pu_soles_sin_igv = excluded.pu_soles_sin_igv,
  costo_total_presupuestado_s = excluded.costo_total_presupuestado_s,
  costo_total_presupuestado_usd = excluded.costo_total_presupuestado_usd,
  fecha_coti = excluded.fecha_coti,
  estado = excluded.estado,
  import_batch = excluded.import_batch,
  raw_row = excluded.raw_row,
  import_alertas = excluded.import_alertas,
  updated_at = now();

update public.requerimientos_log rl
set import_alertas = coalesce(import_alertas, '[]'::jsonb)
where import_alertas is null;

with log_base as (
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
    coalesce(jsonb_agg(distinct alert.value) filter (where alert.value is not null), '[]'::jsonb) as import_alertas
  from public.requerimiento_items i
  left join lateral jsonb_array_elements_text(coalesce(i.import_alertas, '[]'::jsonb)) as alert(value) on true
  where nullif(trim(i.rq_codigo), '') is not null
  group by i.cotizacion_codigo, i.centro_costos, i.rq_codigo
),
log_base_ranked as (
  select
    log_base.*,
    row_number() over (
      partition by log_base.cotizacion_codigo, log_base.centro_costos, log_base.rq_codigo
      order by log_base.fecha_rq nulls last, log_base.cantidad_items desc, log_base.rq_codigo
    ) as log_row_rank
  from log_base
),
log_base_deduped as (
  select *
  from log_base_ranked
  where log_row_rank = 1
)
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
  coalesce(base.estado, 'REGISTRADO') as estado,
  coalesce(cot.descripcion, '[SIN DESCRIPCION DE COTIZACION]') as descripcion_cotizacion,
  base.cantidad_items,
  'excel',
  coalesce(base.import_alertas, '[]'::jsonb),
  jsonb_build_object(
    'origen_migracion', 'requerimiento_items',
    'fecha_migracion', now(),
    'rq_unico', true
  )
from log_base_deduped as base
left join lateral (
  select c.id, c.cotizacion, c.oc, c.descripcion, c.fecha_entrega, c.tipo_servicio
  from public.cotizaciones c
  where
    (base.cotizacion_codigo is not null and c.cotizacion = base.cotizacion_codigo)
    or (base.centro_costos is not null and c.oc = base.centro_costos)
  order by case when c.cotizacion = base.cotizacion_codigo then 0 else 1 end, c.id
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
  end;

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

alter table public.requerimiento_items enable row level security;
alter table public.requerimiento_items_stage enable row level security;
alter table public.requerimientos_log enable row level security;

drop policy if exists "read requerimiento_items" on public.requerimiento_items;
drop policy if exists "read requerimiento_items_stage" on public.requerimiento_items_stage;
drop policy if exists "read requerimientos_log" on public.requerimientos_log;

create policy "read requerimiento_items"
on public.requerimiento_items
for select
to anon
using (true);

create policy "read requerimiento_items_stage"
on public.requerimiento_items_stage
for select
to anon
using (true);

create policy "read requerimientos_log"
on public.requerimientos_log
for select
to anon
using (true);

commit;
