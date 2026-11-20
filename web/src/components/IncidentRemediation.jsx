import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, RotateCcw, ShieldAlert, Cpu, Network, Lock, ArrowRight, ShieldCheck, History } from 'lucide-react';
import TumblerPassword from './TumblerPassword';

export default function IncidentRemediation({
  incidents = [],
  auditLogs = [],
  onApproveRemediation,
  onRollbackRemediation,
}) {
  const [selectedIncidentForApproval, setSelectedIncidentForApproval] = useState(null);
  const [actionInProgress, setActionInProgress] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const handleTumblerUnlock = async (incident) => {
    setActionInProgress(true);
    setFeedbackMessage(null);
    try {
      if (onApproveRemediation) {
        await onApproveRemediation(incident.id);
      }
      setFeedbackMessage({
        type: 'success',
        text: `Remediation executed for Incident #${incident.id}. Rollback registered.`,
      });
      setSelectedIncidentForApproval(null);
    } catch (e) {
      setFeedbackMessage({
        type: 'error',
        text: e.message || 'Failed to approve remediation',
      });
    } finally {
      setActionInProgress(false);
    }
  };

  const handleRollback = async (incidentId) => {
    setActionInProgress(true);
    setFeedbackMessage(null);
    try {
      if (onRollbackRemediation) {
        await onRollbackRemediation(incidentId);
      }
      setFeedbackMessage({
        type: 'success',
        text: `Remediation successfully rolled back for Incident #${incidentId}.`,
      });
    } catch (e) {
      setFeedbackMessage({
        type: 'error',
        text: e.message || 'Rollback execution failed',
      });
    } finally {
      setActionInProgress(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Tumbler Password Modal for Safe Remediation */}
      {selectedIncidentForApproval && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg">
            <TumblerPassword
              targetCode="7100"
              title={`Authorize Remediation (Incident #${selectedIncidentForApproval.id})`}
              description={`You are approving automated remediation action "${
                selectedIncidentForApproval.recommendation?.action || 'remediate'
              }" for sources [${selectedIncidentForApproval.sources.join(', ')}]. Align tumbler pins to clear safety gate.`}
              actionLabel="Approve & Execute Remediation"
              onUnlock={() => handleTumblerUnlock(selectedIncidentForApproval)}
              onCancel={() => setSelectedIncidentForApproval(null)}
              mode="remediation"
            />
          </div>
        </div>
      )}

      {/* Main Incident Card Grid */}
      <div className="rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>AIOps Incident Correlation & Remediation Engine</span>
            </div>
            <h3 className="text-xl font-bold text-white">Active Correlated Incidents</h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
              {incidents.filter((i) => i.status === 'open').length} Open Incident(s)
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
          Alerts from the same source within 60s are correlated into a single explained incident. Every proposed remediation requires human clearance via the <span className="text-cyan-300 font-mono">Tumbler Password Gate</span> and registers an instant rollback snapshot.
        </p>

        {/* Feedback Alert */}
        {feedbackMessage && (
          <div
            className={`p-3 rounded-lg font-mono text-xs mb-4 flex items-center gap-2 ${
              feedbackMessage.type === 'success'
                ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-300'
                : 'bg-red-950/60 border border-red-500/50 text-red-300'
            }`}
          >
            {feedbackMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-400" />
            )}
            <span>{feedbackMessage.text}</span>
          </div>
        )}

        {/* Incidents List */}
        <div className="space-y-4">
          {incidents.length === 0 ? (
            <div className="p-8 rounded-lg bg-surface-elevated/30 border border-dashed border-slate-800 text-center font-mono text-xs text-slate-500">
              No active incidents detected. All source baselines are normal.
            </div>
          ) : (
            incidents.map((inc) => {
              const isOpen = inc.status === 'open';
              const isRemediated = inc.status === 'remediated';
              const rec = inc.recommendation || {};

              return (
                <div
                  key={inc.id}
                  className={`p-5 rounded-xl border transition-all ${
                    isOpen
                      ? 'bg-surface-elevated/60 border-amber-500/50 shadow-lg shadow-amber-950/30'
                      : 'bg-surface/50 border-slate-800'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="font-bold text-white text-sm">Incident #{inc.id}</span>
                      <span className="text-slate-500">|</span>
                      <span className="text-cyan-300 font-semibold">
                        Sources: {inc.sources.join(', ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono">
                        {inc.alert_count} Alerts Merged
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold border ${
                          isOpen
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : isRemediated
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-700 text-slate-300 border-slate-600'
                        }`}
                      >
                        {inc.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Signals List */}
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs">
                    <span className="text-slate-400">Signals:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {inc.signals.map((sig, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-300 text-[11px]"
                        >
                          {sig}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Root Cause & Explanation */}
                  <div className="p-3.5 rounded-lg bg-black/60 border border-slate-800 mb-4 font-mono text-xs space-y-2">
                    <div>
                      <span className="text-slate-500">AIOps Root Cause:</span>{' '}
                      <span className="text-white font-medium">{rec.cause || 'Anomalous signal deviation'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Heuristic Why:</span>{' '}
                      <span className="text-slate-300 font-light">{rec.why || 'Correlated thresholds exceeded'}</span>
                    </div>
                    {rec.action && (
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-cyan-300">
                        <span>
                          Recommended Action: <strong className="text-white">{rec.action}</strong>
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Confidence: {(rec.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 font-mono text-xs">
                    <span className="text-slate-500 text-[11px]">
                      Opened: {inc.opened_at ? new Date(inc.opened_at).toLocaleTimeString() : 'Recent'}
                    </span>

                    <div className="flex items-center gap-3">
                      {isRemediated && (
                        <button
                          onClick={() => handleRollback(inc.id)}
                          disabled={actionInProgress}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors active:scale-95 disabled:opacity-50"
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                          <span>Rollback Remediation</span>
                        </button>
                      )}

                      {isOpen && rec.action && (
                        <button
                          onClick={() => setSelectedIncidentForApproval(inc)}
                          disabled={actionInProgress}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Unlock Tumbler & Authorize</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Immutable Audit Trail */}
      <div className="rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <History className="w-4 h-4 text-cyan-400" />
            <span>Immutable Remediation & Ingest Audit Log</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Append-Only SQLite</span>
        </div>

        <div className="rounded-lg bg-black/70 border border-slate-800 p-3 font-mono text-xs max-h-[220px] overflow-y-auto space-y-2">
          {auditLogs.length === 0 ? (
            <div className="text-center py-4 text-slate-500">No audit records logged yet.</div>
          ) : (
            auditLogs.slice(0, 15).map((log, i) => (
              <div
                key={log.id || i}
                className="p-2 rounded bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">{log.at ? new Date(log.at).toLocaleTimeString() : 'Time'}</span>
                  <span className="text-cyan-400 font-semibold">{log.actor || 'system'}</span>
                  <span className="text-white">&rarr; {log.action}</span>
                </div>
                <div className="text-slate-400 truncate max-w-xs">{log.detail}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
