import React, { useEffect, useRef } from 'react';
import { User, Code2, Layers, Trophy, Terminal, Sparkles, Mail, Power, ExternalLink } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

/**
 * QuickLaunchMenu (Start Menu) Component
 * Surfaces all available .exe applications and system controls.
 */
export default function QuickLaunchMenu({
  isOpen,
  onClose,
  onLaunchApp,
  appsList,
  onReturnToHero
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="quick-launch-menu" role="menu" aria-label="System Applications Menu">
      <div className="quick-menu-header">
        <div className="quick-menu-title">{personalProfile.name}</div>
        <div className="quick-menu-subtitle">{personalProfile.role}</div>
      </div>

      <div className="quick-menu-items-grid">
        {appsList.map((app) => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              type="button"
              className="quick-menu-item"
              onClick={() => {
                onLaunchApp(app.id);
                onClose();
              }}
              role="menuitem"
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  background: `${app.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon size={16} color={app.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.84rem' }}>{app.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{app.description}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '12px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          type="button"
          onClick={() => {
            onReturnToHero();
            onClose();
          }}
          className="cyber-badge"
          style={{ cursor: 'pointer', background: 'transparent' }}
        >
          <Power size={12} color="#f87171" />
          <span>Exit to Hero</span>
        </button>

        <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
          AWS Builder v2.5
        </span>
      </div>
    </div>
  );
}

