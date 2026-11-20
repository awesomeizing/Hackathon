# Signal Passport — Demo Runbook

Every number shown to judges is **measured from timestamps**. Anything from the fallback simulator is
labelled `SIMULATED` on screen and in the timing table; it is never presented as organizer-stream evidence.

## Setup (once)
```bash
npm run certs        # demo CA + SaaS cert (local only)
npm run saas         # terminal 1 — https://localhost:8443
npm run collector    # terminal 2 — http://127.0.0.1:7100  (STREAM_URL=… for organizer stream)
```
Screens: left = collector (egress proof panel), right = SaaS dashboard (tenant `acme`).

## Scenarios (target ≤ 10 min total)

| # | Scenario | Do | Expected evidence |
|---|---|---|---|
| 1 | Raw → sanitized | Click a raw event on the collector | Raw line (local banner) beside the exact outgoing JSON; no text fields |
| 2 | Passport ↔ receipt | Open the latest payload | Passport digest = SaaS received digest ✓; allowed fields listed |
| 3 | Secret in raw log | Inject `secret` | Secret visible only on collector; `redactions` +1 in payload; SaaS search finds nothing |
| 4 | CPU / latency deviation | Inject `cpu` or `latency` | Alert with baseline, z, contributing signals; incident; recommendation |
| 5 | Related alerts | Inject `incident` (cpu+latency+loss on one source) | N alerts → 1 incident; noise-reduction counter |
| 6 | Failed logins | Inject `bruteforce` | Security summary counts + risk; no usernames/IPs on SaaS |
| 7 | SaaS outage | Stop SaaS 30 s, restart | Collector "buffering N" → drains; `npm run verify` sent = received, 0 dup |
| 8 | Collector offline | Stop collector | Fleet card → Poor ≤ 60 s after last heartbeat, reason shown |
| 9 | Duplicate / out-of-order | `npm run replay` | Duplicate → `status: duplicate`; late batch placed by event time |
| 10 | Remediation | Approve recommended action | Policy check → approval → audit → simulated run → rollback |
| 11 | Residency / isolation | Use `globex` token; send as eu-west tenant | Globex sees none of acme; misrouted tenant gets 421 |

## Timing measurements (fill with measured values)

| Measure | Target | How | Result | Stream |
|---|---|---|---|---|
| Event → dashboard p95 | ≤ 10 s | stream `event_time` vs dashboard render time (timing panel) | _tbd_ | _tbd_ |
| Breach → alert | ≤ 15 s | injected spike `event_time` vs alert `created_at` | _tbd_ | _tbd_ |
| Offline detection | ≤ 60 s | last heartbeat vs status change to Poor | _tbd_ | _tbd_ |
| Backlog after reconnect | 0 loss, 0 dup | `npm run verify` | _tbd_ | _tbd_ |

## Judge answers (short)
- **What leaves?** Only `signal-passport/1` fields: enums, numbers, UTC times, pseudonymous IDs. No free text.
- **How are fields chosen?** A typed allow-list (`sp-policy-1`). An unknown field or a non-enum string rejects the whole batch locally.
- **Accidental secrets?** No field can carry text, so a secret has no slot to travel in. The scanner also counts secrets locally.
- **Auth/encryption?** TLS with a pinned CA; per-collector bearer key stored hashed; tenant derived from the key.
- **Last payload?** Egress proof panel → latest row → exact bytes, passport, receipt.
- **Real anomaly vs spike?** EWMA baseline plus z ≥ 3, a minimum delta, and multi-signal agreement raise confidence.
- **Correlation?** Same source within 60 s, or network plus service signals → one incident.
- **Why this action?** The recommendation lists its trigger signals, the baseline values and the rule that fired.
- **Before automation?** Allow-listed reversible actions, human approval, audit trail, rollback, blast-radius limits.
- **SaaS down?** Outbox buffers in SQLite; retries with backoff; resends dedup by `payload_id`.
- **Scale?** Regional ingest, queue, per-tenant stores pinned to region, rollups. See ARCHITECTURE §9.
- **Regions/UTC/order?** `home_region` enforced (421), UTC plus `source_tz`, event-time ordering, idempotent IDs.
- **What does the passport prove?** That SaaS stored exactly the bytes we approved under policy X. It does not prove no leak can ever happen.

## Honest limitations
Demo CA rather than a public PKI; bearer keys rather than mTLS; single SaaS node; rule-based recommendations;
the simulator is not the organizer stream; clock skew between stream source and laptop affects timing numbers.
