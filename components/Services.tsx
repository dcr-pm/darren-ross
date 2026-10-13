import React from 'react';
import { CONTACT_URL, CONTACT_LABEL } from './contact';

interface Service {
  title: string;
  description: string;
  highlights: string[];
}

const services: Service[] = [
  {
    title: 'AI Product Building & Prototyping',
    description: 'I design and build AI agents that do real work while a person stays in control of what gets approved. Built with Claude using Claude Code, MCP connections to your tools, and custom skills, plus ElevenLabs voice agents for calls and spoken interactions.',
    highlights: ['Human-Approved AI Agents', 'Claude Code, MCP & Custom Skills', 'ElevenLabs Voice Agents'],
  },
  {
    title: 'AI Enablement for Delivery Teams',
    description: 'I help delivery teams put AI to work in the tools they already use. That means AI workflows inside Jira and Confluence, sprint and capacity plans that build themselves, and custom AI skills shaped around how your team actually works.',
    highlights: ['Jira & Confluence AI Workflows', 'Automated Sprint & Capacity Planning', 'Custom AI Skills'],
  },
  {
    title: 'Technical Program & Delivery Management',
    description: 'End-to-end delivery for complex technical programs. I manage timelines, dependencies and cross-team coordination so your engineering org ships on time and on budget.',
    highlights: ['Program Roadmap & Milestone Planning', 'Dependency & Risk Tracking', 'Vendor & Stakeholder Coordination'],
  },
  {
    title: 'Process Improvement & Agile Transformation',
    description: 'I assess your current delivery workflows and put lean, scalable processes in place, whether you\'re adopting Agile for the first time or tuning an existing Scrum or Kanban setup for faster throughput.',
    highlights: ['Agile Maturity Assessment', 'Sprint Velocity & Workflow Optimization', 'JIRA / Confluence Setup & Best Practices', 'AI-Assisted Agile Workflows'],
  },
  {
    title: 'Technical PM Mentorship & Agile Training',
    description: 'Guided coaching for aspiring PMs in the martech space. Covers sprint planning, capacity balancing, cross-functional team management and real-world decision-making.',
    highlights: ['1:1 Coaching Sessions', 'Sprint & Capacity Planning', 'Stakeholder Communication', 'Using AI as a PM'],
  },
  {
    title: 'SFMC Audit & Optimization Report',
    description: 'A deep-dive analysis of your current SFMC setup with clear recommendations to improve performance and reduce friction.',
    highlights: ['Full Platform Health Check', 'Data Architecture Review', 'Actionable Roadmap'],
  },
  {
    title: 'SFMC Certification Training & Exam Prep',
    description: 'Guided prep for Salesforce Marketing Cloud certifications (Email Specialist, Consultant, Developer and more). Includes tailored study plans, mock exams, concept walkthroughs and 1:1 mentoring to help you pass with confidence.',
    highlights: ['Custom Study Plans', 'Mock Exams & Reviews', '1:1 Mentoring Sessions'],
  },
];

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <header className="grid md:grid-cols-12 gap-8 items-end pb-12 border-b border-ink">
        <div className="md:col-span-8">
          <p className="eyebrow text-muted mb-6">What I offer</p>
          <h1 className="display text-6xl md:text-8xl">Services</h1>
        </div>
        <p className="md:col-span-4 text-lg text-ink-2 leading-relaxed">
          From strategy to execution, I help people and teams level up in product management, marketing technology and AI.
        </p>
      </header>

      <ol>
        {services.map((s, i) => (
          <li key={s.title} className="row-hover grid md:grid-cols-12 gap-4 md:gap-8 py-10 px-2 md:px-4 border-b border-rule">
            <span className="md:col-span-1 font-mono text-sm text-accent pt-2">{String(i + 1).padStart(2, '0')}</span>
            <h2 className="md:col-span-4 font-serif text-3xl leading-tight">{s.title}</h2>
            <div className="md:col-span-7">
              <p className="text-ink-2 leading-relaxed">{s.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <li key={h} className="text-xs font-medium border border-rule rounded-full px-3 py-1.5 text-ink-2 bg-paper">{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {/* CTA */}
      <section className="mt-20 grid md:grid-cols-12 gap-8 items-end">
        <h2 className="md:col-span-7 display text-5xl md:text-6xl">
          Not sure which service <em className="italic text-accent">fits?</em>
        </h2>
        <div className="md:col-span-5">
          <p className="text-ink-2 mb-6">
            Send me a short note about where you are and what you're trying to get done. I'll reply with the path I'd recommend, no pressure.
          </p>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-paper font-semibold py-3.5 px-7 rounded-full hover:bg-accent transition-colors"
          >
            {CONTACT_LABEL}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 12h14m-5-5l5 5-5 5" /></svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
