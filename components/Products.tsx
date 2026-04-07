
import React from 'react';
import { ExternalLinkIcon } from './IconComponents';

const productsData = [
  {
    gradient: 'from-brand-primary to-brand-accent',
    initials: 'MCQ',
    name: 'MarketingCloud Quizzer',
    description: 'An interactive quiz app to test your Salesforce Marketing Cloud knowledge across various categories. Track your progress and earn a certificate based on your performance.',
    link: 'https://mcquizzer.netlify.app/',
    tags: ['React', 'SFMC', 'Education'],
    status: 'Live',
  },
];

interface ProductCardProps {
  gradient: string;
  initials: string;
  name: string;
  description: string;
  link: string;
  tags: string[];
  status: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ gradient, initials, name, description, link, tags, status }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group card-glow bg-base-200 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    aria-label={`Visit ${name}`}
  >
    <div className="flex items-start justify-between mb-5">
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
        {initials}
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-brand-accent/15 text-brand-accent text-xs font-bold px-2.5 py-1 rounded-full border border-brand-accent/25">{status}</span>
        <ExternalLinkIcon className="h-5 w-5 text-text-muted group-hover:text-brand-accent transition-colors duration-300" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
    <p className="text-text-secondary leading-relaxed text-sm mb-5 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-xs font-medium text-text-muted bg-base-300/80 px-3 py-1 rounded-full">{tag}</span>
      ))}
    </div>
  </a>
);

const Products: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-14">
        <p className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-3">Built by Me</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Products</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
          Digital products I've designed, built, and shipped — from concept to production.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* More Coming Soon */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-3 bg-base-200/50 border border-base-400/30 rounded-xl px-6 py-4">
          <div className="w-3 h-3 bg-brand-accent/60 rounded-full animate-pulse"></div>
          <p className="text-text-secondary text-sm font-medium">More products in development — stay tuned.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
