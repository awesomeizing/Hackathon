import React, { useState, useEffect } from 'react';
import SpotlightCard from './SpotlightCard';
import { Lock, Eye, EyeOff, ShieldAlert, CheckCircle2, Shield, Copy, Check } from 'lucide-react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generateRandomString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }
  return result;
}

/**
 * Evervault-style encrypted matrix hover card component inspired by 21st.dev
 * When hovering over sensitive log spans, creates an animated encrypted matrix stream effect.
 */
function EvervaultLogCard({ log, showPlaintext }) {
  const [isHovered, setIsHovered] = useState(false);
  const [randomString, setRandomString] = useState('');

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setRandomString(generateRandomString(40));
      }, 70);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const hasSecrets = log.hits && log.hits.length > 0;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-3.5 rounded-xl border font-mono text-xs transition-all duration-200 relative overflow-hidden ${
        hasSecrets
          ? 'bg-rose-950/20 border-rose-500/30 hover:border-rose-500/60'
          : 'bg-[#080b14]/70 border-white/[0.06] hover:border-white/20'
      }`}
    >
      <div className="flex items-center justify-between mb-1.5 text-[10px] text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">{log.host || 'local-host'}</span>
          <span>&middot;</span>
          <span>{log.ts || new Date().toISOString()}</span>
        </div>
        {hasSecrets && (
          <span className="px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold text-[9px] uppercase">
            {log.hits.length} Secret{log.hits.length > 1 ? 's' : ''} Trapped
          </span>
        )}
      </div>

      {/* Main log line / encrypted matrix display */}
      <div className="text-neutral-300 break-all select-all leading-relaxed">
        {isHovered && hasSecrets ? (
          <div className="flex items-center gap-2 text-rose-400">
            <span className="font-bold text-xs uppercase tracking-wider">[ENCRYPTED AT PERIMETER]</span>
            <span className="text-rose-300 font-mono text-[11px] opacity-80">{randomString}</span>
          </div>
        ) : !showPlaintext && hasSecrets ? (
          <div className="text-neutral-500">
            {log.line ? log.line.replace(/(?:sk-live-[^\s]+|password=[^\s]+|key=[^\s]+)/gi, '••••••••••••••••') : '[Masked Raw Log]'}
          </div>
        ) : (
          <div>{log.line || log.message || '[Telemetry event record]'}</div>
        )}
      </div>
    </div>
  );
}

export default function SecretInspector({ rawLogs = [], secretsCount = 0 }) {
  const [showPlaintext, setShowPlaintext] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('secrets');

  const filteredLogs = rawLogs.filter((r) => {
    if (selectedFilter === 'secrets') return r.hits && r.hits.length > 0;
    if (selectedFilter === 'logs') return r.kind !== 'metric';
    return true;
  });

  return (
    <div className="rounded-2xl bg-[#070a14]/90 border border-white/[0.08] p-6 shadow-2xl backdrop-blur-md">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4 text-rose-400" />
            <span>Tier 1 Raw Telemetry Vault (Local Perimeter Only)</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white tracking-tight">
            Secret Scanner & Zero-Leak Proof.
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPlaintext(!showPlaintext)}
            className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 flex items-center gap-2 hover:bg-white/[0.08] transition-colors"
          >
            {showPlaintext ? <EyeOff className="w-3.5 h-3.5 text-cyan-400" /> : <Eye className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{showPlaintext ? 'Mask Sensitive Text' : 'Reveal Sensitive Spans'}</span>
          </button>
        </div>
      </div>

      <p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
        The Tier 1 Collector scans every incoming log line across credential & secret patterns. Credentials remain trapped in the local <code className="text-cyan-300 font-mono">collector.db</code> SQLite WAL store and are purged periodically. Zero credentials ever reach Supabase.
      </p>

      {/* Stats Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
        <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-between">
          <span className="text-neutral-400">Total Secrets Intercepted:</span>
          <span className="text-rose-400 font-bold text-sm">{secretsCount} spans</span>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
          <span className="text-neutral-400">Cloud Leakage:</span>
          <span className="text-emerald-400 font-bold text-sm">0 Bytes (100% Trapped)</span>
        </div>

        <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
          <span className="text-neutral-400">Permitted Ingest to Cloud:</span>
          <span className="text-cyan-400 font-bold text-sm">Allow-Listed JSON Only</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs">
        <button
          onClick={() => setSelectedFilter('secrets')}
          className={`px-3 py-1.5 rounded-full transition-all ${
            selectedFilter === 'secrets'
              ? 'bg-rose-500 text-white font-semibold'
              : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          Secrets Trapped ({secretsCount})
        </button>

        <button
          onClick={() => setSelectedFilter('logs')}
          className={`px-3 py-1.5 rounded-full transition-all ${
            selectedFilter === 'logs'
              ? 'bg-white text-black font-semibold'
              : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          Logs & Auth
        </button>

        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-3 py-1.5 rounded-full transition-all ${
            selectedFilter === 'all'
              ? 'bg-white text-black font-semibold'
              : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          All Stream Records
        </button>
      </div>

      {/* Evervault Matrix Log Cards List */}
      <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
        {filteredLogs.length === 0 ? (
          <div className="p-8 rounded-xl bg-black/40 border border-dashed border-white/10 text-center font-mono text-xs text-neutral-500">
            No secrets captured yet. Inject a secret leakage scenario below to test the perimeter trap.
          </div>
        ) : (
          filteredLogs.map((log, idx) => (
            <EvervaultLogCard key={log.id || idx} log={log} showPlaintext={showPlaintext} />
          ))
        )}
      </div>
    </div>
  );
}
