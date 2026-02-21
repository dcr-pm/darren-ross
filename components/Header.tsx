import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './IconComponents';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const base = 'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200';
    return isActive
      ? `${base} bg-brand-500/15 text-brand-400`
      : `${base} text-surface-300 hover:text-surface-100 hover:bg-surface-800`;
  };

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const base = 'block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200';
    return isActive
      ? `${base} bg-brand-500/15 text-brand-400`
      : `${base} text-surface-300 hover:text-surface-100 hover:bg-surface-800`;
  };

  const navItems = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="glass sticky top-0 z-50 border-b border-surface-700/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/about" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg group-hover:bg-brand-400 transition-colors">
              D
            </div>
            <span className="text-lg font-bold text-surface-100">Darren Ross</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClasses}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-surface-400 hover:text-surface-100 hover:bg-surface-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden animate-fade-in-down border-t border-surface-700/50">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavLinkClasses}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
