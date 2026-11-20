import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Key } from 'lucide-react';

export default function TumblerPassword({
  targetCode = '7100',
  title = 'Autonomous Remediation Approval Gate',
  description = 'Align tumbler pins to authorize execution.',
  actionLabel = 'Approve & Execute Action',
  onUnlock,
  onCancel,
  mode = 'remediation', // 'remediation' or 'tenant'
}) {
  const codeLength = targetCode.length;
  const [dials, setDials] = useState(new Array(codeLength).fill(0));
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(null);

  // Check if current combination matches target
  useEffect(() => {
    const currentCode = dials.join('');
    if (currentCode === targetCode) {
      setIsUnlocked(true);
      if (onUnlock) onUnlock(currentCode);
    } else {
      setIsUnlocked(false);
    }
  }, [dials, targetCode, onUnlock]);

  const rotateDial = (index, direction) => {
    setAnimatingIndex(index);
    setDials((prev) => {
      const next = [...prev];
      if (direction === 'up') {
        next[index] = (next[index] + 1) % 10;
      } else {
        next[index] = (next[index] - 1 + 10) % 10;
      }
      return next;
    });
    setTimeout(() => setAnimatingIndex(null), 180);
  };

  const autoAlign = () => {
    const targetArr = targetCode.split('').map(Number);
    setDials(targetArr);
  };

  return (
    <div className="rounded-3xl bg-[#121216] border border-white/10 p-8 shadow-2xl backdrop-blur-2xl max-w-md mx-auto text-center relative overflow-hidden">
      {/* Background glow when unlocked */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isUnlocked ? 'bg-emerald-500/[0.06]' : 'bg-transparent'
        }`}
      />

      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-3 text-neutral-400 font-mono text-xs uppercase tracking-widest">
        <Lock className={`w-3.5 h-3.5 ${isUnlocked ? 'text-emerald-400' : 'text-neutral-400'}`} />
        <span>{mode === 'tenant' ? 'TENANT VAULT CLEARANCE' : 'HUMAN APPROVAL GATE'}</span>
      </div>

      <h3 className="text-2xl font-serif text-white tracking-tight mb-2">{title}</h3>
      <p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed">{description}</p>

      {/* Visible Demo Clearance PIN Badge for Judges */}
      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-xs">
        <Key className="w-3.5 h-3.5 text-neutral-400" />
        <span>Judge Demo PIN: <strong className="text-white tracking-widest">{targetCode}</strong></span>
      </div>

      {/* Mechanical Tumbler Lock UI */}
      <div className="relative py-6 px-4 rounded-2xl bg-black/60 border border-white/[0.06] mb-6">
        <div className="flex items-center justify-center gap-3">
          {dials.map((digit, index) => {
            const isMatch = digit === Number(targetCode[index]);
            return (
              <div key={index} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => rotateDial(index, 'up')}
                  className="w-10 h-7 rounded-t-lg bg-[#18181d] hover:bg-[#222228] text-neutral-400 hover:text-white flex items-center justify-center transition-colors text-xs active:bg-neutral-700"
                >
                  ▲
                </button>

                <div
                  className={`w-12 h-16 rounded-lg bg-gradient-to-b from-[#141418] via-[#1a1a20] to-[#141418] border-2 flex items-center justify-center shadow-lg transition-all ${
                    isMatch
                      ? 'border-emerald-500/80 shadow-emerald-500/20'
                      : 'border-white/10'
                  } ${animatingIndex === index ? 'scale-105' : 'scale-100'}`}
                >
                  <span
                    className={`font-mono text-2xl font-bold transition-colors ${
                      isMatch ? 'text-emerald-300' : 'text-white'
                    }`}
                  >
                    {digit}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => rotateDial(index, 'down')}
                  className="w-10 h-7 rounded-b-lg bg-[#18181d] hover:bg-[#222228] text-neutral-400 hover:text-white flex items-center justify-center transition-colors text-xs active:bg-neutral-700"
                >
                  ▼
                </button>

                <div
                  className={`mt-2 w-1.5 h-1.5 rounded-full transition-colors ${
                    isMatch ? 'bg-emerald-400' : 'bg-neutral-700'
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-xs font-mono font-medium">
          {isUnlocked ? (
            <span className="text-emerald-400 flex items-center justify-center gap-1.5">
              <Unlock className="w-3.5 h-3.5" />
              CLEARANCE CONFIRMED
            </span>
          ) : (
            <span className="text-neutral-500">
              TARGET PIN: <strong className="text-white">{targetCode}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 text-xs font-mono transition-colors"
          >
            Cancel
          </button>
        )}

        <button
          type="button"
          onClick={autoAlign}
          className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
        >
          <Key className="w-3.5 h-3.5 text-neutral-400" />
          <span>Quick Align ({targetCode})</span>
        </button>

        <button
          type="button"
          disabled={!isUnlocked}
          className={`px-6 py-2.5 rounded-full font-mono text-xs font-medium transition-all ${
            isUnlocked
              ? 'bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/10'
              : 'bg-white/10 text-neutral-500 cursor-not-allowed'
          }`}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
