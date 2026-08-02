import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-logo">DS</span>
            <span className="footer-brand-text">
              Dheeraj<span className="brand-accent">Sankhla</span>
            </span>
          </div>
          <p className="footer-tagline">
            Building the next generation of Generative AI, Full-Stack SaaS Platforms, E-Commerce Stores & Performance Marketing Funnels.
          </p>
        </div>

        <div className="footer-center">
          <div className="footer-links-title">Quick Links</div>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {new Date().getFullYear()} Dheeraj Sankhla. All rights reserved.</p>
          <div className="bottom-links">
            <a href="https://www.instagram.com/theinkpress.in" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={14} /> @theinkpress.in
            </a>
            <a href="https://www.instagram.com/thekrishna_org/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={14} /> @thekrishna_org
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--border-light);
          background: rgba(11, 15, 23, 0.95);
          padding-top: 4rem;
        }

        .footer-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 3rem;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .footer-left {
          max-width: 400px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .footer-logo {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--gradient-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #FFF;
          font-family: var(--font-heading);
        }

        .footer-brand-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
        }

        .footer-tagline {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer-links-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .footer-nav {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-nav a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-nav a:hover {
          color: var(--primary-cyan);
        }

        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .scroll-top-btn:hover {
          background: var(--primary-cyan);
          color: #000;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.25rem 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .bottom-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .bottom-links {
          display: flex;
          gap: 1.25rem;
        }

        .bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: color 0.2s ease;
        }

        .bottom-links a:hover {
          color: var(--primary-cyan);
        }
      `}</style>
    </footer>
  );
};
