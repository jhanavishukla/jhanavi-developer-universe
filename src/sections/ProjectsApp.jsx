import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Check, AlertCircle, Layers, QrCode, Monitor, Compass, Sparkles } from 'lucide-react';
import { projectsShowcase } from '../data/portfolioData';

/**
 * Projects.exe Application
 * Featured projects with original CSS/SVG visual previews (no broken images),
 * tech tags, feature lists, and clearly labeled repository/live demo buttons.
 */
export default function ProjectsApp() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModalProject) {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject]);

  // Render CSS-based visual preview mockup according to project type
  const renderVisualPreview = (type) => {
    switch (type) {
      case 'qr-tool':
        return (
          <div className="preview-mockup-qr">
            <div className="mockup-qr-matrix">
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel" />
              <div className="mockup-qr-pixel off" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel" />
              <div className="mockup-qr-pixel" />
              <div className="mockup-qr-pixel off" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel off" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel off" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel off" />
              <div className="mockup-qr-pixel dark" />
              <div className="mockup-qr-pixel dark" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#67e8f9', fontFamily: 'var(--font-mono)' }}>
              <QrCode size={13} />
              <span>QR Code Engine • Pure JS</span>
            </div>
          </div>
        );

      case 'landing-page':
        return (
          <div className="preview-mockup-landing">
            <div className="mockup-landing-nav">
              <div style={{ width: '40px', height: '6px', background: '#8b5cf6', borderRadius: '3px' }} />
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '20px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
                <div style={{ width: '20px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
              </div>
            </div>
            <div className="mockup-landing-hero">
              <div className="mockup-landing-box" />
              <div className="mockup-landing-box" style={{ background: 'rgba(6,182,212,0.12)', borderColor: 'rgba(6,182,212,0.3)' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#c4b5fd', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>
              <Monitor size={13} />
              <span>Nexcent UI • Modern CSS Grid</span>
            </div>
          </div>
        );

      case 'tracker-app':
      default:
        return (
          <div className="preview-mockup-tracker">
            <div className="mockup-tracker-bar">
              <span style={{ color: '#38bdf8' }}>DSA Mastery: Arrays &amp; Binary Search</span>
              <span style={{ color: '#34d399' }}>[85%]</span>
            </div>
            <div className="mockup-tracker-bar" style={{ background: 'rgba(139,92,246,0.1)' }}>
              <span style={{ color: '#c4b5fd' }}>AI Roadmap: Neural Nets &amp; PyTorch</span>
              <span style={{ color: '#a78bfa' }}>[In Progress]</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#6ee7b7', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>
              <Compass size={13} />
              <span>Vite SPA • Student Roadmap</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="selectable-text">
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Featured Software Projects</h3>
          <p style={{ fontSize: '0.86rem', color: '#94a3b8' }}>
            Built with modern web standards, algorithms, and modular frameworks.
          </p>
        </div>
        <span className="cyber-badge cyan">
          <Layers size={13} /> 3 Projects Showcased
        </span>
      </div>

      <div className="projects-grid">
        {projectsShowcase.map((project) => (
          <article key={project.id} className="project-card">
            {/* Visual Preview */}
            <div className="project-preview-viewport">
              {renderVisualPreview(project.previewType)}
            </div>

            {/* Content Details */}
            <div className="project-details-content">
              <div className="project-card-header">
                <h4 className="project-title">{project.title}</h4>
                <span className="cyber-badge" style={{ fontSize: '0.68rem' }}>{project.badge}</span>
              </div>

              <p className="project-desc">{project.shortDescription}</p>

              {/* Tags */}
              <div className="project-tags-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag-item">#{tag}</span>
                ))}
              </div>

              {/* Placeholder warning indicator if user hasn't configured real URL yet */}
              {!project.isConfigured && (
                <div className="placeholder-pill-note">
                  <AlertCircle size={12} />
                  <span>Configurable placeholder link</span>
                </div>
              )}

              {/* Actions */}
              <div className="project-actions-row">
                {/* GitHub Repo Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                  title={project.isConfigured ? 'View Repository' : 'Centralized Placeholder: Update in portfolioData.js'}
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>

                {/* Live Demo Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary"
                  title={project.isConfigured ? 'Open Live Demo' : 'Centralized Placeholder: Update in portfolioData.js'}
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>

                {/* Inspect Details Button */}
                <button
                  type="button"
                  className="project-btn secondary"
                  style={{ flex: '0 0 auto', padding: '8px' }}
                  onClick={() => setActiveModalProject(project)}
                  title="Inspect Architectural Details"
                  aria-label={`Inspect ${project.title} details`}
                >
                  <Sparkles size={14} color="#a78bfa" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Inspect Project Modal Dialog */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '520px',
              width: '100%',
              background: 'rgba(13, 18, 30, 0.98)',
              border: '1px solid var(--violet-primary)',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>
                {activeModalProject.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.2rem' }}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
              {activeModalProject.fullDescription}
            </p>

            <h5 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#38bdf8', marginBottom: '10px' }}>
              Key Architectural Features:
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {activeModalProject.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8' }}>
                  <Check size={14} color="#10b981" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn secondary"
              >
                <Github size={14} /> View Code
              </a>
              <a
                href={activeModalProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn primary"
              >
                <ExternalLink size={14} /> Open Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

