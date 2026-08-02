import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, FileText, Sparkles, Cpu, Layers, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const titles = [
    "Full-Stack Software Architect",
    "Generative AI, MCP & RAG Engineer",
    "E-Commerce & AWS Cloud Developer",
    "Meta Ads & Performance Marketer"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="availability-badge animate-fade-in">
          <span className="pulse-dot"></span>
          <span>{PERSONAL_INFO.availability}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-title animate-fade-in">
          Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>

        {/* Dynamic Animated Subtitle */}
        <div className="dynamic-title-wrapper animate-fade-in">
          <span className="dynamic-title-text">{titles[currentTitleIndex]}</span>
        </div>

        {/* Bio Paragraph */}
        <p className="hero-bio animate-fade-in">
          {PERSONAL_INFO.bio}
        </p>

        {/* Key Expertise Chips */}
        <div className="expertise-chips animate-fade-in">
          <div className="chip"><Cpu size={14} /> Model Context Protocol (MCP)</div>
          <div className="chip"><Layers size={14} /> RAG & Vector Search</div>
          <div className="chip"><Sparkles size={14} /> AI Video Pipelines</div>
          <div className="chip"><Layers size={14} /> AWS & Supabase</div>
          <div className="chip"><TrendingUp size={14} /> Meta Ads Performance</div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta animate-fade-in">
          <a href="#projects" className="btn btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={18} />
          </a>
          <button onClick={onOpenResume} className="btn btn-outline">
            <FileText size={18} />
            <span>Interactive Resume</span>
          </button>
        </div>

        {/* Hero Stats Grid */}
        <div className="hero-stats-grid">
          {PERSONAL_INFO.heroStats.map((stat, i) => (
            <div key={i} className="glass-card stat-card">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 9rem;
          padding-bottom: 5rem;
          position: relative;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.1rem;
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: 9999px;
          color: var(--primary-cyan);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .dynamic-title-wrapper {
          height: 2.2rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dynamic-title-text {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 600;
          color: #E2E8F0;
          letter-spacing: -0.01em;
          border-bottom: 2px solid var(--primary-cyan);
          padding-bottom: 2px;
          transition: opacity 0.5s ease-in-out;
        }

        .hero-bio {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 780px;
        }

        .expertise-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.85rem;
          color: #D1D5DB;
        }

        .hero-cta {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          width: 100%;
        }

        .stat-card {
          padding: 1.5rem 1rem;
          text-align: center;
        }

        .stat-value {
          font-size: 1.85rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 868px) {
          .hero-title { font-size: 2.5rem; }
          .dynamic-title-text { font-size: 1.15rem; }
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
};
