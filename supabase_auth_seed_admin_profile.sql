insert into public.user_profiles (user_id, email, full_name, role, active, metadata)
select
  id,
  email,
  'Edwin Quispe',
  'admin',
  true,
  jsonb_build_object(
    'access_tier', 'super_admin',
    'approved_by', 'seed_admin_profile',
    'approved_at', to_jsonb(now())
  )
from auth.users
where lower(email) = 'edwin.qm@outlook.com'
on conflict (user_id) do update
set
  email = excluded.email,
  full_name = excluded.full_name,
  role = excluded.role,
  active = excluded.active,
  metadata = coalesce(public.user_profiles.metadata, '{}'::jsonb) || excluded.metadata,
  updated_at = now();
