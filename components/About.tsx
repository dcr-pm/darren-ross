import React from 'react';
import { Link } from 'react-router-dom';
import Podcast from './Podcast';
import { ExternalLinkIcon } from './IconComponents';
import { CONTACT_URL, CONTACT_LABEL } from './contact';

const Arrow: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 12h14m-5-5l5 5-5 5" /></svg>
);

const SectionLabel: React.FC<{ n: string; label: string }> = ({ n, label }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="eyebrow text-accent">{n}</span>
    <span className="eyebrow text-muted">{label}</span>
    <span className="flex-1 h-px bg-rule" />
  </div>
);

const About: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end animate-fade-in-up">
        <div className="lg:col-span-7">
          <p className="eyebrow text-muted mb-6">Technical Project &amp; Product Manager &middot; AI Agent Builder &middot; Speaker</p>
          <h1 className="display text-[3.25rem] sm:text-7xl lg:text-[6.5rem]">
            I help teams ship <em className="italic text-accent">better</em> products.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-2 leading-relaxed">
            I bridge business vision and technical execution, owning both the delivery and the product strategy, from roadmap to release. I bring deep experience in CRM and marketing automation for enterprise clients.
            These days that includes building AI agents that take on real work while people stay in charge of the decisions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/services" className="inline-flex items-center gap-2 bg-ink text-paper font-semibold py-3.5 px-7 rounded-full hover:bg-accent transition-colors">
              View services <Arrow />
            </Link>
            <Link to="/agents" className="inline-flex items-center gap-2 font-semibold text-ink link-underline">
              How I build AI agents <Arrow />
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-5 min-w-0">
          <img
            className="block w-full h-auto max-w-sm lg:max-w-none mx-auto aspect-[4/5] object-cover grayscale"
            src="/images/darren-ross.webp"
            alt="Portrait of Darren Ross"
            width={640}
            height={843}
          />
          <figcaption className="mt-3 flex justify-between eyebrow text-muted max-w-sm lg:max-w-none mx-auto">
            <span>Darren Ross</span>
            <span>Technical PM &amp; AI Builder</span>
          </figcaption>
        </figure>
      </section>

      {/* Proof bar */}
      <section className="mt-20 md:mt-28 border-y border-rule animate-fade-in">
        <dl className="grid grid-cols-2 md:grid-cols-5">
          {[
            { value: '10+', label: 'Years in tech' },
            { value: 'CRM', label: 'Marketing automation' },
            { value: 'TPM', label: 'Technical project mgmt' },
            { value: 'AI', label: 'Agent builder' },
            { value: '50+', label: 'Teams coached' },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col-reverse justify-end py-7 px-4 md:px-6 border-rule ${i % 2 === 0 && i < 4 ? 'border-r' : ''} ${i < 4 ? 'md:border-r' : 'col-span-2 md:col-span-1'} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}>
              <dt className="eyebrow text-muted mt-2">{stat.label}</dt>
              <dd className="display text-4xl md:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What I bring */}
      <section className="mt-20 md:mt-28">
        <SectionLabel n="01" label="What I bring" />
        <div className="grid sm:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-12">
          {[
            {
              title: 'Technical project management',
              desc: 'I drive complex technical programs from kickoff to launch, managing scope, timelines, risks and dependencies across engineering, QA and stakeholder teams.',
            },
            {
              title: 'CRM & marketing automation',
              desc: 'I run CRM and marketing automation programs for enterprise clients across the marketing technology stack, including Salesforce, Braze, Adobe and Google Analytics.',
            },
            {
              title: 'Cross-functional leadership',
              desc: 'I lead engineers, designers and business stakeholders. I turn business goals into sprints people can act on, remove blockers and keep delivery on track.',
            },
            {
              title: 'AI agents & automation',
              desc: 'I build AI agents with Claude, MCP and custom skills, plus ElevenLabs voice agents. Each one does real work and checks with a person before anything important happens.',
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-ink pt-6">
              <h3 className="font-serif text-2xl leading-snug mb-3">{item.title}</h3>
              <p className="text-ink-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI agents feature */}
      <section className="mt-20 md:mt-28 -mx-4 sm:-mx-6 lg:-mx-8 bg-ink text-paper px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-soft mb-6">02 &middot; AI agentic development</p>
            <h2 className="display text-5xl md:text-6xl">
              AI does the work. <em className="italic text-accent-soft">You</em> make the call.
            </h2>
            <p className="mt-6 text-paper/75 text-lg leading-relaxed max-w-md">
              I design agents that handle the repetitive parts of a job, connect to the tools a team already uses, and stop for a human at every step that matters.
            </p>
            <Link to="/agents" className="mt-8 inline-flex items-center gap-2 bg-paper text-ink font-semibold py-3.5 px-7 rounded-full hover:bg-accent-soft transition-colors">
              See how it works <Arrow />
            </Link>
          </div>
          <ol className="lg:col-span-7 lg:pl-10 space-y-0">
            {[
              { t: 'Map the work', d: 'We pick one repetitive task and write down exactly how it gets done today, including where judgment is needed.' },
              { t: 'Build the agent', d: 'Claude Code, MCP connections and custom skills give the agent access to the right tools and nothing more.' },
              { t: 'Keep a human in the loop', d: 'The agent drafts, prepares and proposes. A person reviews and approves before anything is sent or changed.' },
              { t: 'Hand it over', d: 'You get a working agent, clear documentation and a team that knows how to run it.' },
            ].map((s, i) => (
              <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-t border-paper/15 first:border-t-0 lg:first:border-t">
                <span className="font-mono text-sm text-accent-soft pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-2xl mb-1">{s.t}</h3>
                  <p className="text-paper/70 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Speaking & training */}
      <section className="mt-20 md:mt-28">
        <SectionLabel n="03" label="Speaking & training" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6">
            <h2 className="display text-5xl md:text-6xl">
              Agentic AI, explained for <em className="italic text-accent">everyone.</em>
            </h2>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-lg">
              I give talks, workshops and hands-on training on AI agents, in person or online. Every session is built for its audience, from a classroom of young students to a leadership team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/speaking" className="inline-flex items-center gap-2 bg-ink text-paper font-semibold py-3.5 px-7 rounded-full hover:bg-accent transition-colors">
                Book a talk or workshop <Arrow />
              </Link>
            </div>
          </div>
          <ul className="lg:col-span-6 grid grid-cols-2 gap-px bg-rule border border-rule self-start">
            {['Schools & young learners', 'Colleges & universities', 'Small businesses', 'Public sector & nonprofits', 'Companies & teams', 'Events & community groups'].map((a) => (
              <li key={a} className="bg-paper p-5 font-serif text-lg md:text-xl leading-snug">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured project */}
      <section className="mt-20 md:mt-28">
        <SectionLabel n="04" label="Featured build" />
        <a
          href="https://www.sfquizzer.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group row-hover grid md:grid-cols-12 gap-6 items-center border-y border-rule py-8 px-2 md:px-4"
          aria-label="Visit SalesForce Prep Pro"
        >
          <div className="md:col-span-4">
            <span className="eyebrow text-accent">Live</span>
            <h3 className="display text-4xl mt-2">SalesForce Prep Pro</h3>
          </div>
          <p className="md:col-span-6 text-ink-2 leading-relaxed">
            An interactive study platform for Salesforce Marketing Cloud certifications. Quiz yourself across tracks and earn a certificate based on your performance.
          </p>
          <div className="md:col-span-2 flex md:justify-end">
            <ExternalLinkIcon className="h-6 w-6 text-muted group-hover:text-accent transition-colors" />
          </div>
        </a>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold link-underline">
          All projects <Arrow />
        </Link>
      </section>

      {/* Podcast */}
      <div className="mt-20 md:mt-28">
        <Podcast />
      </div>

      {/* Contact */}
      <section id="contact" className="mt-20 md:mt-28 scroll-mt-24 border-t border-ink pt-12">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-8 display text-5xl md:text-6xl">
            Ready to build something <em className="italic text-accent">great?</em>
          </h2>
          <div className="md:col-span-4">
            <p className="text-ink-2 mb-6">
              Whether you need a speaker, product leadership, CRM and marketing automation expertise or an AI agent, let's talk.
            </p>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper font-semibold py-3.5 px-7 rounded-full hover:bg-accent transition-colors"
            >
              {CONTACT_LABEL} <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
