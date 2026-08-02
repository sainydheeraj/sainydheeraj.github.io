import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">
            Ventures & <span className="gradient-text">Leadership Journey</span>
          </h2>
          <p className="section-subtitle">
            Track record of founding ventures, engineering high-throughput software systems, and scaling direct-to-consumer platforms.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="timeline-container">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <Briefcase size={16} />
                </div>
                {index < EXPERIENCES.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Experience Card */}
              <div className="glass-card timeline-card">
                <div className="card-top-bar">
                  <div className="year-badge">
                    <Calendar size={14} />
                    <span>{exp.year}</span>
                  </div>
                  {exp.badge && <span className="highlight-badge">{exp.badge}</span>}
                </div>

                <h3 className="role-title">{exp.role}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <p className="role-description">{exp.description}</p>

                {/* Achievements List */}
                <div className="achievements-list">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="achievement-item">
                      <CheckCircle2 size={16} className="achievement-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 6rem 0;
        }

        .timeline-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .timeline-dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
          z-index: 2;
          flex-shrink: 0;
        }

        .timeline-line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom, var(--primary-cyan), rgba(255, 255, 255, 0.05));
          margin-top: 0.5rem;
        }

        .timeline-card {
          flex-grow: 1;
          padding: 1.75rem;
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          border-radius: 9999px;
          color: var(--primary-cyan);
          font-size: 0.82rem;
          font-weight: 600;
        }

        .highlight-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #C084FC;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .role-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .company-name {
          font-size: 1rem;
          color: var(--primary-cyan);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .role-description {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #D1D5DB;
        }

        .achievement-icon {
          color: var(--primary-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 640px) {
          .timeline-item {
            gap: 1rem;
          }
          .timeline-dot {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};
