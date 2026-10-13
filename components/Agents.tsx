import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_URL, CONTACT_LABEL } from './contact';

const Arrow: React.FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 12h14m-5-5l5 5-5 5" /></svg>
);

const principles = [
  {
    t: 'A person approves what matters',
    d: 'Agents draft, prepare and suggest. Anything that sends, publishes, spends or changes a record waits for a human to say yes.',
  },
  {
    t: 'No black boxes',
    d: 'Every agent comes with plain-language docs: what it reads, what it can do, and where it stops. You can see each step it took.',
  },
  {
    t: 'Built to help people, not replace them',
    d: 'The goal is to hand back the hours lost to copy-paste, status updates and paperwork, so the team can spend them on judgment and relationships.',
  },
  {
    t: 'Least access by default',
    d: 'Each agent connects only to the tools and data its job needs. Nothing more, and nothing it can touch without a reason.',
  },
];

const stack = [
  { name: 'Claude Code', d: 'The working environment where agents are built, tested and run against real files and systems.' },
  { name: 'MCP', d: 'Model Context Protocol connections that let an agent read from and act in tools like Jira, Confluence, Gmail and calendars.' },
  { name: 'Custom skills', d: 'Packaged instructions that teach an agent how your team does a specific job, in your voice and your format.' },
  { name: 'ElevenLabs', d: 'Voice agents for calls, intake and spoken check-ins, with the same approval rules as everything else.' },
];

const examples = [
  'Sprint and capacity plans built from the backlog and team availability',
  'Jira tickets triaged, summarized and updated, with comments drafted for review',
  'Status reports and stakeholder updates assembled from the week\'s activity',
  'Inbox and intake requests sorted, with suggested replies ready to approve',
  'Meeting notes turned into action items and assigned follow-ups',
  'Voice agents that answer common questions and book next steps',
];

const Agents: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <header className="pb-14 border-b border-ink">
        <p className="eyebrow text-muted mb-6">AI agentic development</p>
        <h1 className="display text-[3.25rem] sm:text-7xl lg:text-[6.5rem] max-w-5xl">
          AI does the work. <em className="italic text-accent">You</em> make the call.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-2 leading-relaxed">
          I build AI agents that take repetitive work off a team's plate. They plug into the tools you already use, follow the way your team works,
          and stop for a person at every step that matters.
        </p>
      </header>

      {/* Principles */}
      <section className="mt-16 md:mt-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="eyebrow text-accent">01</span>
          <span className="eyebrow text-muted">How I build agents</span>
          <span className="flex-1 h-px bg-rule" />
        </div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {principles.map((p) => (
            <div key={p.t} className="border-t border-ink pt-6">
              <h2 className="font-serif text-3xl leading-tight mb-3">{p.t}</h2>
              <p className="text-ink-2 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approval loop diagram */}
      <section className="mt-20 md:mt-28 -mx-4 sm:-mx-6 lg:-mx-8 bg-ink text-paper px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="eyebrow text-accent-soft mb-6">02 &middot; The approval loop</p>
        <h2 className="display text-4xl md:text-6xl max-w-3xl">Every agent follows the same simple loop.</h2>
        <ol className="mt-12 grid md:grid-cols-4 gap-px bg-paper/15 border border-paper/15">
          {[
            { t: 'Trigger', d: 'A new ticket, email, form or scheduled time kicks things off.' },
            { t: 'Agent works', d: 'It gathers context, does the repetitive steps and prepares a result.' },
            { t: 'Human approves', d: 'You review, edit or reject. Nothing important happens without you.', hl: true },
            { t: 'Action', d: 'Only then is the update posted, the message sent or the record changed.' },
          ].map((s, i) => (
            <li key={s.t} className={`p-6 md:p-8 ${s.hl ? 'bg-accent text-paper' : 'bg-ink'}`}>
              <span className={`font-mono text-sm ${s.hl ? 'text-paper' : 'text-accent-soft'}`}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-2xl mt-6 mb-2">{s.t}</h3>
              <p className={`leading-relaxed text-sm ${s.hl ? 'text-paper/90' : 'text-paper/70'}`}>{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Stack */}
      <section className="mt-20 md:mt-28">
        <div className="flex items-center gap-4 mb-10">
          <span className="eyebrow text-accent">03</span>
          <span className="eyebrow text-muted">What I build with</span>
          <span className="flex-1 h-px bg-rule" />
        </div>
        <dl className="border-t border-rule">
          {stack.map((s) => (
            <div key={s.name} className="row-hover grid md:grid-cols-12 gap-2 md:gap-8 py-7 px-2 md:px-4 border-b border-rule">
              <dt className="md:col-span-4 font-serif text-3xl">{s.name}</dt>
              <dd className="md:col-span-8 text-ink-2 leading-relaxed md:pt-2">{s.d}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Examples */}
      <section className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow text-accent">04</span>
            <span className="eyebrow text-muted">Examples</span>
          </div>
          <h2 className="display text-4xl md:text-5xl">Work an agent can take on.</h2>
        </div>
        <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-rule border border-rule">
          {examples.map((e) => (
            <li key={e} className="bg-paper p-6 leading-relaxed text-ink-2">{e}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-20 md:mt-28 border-t border-ink pt-12 grid md:grid-cols-12 gap-8 items-end">
        <h2 className="md:col-span-7 display text-5xl md:text-6xl">
          Have a task that eats your <em className="italic text-accent">week?</em>
        </h2>
        <div className="md:col-span-5">
          <p className="text-ink-2 mb-6">
            Tell me about it. I'll tell you honestly whether an agent is a good fit, and what a first version would look like.
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
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold link-underline">
              See services <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;
