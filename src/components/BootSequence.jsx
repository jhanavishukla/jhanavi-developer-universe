import React, { useState, useEffect } from 'react';
import { Terminal, FastForward, CheckCircle2 } from 'lucide-react';

/**
 * Boot Sequence:
 * JHANAVI.EXE
 * INITIALIZING DEVELOPER UNIVERSE...
 * SYSTEM READY.
 * With skip capability.
 */
export default function BootSequence({ onComplete }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Step 0: Initial title appear
    const t1 = setTimeout(() => setStep(1), 400);

    // Step 1: Progress bar loading
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    // Step 2: Initializing message
    const t2 = setTimeout(() => setStep(2), 1100);

    // Step 3: System Ready
    const t3 = setTimeout(() => setStep(3), 2000);

    // Auto complete after short reveal
    const t4 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="boot-screen" role="region" aria-label="System Boot Sequence">
      <div className="boot-terminal-box">
        <div className="boot-terminal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={16} color="#8b5cf6" />
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>BIOS 2.5 // CORE_LOADER</span>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
          </div>
        </div>

        <div className="boot-terminal-content">
          <div className="boot-line hero-title">
            &gt; JHANAVI.EXE <span style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 500 }}>// CYBER-TECH OS v2.5</span>
          </div>

          {step >= 1 && (
            <div className="boot-line" style={{ color: '#94a3b8' }}>
              <span style={{ color: '#8b5cf6' }}>[KERNEL]</span> Initializing quantum registers &amp; graphics core...
            </div>
          )}

          {step >= 1 && (
            <div className="boot-line" style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
              <span style={{ color: '#06b6d4' }}>[NETWORK]</span> AWS ap-south-1 regional gateway connected [OK]
            </div>
          )}

          {step >= 2 && (
            <div className="boot-line" style={{ color: '#38bdf8' }}>
              <span style={{ color: '#a78bfa' }}>[UNIVERSE]</span> INITIALIZING DEVELOPER UNIVERSE...
            </div>
          )}

          {step >= 3 && (
            <div className="boot-line success">
              <CheckCircle2 size={18} color="#10b981" />
              <span>SYSTEM READY. LAUNCHING WORKSPACE...</span>
            </div>
          )}

          <div className="boot-progress-bar-container">
            <div
              className="boot-progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>
            <span>SECURE_BOOT: ENABLED</span>
            <span>AWS AMPLIFY STATIC HOSTING</span>
            <span>SYS_OK</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="boot-skip-btn"
        onClick={onComplete}
        aria-label="Skip boot sequence animation"
      >
        <FastForward size={14} /> Skip Boot Sequence [ESC / Click]
      </button>
    </div>
  );
}

