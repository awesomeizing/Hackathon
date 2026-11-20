# Signal Passport

> **Your signals cross. Your secrets stay local.**

Privacy-first two-tier observability for CICADA 2K26. A local collector keeps raw logs, secrets, usernames and IPs on site,
and sends only typed, allow-listed metadata to a multi-tenant SaaS. Every batch carries a **Signal Passport**: a SHA-256 of the exact sanitized
bytes plus policy version, region and allowed field names. The SaaS returns a receipt with the digest it received.

Docs: [plan](docs/HACKATHON_PLAN.md) · [architecture](docs/ARCHITECTURE.md) · [demo runbook](docs/DEMO_RUNBOOK.md)

## Run (Node ≥ 22.13, no npm install needed)

```bash
npm run setup          # once: demo CA, TLS cert, tenants, collector keys → .local/ (git-ignored)
npm run sim            # terminal 1: SIMULATED stream (only until the organizer stream is plugged in)
npm run saas           # terminal 2: https://localhost:8443 (TLS ingest)  ·  dashboard http://127.0.0.1:8080
npm run collector      # terminal 3: local UI http://127.0.0.1:7100 (raw view + egress proof panel)
npm test               # 12 tests: allow-list, secret containment, dedup, isolation, correlation, remediation
```

Dashboard login: a viewer token from `.local/viewer-tokens.json` (`acme` has data; `initech` proves isolation).

### Organizer stream
```bash
STREAM_URL=<organizer NDJSON/SSE url> STREAM_KIND=organizer npm run collector
STREAM_FILE=<path> STREAM_KIND=organizer npm run collector                     # tailed file instead
STREAM_MAPPING=<mapping.json> …                                               # if their field names differ
```
Field mapping defaults are in `collector/pipeline.js` (`DEFAULT_MAPPING`). Plain-text syslog lines are accepted; sshd
"Failed password" lines are recognised as failed logins. Without `STREAM_KIND=organizer` everything is labelled *simulated*.

### Scenario tools
`npm run verify` (sent vs received IDs) · `npm run replay` (duplicate + late payload) · `npm run residency` (eu-west tenant → 421).
Simulator injections: buttons on the collector UI (`cpu`, `latency`, `incident`, `bruteforce`, `secret`, `stale`, `clear`).

## Layout
`shared/policy.js` allow-list, canonical JSON, passport · `collector/` adapter, redaction, aggregation, outbox, sender, local UI ·
`saas/` TLS ingest, tenant stores, health, anomaly, incidents, recommendations, dashboard · `scripts/` setup, simulator, scenarios.

## Limitations (stated in the demo)
Demo CA instead of public PKI; bearer keys instead of mTLS; single SaaS node; rule-based recommendations; same-source
correlation only (no service map); numeric values could in theory form a covert channel. The passport proves payload integrity and
policy compliance for each batch. It does not prove that no data can ever leak by another path.
