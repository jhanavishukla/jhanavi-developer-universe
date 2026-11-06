import React from 'react';
import { User, GraduationCap, MapPin, Sparkles, BookOpen, BrainCircuit, Cloud, Code } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

/**
 * About.exe Application
 * Introduces Jhanavi Shukla, second-year CSE student at Ramdeobaba University, Nagpur.
 */
export default function AboutApp() {
  const { name, education, aboutStory, interests, awsChallenge } = personalProfile;

  return (
    <div className="about-hero-grid selectable-text">
      {/* Profile Header Banner */}
      <div className="about-profile-banner">
        <div className="about-avatar-symbol" aria-hidden="true">
          JS
        </div>
        <div className="about-info-summary">
          <h3>{name}</h3>
          <p>{education.degree} • {education.year}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px', fontSize: '0.82rem', color: '#94a3b8' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <GraduationCap size={15} color="#8b5cf6" />
              {education.institution}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={15} color="#06b6d4" />
              {education.location}
            </span>
          </div>
        </div>
      </div>

      {/* Story & Philosophy */}
      <div className="about-text-paragraphs">
        {aboutStory.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Highlight Box: AWS & Cloud Learning */}
      <div className="about-highlight-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '6px', color: '#38bdf8' }}>
          <Cloud size={18} />
          <span>AWS Student Builder Context</span>
        </div>
        <p>
          Participating in the <strong>{awsChallenge.challengeName}: {awsChallenge.theme}</strong>.
          I am exploring AWS services including Amplify Hosting, S3 storage, and serverless computation models to bridge the gap between code and reliable cloud infrastructure.
        </p>
      </div>

      {/* Technical Interests */}
      <div>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BrainCircuit size={18} color="#a78bfa" />
          <span>Core Engineering Focus &amp; Curiosity</span>
        </h4>
        <div className="about-interests-grid">
          {interests.map((interest, idx) => (
            <div key={idx} className="interest-card">
              <Sparkles size={14} color="#06b6d4" />
              <span>{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

