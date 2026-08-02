import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, PROJECTS } from '../data/portfolioData';
import { X, Printer, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="resume-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-control-bar no-print">
          <div className="control-title">Interactive Printable Resume</div>
          <div className="control-buttons">
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={16} />
              <span>Print / Download PDF</span>
            </button>
            <button onClick={onClose} className="modal-close-icon">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="resume-document" id="printable-resume">
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">{PERSONAL_INFO.name}</h1>
            <p className="resume-headline">{PERSONAL_INFO.title}</p>
            <div className="resume-contact-row">
              <span><Mail size={14} /> {PERSONAL_INFO.email}</span>
              <span><MapPin size={14} /> {PERSONAL_INFO.location}</span>
              <span><Globe size={14} /> dheerajsankhla.web</span>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Executive Summary */}
          <div className="resume-section">
            <h2 className="resume-section-heading">Executive Summary</h2>
            <p className="resume-text">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Core Technical & Business Competencies */}
          <div className="resume-section">
            <h2 className="resume-section-heading">Technical & Architectural Competencies</h2>
            <div className="resume-skills-grid">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="resume-skill-cat">
                  <strong className="resume-skill-title">{cat.title}:</strong>{' '}
                  <span className="resume-skill-list">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Ventures & High-Impact Projects */}
          <div className="resume-section">
            <h2 className="resume-section-heading">Featured Software Platforms & Ventures</h2>
            <div className="resume-items-list">
              {PROJECTS.filter((p) => p.featured).map((proj) => (
                <div key={proj.id} className="resume-item">
                  <div className="resume-item-header">
                    <strong className="item-title">{proj.title}</strong>
                    <span className="item-role">{proj.role}</span>
                  </div>
                  <div className="item-tagline">{proj.tagline}</div>
                  <p className="resume-text">{proj.description}</p>
                  {proj.metrics && (
                    <div className="item-metric">
                      <CheckCircle2 size={13} /> {proj.metrics}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Career & Venture History */}
          <div className="resume-section">
            <h2 className="resume-section-heading">Career Milestones & Venture History</h2>
            <div className="resume-items-list">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <strong className="item-title">{exp.role}</strong>
                    <span className="item-date">{exp.year}</span>
                  </div>
                  <div className="item-company">{exp.company}</div>
                  <p className="resume-text">{exp.description}</p>
                  <ul className="resume-bullet-list">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .resume-modal-content {
          width: 100%;
          max-width: 820px;
          max-height: 92vh;
          overflow-y: auto;
          background: #0B0F17;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1rem;
          padding: 0;
        }

        .resume-control-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(17, 24, 39, 0.95);
          border-bottom: 1px solid var(--border-light);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .control-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--primary-cyan);
        }

        .control-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .modal-close-icon {
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .resume-document {
          padding: 2.5rem;
          background: #FFFFFF;
          color: #1F2937;
          font-family: Arial, Helvetica, sans-serif;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .resume-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.2rem;
        }

        .resume-headline {
          font-size: 1rem;
          font-weight: 600;
          color: #2563EB;
          margin-bottom: 0.6rem;
        }

        .resume-contact-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: #4B5563;
        }

        .resume-contact-row span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .resume-divider {
          border: none;
          border-top: 2px solid #E5E7EB;
          margin: 1rem 0 1.5rem;
        }

        .resume-section {
          margin-bottom: 1.5rem;
        }

        .resume-section-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          border-bottom: 2px solid #2563EB;
          padding-bottom: 0.25rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .resume-text {
          font-size: 0.92rem;
          line-height: 1.55;
          color: #374151;
        }

        .resume-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.9rem;
        }

        .resume-skill-title {
          color: #111827;
        }

        .resume-skill-list {
          color: #4B5563;
        }

        .resume-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .resume-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .item-title {
          font-size: 1rem;
          color: #111827;
        }

        .item-role, .item-date {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2563EB;
        }

        .item-company {
          font-size: 0.88rem;
          font-weight: 600;
          color: #4B5563;
          margin-bottom: 0.25rem;
        }

        .item-tagline {
          font-size: 0.85rem;
          font-style: italic;
          color: #6B7280;
          margin-bottom: 0.35rem;
        }

        .item-metric {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #059669;
          margin-top: 0.25rem;
        }

        .resume-bullet-list {
          margin-left: 1.25rem;
          margin-top: 0.35rem;
          font-size: 0.88rem;
          color: #4B5563;
        }

        @media print {
          .no-print {
            display: none !important;
          }
          .modal-overlay {
            position: relative !important;
            background: none !important;
          }
          .resume-modal-content {
            max-height: none !important;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};
