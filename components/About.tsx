import React from 'react';
import { Link } from 'react-router-dom';
import Podcast from './Podcast';
import { ExternalLinkIcon } from './IconComponents';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="animate-fade-in-up py-4 md:py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-primary/30 to-brand-accent/10 rounded-full blur-xl"></div>
            <img
              className="relative rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-2 border-brand-primary/50 shadow-2xl shadow-brand-primary/20"
              src="https://picsum.photos/256/256"
              alt="Darren Ross"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">Technical Project &amp; Product Manager &bull; Builder &bull; Leader</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              I help teams <span className="gradient-text">ship better products</span>
            </h1>
            <p className="max-w-2xl text-lg text-text-secondary leading-relaxed mb-8">
              Technical Project &amp; Product Manager with strong experience in Salesforce Marketing Cloud, AI-driven solutions, and cross-functional leadership.
              I bridge the gap between business vision and technical execution, owning both the <em className="text-text-primary not-italic font-semibold">delivery</em> and the <em className="text-text-primary not-italic font-semibold">product strategy</em>, from roadmap to release.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3.5 px-8 rounded-xl text-base hover:bg-brand-secondary transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/25 hover:-translate-y-0.5"
              >
                View Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-base-300/80 text-text-primary font-bold py-3.5 px-8 rounded-xl text-base hover:bg-base-400/60 transition-all duration-300 border border-base-400/50 hover:-translate-y-0.5"
              >
                Passion Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="mt-16 md:mt-24 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { value: '10+', label: 'Years in Tech' },
            { value: 'SFMC', label: 'Certified' },
            { value: 'TPM', label: 'Tech Project Mgmt' },
            { value: 'AI', label: 'Product Builder' },
            { value: '50+', label: 'Teams Coached' },
          ].map((stat, i) => (
            <div key={i} className="stat-highlight rounded-xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-brand-accent">{stat.value}</div>
              <div className="text-text-muted text-sm font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section className="mt-20 md:mt-28 animate-fade-in-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What I Bring to the Table</h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">Leadership, technical depth, and a bias for shipping.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Technical Project Management',
              desc: 'I drive complex technical programs from kickoff to launch, managing scope, timelines, risks, and dependencies across engineering, QA, and stakeholder teams.',
            },
            {
              icon: '👥',
              title: 'Cross-Functional Leadership',
              desc: 'I lead teams of engineers, designers, and business stakeholders. I translate business goals into actionable sprints, remove blockers, and keep delivery on track.',
            },
            {
              icon: '🤖',
              title: 'AI & Automation',
              desc: 'I design and build AI-powered tools, voice agents, and workflow automations. From GPT solutions to ElevenLabs integrations, I turn ideas into working products.',
            },
          ].map((item, i) => (
            <div key={i} className="card-glow bg-base-200 rounded-xl p-7 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Product */}
      <section className="mt-20 md:mt-28 animate-fade-in-up">
        <div className="text-center mb-8">
          <p className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-2">Featured Build</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Passion Projects</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <a
            href="https://www.sfquizzer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-glow block bg-base-200 p-6 md:p-8 rounded-xl hover:-translate-y-1 transition-all duration-300"
            aria-label="Visit SalesForce Prep Pro"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                SFP
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                  <h3 className="text-xl font-bold text-white">SalesForce Prep Pro</h3>
                  <span className="bg-brand-accent/20 text-brand-accent text-xs font-bold px-2.5 py-0.5 rounded-full border border-brand-accent/30 badge-glow">LIVE</span>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  An interactive study platform for Salesforce Marketing Cloud certifications. Quiz yourself across tracks and earn a certificate based on your performance.
                </p>
              </div>
              <ExternalLinkIcon className="h-6 w-6 text-text-muted group-hover:text-brand-accent transition-colors duration-300 flex-shrink-0" />
            </div>
          </a>
        </div>
      </section>

      <hr className="my-16 md:my-24 border-base-300/50" />

      {/* Podcast */}
      <Podcast />

      {/* Contact CTA */}
      <section id="contact" className="mt-20 md:mt-28 mb-8 animate-fade-in-up scroll-mt-20">
        <div className="bg-gradient-to-br from-base-200 to-base-300/50 rounded-2xl p-8 md:p-14 text-center border border-base-400/30">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to build something great?</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 text-lg">
            Whether you need product leadership, SFMC knowledge, or an AI prototype, let's talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:darren@darren-ross.com"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3.5 px-8 rounded-xl text-base hover:bg-brand-secondary transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/25 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/darren-ross"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-base-300/80 text-text-primary font-bold py-3.5 px-8 rounded-xl text-base hover:bg-base-400/60 transition-all duration-300 border border-base-400/50 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
