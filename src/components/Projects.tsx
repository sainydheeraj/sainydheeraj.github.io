import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Search, ExternalLink, Sparkles, Cpu, Layers, ShoppingBag, TrendingUp, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'ai', label: 'AI & Generative Labs', icon: Cpu },
    { id: 'saas', label: 'SaaS & Publishing', icon: Sparkles },
    { id: 'ecommerce', label: 'E-Commerce & Brands', icon: ShoppingBag },
    { id: 'marketing', label: 'Growth & Meta Ads', icon: TrendingUp },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Portfolio Showcase</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Ventures</span>
          </h2>
          <p className="section-subtitle">
            Explore a curated collection of Generative AI tools, SaaS engines, production cloud platforms, e-commerce storefronts, and performance marketing wins.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="filter-controls">
          <div className="category-tabs">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, AI, AWS, React, Meta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card project-card ${project.featured ? 'featured-card' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image & Badge */}
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} className="card-img" />
                <span className="category-chip">{project.categoryLabel}</span>
                {project.featured && (
                  <span className="featured-chip">
                    <Sparkles size={12} /> Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="card-role">{project.role}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-tagline">{project.tagline}</p>
                <p className="card-description">{project.description}</p>

                {/* Tech Chips */}
                <div className="tech-chips-wrapper">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag more-tag">+{project.techStack.length - 4} more</span>
                  )}
                </div>

                {/* Card Footer Link */}
                <div className="card-footer">
                  <span className="details-link">
                    <span>View Case Study & Tech</span>
                    <ArrowUpRight size={16} />
                  </span>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-icon-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="Open Live Website"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.links.instagram && (
                    <a
                      href={project.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-icon-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="View Instagram Handle"
                    >
                      <InstagramIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results glass-card">
            <p>No projects match your search criteria. Try selecting another category tab!</p>
          </div>
        )}
      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        .projects-section {
          padding: 6rem 0;
        }

        .filter-controls {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
          align-items: center;
        }

        .category-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
        }

        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          color: #FFF;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(6, 182, 212, 0.3);
        }

        .tab-btn.active {
          background: var(--gradient-glow);
          color: #FFF;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
        }

        .search-box {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          background: rgba(17, 24, 39, 0.7);
          border: 1px solid var(--border-light);
          border-radius: 9999px;
          color: var(--text-main);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .search-input:focus {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          cursor: pointer;
          position: relative;
        }

        .featured-card {
          border-color: rgba(6, 182, 212, 0.35);
        }

        .card-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .card-img {
          transform: scale(1.06);
        }

        .category-chip {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.25rem 0.75rem;
          background: rgba(11, 15, 23, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-light);
          color: var(--primary-cyan);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        .featured-chip {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.75rem;
          background: rgba(245, 158, 11, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #FBBF24;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-role {
          font-size: 0.8rem;
          color: var(--primary-violet);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .card-tagline {
          font-size: 0.9rem;
          color: #E5E7EB;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .card-description {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-chips-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .tech-tag {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          color: #9CA3AF;
        }

        .more-tag {
          color: var(--primary-cyan);
          border-color: rgba(6, 182, 212, 0.2);
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .details-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--primary-cyan);
          transition: gap 0.2s ease;
        }

        .project-card:hover .details-link {
          gap: 0.55rem;
        }

        .external-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          transition: all 0.2s ease;
        }

        .external-icon-btn:hover {
          background: var(--primary-cyan);
          color: #000;
        }

        .no-results {
          padding: 3rem;
          text-align: center;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
