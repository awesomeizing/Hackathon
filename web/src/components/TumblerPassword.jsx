import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Key, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

export default function TumblerPassword({
  targetCode = '7100',
  title = 'Autonomous Remediation Approval Gate',
  description = 'Align mechanical tumbler pins to authorize remediation policy execution.',
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
    setTimeout(() => setAnimatingIndex(null), 200);
  };

  const autoAlign = () => {
    const targetArr = targetCode.split('').map(Number);
    setDials(targetArr);
  };

  return (
    <div className="rounded-2xl bg-surface-elevated/95 border border-cyan-500/40 p-6 shadow-2xl backdrop-blur-2xl max-w-md mx-auto text-center relative overflow-hidden">
      {/* Background glow when unlocked */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isUnlocked ? 'bg-emerald-500/10' : 'bg-transparent'
        }`}
      />

      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
        <Lock className={`w-4 h-4 ${isUnlocked ? 'text-emerald-400' : 'text-cyan-400'}`} />
        <span>{mode === 'tenant' ? 'ZERO-TRUST TENANT VAULT' : 'HUMAN-IN-THE-LOOP OPS GATE'}</span>
      </div>

      <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-400 mb-4 font-light leading-relaxed">{description}</p>

      {/* Visible Demo Clearance PIN Badge for Judges */}
      <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono text-xs">
        <Key className="w-3.5 h-3.5 text-cyan-400" />
        <span>Judge Demo PIN: <strong className="text-white tracking-widest">{targetCode}</strong></span>
      </div>

      {/* Mechanical Tumbler Lock UI */}
      <div className="relative py-6 px-4 rounded-xl bg-[#060913]/90 border border-slate-800 shadow-inner mb-6">
        {/* Tumbler Cylinder Dials */}
        <div className="flex items-center justify-center gap-3">
          {dials.map((digit, index) => {
            const isMatch = digit === Number(targetCode[index]);
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Up Button */}
                <button
                  type="button"
                  onClick={() => rotateDial(index, 'up')}
                  className="w-10 h-7 rounded-t-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs active:bg-cyan-600"
                >
                  ▲
                </button>

                {/* Rotating Tumbler Slot */}
                <div
                  className={`w-12 h-16 rounded-md bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-2 flex items-center justify-center shadow-lg transition-all transform ${
                    isMatch
                      ? 'border-emerald-500 shadow-emerald-500/30'
                      : 'border-slate-700 shadow-black'
                  } ${animatingIndex === index ? 'scale-105' : 'scale-100'}`}
                >
                  <span
                    className={`font-mono text-2xl font-bold transition-colors ${
                      isMatch ? 'text-emerald-300 drop-shadow-[0_0_8px_#10b981]' : 'text-white'
                    }`}
                  >
                    {digit}
                  </span>
                </div>

                {/* Down Button */}
                <button
                  type="button"
                  onClick={() => rotateDial(index, 'down')}
                  className="w-10 h-7 rounded-b-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs active:bg-cyan-600"
                >
                  ▼
                </button>

                {/* Pin Alignment Status Indicator */}
                <div
                  className={`mt-2 w-2 h-2 rounded-full transition-colors ${
                    isMatch ? 'bg-emerald-400 shadow-[0_0_6px_#10b981]' : 'bg-slate-700'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Lock State Pill */}
        <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all">
          {isUnlocked ? (
            <span className="text-emerald-400 flex items-center gap-1.5">
              <Unlock className="w-4 h-4 animate-bounce" />
              TUMBLER PINS ALIGNED &middot; CLEARANCE GRANTED
            </span>
          ) : (
            <span className="text-slate-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              TARGET CLEARANCE CODE: <span className="text-cyan-300 font-bold">{targetCode}</span>
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
            className="px-4 py-2 rounded-lg bg-surface hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono transition-colors"
          >
            Cancel
          </button>
        )}

        <button
          type="button"
          onClick={autoAlign}
          className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
          title="Auto-align tumbler dials for fast live demo"
        >
          <Key className="w-3.5 h-3.5 text-cyan-400" />
          <span>Quick Align ({targetCode})</span>
        </button>

        <button
          type="button"
          disabled={!isUnlocked}
          onClick={() => isUnlocked && onUnlock && onUnlock(dials.join(''))}
          className={`px-5 py-2 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 ${
            isUnlocked
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 cursor-pointer scale-105'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>{actionLabel}</span>
        </button>
      </div>
    </div>
  );
}
