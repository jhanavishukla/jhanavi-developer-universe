import React, { useState } from 'react';
import { Code2, Layout, Cpu, Layers, Cloud, Sparkles, CheckCircle, Compass, Info } from 'lucide-react';
import { skillsMatrix } from '../data/portfolioData';

/**
 * Skills.exe Application
 * Organized into attractive visual categories without fake percentage bars.
 * Accurately displays active skills and exploration domains.
 */
export default function SkillsApp() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Cpu: Cpu,
    Layers: Layers,
    Cloud: Cloud
  };

  const categories = ['All', ...skillsMatrix.map(c => c.category)];

  const filteredCategories = selectedFilter === 'All' 
    ? skillsMatrix 
    : skillsMatrix.filter(c => c.category === selectedFilter);

  return (
    <div className="skills-container selectable-text">
      {/* Disclaimer / Philosophy Note */}
      <div className="skills-disclaimer-note">
        <Info size={16} />
        <span>
          Real engineering transparency: No fabricated 95% proficiency bars. Skills represent practical project experience and active learning explorations.
        </span>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedFilter(cat)}
            className={`cyber-badge ${selectedFilter === cat ? 'cyan' : ''}`}
            style={{
              cursor: 'pointer',
              background: selectedFilter === cat ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              border: selectedFilter === cat ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
              color: selectedFilter === cat ? '#ffffff' : '#94a3b8'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Categorized Skills */}
      {filteredCategories.map((group) => {
        const IconComponent = iconMap[group.iconName] || Code2;

        return (
          <div key={group.category} className="skills-category-card">
            <div className="skills-cat-header">
              <IconComponent size={20} color="#a78bfa" />
              <h3 className="skills-cat-title">{group.category}</h3>
            </div>
            <p className="skills-cat-desc">{group.description}</p>

            <div className="skills-pill-grid">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-tag-badge">
                  <div className="skill-name-row">
                    <span className="skill-name-text">{skill.name}</span>
                    <span className="skill-status-pill">{skill.status}</span>
                  </div>
                  <span className="skill-level-text">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

