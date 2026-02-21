import React from 'react';
import { Link } from 'react-router-dom';
import Podcast from './Podcast';
import { ArrowRightIcon, ExternalLinkIcon } from './IconComponents';

const About: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div className="relative animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full blur-md opacity-50" />
                <img
                  className="relative rounded-full w-52 h-52 md:w-64 md:h-64 object-cover ring-4 ring-surface-800"
                  src="https://picsum.photos/256/256"
                  alt="Portrait of Darren Ross"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Tech Innovator &amp; Builder
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Hi, I'm <span className="gradient-text">Darren Ross</span>
              </h1>
              <p className="max-w-2xl text-lg text-surface-300 leading-relaxed mb-8">
                I explore the space where technology, creativity, and strategy meet.
                Driven by curiosity, I build, write, and experiment across platforms and ideas.
                From Salesforce Marketing Cloud to AI-powered products — this site is a window
                into the work, thoughts, and projects along the way.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#podcast"
                  className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-500 transition-all duration-200 shadow-lg shadow-brand-600/25"
                >
                  <span>The Prompted Podcast</span>
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-surface-800 text-surface-200 font-semibold py-3 px-6 rounded-xl hover:bg-surface-700 transition-all duration-200 border border-surface-700"
                >
                  <span>View Projects</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="animate-fade-in-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'SFMC Expertise', value: '10+ yrs' },
            { label: 'Products Built', value: '4+' },
            { label: 'AI Projects', value: 'Active' },
            { label: 'Podcast', value: 'Live' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-900 border border-surface-800 rounded-xl p-5 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-surface-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Project</h2>
          <Link to="/products" className="text-brand-400 text-sm font-semibold hover:text-brand-300 transition-colors flex items-center gap-1">
            All projects <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <a
          href="https://mcquizzer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-surface-900 border border-surface-800 p-6 md:p-8 rounded-2xl card-hover"
          aria-label="Visit MarketingCloud Quizzer"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-brand-600/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-brand-400">MC</span>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2 justify-center sm:justify-start">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  MarketingCloud Quizzer
                </h3>
                <span className="bg-brand-500/20 text-brand-400 text-xs font-bold px-2.5 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-surface-400 leading-relaxed">
                A quiz app to test your Salesforce Marketing Cloud knowledge. Choose from multiple categories and earn a certificate based on your performance.
              </p>
            </div>
            <ExternalLinkIcon className="h-6 w-6 text-surface-500 group-hover:text-brand-400 transition-colors flex-shrink-0 hidden sm:block" />
          </div>
        </a>
      </section>

      {/* Podcast Section */}
      <section>
        <Podcast />
      </section>
    </div>
  );
};

export default About;
