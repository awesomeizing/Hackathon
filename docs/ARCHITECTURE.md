# Signal Passport — Architecture (frozen 20 Nov 16:25 IST)

Changes after the freeze only for an organizer constraint, a blocker, or a security/correctness defect,
logged as `C#` in HACKATHON_PLAN.md §7.

## 1. Trust boundary

```
 TIER 1 · CUSTOMER ENVIRONMENT (one collector per site)          ║   TIER 2 · SaaS  (region ap-south)
                                                                  ║
 organizer stream ─► Adapter ─► raw.db (OS-local state, 60 min) ║
  (NDJSON http/file)    │        usernames, IPs, log text, secrets ║
  or SIMULATED          ▼                                         ║
               Filter/Redact ─► Aggregate (5 s window) ─► Analyze ║
               secret scan,      per source × metric      failed-  ║
               drop free text    avg/max/last             login    ║
                                                          bursts   ║
                        ▼                                          ║
               Policy: typed allow-list v sp-policy-1              ║
               unknown field / bad type ⇒ batch rejected locally   ║
                        ▼                                          ║
               Canonical JSON ─► SHA-256 ─► Signal Passport        ║
                        ▼                                          ║
               outbox.db (buffer, seq order) ─► Sender ════ HTTPS (TLS 1.3, pinned demo CA) ═══╬══► /v1/ingest
               egress proof panel (127.0.0.1 only)    Bearer collector key, X-Payload-Digest  ║    auth → tenant
                                                                  ║    residency check
               Heartbeat every 5 s ═══════════════════════════════╬══► /v1/heartbeat
                                                                  ║    validate → dedup → tenant store
                                                                  ║    health · anomaly · incidents
                                                                  ║    dashboard (viewer token → tenant)
```

Network hops: (1) stream → collector adapter (local); (2) collector → SaaS `https://<region>:8443` (the only
egress); (3) browser → collector UI `http://127.0.0.1:7100` (loopback only); (4) browser → SaaS dashboard
`https://localhost:8443` (viewer token).

## 2. What stays, what is dropped, what is sent

| Data | Fate |
|---|---|
| Raw log lines, payload bodies, stack traces | **Stay** in OS-local `SP_STATE_DIR` (60 min TTL). Never hashed, never sent. |
| Secrets (passwords, tokens, keys, bearer, private keys) | **Stay**; detected locally, counted as `redactions`. |
| Usernames, source IPs, hostnames | **Stay**. Hostnames → `src-` + HMAC(local salt). Salt never leaves. |
| Failed-login records | **Stay**; only `security_summary` counts leave. |
| Metric values, counts, enums, UTC times, pseudonymous IDs | **Sent** (allow-listed below). |
| Any field not in the allow-list, any free-text string | **Rejected** by the policy before the outbox. |

Redaction examples: `password=hunter2` → secret counted, line kept local; `user=alice from 10.0.0.7` →
`distinct_accounts: 1, distinct_origins: 1`; `host=db-prod-01` → `src-3f9a1c02e4`.

## 3. Payload schema `signal-passport/1` (policy `sp-policy-1`)

Every string is an enum or matches a fixed ID pattern, so **no free text can cross**.

```jsonc
{
  "schema": "signal-passport/1",
  "payload_id": "uuid v4",                 // generated once at batch creation; reused on retry
  "collector_id": "col-[0-9a-f]{10}",      // pseudonymous
  "seq": 42,                               // per-collector monotonic
  "created_at": "2026-11-20T11:00:05.000Z",// UTC
  "source_tz": "Asia/Kolkata",             // IANA name
  "region": "ap-south",
  "policy_version": "sp-policy-1",
  "stream": "organizer" | "simulated",
  "records": [
    { "kind": "metric", "event_time": "<UTC>", "source_id": "src-[0-9a-f]{10}",
      "metric": "cpu_pct|mem_pct|disk_pct|bw_mbps|latency_ms|packet_loss_pct|service_up",
      "avg": 0, "max": 0, "last": 0, "count": 1 },
    { "kind": "security_summary", "event_time": "<UTC>", "source_id": "src-…",
      "category": "auth_failure", "window_s": 60, "failed_count": 0,
      "distinct_accounts": 0, "distinct_origins": 0, "severity": "info|warning|error|critical" },
    { "kind": "log_summary", "event_time": "<UTC>", "source_id": "src-…",
      "category": "app|system|network|security", "severity": "info|warning|error|critical",
      "count": 0, "redactions": 0 }
  ]
}
```

Heartbeat `signal-passport-heartbeat/1`: `collector_id, sent_at, version, cpu_pct, rss_mb, buffered,
config_hash, policy_version, stream`.

Limits: ≤ 500 records/batch, ≤ 256 KB body, numbers finite, times within −24 h…+5 min of SaaS clock.

## 4. Signal Passport

Built locally per batch, stored in outbox.db, shown on the egress proof panel:

`{ payload_id, created_at, policy_version, destination_region, allowed_fields[], record_count, sha256 }`

- `sha256` = SHA-256 of the **canonical sanitized payload bytes** (keys sorted, no whitespace). These exact bytes
  are the HTTP body, sent with header `X-Payload-Digest`.
- SaaS hashes the raw body it received and returns a receipt `{ payload_id, received_digest, status
  (stored|duplicate), received_at, region }`. The panel shows ✓ only when the receipt digest matches; a reused
  payload ID with different content is rejected with HTTP 409 and is never acknowledged by the collector.
