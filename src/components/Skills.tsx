import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code, Cloud, ShoppingBag, TrendingUp, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Code': return Code;
      case 'Cloud': return Cloud;
      case 'ShoppingBag': return ShoppingBag;
      case 'TrendingUp': return TrendingUp;
      default: return Code;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical & Business Mastery</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of technical engineering stack, Generative AI capabilities, cloud infrastructure, e-commerce development, and Meta Ads performance marketing.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = getIcon(cat.iconName);
            return (
              <div key={i} className="glass-card skill-card">
                {/* Category Header */}
                <div className="skill-cat-header">
                  <div className="cat-icon-wrapper">
                    <Icon size={22} />
                  </div>
                  <h3 className="cat-title">{cat.title}</h3>
                </div>

                {/* Skills Item List */}
                <div className="skill-items-list">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-info">
                        <span className={`skill-name ${skill.highlight ? 'highlight-skill' : ''}`}>
                          {skill.highlight && <CheckCircle size={14} className="check-icon" />}
                          {skill.name}
                        </span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      {/* Skill Level Progress Bar */}
                      <div className="skill-bar-bg">
                        <div
                          className={`skill-bar-fill ${skill.highlight ? 'bar-glow' : ''}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .skill-card {
          padding: 1.75rem;
        }

        .skill-cat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
        }

        .cat-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: var(--primary-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
          font-size: 0.92rem;
        }

        .skill-name {
          color: #E5E7EB;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .highlight-skill {
          color: #FFF;
          font-weight: 600;
        }

        .check-icon {
          color: var(--primary-cyan);
        }

        .skill-percentage {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-cyan);
          font-family: var(--font-heading);
        }

        .skill-bar-bg {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--primary-cyan);
          border-radius: 9999px;
          transition: width 1s ease-in-out;
        }

        .bar-glow {
          background: var(--gradient-glow);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  );
};
