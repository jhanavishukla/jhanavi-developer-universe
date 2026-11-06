import React from 'react';

/**
 * DesktopIcon Component
 * Clickable and keyboard-accessible desktop application shortcut.
 */
export default function DesktopIcon({
  id,
  title,
  icon: Icon,
  color = '#8b5cf6',
  isOpen,
  onClick,
  isFeatured = false
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(id);
    }
  };

  return (
    <button
      type="button"
      className="desktop-icon-item"
      onClick={() => onClick(id)}
      onKeyDown={handleKeyDown}
      aria-label={`Open application ${title}`}
      title={`Open ${title}`}
    >
      {isOpen && <span className="desktop-icon-badge" title="Running" />}

      <div
        className="desktop-icon-graphic"
        style={{
          background: `linear-gradient(135deg, ${color}22, rgba(13, 18, 30, 0.8))`,
          border: `1px solid ${color}44`,
          boxShadow: isFeatured ? `0 0 16px ${color}55` : 'none'
        }}
      >
        <Icon size={24} color={color} />
      </div>

      <span className="desktop-icon-label">{title}</span>
    </button>
  );
}

