import React, { useState, useEffect } from 'react';
import {
  Menu,
  Volume2,
  VolumeX,
  Sparkles,
  Home,
  Clock,
  Terminal,
  Grid
} from 'lucide-react';
import QuickLaunchMenu from './QuickLaunchMenu';

/**
 * Taskbar Component
 * Bottom system navigation with Start menu, active app tabs, sound toggle, and live clock.
 */
export default function Taskbar({
  activeWindows,
  openApp,
  toggleMinimize,
  focusedWindowId,
  appsList,
  soundEnabled,
  toggleSound,
  onReturnToHero
}) {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Digital clock updater
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <QuickLaunchMenu
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
        onLaunchApp={openApp}
        appsList={appsList}
        onReturnToHero={onReturnToHero}
      />

      <footer className="taskbar" role="navigation" aria-label="System Taskbar">
        <div className="taskbar-left">
          {/* Start Launcher Button */}
          <button
            type="button"
            className="taskbar-start-btn"
            onClick={() => setIsStartOpen((prev) => !prev)}
            aria-label="Open system start menu"
            aria-expanded={isStartOpen}
          >
            <Grid size={16} />
            <span>JHANAVI.EXE</span>
          </button>

          {/* Return to Hero CTA */}
          <button
            type="button"
            onClick={onReturnToHero}
            className="cyber-badge"
            style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.04)', display: 'none' }}
            title="Return to Hero Screen"
          >
            <Home size={12} />
          </button>

          {/* Active Running Apps Tab Pills */}
          <div className="taskbar-active-apps">
            {appsList
              .filter((app) => activeWindows[app.id]?.isOpen)
              .map((app) => {
                const Icon = app.icon;
                const isMinimized = activeWindows[app.id]?.isMinimized;
                const isFocused = focusedWindowId === app.id && !isMinimized;

                return (
                  <button
                    key={app.id}
                    type="button"
                    className={`taskbar-app-tab ${isFocused ? 'active' : ''}`}
                    onClick={() => toggleMinimize(app.id)}
                    title={isMinimized ? `Restore ${app.title}` : `Minimize ${app.title}`}
                  >
                    <Icon size={14} color={app.color} />
                    <span>{app.title}</span>
                  </button>
                );
              })}
          </div>
        </div>

        {/* System Tray (Clock, Audio Toggle, Superpower Hint) */}
        <div className="taskbar-right">
          {/* Superpower Quick Trigger */}
          <button
            type="button"
            className="superpower-teaser-btn"
            onClick={() => openApp('superpower')}
            title="Discover your Developer Superpower"
          >
            <Sparkles size={13} />
            <span>Superpower</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            style={{
              background: 'transparent',
              border: 'none',
              color: soundEnabled ? '#06b6d4' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
            title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* System Clock */}
          <div className="taskbar-clock" aria-label="System Time">
            {currentTime || '00:00:00'}
          </div>
        </div>
      </footer>
    </>
  );
}

