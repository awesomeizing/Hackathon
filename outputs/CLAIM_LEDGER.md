# VeilOps Phase 2 deck — claim ledger

Source of truth: repository at commit `89c7b13` (no application code changed for the deck) and run record
`outputs/run-records/run-2026-11-20T1044Z.json` (362 s, **simulated stream**, one Windows laptop, all tiers on loopback,
dashboard open in Chrome). Status key: **implemented** = in code and exercised · **simulated** = measured on the fallback
simulator · **planned** = not in code · **unverified** = no evidence either way.

| # | Claim | Slide | Repository / config / run evidence | Status | Action |
|---|---|---|---|---|---|
| 1 | Runtime is Node 24, no npm dependencies | 3 | `package.json` (no deps); run: Node v24.18.0 | implemented | Use |
| 2 | Collector, SaaS, storage, dashboard tech | 3 | `collector/index.js`, `saas/server.js`, `node:sqlite` stores, `saas/dashboard.html` (static, 1 s poll) | implemented | Use. Remove Python/FastAPI/Redis/TimescaleDB/React/WebSocket |
| 3 | Collector authentication | 5 | `saas/server.js:33,51` Bearer key → SHA-256 lookup; `engine.js bindCollector` (403 on mismatch); `setup.js` 32-byte keys | implemented | Use |
| 4 | Transport encryption | 3, 5 | `server.js:136` `minVersion: 'TLSv1.2'`; `setup.js` EC P-256 demo CA, 7-day certs; `collector/index.js:161` CA-pinned agent; run: default client TLSv1.3 / TLS_AES_256_GCM_SHA384, TLS1.2-only client also accepted | implemented | Say "TLS 1.2+ (1.3 negotiated)". Remove "TLS 1.3 only" |
| 5 | HMAC request signing, replay protection | 5 | Not in code (`createHmac` only used for pseudonyms). Exact resends deduped by `payload_id` | planned | State as gap |
| 6 | Raw local storage encrypted | 5 | Plain SQLite `raw` table (`collector/index.js:42`); no cipher | planned | State as gap |
| 7 | Raw retention | 2, 5 | `RAW_TTL_MIN` default 60 (`index.js:25`), purge each minute (`index.js:298`) | implemented | Use 60 min. Remove "24 h vault" |
| 8 | Tenant isolation mechanism | 5 | Tenant from credential only (`server.js:51–58, 96`); one SQLite file per tenant (`engine.js:85`); `test/engine.test.js` isolation test | implemented | Use. Remove "row-level security" |
| 9 | Residency | 5, 6 | `server.js:26,54` home_region check → 421; run: globex → HTTP 421, nothing stored | implemented | Use (single region runs) |
| 10 | Multi-region ingest, GeoDNS, cells | A4 | Not in code | planned | Appendix, labeled future |
| 11 | Payload IDs | 4, A1 | `crypto.randomUUID()` (v4) in `enqueue`; `seq` per collector | implemented | Say UUID v4. Remove UUIDv7 |
| 12 | UTC timestamps + source timezone | 6, A1 | Policy regex for UTC ms; IANA `source_tz` validated; SaaS window −24 h…+5 min (`server.js:45`) | implemented | Use |
| 13 | Event-time ordering, late data | 6 | `engine.js isLate`, records sorted by event time; run: late payload → `late_records=1` | implemented | Use. Remove "30 s watermark" |
| 14 | Deduplication | 6 | `payload_id` lookup before insert (`engine.js:121`); run: resend → `status=duplicate`, 0 stored | implemented | Use |
| 15 | Outbox, retry, recovery | 6 | `index.js:157–207` seq-ordered sender, ack on matching receipt, backoff 1→2→4→5 s; crash re-aggregation `index.js:306`; run: 153 created / 153 received / 0 dup after 30 s SaaS stop + 45 s collector kill | implemented / simulated | Use run values. Remove "1→30 s jitter, live first, batches of 100" |
| 16 | Egress receipt and digest | 2, 4 | `policy.js buildPassport` (SHA-256 of canonical body); `X-Payload-Digest` checked `server.js:64`; collector compares `received_digest` `index.js:191`; run payload #99 match | implemented | Use. Remove "signed receipt", "hash-chained ledger" |
| 17 | What the receipt proves | 4 | Hash of sanitized bytes only; raw never hashed | implemented | Say integrity + policy evidence; not absence of every leak |
| 18 | Secret scanning | 2 | 7 regex patterns (`collector/pipeline.js`); run: 3 spans on synthetic line | implemented | Use. Remove entropy/email/IP/card detection |
| 19 | SaaS "tripwire" re-scan | — | Not in code (SaaS re-validates the schema only) | planned | Remove |
| 20 | Pseudonymous IDs | 3, A1 | HMAC-SHA256 with local salt → `src-`/`col-` + 10 hex (`policy.js:84`) | implemented | Use. Remove `usr_` user codes (usernames never leave; counts only) |
| 21 | Health thresholds and stale rules | A2 | `saas/config/thresholds.json`; stale 20 s → −1 level, 60 s → Poor; collector late 15 s Fair, offline 30 s Poor | implemented | Use exact values. Replace old table (50/100/250 ms, 25 s/40 s) |
| 22 | Anomaly baseline | 7 | EWMA α 0.1, warm-up 12, \|z\| ≥ 3 + per-metric min delta, sd floor, baseline frozen while anomalous (`engine.js processMetric`) | implemented | Use. Remove "robust z, 3 of 4 windows" |
| 23 | Correlation logic | 7 | Same source within 60 s; repeats increment counter (`engine.js raise`) | implemented | Use. Remove "120 s, topology neighbour" |
| 24 | Recommendation explanation | 7 | Ordered rule table + why + heuristic confidence; run incident #2 rule `overload_down`, 7 alerts, 0.95 | implemented / simulated | Use. Remove "signal contribution %" chart |
| 25 | Safe remediation | 7 | `engine.js approve/rollback`: 6 checks, audit, simulated execution, rollback; tests cover it | implemented (simulated execution) | Use |
| 26 | Aggregation window / heartbeat | 3, A2 | `WINDOW_MS` 2000; heartbeat every 5 s | implemented | Use. Replace 5 s / 10 s |
| 27 | Telemetry sources | 3, 8 | Stream adapter only (NDJSON/SSE/file/syslog). No host agent, ICMP probe, iperf | implemented (adapter) / planned (agents) | Say "stream adapter; simulator today" |
| 28 | Performance numbers | 6, A3 | Run 1044Z: render p95 2.2 s (n 137); stored p95 1.7 s (n 141); breach→alert p95 1.4 s (n 12); offline 30.4 s (n 1); backlog p95 45.0 s (n 15) reported apart; non-backlog max 46.4 s = batch re-aggregated after collector kill | simulated | Use only these, labeled simulated |
| 29 | Earlier figures (6 s / 3 s / 40 s budget; 1,204/1,204; handoff 3.97 s, 1.6 s, 30.7 s, 95/95) | — | Design budget or mixed dry runs; no single traceable run | unverified | Do not use |
| 30 | Organizer-stream validation | 8 | No organizer data in repo or stores (`stream` column only "simulated") | unverified | State as open item |
| 31 | Product name | 1 | UI titles read "Signal Passport"; deck brands product "VeilOps" | unverified | Present Signal Passport as the receipt feature; align UI naming later |
