import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, MapPin, Send, MessageSquare } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

/**
 * Contact.exe Application
 * Centralized contact channels: Email (mailto & copy), GitHub, and LinkedIn.
 * Clearly displays configuration status and allows one-click copy.
 */
export default function ContactApp({ onShowToast }) {
  const { socialLinks, name, education } = personalProfile;
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, keyName, label) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedKey(keyName);
      if (onShowToast) onShowToast(`${label} copied to clipboard!`);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      if (onShowToast) onShowToast('Failed to copy to clipboard');
    }
  };

  return (
    <div className="contact-container selectable-text">
      {/* Intro Note */}
      <div className="contact-intro-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>
          <MessageSquare size={18} color="#06b6d4" />
          <span>Let's Connect &amp; Collaborate</span>
        </div>
        <p>
          I am always excited to discuss backend engineering, machine learning ideas, hackathons, and open-source projects.
          Feel free to reach out via email or connect with me on LinkedIn and GitHub.
        </p>
      </div>

      {/* Channels Grid */}
      <div className="contact-channels-grid">
        {/* Email Channel */}
        <div className="contact-channel-card">
          <div className="channel-icon-header">
            <div className="channel-icon-wrap">
              <Mail size={20} />
            </div>
            <div>
              <div className="channel-title">Direct Email</div>
              <span className="cyber-badge" style={{ fontSize: '0.65rem' }}>Primary Contact</span>
            </div>
          </div>

          <div className="channel-value-text">{socialLinks.email.address}</div>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <a
              href={`mailto:${socialLinks.email.address}`}
              className="channel-btn"
              style={{ flex: 1 }}
              title="Compose email in your default mail app"
            >
              <Send size={13} />
              <span>Send Mail</span>
            </a>
            <button
              type="button"
              className="channel-btn"
              style={{ padding: '8px 12px' }}
              onClick={() => copyToClipboard(socialLinks.email.address, 'email', 'Email address')}
              aria-label="Copy email address"
            >
              {copiedKey === 'email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* GitHub Channel */}
        <div className="contact-channel-card">
          <div className="channel-icon-header">
            <div className="channel-icon-wrap" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>
              <Github size={20} />
            </div>
            <div>
              <div className="channel-title">GitHub Profile</div>
              <span className="cyber-badge cyan" style={{ fontSize: '0.65rem' }}>Repositories</span>
            </div>
          </div>

          <div className="channel-value-text">{socialLinks.github.username}</div>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-btn"
              style={{ flex: 1 }}
              title={socialLinks.github.isConfigured ? 'Open GitHub' : 'Centralized Placeholder URL'}
            >
              <ExternalLink size={13} />
              <span>Visit GitHub</span>
            </a>
            <button
              type="button"
              className="channel-btn"
              style={{ padding: '8px 12px' }}
              onClick={() => copyToClipboard(socialLinks.github.url, 'github', 'GitHub URL')}
              aria-label="Copy GitHub URL"
            >
              {copiedKey === 'github' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* LinkedIn Channel */}
        <div className="contact-channel-card">
          <div className="channel-icon-header">
            <div className="channel-icon-wrap" style={{ background: 'rgba(10, 102, 194, 0.2)', color: '#60a5fa' }}>
              <Linkedin size={20} />
            </div>
            <div>
              <div className="channel-title">LinkedIn Network</div>
              <span className="cyber-badge emerald" style={{ fontSize: '0.65rem' }}>Professional</span>
            </div>
          </div>

          <div className="channel-value-text">{socialLinks.linkedin.username}</div>

          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-btn"
              style={{ flex: 1 }}
              title={socialLinks.linkedin.isConfigured ? 'Open LinkedIn' : 'Centralized Placeholder URL'}
            >
              <ExternalLink size={13} />
              <span>Connect</span>
            </a>
            <button
              type="button"
              className="channel-btn"
              style={{ padding: '8px 12px' }}
              onClick={() => copyToClipboard(socialLinks.linkedin.url, 'linkedin', 'LinkedIn URL')}
              aria-label="Copy LinkedIn URL"
            >
              {copiedKey === 'linkedin' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Location / University Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
        <MapPin size={16} color="#8b5cf6" />
        <span>Based in {education.location} • Student at {education.institution}</span>
      </div>
    </div>
  );
}

