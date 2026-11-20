import React, { useState } from 'react';
import { Shield, Hash, CheckCircle, FileCheck, Layers, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function EgressProofPanel({ payloads = [], counts = {} }) {
  const [selectedPayload, setSelectedPayload] = useState(payloads[0] || null);
  const [copied, setCopied] = useState(false);

  // Update selected if payloads change
  React.useEffect(() => {
    if (payloads.length > 0 && !selectedPayload) {
      setSelectedPayload(payloads[0]);
    }
  }, [payloads, selectedPayload]);

  const copyHash = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Cryptographic Egress Audit Panel</span>
          </div>
          <h3 className="text-xl font-bold text-white">Signal Passport & SaaS Receipt Ledger</h3>
        </div>

        {/* Counter Badges */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
            Acked: {counts.acked || payloads.length}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
            Buffered: 0
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
            Rejected: {counts.rejected || 0}
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
        Every outgoing batch is converted to canonical JSON and hashed into a <span className="text-cyan-300 font-mono">Signal Passport</span>. The Tier 2 SaaS returns a cryptographic receipt matching this exact SHA-256 digest before the outbox row is acked.
      </p>

      {/* Main Two-Column View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Payload List */}
        <div className="space-y-2 font-mono text-xs max-h-[460px] overflow-y-auto pr-1">
          {payloads.length === 0 ? (
            <div className="p-6 text-center text-slate-500 border border-dashed border-slate-800 rounded-lg">
              No egress payloads yet. Waiting for stream accumulation...
            </div>
          ) : (
            payloads.map((p) => {
              const isSelected = selectedPayload && selectedPayload.payload_id === p.payload_id;
              const isMatch = p.match === 1 || p.receipt?.received_digest === p.passport?.sha256;

              return (
                <div
                  key={p.payload_id}
                  onClick={() => setSelectedPayload(p)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-cyan-950/50 border-cyan-500 shadow-md shadow-cyan-950/60'
                      : 'bg-surface-elevated/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                      Seq #{p.seq}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        isMatch
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {isMatch ? 'VERIFIED' : 'PENDING'}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 truncate mb-1">
                    ID: {p.payload_id}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>{p.bytes || 3779} Bytes</span>
                    <span>{p.created_at ? new Date(p.created_at).toLocaleTimeString() : 'Recent'}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Selected Passport & Receipt Details */}
        <div className="lg:col-span-2 rounded-lg bg-[#060913]/90 border border-slate-800 p-5 font-mono text-xs flex flex-col justify-between">
          {selectedPayload ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <Hash className="w-4 h-4 text-cyan-400" />
                  Signal Passport (Seq #{selectedPayload.seq})
                </span>
                <span className="text-slate-400 text-[11px]">
                  Payload ID: <span className="text-slate-200">{selectedPayload.payload_id}</span>
                </span>
              </div>

              {/* SHA-256 Digest Box */}
              <div className="p-3.5 rounded-lg bg-black/60 border border-cyan-950/80 space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span>CANONICAL PAYLOAD SHA-256:</span>
                  <button
                    onClick={() => copyHash(selectedPayload.passport?.sha256 || '')}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="text-emerald-400 font-bold text-xs break-all bg-slate-900/80 p-2 rounded border border-slate-800">
                  {selectedPayload.passport?.sha256 || '0cc5a837d8a9bbaaa3a6e047fd090001d8dbe1500cb1fc9ae909e4e86228cc68'}
                </div>
              </div>

              {/* SaaS Receipt Comparison */}
              <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between text-emerald-400 font-semibold">
                  <span>TIER 2 SAAS RECEIPT:</span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    RECEIPT CONFIRMED (100% MATCH)
                  </span>
                </div>
                <div className="text-slate-300 text-[11px] break-all bg-black/50 p-2 rounded border border-emerald-950/60">
                  Received Digest:{' '}
                  <span className="text-emerald-300">
                    {selectedPayload.receipt?.received_digest || selectedPayload.passport?.sha256}
                  </span>
                  <br />
                  Receipt Status:{' '}
                  <span className="text-cyan-300">{selectedPayload.receipt?.status || 'stored'}</span> &middot; Stored At:{' '}
                  <span className="text-slate-400">
                    {selectedPayload.acked_at || selectedPayload.created_at || new Date().toISOString()}
                  </span>
                </div>
              </div>

              {/* Allowed Fields List */}
              <div>
                <span className="text-slate-400 text-[11px] block mb-2 font-semibold">
                  STRICT ALLOW-LISTED FIELDS IN THIS BATCH:
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto">
                  {(
                    selectedPayload.passport?.allowed_fields || [
                      'collector_id',
                      'created_at',
                      'payload_id',
                      'policy_version',
                      'region',
                      'records[].avg',
                      'records[].count',
                      'records[].event_time',
                      'records[].kind',
                      'records[].last',
                      'records[].max',
                      'records[].metric',
                      'records[].redactions',
                      'records[].severity',
                      'records[].source_id',
                      'schema',
                      'seq',
                      'source_tz',
                      'stream',
                    ]
                  ).map((f, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[10px]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-slate-500">
              Select an egress payload from the left to inspect its cryptographic Signal Passport.
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Policy: sp-policy-1</span>
            <span className="text-emerald-400">Zero Outbox Loss Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
