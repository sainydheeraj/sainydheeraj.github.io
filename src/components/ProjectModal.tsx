import React from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, Award, CheckCircle2, Layers } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div className="modal-banner-wrapper">
          <img src={project.image} alt={project.title} className="modal-banner-img" />
          <div className="modal-category-badge">{project.categoryLabel}</div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-tagline">{project.tagline}</p>

          <div className="modal-role-badge">
            <Layers size={15} />
            <span>Role: {project.role}</span>
          </div>

          {/* Impact Metric Callout */}
          {project.metrics && (
            <div className="modal-metric-box">
              <Award size={20} className="metric-icon" />
              <div>
                <div className="metric-title">Key Impact & Achievements</div>
                <div className="metric-desc">{project.metrics}</div>
              </div>
            </div>
          )}

          {/* Deep Narrative Breakdown */}
          <div className="modal-section">
            <h3 className="modal-section-title">Architectural Overview</h3>
            <p className="modal-description-text">{project.fullDetails}</p>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h3 className="modal-section-title">Technologies & Tools</h3>
            <div className="modal-tech-grid">
              {project.techStack.map((tech, i) => (
                <span key={i} className="modal-tech-tag">
                  <CheckCircle2 size={13} /> {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="modal-actions">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={16} />
              </a>
            )}
            {project.links.instagram && (
              <a
                href={project.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <InstagramIcon size={16} />
                <span>Instagram Business Handle</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 700px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          border-radius: 1.25rem;
        }

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: var(--primary-cyan);
          color: #000;
        }

        .modal-banner-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
          border-top-left-radius: 1.25rem;
          border-top-right-radius: 1.25rem;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-category-badge {
          position: absolute;
          bottom: 1rem;
          left: 1.25rem;
          padding: 0.35rem 0.9rem;
          background: rgba(11, 15, 23, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-glow);
          color: var(--primary-cyan);
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        .modal-body {
          padding: 1.75rem;
        }

        .modal-title {
          font-size: 1.85rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .modal-tagline {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .modal-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.75rem;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #A78BFA;
          border-radius: 6px;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .modal-metric-box {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .metric-icon {
          color: var(--primary-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .metric-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .metric-desc {
          color: #F3F4F6;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
          color: #E5E7EB;
        }

        .modal-description-text {
          color: var(--text-muted);
          line-height: 1.65;
          font-size: 0.98rem;
        }

        .modal-tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .modal-tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 0.85rem;
          color: #D1D5DB;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
