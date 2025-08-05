
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PersonIcon } from './IconComponents';

const Header: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300';
    return isActive
      ? `${baseClasses} bg-brand-primary text-white`
      : `${baseClasses} text-text-secondary hover:bg-base-300 hover:text-text-primary`;
  };

  return (
    <header className="bg-base-200/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/about" className="flex-shrink-0 flex items-center gap-2 text-white text-xl font-bold">
              <PersonIcon className="h-8 w-8 text-brand-secondary" />
              <span>Darren</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/about" className={navLinkClasses}>
                About Me
              </NavLink>
              <NavLink to="/services" className={navLinkClasses}>
                Services
              </NavLink>
              <NavLink to="/products" className={navLinkClasses}>
                Products
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
             {/* Mobile menu button could go here */}
          </div>
        </div>
      </nav>
       {/* Mobile menu, not shown by default but can be expanded */}
       <div className="md:hidden border-t border-base-300">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-around">
          <NavLink to="/about" className={navLinkClasses}>
            About Me
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/products" className={navLinkClasses}>
            Products
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
