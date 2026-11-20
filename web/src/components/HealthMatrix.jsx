import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import NumberTicker from './NumberTicker';
import { Server, Shield, Zap, Clock } from 'lucide-react';

const STATE_COLORS = {
  Excellent: {
    spotlight: 'rgba(52, 211, 153, 0.15)',
    border: 'rgba(52, 211, 153, 0.4)',
    text: 'text-emerald-400',
    badge: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40',
    dot: 'bg-emerald-400',
  },
  Good: {
    spotlight: 'rgba(56, 189, 248, 0.15)',
    border: 'rgba(56, 189, 248, 0.4)',
    text: 'text-cyan-400',
    badge: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40',
    dot: 'bg-cyan-400',
  },
  Fair: {
    spotlight: 'rgba(251, 191, 36, 0.15)',
    border: 'rgba(251, 191, 36, 0.4)',
    text: 'text-amber-400',
    badge: 'bg-amber-950/60 text-amber-300 border-amber-500/40',
    dot: 'bg-amber-400',
  },
  Poor: {
    spotlight: 'rgba(248, 113, 113, 0.18)',
    border: 'rgba(248, 113, 113, 0.5)',
    text: 'text-rose-400',
    badge: 'bg-rose-950/60 text-rose-300 border-rose-500/40',
    dot: 'bg-rose-400',
  },
};

