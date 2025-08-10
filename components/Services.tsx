
import React from 'react';
import { MentorshipIcon, AuditIcon, CertificationIcon, AiChipIcon } from './IconComponents';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-base-200 p-8 rounded-lg shadow-lg hover:shadow-brand-secondary/20 hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/20 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-text-secondary leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <MentorshipIcon className="h-8 w-8 text-brand-secondary" />,
      title: 'Technical PM Mentorship & Agile Training',
      description: 'Guided coaching for aspiring PMs in the martech space — sprint planning, capacity balancing, cross-functional team management, and real-world decision-making.'
    },
    {
      icon: <AuditIcon className="h-8 w-8 text-brand-secondary" />,
      title: 'SFMC Audit & Optimization Report',
      description: 'A deep-dive analysis of your current SFMC setup with actionable recommendations to improve performance and reduce friction.'
    },

    {
      icon: <CertificationIcon className="h-8 w-8 text-brand-secondary" />,
      title: 'SFMC Certification Training & Exam Prep',
      description: 'Guided prep for Salesforce Marketing Cloud certifications (Email Specialist, Consultant, Developer, etc.) — includes tailored study plans, mock exams, concept walkthroughs, and 1:1 mentoring to help you pass with confidence.'
    },
     {
      icon: <AiChipIcon className="h-8 w-8 text-brand-secondary" />,
      title: 'AI Product Building & Prototyping',
      description: 'From idea to MVP — I help you design and build AI-driven tools, apps, and workflows using platforms like OpenAI, ElevenLabs, and no-code tools like n8n. Ideal for marketing automation, voice agents, AI assistants, and custom GPT solutions.'
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">My Services</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
          I offer a range of services to help you achieve your project goals.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
