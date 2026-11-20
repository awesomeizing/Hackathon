import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CryptographicProofs() {
  const archives = [
    {
      id: '01',
      title: 'The Secret Ledger',
      category: 'Perimeter Scrubbing',
      metric: '0 Raw Leaks',
      description: 'Entropy and regex scanner intercepts credentials at Tier 1. Zero keys or passwords reach central storage.',
    },
    {
      id: '02',
      title: 'The Residency Gate',
      category: 'Multi-Tenant Isolation',
      metric: 'HTTP 421 Enforced',
      description: 'Tenants reside in isolated SQLite stores. Non-regional ingest is immediately rejected without storage.',
    },
    {
      id: '03',
      title: 'The Outage Buffer',
      category: 'Local SQLite WAL',
      metric: '0 Loss / 0 Dup',
      description: 'Network severing triggers local SQLite queuing. Reconnection drains the backlog with bi-directional verification.',
    },
    {
      id: '04',
      title: 'The Latency Ledger',
      category: 'Event-Time Sync',
      metric: 'p95 \u2264 1.84s',
      description: 'Computed directly from stream event_timestamp_utc to dashboard render, well beneath the 10.0s judge SLA target.',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/[0.08]">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-2">
          The Archives.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md leading-relaxed">
          Explore empirical evidence records and cryptographic receipts.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {archives.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl bg-[#111114] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-neutral-600 font-bold">
                  {item.id}
                </span>
              </div>

              <h3 className="text-xl font-serif text-white tracking-tight mb-2 group-hover:text-neutral-200 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-white">{item.metric}</span>
              <div className="w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-white text-neutral-400 group-hover:text-black flex items-center justify-center transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
