import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACT_URL, LINKEDIN_URL } from './contact';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="eyebrow text-paper/60 mb-4">Let's work together</p>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="display text-4xl md:text-6xl hover:text-accent-soft transition-colors"
            >
              Have something to build? <span className="italic text-accent-soft">Let's talk.</span>
            </a>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-3">
              <p className="eyebrow text-paper/60">Pages</p>
              <NavLink to="/about" className="block text-sm hover:text-accent-soft">About</NavLink>
              <NavLink to="/services" className="block text-sm hover:text-accent-soft">Services</NavLink>
              <NavLink to="/agents" className="block text-sm hover:text-accent-soft">AI Agents</NavLink>
              <NavLink to="/products" className="block text-sm hover:text-accent-soft">Projects</NavLink>
            </div>
            <div className="space-y-3">
              <p className="eyebrow text-paper/60">Elsewhere</p>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-accent-soft" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper/50">
          <span>&copy; {currentYear} Darren Ross</span>
          <span>Technical PM &amp; AI Agent Builder</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
