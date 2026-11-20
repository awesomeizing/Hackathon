import React from 'react';
import { Shield, Lock, Database, ArrowRight } from 'lucide-react';

export default function CuratedAssemblages({ onLaunchConsole }) {
  const items = [
    {
      num: '01',
      title: 'Perimeter Vault',
      tag: 'Tier 1 Local',
      description: 'API tokens, private IPs, and raw SQL queries are trapped and scrubbed on-premise.',
      badge: 'Zero Cloud Plaintext',
      accent: 'text-emerald-400',
    },
    {
      num: '02',
      title: 'Signal Passport',
      tag: 'Cryptographic Digest',
      description: 'Canonical JSON payload sealed with a SHA-256 hash verified by bi-directional SaaS receipts.',
      badge: 'SHA-256 Sealed',
      accent: 'text-cyan-400',
    },
    {
      num: '03',
      title: 'WAL Outbox Buffer',
      tag: 'Outage Resilient',
      description: 'When cloud connection drops, events accumulate in local SQLite storage and flush with 0 loss.',
      badge: 'Zero Loss / 0 Dup',
      accent: 'text-amber-400',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/[0.08]">
      {/* Header with right-aligned link */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-2">
            Curated Assemblages.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md leading-relaxed">
            Living telemetry components engineered for complete zero-trust perimeter isolation.
          </p>
        </div>

        <button
          onClick={onLaunchConsole}
          className="text-xs font-mono tracking-widest text-neutral-400 hover:text-white uppercase flex items-center gap-2 group transition-colors"
        >
          <span>View Complete Console</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3 Luxury Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.num}
            className="group rounded-3xl bg-[#111114] border border-white/[0.08] hover:border-white/20 p-8 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Top tag & number */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-neutral-600 font-bold">
                  {item.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif text-white tracking-tight mb-3 group-hover:text-neutral-200 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                {item.description}
              </p>
            </div>

            {/* Bottom status */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">{item.title}</span>
              <span className={`${item.accent} font-medium`}>{item.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
