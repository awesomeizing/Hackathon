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
    try {
      await act.action?.();
    } finally {
      setTimeout(() => setActiveBtn(null), 600);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 p-2 rounded-full bg-[#080b14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl">
        {/* Dock Label — shows stream mode */}
        <div className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider border-r border-white/10 hidden sm:flex items-center gap-1.5">
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
              } ${isActive ? 'scale-110 bg-white/20' : ''}`}
              title={disabled ? `${act.label} (disabled on organizer stream)` : act.label}
              aria-disabled={disabled}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>

      {/* Floating Tooltip Label */}
      {tooltip && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/10 font-mono text-[10px] text-neutral-200 whitespace-nowrap shadow-xl">
          {tooltip}
        </div>
      )}
    </div>
  );
}
