import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACT_URL } from './contact';

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/agents', label: 'AI Agents' },
  { to: '/products', label: 'Projects' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `text-sm font-medium transition-colors ${isActive ? 'text-ink underline decoration-accent decoration-2 underline-offset-[6px]' : 'text-muted hover:text-ink'}`;

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-rule">
      <nav className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/about" className="flex items-baseline gap-3" onClick={() => setMobileOpen(false)}>
            <span className="font-serif text-xl font-medium tracking-tight">Darren Ross</span>
            <span className="hidden lg:inline eyebrow text-muted">Technical PM &amp; AI Builder</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={navLinkClasses}>{l.label}</NavLink>
            ))}
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-ink text-paper px-4 py-2 rounded-full hover:bg-accent transition-colors"
            >
              Let's talk
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-ink"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-rule bg-paper">
          <div className="px-4 py-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `block py-3 border-b border-rule font-serif text-2xl ${isActive ? 'text-accent' : 'text-ink'}`}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block my-4 text-center text-sm font-semibold bg-ink text-paper px-4 py-3 rounded-full"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
