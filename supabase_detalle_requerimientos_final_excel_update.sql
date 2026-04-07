begin;

create table if not exists public.requerimiento_items (
  id bigserial primary key
);

create table if not exists public.requerimiento_items_stage (
  id bigserial primary key
);

alter table public.requerimiento_items
  add column if not exists item integer null,
  add column if not exists area text null,
  add column if not exists tipo_servicio text null,
  add column if not exists tipo_flag boolean null,
  add column if not exists codigo text null,
  add column if not exists ficha_tecnica text null,
  add column if not exists observacion text null,
  add column if not exists fotos jsonb not null default '[]'::jsonb,
  add column if not exists factor_eq_herr numeric(18,6) null,
  add column if not exists moneda text null,
  add column if not exists a_suministrar text null,
  add column if not exists ficha_tecnica_a_suministrar text null,
  add column if not exists estado_proveedor text null,
  add column if not exists condicion_pago text null,
  add column if not exists tiempo_entrega text null,
  add column if not exists vb_tecnico text null,
  add column if not exists f_aprob_tecnico date null,
  add column if not exists vb_economico text null,
  add column if not exists f_aprob_economico date null,
  add column if not exists vb_gerencia text null,
  add column if not exists f_aprob_gerencia date null,
  add column if not exists logistica_compra text null,
  add column if not exists f_compra date null,
  add column if not exists oc text null,
  add column if not exists f_entrega date null,
  add column if not exists guia_remision text null,
  add column if not exists archivo_guia jsonb not null default '[]'::jsonb;

alter table public.requerimiento_items_stage
  add column if not exists item text null,
  add column if not exists area text null,
  add column if not exists tipo_servicio text null,
  add column if not exists tipo_flag text null,
  add column if not exists codigo text null,
  add column if not exists ficha_tecnica text null,
  add column if not exists observacion text null,
  add column if not exists fotos text null,
  add column if not exists factor_eq_herr text null,
  add column if not exists moneda text null,
  add column if not exists a_suministrar text null,
  add column if not exists ficha_tecnica_a_suministrar text null,
  add column if not exists estado_proveedor text null,
  add column if not exists condicion_pago text null,
  add column if not exists tiempo_entrega text null,
  add column if not exists vb_tecnico text null,
  add column if not exists f_aprob_tecnico text null,
  add column if not exists vb_economico text null,
  add column if not exists f_aprob_economico text null,
  add column if not exists vb_gerencia text null,
  add column if not exists f_aprob_gerencia text null,
  add column if not exists logistica_compra text null,
  add column if not exists f_compra text null,
  add column if not exists oc text null,
  add column if not exists f_entrega text null,
  add column if not exists guia_remision text null,
  add column if not exists archivo_guia text null;

create index if not exists idx_requerimiento_items_item on public.requerimiento_items (item);
create index if not exists idx_requerimiento_items_area on public.requerimiento_items (area);
create index if not exists idx_requerimiento_items_tipo_servicio on public.requerimiento_items (tipo_servicio);
create index if not exists idx_requerimiento_items_oc on public.requerimiento_items (oc);

comment on column public.requerimiento_items.tipo_flag is 'Columna vacia del Excel ubicada entre TIPO y CODIGO. Se conserva provisionalmente como boolean.';
comment on column public.requerimiento_items.f_aprob_tecnico is 'Fecha de aprobacion asociada a V.B. TECNICO.';
comment on column public.requerimiento_items.f_aprob_economico is 'Fecha de aprobacion asociada a V.B. ECONOMICO.';
comment on column public.requerimiento_items.f_aprob_gerencia is 'Fecha de aprobacion asociada a V.B. GERENCIA.';
comment on column public.requerimiento_items.archivo_guia is 'Columna flexible para guardar url, metadata o lista de archivos de guia.';
comment on column public.requerimiento_items.fotos is 'Columna flexible para guardar urls o metadata de fotos.';

create or replace view public.vw_requerimiento_items_detalle as
select
  ri.id,
  ri.item,
  ri.area,
  ri.tipo_servicio,
  ri.cliente,
  ri.unidad,
  ri.solicitante,
  ri.cotizacion_codigo,
  ri.centro_costos,
  ri.fecha_rq,
  ri.rq_codigo,
  ri.tipo,
  ri.tipo_flag,
  ri.codigo,
  ri.descripcion,
  ri.ficha_tecnica,
  ri.observacion,
  ri.fotos,
  ri.und,
  ri.cant_rq,
  ri.ajuste,
  ri.atencion_real,
  ri.cant_stock,
  ri.compra,
  ri.costo_unitario_dolar,
  ri.costo_unitario_soles,
  ri.tc,
  ri.factor_eq_herr,
  ri.pu_soles_sin_igv,
  ri.costo_total_presupuestado_s,
  ri.costo_total_presupuestado_usd,
  ri.moneda,
  ri.fecha_coti,
  ri.estado,
  ri.a_suministrar,
  ri.ficha_tecnica_a_suministrar,
  ri.estado_proveedor,
  ri.condicion_pago,
  ri.tiempo_entrega,
  ri.vb_tecnico,
  ri.f_aprob_tecnico,
  ri.vb_economico,
  ri.f_aprob_economico,
  ri.vb_gerencia,
  ri.f_aprob_gerencia,
  ri.logistica_compra,
  ri.f_compra,
  ri.oc,
  ri.f_entrega,
  ri.guia_remision,
  ri.archivo_guia,
  ri.import_alertas,
  ri.fuente,
  ri.created_at,
  ri.updated_at
from (
  select
    i.*,
    'FINAL'::text as fuente
  from public.requerimiento_items i
) ri;

alter table public.requerimiento_items enable row level security;

drop policy if exists "read requerimiento_items" on public.requerimiento_items;
create policy "read requerimiento_items"
on public.requerimiento_items
for select
to anon
using (true);

commit;
