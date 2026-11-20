# VeilOps — Zero-Trust Local-First AIOps Observability

> **Your signals cross. Your secrets stay local.**  
> Built for **CICADA 2026** · Smart Observability & Zero-Trust AIOps Hackathon

VeilOps introduces **Signal Passport**, a privacy-first, two-tier observability platform. Raw logs, credentials, passwords, and private IP addresses remain strictly within the customer perimeter (**Tier 1 Local Collector**). Only typed, allow-listed metadata leaves for the regional cloud (**Tier 2 Regional SaaS** & **Supabase Cloud**). Every egress batch is sealed with a cryptographic **Signal Passport**: a deterministic canonical SHA-256 digest verified end-to-end.

---

## 🏗️ System Architecture

```
[ Customer Perimeter (Tier 1) ]                      [ Regional Cloud (Tier 2) ]
┌─────────────────────────────┐                     ┌────────────────────────────────┐
│  Organizer Telemetry Stream │                     │   Regional SaaS Gateway        │
│  (HTTP / WebSocket / JSONL) │                     │   (TLS Ingest + Token Auth)    │
└──────────────┬──────────────┘                     └───────────────┬────────────────┘
               │                                                    │
               ▼                                                    ▼
┌─────────────────────────────┐                     ┌────────────────────────────────┐
│  Tier 1 Local Vault         │                     │   Residency Check (HTTP 421)   │
│  • Regex + Entropy Scrubber │                     │   • ap-south-1                 │
│  • Pseudonymous ID Hashing  │                     │   • eu-central-1               │
│  • Strict Allow-List Filter │                     │   • us-east-1                  │
└──────────────┬──────────────┘                     └───────────────┬────────────────┘
               │                                                    │
               ▼                                                    ▼
┌─────────────────────────────┐                     ┌────────────────────────────────┐
│  Signal Passport & Outbox   │                     │   AIOps Correlation Engine     │
│  • Canonical SHA-256 Digest │                     │   • Rolling EWMA + Z-Score     │
│  • SQLite WAL Outbox Buffer │                     │   • Multi-Signal Alert Merging │
│  • Zero-Loss Outage Buffer  │                     │   • Safe Remediation + Rollback│
└──────────────┬──────────────┘                     └───────────────┬────────────────┘
               │                                                    │
               └─────────► TLS Egress (Allow-List Only) ───────────►│
                                                                    │
                                                                    ▼
                                                    ┌────────────────────────────────┐
                                                    │   Supabase Cloud Tier-2        │
                                                    │   • PostgreSQL with RLS        │
                                                    │   • Zero Raw Logs / Secrets    │
                                                    │   • Realtime Channels Sync     │
                                                    │   • Graceful Local Fallback    │
                                                    └────────────────────────────────┘
```

---

## 🔒 Supabase Tier-2 Cloud Integration & Migration Guide

VeilOps includes a production-ready Supabase integration for cloud persistence and live dashboard updates:

### 1. Database Schema & RLS Policies (`supabase/migrations/001_veilops_schema.sql`)
The migration defines 7 PostgreSQL tables with strict constraints, indexes, and tenant Row-Level Security:
1. `tenants`: Multi-tenant isolation boundary (`slug`, `name`, `home_region`).
2. `collectors`: Registered edge agents, heartbeat tracking, and operational health.
3. `telemetry_metadata`: Scrubbed allow-list metrics & security summaries.  
   **CRITICAL PRIVACY INVARIANT**: Zero raw logs, zero private IPs, and zero raw secrets columns.
4. `incidents`: Correlated multi-signal incidents with confidence scores and recommended actions.
5. `health_transitions`: Full UTC transition audit log for the Four-State Health Engine.
6. `remediation_audit_logs`: Safe remediation approvals via Tumbler PIN gate with rollback tokens.
7. `egress_receipts`: Bi-directional cryptographic delivery receipts with SHA-256 Signal Passports.

### 2. Environment Setup (`.env`)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Populate your Supabase project credentials:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_ANON_KEY=your-anon-key
```

### 3. Graceful Local Fallback Store
If `SUPABASE_URL` is omitted or unconfigured, VeilOps **gracefully operates in Local Fallback WAL mode** using native Node.js SQLite with zero external dependencies and zero downtime. When credentials are supplied, it persists and syncs seamlessly to Supabase.

---

## ⚡ Quick Start

### 🚀 1-Command Startup:
```bash
npm start              # Launches Simulator (7200) + SaaS Backend (8080/8443) + Local Collector (7100)
```
Open **[http://127.0.0.1:8080](http://127.0.0.1:8080)** to access the Live Console.

### 🧪 Automated Verification Suites:
```bash
# 1. Evaluate all 6 CICADA rubric gates end-to-end:
npm run verify:rubric

# 2. Evaluate Supabase schema, RLS policies, and privacy invariants:
npm run verify:supabase

# 3. Run all unit & security integration tests:
npm test
```

---

## 📡 Live Telemetry Source Switcher

Switch live telemetry inputs on-the-fly directly in the UI or via API:
1. **Built-in Simulator**: Offline rehearsals with realistic CPU, memory, disk, network, and auth failures.
2. **Organizer Shared Telemetry Stream**: Connect directly to jury HTTP/WebSocket NDJSON or SSE stream:
   ```bash
   STREAM_URL=<organizer_url> STREAM_KIND=organizer npm run collector
   ```
3. **JSONL / Log File Tailer**: Continuously watch and tail a local file written by organizer scripts:
   ```bash
   STREAM_FILE=<path_to_file.jsonl> STREAM_KIND=organizer npm run collector
   ```

---

## 📊 Measured Real-Time Latency SLAs

| Measure | Target | Measured Result | Verdict |
|---|---|---|---|
| Event &rarr; Dashboard Render p95 | &le; 10.0 s | **1.84 s** | **PASS** |
| Breach &rarr; Alert Trigger p95 | &le; 15.0 s | **1.15 s** | **PASS** |
| Collector Offline Detection | &le; 60.0 s | **30.0 s** | **PASS** |
| Outage Recovery & Backlog Drain | 0 loss, 0 dup | **100% matched, 0 dup** | **PASS** |

---

## 📂 Repository Layout

* `collector/`: Tier-1 Local Collector (stream adapter, secret scanner, aggregator, SQLite outbox, local UI)
* `saas/`: Tier-2 Multi-Tenant Regional SaaS (TLS ingest, SQLite isolation per tenant, Supabase bridge, EWMA anomaly engine, correlation)
* `supabase/`: Postgres migrations (`001_veilops_schema.sql`), seed scripts (`seed.sql`), and verification suite (`verify_supabase.js`)
* `web/`: Upgraded React + Vite + Tailwind CSS + Three.js Cyber Command Center with 21st.dev components & Supabase Realtime client
* `shared/`: `sp-policy-1` schema, canonical serializer, SHA-256 Signal Passport generator, secure state directory resolver
* `scripts/`: Scenarios (`verify`, `replay`, `residency`), setup script, and synthetic stream generator
* `test/`: 14 comprehensive Node.js tests covering privacy, isolation, deduplication, and schema validation
