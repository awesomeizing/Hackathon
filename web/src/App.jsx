import React, { useState } from 'react';
import LiquidSculptureHero from './components/LiquidSculptureHero';
import CuratedAssemblages from './components/CuratedAssemblages';
import ArchitectureOfTelemetry from './components/ArchitectureOfTelemetry';
import CryptographicProofs from './components/CryptographicProofs';
import GlyphCurtainHero from './components/GlyphCurtainHero';
import ClaritySection from './components/ClaritySection';
import CommandCenter from './components/CommandCenter';
import { Shield } from 'lucide-react';

export default function App() {
  const [activeTenant, setActiveTenant] = useState('acme');
  // Viewer tokens are local credentials and must not be fetched from the server
  // into the React bundle. The server already auto-authenticates loopback requests
  // for the acme tenant (see saas/server.js viewerApi). Token switching is handled
  // by the TumblerPassword gate which prompts the user for the clearance code;
  // that code is used as the Authorization header value at fetch time.
  const tenantTokens = {};

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
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
      {/* Top Editorial Bar */}
      <header className="sticky top-0 z-40 bg-[#08080a]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              VeilOps.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={scrollToTrustBoundary}
              className="text-neutral-400 hover:text-white transition-colors hidden sm:block"
            >
              Trust Boundary
            </button>
            <button
              onClick={scrollToCommandCenter}
              className="px-5 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-sans font-medium text-xs transition-all shadow-md active:scale-95"
            >
              Console
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section: Signal Architecture */}
        <LiquidSculptureHero
          onLaunchCommandCenter={scrollToCommandCenter}
          onInspectTrustBoundary={scrollToTrustBoundary}
        />

        {/* Section 1: Curated Assemblages */}
        <CuratedAssemblages onLaunchConsole={scrollToCommandCenter} />

        {/* Section 2: The Architecture of Telemetry */}
        <ArchitectureOfTelemetry />

        {/* Section 3: The Archives */}
        <CryptographicProofs />

        {/* Section 4: Trust Boundary & Telemetry Visualizer */}
        <GlyphCurtainHero />

        {/* Section 5: Clarity */}
        <ClaritySection />

        {/* Section 6: Live Command Center */}
        <CommandCenter
          activeTenant={activeTenant}
          tenantToken={tenantTokens[activeTenant] || ''}
          tenantName={tenantNames[activeTenant]}
          onSwitchTenant={(tenantId) => setActiveTenant(tenantId)}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#08080a] py-12 px-6 text-xs font-mono text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white font-medium">VeilOps</span>
            <span>&middot; CICADA 2K26</span>
          </div>
          <div>Your signals cross. Your secrets stay local. &middot; SHA-256 Signal Passport</div>
          <div className="text-neutral-400">Node.js Zero External Dependencies</div>
        </div>
      </footer>
    </div>
  );
}
