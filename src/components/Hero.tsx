import React, { useState } from 'react';
import { HeroData } from '../types/portfolio';
import {
  FileText,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  data: HeroData;
  onOpenResume: () => void;
  onOpenAquaSyncDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenResume, onOpenAquaSyncDemo }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Student Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Indicator */}
            {data.status && (
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{data.status}</span>
              </div>
            )}

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 text-balance">
                {data.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-700 leading-snug max-w-xl text-balance">
                {data.headline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
              {data.shortBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-300" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onOpenAquaSyncDemo}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-md transition-all cursor-pointer"
              >
                <span>Explore AquaSync Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-300 rounded-md transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links: LinkedIn, GitHub, Kaggle, Email */}
            <div className="pt-4 border-t border-zinc-200/70 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                Profiles
              </span>

              {data.socials.github && (
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors py-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="font-medium text-xs">GitHub</span>
                </a>
              )}

              {data.socials.linkedin && (
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-700 transition-colors py-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="font-medium text-xs">LinkedIn</span>
                </a>
              )}

              {data.socials.kaggle && (
                <a
                  href={data.socials.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-600 transition-colors py-1"
                  aria-label="Kaggle Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.825 23.859c-.022.091-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.246l-4.991-6.174-1.921 1.839v4.295c0 .188-.094.281-.281.281H5.28c-.187 0-.281-.094-.281-.281V.281C5 0 .14.047 0 .281h2.441c.187 0 .281.094.281.281v14.482l6.702-6.526c.141-.14.281-.211.422-.211h3.326c.141 0 .235.047.281.141.047.094.024.187-.07.281l-5.694 5.39 6.046 9.497c.07.117.094.211.07.281z" />
                  </svg>
                  <span className="font-medium text-xs">Kaggle</span>
                </a>
              )}

              {data.socials.email && (
                <a
                  href={`mailto:${data.socials.email}`}
                  className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors py-1 text-xs font-mono text-zinc-500 sm:ml-auto"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{data.socials.email}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Profile Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-zinc-200/90 bg-white p-2.5 shadow-sm">
                <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-100 relative flex items-center justify-center">
                  {!imageError && data.avatarUrl ? (
                    <img
                      src={data.avatarUrl}
                      alt={`${data.name} profile portrait`}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 text-zinc-600 p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                        SN
                      </div>
                      <span className="text-sm font-semibold text-zinc-900">
                        {data.name}
                      </span>
                      <span className="text-xs text-zinc-500 mt-0.5">
                        Data Science Undergrad
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Verified Student Marker */}
              <div className="absolute -bottom-3 -left-3 bg-white border border-zinc-200/90 rounded-lg p-2.5 shadow-sm flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-zinc-900 flex items-center justify-center text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-left pr-1">
                  <div className="text-xs font-semibold text-zinc-900">B.Tech 2nd Year</div>
                  <div className="text-[11px] text-zinc-500 font-mono">Data Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
