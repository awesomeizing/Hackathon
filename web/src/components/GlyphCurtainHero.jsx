import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, FileCode, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Filter, Hash } from 'lucide-react';

export default function GlyphCurtainHero({ rawLogSample, scrubbedPayloadSample, passportSample }) {
  const [filterActive, setFilterActive] = useState(true);
  const [splitPos, setSplitPos] = useState(50); // percentage split for comparison
  const [glitchText, setGlitchText] = useState('CRYPTO-PERIMETER-ACTIVE');
  const canvasRef = useRef(null);

  // Digital matrix/glyph curtain animation in the center divider
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレロワヲンΣΩΔΨλπ';
    const fontSize = 12;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(6, 9, 19, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#06b6d4'; // Cyan glyphs
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillStyle = i % 3 === 0 ? '#10b981' : '#06b6d4';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const defaultRawLog = rawLogSample || {
    raw_id: 'raw-9941',
    timestamp: new Date().toISOString(),
    hostname: 'prod-db-mumbai-01.internal',
    source_ip: '10.24.18.92',
    raw_log: 'Failed password for admin from 192.168.1.45 port 54211 ssh2 | token=sk-live-98a7sd98a7sd | db_pass=S3cr3t-Pa55! aws_key=AKIAIOSFODNN7EXAMPLE',
    metrics: { cpu: 88.4, memory: 76.2, disk: 61.0, bandwidth_mbps: 420, latency_ms: 145, packet_loss_pct: 3.2, connectivity: 'up' },
  };

  const defaultScrubbed = scrubbedPayloadSample || {
    payload_id: '90a18372-79a8-40e1-97fc-82e622eae122',
    tenant_id: 'acme',
    collector_id: 'col-2b2ccb0ac2',
    collector_version: 'v1.4.2',
    region: 'ap-south-1',
    event_timestamp_utc: new Date().toISOString(),
    source_timezone: 'Asia/Kolkata',
    pseudonymous_source_id: 'src-76151fa033',
    metrics: {
      cpu_pct: 88.4,
      memory_pct: 76.2,
      disk_pct: 61.0,
      bandwidth_mbps: 420,
      latency_ms: 145,
      packet_loss_pct: 3.2,
      service_availability: 1.0,
    },
    security_summary: {
      event_category: 'auth_anomaly',
      failed_login_count_1m: 18,
      risk_score: 82,
      secrets_redacted_count: 3,
    },
    health_state: 'Poor',
    health_reason: 'Latency (145ms > 100ms) and CPU pressure elevated',
    alert_context: 'High packet loss + latency spike correlated on src-76151fa033',
  };

  const defaultPassport = passportSample || {
    policy_version: 'sp-policy-1',
    destination_region: 'ap-south-1',
    allowed_fields: 20,
    sha256: '0cc5a837d8a9bbaaa3a6e047fd090001d8dbe1500cb1fc9ae909e4e86228cc68',
    verified_by_saas: true,
  };

  return (
    <section id="trust-boundary" className="py-20 px-6 max-w-7xl mx-auto border-b border-surface-border relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <Filter className="w-3.5 h-3.5" />
          <span>TIER 1 &rarr; TIER 2 CRYPTOGRAPHIC FIREWALL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Trust Boundary & Telemetry Visualizer
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Observe in real-time how raw strings, secrets, and private IPs are blocked inside Tier 1, while only strict allow-listed JSON leaves with a signed Signal Passport.
        </p>
      </div>

      {/* Main Interactive Firewall Curtain Container */}
      <div className="relative rounded-2xl bg-surface/90 border border-surface-border overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-surface-elevated/80 border-b border-surface-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-semibold flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              FIREWALL STATUS: ACTIVE
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-cyan-300">POLICY: sp-policy-1 (Strict Allow-List)</span>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-slate-400 flex items-center gap-2 cursor-pointer">
              <span>Simulation Scrubber:</span>
              <button
                onClick={() => setFilterActive(!filterActive)}
                className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                  filterActive ? 'bg-cyan-500' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-slate-950 transition-transform ${
                    filterActive ? 'translate-x-5' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>
        </div>

        {/* Comparison Grid: Tier 1 vs Tier 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] relative">
          {/* LEFT COLUMN: TIER 1 LOCAL PERIMETER */}
          <div className="p-6 bg-[#060913]/90 border-r border-surface-border relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-crimson-400" />
                  <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
                    Tier 1: Customer Perimeter (NEVER Leaves)
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-400 font-mono text-[10px]">
                  LOCAL RAW VAULT
                </span>
              </div>

              {/* Raw Log Panel */}
              <div className="rounded-lg bg-black/60 border border-red-950/60 p-4 font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-slate-500">// Raw Telemetry line with embedded credentials & IPs</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300 break-all">
                  <span className="text-slate-500">source_host:</span>{' '}
                  <span className="text-amber-300">{defaultRawLog.hostname}</span>
                  <br />
                  <span className="text-slate-500">source_ip:</span>{' '}
                  <span className="text-amber-300">{defaultRawLog.source_ip}</span>
                  <br />
                  <span className="text-slate-500">raw_log:</span>{' '}
                  <span>
                    Failed password for admin from 192.168.1.45 port 54211 ssh2 | token=
                    <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded border border-red-500/40 font-bold">
                      sk-live-98a7sd98a7sd
                    </span>{' '}
                    | db_pass=
                    <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded border border-red-500/40 font-bold">
                      S3cr3t-Pa55!
                    </span>{' '}
                    aws_key=
                    <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded border border-red-500/40 font-bold">
                      AKIAIOSFODNN7EXAMPLE
                    </span>
                  </span>
                </div>

                {/* Detected Secrets Count */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-red-400 flex items-center gap-1.5 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    3 Secrets Trapped Locally
                  </span>
                  <span className="text-slate-500 text-[11px]">TTL: 60m &middot; Zero Cloud Sync</span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>Storage: Local SQLite WAL (`collector.db`)</span>
              <span className="text-emerald-400 font-semibold">0 Bytes Plaintext Leaked</span>
            </div>
          </div>

          {/* GLYPH CURTAIN DIVIDER EFFECT OVERLAY */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 z-20 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full opacity-60" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-400 to-cyan-500 shadow-[0_0_15px_#06b6d4]" />
          </div>

          {/* RIGHT COLUMN: TIER 2 CENTRAL SAAS EGRESS */}
          <div className="p-6 bg-surface-elevated/40 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Tier 2: Scrubbed Egress Payload
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[10px]">
                  ALLOW-LIST JSON
                </span>
              </div>

              {/* Clean JSON View */}
              <div className="rounded-lg bg-black/70 border border-emerald-950/60 p-4 font-mono text-xs text-slate-300 max-h-[340px] overflow-y-auto">
                <pre className="text-emerald-400/90 leading-snug">
                  {JSON.stringify(defaultScrubbed, null, 2)}
                </pre>
              </div>

              {/* Signal Passport Badge */}
              <div className="mt-4 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 font-mono text-xs flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-cyan-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-cyan-400" />
                    Signal Passport (SHA-256):
                  </span>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> MATCHED BY SAAS
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 truncate bg-black/50 p-1.5 rounded font-mono">
                  {defaultPassport.sha256}
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>Transport: TLS 1.3 Negotiated</span>
              <span className="text-cyan-400">Strict sp-policy-1 Schema</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
