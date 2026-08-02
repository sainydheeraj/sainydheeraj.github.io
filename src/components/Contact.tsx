import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in building high-performance AI agents, scaling full-stack platforms, developing e-commerce stores, or optimizing Meta Ads funnels? Reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Handles */}
          <div className="contact-info-col">
            <div className="glass-card info-card">
              <h3 className="info-card-title">Direct Contact</h3>
              
              <a href={`mailto:${PERSONAL_INFO.email}`} className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <div className="info-label">Email Address</div>
                  <div className="info-value">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon"><Sparkles size={20} /></div>
                <div>
                  <div className="info-label">Current Status</div>
                  <div className="info-value text-cyan">{PERSONAL_INFO.availability}</div>
                </div>
              </div>
            </div>

            {/* Business Handles & Platforms Card */}
            <div className="glass-card info-card">
              <h3 className="info-card-title">Official Brands & Social Handles</h3>
              <div className="social-links-list">
                <a
                  href="https://www.instagram.com/theinkpress.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <InstagramIcon size={18} className="ig-icon" />
                  <span>@theinkpress.in (Publishing)</span>
                  <ExternalLink size={14} className="ext-icon" />
                </a>
                <a
                  href="https://www.instagram.com/thekrishna_org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <InstagramIcon size={18} className="ig-icon" />
                  <span>@thekrishna_org (Digital Brand)</span>
                  <ExternalLink size={14} className="ext-icon" />
                </a>
                <a
                  href="https://vatsinaturalfoods.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <ExternalLink size={18} className="web-icon" />
                  <span>vatsinaturalfoods.com (D2C Store)</span>
                  <ExternalLink size={14} className="ext-icon" />
                </a>
                <a
                  href="https://conscienceworks.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <ExternalLink size={18} className="web-icon" />
                  <span>Conscience Works (Shopify)</span>
                  <ExternalLink size={14} className="ext-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="form-card-title">Send a Message</h3>
            
            {submitted ? (
              <div className="success-msg">
                <CheckCircle size={40} className="success-icon" />
                <h4>Thank You!</h4>
                <p>Your message has been sent successfully. Dheeraj will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Full-Stack / GenAI Platform Engineering"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, architectural needs, or collaboration ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input textarea-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.25);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          padding: 1.75rem;
        }

        .info-card-title, .form-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          text-decoration: none;
          color: var(--text-main);
          margin-bottom: 0.85rem;
          transition: all 0.25s ease;
        }

        .info-item:hover {
          border-color: var(--primary-cyan);
          background: rgba(6, 182, 212, 0.05);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(6, 182, 212, 0.12);
          color: var(--primary-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .text-cyan {
          color: var(--primary-cyan);
        }

        .social-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #D1D5DB;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.25s ease;
        }

        .social-link-item:hover {
          border-color: var(--primary-violet);
          color: #FFF;
          background: rgba(139, 92, 246, 0.08);
        }

        .ig-icon {
          color: #EC4899;
          margin-right: 0.5rem;
        }

        .web-icon {
          color: var(--primary-cyan);
          margin-right: 0.5rem;
        }

        .ext-icon {
          color: var(--text-muted);
        }

        .contact-form-card {
          padding: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #D1D5DB;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(11, 15, 23, 0.8);
          border: 1px solid var(--border-light);
          border-radius: 0.5rem;
          color: var(--text-main);
          font-size: 0.92rem;
          outline: none;
          transition: all 0.25s ease;
          font-family: var(--font-body);
        }

        .form-input:focus {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
        }

        .textarea-input {
          resize: vertical;
        }

        .w-full {
          width: 100%;
          justify-content: center;
        }

        .success-msg {
          padding: 3rem 1rem;
          text-align: center;
        }

        .success-icon {
          color: #10B981;
          margin-bottom: 1rem;
        }

        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
