import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Code2, FolderGit2, Cpu, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', icon: Sparkles },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Skills', href: '#skills', icon: Cpu },
    { label: 'Experience', href: '#experience', icon: Code2 },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-brand">
          <span className="nav-logo-icon">DS</span>
          <span className="nav-brand-text">
            Dheeraj<span className="brand-accent">Sankhla</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button onClick={onOpenResume} className="btn btn-primary btn-sm">
            <FileText size={16} />
            <span>View Resume</span>
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary w-full"
              style={{ marginTop: '1rem' }}
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          padding: 0.85rem 0;
          background: rgba(11, 15, 23, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #FFFFFF;
        }

        .nav-logo-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--gradient-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: #FFF;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }

        .nav-brand-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }

        .brand-accent {
          color: var(--primary-cyan);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.25s ease;
        }

        .nav-link:hover {
          color: var(--primary-cyan);
        }

        .btn-sm {
          padding: 0.55rem 1.25rem;
          font-size: 0.88rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(17, 24, 39, 0.96);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-main);
          text-decoration: none;
          font-size: 1.05rem;
          padding: 0.5rem 0;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
