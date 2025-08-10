
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-12">
      <div className="container mx-auto py-6 px-4 text-center text-text-secondary">
        <p>&copy; {currentYear} Darren. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
