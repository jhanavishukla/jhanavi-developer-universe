import React, { useState } from 'react';
import {
  User,
  Code2,
  FolderGit2,
  Trophy,
  Terminal,
  Sparkles,
  Mail,
  Zap,
  RotateCcw,
  Compass,
  ArrowLeft
} from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import WindowFrame from './WindowFrame';
import Taskbar from './Taskbar';
import AboutApp from '../sections/AboutApp';
import SkillsApp from '../sections/SkillsApp';
import ProjectsApp from '../sections/ProjectsApp';
import AchievementsApp from '../sections/AchievementsApp';
import SuperpowerApp from '../sections/SuperpowerApp';
import TerminalApp from '../sections/TerminalApp';
import ContactApp from '../sections/ContactApp';
import { personalProfile } from '../data/portfolioData';

/**
 * Applications Registry
 */
export const SYSTEM_APPS = [
  {
    id: 'about',
    title: 'About.exe',
    description: 'Background, education & engineering philosophy',
    icon: User,
    color: '#8b5cf6',
    component: AboutApp,
    defaultSize: { width: 720, height: 540 },
    defaultPos: { x: 50, y: 35 }
  },
  {
    id: 'skills',
    title: 'Skills.exe',
    description: 'Technical stack & active exploration areas',
    icon: Code2,
    color: '#06b6d4',
    component: SkillsApp,
    defaultSize: { width: 760, height: 560 },
    defaultPos: { x: 90, y: 55 }
  },
  {
    id: 'projects',
    title: 'Projects.exe',
    description: 'Featured repositories with visual UI mockups',
    icon: FolderGit2,
    color: '#3b82f6',
    component: ProjectsApp,
    defaultSize: { width: 840, height: 580 },
    defaultPos: { x: 70, y: 40 }
  },
  {
    id: 'achievements',
    title: 'Achievements.exe',
    description: 'Hackathons, DSA milestones & AWS Student Builder',
    icon: Trophy,
    color: '#f59e0b',
    component: AchievementsApp,
    defaultSize: { width: 750, height: 550 },
    defaultPos: { x: 110, y: 65 }
  },
  {
    id: 'superpower',
    title: 'Superpower.exe',
    description: 'Signature interactive developer personality scanner',
    icon: Sparkles,
    color: '#ec4899',
    component: SuperpowerApp,
    defaultSize: { width: 680, height: 600 },
    defaultPos: { x: 130, y: 40 },
    isFeatured: true
  },
  {
    id: 'terminal',
    title: 'Terminal.exe',
    description: 'Simulated developer command shell',
    icon: Terminal,
    color: '#10b981',
    component: TerminalApp,
    defaultSize: { width: 740, height: 480 },
    defaultPos: { x: 80, y: 70 }
  },
  {
    id: 'contact',
    title: 'Contact.exe',
    description: 'Email, GitHub & LinkedIn communication channels',
    icon: Mail,
    color: '#c084fc',
    component: ContactApp,
    defaultSize: { width: 680, height: 500 },
    defaultPos: { x: 120, y: 80 }
  }
];

export default function Desktop({
  activeWindows,
  openApp,
  closeApp,
  toggleMinimize,
  focusedWindowId,
  setFocusedWindowId,
  onShowToast,
  soundEffects,
  onReturnToHero
}) {
  return (
    <div className="desktop-workspace" role="main" aria-label="JHANAVI.EXE Desktop Workspace">
      {/* Top System Status Header Bar */}
      <header className="desktop-header-bar">
        <div className="desktop-header-left">
          <span className="status-indicator-dot" />
          <span style={{ color: '#ffffff', fontWeight: 600 }}>JHANAVI.EXE</span>
          <span style={{ color: '#64748b' }}>|</span>
          <span style={{ color: '#94a3b8' }}>Ramdeobaba University, Nagpur</span>
          <span style={{ color: '#64748b' }}>|</span>
          <span style={{ color: '#38bdf8' }}>AWS Student Builder Challenge</span>
        </div>

        <div className="desktop-header-right">
          {/* Visible Dashboard Hint for Superpower.exe as requested */}
          <button
            type="button"
            className="superpower-teaser-btn"
            onClick={() => {
              openApp('superpower');
              if (soundEffects?.playClick) soundEffects.playClick();
            }}
          >
            <Sparkles size={13} />
            <span>✨ Discover Your Developer Superpower!</span>
          </button>

          <button
            type="button"
            onClick={onReturnToHero}
            className="cyber-badge"
            style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.04)' }}
            title="Return to Hero Screen"
          >
            <ArrowLeft size={12} />
            <span>Hero Screen</span>
          </button>
        </div>
      </header>

      {/* Desktop App Shortcuts Grid */}
      <div className="desktop-icons-container" role="toolbar" aria-label="Desktop Applications">
        {SYSTEM_APPS.map((app) => (
          <DesktopIcon
            key={app.id}
            id={app.id}
            title={app.title}
            icon={app.icon}
            color={app.color}
            isOpen={activeWindows[app.id]?.isOpen}
            isFeatured={app.isFeatured}
            onClick={(id) => {
              openApp(id);
              if (soundEffects?.playWindowOpen) soundEffects.playWindowOpen();
            }}
          />
        ))}
      </div>

      {/* Active Windows Stack */}
      {SYSTEM_APPS.map((app) => {
        const winState = activeWindows[app.id];
        if (!winState?.isOpen) return null;

        const AppComponent = app.component;

        return (
          <WindowFrame
            key={app.id}
            id={app.id}
            title={app.title}
            icon={app.icon}
            isOpen={winState.isOpen}
            isMinimized={winState.isMinimized}
            isFocused={focusedWindowId === app.id}
            onClose={(id) => {
              closeApp(id);
              if (soundEffects?.playClick) soundEffects.playClick();
            }}
            onMinimize={(id) => {
              toggleMinimize(id);
              if (soundEffects?.playClick) soundEffects.playClick();
            }}
            onFocus={(id) => setFocusedWindowId(id)}
            initialPosition={app.defaultPos}
            initialSize={app.defaultSize}
          >
            <AppComponent
              onOpenApp={(targetId) => {
                openApp(targetId);
                if (soundEffects?.playWindowOpen) soundEffects.playWindowOpen();
              }}
              onShowToast={onShowToast}
              playChime={soundEffects?.playSuperpowerChime}
            />
          </WindowFrame>
        );
      })}

      {/* Persistent System Taskbar */}
      <Taskbar
        activeWindows={activeWindows}
        openApp={openApp}
        toggleMinimize={toggleMinimize}
        focusedWindowId={focusedWindowId}
        appsList={SYSTEM_APPS}
        soundEnabled={soundEffects?.soundEnabled}
        toggleSound={soundEffects?.toggleSound}
        onReturnToHero={onReturnToHero}
      />
    </div>
  );
}

