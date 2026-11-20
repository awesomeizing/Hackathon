import React, { useState } from 'react';
import LiquidSculptureHero from './components/LiquidSculptureHero';
import GlyphCurtainHero from './components/GlyphCurtainHero';
import CommandCenter from './components/CommandCenter';
import { Shield, Lock, Terminal, Activity } from 'lucide-react';

export default function App() {
  const [activeTenant, setActiveTenant] = useState('acme');
  const [tenantTokens, setTenantTokens] = useState({});

  // Fetch local viewer tokens if available
  React.useEffect(() => {
    fetch('/api/viewer-tokens')
      .then((r) => (r.ok ? r.json() : null))
      .then((tokens) => {
        if (tokens) setTenantTokens(tokens);
      })
      .catch(() => {});
  }, []);

  const scrollToCommandCenter = () => {
    const el = document.getElementById('command-center');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTrustBoundary = () => {
    const el = document.getElementById('trust-boundary');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tenantNames = {
    acme: 'Acme Retail (ap-south-1)',
    initech: 'Initech Bank (ap-south-1)',
    globex: 'Globex EU (eu-west-1) [421 Demo]',
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Cyber Command Bar */}
      <header className="sticky top-0 z-40 bg-[#060913]/80 backdrop-blur-xl border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-cyan-500/20">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-2">
              VeilOps <span className="text-cyan-400 font-mono text-xs font-normal">v2.4.0</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={scrollToTrustBoundary}
              className="text-slate-400 hover:text-cyan-300 transition-colors hidden sm:block"
            >
              Trust Boundary
            </button>
            <button
              onClick={scrollToCommandCenter}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all font-semibold flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Live Console</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Component 1: Liquid Sculpture Hero */}
        <LiquidSculptureHero
          onLaunchCommandCenter={scrollToCommandCenter}
          onInspectTrustBoundary={scrollToTrustBoundary}
        />

        {/* Component 2: Glyph Curtain Hero (Trust Boundary) */}
        <GlyphCurtainHero />

        {/* Live Command Center & Component 3 (Tumbler Password Gate) */}
        <CommandCenter
          activeTenant={activeTenant}
          tenantToken={tenantTokens[activeTenant] || ''}
          tenantName={tenantNames[activeTenant]}
          onSwitchTenant={(tenantId) => setActiveTenant(tenantId)}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-border bg-surface/40 py-8 px-6 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>VeilOps &middot; CICADA 2026 Hackathon Special</span>
          </div>
          <div>Your signals cross. Your secrets stay local. &middot; SHA-256 Signal Passport Certified</div>
          <div className="text-slate-400">Node.js 24 + Zero External NPM Backend Deps</div>
        </div>
      </footer>
    </div>
  );
}
