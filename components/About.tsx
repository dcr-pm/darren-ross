import React from 'react';
import { Link } from 'react-router-dom';
import Podcast from './Podcast';
import { ExternalLinkIcon } from './IconComponents';

const About: React.FC = () => {
  return (
    <>
      <div className="animate-fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-brand-primary shadow-lg"
              src="https://picsum.photos/256/256"
              alt="Portrait of Your Name"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              Hi, I'm <span className="text-brand-secondary">Darren</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium mb-6">
              Tech Innovator/Enthusiast
            </p>
            <p className="max-w-2xl text-lg text-text-primary leading-relaxed">
              I explore the space where technology, creativity, and strategy meet.
              Driven by curiosity, I build, write, and experiment across platforms and ideas.
              This site is a glimpse into the work, thoughts, and projects along the way.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
               <a
                href="#podcast"
                className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-brand-secondary transition-transform transform hover:scale-105 duration-300"
              >
                🎙️ The Prompted Podcast! – Listen Now
              </a>
               <Link 
                to="/products"
                className="inline-block bg-base-300 text-text-primary font-bold py-3 px-6 rounded-lg text-lg hover:bg-base-200/80 transition-transform transform hover:scale-105 duration-300"
              >
                Check out my projects &rarr;
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      {/* Featured Project Section */}
      <div className="mt-20 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Featured Project</h2>
        <div className="max-w-3xl mx-auto">
          <a
            href="https://mcquizzer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-base-200 p-6 rounded-lg shadow-lg hover:shadow-brand-secondary/20 hover:-translate-y-2 transition-all duration-300"
            aria-label="Visit MarketingCloud Quizzer"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <img src="https://placehold.co/128x128/0D9488/F1F5F9?text=MCQ" alt="MarketingCloud Quizzer icon" className="w-24 h-24 rounded-lg object-cover bg-base-300 flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  MarketingCloud Quizzer
                  <span className="ml-2 bg-brand-secondary text-base-100 text-xs font-bold px-2 py-1 rounded-full align-middle">NEW</span>
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  A quiz app to test your Salesforce Marketing Cloud knowledge. Choose from multiple categories and earn a certificate based on your performance.
                </p>
              </div>
              <ExternalLinkIcon className="h-8 w-8 text-text-secondary group-hover:text-brand-secondary transition-colors duration-300 mt-4 sm:mt-0 flex-shrink-0" />
            </div>
          </a>
        </div>
      </div>
      
      <hr className="my-16 md:my-24 border-base-300" />
      <Podcast />
    </>
  );
};

export default About;
