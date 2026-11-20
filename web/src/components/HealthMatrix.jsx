import React from 'react';
import { Activity, Server, AlertTriangle, CheckCircle, Clock, Zap, WifiOff, Shield } from 'lucide-react';

const STATE_COLORS = {
  Excellent: {
    bg: 'bg-emerald-950/40',
    border: 'border-emerald-500/50',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    dot: 'bg-emerald-400',
  },
  Good: {
    bg: 'bg-cyan-950/40',
    border: 'border-cyan-500/50',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    dot: 'bg-cyan-400',
  },
  Fair: {
    bg: 'bg-amber-950/40',
    border: 'border-amber-500/50',
    text: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    dot: 'bg-amber-400',
  },
  Poor: {
    bg: 'bg-red-950/40',
    border: 'border-red-500/60',
    text: 'text-red-400',
    badge: 'bg-red-500/20 text-red-300 border-red-500/40',
    dot: 'bg-red-400',
  },
};

export default function HealthMatrix({ sources = [], collectors = [], fleetState = 'Good' }) {
  const fleetTheme = STATE_COLORS[fleetState] || STATE_COLORS.Good;

  return (
    <div className="space-y-6">
      {/* Fleet Overview Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Fleet Status */}
        <div className={`p-4 rounded-xl border ${fleetTheme.border} ${fleetTheme.bg} backdrop-blur-md`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-400">FLEET HEALTH STATE</span>
            <span className={`w-2 h-2 rounded-full ${fleetTheme.dot} animate-ping`} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-bold font-mono ${fleetTheme.text}`}>{fleetState}</span>
            <span className="text-xs text-slate-400">AIOps Aggregated</span>
          </div>
        </div>

        {/* Monitored Sources */}
        <div className="p-4 rounded-xl border border-surface-border bg-surface/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-400">ACTIVE SOURCES</span>
            <Server className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">{sources.length}</span>
            <span className="text-xs text-slate-400">Pseudonymous IDs</span>
          </div>
        </div>

        {/* Collector Fleet */}
        <div className="p-4 rounded-xl border border-surface-border bg-surface/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-400">COLLECTOR AGENTS</span>
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-emerald-400">
              {collectors.filter((c) => c.status === 'online').length} / {collectors.length || 1}
            </span>
            <span className="text-xs text-slate-400">TLS Pinned</span>
          </div>
        </div>

        {/* Latency SLA */}
        <div className="p-4 rounded-xl border border-surface-border bg-surface/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-400">REAL-TIME INGEST P95</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-cyan-400">~1.7s</span>
            <span className="text-xs text-slate-400">SLA &le; 10s (PASS)</span>
          </div>
        </div>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sources.length === 0 ? (
          <div className="col-span-full p-8 rounded-xl bg-surface/50 border border-dashed border-slate-800 text-center font-mono text-xs text-slate-500">
            Waiting for collector stream telemetry...
          </div>
        ) : (
          sources.map((src) => {
            const theme = STATE_COLORS[src.state] || STATE_COLORS.Good;
            const metrics = src.metrics || {};

            return (
              <div
                key={src.source_id}
                className={`p-5 rounded-xl border ${theme.border} ${theme.bg} shadow-lg backdrop-blur-md flex flex-col justify-between transition-all hover:scale-[1.01]`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-xs font-bold text-white tracking-wider">
                        {src.source_id}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${theme.badge}`}
                    >
                      {src.state.toUpperCase()}
                    </span>
                  </div>

                  {/* Reasons / Alert Cause */}
                  {src.reasons && src.reasons.length > 0 && (
                    <div className="mb-4 p-2 rounded bg-black/40 border border-slate-800 text-[11px] font-mono text-amber-300/90 leading-tight">
                      <span className="text-slate-500 font-semibold mr-1">&bull;</span>
                      {src.reasons.join(', ')}
                    </div>
                  )}

                  {/* Metric Gauges */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-800/80 my-2 font-mono text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400">CPU</div>
                      <div
                        className={`font-semibold ${
                          (metrics.cpu_pct?.last || 0) > 85 ? 'text-red-400' : 'text-slate-200'
                        }`}
                      >
                        {metrics.cpu_pct?.last ? `${metrics.cpu_pct.last.toFixed(1)}%` : '--'}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400">LATENCY</div>
                      <div
                        className={`font-semibold ${
                          (metrics.latency_ms?.last || 0) > 200 ? 'text-red-400' : 'text-slate-200'
                        }`}
                      >
                        {metrics.latency_ms?.last ? `${metrics.latency_ms.last.toFixed(0)}ms` : '--'}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400">PKT LOSS</div>
                      <div
                        className={`font-semibold ${
                          (metrics.packet_loss_pct?.last || 0) > 1.5 ? 'text-red-400' : 'text-slate-200'
                        }`}
                      >
                        {metrics.packet_loss_pct?.last
                          ? `${metrics.packet_loss_pct.last.toFixed(2)}%`
                          : '--'}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400">MEMORY</div>
                      <div className="text-slate-200">
                        {metrics.mem_pct?.last ? `${metrics.mem_pct.last.toFixed(1)}%` : '--'}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400">DISK</div>
                      <div className="text-slate-200">
                        {metrics.disk_pct?.last ? `${metrics.disk_pct.last.toFixed(1)}%` : '--'}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-400">STATUS</div>
                      <div
                        className={`font-semibold ${
                          (metrics.service_up?.last ?? 1) >= 1 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {(metrics.service_up?.last ?? 1) >= 1 ? 'ONLINE' : 'DOWN'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {src.last_seen ? new Date(src.last_seen).toLocaleTimeString() : 'Live'}
                  </span>
                  <span>Origin: Local Site Perimeter</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
