-- ==============================================================================
-- VeilOps v2.4.0 · Seed Data for CICADA 2026 Evaluation
-- ==============================================================================

-- Seed Tenants
insert into public.tenants (id, slug, name, home_region) values
  ('acme', 'acme', 'Acme Retail', 'ap-south'),
  ('initech', 'initech', 'Initech Bank', 'ap-south'),
  ('globex', 'globex', 'Globex EU', 'eu-west')
on conflict (id) do update set
  slug = excluded.slug,
  name = excluded.name,
  home_region = excluded.home_region;

-- Seed Initial Collectors
insert into public.collectors (id, tenant_id, collector_code, region, version, status, health_state, health_reason) values
  ('col-acme-site-1', 'acme', 'acme-site-1', 'ap-south', 'v2.4.0', 'online', 'Excellent', 'All telemetry streams nominal'),
  ('col-initech-site-1', 'initech', 'initech-site-1', 'ap-south', 'v2.4.0', 'online', 'Good', 'Elevated packet loss 1.2%'),
  ('col-globex-site-1', 'globex', 'globex-site-1', 'eu-west', 'v2.4.0', 'online', 'Good', 'Homed in eu-west')
on conflict (id) do update set
  status = excluded.status,
  health_state = excluded.health_state,
  health_reason = excluded.health_reason;
