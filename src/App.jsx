import React, { useState } from 'react';
import AmbientBackground from './components/AmbientBackground';
import BootSequence from './components/BootSequence';
import HeroScreen from './components/HeroScreen';
import Desktop from './components/Desktop';
import { useSoundEffects } from './hooks/useSoundEffects';

export default function App() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [currentView, setCurrentView] = useState('HERO'); // 'HERO' | 'DESKTOP'

  // Application windows manager state
  const [activeWindows, setActiveWindows] = useState({
    about: { isOpen: false, isMinimized: false },
    skills: { isOpen: false, isMinimized: false },
    projects: { isOpen: false, isMinimized: false },
    achievements: { isOpen: false, isMinimized: false },
    superpower: { isOpen: false, isMinimized: false },
    terminal: { isOpen: false, isMinimized: false },
    contact: { isOpen: false, isMinimized: false }
  });

  const [focusedWindowId, setFocusedWindowId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const soundEffects = useSoundEffects();

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOpenApp = (appId) => {
    setCurrentView('DESKTOP');
    setActiveWindows((prev) => ({
      ...prev,
      [appId]: { isOpen: true, isMinimized: false }
    }));
    setFocusedWindowId(appId);
  };

  const handleCloseApp = (appId) => {
    setActiveWindows((prev) => ({
      ...prev,
      [appId]: { ...prev[appId], isOpen: false }
    }));
    if (focusedWindowId === appId) {
      const openRemaining = Object.keys(activeWindows).filter(
        (key) => key !== appId && activeWindows[key].isOpen && !activeWindows[key].isMinimized
      );
      setFocusedWindowId(openRemaining.length > 0 ? openRemaining[0] : null);
    }
  };

  const handleToggleMinimize = (appId) => {
    setActiveWindows((prev) => {
      const current = prev[appId];
      if (!current) return prev;
      const isNowMinimized = !current.isMinimized;
      return {
        ...prev,
        [appId]: { ...current, isMinimized: isNowMinimized }
      };
    });

    if (focusedWindowId === appId) {
      setFocusedWindowId(null);
    } else {
      setFocusedWindowId(appId);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background Starfield & Subtle Glowing Orbs */}
      <AmbientBackground />

      {/* Boot Sequence Modal */}
      {!bootCompleted && (
        <BootSequence onComplete={() => setBootCompleted(true)} />
      )}

      {/* Hero Entrance View */}
      {bootCompleted && currentView === 'HERO' && (
        <HeroScreen
          onEnterUniverse={() => {
            setCurrentView('DESKTOP');
            // Auto open About.exe on first entrance
            handleOpenApp('about');
            if (soundEffects.playWindowOpen) soundEffects.playWindowOpen();
          }}
          onOpenApp={(appId) => {
            handleOpenApp(appId);
            if (soundEffects.playWindowOpen) soundEffects.playWindowOpen();
          }}
        />
      )}

      {/* Desktop Dashboard OS View */}
      {bootCompleted && currentView === 'DESKTOP' && (
        <Desktop
          activeWindows={activeWindows}
          openApp={handleOpenApp}
          closeApp={handleCloseApp}
          toggleMinimize={handleToggleMinimize}
          focusedWindowId={focusedWindowId}
          setFocusedWindowId={setFocusedWindowId}
          onShowToast={showToast}
          soundEffects={soundEffects}
          onReturnToHero={() => {
            setCurrentView('HERO');
            if (soundEffects.playClick) soundEffects.playClick();
          }}
        />
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span style={{ color: '#06b6d4' }}>✦</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

