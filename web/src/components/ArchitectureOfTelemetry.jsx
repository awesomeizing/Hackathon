import React from 'react';

export default function ArchitectureOfTelemetry() {
  const steps = [
    {
      num: '01',
      title: 'Perimeter Sanitization',
      description: 'Raw logs and metrics pass through local regex and Shannon entropy scanners. API keys, database passwords, and private IPs are trapped in Tier 1 storage and replaced with deterministic pseudonyms.',
    },
    {
      num: '02',
      title: 'Canonical Passporting',
      description: 'Allow-listed schema records are formatted into canonical JSON. A SHA-256 digest is generated as the Signal Passport, and the SaaS gateway must return a matching receipt before local queues are acknowledged.',
    },
    {
      num: '03',
      title: 'Structural Verification',
      description: 'Tenants are partitioned into isolated SQLite files. Regional residency is strictly enforced with HTTP 421 rejections, preventing cross-tenant and cross-region telemetry leakage.',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Heading & Manifesto */}
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
            The Architecture<br />of Telemetry.
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
            Our process is a deliberate rejection of cloud-side raw text. Every commission is treated as a zero-trust cryptographic installation where secrets never depart the host.
          </p>
        </div>

        {/* Right Column: Clean Numbered Step Rows with Circles */}
        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-6 group">
              {/* Number Circle */}
              <div className="w-10 h-10 rounded-full bg-[#16161a] border border-white/10 flex items-center justify-center font-mono text-xs text-neutral-400 font-medium flex-shrink-0 group-hover:border-white/30 group-hover:text-white transition-colors">
                {step.num}
              </div>

              {/* Text */}
              <div className="pt-1">
                <h3 className="text-xl font-serif text-white tracking-tight mb-2 group-hover:text-neutral-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
