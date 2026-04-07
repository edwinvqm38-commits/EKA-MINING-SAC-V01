begin;

alter table public.requerimiento_items
  add column if not exists ficha_tecnica_files jsonb not null default '[]'::jsonb,
  add column if not exists ficha_tecnica_a_suministrar_files jsonb not null default '[]'::jsonb,
  add column if not exists archivo_guia_files jsonb not null default '[]'::jsonb;

update public.requerimiento_items
set ficha_tecnica_files =
  case
    when ficha_tecnica is null or trim(ficha_tecnica) = '' then '[]'::jsonb
    else jsonb_build_array(jsonb_build_object('name', ficha_tecnica, 'url', ficha_tecnica))
  end
where ficha_tecnica_files = '[]'::jsonb;

update public.requerimiento_items
set ficha_tecnica_a_suministrar_files =
  case
    when ficha_tecnica_a_suministrar is null or trim(ficha_tecnica_a_suministrar) = '' then '[]'::jsonb
    else jsonb_build_array(jsonb_build_object('name', ficha_tecnica_a_suministrar, 'url', ficha_tecnica_a_suministrar))
  end
where ficha_tecnica_a_suministrar_files = '[]'::jsonb;

update public.requerimiento_items
set archivo_guia_files =
  case
    when archivo_guia is null or archivo_guia = '[]'::jsonb then '[]'::jsonb
    else
      case
        when jsonb_typeof(archivo_guia) = 'array' then archivo_guia
        else jsonb_build_array(archivo_guia)
      end
  end
where archivo_guia_files = '[]'::jsonb;

comment on column public.requerimiento_items.ficha_tecnica_files is 'Adjuntos multiples para FICHA TECNICA: pdf, imagenes, word u otros.';
comment on column public.requerimiento_items.fotos is 'Adjuntos multiples para FOTOS: imagenes, pdf u otros.';
comment on column public.requerimiento_items.ficha_tecnica_a_suministrar_files is 'Adjuntos multiples para FICHA TECNICA A SUMINISTRAR.';
comment on column public.requerimiento_items.archivo_guia_files is 'Adjuntos multiples para ARCHIVO GUIA.';

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
  ri.ficha_tecnica_files as ficha_tecnica,
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
  ri.ficha_tecnica_a_suministrar_files as ficha_tecnica_a_suministrar,
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
  ri.archivo_guia_files as archivo_guia,
  ri.import_alertas,
  'FINAL'::text as fuente,
  ri.created_at,
  ri.updated_at
from public.requerimiento_items ri;

commit;
