import React, { useState } from 'react';
import { MailIcon, SendIcon, LinkedInIcon, InstagramIcon } from './IconComponents';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = 'w-full bg-surface-900 border border-surface-700 rounded-xl px-4 py-3 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm';

  return (
    <div className="animate-fade-in-up space-y-16">
      <div className="text-center">
        <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Me</h1>
        <p className="text-lg text-surface-400 max-w-2xl mx-auto">
          Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-600/15 flex items-center justify-center">
                <MailIcon className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Email</h3>
                <p className="text-surface-400 text-sm">hello@darren-ross.com</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Connect on Social</h3>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-900/50 to-surface-900 border border-brand-800/30 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-2">Availability</h3>
            <p className="text-surface-400 text-sm leading-relaxed">
              Currently accepting new consulting and mentorship clients. AI product projects available on a case-by-case basis.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="bg-surface-900 border border-brand-700/50 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-600/15 flex items-center justify-center mx-auto mb-6">
                <SendIcon className="h-8 w-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-surface-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-6 text-brand-400 text-sm font-semibold hover:text-brand-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface-900 border border-surface-800 rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-surface-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-surface-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-surface-300 mb-1.5">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="mentorship">PM Mentorship & Coaching</option>
                  <option value="sfmc">SFMC Consulting</option>
                  <option value="certification">Certification Training</option>
                  <option value="ai">AI Product Building</option>
                  <option value="podcast">Podcast Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface-300 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or question..."
                  className={inputClasses + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3.5 px-8 rounded-xl hover:bg-brand-500 transition-all duration-200 shadow-lg shadow-brand-600/25"
              >
                <span>Send Message</span>
                <SendIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
