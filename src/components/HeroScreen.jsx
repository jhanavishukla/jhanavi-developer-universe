import React from 'react';
import { ArrowRight, Github, Linkedin, Sparkles, Terminal, Code2, Globe } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

/**
 * Impressive Hero Screen
 * Contains JHANAVI.EXE branding, authentic introduction, abstract developer visual,
 * centralized configurable social links, and the "Explore My Universe" CTA.
 */
export default function HeroScreen({ onEnterUniverse, onOpenApp }) {
  const { name, systemId, tagline, role, shortBio, socialLinks, education } = personalProfile;

  return (
    <section className="hero-container" aria-label="Hero Introduction">
      <div className="hero-content-card">
        {/* Top OS Pill */}
        <div className="hero-tag-pill">
          <Sparkles size={14} color="#a78bfa" />
          <span>{systemId} // AWS STUDENT BUILDER EDITION</span>
        </div>

        {/* Name and Glitch Title */}
        <h1 className="hero-title-glitch">{name}</h1>
        <div className="hero-subtitle">{role}</div>
        <div className="hero-quote">"{tagline}"</div>

        {/* CSS-Generated Abstract Developer Illustration */}
        <div className="hero-visual-core" aria-hidden="true">
          <div className="hero-cyber-ring ring-outer" />
          <div className="hero-cyber-ring ring-middle" />
          <div className="ring-core">
            <Code2 size={24} />
          </div>
        </div>

        {/* Authentic Intro Text */}
        <p className="hero-intro-text">
          {shortBio} Currently pursuing {education.degree} at {education.institution}, {education.location}.
          Focusing on scalable backend architecture, algorithmic problem-solving, and intelligent cloud systems.
        </p>

        {/* CTA Group */}
        <div className="hero-cta-group">
          <button
            type="button"
            className="hero-primary-btn"
            onClick={onEnterUniverse}
            aria-label="Enter interactive desktop universe"
          >
            <span>Explore My Universe</span>
            <ArrowRight size={18} />
          </button>

          {/* GitHub link with configuration state */}
          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            title={socialLinks.github.isConfigured ? 'View GitHub Profile' : 'Centralized Placeholder URL'}
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          {/* LinkedIn link with configuration state */}
          <a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            title={socialLinks.linkedin.isConfigured ? 'View LinkedIn Profile' : 'Centralized Placeholder URL'}
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Standout Signature Feature Banner on Hero */}
        <div
          style={{
            marginBottom: '24px',
            padding: '12px 20px',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.18))',
            border: '1px solid rgba(236, 72, 153, 0.35)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            maxWidth: '540px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.18)'
          }}
          onClick={() => onOpenApp('superpower')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') onOpenApp('superpower'); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
            <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>AWS Challenge Signature Feature</div>
              <div style={{ fontSize: '0.76rem', color: '#f472b6' }}>Discover Your Developer Superpower ✦ Click to scan</div>
            </div>
          </div>
          <ArrowRight size={16} color="#f472b6" />
        </div>

        {/* Quick Launch Shortcuts underneath */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          <button
            type="button"
            className="cyber-badge"
            style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.04)' }}
            onClick={() => onOpenApp('superpower')}
          >
            <Sparkles size={12} color="#ec4899" />
            <span>Superpower.exe</span>
          </button>

          <button
            type="button"
            className="cyber-badge cyan"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenApp('projects')}
          >
            <Code2 size={12} />
            <span>Projects.exe</span>
          </button>

          <button
            type="button"
            className="cyber-badge emerald"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenApp('terminal')}
          >
            <Terminal size={12} />
            <span>Terminal.exe</span>
          </button>
        </div>
      </div>
    </section>
  );
}

