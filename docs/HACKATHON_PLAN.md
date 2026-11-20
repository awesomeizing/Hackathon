# Signal Passport — Hackathon Plan

> **Your signals cross. Your secrets stay local.**
> CICADA 2K26 · 24-hour hackathon · Smart Observability problem statement (guide v8)

## 1. Problem (Phase 1)

Raw logs, auth records and payloads carry secrets, usernames, IPs and business data. Shipping them to a
central SaaS widens the attack surface and can break compliance and residency rules. So the **collector keeps
raw data local** and the SaaS receives **only typed, allow-listed metadata**. Signal Passport adds a per-batch
receipt, so the customer can check that the payload SaaS received is byte-for-byte the payload they approved.

**What the receipt proves:** payload integrity (SHA-256 of the exact sanitized bytes) and policy evidence
(policy version, region, allowed field names). **What it does not prove:** that no leak is possible through
any other channel. We say this plainly in the demo.

### Q1 · Before observability
Ops teams either (a) ship raw logs to a vendor and accept exposure, or (b) keep everything local and have no
fleet-wide view, no correlation and no early warning. Failed-login bursts, latency creep and dead collectors
are found late, by users.

### Q2 · What the team now observes
For each tenant: per-source health (Excellent / Good / Fair / Poor) with reasons, latency and packet-loss
trends, locally summarised failed-login risk, collector fleet status, anomalies with baselines, correlated
incidents with recommendations, and a passport trail that proves what left each site.

## 2. MVP (frozen)

| # | Use case | Signals | Demo evidence |
|---|---|---|---|
| U1 | Infrastructure health | cpu, mem, disk, service_up | 4-state dashboard, reasons, stale handling |
| U2 | Network latency / packet loss | latency_ms, packet_loss_pct, bw_mbps | trend, anomaly, related service impact |
| U3 | Repeated failed logins | local only → `security_summary` counts | risk indicator; no usernames/IPs leave |
| U4 | Collector fleet health | heartbeat: version, cpu, rss, buffer, config hash | offline → Poor ≤ 60 s |

**Minimum viable demo:** organizer stream → collector raw view (secret visible locally) → egress proof panel
(exact bytes + passport) → SaaS receipt with matching digest → dashboard state change → explained anomaly →
incident + recommendation → SaaS outage → buffered → reconnect → sent IDs = received IDs.

**Priority order (cut from the bottom):** 1 adapter + raw view · 2 policy/redaction/aggregation ·
3 egress panel + passport · 4 TLS + auth ingest + tenant isolation · 5 validation/order/dedup ·
6 dashboard + health · 7 anomaly/correlation/recommendation · 8 buffering/retry ·
9 remediation simulation · 10 residency rejection demo.

**Out of scope:** real remediation, ML models, multi-node SaaS, real mTLS PKI, user management UI, mobile.

## 3. Stack (frozen)
Node.js 24, **zero npm dependencies**: `node:https` (TLS), `node:crypto` (SHA-256, HMAC), `node:sqlite`
(collector outbox + per-tenant SaaS stores), `node:test`. Vanilla HTML/JS dashboards. OpenSSL for a local
demo CA. Reason: nothing to install, nothing to break on venue Wi-Fi.

## 4. Team owners
Names are not yet provided (see A5). Team implements; each owner reviews and presents their part.

| Role | Owner | Owns |
|---|---|---|
| R1 Lead · Collector & privacy | Team Lead | adapter, redaction, allow-list, passport, egress panel |
| R2 SaaS & security | Member 2 | TLS, auth, tenant isolation, residency, ingest, dedup |
| R3 Dashboard & health | Member 3 | health states, thresholds, stale handling, timing panel |
| R4 AIOps & demo | Member 4 | anomaly, correlation, recommendations, remediation sim, runbook, slides |

## 5. Schedule (Asia/Kolkata, Fri 20 → Sat 21 Nov 2026)

| Time | Phase | Work | Needs team? | Acceptance |
|---|---|---|---|---|
| 15:25–15:55 | 0 | Discovery, inventory, plan freeze | no | these 3 docs committed |
| 15:55–16:25 | 1 → 2 | MVP, trust boundary, schema, architecture freeze | review | ARCHITECTURE.md frozen |
| **16:25** | — | **Handoff note** (§8) | read | team knows state before leaving |
| 16:30–19:30 | 3 | **Team away (cultural evening).** Implementation steps 1–5 only: all already decided | **no** | collector → TLS ingest → tenant DB runs end to end |
| 19:30–20:00 | sync | Review handoff, plug organizer stream details, confirm names/deadline | yes | A1–A5 resolved or re-dated |
| 20:00–01:00 | 3 | Steps 6–8: dashboard, AIOps, buffering | review | all 8 steps demoable |
| 01:00–03:00 | 3 | Measure targets on organizer stream; record results | yes (stream) | timing table filled with measured numbers |
| 03:00–07:00 | — | Rotating rest; bug fixes only | 1 on call | — |
| 07:00–11:00 | 4 | Rehearse runbook ×3, fix defects, slides | yes | full run < 10 min, no manual edits |
| 11:00–deadline | 4 | Freeze, final rehearsal, judge Q&A drill | yes | — |

Judge checkpoint times are unknown (A3); map Phase 1–4 to them when announced.

