import React from 'react';
import { Layers, Shield, Database, Cpu, Lock, CheckCircle, AlertCircle, Server, ArrowRight } from 'lucide-react';

export default function ArchitectureDrawer({ isOpen = false, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-elevated/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl font-mono text-xs text-slate-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-serif text-white font-bold tracking-wide">
                VeilOps Architecture & Transparent Limitations.
              </h3>
              <p className="text-[11px] text-slate-400 font-sans">
                Engineered for CICADA 2K26 &middot; Node.js Built-in Zero-Dependency Core
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-surface hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

        {/* Visual Data Flow Diagram */}
        <div className="mb-8 p-5 rounded-xl bg-black/70 border border-slate-800">
          <div className="text-[11px] text-cyan-400 uppercase tracking-wider font-semibold mb-3">
            // End-to-End Cryptographic Telemetry Pipeline
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center text-center">
            {/* Step 1 */}
            <div className="p-3 rounded-lg bg-surface border border-slate-700">
              <Server className="w-4 h-4 mx-auto mb-1 text-slate-400" />
              <div className="font-bold text-white text-[11px]">Organizer Stream</div>
              <div className="text-[10px] text-slate-500 mt-1">HTTP / JSONL / Sim</div>
            </div>

            <div className="hidden md:flex justify-center text-cyan-500">&rarr;</div>

            {/* Step 2 */}
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40">
              <Lock className="w-4 h-4 mx-auto mb-1 text-red-400" />
              <div className="font-bold text-red-300 text-[11px]">Tier 1 Local Vault</div>
              <div className="text-[10px] text-slate-400 mt-1">Regex + Entropy Strip</div>
            </div>

            <div className="hidden md:flex justify-center text-cyan-500">&rarr;</div>

            {/* Step 3 */}
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40">
              <Shield className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
              <div className="font-bold text-emerald-300 text-[11px]">Signal Passport</div>
              <div className="text-[10px] text-slate-400 mt-1">Canonical SHA-256</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center text-center mt-3">
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>

            {/* Step 4 */}
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/40">
              <Database className="w-4 h-4 mx-auto mb-1 text-amber-400" />
              <div className="font-bold text-amber-300 text-[11px]">SQLite WAL Outbox</div>
              <div className="text-[10px] text-slate-400 mt-1">0-Loss Outage Buffer</div>
            </div>

            <div className="hidden md:flex justify-center text-cyan-500">&rarr;</div>

            {/* Step 5 */}
            <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/40">
              <Cpu className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
              <div className="font-bold text-cyan-300 text-[11px]">Tier 2 SaaS Cloud</div>
              <div className="text-[10px] text-slate-400 mt-1">EWMA + Tumbler Gate</div>
            </div>
          </div>
        </div>

        {/* Honest Limitations & Production Trade-Offs */}
        <div className="space-y-4">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
            // Production Readiness & Honest Limitations
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Item 1 */}
            <div className="p-4 rounded-xl bg-surface/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hackathon Implementation</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Uses <strong>Node.js 24 SQLite WAL</strong> (zero external npm dependencies), pure native HTTPS + SSE sub-second streaming, and in-memory EWMA Z-score tracking.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-4 rounded-xl bg-surface/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Production Scale-Out Path</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                For &gt;100K eps: replace SQLite outbox with <strong>Kafka / Redpanda</strong>, backend store with <strong>ClickHouse</strong>, and collector with a lightweight <strong>Rust/eBPF agent</strong>.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-4 rounded-xl bg-surface/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Autonomous Safe Remediation</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Remediation actions (Rate-limit ingress, Isolate container) are safely simulated with Tumbler PIN clearance and instant rollback audit snapshots.
              </p>
            </div>

            {/* Item 4 */}
            <div className="p-4 rounded-xl bg-surface/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Residency Enforcement</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Strict <strong>HTTP 421 Misdirected Request</strong> blocks foreign regional traffic before ingestion, ensuring GDPR / RBI data localization compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold font-mono text-xs transition-colors"
          >
            Understood & Return to Console
          </button>
        </div>
      </div>
    </div>
  );
}
