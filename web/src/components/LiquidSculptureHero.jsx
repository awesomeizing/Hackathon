import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Shield, Lock, Terminal, Activity, ArrowRight, Eye, Cpu, Database } from 'lucide-react';

export default function LiquidSculptureHero({ onLaunchCommandCenter, onInspectTrustBoundary }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Set up Three.js scene for Liquid Sculpture Particles
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Generate ~25,000 liquid particles in a dynamic cyber-sphere sculpture
    const particleCount = 20000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);

    const color1 = new THREE.Color('#06b6d4'); // Cyan
    const color2 = new THREE.Color('#10b981'); // Emerald
    const color3 = new THREE.Color('#3b82f6'); // Blue

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere with torus flow
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 11 + Math.sin(theta * 3) * Math.cos(phi * 4) * 2.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      phases[i] = Math.random() * Math.PI * 2;

      // Color gradient
      const mixedColor = color1.clone().lerp(color2, Math.sin(x * 0.1) * 0.5 + 0.5);
      mixedColor.lerp(color3, Math.cos(y * 0.1) * 0.5 + 0.5);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / container.clientWidth - 0.5;
      const y = (event.clientY - rect.top) / container.clientHeight - 0.5;
      targetX = x * 2.5;
      targetY = y * 2.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particles.rotation.y = time * 0.12 + mouseX * 0.8;
      particles.rotation.x = time * 0.06 - mouseY * 0.8;

      const pos = geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];
        const phase = phases[i];

        // Liquid wave deformation
        const wave = Math.sin(time * 2.0 + phase + ox * 0.2) * 0.8;
        const wave2 = Math.cos(time * 1.5 + phase + oy * 0.2) * 0.8;

        pos[i3] = ox + wave * Math.sin(phase);
        pos[i3 + 1] = oy + wave2 * Math.cos(phase);
        pos[i3 + 2] = oz + (wave + wave2) * 0.5;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-surface-border">
      {/* 3D Liquid Sculpture Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-75" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/30 via-transparent to-[#060913] pointer-events-none z-[2]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/40">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>CICADA 2K26</span>
          <span className="text-slate-600">&middot;</span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <Shield className="w-3.5 h-3.5" /> ZERO-TRUST AIOPS
          </span>
          <span className="text-slate-600">&middot;</span>
          <span className="text-slate-400">VEILOPS v2.4.0</span>
        </div>

        {/* Main Headline - Editorial Low-Text Rhythm */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 max-w-5xl leading-[1.05]">
          Local-first AIOps.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 italic font-serif">
            Zero raw leaks.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300/90 max-w-xl mb-10 leading-relaxed font-light tracking-wide">
          Secrets stay local. Only verified metadata ships.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onLaunchCommandCenter}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 group"
          >
            <Activity className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Live Console</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onInspectTrustBoundary}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface-elevated/70 hover:bg-surface-elevated border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-mono text-xs backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>Trust Boundary</span>
          </button>
        </div>

        {/* Clean Editorial Numbered Rhythm (Inspired by Editorial Design Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl text-left">
          <div className="p-5 rounded-2xl bg-surface/60 border border-slate-800/80 backdrop-blur-md transition-all hover:border-slate-700">
            <div className="font-mono text-xs text-cyan-400 font-bold mb-2">01 &middot; PERIMETER</div>
            <div className="text-white font-medium text-sm mb-1">Local Secret Stripping</div>
            <div className="text-slate-400 text-xs font-light leading-relaxed">
              API tokens, SQL queries & private IPs never leave the host.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface/60 border border-slate-800/80 backdrop-blur-md transition-all hover:border-slate-700">
            <div className="font-mono text-xs text-emerald-400 font-bold mb-2">02 &middot; CRYPTOGRAPHY</div>
            <div className="text-white font-medium text-sm mb-1">Signal Passport Seal</div>
            <div className="text-slate-400 text-xs font-light leading-relaxed">
              Canonical JSON with SHA-256 digest verified by SaaS receipts.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface/60 border border-slate-800/80 backdrop-blur-md transition-all hover:border-slate-700">
            <div className="font-mono text-xs text-amber-400 font-bold mb-2">03 &middot; RESILIENCE</div>
            <div className="text-white font-medium text-sm mb-1">SQLite WAL Outage Buffer</div>
            <div className="text-slate-400 text-xs font-light leading-relaxed">
              Zero loss during network drops; auto-flushes on reconnect.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface/60 border border-slate-800/80 backdrop-blur-md transition-all hover:border-slate-700">
            <div className="font-mono text-xs text-purple-400 font-bold mb-2">04 &middot; CORRELATION</div>
            <div className="text-white font-medium text-sm mb-1">Explainable AIOps</div>
            <div className="text-slate-400 text-xs font-light leading-relaxed">
              EWMA baseline anomalies unified into 1 explained incident.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
