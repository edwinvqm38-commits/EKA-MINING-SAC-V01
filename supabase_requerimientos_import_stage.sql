begin;

create table if not exists public.requerimiento_items_stage (
  cotizacion_codigo text,
  centro_costos text,
  rq_codigo text,
  cliente text,
  unidad text,
  solicitante text,
  fecha_rq text,
  tipo text,
  tipo_limpio text,
  tipo_obs text,
  descripcion text,
  und text,
  cant_rq text,
  ajuste text,
  atencion_real text,
  cant_stock text,
  compra text,
  costo_unitario_dolar text,
  costo_unitario_soles text,
  tc text,
  pu_soles_sin_igv text,
  costo_total_presupuestado_s text,
  costo_total_presupuestado_usd text,
  fecha_coti text,
  estado text,
  import_batch text,
  source_row_hash text,
  raw_row jsonb
);

truncate table public.requerimiento_items_stage;

commit;
