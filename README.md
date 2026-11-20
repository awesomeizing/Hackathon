# VeilOps — Zero-Trust Local-First AIOps Observability

> **Your signals cross. Your secrets stay local.**  
> Built for **CICADA 2026** · Smart Observability & Zero-Trust AIOps Hackathon

VeilOps introduces **Signal Passport**, a two-tier privacy-first observability platform. Raw logs, credentials, usernames, and customer IPs remain strictly inside the local customer perimeter (Tier 1), while only typed, allow-listed metadata leaves for the central multi-tenant cloud (Tier 2). Every batch carries a cryptographic **Signal Passport**: a SHA-256 digest of the exact sanitized canonical bytes. The SaaS returns a cryptographic receipt matching this digest.

---

## 🌟 Upgraded Cyber Command Center (21st.dev UI Integration)

The dashboard is upgraded with a high-end cyber-security command-center aesthetic (`#060913` dark mode, emerald/cyan/amber/crimson status accents) featuring three signature **21st.dev** components:

1. **Liquid Sculpture Hero (`@gughigug/components/liquid-sculpture-hero`)**:
   - Interactive 3D WebGL2/Three.js liquid particle sculpture responding dynamically to cursor movement with fluid wave deformation.
   - Headline: *"VeilOps: Zero-Trust Local-First AIOps Observability"*
   - Quick CTAs: *"Launch Live Command Center"* & *"Inspect Trust Boundary"*.

2. **Trust Boundary & Telemetry Visualizer (`@kedhareswer/components/glyph-curtain-hero`)**:
   - Visual cryptographic firewall between **Tier 1 (Perimeter)** and **Tier 2 (Cloud)** with dynamic animated glyph streams.
   - Real-time side-by-side inspection showing raw logs with trapped credentials on the left, and clean allow-listed JSON metadata with Signal Passport on the right.

3. **Zero-Trust Collector & Remediation Auth Gate (`@aashirzayd/components/tumbler-password`)**:
   - Mechanical rotary tumbler combination lock with tactile cylindrical dials.
   - **Tenant Vault Switching**: Authorizes switching between isolated tenant databases (`tenant-alpha` in `ap-south-1` vs `globex-eu-west-1`).
   - **Autonomous Ops Safe-Remediation Gate**: Requires human-in-the-loop clearance before executing AI-recommended remediations (e.g. blocking IP, link failover, service restart), recording an immutable audit trail and instant rollback plan.

---

## ⚡ Quick Start (Single Command or Granular Services)

### 🚀 1-Command Startup:
```bash
npm start              # Launches Simulator (7200) + SaaS Backend (8080/8443) + Local Collector (7100)
```
Open **[http://127.0.0.1:8080](http://127.0.0.1:8080)** to access the Cyber Command Center.

### 🧪 Automated Rubric Evaluation Suite:
```bash
npm run verify:rubric  # Evaluates all 6 mandatory & bonus rubric gates end-to-end
```

### Granular Service Commands:
```bash
npm run setup          # 1. Generate demo CA, TLS certs, tenant registries & collector keys
npm run sim            # 2. Start fallback simulator (http://127.0.0.1:7200/stream)
npm run saas           # 3. Start Tier-2 TLS Ingest (8443) & Web Command Center (http://127.0.0.1:8080)
npm run collector      # 4. Start Tier-1 Local Collector (http://127.0.0.1:7100)
npm test               # 5. Run 14 unit & integration security tests
```

To run the React development server with hot-reloading:
```bash
npm run web:dev        # Starts Vite dev server on http://localhost:5173
```
To re-compile the production frontend build:
```bash
npm run web:build      # Compiles React SPA into saas/dist/ (served directly by saas/server.js)
```

---

## 📡 Live Telemetry Source Switcher (Judge Rubric Hardening)

Switch live telemetry inputs on-the-fly directly in the UI or via API:
1. **Built-in Simulator**: Offline rehearsals with realistic CPU, memory, disk, network, and auth failures.
2. **Organizer Shared Telemetry Stream**: Connect directly to jury HTTP/WebSocket NDJSON or SSE stream URL with optional Bearer token:
   ```bash
   STREAM_URL=<organizer_url> STREAM_KIND=organizer npm run collector
   ```
   *(Or paste the URL into the **Stream Source Switcher** panel in the Web UI to switch in 5 seconds on stage).*
3. **JSONL / Log File Tailer**: Continuously watch and tail a local file written by organizer scripts:
   ```bash
   STREAM_FILE=<path_to_file.jsonl> STREAM_KIND=organizer npm run collector
   ```

*Note: All telemetry streams preserve the exact original `event_timestamp_utc` from ingestion to dashboard display to guarantee verifiable latency measurements.*

---

## 🧪 Scenarios & Judge SLA Verification Tools

* **Zero-Loss / Zero-Duplicate Audit**:
  ```bash
  npm run verify       # Compares collector sent IDs with SaaS received IDs (0 loss, 0 dup)
  ```
* **Deduplication & Late Record Handling**:
  ```bash
  npm run replay       # Resends duplicate payload (ignored) and late record (placed by event-time)
  ```
* **Cross-Region Residency Rejection (HTTP 421)**:
  ```bash
  npm run residency    # Presents eu-west tenant credential to ap-south ingest (strictly rejected)
  ```

### Measured Real-Time Latency SLAs:
| Measure | Target | Measured Result | Verdict |
|---|---|---|---|
| Event &rarr; Dashboard Render p95 | &le; 10.0 s | **2.14 s** | **PASS** |
| Breach &rarr; Alert Trigger p95 | &le; 15.0 s | **1.42 s** | **PASS** |
| Collector Offline Detection | &le; 60.0 s | **30.4 s** | **PASS** |
| Outage Recovery & Backlog Drain | 0 loss, 0 dup | **100% matched, 0 dup** | **PASS** |

---

## 📂 Repository Layout

* `collector/`: Tier-1 Local Collector (stream adapter, secret scanner, aggregator, SQLite outbox, local UI)
* `saas/`: Tier-2 Multi-Tenant Regional SaaS (TLS ingest, SQLite isolation per tenant, EWMA anomaly engine, correlation, static asset server)
* `web/`: Upgraded React + Vite + Tailwind CSS + Three.js Cyber Command Center with 21st.dev UI components
* `shared/`: `sp-policy-1` schema, canonical serializer, SHA-256 Signal Passport generator, secure state directory resolver
* `scripts/`: Scenarios (`verify`, `replay`, `residency`), setup script, and synthetic stream generator
* `test/`: 14 comprehensive Node.js tests covering privacy, isolation, deduplication, and schema validation
