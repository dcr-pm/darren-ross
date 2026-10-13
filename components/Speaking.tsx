import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_URL, CONTACT_LABEL } from './contact';

const Arrow: React.FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 12h14m-5-5l5 5-5 5" /></svg>
);

const SectionLabel: React.FC<{ n: string; label: string }> = ({ n, label }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="eyebrow text-accent">{n}</span>
    <span className="eyebrow text-muted">{label}</span>
    <span className="flex-1 h-px bg-rule" />
  </div>
);

const audiences = [
  { t: 'Schools & young learners', d: 'Age-appropriate sessions that explain what AI is, how agents make decisions, and how to use them safely and curiously.' },
  { t: 'Colleges & universities', d: 'Lectures and workshops for students and faculty on agentic AI, careers in tech, and building real projects.' },
  { t: 'Small businesses', d: 'Practical sessions on where agents can save hours this month, what they cost, and how to start small.' },
  { t: 'Public sector & nonprofits', d: 'Responsible AI adoption with people in charge: privacy, approval steps and clear accountability.' },
  { t: 'Companies & delivery teams', d: 'Training for PMs, engineers and leaders on putting agents to work in Jira, Confluence and everyday workflows.' },
  { t: 'Events & community groups', d: 'Keynotes and panels that make agentic AI understandable and useful for a general audience.' },
];

const formats = [
  { t: 'Keynote talk', d: 'An engaging talk on agentic AI and what it means for your audience, with time for questions.' },
  { t: 'Hands-on workshop', d: 'People leave having used, or built, a working AI agent. No coding background needed.' },
  { t: 'Training series', d: 'A set of sessions that takes a team from the basics to running agents in their own work.' },
  { t: 'Online sessions', d: 'Live virtual talks and workshops for remote teams, classrooms and audiences anywhere.' },
];

const topics = [
  'What AI agents are, and how they differ from chatbots',
  'Using AI safely: keeping a human in the loop',
  'Building your first agent, from no-code to Claude Code',
  'AI literacy for students, parents and teachers',
  'Using AI as a project or product manager',
  'Voice agents and the future of everyday work',
];

const Speaking: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <header className="pb-14 border-b border-ink">
        <p className="eyebrow text-muted mb-6">Speaking &amp; training</p>
        <h1 className="display text-[3.25rem] sm:text-7xl lg:text-[6.5rem] max-w-5xl">
          Agentic AI, explained for <em className="italic text-accent">everyone.</em>
        </h1>
        <div className="mt-8 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-8 text-lg text-ink-2 leading-relaxed max-w-2xl">
            I give talks, workshops and hands-on training on AI agents for schools, small businesses, public organizations, companies and community groups.
            Every session is pitched at the right level for the room, from young students to leadership teams.
          </p>
          <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
            <span className="eyebrow border border-ink px-3 py-1.5">In person</span>
            <span className="eyebrow border border-ink px-3 py-1.5">Online</span>
            <span className="eyebrow border border-ink px-3 py-1.5">All ages</span>
          </div>
        </div>
      </header>

      {/* Audiences */}
      <section className="mt-16 md:mt-24">
        <SectionLabel n="01" label="Who it's for" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {audiences.map((a) => (
            <div key={a.t} className="border-t border-ink pt-6">
              <h2 className="font-serif text-2xl leading-snug mb-3">{a.t}</h2>
              <p className="text-ink-2 leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="mt-20 md:mt-28 -mx-4 sm:-mx-6 lg:-mx-8 bg-ink text-paper px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="eyebrow text-accent-soft mb-6">02 &middot; Formats</p>
        <h2 className="display text-4xl md:text-6xl max-w-3xl">From a single talk to a full training program.</h2>
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15 border border-paper/15">
          {formats.map((f, i) => (
            <li key={f.t} className="bg-ink p-6 md:p-8">
              <span className="font-mono text-sm text-accent-soft">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-2xl mt-6 mb-2">{f.t}</h3>
              <p className="text-paper/70 leading-relaxed text-sm">{f.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Topics */}
      <section className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow text-accent">03</span>
            <span className="eyebrow text-muted">Popular topics</span>
          </div>
          <h2 className="display text-4xl md:text-5xl">Tailored to your audience.</h2>
          <p className="mt-4 text-ink-2 leading-relaxed">Pick a topic below, or tell me what your group needs and I'll build the session around it.</p>
        </div>
        <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-rule border border-rule">
          {topics.map((t) => (
            <li key={t} className="bg-paper p-6 leading-relaxed text-ink-2">{t}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-20 md:mt-28 border-t border-ink pt-12 grid md:grid-cols-12 gap-8 items-end">
        <h2 className="md:col-span-7 display text-5xl md:text-6xl">
          Planning an event or <em className="italic text-accent">training day?</em>
        </h2>
        <div className="md:col-span-5">
          <p className="text-ink-2 mb-6">
            Tell me about your audience, the date and whether it's in person or online. I'll come back with a session outline that fits.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper font-semibold py-3.5 px-7 rounded-full hover:bg-accent transition-colors"
            >
              {CONTACT_LABEL} <Arrow />
            </a>
            <Link to="/agents" className="inline-flex items-center gap-2 font-semibold link-underline">
              How I build AI agents <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;
