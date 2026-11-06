import React from 'react';
import { Award, Trophy, Code2, Cloud, ExternalLink, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { achievementsMilestones } from '../data/portfolioData';

/**
 * Achievements.exe Application
 * Milestone timeline highlighting hackathon qualification, LeetCode & CodeChef problem-solving,
 * and AWS Student Builder involvement. No fabricated statistics.
 */
export default function AchievementsApp() {
  const getIcon = (type) => {
    switch (type) {
      case 'Hackathon':
        return <Trophy size={18} color="#f59e0b" />;
      case 'Community & Cloud':
        return <Cloud size={18} color="#06b6d4" />;
      case 'DSA & Problem Solving':
      case 'Competitive Programming':
        return <Code2 size={18} color="#8b5cf6" />;
      default:
        return <Award size={18} color="#10b981" />;
    }
  };

  return (
    <div className="selectable-text">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={20} color="#f59e0b" />
          <span>Milestones &amp; Technical Journey</span>
        </h3>
        <p style={{ fontSize: '0.86rem', color: '#94a3b8', marginTop: '4px' }}>
          Honest track record of competitive programming, hackathons, and active cloud engineering communities.
        </p>
      </div>

      <div className="achievements-timeline">
        {achievementsMilestones.map((item) => (
          <div key={item.id} className="achievement-node">
            <div className="achievement-header-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {getIcon(item.type)}
                <h4 className="achievement-title">{item.title}</h4>
              </div>
              <span className="cyber-badge" style={{ fontSize: '0.68rem' }}>
                <Calendar size={11} /> {item.date}
              </span>
            </div>

            <div className="achievement-org">{item.organization}</div>

            <p className="achievement-desc">{item.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '12px' }}>
              <div className="achievement-metrics-badge">
                <CheckCircle size={13} color="#10b981" />
                <span>{item.highlight}</span>
              </div>

              {item.linkUrl && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-badge cyan"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  title="Configurable link: Update in portfolioData.js"
                >
                  <span>Practice Profile</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

