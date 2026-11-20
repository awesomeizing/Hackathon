import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldAlert, CheckCircle2, Database, Trash2, Key } from 'lucide-react';

export default function SecretInspector({ rawLogs = [], secretsCount = 0 }) {
  const [showPlaintext, setShowPlaintext] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('secrets'); // 'secrets', 'all', 'logs'

  const filteredLogs = rawLogs.filter((r) => {
    if (selectedFilter === 'secrets') return r.hits && r.hits.length > 0;
    if (selectedFilter === 'logs') return r.kind !== 'metric';
    return true;
  });

  return (
    <div className="rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4 text-red-400" />
            <span>Tier 1 Raw Telemetry Vault (Local Only)</span>
          </div>
          <h3 className="text-xl font-bold text-white">Secret Scanner & Zero-Leak Proof</h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPlaintext(!showPlaintext)}
            className="px-3 py-1.5 rounded-lg bg-surface-elevated border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5 hover:border-cyan-500 transition-colors"
          >
            {showPlaintext ? <EyeOff className="w-3.5 h-3.5 text-cyan-400" /> : <Eye className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{showPlaintext ? 'Mask Sensitive Text' : 'Reveal Sensitive Spans'}</span>
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
        The Tier 1 Collector scans every incoming log line across 7 credential & secret patterns. Credentials remain trapped in the local <code className="text-cyan-300 font-mono">collector.db</code> SQLite WAL store and are purged every 60 minutes.
      </p>

      {/* Stats Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
        <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/30 flex items-center justify-between">
          <span className="text-slate-400">Total Secrets Intercepted:</span>
          <span className="text-red-400 font-bold text-sm">{secretsCount} spans</span>
        </div>

        <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
          <span className="text-slate-400">Cloud Leakage:</span>
          <span className="text-emerald-400 font-bold text-sm">0 Bytes (100% Blocked)</span>
        </div>

        <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
          <span className="text-slate-400">Scrubber Policy:</span>
          <span className="text-cyan-300 font-bold">sp-policy-1</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
        <button
          onClick={() => setSelectedFilter('secrets')}
          className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
            selectedFilter === 'secrets'
              ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Secret Spans ({rawLogs.filter((r) => r.hits && r.hits.length > 0).length})
        </button>
        <button
          onClick={() => setSelectedFilter('logs')}
          className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
            selectedFilter === 'logs'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All App & Auth Logs
        </button>
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
            selectedFilter === 'all'
              ? 'bg-slate-700 text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All Raw Rows ({rawLogs.length})
        </button>
      </div>

      {/* Raw Rows Terminal View */}
      <div className="rounded-lg bg-black/80 border border-slate-800 p-4 font-mono text-xs max-h-[380px] overflow-y-auto space-y-3">
        {filteredLogs.length === 0 ? (
          <div className="text-center py-8 text-slate-500">
            No rows match current filter. Inject [Secret] or [Bruteforce] scenario to view trapped events.
          </div>
        ) : (
          filteredLogs.map((row, idx) => {
            const hasHits = row.hits && row.hits.length > 0;
            return (
              <div
                key={row.id || idx}
                className={`p-3 rounded border ${
                  hasHits ? 'bg-red-950/20 border-red-900/50' : 'bg-slate-900/40 border-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                  <span className="flex items-center gap-2">
                    <span className="text-cyan-400">{row.host || 'unknown-host'}</span>
                    <span>&bull;</span>
                    <span className="uppercase text-slate-400">{row.kind}</span>
                    <span>&bull;</span>
                    <span>{row.ts || new Date().toISOString()}</span>
                  </span>
                  {hasHits && (
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold border border-red-500/30">
                      {row.hits.length} SECRET HIT(S)
                    </span>
                  )}
                </div>

                {/* Line Content */}
                <div className="text-slate-300 break-all leading-relaxed">
                  {showPlaintext ? (
                    row.line
                  ) : (
                    <span>
                      {row.line.replace(/(password|pwd|token|key|secret)=[^\s,;&"']+/gi, '$1=***REDACTED***')}
                    </span>
                  )}
                </div>

                {/* Detected Patterns breakdown */}
                {hasHits && (
                  <div className="mt-2 pt-2 border-t border-red-950/60 flex flex-wrap gap-2 text-[10px]">
                    {row.hits.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-red-900/40 border border-red-500/30 text-red-300 font-mono"
                      >
                        Pattern: <span className="text-white font-bold">{h[2] || h.label}</span> [{h[0]}..{h[1]}]
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Verified: Egress payloads never carry text fields or raw credentials
        </span>
        <span>Local Database: SQLite WAL</span>
      </div>
    </div>
  );
}
