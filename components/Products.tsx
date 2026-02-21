import React from 'react';
import { ExternalLinkIcon } from './IconComponents';

const productsData = [
  {
    abbr: 'MC',
    name: 'MarketingCloud Quizzer',
    description: 'An interactive quiz app to test your Marketing Cloud knowledge across various categories and earn a certificate.',
    link: 'https://mcquizzer.netlify.app/',
    tags: ['React', 'SFMC', 'Quiz'],
    color: 'from-brand-600 to-brand-400',
  },
  {
    abbr: 'PA',
    name: 'Project Alpha',
    description: 'A data visualization tool built with D3.js and React, offering interactive charts and real-time updates.',
    link: '#',
    tags: ['D3.js', 'React', 'Data'],
    color: 'from-blue-600 to-blue-400',
  },
  {
    abbr: 'CS',
    name: 'ConnectSphere',
    description: 'A social networking platform focused on professional growth, featuring a unique mentorship matching algorithm.',
    link: '#',
    tags: ['Social', 'Networking', 'AI'],
    color: 'from-purple-600 to-purple-400',
  },
  {
    abbr: 'ES',
    name: 'E-Shop Pro',
    description: 'A complete e-commerce solution with a custom CMS, payment gateway integration, and advanced inventory management.',
    link: '#',
    tags: ['E-commerce', 'CMS', 'Payments'],
    color: 'from-amber-600 to-amber-400',
  },
];

interface ProductCardProps {
  abbr: string;
  name: string;
  description: string;
  link: string;
  tags: string[];
  color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ abbr, name, description, link, tags, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-surface-900 border border-surface-800 rounded-2xl overflow-hidden card-hover block"
    aria-label={`Visit ${name}`}
  >
    <div className={`h-2 bg-gradient-to-r ${color}`} />
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">{abbr}</span>
        </div>
        <ExternalLinkIcon className="h-5 w-5 text-surface-600 group-hover:text-brand-400 transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
      <p className="text-surface-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-surface-400 bg-surface-800 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Products: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Products I've Built</h1>
        <p className="text-lg text-surface-400 max-w-2xl mx-auto">
          Projects I'm proud to have shipped. Click a card to explore.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {productsData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;