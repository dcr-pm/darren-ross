
import React from 'react';
import { ExternalLinkIcon } from './IconComponents';

// --- EDIT THIS SECTION TO ADD/UPDATE YOUR PRODUCTS ---
// To add an icon, provide a URL to an image. You can use an image hosting service
// or a placeholder service like https://placehold.co/.
const productsData = [
  {
    iconUrl: 'https://placehold.co/128x128/0D9488/F1F5F9?text=P1',
    name: 'MarketingCloud Quizzer',
    description: 'The MarketingCloud Quizzer is an engaging quiz game for SFMC professionals, architected as a lightning-fast, self-contained React single-page application (SPA) with a built-in question bank for zero-latency, offline-capable fun.',
    link: '#',
  },
  {
    iconUrl: 'https://placehold.co/128x128/14B8A6/0F172A?text=P2',
    name: 'ConnectSphere',
    description: 'A social networking platform focused on professional growth, featuring a unique mentorship matching algorithm.',
    link: '#',
  },
  {
    iconUrl: 'https://placehold.co/128x128/334155/F1F5F9?text=P3',
    name: 'E-Shop Pro',
    description: 'A complete e-commerce solution with a custom CMS, payment gateway integration, and advanced inventory management.',
    link: '#',
  },
];
// ----------------------------------------------------

interface ProductCardProps {
  iconUrl: string;
  name: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ iconUrl, name, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-base-200 p-6 rounded-lg shadow-lg hover:shadow-brand-secondary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start gap-4"
    aria-label={`Visit ${name}`}
  >
    <div className="relative">
        <img src={iconUrl} alt={`${name} icon`} className="w-20 h-20 rounded-md object-cover bg-base-300" />
        <div className="absolute top-1 right-1 bg-base-100/70 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLinkIcon className="h-4 w-4 text-text-primary" />
        </div>
    </div>
    <div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  </a>
);

const Products: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Products I've Built</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
          Here are some of the projects I'm proud to have worked on. Click a card to learn more.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
