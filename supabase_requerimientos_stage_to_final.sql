begin;

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
  raw_row
)
select
  nullif(trim(cotizacion_codigo), ''),
  nullif(trim(centro_costos), ''),
  nullif(trim(rq_codigo), ''),
  nullif(trim(cliente), ''),
  nullif(trim(unidad), ''),
  nullif(trim(solicitante), ''),
  case when nullif(trim(fecha_rq), '') is null then null else nullif(trim(fecha_rq), '')::date end,
  nullif(trim(tipo), ''),
  nullif(trim(tipo_limpio), ''),
  nullif(trim(tipo_obs), ''),
  nullif(trim(descripcion), ''),
  nullif(trim(und), ''),
  case when nullif(trim(cant_rq), '') is null then null else nullif(trim(cant_rq), '')::numeric(18,4) end,
  case when nullif(trim(ajuste), '') is null then null else nullif(trim(ajuste), '')::numeric(18,4) end,
  case when nullif(trim(atencion_real), '') is null then null else nullif(trim(atencion_real), '')::numeric(18,4) end,
  case when nullif(trim(cant_stock), '') is null then null else nullif(trim(cant_stock), '')::numeric(18,4) end,
  case when nullif(trim(compra), '') is null then null else nullif(trim(compra), '')::numeric(18,4) end,
  case when nullif(trim(costo_unitario_dolar), '') is null then null else nullif(trim(costo_unitario_dolar), '')::numeric(18,6) end,
  case when nullif(trim(costo_unitario_soles), '') is null then null else nullif(trim(costo_unitario_soles), '')::numeric(18,6) end,
  case when nullif(trim(tc), '') is null then null else nullif(trim(tc), '')::numeric(18,6) end,
  case when nullif(trim(pu_soles_sin_igv), '') is null then null else nullif(trim(pu_soles_sin_igv), '')::numeric(18,6) end,
  case when nullif(trim(costo_total_presupuestado_s), '') is null then null else nullif(trim(costo_total_presupuestado_s), '')::numeric(18,6) end,
  case when nullif(trim(costo_total_presupuestado_usd), '') is null then null else nullif(trim(costo_total_presupuestado_usd), '')::numeric(18,6) end,
  case when nullif(trim(fecha_coti), '') is null then null else nullif(trim(fecha_coti), '')::date end,
  nullif(trim(estado), ''),
  nullif(trim(import_batch), ''),
  nullif(trim(source_row_hash), ''),
  coalesce(raw_row, '{}'::jsonb)
from public.requerimiento_items_stage
on conflict (source_row_hash) do nothing;

select public.sync_requerimientos_log_from_items();

commit;
