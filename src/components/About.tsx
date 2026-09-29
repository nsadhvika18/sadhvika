import React from 'react';
import { AboutData } from '../types/portfolio';
import { Target, Compass } from 'lucide-react';

interface AboutProps {
  data: AboutData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Profile & Interests
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-5 text-zinc-700 leading-relaxed text-base sm:text-lg">
            <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-2xs space-y-4">
              <p className="text-zinc-900 font-medium text-lg leading-relaxed">
                "{data.summary}"
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {data.careerProfile}
              </p>
            </div>

            {/* Current Objective */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs sm:text-sm text-zinc-700 flex items-start gap-3">
              <Target className="w-5 h-5 text-zinc-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-900 block mb-0.5">
                  Current Focus & Learning Objectives
                </span>
                <span>{data.currentFocus}</span>
              </div>
            </div>
          </div>

          {/* Interests Pill Box */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-zinc-100">
              <Compass className="w-4 h-4 text-zinc-700" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-900">
                Core Academic Interests
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
              {data.interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
