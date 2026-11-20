import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowRight, Eye, Activity } from 'lucide-react';

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

    // Dynamic cyber-sphere sculpture
    const particleCount = 18000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);

    const color1 = new THREE.Color('#ffffff'); // Pure White
    const color2 = new THREE.Color('#a1a1aa'); // Muted Grey
    const color3 = new THREE.Color('#38bdf8'); // Subtle Cyan Accent

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 11 + Math.sin(theta * 3) * Math.cos(phi * 4) * 2.2;

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

      const mixedColor = color1.clone().lerp(color2, Math.sin(x * 0.1) * 0.5 + 0.5);
      if (Math.random() > 0.85) mixedColor.lerp(color3, 0.3);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.13,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / container.clientWidth - 0.5;
      const y = (event.clientY - rect.top) / container.clientHeight - 0.5;
      targetX = x * 2.0;
      targetY = y * 2.0;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particles.rotation.y = time * 0.1 + mouseX * 0.6;
      particles.rotation.x = time * 0.05 - mouseY * 0.6;

      const pos = geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];
        const phase = phases[i];

        const wave = Math.sin(time * 1.8 + phase + ox * 0.2) * 0.7;
        const wave2 = Math.cos(time * 1.4 + phase + oy * 0.2) * 0.7;

        pos[i3] = ox + wave * Math.sin(phase);
        pos[i3 + 1] = oy + wave2 * Math.cos(phase);
        pos[i3 + 2] = oz + (wave + wave2) * 0.4;
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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-white/[0.08]">
      {/* 3D Liquid Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/40 via-transparent to-[#08080a] pointer-events-none z-[1]" />

      {/* Hero Content - Editorial Elegance */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center flex flex-col items-center">
        {/* Minimal Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>CICADA 2K26</span>
          <span className="text-neutral-600">&middot;</span>
          <span>ZERO-TRUST OBSERVABILITY</span>
        </div>

        {/* Serif Headline with Period */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 leading-[1.05]">
          Signal Architecture.
        </h1>

        {/* Minimal Subheading */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-lg mb-10 leading-relaxed font-light">
          Local-first telemetry. Raw secrets stay on-premise; verified Signal Passports ship to the cloud.
        </p>

        {/* Pill Buttons (Matching Reference Design) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onLaunchCommandCenter}
            className="px-7 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-medium text-xs tracking-wide transition-all shadow-xl active:scale-95"
          >
            Launch Console
          </button>

          <button
            onClick={onInspectTrustBoundary}
            className="px-7 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 text-neutral-200 font-medium text-xs tracking-wide transition-all active:scale-95"
          >
            Trust Boundary
          </button>
        </div>
      </div>
    </section>
  );
}
