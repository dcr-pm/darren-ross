import React from 'react';
import { ExternalLinkIcon } from './IconComponents';

const productsData = [
  {
    name: 'SalesForce Prep Pro',
    description: 'An interactive quiz and study platform to sharpen your Salesforce Marketing Cloud knowledge. Choose from multiple certification tracks, test yourself across categories, and earn a certificate based on your performance.',
    link: 'https://www.sfquizzer.com/',
    tags: ['React', 'Salesforce', 'Certification Prep'],
    status: 'Live',
  },
  {
    name: 'MarkupBuddy',
    description: 'An AI email builder for marketing and transactional emails. Describe what you want and the AI writes standardized, industry-ready HTML that renders correctly across email service providers. Prefer to do it by hand? Use the drag-and-drop editor, and keep every email on-brand with a built-in brand kit.',
    link: 'https://markupbuddy.com/',
    tags: ['AI', 'HTML Email', 'Drag & Drop', 'Brand Kit'],
    status: 'Live',
  },
  {
    name: "The Dreamer's Log",
    description: 'A creative dream journaling and sketch app that lets you capture, illustrate and reflect on your dreams. Turn fleeting nighttime visions into a visual diary you can revisit and explore.',
    link: 'https://www.thedreamerslog.com/',
    tags: ['Creative', 'Journaling', 'Sketch App'],
    status: 'Live',
  },
];

const Products: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <header className="grid md:grid-cols-12 gap-8 items-end pb-12 border-b border-ink">
        <div className="md:col-span-8">
          <p className="eyebrow text-muted mb-6">Built by me</p>
          <h1 className="display text-6xl md:text-8xl">Projects</h1>
        </div>
        <p className="md:col-span-4 text-lg text-ink-2 leading-relaxed">
          Digital products I've designed, built and shipped from concept to production.
        </p>
      </header>

      <ol>
        {productsData.map((p, i) => (
          <li key={p.name} className="border-b border-rule">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group row-hover grid md:grid-cols-12 gap-4 md:gap-8 py-10 px-2 md:px-4"
              aria-label={`Visit ${p.name}`}
            >
              <span className="md:col-span-1 font-mono text-sm text-accent pt-3">{String(i + 1).padStart(2, '0')}</span>
              <div className="md:col-span-4">
                <span className="eyebrow text-muted">{p.status}</span>
                <h2 className="display text-4xl mt-2">{p.name}</h2>
              </div>
              <div className="md:col-span-6">
                <p className="text-ink-2 leading-relaxed">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="text-xs font-medium border border-rule rounded-full px-3 py-1.5 text-ink-2 bg-paper">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1 flex md:justify-end pt-2">
                <ExternalLinkIcon className="h-6 w-6 text-muted group-hover:text-accent transition-colors" />
              </div>
            </a>
          </li>
        ))}
      </ol>

      <p className="mt-10 flex items-center gap-3 text-sm text-muted">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        More products in development.
      </p>
    </div>
  );
};

export default Products;
