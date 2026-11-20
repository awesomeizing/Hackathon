import React, { useState } from 'react';
import { Radio, Globe, FileText, Cpu, Check, AlertCircle, ArrowRight, RefreshCw, Key } from 'lucide-react';

export default function TelemetrySwitcher({ activeSource = 'simulated', onSwitchSource }) {
  const [sourceType, setSourceType] = useState(activeSource);
  const [organizerUrl, setOrganizerUrl] = useState('http://127.0.0.1:7200/stream');
  const [bearerToken, setBearerToken] = useState('');
  const [filePath, setFilePath] = useState('outputs/run-records/organizer-stream.jsonl');
  const [isApplying, setIsApplying] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleApply = async () => {
    setIsApplying(true);
    setNotification(null);
    try {
      if (onSwitchSource) {
        await onSwitchSource({
          type: sourceType,
          url: organizerUrl,
          token: bearerToken,
          file: filePath,
        });
      }
      setNotification({
        type: 'success',
        text: `Switched stream input to ${
          sourceType === 'organizer'
            ? 'Organizer Remote Endpoint'
            : sourceType === 'file'
            ? 'Local JSONL Log Tailer'
            : 'Built-in Fallback Simulator'
        }`,
      });
    } catch (e) {
      setNotification({ type: 'error', text: e.message || 'Failed to switch stream source' });
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div className="rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
          <span>Tier 1 Telemetry Source Switcher</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
          EVENT-TIME PRESERVED
        </span>
      </div>

      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        Quickly swap telemetry inputs during live jury evaluation. All inputs pass through the local secret scrubber and preserve exact <code className="text-cyan-300 font-mono">event_timestamp_utc</code>.
      </p>

      {/* Switcher Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {/* Option 1: Built-in Simulator */}
        <div
          onClick={() => setSourceType('simulated')}
          className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
            sourceType === 'simulated'
              ? 'bg-cyan-950/40 border-cyan-500/80 shadow-md shadow-cyan-950/50'
              : 'bg-surface-elevated/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              Built-in Simulator
            </span>
            {sourceType === 'simulated' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
          </div>
          <p className="text-[11px] text-slate-400">
            Offline rehearsals with automatic baseline generation & fault injection.
          </p>
        </div>

        {/* Option 2: Live Organizer Stream */}
        <div
          onClick={() => setSourceType('organizer')}
          className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
            sourceType === 'organizer'
              ? 'bg-emerald-950/40 border-emerald-500/80 shadow-md shadow-emerald-950/50'
              : 'bg-surface-elevated/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              Organizer Live Stream
            </span>
            {sourceType === 'organizer' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
          </div>
          <p className="text-[11px] text-slate-400">
            HTTP NDJSON or SSE endpoint provided by hackathon jury. WebSocket is not supported.
          </p>
        </div>

        {/* Option 3: JSONL File Tailer */}
        <div
          onClick={() => setSourceType('file')}
          className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
            sourceType === 'file'
              ? 'bg-purple-950/40 border-purple-500/80 shadow-md shadow-purple-950/50'
              : 'bg-surface-elevated/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              JSONL / File Tailer
            </span>
            {sourceType === 'file' && <Check className="w-3.5 h-3.5 text-purple-400" />}
          </div>
          <p className="text-[11px] text-slate-400">
            Continuously watch & tail a local log file written by organizer scripts.
          </p>
        </div>
      </div>

      {/* Input Configurations */}
      {sourceType === 'organizer' && (
        <div className="p-4 rounded-lg bg-[#060913]/90 border border-emerald-950/60 mb-5 space-y-3 font-mono text-xs">
          <div>
            <label className="block text-slate-400 mb-1">Organizer Stream URL (HTTP or HTTPS; NDJSON or SSE):</label>
            <input
              type="text"
              value={organizerUrl}
              onChange={(e) => setOrganizerUrl(e.target.value)}
              placeholder="https://jury.cicada2026.internal/stream"
              className="w-full px-3 py-2 rounded bg-surface border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-slate-400 mb-1">Stream Bearer Token / API Key (Optional):</label>
            <input
              type="password"
              value={bearerToken}
              onChange={(e) => setBearerToken(e.target.value)}
              placeholder="Bearer token or leave empty"
              className="w-full px-3 py-2 rounded bg-surface border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      )}

      {sourceType === 'file' && (
        <div className="p-4 rounded-lg bg-[#060913]/90 border border-purple-950/60 mb-5 font-mono text-xs">
          <label className="block text-slate-400 mb-1">File Path to Tail (.jsonl or .log):</label>
          <input
            type="text"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
            placeholder="C:/organizer/telemetry.jsonl"
            className="w-full px-3 py-2 rounded bg-surface border border-slate-700 text-white focus:outline-none focus:border-purple-500"
          />
        </div>
      )}

      {/* Action & Notification */}
      <div className="flex items-center justify-between">
        {notification ? (
          <span
            className={`text-xs font-mono flex items-center gap-1.5 ${
              notification.type === 'success' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {notification.type === 'success' ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5" />
            )}
            {notification.text}
          </span>
        ) : (
          <span className="text-[11px] font-mono text-slate-500">
            Active: {sourceType.toUpperCase()}
          </span>
        )}

        <button
          onClick={handleApply}
          disabled={isApplying}
          className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
        >
          {isApplying ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
          <span>Apply Telemetry Source</span>
        </button>
      </div>
    </div>
  );
}
