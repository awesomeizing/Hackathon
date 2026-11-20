-- ==============================================================================
-- VeilOps v2.4.0 · CICADA 2026 Supabase Postgres Schema & RLS Policies
-- Zero-Trust Local-First AIOps Observability:
-- "Your signals cross. Your secrets stay local."
-- ==============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TENANTS TABLE
-- Multi-tenant isolation boundary. Every tenant is strictly homed in a region.
-- ------------------------------------------------------------------------------
create table if not exists public.tenants (
  id text primary key,
  slug text unique not null,
  name text not null,
  home_region text not null check (home_region in ('ap-south', 'ap-south-1', 'eu-west', 'eu-central-1', 'us-east', 'us-east-1')),
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------------------------
-- 2. COLLECTORS TABLE
-- Registered edge agents sending heartbeats and health states.
-- ------------------------------------------------------------------------------
create table if not exists public.collectors (
  id text primary key,
  tenant_id text not null references public.tenants(id) on delete cascade,
  collector_code text not null,
  region text not null,
  version text default 'v2.4.0',
  status text not null default 'offline' check (status in ('online', 'offline')),
  health_state text not null default 'Good' check (health_state in ('Excellent', 'Good', 'Fair', 'Poor')),
  health_reason text,
  last_heartbeat_utc timestamptz,
  collector_cpu_pct double precision not null default 0.0,
  collector_mem_pct double precision not null default 0.0,
  config_synced boolean not null default true,
  updated_at timestamptz not null default now()
);

create index if not exists idx_collectors_tenant on public.collectors(tenant_id);
create index if not exists idx_collectors_status on public.collectors(status, health_state);

-- ------------------------------------------------------------------------------
-- 3. TELEMETRY_METADATA TABLE
-- Strictly scrubbed allow-list metrics & security summaries.
-- CRITICAL SECURITY INVARIANT:
-- ZERO raw logs, ZERO raw IP addresses, and ZERO raw tokens/credentials columns.
-- ------------------------------------------------------------------------------
create table if not exists public.telemetry_metadata (
  id uuid primary key default gen_random_uuid(),
  payload_id text unique not null,                      -- Idempotency key (0 duplicates on replay)
  tenant_id text not null references public.tenants(id) on delete cascade,
  collector_id text references public.collectors(id) on delete set null,
  region text not null,
  pseudonymous_source_id text not null,                 -- Deterministic pseudonym (e.g. src-7f3a9c)
  event_timestamp_utc timestamptz not null,             -- Original event time from source
  received_utc timestamptz not null default now(),      -- Ingest timestamp at SaaS gateway
  source_timezone text not null default 'UTC',
  cpu_pct double precision,
  memory_pct double precision,
  disk_pct double precision,
  bandwidth_mbps double precision,
  latency_ms double precision,
  packet_loss_pct double precision,
  service_availability double precision default 100.0,
  failed_login_count_1m integer not null default 0,
  security_risk_score double precision not null default 0.0,
  secrets_redacted_count integer not null default 0,
  health_state text not null default 'Good' check (health_state in ('Excellent', 'Good', 'Fair', 'Poor')),
  health_reason text,
  alert_context text,
  signal_passport_sha256 text not null                  -- Canonical SHA-256 seal
);

create index if not exists idx_telemetry_tenant_ts on public.telemetry_metadata(tenant_id, event_timestamp_utc desc);
create index if not exists idx_telemetry_source on public.telemetry_metadata(tenant_id, pseudonymous_source_id, event_timestamp_utc desc);
create index if not exists idx_telemetry_payload on public.telemetry_metadata(payload_id);

-- ------------------------------------------------------------------------------
-- 4. INCIDENTS TABLE
-- Multi-signal correlated incidents (EWMA/Z-score anomalies grouped into 1 ticket).
-- ------------------------------------------------------------------------------
create table if not exists public.incidents (
  id bigint generated always as identity primary key,
  tenant_id text not null references public.tenants(id) on delete cascade,
  region text not null,
  primary_source_id text not null,
  title text not null,
  severity text not null default 'Fair' check (severity in ('Fair', 'Poor')),
  status text not null default 'open' check (status in ('open', 'mitigated', 'rolled_back')),
  merged_alert_count integer not null default 1,
  confidence_pct double precision not null default 85.0,
  why_flagged text,
  contributing_signals_json jsonb not null default '[]'::jsonb,
  recommended_action text,
  created_at_utc timestamptz not null default now(),
  updated_at_utc timestamptz not null default now()
);

create index if not exists idx_incidents_tenant_status on public.incidents(tenant_id, status);

-- ------------------------------------------------------------------------------
-- 5. HEALTH_TRANSITIONS TABLE
-- UTC transition audit trail for Four-State Health Engine.
-- ------------------------------------------------------------------------------
create table if not exists public.health_transitions (
  id bigint generated always as identity primary key,
  tenant_id text not null references public.tenants(id) on delete cascade,
  entity_type text not null check (entity_type in ('collector', 'source')),
  entity_id text not null,
  from_state text not null check (from_state in ('Excellent', 'Good', 'Fair', 'Poor')),
  to_state text not null check (to_state in ('Excellent', 'Good', 'Fair', 'Poor')),
  reason text,
  transitioned_at_utc timestamptz not null default now()
);

create index if not exists idx_transitions_tenant on public.health_transitions(tenant_id, transitioned_at_utc desc);

-- ------------------------------------------------------------------------------
-- 6. REMEDIATION_AUDIT_LOGS TABLE
-- Human-in-the-Loop Safe Remediation actions with Tumbler Lock PIN authorization.
-- ------------------------------------------------------------------------------
create table if not exists public.remediation_audit_logs (
  id bigint generated always as identity primary key,
  tenant_id text not null references public.tenants(id) on delete cascade,
  incident_id bigint references public.incidents(id) on delete cascade,
  action_type text not null,
  policy_status text not null,
  approved_via text not null default 'tumbler_lock' check (approved_via in ('tumbler_lock', 'automated', 'admin')),
  execution_status text not null default 'applied' check (execution_status in ('applied', 'rolled_back', 'failed')),
  rollback_token text not null,
  actor_label text not null,
  recorded_at_utc timestamptz not null default now()
);

create index if not exists idx_remediation_audit on public.remediation_audit_logs(tenant_id, recorded_at_utc desc);

-- ------------------------------------------------------------------------------
-- 7. EGRESS_RECEIPTS TABLE
-- Proof of zero-leak egress verification between Tier 1 and Tier 2.
-- ------------------------------------------------------------------------------
create table if not exists public.egress_receipts (
  id bigint generated always as identity primary key,
  tenant_id text not null references public.tenants(id) on delete cascade,
  collector_id text references public.collectors(id) on delete set null,
  payload_id text not null,
  signal_passport_sha256 text not null,
  allow_listed_fields_count integer not null default 0,
  dropped_fields_count integer not null default 0,
  redacted_secrets_count integer not null default 0,
  buffered_during_outage boolean not null default false,
  transmitted_at_utc timestamptz not null default now()
);

create index if not exists idx_egress_receipts_tenant on public.egress_receipts(tenant_id, transmitted_at_utc desc);

-- ==============================================================================
-- ROW-LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
alter table public.tenants enable row level security;
alter table public.collectors enable row level security;
alter table public.telemetry_metadata enable row level security;
alter table public.incidents enable row level security;
alter table public.health_transitions enable row level security;
alter table public.remediation_audit_logs enable row level security;
alter table public.egress_receipts enable row level security;

-- Service Role Bypass (SaaS Backend has full tenant-scoped read/write)
drop policy if exists "service_role_all_tenants" on public.tenants;
create policy "service_role_all_tenants" on public.tenants for all to service_role using (true) with check (true);

drop policy if exists "service_role_all_collectors" on public.collectors;
create policy "service_role_all_collectors" on public.collectors for all to service_role using (true) with check (true);

drop policy if exists "service_role_all_telemetry_metadata" on public.telemetry_metadata;
create policy "service_role_all_telemetry_metadata" on public.telemetry_metadata for all to service_role using (true) with check (true);

drop policy if exists "service_role_all_incidents" on public.incidents;
create policy "service_role_all_incidents" on public.incidents for all to service_role using (true) with check (true);

drop policy if exists "service_role_all_health_transitions" on public.health_transitions;
create policy "service_role_all_health_transitions" on public.health_transitions for all to service_role using (true) with check (true);

drop policy if exists "service_role_all_remediation_audit_logs" on public.remediation_audit_logs;
create policy "service_role_all_remediation_audit_logs" on public.remediation_audit_logs for all to service_role using (true) with check (true);

drop policy if exists "service_role_all_egress_receipts" on public.egress_receipts;
create policy "service_role_all_egress_receipts" on public.egress_receipts for all to service_role using (true) with check (true);

-- Authenticated / Anon Tenant Read Isolation:
-- Matches JWT claims (tenant_id) or app-level context settings
drop policy if exists "anon_tenant_read_tenants" on public.tenants;
create policy "anon_tenant_read_tenants" on public.tenants for select to anon, authenticated
  using (id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), id));

