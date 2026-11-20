import React from 'react';
import { Layers, Shield, Database, Cpu, Lock, CheckCircle, AlertCircle, Server, ArrowRight, Cloud } from 'lucide-react';

export default function ArchitectureDrawer({ isOpen = false, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111114] border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl font-mono text-xs text-neutral-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-white font-bold tracking-tight">
                VeilOps Architecture & Trust Boundary.
              </h3>
              <p className="text-[11px] text-neutral-400 font-sans">
                CICADA 2026 &middot; Zero-Trust Local-First Telemetry Pipeline with Supabase Tier-2 Cloud
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-colors text-xs"
          >
            Close
          </button>
        </div>

        {/* Visual Data Flow Diagram */}
        <div className="mb-8 p-6 rounded-2xl bg-[#09090b] border border-white/[0.08]">
          <div className="text-[11px] text-cyan-400 uppercase tracking-widest font-semibold mb-4">
            // End-to-End Cryptographic Telemetry Pipeline
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center">
            {/* Step 1 */}
            <div className="p-3.5 rounded-xl bg-[#131316] border border-white/10">
              <Server className="w-4 h-4 mx-auto mb-1.5 text-neutral-400" />
              <div className="font-semibold text-white text-[11px]">Organizer Stream</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">HTTP / JSONL / Sim</div>
            </div>

            <div className="hidden md:flex justify-center text-cyan-400 font-bold">&rarr;</div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30">
              <Lock className="w-4 h-4 mx-auto mb-1.5 text-rose-400" />
              <div className="font-semibold text-rose-300 text-[11px]">Tier 1 Local Vault</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">Regex + Entropy Strip</div>
            </div>

            <div className="hidden md:flex justify-center text-cyan-400 font-bold">&rarr;</div>

            {/* Step 3 */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
              <Shield className="w-4 h-4 mx-auto mb-1.5 text-emerald-400" />
              <div className="font-semibold text-emerald-300 text-[11px]">Signal Passport</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">Canonical SHA-256</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center mt-3">
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>

            {/* Step 4 */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30">
              <Database className="w-4 h-4 mx-auto mb-1.5 text-amber-400" />
              <div className="font-semibold text-amber-300 text-[11px]">SQLite WAL Outbox</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">0-Loss Outage Buffer</div>
            </div>

            <div className="hidden md:flex justify-center text-cyan-400 font-bold">&rarr;</div>

            {/* Step 5 */}
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
              <Cloud className="w-4 h-4 mx-auto mb-1.5 text-cyan-400" />
              <div className="font-semibold text-cyan-300 text-[11px]">Supabase Cloud Tier-2</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">Postgres RLS + Realtime</div>
            </div>
          </div>
        </div>

        {/* Honest Limitations & Architecture Notes */}
        <div className="space-y-4">
          <div className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">
            // Core Architecture & Production Considerations
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#141418] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Trust Privacy Invariant</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                Raw logs, passwords, and private IPs are trapped in Tier 1 local storage. Supabase receives strictly allow-listed metrics and deterministic hashes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141418] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Supabase Cloud + Local Fallback</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                Seamless hybrid persistence: persists to Supabase with Row-Level Security (RLS) when configured, or runs smoothly on native local SQLite WAL with 0 external dependencies.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141418] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Autonomous Safe Remediation</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                Remediation actions are simulated safely with Tumbler PIN clearance, audit snapshots, and instant 1-click rollback restoration.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141418] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Data Residency (HTTP 421)</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                Cross-region traffic is immediately rejected with HTTP 421 Misdirected Request prior to storage, ensuring strict sovereignty boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold font-sans text-xs hover:bg-neutral-200 transition-colors"
          >
            Return to Console
          </button>
        </div>
      </div>
    </div>
  );
}