- Claim: integrity + policy evidence for that payload. Not a proof that no other leak path exists.

## 5. Authentication, transport, tenant isolation, residency

- **Transport:** HTTPS (TLS 1.2 minimum); SaaS key/cert issued by a demo CA generated by `npm run setup`; collector trusts only
  that CA (`ca:` option, no system roots). Production: public CA or mTLS client certs.
- **Collector auth:** `Authorization: Bearer <collector key>` (32 random bytes). SaaS stores only
  SHA-256(key) in `SP_STATE_DIR/tenants.json` and looks the presented key up by its hash. The key maps to exactly one tenant,
  and the first `collector_id` seen with a key is bound to it (a different ID with that key → 403).
- **Tenant isolation:** the tenant is derived **only** from the credential, never from the body or the URL.
  Each tenant has its own SQLite file `SP_STATE_DIR/saas-data/<region>/<tenant>.db`; a handler opens only the store of the
  authenticated tenant. Viewers authenticate with a per-tenant viewer token (hash stored) and see only that store.
- **Residency:** each tenant has `home_region`. An instance with `REGION=ap-south` answers `421` for a tenant
  homed elsewhere and writes nothing. No cross-region replication exists.
- **Audit:** collector keeps an egress audit row per send attempt (payload_id, time, result, digest); SaaS
  keeps an ingest audit row per request (collector, status, digest, reason) and a remediation audit.

## 6. Time, ordering, idempotency

- All times UTC ISO-8601 plus `source_tz`. Dashboards render in the viewer's zone.
- SaaS orders by `event_time`, not arrival. A late record is stored and appears in its correct trend slot;
  it does not overwrite "latest" if a newer event exists, and it is not fed into the baseline (counted `late`).
- `payload_id` is the primary key per tenant store: a resend returns `200 {status:"duplicate"}` and inserts
  nothing. Records get `record_id = payload_id#index`.

## 7. Buffering, retry, recovery

- Every batch goes to outbox.db (`pending`) **before** sending; the sender delivers in `seq` order, marks
  `acked` only on a receipt. Failure → backoff 1 s, 2 s, 4 s (cap 5 s), retry forever; buffer cap 50 000
  payloads (oldest metric batches dropped with an audit row if exceeded; security summaries never dropped).
- Collector restart: pending rows survive in SQLite and resume. SaaS restart: stores survive; resends dedup.
- Offline detection: heartbeat every 5 s; SaaS marks a collector **Poor / offline** when the last heartbeat is
  older than 30 s (target ≤ 60 s). The collector shows "SaaS unreachable — buffering N".
- Verification: `GET /v1/delivery/ids` (SaaS, collector-auth) vs collector delivery states → `npm run verify`; it fails for missing, pending, rejected, or dropped batches. Drop count is retained in the local database beyond audit-log retention.

## 8. Health, AIOps, remediation

- **Health (per source and per collector):** worst signal state from `saas/config/thresholds.json`
  (Good/Fair/Poor cut-offs per metric). Each state carries its reasons. Data older than 20 s → downgrade
  one level ("stale"); older than 60 s or collector offline → Poor ("no data"). Transitions are logged in UTC.
- **Anomaly:** per source×metric EWMA baseline (α = 0.1, warm-up 12 points); flag when |z| ≥ 3 and the
  change exceeds a per-metric minimum delta. Explanation = baseline mean ± sd, observed, z, threshold.
- **Correlation:** alerts on the same source (or the same collector) within 60 s of the incident's last alert
  merge into one incident; alerts are edge-triggered (one per breach, not one per sample). Raw signal
  breaches vs alerts vs incidents are counted (noise reduction). Cross-source topology correlation needs a
  service map we do not have; it is a stated limitation, not a guess.
- **Recommendation:** rule table keyed by the signal set (e.g. cpu+latency → "investigate runaway process /
  scale"), with contributing signals, confidence (from z and signal count) and "why this action".
- **Remediation:** simulated only. Policy check (action on allow-list, reversible) → human approve → audit
  → simulated execute → rollback button. Nothing touches a real system.

## 9. Scale path (not built)
Ingest behind a regional load balancer; a queue (Kafka/NATS) between ingest and processing; one store per
tenant (Postgres schema or ClickHouse database) pinned to region; collectors shard by tenant; dashboards
read pre-aggregated rollups.

## 10. Local runtime state
By default, credentials, certificates, raw telemetry, and SQLite databases are stored outside the source tree:
`%LOCALAPPDATA%\SignalPassport\CICADA` on Windows, `$XDG_STATE_HOME/signal-passport/cicada` on Linux/macOS
when configured, or `~/.local/state/signal-passport/cicada` otherwise. `SP_STATE_DIR` overrides the location;
choose a non-synced local disk location. POSIX state directories are created with owner-only permissions. The SaaS
TLS listener binds to `127.0.0.1` by default. Binding it externally requires a host-valid TLS certificate and an
intentional network deployment; the demo certificate is valid only for localhost and 127.0.0.1.

Authenticated remote organizer streams require HTTPS. Stream URLs and credentials are not shown in the collector
UI or startup logs; configure credentials with `STREAM_BEARER_TOKEN` or
`STREAM_AUTH_HEADER_NAME` + `STREAM_AUTH_HEADER_VALUE`.
