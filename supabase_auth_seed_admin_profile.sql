insert into public.user_profiles (user_id, email, full_name, role, active)
select
  id,
  email,
  'Edwin Quispe',
  'admin',
  true
from auth.users
where lower(email) = 'edwin.qm@outlook.com'
on conflict (user_id) do update
set
  email = excluded.email,
  full_name = excluded.full_name,
  role = excluded.role,
  active = excluded.active,
  updated_at = now();