export default function HealthMatrix({
  sources = [],
  collectors = [],
  fleetState = 'Good',
  timing = {},
}) {
  const fleetTheme = STATE_COLORS[fleetState] || STATE_COLORS.Good;

  // Active online collectors count
  const onlineCollectors = collectors.filter(
    (c) => c.status === 'online' || (c.age_s !== undefined && c.age_s <= 60)
  ).length;
  const totalCollectors = Math.max(collectors.length, 1);

  // Dynamic ingest / render p95 latency
  const renderP95 = timing?.render?.p95
    ? (timing.render.p95 / 1000).toFixed(2)
    : timing?.ingest?.p95
    ? (timing.ingest.p95 / 1000).toFixed(2)
    : null;

  // Helper to extract numeric metrics with safe fallbacks
  const getMetricVal = (m, key) => {
    if (!m) return null;
    const item = m[key];
    if (typeof item === 'number') return item;
    if (item && typeof item.value === 'number') return item.value;
    if (item && typeof item.last === 'number') return item.last;
    if (item && typeof item.avg === 'number') return item.avg;
    return null;
  };
  const fmt = (v, decimals, suffix) =>
    v !== null ? <NumberTicker value={v} decimals={decimals} suffix={suffix} /> : <span className="text-neutral-600">—</span>;

  return (
    <div className="space-y-6">
      {/* 4 Overview Header Cards with Mouse-Tracking Spotlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Fleet Health State */}
        <SpotlightCard
          spotlightColor={fleetTheme.spotlight}
          borderColor={fleetTheme.border}
          activeBorderColor={fleetTheme.border}
          className="p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
              Fleet Health State
            </span>
            <span className={`w-2 h-2 rounded-full ${fleetTheme.dot} animate-ping`} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-bold font-serif ${fleetTheme.text}`}>
              {fleetState}
            </span>
            <span className="text-[11px] font-mono text-neutral-500">AIOps Aggregated</span>
          </div>
        </SpotlightCard>

        {/* Card 2: Monitored Sources */}
        <SpotlightCard
          spotlightColor="rgba(56, 189, 248, 0.14)"
          activeBorderColor="rgba(56, 189, 248, 0.4)"
          className="p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
              Active Sources
            </span>
            <Server className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">
              {sources.length}
            </span>
            <span className="text-[11px] font-mono text-neutral-500">Pseudonymous IDs</span>
          </div>
        </SpotlightCard>

        {/* Card 3: Collector Fleet */}
        <SpotlightCard
          spotlightColor="rgba(52, 211, 153, 0.14)"
          activeBorderColor="rgba(52, 211, 153, 0.4)"
          className="p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
              Collector Agents
            </span>
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-emerald-400">
              {onlineCollectors} / {totalCollectors}
            </span>
            <span className="text-[11px] font-mono text-neutral-500">TLS Pinned</span>
          </div>
        </SpotlightCard>

        {/* Card 4: Ingest / Render P95 */}
        <SpotlightCard
          spotlightColor="rgba(251, 191, 36, 0.14)"
          activeBorderColor="rgba(251, 191, 36, 0.4)"
          className="p-5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
              Event → Render P95
            </span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-cyan-400">
              {renderP95 !== null ? `${renderP95}s` : '—'}
            </span>
            <span className="text-[11px] font-mono text-neutral-500">
              {renderP95 !== null ? 'SLA ≤ 10s (PASS)' : 'not measured yet'}
            </span>
          </div>
        </SpotlightCard>
      </div>

      {/* Sources Grid with Mouse-Tracking Spotlight on every card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sources.length === 0 ? (
          <div className="col-span-full p-8 rounded-2xl bg-[#080b14]/60 border border-dashed border-white/10 text-center font-mono text-xs text-neutral-500">
            Waiting for collector stream telemetry...
          </div>
        ) : (
          sources.map((src) => {
            const theme = STATE_COLORS[src.state] || STATE_COLORS.Good;
            const m = src.metrics || {};

            const cpu = getMetricVal(m, 'cpu_pct');
            const latency = getMetricVal(m, 'latency_ms');
            const pktLoss = getMetricVal(m, 'packet_loss_pct');
            const mem = getMetricVal(m, 'mem_pct');
            const disk = getMetricVal(m, 'disk_pct');
            const serviceUp = getMetricVal(m, 'service_up');

            return (
              <SpotlightCard
                key={src.source_id}
                spotlightColor={theme.spotlight}
                borderColor={theme.border}
                activeBorderColor={theme.border}
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-neutral-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">
                        {src.source_id}
                      </span>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${theme.badge}`}
                    >
                      {src.state.toUpperCase()}
                    </span>
                  </div>

                  {/* Reasons / Cause */}
                  {src.reasons && src.reasons.length > 0 && (
                    <div className="mb-4 p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] font-mono text-amber-300/90 leading-tight">
                      <span className="text-neutral-500 mr-1">&bull;</span>
                      {src.reasons.join(', ')}
                    </div>
                  )}

                  {/* Metric Gauges Grid with NumberTickers */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/[0.06] my-2 font-mono text-xs">
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                        CPU
                      </div>
                      <div className={`font-semibold ${cpu !== null && cpu > 85 ? 'text-red-400' : 'text-neutral-200'}`}>
                        {cpu !== null ? <NumberTicker value={cpu} decimals={1} suffix="%" /> : <span className="text-neutral-600">—</span>}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                        LATENCY
                      </div>
                      <div className={`font-semibold ${latency !== null && latency > 200 ? 'text-red-400' : 'text-neutral-200'}`}>
                        {latency !== null ? <NumberTicker value={latency} decimals={0} suffix="ms" /> : <span className="text-neutral-600">—</span>}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                        PKT LOSS
                      </div>
                      <div className={`font-semibold ${pktLoss !== null && pktLoss > 1.5 ? 'text-red-400' : 'text-neutral-200'}`}>
                        {pktLoss !== null ? <NumberTicker value={pktLoss} decimals={2} suffix="%" /> : <span className="text-neutral-600">—</span>}
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                        MEMORY
                      </div>
                      <div className="text-neutral-200 font-semibold">
                        {mem !== null ? <NumberTicker value={mem} decimals={1} suffix="%" /> : <span className="text-neutral-600">—</span>}
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                        DISK
                      </div>
                      <div className="text-neutral-200 font-semibold">
                        {disk !== null ? <NumberTicker value={disk} decimals={1} suffix="%" /> : <span className="text-neutral-600">—</span>}
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                        STATUS
                      </div>
                      <div
                        className={`font-semibold text-xs ${
                          serviceUp === null ? 'text-neutral-600' : serviceUp >= 1 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {serviceUp === null ? '—' : serviceUp >= 1 ? 'ONLINE' : 'DOWN'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {src.age_s !== undefined ? `${src.age_s}s ago` : 'Live'}
                  </span>
                  <span>Origin: Local Site Perimeter</span>
                </div>
              </SpotlightCard>
            );
          })
        )}
      </div>
    </div>
  );
}
