import React from 'react';
import { Code2, Wrench, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface SkillsProps {
  technicalSkills: { name: string; level?: string }[];
  toolsAndPlatforms: string[];
  softSkills: string[];
}

export const Skills: React.FC<SkillsProps> = ({
  technicalSkills,
  toolsAndPlatforms,
  softSkills,
}) => {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
            Skills
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-xl">
            Real foundational capabilities developed through computer science coursework and hands-on practice.
          </p>
        </div>

        {/* 3 Balanced Sections: Technical Skills, Tools, Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Technical Skills */}
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-zinc-800" />
                <h3 className="text-sm font-bold text-zinc-950">Technical Skills</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {technicalSkills.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50/70 border border-zinc-200/70"
                >
                  <span className="text-xs sm:text-sm font-medium text-zinc-900">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[11px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Tools & Environment */}
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-zinc-800" />
                <h3 className="text-sm font-bold text-zinc-950">Developer Tools</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {toolsAndPlatforms.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {toolsAndPlatforms.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50/70 border border-zinc-200/70"
                >
                  <span className="text-xs sm:text-sm font-medium text-zinc-900">
                    {tool}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Workflow
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100">
              Daily programming and repository version control managed using Git and GitHub in Visual Studio Code.
            </div>
          </div>

          {/* 3. Soft Skills */}
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-zinc-800" />
                <h3 className="text-sm font-bold text-zinc-950">Professional Soft Skills</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {softSkills.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-50/70 border border-zinc-200/70"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-zinc-900">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100">
              Emphasizing active listening, structured collaboration, and quick self-directed technical learning.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
