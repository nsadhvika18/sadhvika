import React from 'react';
import { LearningJourneyItem } from '../types/portfolio';
import { BookOpen, Milestone, Sparkles, ArrowRight } from 'lucide-react';

interface LearningJourneyProps {
  journey: LearningJourneyItem[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ journey }) => {
  return (
    <section id="learning-journey" className="py-16 md:py-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Student Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
            Experience / Learning Journey
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-xl">
            A transparent overview of academic milestones, self-directed coding practice, and internship readiness as a 2nd year student.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-0.5 before:bg-zinc-200">
          {journey.map((item, idx) => (
            <div key={item.id} className="relative pl-10 md:pl-12 group">
              {/* Timeline marker */}
              <div className={`absolute left-1.5 md:left-2 top-2 w-4 h-4 rounded-full border-2 transition-colors ${
                idx === 1
                  ? 'bg-zinc-900 border-zinc-900 ring-4 ring-zinc-100'
                  : 'bg-white border-zinc-500 group-hover:bg-zinc-900'
              }`} />

              <div className="bg-white p-6 rounded-xl border border-zinc-200/90 shadow-2xs hover:border-zinc-300 transition-colors space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-zinc-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-zinc-100 text-zinc-800 rounded">
                      {item.phase}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-zinc-700">
                  {item.focus}
                </p>

                <ul className="space-y-1.5 text-xs text-zinc-600 pt-1">
                  {item.activities.map((act, actIdx) => (
                    <li key={actIdx} className="flex items-start gap-2">
                      <span className="text-zinc-400 mt-0.5">•</span>
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
