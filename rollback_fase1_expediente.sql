begin;

-- =========================================================
-- Rollback de policies Fase 1
-- =========================================================
drop policy if exists "fase1 read seguimiento_eventos" on public.seguimiento_eventos;
drop policy if exists "fase1 write seguimiento_eventos" on public.seguimiento_eventos;
drop policy if exists "fase1 read evidencias_relacionadas" on public.evidencias_relacionadas;
drop policy if exists "fase1 write evidencias_relacionadas" on public.evidencias_relacionadas;

-- =========================================================
-- Rollback de triggers Fase 1
-- =========================================================
drop trigger if exists trg_seguimiento_eventos_updated_at on public.seguimiento_eventos;
drop trigger if exists trg_evidencias_relacionadas_updated_at on public.evidencias_relacionadas;

-- =========================================================
-- Rollback de tablas Fase 1
-- Importante: esto elimina también los datos registrados
-- en seguimiento_eventos y evidencias_relacionadas.
-- =========================================================
drop table if exists public.evidencias_relacionadas;
drop table if exists public.seguimiento_eventos;

commit;
