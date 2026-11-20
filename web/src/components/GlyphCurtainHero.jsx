import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, CheckCircle2, AlertTriangle, Hash, Filter } from 'lucide-react';

export default function GlyphCurtainHero({ rawLogSample, scrubbedPayloadSample, passportSample }) {
  const [filterActive, setFilterActive] = useState(true);
  const canvasRef = useRef(null);

  // Digital matrix glyph curtain animation in center divider
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const characters = '010101アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホΣΩΔλπ';
    const fontSize = 11;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 10, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.6)' : 'rgba(56, 189, 248, 0.5)';
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

  // Determine whether we have live data or are showing illustrative fallback
  const hasLiveRaw = !!rawLogSample;
  const hasLiveScrubbed = !!scrubbedPayloadSample;
  const hasLivePassport = !!passportSample;

  const defaultRawLog = rawLogSample || {
    raw_id: 'raw-example',
    hostname: 'example-host.internal',
    source_ip: '10.x.x.x',
    raw_log: 'Failed password for admin | token=sk-live-XXXXX | db_pass=REDACTED aws_key=AKIAEXAMPLE',
  };

  const defaultScrubbed = scrubbedPayloadSample || {
    payload_id: 'example-payload-id',
    tenant_id: 'acme',
    collector_id: 'col-example',
    region: 'ap-south-1',
    event_timestamp_utc: new Date().toISOString(),
    source_timezone: 'Asia/Kolkata',
    pseudonymous_source_id: 'src-example',
    metrics: { cpu_pct: null, memory_pct: null, disk_pct: null, latency_ms: null },
    security_summary: { event_category: 'example', failed_login_count_1m: 0, secrets_redacted_count: 0 },
    health_state: 'Unknown',
    health_reason: '— inject a scenario to see live data —',
  };

  const defaultPassport = passportSample || {
    sha256: '— no live data yet — inject a secret scenario to see real digest —',
    verified_by_saas: false,
  };

  return (
    <section id="trust-boundary" className="py-24 px-6 max-w-7xl mx-auto border-b border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-2">
          Trust Boundary.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md leading-relaxed">
          Raw credentials stay trapped in Tier 1. Only allow-listed schema departs with a signed Signal Passport.
        </p>
        {/* Illustrative vs live indicator */}
        {!hasLiveRaw && !hasLiveScrubbed && !hasLivePassport && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/30 font-mono text-[11px] text-amber-300">
            <span className="font-bold">⚠ ILLUSTRATIVE EXAMPLE</span>
            <span className="text-amber-400/60">—</span>
            <span>inject a 'secret' scenario in the dock to see live data flow through this boundary</span>
          </div>
        )}
        {(hasLiveRaw || hasLiveScrubbed || hasLivePassport) && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 font-mono text-[11px] text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold">LIVE DATA</span>
            <span className="text-emerald-400/60">—</span>
            <span>showing actual payload from collector pipeline</span>
          </div>
        )}
      </div>

      {/* Main Firewall Container */}
      <div className="rounded-3xl bg-[#111114] border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#141418] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white font-medium">CRYPTOGRAPHIC BOUNDARY: ACTIVE</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">SCHEMA: sp-policy-1</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-500 text-[11px]">SCRUBBER:</span>
            <span className="text-emerald-400 font-semibold">100% ON-PREMISE</span>
          </div>
        </div>

        {/* Comparison Grid: Tier 1 vs Tier 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] relative">
          {/* LEFT COLUMN: TIER 1 LOCAL PERIMETER */}
          <div className="p-8 bg-[#0a0a0c] border-r border-white/[0.06] relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  Tier 1 &middot; Local Perimeter (Trapped)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 font-mono text-[10px]">
                  LOCAL RAW VAULT
                </span>
              </div>

              {/* Raw Log Panel */}
              <div className="rounded-2xl bg-black/60 border border-white/[0.06] p-5 font-mono text-xs text-neutral-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-neutral-600">// Raw log line with trapped credentials</span>
                </div>
                <div className="p-3 rounded-xl bg-[#121216] border border-white/[0.04] text-neutral-300 break-all leading-normal">
                  <span className="text-neutral-500">source_host:</span>{' '}
                  <span className="text-neutral-300">{defaultRawLog.hostname}</span>
                  <br />
                  <span className="text-neutral-500">source_ip:</span>{' '}
                  <span className="text-neutral-300">{defaultRawLog.source_ip}</span>
                  <br />
                  <span className="text-neutral-500">raw_log:</span>{' '}
                  <span>
                    Failed auth for admin from 10.24.18.92 | token=
                    <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded font-bold border border-red-500/30">
                      sk-live-98a7sd...
                    </span>{' '}
                    | db_pass=
                    <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded font-bold border border-red-500/30">
                      S3cr3t-Pa55!
                    </span>{' '}
                    aws_key=
                    <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded font-bold border border-red-500/30">
                      AKIAIOS...
                    </span>
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-red-400 flex items-center gap-1.5 font-medium">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    3 Trapped Credentials
                  </span>
                  <span className="text-neutral-500 text-[11px]">Zero Cloud Sync</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-500">
              <span>Local Storage: `collector.db`</span>
              <span className="text-emerald-400 font-medium">0 Bytes Plaintext Leaked</span>
            </div>
          </div>

          {/* GLYPH CURTAIN DIVIDER EFFECT */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 z-20 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full opacity-50" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/20" />
          </div>

          {/* RIGHT COLUMN: TIER 2 CENTRAL SAAS EGRESS */}
          <div className="p-8 bg-[#111114] relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Tier 2 &middot; Scrubbed Egress
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                  ALLOW-LIST JSON
                </span>
              </div>

              {/* Clean JSON View */}
              <div className="rounded-2xl bg-black/70 border border-white/[0.06] p-5 font-mono text-xs max-h-[300px] overflow-y-auto">
                <pre className="text-neutral-300 leading-snug">
                  {JSON.stringify(defaultScrubbed, null, 2)}
                </pre>
              </div>

              {/* Signal Passport */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#141418] border border-white/[0.06] font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-cyan-400" />
                    Signal Passport (SHA-256):
                  </span>
                  {hasLivePassport && defaultPassport.verified_by_saas ? (
                    <span className="text-emerald-400 text-[11px] font-semibold">
                      MATCHED BY SAAS
                    </span>
                  ) : hasLivePassport ? (
                    <span className="text-amber-400 text-[11px] font-semibold">
                      PENDING RECEIPT
                    </span>
                  ) : (
                    <span className="text-neutral-500 text-[11px]">
                      ILLUSTRATIVE
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-neutral-400 truncate bg-black/60 p-2 rounded-lg font-mono">
                  {defaultPassport.sha256}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-500">
              <span>Transport: TLS 1.3</span>
              <span className="text-neutral-400">Strict sp-policy-1 Schema</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
