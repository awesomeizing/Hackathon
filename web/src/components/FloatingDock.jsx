import React, { useState } from 'react';
import {
  Zap,
  Activity,
  Bug,
  Lock,
  Flame,
  Radio,
  WifiOff,
  Wifi,
  Globe,
  RotateCcw,
  Clock,
  Copy,
  PowerOff,
} from 'lucide-react';

/**
 * FloatingDock component inspired by 21st.dev
 * Sleek bottom-floating action dock for Live Scenario Injection:
 * CPU Spike, Latency Spike, Bruteforce, Secret Leakage, Multi-Incident, Outage & Replay, Residency 421.
 */
export default function FloatingDock({
  onInjectScenario,
  saasLinkCut = false,
  onToggleSaasLink,
  onRunResidency,
  streamKind = 'simulated',
  streamConnected = true,
}) {
  const [activeBtn, setActiveBtn] = useState(null);
  const [tooltip, setTooltip] = useState('');
  const [statusBanner, setStatusBanner] = useState(null);

  const actions = [
    {
      id: 'cpu',
      label: 'CPU Spike',
      icon: Flame,
      color: 'hover:text-red-400 hover:border-red-500/40',
      action: () => onInjectScenario?.('cpu'),
    },
    {
      id: 'latency',
      label: 'Latency Spike',
      icon: Zap,
      color: 'hover:text-amber-400 hover:border-amber-500/40',
      action: () => onInjectScenario?.('latency'),
    },
    {
      id: 'bruteforce',
      label: 'Bruteforce Burst',
      icon: Lock,
      color: 'hover:text-purple-400 hover:border-purple-500/40',
      action: () => onInjectScenario?.('bruteforce'),
    },
    {
      id: 'secret',
      label: 'Secret Leakage',
      icon: Bug,
      color: 'hover:text-rose-400 hover:border-rose-500/40',
      action: () => onInjectScenario?.('secret'),
    },
    {
      id: 'incident',
      label: 'Multi-Incident',
      icon: Activity,
      color: 'hover:text-cyan-400 hover:border-cyan-500/40',
      action: () => onInjectScenario?.('incident'),
    },
    {
      id: 'stale',
      label: 'Stale Source',
      icon: Radio,
      color: 'hover:text-orange-400 hover:border-orange-500/40',
      action: () => onInjectScenario?.('stale'),
    },
    {
      id: 'late',
      label: 'Late Event (45 s)',
      icon: Clock,
      color: 'hover:text-yellow-400 hover:border-yellow-500/40',
      action: () => onInjectScenario?.('late'),
    },
    {
      id: 'duplicate',
      label: 'Duplicate Replay',
      icon: Copy,
      color: 'hover:text-violet-400 hover:border-violet-500/40',
      action: () => onInjectScenario?.('duplicate'),
    },
    {
      id: 'outage',
      label: saasLinkCut ? 'Reconnect Link' : 'Cut SaaS Link',
      icon: saasLinkCut ? Wifi : WifiOff,
      color: saasLinkCut
        ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40'
        : 'hover:text-amber-400 hover:border-amber-500/40',
      action: onToggleSaasLink,
    },
    {
      id: 'residency',
      label: 'Residency (421)',
      icon: Globe,
      color: 'hover:text-sky-400 hover:border-sky-500/40',
      action: onRunResidency,
    },
    {
      id: 'clear',
      label: 'Reset Faults',
      icon: RotateCcw,
      color: 'hover:text-emerald-400 hover:border-emerald-500/40',
      action: () => onInjectScenario?.('clear'),
    },
    {
      id: 'source-outage',
      label: 'Source Outage (20 s)',
      icon: PowerOff,
      color: 'hover:text-orange-500 hover:border-orange-600/40',
      action: () => onInjectScenario?.('outage'),
    },
  ];

  const handleClick = async (act) => {
    setActiveBtn(act.id);
    const feedbackMap = {
      cpu: { text: 'Injected CPU Spike (96% load) on db-01', color: 'text-red-400' },
      latency: { text: 'Injected Latency Spike (450ms) on edge-gw-01', color: 'text-amber-400' },
      bruteforce: { text: 'Injected SSH Bruteforce burst on web-01', color: 'text-purple-400' },
      secret: { text: 'Injected credential — intercepted by collector', color: 'text-rose-400' },
      incident: { text: 'Injected Multi-Signal Anomaly (AIOps correlation)', color: 'text-cyan-400' },
      stale: { text: 'Injected Stale Source silence on db-01', color: 'text-orange-400' },
      late: { text: 'Injected Late Event (-45s event time placement)', color: 'text-yellow-400' },
      duplicate: { text: 'Injected Duplicate Delivery (idempotent replay)', color: 'text-violet-400' },
      outage: { text: saasLinkCut ? 'Restoring SaaS Egress Link...' : 'Cutting SaaS Egress Link (Buffering locally)...', color: 'text-amber-400' },
      residency: { text: 'Testing Residency Isolation (HTTP 421) for Globex EU', color: 'text-sky-400' },
      clear: { text: 'Cleared Injected Faults — Returning to Nominal', color: 'text-emerald-400' },
      'source-outage': { text: 'Triggered 20s Source Outage on web-01', color: 'text-orange-500' },
    };
    const fb = feedbackMap[act.id] || { text: `Scenario ${act.label} triggered`, color: 'text-cyan-400' };
    setStatusBanner(fb);

    try {
      await act.action?.();
    } catch (err) {
      setStatusBanner({ text: `Action error: ${err.message || 'failed'}`, color: 'text-red-400' });
    } finally {
      setTimeout(() => setActiveBtn(null), 800);
      setTimeout(() => setStatusBanner(null), 4000);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
      {/* Live Status Toast Banner */}
      {statusBanner ? (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-neutral-900/95 border border-white/20 font-mono text-[11px] font-medium whitespace-nowrap shadow-2xl flex items-center gap-2 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className={statusBanner.color}>{statusBanner.text}</span>
        </div>
      ) : tooltip ? (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/10 font-mono text-[10px] text-neutral-200 whitespace-nowrap shadow-xl">
          {tooltip}
        </div>
      ) : null}

      <div className="flex items-center gap-1.5 p-2 rounded-full bg-[#080b14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-x-auto">
        {/* Dock Label — shows stream mode */}
        <div className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider border-r border-white/10 hidden sm:flex items-center gap-1.5 whitespace-nowrap">
          {!streamConnected ? (
            <span className="text-red-400 font-bold">DISCONNECTED</span>
          ) : streamKind === 'organizer' ? (
            <span className="text-emerald-400 font-bold">ORGANIZER — inject disabled</span>
          ) : (
            <span className="text-amber-400 font-bold">TEAM-SIMULATED fault injection</span>
          )}
        </div>

        {/* Buttons — injection scenarios disabled when on organizer stream */}
        {actions.map((act) => {
          const Icon = act.icon;
          const isActive = activeBtn === act.id;
          // Disable fault injection buttons when stream is organizer (not simulated)
          const isInjectAction = !['outage', 'residency'].includes(act.id);
          const disabled = isInjectAction && streamKind === 'organizer' && streamConnected;

          return (
            <button
              key={act.id}
              onClick={() => !disabled && handleClick(act)}
              onMouseEnter={() => setTooltip(act.label)}
              onMouseLeave={() => setTooltip('')}
              className={`relative p-2.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-neutral-300 transition-all duration-200 active:scale-95 ${
                disabled ? 'opacity-30 cursor-not-allowed' : act.color
              } ${isActive ? 'scale-110 bg-white/20 border-white/40 ring-2 ring-white/20' : ''}`}
              title={disabled ? `${act.label} (disabled on organizer stream)` : act.label}
              aria-disabled={disabled}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
