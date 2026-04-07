begin;

create unique index if not exists idx_cotizaciones_cotizacion_unique
on public.cotizaciones (upper(trim(cotizacion)));

create or replace function public.extract_cotizacion_sequence(code text)
returns integer
language sql
immutable
as $$
  select
    case
      when code ~ '^FOR-EKA-PRO-3_[0-9]{4}-[0-9]{3}$'
      then substring(code from '([0-9]{3})$')::integer
      else null
    end;
$$;

create or replace function public.suggest_next_cotizacion_codigo(target_year integer default null)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  use_year integer := coalesce(target_year, extract(year from now())::integer);
  current_max integer := 0;
begin
  if not public.current_profile_active() then
    raise exception 'No tienes un perfil activo para usar esta función.';
  end if;

  perform pg_advisory_xact_lock(hashtext('cotizacion-seq-' || use_year::text));

  select coalesce(
           max((regexp_match(c.cotizacion, ('^FOR-EKA-PRO-3_' || use_year::text || '-([0-9]{3})$')))[1]::integer),
           0
         )
    into current_max
  from public.cotizaciones c
  where c.cotizacion ~ ('^FOR-EKA-PRO-3_' || use_year::text || '-[0-9]{3}$');

  return format('FOR-EKA-PRO-3_%s-%s', use_year, lpad((current_max + 1)::text, 3, '0'));
end;
$$;

create or replace function public.create_cotizacion_secure(payload jsonb)
returns public.cotizaciones
language plpgsql
security definer
set search_path = public
as $$
declare
  requested_code text := upper(trim(coalesce(payload->>'cotizacion', '')));
  final_code text;
  code_year integer;
  generated_year integer;
  duplicate_exists boolean;
  new_row public.cotizaciones%rowtype;
begin
  if not public.current_profile_active() then
    raise exception 'No tienes un perfil activo.';
  end if;

  if public.current_app_role() not in ('admin', 'comercial') then
    raise exception 'No tienes permisos para crear cotizaciones.';
  end if;

  if requested_code = '' then
    generated_year := coalesce(
      nullif(payload->>'anio', '')::integer,
      nullif(split_part(coalesce(payload->>'fecha_oc', ''), '-', 1), '')::integer,
      extract(year from now())::integer
    );
    final_code := public.suggest_next_cotizacion_codigo(generated_year);
  else
    if requested_code !~ '^FOR-EKA-PRO-3_[0-9]{4}-[0-9]{3}$' then
      raise exception 'El código de cotización debe cumplir el formato FOR-EKA-PRO-3_YYYY-NNN';
    end if;

    code_year := substring(requested_code from 'FOR-EKA-PRO-3_([0-9]{4})-[0-9]{3}')::integer;
    perform pg_advisory_xact_lock(hashtext('cotizacion-seq-' || code_year::text));

    select exists(
      select 1
      from public.cotizaciones c
      where upper(trim(c.cotizacion)) = requested_code
    )
    into duplicate_exists;

    if duplicate_exists then
      raise exception 'Ya existe la cotización %, utiliza otro código.', requested_code;
    end if;

    final_code := requested_code;
  end if;

  insert into public.cotizaciones (
    cotizacion,
    analisis_economico_url,
    fecha_oc,
    oc,
    descripcion,
    observacion,
    prioridad,
    tipo_servicio,
    status_cot,
    solicitado_por,
    correo_solicitante,
    telefono_solicitante,
    cliente,
    unidad_minera,
    responsable_tecnico,
    correo_responsable_tecnico,
    telefono_responsable_tecnico,
    responsable_economico,
    correo_responsable_economico,
    telefono_responsable_economico,
    avance_cotizacion,
    fecha_invitacion,
    fecha_confirmacion,
    fecha_visita_tecnica,
    fecha_consultas,
    fecha_abs_consultas,
    fecha_entrega,
    fecha_entregada,
    fecha_observada,
    fecha_final,
    oferta_sol,
    oferta_usd,
    tipo_cambio,
    status_oferta
  )
  values (
    final_code,
    nullif(trim(payload->>'analisis_economico_url'), ''),
    nullif(trim(payload->>'fecha_oc'), '')::date,
    nullif(trim(payload->>'oc'), ''),
    nullif(trim(payload->>'descripcion'), ''),
    nullif(trim(payload->>'observacion'), ''),
    nullif(trim(payload->>'prioridad'), ''),
    nullif(trim(payload->>'tipo_servicio'), ''),
    nullif(trim(payload->>'status_cot'), ''),
    nullif(trim(payload->>'solicitado_por'), ''),
    nullif(trim(payload->>'correo_solicitante'), ''),
    nullif(trim(payload->>'telefono_solicitante'), ''),
    nullif(trim(payload->>'cliente'), ''),
    nullif(trim(payload->>'unidad_minera'), ''),
    nullif(trim(payload->>'responsable_tecnico'), ''),
    nullif(trim(payload->>'correo_responsable_tecnico'), ''),
    nullif(trim(payload->>'telefono_responsable_tecnico'), ''),
    nullif(trim(payload->>'responsable_economico'), ''),
    nullif(trim(payload->>'correo_responsable_economico'), ''),
    nullif(trim(payload->>'telefono_responsable_economico'), ''),
    coalesce(nullif(trim(payload->>'avance_cotizacion'), '')::numeric, 0),
    nullif(trim(payload->>'fecha_invitacion'), '')::date,
    nullif(trim(payload->>'fecha_confirmacion'), '')::date,
    nullif(trim(payload->>'fecha_visita_tecnica'), '')::date,
    nullif(trim(payload->>'fecha_consultas'), '')::date,
    nullif(trim(payload->>'fecha_abs_consultas'), '')::date,
    nullif(trim(payload->>'fecha_entrega'), '')::date,
    nullif(trim(payload->>'fecha_entregada'), '')::date,
    nullif(trim(payload->>'fecha_observada'), '')::date,
    nullif(trim(payload->>'fecha_final'), '')::date,
    nullif(trim(payload->>'oferta_sol'), '')::numeric,
    nullif(trim(payload->>'oferta_usd'), '')::numeric,
    nullif(trim(payload->>'tipo_cambio'), '')::numeric,
    nullif(trim(payload->>'status_oferta'), '')
  )
  returning *
  into new_row;

  return new_row;
end;
$$;

grant execute on function public.current_app_role() to authenticated;
grant execute on function public.current_profile_active() to authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.suggest_next_cotizacion_codigo(integer) to authenticated;
grant execute on function public.create_cotizacion_secure(jsonb) to authenticated;

commit;
