import React, { useState, useEffect } from 'react';
import {
  Activity,
  Shield,
  Lock,
  Layers,
  AlertTriangle,
  Zap,
  Radio,
  FileCheck,
  Server,
  RefreshCw,
  LogOut,
  Key,
  Info,
} from 'lucide-react';
import HealthMatrix from './HealthMatrix';
import GlyphCurtainHero from './GlyphCurtainHero';
import SecretInspector from './SecretInspector';
import EgressProofPanel from './EgressProofPanel';
import IncidentRemediation from './IncidentRemediation';
import SlaMetricsPanel from './SlaMetricsPanel';
import TelemetrySwitcher from './TelemetrySwitcher';
import TumblerPassword from './TumblerPassword';
import ArchitectureDrawer from './ArchitectureDrawer';

export default function CommandCenter({
  activeTenant = 'acme',
  tenantToken = '',
  tenantName = 'Acme Retail (ap-south-1)',
  onSwitchTenant,
}) {
  const [activeTab, setActiveTab] = useState('health'); // 'health', 'firewall', 'secrets', 'egress', 'remediation', 'sla', 'stream'
  const [tenantModalOpen, setTenantModalOpen] = useState(false);
  const [targetTenantToUnlock, setTargetTenantToUnlock] = useState(null);
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [saasLinkCut, setSaasLinkCut] = useState(false);

  // Live data states
  const [overview, setOverview] = useState({
    fleet_state: 'Good',
    sources: [],
    collectors: [],
    incidents: [],
    timing: {},
    audit: [],
  });
  const [collectorState, setCollectorState] = useState({
    collector: {},
    stream: { connected: true, events: 0, source: 'simulated' },
    counts: { raw_rows: 0, secrets_seen: 0, acked: 0, rejected: 0 },
    raw: [],
    payloads: [],
    buffered: 0,
    link_cut: false,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch SaaS overview & Collector state
  const fetchData = async () => {
    try {
      // 1. SaaS Overview
      const res = await fetch('/api/overview', {
        headers: tenantToken ? { authorization: `Bearer ${tenantToken}` } : {},
      });
      if (res.ok) {
        const data = await res.json();
        setOverview(data);
      }
    } catch {}

    try {
      // 2. Collector State
      const colRes = await fetch('/collector-api/state?raw=all');
      if (colRes.ok) {
        const colData = await colRes.json();
        setCollectorState(colData);
        if (colData.link_cut !== undefined) {
          setSaasLinkCut(colData.link_cut);
        }

        // Post live rendered timing sample to SaaS engine for real latency measurement
        if (colData.payloads?.[0]?.payload_id) {
          fetch('/api/timing', {
            method: 'POST',
            headers: tenantToken ? { authorization: `Bearer ${tenantToken}` } : {},
            body: JSON.stringify({
              samples: [{
                payload_id: colData.payloads[0].payload_id,
                rendered_ms: Date.now(),
              }],
            }),
          }).catch(() => {});
        }
      }
    } catch {}
  };

  // Poll every 1.5 seconds for live real-time updates
  useEffect(() => {
    fetchData();
    const timer = setInterval(fetchData, 1500);
    return () => clearInterval(timer);
  }, [tenantToken]);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await fetchData();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleToggleSaasLink = async () => {
    const nextCut = !saasLinkCut;
    try {
      const res = await fetch('/collector-api/saas/link', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ cut: nextCut }),
      });
      if (res.ok) {
        setSaasLinkCut(nextCut);
        await fetchData();
      }
    } catch {}
  };

  const handleScenarioInject = async (type) => {
    await fetch(`/collector-api/inject/${encodeURIComponent(type)}`, {
      method: 'POST',
      headers: { 'x-sp-ui': '1' },
    });
    await fetchData();
  };

  const handleApproveRemediation = async (incidentId) => {
    const res = await fetch(`/api/incidents/${incidentId}/approve`, {
      method: 'POST',
      headers: tenantToken ? { authorization: `Bearer ${tenantToken}` } : {},
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Approval rejected by SaaS policy engine');
    }
    await fetchData();
  };

  const handleRollbackRemediation = async (incidentId) => {
    const res = await fetch(`/api/incidents/${incidentId}/rollback`, {
      method: 'POST',
      headers: tenantToken ? { authorization: `Bearer ${tenantToken}` } : {},
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Rollback rejected');
    }
    await fetchData();
  };

  const handleSwitchTenantRequest = (tenantId, name, clearanceCode) => {
    setTargetTenantToUnlock({ id: tenantId, name, clearanceCode });
    setTenantModalOpen(true);
  };

  const handleTenantUnlocked = (code) => {
    if (targetTenantToUnlock && onSwitchTenant) {
      onSwitchTenant(targetTenantToUnlock.id);
    }
    setTenantModalOpen(false);
    setTargetTenantToUnlock(null);
  };

  return (
    <div id="command-center" className="min-h-screen py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Architecture & Limitations Drawer */}
      <ArchitectureDrawer isOpen={architectureOpen} onClose={() => setArchitectureOpen(false)} />

      {/* Tenant Switcher Tumbler Modal */}
      {tenantModalOpen && targetTenantToUnlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-md">
            <TumblerPassword
              targetCode={targetTenantToUnlock.clearanceCode || '7100'}
              title={`Switch Vault: ${targetTenantToUnlock.name}`}
              description="Zero-trust cryptographic isolation. Enter tenant vault PIN to verify boundary clearance."
              actionLabel="Unlock & Switch Tenant"
              onUnlock={handleTenantUnlocked}
              onCancel={() => setTenantModalOpen(false)}
              mode="tenant"
            />
          </div>
        </div>
      )}

      {/* Command Center Top Navigation Bar - Editorial Style */}
      <div className="rounded-2xl bg-surface-elevated/90 border border-surface-border p-4 sm:p-5 mb-8 shadow-2xl backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Shield className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-serif font-bold text-white tracking-tight">VeilOps Console.</h2>
              <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 font-mono text-[10px] border border-cyan-500/30">
                LIVE STREAM
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Tenant: <span className="text-emerald-400 font-semibold">{tenantName}</span> &middot; Region:{' '}
              <span className="text-cyan-300">ap-south-1</span>
            </p>
          </div>
        </div>

        {/* Right Tenant Switcher & Architecture Drawer */}
        <div className="flex items-center gap-2.5 font-mono text-xs">
          <button
            onClick={() => handleSwitchTenantRequest('acme', 'Acme Retail (ap-south-1)', '7100')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeTenant === 'acme'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                : 'bg-surface hover:bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Tenant-Alpha (7100)
          </button>

          <button
            onClick={() => handleSwitchTenantRequest('initech', 'Initech Bank (ap-south-1)', '7101')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeTenant === 'initech'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                : 'bg-surface hover:bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Tenant-Beta (7101)
          </button>

          <button
            onClick={() => handleSwitchTenantRequest('globex', 'Globex EU (eu-west-1) [421 Demo]', '7102')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeTenant === 'globex'
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold'
                : 'bg-surface hover:bg-slate-800 border-slate-700 text-slate-400'
            }`}
            title="Demonstrate 421 Residency Rejection"
          >
            Globex EU (421)
          </button>

          <button
            onClick={() => setArchitectureOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-surface hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            title="View Architecture & Honest Limitations"
          >
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Architecture</span>
          </button>

          <button
            onClick={handleManualRefresh}
            className="p-2 rounded-lg bg-surface hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors"
            title="Refresh State"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Navigation Tabs - Editorial Low-Text Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-surface-border font-mono text-xs">
        <button
          onClick={() => setActiveTab('health')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'health'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Fleet Health Matrix</span>
        </button>

        <button
          onClick={() => setActiveTab('firewall')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'firewall'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Trust Boundary</span>
        </button>

        <button
          onClick={() => setActiveTab('secrets')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'secrets'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Secret Scanner</span>
          {collectorState.counts.secrets_seen > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[10px]">
              {collectorState.counts.secrets_seen}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('egress')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'egress'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>Signal Passport Ledger</span>
        </button>

        <button
          onClick={() => setActiveTab('remediation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'remediation'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Safe Remediation</span>
          {overview.incidents?.filter((i) => i.status === 'open').length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]">
              {overview.incidents.filter((i) => i.status === 'open').length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('sla')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'sla'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>SLAs &amp; Live Scenarios</span>
        </button>

        <button
          onClick={() => setActiveTab('stream')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
            activeTab === 'stream'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Radio className="w-3.5 h-3.5" />
          <span>Stream Source Switcher</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div>
        {activeTab === 'health' && (
          <HealthMatrix
            sources={overview.sources || []}
            collectors={overview.collectors || []}
            fleetState={overview.fleet_state || 'Good'}
          />
        )}

        {activeTab === 'firewall' && (
          <GlyphCurtainHero
            rawLogSample={collectorState.raw[0]}
            scrubbedPayloadSample={
              collectorState.payloads[0]?.body ? JSON.parse(collectorState.payloads[0].body) : null
            }
            passportSample={collectorState.payloads[0]?.passport}
          />
        )}

        {activeTab === 'secrets' && (
          <SecretInspector
            rawLogs={collectorState.raw || []}
            secretsCount={collectorState.counts.secrets_seen || 0}
          />
        )}

        {activeTab === 'egress' && (
          <EgressProofPanel
            payloads={collectorState.payloads || []}
            counts={collectorState.counts || {}}
          />
        )}

        {activeTab === 'remediation' && (
          <IncidentRemediation
            incidents={overview.incidents || []}
            auditLogs={overview.audit || []}
            onApproveRemediation={handleApproveRemediation}
            onRollbackRemediation={handleRollbackRemediation}
          />
        )}

        {activeTab === 'sla' && (
          <SlaMetricsPanel
            timings={overview.timing || {}}
            onInjectScenario={handleScenarioInject}
            saasLinkCut={saasLinkCut}
            onToggleSaasLink={handleToggleSaasLink}
            bufferedCount={collectorState.buffered || 0}
          />
        )}

        {activeTab === 'stream' && (
          <TelemetrySwitcher
            activeSource={collectorState.stream?.source || 'simulated'}
            onSwitchSource={async (sourceConfig) => {
              await fetch('/collector-api/stream/switch', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(sourceConfig),
              });
              await fetchData();
            }}
          />
        )}
      </div>
    </div>
  );
}
