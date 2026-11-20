import React, { useRef, useState } from 'react';

/**
 * SpotlightCard component inspired by 21st.dev
 * Renders a subtle mouse-tracking spotlight radial gradient on hover
 * with clean dark aesthetic (#050811 / #0c101d) and subtle glow border.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(56, 189, 248, 0.12)',
  borderColor = 'rgba(255, 255, 255, 0.08)',
  activeBorderColor = 'rgba(56, 189, 248, 0.35)',
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl bg-[#0b0e18]/90 border transition-all duration-300 ${className}`}
      style={{
        borderColor: opacity > 0 ? activeBorderColor : borderColor,
      }}
    >
      {/* Radial spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
