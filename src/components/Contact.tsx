import React, { useState } from 'react';
import { SocialLinks } from '../types/portfolio';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

interface ContactProps {
  socials: SocialLinks;
  name: string;
}

export const Contact: React.FC<ContactProps> = ({ socials, name }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    if (!socials.email) return;
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    // Simulate instantaneous client dispatch and feedback
    setTimeout(() => {
      setFormStatus('success');
      setErrorMessage('');
    }, 600);
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi ${name},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
            Interested in collaboration, internship opportunities, or discussing technical projects? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-zinc-200/90 shadow-2xs space-y-4">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                Direct Email
              </div>

              <div className="flex items-center justify-between gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-200">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-800 truncate">
                    {socials.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-md transition-colors cursor-pointer shrink-0 shadow-2xs"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${socials.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors shadow-2xs cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Mail App</span>
              </a>
            </div>

            {/* Social Profiles */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200/90 shadow-2xs space-y-4">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                Professional Profiles
              </div>

              <div className="space-y-2">
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-zinc-700" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-800">
                        GitHub
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                )}

                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-800">
                        LinkedIn
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                )}

                {socials.kaggle && (
                  <a
                    href={socials.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 fill-sky-600" viewBox="0 0 24 24">
                        <path d="M18.825 23.859c-.022.091-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.246l-4.991-6.174-1.921 1.839v4.295c0 .188-.094.281-.281.281H5.28c-.187 0-.281-.094-.281-.281V.281C5 0 .14.047 0 .281h2.441c.187 0 .281.094.281.281v14.482l6.702-6.526c.141-.14.281-.211.422-.211h3.326c.141 0 .235.047.281.141.047.094.024.187-.07.281l-5.694 5.39 6.046 9.497c.07.117.094.211.07.281z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium text-zinc-800">
                        Kaggle
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-zinc-200/90 shadow-2xs">
              <div className="flex items-center gap-2 pb-4 border-b border-zinc-100 mb-6">
                <MessageSquare className="w-4 h-4 text-zinc-700" />
                <h3 className="text-sm font-semibold text-zinc-900">
                  Send a Direct Message
                </h3>
              </div>

              {formStatus === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900">
                      Message Prepared!
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-sm mx-auto">
                      Thank you for reaching out. You can also trigger an immediate dispatch to {socials.email}.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={openMailClient}
                      className="px-4 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md"
                    >
                      Open Email Client Now
                    </button>
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-md">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-zinc-700 mb-1"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-300 rounded-md focus:outline-hidden focus:border-zinc-800 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-zinc-700 mb-1"
                      >
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-300 rounded-md focus:outline-hidden focus:border-zinc-800 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-zinc-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-300 rounded-md focus:outline-hidden focus:border-zinc-800 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-zinc-700 mb-1"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your note or project inquiry here..."
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-300 rounded-md focus:outline-hidden focus:border-zinc-800 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">
                      Replies typically within 24 hours.
                    </span>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md transition-all shadow-2xs cursor-pointer disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
