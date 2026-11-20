import React from 'react';

export default function ClaritySection() {
  const reviews = [
    {
      stars: '★★★★★',
      quote: 'VeilOps totally transformed our telemetry boundary. Secrets stay on-premise; it looks and acts like true zero-trust.',
      author: 'Security Lead',
      source: 'Acme Retail · ap-south-1',
    },
    {
      stars: '★★★★★',
      quote: 'Their mathematical approach to egress validation is unrivaled. Not just a logger, but an architectural statement.',
      author: 'Principal Architect',
      source: 'Initech Bank · ap-south-1',
    },
    {
      stars: '★★★★★',
      quote: 'Zero loss during cloud link outage. The SQLite WAL flush on reconnect is completely seamless.',
      author: 'Platform Ops',
      source: 'Globex EU · eu-west-1',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/[0.08] text-center">
      <h2 className="text-5xl sm:text-6xl font-serif italic text-white tracking-tight mb-4">
        Clarity.
      </h2>
      <p className="text-xs font-mono text-neutral-600 mb-10 italic">Illustrative scenarios — not real user testimonials.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-[#111114] border border-white/[0.08] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-amber-400 text-xs tracking-widest mb-4">
                {rev.stars}
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                "{rev.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono">
              <div className="text-white font-medium">{rev.author}</div>
              <div className="text-neutral-500 text-[11px]">{rev.source}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
