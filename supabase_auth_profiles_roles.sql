begin;

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text null,
  full_name text null,
  role text not null default 'consulta',
  active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_profiles_role_check check (
    role in ('admin', 'comercial', 'tecnico', 'logistica', 'consulta')
  )
);

create unique index if not exists idx_user_profiles_email_unique
on public.user_profiles (lower(email))
where email is not null;

drop trigger if exists trg_user_profiles_updated_at on public.user_profiles;
create trigger trg_user_profiles_updated_at
before update on public.user_profiles
for each row
execute function public.set_updated_at();

alter table public.user_profiles enable row level security;

create or replace function public.current_app_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (
      select up.role
      from public.user_profiles up
      where up.user_id = auth.uid()
        and up.active = true
      limit 1
    ),
    'anon'
  );
$$;

create or replace function public.current_profile_active()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.active = true
  );
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.current_app_role() = 'admin';
$$;

drop policy if exists "profile self read" on public.user_profiles;
drop policy if exists "profile admin read all" on public.user_profiles;
drop policy if exists "profile admin manage" on public.user_profiles;

create policy "profile self read"
on public.user_profiles
for select
to authenticated
using (user_id = auth.uid());

create policy "profile admin read all"
on public.user_profiles
for select
to authenticated
using (public.is_admin());

create policy "profile admin manage"
on public.user_profiles
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

comment on table public.user_profiles is
'Perfiles de usuarios autenticados para controlar acceso por rol en la app EKA.';

comment on function public.current_app_role() is
'Devuelve el rol aplicativo del usuario autenticado activo.';

comment on function public.current_profile_active() is
'Indica si el usuario autenticado tiene perfil activo en la app.';

commit;
