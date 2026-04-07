begin;

alter table public.catalog_opciones enable row level security;
alter table public.contactos enable row level security;
alter table public.cotizaciones enable row level security;
alter table public.requerimientos_log enable row level security;
alter table public.requerimiento_items enable row level security;
alter table public.requerimiento_adjuntos enable row level security;

drop policy if exists "public read catalog_opciones" on public.catalog_opciones;
drop policy if exists "public read contactos" on public.contactos;
drop policy if exists "public read cotizaciones" on public.cotizaciones;
drop policy if exists "public read requerimiento_items" on public.requerimiento_items;
drop policy if exists "public read requerimientos_log" on public.requerimientos_log;

drop policy if exists "auth read catalog_opciones" on public.catalog_opciones;
drop policy if exists "auth manage catalog_opciones" on public.catalog_opciones;
drop policy if exists "auth read contactos" on public.contactos;
drop policy if exists "auth manage contactos" on public.contactos;
drop policy if exists "auth read cotizaciones" on public.cotizaciones;
drop policy if exists "auth insert cotizaciones" on public.cotizaciones;
drop policy if exists "auth update cotizaciones" on public.cotizaciones;
drop policy if exists "auth read requerimientos_log" on public.requerimientos_log;
drop policy if exists "auth insert requerimientos_log" on public.requerimientos_log;
drop policy if exists "auth update requerimientos_log" on public.requerimientos_log;
drop policy if exists "auth read requerimiento_items" on public.requerimiento_items;
drop policy if exists "auth manage requerimiento_items" on public.requerimiento_items;
drop policy if exists "auth read requerimiento_adjuntos" on public.requerimiento_adjuntos;
drop policy if exists "auth manage requerimiento_adjuntos" on public.requerimiento_adjuntos;

create policy "auth read catalog_opciones"
on public.catalog_opciones
for select
to authenticated
using (public.current_profile_active());

create policy "auth manage catalog_opciones"
on public.catalog_opciones
for all
to authenticated
using (public.current_app_role() in ('admin', 'comercial'))
with check (public.current_app_role() in ('admin', 'comercial'));

create policy "auth read contactos"
on public.contactos
for select
to authenticated
using (public.current_profile_active());

create policy "auth manage contactos"
on public.contactos
for all
to authenticated
using (public.current_app_role() in ('admin', 'comercial'))
with check (public.current_app_role() in ('admin', 'comercial'));

create policy "auth read cotizaciones"
on public.cotizaciones
for select
to authenticated
using (public.current_profile_active());

create policy "auth insert cotizaciones"
on public.cotizaciones
for insert
to authenticated
with check (public.current_app_role() in ('admin', 'comercial'));

create policy "auth update cotizaciones"
on public.cotizaciones
for update
to authenticated
using (public.current_app_role() in ('admin', 'comercial'))
with check (public.current_app_role() in ('admin', 'comercial'));

create policy "auth read requerimientos_log"
on public.requerimientos_log
for select
to authenticated
using (public.current_profile_active());

create policy "auth insert requerimientos_log"
on public.requerimientos_log
for insert
to authenticated
with check (public.current_app_role() in ('admin', 'comercial', 'logistica'));

create policy "auth update requerimientos_log"
on public.requerimientos_log
for update
to authenticated
using (public.current_app_role() in ('admin', 'comercial', 'logistica'))
with check (public.current_app_role() in ('admin', 'comercial', 'logistica'));

create policy "auth read requerimiento_items"
on public.requerimiento_items
for select
to authenticated
using (public.current_profile_active());

create policy "auth manage requerimiento_items"
on public.requerimiento_items
for all
to authenticated
using (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'))
with check (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'));

create policy "auth read requerimiento_adjuntos"
on public.requerimiento_adjuntos
for select
to authenticated
using (public.current_profile_active());

create policy "auth manage requerimiento_adjuntos"
on public.requerimiento_adjuntos
for all
to authenticated
using (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'))
with check (public.current_app_role() in ('admin', 'comercial', 'tecnico', 'logistica'));

commit;
