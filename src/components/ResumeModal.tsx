import React, { useEffect, useState } from 'react';
import { PortfolioData } from '../types/portfolio';
import { X, Printer, Download, Copy, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  const [copiedText, setCopiedText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `${data.hero.name}
${data.hero.headline}
Email: ${data.hero.socials.email} | GitHub: ${data.hero.socials.github || ''} | LinkedIn: ${data.hero.socials.linkedin || ''}

CAREER OBJECTIVE
${data.about.summary}

EDUCATION
${data.education.map((e) => `- ${e.level} ${e.field ? `(${e.field})` : ''} | ${e.institution} | Score: ${e.score} (${e.scoreType})`).join('\n')}

TECHNICAL SKILLS
- Programming & Databases: ${data.technicalSkills.map((s) => `${s.name}${s.level ? ` (${s.level})` : ''}`).join(', ')}
- Developer Tools: ${data.toolsAndPlatforms.join(', ')}
- Core Competencies: ${data.softSkills.join(', ')}

PROJECTS
${data.projects.map((p) => `${p.title} — ${p.tagline}\nPurpose: ${p.purpose}\nFeatures:\n${p.features.map((f) => `  * ${f}`).join('\n')}`).join('\n\n')}
`;

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden animate-in fade-in duration-150">
        {/* Modal Toolbar (hidden during print) */}
        <div className="print:hidden flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-zinc-900">
              Resume / Curriculum Vitae Sheet
            </h3>
            <span className="text-xs text-zinc-500 hidden sm:inline">
              · Formatted for A4 PDF Export & Print
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-md transition-colors cursor-pointer"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Copy Plaintext</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors shadow-2xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-300" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 rounded-md transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable A4 Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-zinc-100/60 print:bg-white print:p-0">
          <div className="max-w-[760px] mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xs border border-zinc-200 print:border-none print:shadow-none print:p-0 space-y-6 text-zinc-800 text-xs sm:text-sm">
            {/* Header: Name, Contact */}
            <div className="border-b-2 border-zinc-900 pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                  {data.hero.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-zinc-700 mt-1">
                  B.Tech Student (Data Science)
                </p>
                <p className="text-xs text-zinc-500">
                  Nalla Narsimha Reddy Group of Institutions
                </p>
              </div>

              <div className="text-xs text-zinc-600 sm:text-right font-mono space-y-1">
                <div>{data.hero.socials.email}</div>
                {data.hero.socials.github && (
                  <div>{data.hero.socials.github.replace('https://', '')}</div>
                )}
                {data.hero.socials.linkedin && (
                  <div>{data.hero.socials.linkedin.replace('https://', '')}</div>
                )}
                {data.hero.socials.kaggle && (
                  <div>{data.hero.socials.kaggle.replace('https://', '')}</div>
                )}
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-1.5">
              <h2 className="text-xs uppercase tracking-wider font-bold text-zinc-950 border-b border-zinc-200 pb-1">
                Career Objective
              </h2>
              <p className="text-xs leading-relaxed text-zinc-700">
                {data.about.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider font-bold text-zinc-950 border-b border-zinc-200 pb-1">
                Education
              </h2>
              <div className="space-y-2.5">
                {data.education.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start text-xs">
                    <div>
                      <div className="font-bold text-zinc-900">
                        {edu.level} {edu.field ? `— ${edu.field}` : ''}
                      </div>
                      <div className="text-zinc-600">{edu.institution}</div>
                      <div className="text-[11px] text-zinc-500">{edu.yearOrStatus}</div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold font-mono text-zinc-950 text-xs">
                        {edu.score}
                      </span>
                      <div className="text-[10px] text-zinc-400">{edu.scoreType}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Tools */}
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider font-bold text-zinc-950 border-b border-zinc-200 pb-1">
                Technical & Interpersonal Skills
              </h2>
              <div className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-semibold text-zinc-900 w-40 shrink-0">
                    Technical Skills:
                  </span>
                  <span className="text-zinc-700">
                    {data.technicalSkills.map((s) => `${s.name}${s.level ? ` (${s.level})` : ''}`).join(', ')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-semibold text-zinc-900 w-40 shrink-0">
                    Developer Tools:
                  </span>
                  <span className="text-zinc-700">
                    {data.toolsAndPlatforms.join(', ')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-semibold text-zinc-900 w-40 shrink-0">
                    Soft Skills:
                  </span>
                  <span className="text-zinc-700">
                    {data.softSkills.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Project: AquaSync */}
            <div className="space-y-2.5">
              <h2 className="text-xs uppercase tracking-wider font-bold text-zinc-950 border-b border-zinc-200 pb-1">
                Academic Project
              </h2>
              {data.projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-zinc-950 text-sm">
                      {proj.title}
                    </span>
                    <span className="text-zinc-500 text-xs italic">
                      Smart Water Management
                    </span>
                  </div>
                  <div className="text-xs text-zinc-700 font-medium">
                    {proj.tagline}
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-relaxed">
                    {proj.purpose}
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] text-zinc-700">
                    {proj.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
