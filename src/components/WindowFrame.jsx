import React, { useState, useEffect, useRef } from 'react';
import { Minus, Square, X, Maximize2, Minimize2 } from 'lucide-react';

/**
 * WindowFrame Component
 * Floating/modal desktop window with drag support, maximize/restore, minimize, and close.
 * Includes accessible keyboard shortcuts (Escape to close).
 */
export default function WindowFrame({
  id,
  title,
  icon: Icon,
  isOpen,
  isMinimized,
  isFocused,
  onClose,
  onMinimize,
  onFocus,
  initialPosition = { x: 40, y: 30 },
  initialSize = { width: 780, height: 560 },
  children
}) {
  const [position, setPosition] = useState(initialPosition);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  // Focus elevation when clicked
  const handleMouseDown = () => {
    onFocus(id);
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFocused && isOpen && !isMinimized) {
        onClose(id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id, isFocused, isOpen, isMinimized, onClose]);

  // Window drag handlers (desktop only)
  const handleHeaderMouseDown = (e) => {
    if (isMaximized || window.innerWidth < 768) return;
    if (e.button !== 0) return; // Left click only
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    onFocus(id);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = Math.max(10, Math.min(window.innerWidth - 300, e.clientX - dragOffset.current.x));
      const newY = Math.max(10, Math.min(window.innerHeight - 150, e.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen || isMinimized) return null;

  return (
    <div
      ref={frameRef}
      className={`window-frame ${isMaximized ? 'maximized' : ''} ${isFocused ? 'focused' : ''}`}
      style={
        isMaximized || window.innerWidth < 768
          ? {}
          : {
              top: `${position.y}px`,
              left: `${position.x}px`,
              width: `${Math.min(initialSize.width, window.innerWidth - 60)}px`,
              height: `${Math.min(initialSize.height, window.innerHeight - 100)}px`
            }
      }
      onMouseDown={handleMouseDown}
      role="dialog"
      aria-labelledby={`window-title-${id}`}
      tabIndex={-1}
    >
      {/* Titlebar Header */}
      <div
        className="window-header"
        onMouseDown={handleHeaderMouseDown}
        onDoubleClick={() => setIsMaximized((prev) => !prev)}
      >
        <div className="window-header-left">
          {/* Traffic Light Window Action Buttons */}
          <div className="window-controls-traffic">
            <button
              type="button"
              className="traffic-btn traffic-close"
              onClick={() => onClose(id)}
              title="Close window (Esc)"
              aria-label="Close window"
            />
            <button
              type="button"
              className="traffic-btn traffic-minimize"
              onClick={() => onMinimize(id)}
              title="Minimize window"
              aria-label="Minimize window"
            />
            <button
              type="button"
              className="traffic-btn traffic-maximize"
              onClick={() => setIsMaximized((prev) => !prev)}
              title={isMaximized ? 'Restore down' : 'Maximize window'}
              aria-label={isMaximized ? 'Restore down' : 'Maximize window'}
            />
          </div>

          <div id={`window-title-${id}`} className="window-title">
            {Icon && <Icon size={15} color="#8b5cf6" />}
            <span style={{ opacity: 0.6, fontSize: '0.72rem' }}>JHANAVI.EXE /</span>
            <span>{title}</span>
          </div>
        </div>

        <div className="window-header-right">
          <button
            type="button"
            onClick={() => setIsMaximized((prev) => !prev)}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 2 }}
            aria-label={isMaximized ? 'Restore window size' : 'Maximize window'}
          >
            {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button
            type="button"
            onClick={() => onClose(id)}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 2 }}
            aria-label="Close window"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Window Body Content */}
      <div className="window-body">
        {children}
      </div>
    </div>
  );
}

