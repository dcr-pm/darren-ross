import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkedInIcon, GithubIcon, InstagramIcon, YouTubeIcon } from './IconComponents';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="text-lg font-bold text-surface-100">Darren Ross</span>
            </div>
            <p className="text-surface-400 text-sm leading-relaxed max-w-xs">
              Tech innovator, builder, and host of The Prompted Podcast. Exploring where technology, creativity, and strategy meet.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/products', label: 'Products' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-surface-400 hover:text-surface-100 text-sm transition-colors">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#podcast" className="text-surface-400 hover:text-surface-100 text-sm transition-colors">Podcast</a></li>
              <li><a href="https://mcquizzer.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-surface-100 text-sm transition-colors">MC Quizzer</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all">
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all">
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all">
                <YouTubeIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all">
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-500 text-sm">&copy; {currentYear} Darren Ross. All rights reserved.</p>
          <p className="text-surface-600 text-xs">Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