## 6. Acceptance criteria per phase
- **P1:** this plan + trust boundary + allow-list + redaction examples + roles + stream plan.
- **P2:** ARCHITECTURE.md with schema, auth, isolation, residency, ordering, idempotency, buffering. Frozen.
- **P3:** each step in §2 runs from `npm run demo`; tests pass; egress digest equals SaaS digest.
- **P4:** DEMO_RUNBOOK scenarios pass live; timing numbers measured on the organizer stream (or labelled simulated).

## 7. Assumption & change log

| ID | Date/time IST | Type | Entry |
|---|---|---|---|
| A1 | 20 Nov 15:30 | **Blocker** | Organizer telemetry stream (URL, format, auth) and scenario-injection tools not provided. Adapter accepts NDJSON over HTTP(S) or file with a field-mapping config. Fallback simulator is labelled `stream: "simulated"` everywhere and is never presented as organizer evidence. |
| A2 | 20 Nov 15:30 | Assumption | Deadline not provided; assumed Sat 21 Nov ~15:00 IST. |
| A3 | 20 Nov 15:30 | Assumption | Judge checkpoint times not provided. |
| A4 | 20 Nov 15:30 | Assumption | Real-time targets = guide suggested values (≤10 s p95, ≤15 s, ≤60 s, zero loss/dup). |
| A5 | 20 Nov 15:30 | Missing | Team member names/colleges not provided; roles R1–R4 used. |
| A6 | 20 Nov 15:30 | Constraint | Team away 16:30–19:30 IST; no decision tasks in that window. |
| A7 | 20 Nov 15:30 | Assumption | Demo runs on one laptop; TLS uses a locally generated demo CA, not a public CA. |
| A8 | 20 Nov 15:30 | Assumption | SaaS instance region `ap-south`. Residency is shown by rejecting a tenant homed in `eu-west`. |

Changes after the freeze go here as `C1…` with reason (organizer constraint, blocker, or security/correctness defect).

| C1 | 20 Nov 15:45 | Security defect | Unknown-field errors echoed the field *name* into SaaS audit (a crafted key could carry a secret). Names no longer echoed. |
| C2 | 20 Nov 15:50 | Correctness | Cross-source "network + service" correlation dropped: without a service map it merges unrelated injections (false alarms). Same-source correlation only; stated as a limitation. |
| C3 | 20 Nov 15:56 | Correctness defect | A hard kill lost up to one 2 s aggregation window from egress. Collector now re-aggregates unsent raw rows on start (verified: 47 rows recovered). |
| C4 | 20 Nov 20:25 | Security/correctness defect | Ignored runtime files could still sync with the OneDrive source folder. Credentials, certificates, raw data, and databases now default to an OS-local state directory (`SP_STATE_DIR` override); POSIX state permissions are restricted, the SaaS listener defaults to loopback, and organizer stream URLs/credentials are hidden from UI/logs. Authenticated remote streams require HTTPS. Reused payload IDs with changed content now return conflict, and delivery verification fails for pending, rejected, or dropped batches. |
| C5 | 20 Nov ~22:00 | Correctness defects | (a) A second `npm run collector` with the same name wrote to the shared collector DB before failing on EADDRINUSE; the running collector hit `database is locked` (node:sqlite busy timeout 0) and exited. Collector and SaaS DBs now wait up to 5 s for a lock. Still run one collector per name. (b) `npm run verify` printed PASS with 0 payloads created; it now fails with "no payloads created yet". (c) With the SaaS down, scenario tools printed a blank line (empty AggregateError message); they now print `FAIL: ECONNREFUSED ::1:8443, ECONNREFUSED 127.0.0.1:8443`. |

## 8. Evening handoff (written 20 Nov ~16:00 IST)

**Status: Phase 1 and Phase 2 frozen; Phase 3 steps 1–8 implemented and working end to end on the SIMULATED stream.**
`npm test` 12/12 pass. Start: see README (setup → sim → saas → collector).

Measured on the simulated stream (one laptop; not organizer evidence):

| Measure | Target | Measured |
|---|---|---|
| Event → dashboard render p95 | ≤ 10 s | 3.97 s (n=29) |
| Breach → alert p95 | ≤ 15 s | 1.6 s (n=19) |
| Collector offline detection | ≤ 60 s | 30.7 s |
| SaaS outage ~25 s → backlog | 0 loss, 0 dup | 95 created / 95 acked / 95 received, 0 dup |
| Duplicate resend / late record | dedup / placed by event time | `duplicate`, 0 stored / `late_records=1` |
| Residency (eu-west tenant → ap-south) | rejected | HTTP 421, nothing stored |

**During 16:30–19:30 (no team decisions needed):** code review and security review of the implementation,
fix findings, small dashboard polish. No schema or scope changes.

**Decisions waiting for 19:30:**
1. Organizer stream URL/format/auth (A1). Without it, Phase 3 timing evidence stays "simulated".
2. Team member names → replace R1–R4 (A5); confirm deadline and judge checkpoint times (A2, A3).
3. Optional: import `certs/ca.crt` from the local state directory into the demo browser to show the dashboard over HTTPS, too
   (collector ingest already uses TLS; the dashboard is also served on loopback HTTP).

## 9. Continuation status (20 Nov 20:25 IST)

Security/correctness review complete for the local prototype. C4 is implemented and documented. Existing checks
pass; the collector and SaaS have not been relaunched against the new OS-local state directory, and no organizer
stream has been connected because its URL, schema/format, credentials, and scenario tools are still unprovided.
The 24-hour deadline and judge checkpoint schedule also remain unconfirmed. Treat all existing performance figures
as simulated until the live organizer feed is connected and measured.
