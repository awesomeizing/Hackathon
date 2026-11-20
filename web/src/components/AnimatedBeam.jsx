import React from 'react';
import { Shield, Lock, Server, Cloud, WifiOff, ArrowRight } from 'lucide-react';

/**
 * AnimatedBeam component inspired by 21st.dev
 * Connects Tier 1 Local Collector -> Privacy Scrubber -> Signal Passport -> Supabase Tier 2
 * Visually pauses, glows amber, and displays "OUTAGE BUFFER ACTIVE" when saasLinkCut is true.
 */
export default function AnimatedBeamTopology({ saasLinkCut = false, bufferedCount = 0 }) {
  const nodes = [
    {
      id: 'collector',
      label: 'Tier 1 Local Collector',
      sub: 'Edge Perimeter',
      icon: Server,
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/40 border-cyan-500/40',
    },
    {
      id: 'scrubber',
      label: 'Privacy Scrubber',
      sub: 'Regex & Entropy Trap',
      icon: Lock,
      color: 'text-rose-400',
      bg: 'bg-rose-950/40 border-rose-500/40',
    },
    {
      id: 'passport',
      label: 'Signal Passport',
      sub: 'Canonical SHA-256',
      icon: Shield,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/40 border-emerald-500/40',
    },
    {
      id: 'cloud',
      label: 'Supabase Tier 2',
      sub: 'Postgres & Realtime',
      icon: Cloud,
      color: saasLinkCut ? 'text-amber-400' : 'text-sky-400',
      bg: saasLinkCut ? 'bg-amber-950/40 border-amber-500/50' : 'bg-sky-950/40 border-sky-500/40',
    },
  ];

  return (
    <div className="rounded-2xl bg-[#070a14]/90 border border-white/[0.08] p-5 shadow-2xl relative overflow-hidden backdrop-blur-xl mb-6">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
            // Zero-Trust Topology Pipeline
          </div>
          <span className="text-neutral-600">&middot;</span>
          <span className="font-mono text-[11px] text-neutral-400">
            {saasLinkCut ? 'SaaS Link Severed' : 'End-to-End Cryptographic Stream'}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          {saasLinkCut ? (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 flex items-center gap-1.5 animate-pulse">
              <WifiOff className="w-3 h-3 text-amber-400" />
              <span>OUTBOX BUFFERING ({bufferedCount} QUEUED)</span>
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>STREAM NOMINAL</span>
            </span>
          )}
        </div>
      </div>

      {/* Nodes + Connecting Beam */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isLast = i === nodes.length - 1;

          return (
            <div key={node.id} className="relative flex items-center">
              {/* Node Card */}
              <div
                className={`w-full p-3.5 rounded-xl border ${node.bg} backdrop-blur-md flex items-center gap-3 transition-all duration-300 hover:border-white/20`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-black/40 border border-white/10 ${node.color}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-serif font-bold text-white truncate">
                    {node.label}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">
                    {node.sub}
                  </div>
                </div>
              </div>

              {/* Connecting animated arrow on desktop */}
              {!isLast && (
                <div className="hidden md:flex absolute -right-3 z-20 items-center justify-center pointer-events-none">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                      saasLinkCut && i === 2
                        ? 'bg-amber-950 border-amber-500/60 text-amber-400'
                        : 'bg-[#0f1422] border-white/10 text-cyan-400'
                    }`}
                  >
                    {saasLinkCut && i === 2 ? '||' : '→'}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Animated Light Beam Line */}
      <div className="relative mt-4 h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-700 ${
            saasLinkCut
              ? 'w-3/4 bg-gradient-to-r from-emerald-500 via-rose-500 to-amber-500 opacity-60'
              : 'w-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-sky-400 animate-pulse'
          }`}
        />
      </div>
    </div>
  );
}
