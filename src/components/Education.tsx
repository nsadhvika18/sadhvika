import React from 'react';
import { EducationItem } from '../types/portfolio';
import { GraduationCap, Award, BookCheck } from 'lucide-react';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Qualifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
            Education
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-xl">
            Formal academic background and verified performance records.
          </p>
        </div>

        {/* 3 Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className={`bg-white p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                idx === 0
                  ? 'border-zinc-900 shadow-xs ring-1 ring-zinc-900/5'
                  : 'border-zinc-200/90 shadow-2xs hover:border-zinc-300'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    idx === 0 ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200/60">
                    {edu.yearOrStatus}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-zinc-950 leading-snug">
                    {edu.level}
                  </h3>
                  {edu.field && (
                    <div className="text-xs font-semibold text-zinc-700 mt-0.5">
                      Branch: {edu.field}
                    </div>
                  )}
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Verified Grade / CGPA */}
              <div className="pt-4 border-t border-zinc-100 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-medium">
                  {edu.scoreType}
                </span>
                <span className="text-sm font-bold font-mono text-zinc-950 tabular-nums bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
