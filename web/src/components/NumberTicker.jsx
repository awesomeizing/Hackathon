import React, { useEffect, useState } from 'react';

/**
 * NumberTicker component inspired by 21st.dev
 * Smoothly animates numeric transitions between updates.
 */
export default function NumberTicker({
  value,
  duration = 500,
  decimals = 1,
  suffix = '',
  prefix = '',
  className = '',
}) {
  const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;
  const [displayValue, setDisplayValue] = useState(numericValue);

  useEffect(() => {
    let startTimestamp = null;
    const startValue = displayValue;
    const endValue = numericValue;
    const diff = endValue - startValue;

    if (Math.abs(diff) < 0.001) return;

    let frameId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startValue + diff * ease;
      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [numericValue, duration]);

  return (
    <span className={`inline-block tabular-nums font-mono ${className}`}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}
