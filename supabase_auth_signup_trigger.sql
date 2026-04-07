begin;

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (
    user_id,
    email,
    full_name,
    role,
    active,
    metadata
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(coalesce(new.email, ''), '@', 1)),
    'consulta',
    false,
    jsonb_build_object(
      'signup_source', 'auth',
      'requested_role', coalesce(new.raw_user_meta_data ->> 'requested_role', 'consulta'),
      'provider', coalesce(new.raw_app_meta_data ->> 'provider', 'email')
    )
  )
  on conflict (user_id) do update
  set
    email = excluded.email,
    full_name = coalesce(public.user_profiles.full_name, excluded.full_name),
    metadata = coalesce(public.user_profiles.metadata, '{}'::jsonb) || excluded.metadata,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_auth_user();

commit;
