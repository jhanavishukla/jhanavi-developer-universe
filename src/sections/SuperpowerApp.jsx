import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  RotateCcw,
  Share2,
  Check,
  BrainCircuit,
  Compass,
  ShieldAlert,
  Rocket,
  Wand2,
  Award,
  Zap,
  Copy
} from 'lucide-react';
import { developerSuperpowers } from '../data/portfolioData';

/**
 * Superpower.exe — SIGNATURE CREATIVE FEATURE
 * "Discover Your Developer Superpower"
 * Randomly generates an authentic developer superpower personality with animated reveal,
 * confetti burst, sound effects, replay capability, and Web Share API / clipboard fallback.
 */
export default function SuperpowerApp({ onShowToast, playChime }) {
  const [isScanning, setIsScanning] = useState(false);
  const [currentResult, setCurrentResult] = useState(null);
  const [scanStepText, setScanStepText] = useState('');
  const [copied, setCopied] = useState(false);

  // Icon mapping
  const iconMap = {
    BrainCircuit: BrainCircuit,
    Compass: Compass,
    Sparkles: Sparkles,
    ShieldAlert: ShieldAlert,
    Rocket: Rocket
  };

  const triggerConfetti = (color) => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: [color, '#8b5cf6', '#06b6d4', '#ec4899', '#ffffff']
      });
    } catch {
      // Confetti fallback
    }
  };

  const startScan = () => {
    setIsScanning(true);
    setCurrentResult(null);
    setCopied(false);

    // Dynamic scanning sequence texts
    setScanStepText('Analyzing algorithmic resonance...');
    const t1 = setTimeout(() => {
      setScanStepText('Scanning git commit patterns & stack traces...');
    }, 450);

    const t2 = setTimeout(() => {
      setScanStepText('Calibrating creative engineering frequencies...');
    }, 900);

    const t3 = setTimeout(() => {
      // Pick random result
      const randomIndex = Math.floor(Math.random() * developerSuperpowers.length);
      const chosen = developerSuperpowers[randomIndex];
      setCurrentResult(chosen);
      setIsScanning(false);

      if (playChime) playChime();
      triggerConfetti(chosen.color);
    }, 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const handleShare = async () => {
    if (!currentResult) return;

    const shareText = `⚡ Developer Superpower: ${currentResult.title}\n"${currentResult.tagline}"\n${currentResult.playfulMessage}\nDiscovered on JHANAVI.EXE: ${window.location.href}`;

    let copySuccessful = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareText);
        copySuccessful = true;
      }
    } catch {
      // Fallback
    }

    if (!copySuccessful) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copySuccessful = true;
      } catch {
        // Safe ignore
      }
    }

    setCopied(true);
    if (onShowToast) onShowToast(copySuccessful ? 'Superpower copied to clipboard!' : 'Superpower generated!');
    setTimeout(() => setCopied(false), 2500);

    // Also trigger mobile native share if available
    if (navigator.share && navigator.canShare && window.innerWidth <= 768) {
      try {
        await navigator.share({
          title: `My Developer Superpower: ${currentResult.title}`,
          text: shareText,
          url: window.location.href
        });
      } catch {
        // User dismiss
      }
    }
  };

  return (
    <div className="superpower-container selectable-text">
      {!currentResult && !isScanning && (
        <div className="superpower-intro-panel">
          <div className="superpower-scanner-orb" aria-hidden="true">
            <Zap size={48} />
          </div>

          <h3 className="superpower-headline">Discover Your Developer Superpower</h3>
          <p className="superpower-subtext">
            Every engineer possesses a unique creative signature — from algorithmic deduction to relentless debugging.
            Step into the biometric tech scanner and discover your superpower personality.
          </p>

          <button
            type="button"
            className="superpower-scan-btn"
            onClick={startScan}
            aria-label="Initiate developer superpower scan"
          >
            <Sparkles size={18} />
            <span>Initiate Superpower Scan</span>
          </button>
        </div>
      )}

      {/* Scanning State */}
      {isScanning && (
        <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              border: '3px solid rgba(139, 92, 246, 0.2)',
              borderTopColor: '#ec4899',
              borderRightColor: '#06b6d4',
              animation: 'spinSlow 0.8s linear infinite',
              marginBottom: 20
            }}
          />
          <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '8px' }}>
            SCANNING SYSTEM MATRIX...
          </h4>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#38bdf8' }}>
            {scanStepText}
          </p>
        </div>
      )}

      {/* Result Card */}
      {currentResult && !isScanning && (
        <div
          className="superpower-result-card"
          style={{ borderColor: currentResult.color, boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${currentResult.glowColor}` }}
        >
          {/* Top Archetype Badge */}
          <div
            className="superpower-result-badge"
            style={{ background: `rgba(255,255,255,0.06)`, border: `1px solid ${currentResult.color}`, color: currentResult.color }}
          >
            <Award size={13} />
            <span>{currentResult.archetype} • {currentResult.rarity}</span>
          </div>

          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: '18px',
              background: currentResult.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              margin: '0 auto 16px auto',
              boxShadow: `0 0 25px ${currentResult.glowColor}`
            }}
          >
            {(() => {
              const IconComp = iconMap[currentResult.icon] || Sparkles;
              return <IconComp size={34} />;
            })()}
          </div>

          <h3 className="superpower-result-title">{currentResult.title}</h3>
          <div className="superpower-result-tagline">"{currentResult.tagline}"</div>

          <p className="superpower-result-desc">{currentResult.description}</p>

          <div className="superpower-playful-box" style={{ borderLeftColor: currentResult.color }}>
            <strong>Developer Field Note: </strong>
            {currentResult.playfulMessage}
          </div>

          <div className="superpower-perks-list">
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#38bdf8', textTransform: 'uppercase', marginBottom: '4px' }}>
              ✦ Signature Traits:
            </div>
            {currentResult.perks.map((perk, i) => (
              <div key={i} className="superpower-perk-item">
                <Check size={14} color={currentResult.color} />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="superpower-btn-group">
            <button
              type="button"
              className="superpower-action-btn"
              onClick={startScan}
              aria-label="Scan again for another superpower"
            >
              <RotateCcw size={16} />
              <span>Scan Again</span>
            </button>

            <button
              type="button"
              className="superpower-action-btn"
              style={{ background: currentResult.gradient, border: 'none', color: '#ffffff' }}
              onClick={handleShare}
              aria-label="Share superpower result"
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Share Superpower'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

