import React from 'react';
import { Link } from 'react-router-dom';
import { MentorshipIcon, AuditIcon, CertificationIcon, AiChipIcon, ArrowRightIcon } from './IconComponents';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tag }) => (
  <div className="group bg-surface-900 border border-surface-800 p-6 md:p-8 rounded-2xl card-hover">
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-600/15 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="text-xs font-medium text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full">{tag}</span>
        </div>
        <p className="text-surface-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <MentorshipIcon className="h-6 w-6 text-brand-400" />,
      title: 'Technical PM Mentorship & Agile Training',
      description: 'Guided coaching for aspiring PMs in the martech space — sprint planning, capacity balancing, cross-functional team management, and real-world decision-making.',
      tag: 'Coaching',
    },
    {
      icon: <AuditIcon className="h-6 w-6 text-brand-400" />,
      title: 'SFMC Audit & Optimization Report',
      description: 'A deep-dive analysis of your current SFMC setup with actionable recommendations to improve performance and reduce friction.',
      tag: 'Consulting',
    },
    {
      icon: <CertificationIcon className="h-6 w-6 text-brand-400" />,
      title: 'SFMC Certification Training & Exam Prep',
      description: 'Guided prep for Salesforce Marketing Cloud certifications (Email Specialist, Consultant, Developer, etc.) — includes tailored study plans, mock exams, concept walkthroughs, and 1:1 mentoring.',
      tag: 'Training',
    },
    {
      icon: <AiChipIcon className="h-6 w-6 text-brand-400" />,
      title: 'AI Product Building & Prototyping',
      description: 'From idea to MVP — I help you design and build AI-driven tools, apps, and workflows using platforms like OpenAI, ElevenLabs, and no-code tools like n8n.',
      tag: 'Building',
    },
  ];

  return (
    <div className="space-y-24">
      <section className="animate-fade-in-up">
        <div className="text-center mb-12">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">What I Offer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Services</h1>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto">
            Specialized expertise in marketing technology, project management, and AI product development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="animate-fade-in-up">
        <div className="bg-gradient-to-br from-brand-900 to-surface-900 border border-brand-800/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to work together?</h2>
          <p className="text-surface-300 max-w-xl mx-auto mb-8">
            Whether you need help with SFMC, certification prep, or building your next AI-powered product — let's connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-brand-500 transition-all duration-200 shadow-lg shadow-brand-600/25"
          >
            <span>Get in Touch</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
