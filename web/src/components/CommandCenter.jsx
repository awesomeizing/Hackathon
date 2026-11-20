import { subscribeToTenantRealtime } from '../lib/supabase';
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
  RefreshCw,
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
import AnimatedBeamTopology from './AnimatedBeam';
import FloatingDock from './FloatingDock';

export default function CommandCenter({
  activeTenant = 'acme',
  tenantToken = '',
  tenantName = 'Acme Retail (ap-south-1)',
  onSwitchTenant,
}) {
  const [activeTab, setActiveTab] = useState('health');
  const [tenantModalOpen, setTenantModalOpen] = useState(false);
  const [targetTenantToUnlock, setTargetTenantToUnlock] = useState(null);
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [saasLinkCut, setSaasLinkCut] = useState(false);
  const [inspectEuRegional, setInspectEuRegional] = useState(false);

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
      const url = activeTenant === 'globex' && inspectEuRegional ? '/api/overview?inspect_eu=1' : '/api/overview';
      const res = await fetch(url, {
        headers: tenantToken ? { authorization: `Bearer ${tenantToken}` } : {},
      });
      if (res.ok) {
        const data = await res.json();
        setOverview(data);
      } else if (res.status === 421) {
        // Residency misdirected error
        const errData = await res.json().catch(() => ({}));
        setOverview((prev) => ({
          ...prev,
          fleet_state: 'Poor',
          sources: [],
          collectors: [],
          residency_violation: errData.error || 'HTTP 421 Misdirected Request: Tenant homed in eu-west, ingest is ap-south',
        }));
      }
    } catch {}

    try {
      const colRes = await fetch('/collector-api/state?raw=all');
      if (colRes.ok) {
        const colData = await colRes.json();
        setCollectorState(colData);
        if (colData.link_cut !== undefined) {
          setSaasLinkCut(colData.link_cut);
        }

        // Send timing sample to SaaS engine for real latency measurement
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

  useEffect(() => {
    setInspectEuRegional(false);
  }, [activeTenant]);

  useEffect(() => {
    fetchData();
    const timer = setInterval(fetchData, 1500);
    const unsubscribe = subscribeToTenantRealtime(activeTenant, () => {
      fetchData();
    });
    return () => {
      clearInterval(timer);
      unsubscribe();
    };
  }, [tenantToken, activeTenant, inspectEuRegional]);

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

  const handleRunResidency = async () => {
    handleSwitchTenantRequest('globex', 'Globex EU (eu-west-1) [421 Demo]', '7102');
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

  const handleTenantUnlocked = () => {
    if (targetTenantToUnlock && onSwitchTenant) {
      onSwitchTenant(targetTenantToUnlock.id);
    }
    setTenantModalOpen(false);
    setTargetTenantToUnlock(null);
  };

  return (
    <div id="command-center" className="min-h-screen py-24 px-4 sm:px-6 max-w-7xl mx-auto pb-32">
      {/* Architecture & Limitations Drawer */}
      <ArchitectureDrawer isOpen={architectureOpen} onClose={() => setArchitectureOpen(false)} />

      {/* Tenant Switcher Tumbler Modal */}
      {tenantModalOpen && targetTenantToUnlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-md">
            <TumblerPassword
              targetCode={targetTenantToUnlock.clearanceCode || '7100'}
              title={`Switch Vault: ${targetTenantToUnlock.name}`}
              description="Zero-trust isolation check. Align tumbler pins to verify boundary clearance."
              actionLabel="Unlock & Switch"
              onUnlock={handleTenantUnlocked}
              onCancel={() => setTenantModalOpen(false)}
              mode="tenant"
            />
          </div>
        </div>
      )}

      {/* Command Center Top Navigation Bar */}
      <div className="rounded-3xl bg-[#090c16]/90 border border-white/[0.08] p-6 mb-6 shadow-2xl flex flex-wrap items-center justify-between gap-6 backdrop-blur-xl">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-3xl font-serif text-white tracking-tight">Console.</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
              LIVE
            </span>
            {/* Stream source badge — driven by actual collector state */}
            {!collectorState.stream?.connected ? (
              <span className="px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 font-mono text-[10px] flex items-center gap-1.5" title="Collector stream is disconnected">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                DISCONNECTED
              </span>
            ) : collectorState.stream?.kind === 'organizer' ? (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] flex items-center gap-1.5" title="Receiving live organizer stream">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ORGANIZER STREAM
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-[10px] flex items-center gap-1.5" title="Running on team-generated synthetic stream — not organizer evidence">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                TEAM-SIMULATED
              </span>
            )}
            {overview.supabase?.configured ? (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] flex items-center gap-1.5" title="Connected to Supabase PostgreSQL & Realtime">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SUPABASE TIER-2
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 font-mono text-[10px] flex items-center gap-1.5" title="Local-First Zero-Trust Fallback: Local SQLite WAL Active">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                LOCAL WAL STORE
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-400 font-mono mt-1">
            Tenant: <span className="text-white font-medium">{tenantName}</span> &middot; Region: ap-south-1
          </p>
          {/* Real-time pipeline counts */}
          <div className="flex flex-wrap items-center gap-3 mt-1.5 font-mono text-[10px]">
            <span className="text-neutral-500">acked <span className="text-emerald-400 font-bold">{collectorState.counts?.acked ?? '—'}</span></span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-500">pending <span className="text-amber-400 font-bold">{collectorState.counts?.pending ?? collectorState.buffered ?? '—'}</span></span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-500">rejected <span className="text-red-400 font-bold">{collectorState.counts?.rejected ?? '—'}</span></span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-500">buffered <span className="text-cyan-400 font-bold">{collectorState.buffered ?? '—'}</span></span>
            {collectorState.counts?.secrets_seen > 0 && (
              <>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-500">secrets <span className="text-rose-400 font-bold">{collectorState.counts.secrets_seen}</span></span>
              </>
            )}
          </div>
        </div>

        {/* Right Tenant Switcher & Architecture Drawer */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <button
            onClick={() => handleSwitchTenantRequest('acme', 'Acme Retail (ap-south-1)', '7100')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTenant === 'acme'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 border border-white/[0.08]'
            }`}
          >
            Acme (7100)
          </button>

          <button
            onClick={() => handleSwitchTenantRequest('initech', 'Initech Bank (ap-south-1)', '7101')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTenant === 'initech'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 border border-white/[0.08]'
            }`}
          >
            Initech (7101)
          </button>

          <button
            onClick={() => handleSwitchTenantRequest('globex', 'Globex EU (eu-west-1) [421 Demo]', '7102')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTenant === 'globex'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 border border-white/[0.08]'
            }`}
            title="Demonstrate HTTP 421 Residency Rejection"
          >
            Globex EU (421)
          </button>

          <button
            onClick={() => setArchitectureOpen(true)}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-400 hover:text-white transition-colors"
            title="View Architecture & Limitations"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={handleManualRefresh}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-400 hover:text-white transition-colors"
            title="Refresh State"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-white' : ''}`} />
          </button>
        </div>
      </div>

      {/* 21st.dev Animated Beam Topology Bar */}
      <AnimatedBeamTopology saasLinkCut={saasLinkCut} bufferedCount={collectorState.buffered || 0} />

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/[0.08] font-mono text-xs">
        <button
          onClick={() => setActiveTab('health')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'health'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Fleet Health</span>
        </button>

        <button
          onClick={() => setActiveTab('firewall')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'firewall'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Trust Boundary</span>
        </button>

        <button
          onClick={() => setActiveTab('secrets')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'secrets'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
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
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'egress'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>Egress Proof</span>
        </button>

        <button
          onClick={() => setActiveTab('remediation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'remediation'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Remediation Gate</span>
          {overview.incidents?.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-black font-bold text-[10px]">
              {overview.incidents.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('sla')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'sla'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>SLA Metrics</span>
        </button>

        <button
          onClick={() => setActiveTab('stream')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
            activeTab === 'stream'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-neutral-400 hover:text-white border border-white/[0.08]'
          }`}
        >
          <Radio className="w-3.5 h-3.5" />
          <span>Stream Source</span>
        </button>
      </div>

      {/* Regional Residency 421 Boundary Notice */}
      {overview.residency_violation && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-amber-200 font-mono text-xs flex flex-wrap items-center justify-between gap-3 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-amber-400" />
            <div>
              <div className="font-bold text-amber-300">REGIONAL RESIDENCY BOUNDARY ENFORCED (HTTP 421)</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{overview.residency_violation}</div>
            </div>
          </div>
          <button
            onClick={() => setInspectEuRegional(true)}
            className="px-4 py-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/60 text-amber-300 font-bold transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Inspect EU Regional Store (eu-west-1)</span>
          </button>
        </div>
      )}

      {/* Regional Residency Compliant Notice */}
      {overview.residency_status && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-200 font-mono text-xs flex flex-wrap items-center justify-between gap-3 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="font-bold text-emerald-300">REGIONAL RESIDENCY COMPLIANT &middot; ISOLATED EU VAULT</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{overview.residency_status} &middot; Zero cross-region replication to ap-south-1</div>
            </div>
          </div>
          <button
            onClick={() => setInspectEuRegional(false)}
            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 text-[11px] transition-all"
          >
            Re-test 421 Boundary
          </button>
        </div>
      )}

      {/* Main Tab Content Panes */}
      <div className="space-y-6">
        {activeTab === 'health' && (
          <HealthMatrix
            sources={overview.sources || []}
            collectors={overview.collectors || []}
            fleetState={
              overview.fleet_state ||
              (overview.sources && overview.sources.length > 0
                ? (overview.sources.some(s => s.state === 'Poor') ? 'Poor'
                   : overview.sources.some(s => s.state === 'Fair') ? 'Fair'
                   : overview.sources.every(s => s.state === 'Excellent') ? 'Excellent' : 'Good')
                : 'Good')
            }
            timing={overview.timing || {}}
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
            onRunVerify={async () => {
              const res = await fetch('/api/scenario/verify', { method: 'POST' });
              return res.json();
            }}
            onRunReplay={async () => {
              const res = await fetch('/api/scenario/replay', { method: 'POST' });
              return res.json();
            }}
            onRunResidency={async () => {
              const res = await fetch('/api/scenario/residency', { method: 'POST' });
              return res.json();
            }}
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

      {/* Floating Action Dock — simulated fault injection only */}
      <FloatingDock
        onInjectScenario={handleScenarioInject}
        saasLinkCut={saasLinkCut}
        onToggleSaasLink={handleToggleSaasLink}
        onRunResidency={handleRunResidency}
        streamKind={collectorState.stream?.kind}
        streamConnected={collectorState.stream?.connected}
      />
    </div>
  );
}
