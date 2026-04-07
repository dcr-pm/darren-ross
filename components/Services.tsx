
import React from 'react';
import { MentorshipIcon, AuditIcon, CertificationIcon, AiChipIcon, RoadmapIcon, RiskIcon } from './IconComponents';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, highlights }) => (
  <div className="card-glow bg-base-200 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-brand-primary/15 border border-brand-primary/20 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-text-secondary leading-relaxed text-sm mb-5 flex-grow">{description}</p>
    <ul className="space-y-2">
      {highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
          <svg className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {h}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <MentorshipIcon className="h-7 w-7 text-brand-accent" />,
      title: 'Technical PM Mentorship & Agile Training',
      description: 'Guided coaching for aspiring PMs in the martech space. Covers sprint planning, capacity balancing, cross-functional team management, and real-world decision-making.',
      highlights: ['1:1 Coaching Sessions', 'Sprint & Capacity Planning', 'Stakeholder Communication'],
    },
    {
      icon: <AuditIcon className="h-7 w-7 text-brand-accent" />,
      title: 'SFMC Audit & Optimization Report',
      description: 'A deep-dive analysis of your current SFMC setup with actionable recommendations to improve performance and reduce friction.',
      highlights: ['Full Platform Health Check', 'Data Architecture Review', 'Actionable Roadmap'],
    },
    {
      icon: <CertificationIcon className="h-7 w-7 text-brand-accent" />,
      title: 'SFMC Certification Training & Exam Prep',
      description: 'Guided prep for Salesforce Marketing Cloud certifications (Email Specialist, Consultant, Developer, etc.). Includes tailored study plans, mock exams, concept walkthroughs, and 1:1 mentoring to help you pass with confidence.',
      highlights: ['Custom Study Plans', 'Mock Exams & Reviews', '1:1 Mentoring Sessions'],
    },
    {
      icon: <AiChipIcon className="h-7 w-7 text-brand-accent" />,
      title: 'AI Product Building & Prototyping',
      description: 'From idea to MVP, I help you design and build AI-driven tools, apps, and workflows using platforms like OpenAI, ElevenLabs, and no-code tools like n8n. Ideal for marketing automation, voice agents, AI assistants, and custom GPT solutions.',
      highlights: ['Idea-to-MVP Pipeline', 'AI Agent & Workflow Design', 'Voice & Chat Integrations'],
    },
    {
      icon: <RoadmapIcon className="h-7 w-7 text-brand-accent" />,
      title: 'Technical Program & Delivery Management',
      description: 'End-to-end project delivery for complex technical programs. I manage timelines, dependencies, and cross-team coordination so your engineering org ships on time and on budget.',
      highlights: ['Program Roadmap & Milestone Planning', 'Dependency & Risk Tracking', 'Vendor & Stakeholder Coordination'],
    },
    {
      icon: <RiskIcon className="h-7 w-7 text-brand-accent" />,
      title: 'Process Improvement & Agile Transformation',
      description: 'I assess your current delivery workflows and implement lean, scalable processes, whether you\'re adopting Agile for the first time or optimizing an existing Scrum/Kanban setup for faster throughput.',
      highlights: ['Agile Maturity Assessment', 'Sprint Velocity & Workflow Optimization', 'JIRA / Confluence Setup & Best Practices'],
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-14">
        <p className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-3">What I Offer</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Services</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
          From strategy to execution, I help individuals and teams level up in product management, marketing technology, and AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <div className="bg-base-200/50 rounded-2xl p-8 md:p-10 border border-base-400/30">
          <h2 className="text-2xl font-bold text-white mb-3">Not sure which service fits?</h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">Let's hop on a quick call. I'll learn about your situation and recommend the best path forward, no pressure.</p>
          <a
            href="mailto:darren@darren-ross.com"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3.5 px-8 rounded-xl text-base hover:bg-brand-secondary transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/25 hover:-translate-y-0.5"
          >
            Book a Free Intro Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