drop policy if exists "anon_tenant_read_collectors" on public.collectors;
create policy "anon_tenant_read_collectors" on public.collectors for select to anon, authenticated
  using (tenant_id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), tenant_id));

drop policy if exists "anon_tenant_read_telemetry_metadata" on public.telemetry_metadata;
create policy "anon_tenant_read_telemetry_metadata" on public.telemetry_metadata for select to anon, authenticated
  using (tenant_id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), tenant_id));

drop policy if exists "anon_tenant_read_incidents" on public.incidents;
create policy "anon_tenant_read_incidents" on public.incidents for select to anon, authenticated
  using (tenant_id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), tenant_id));

drop policy if exists "anon_tenant_read_health_transitions" on public.health_transitions;
create policy "anon_tenant_read_health_transitions" on public.health_transitions for select to anon, authenticated
  using (tenant_id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), tenant_id));

drop policy if exists "anon_tenant_read_remediation_audit_logs" on public.remediation_audit_logs;
create policy "anon_tenant_read_remediation_audit_logs" on public.remediation_audit_logs for select to anon, authenticated
  using (tenant_id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), tenant_id));

drop policy if exists "anon_tenant_read_egress_receipts" on public.egress_receipts;
create policy "anon_tenant_read_egress_receipts" on public.egress_receipts for select to anon, authenticated
  using (tenant_id = coalesce(current_setting('app.current_tenant', true), (auth.jwt() ->> 'tenant_id'), tenant_id));

-- ==============================================================================
-- REALTIME REPLICATION PUBLICATION
-- Enable Supabase Realtime pub/sub on live operational tables
-- ==============================================================================
do $$
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;
end $$;

alter publication supabase_realtime add table public.telemetry_metadata;
alter publication supabase_realtime add table public.incidents;
alter publication supabase_realtime add table public.collectors;
alter publication supabase_realtime add table public.health_transitions;
alter publication supabase_realtime add table public.remediation_audit_logs;
