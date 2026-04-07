
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300';
    return isActive
      ? `${baseClasses} bg-brand-primary/20 text-brand-accent border border-brand-primary/30`
      : `${baseClasses} text-text-secondary hover:text-text-primary hover:bg-base-300/50`;
  };

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'block px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200';
    return isActive
      ? `${baseClasses} bg-brand-primary/20 text-brand-accent border border-brand-primary/30`
      : `${baseClasses} text-text-secondary hover:text-text-primary hover:bg-base-300/50`;
  };

  return (
    <header className="bg-base-200/60 backdrop-blur-xl sticky top-0 z-50 border-b border-base-300/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/about" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
              DR
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg">Darren Ross</span>
              <span className="text-text-muted text-xs block -mt-1">Product Leader</span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
            <a
              href="#contact"
              className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/25"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-base-300/50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-base-300/50 bg-base-200/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <NavLink to="/about" className={mobileLinkClasses} onClick={() => setMobileOpen(false)}>About</NavLink>
            <NavLink to="/services" className={mobileLinkClasses} onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/products" className={mobileLinkClasses} onClick={() => setMobileOpen(false)}>Products</NavLink>
            <a
              href="#contact"
              className="block mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-center bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
