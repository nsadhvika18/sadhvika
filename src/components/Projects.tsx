import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { Github, Droplets, Play, CheckCircle2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectItem[];
  onOpenAquaSyncDemo: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenAquaSyncDemo }) => {
  return (
    <section id="projects" className="py-16 md:py-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Featured Engineering Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
            Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-xl">
            Practical hardware-software system designed to prevent domestic and institutional water wastage.
          </p>
        </div>

        {/* Featured Project Showcase: AquaSync */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-zinc-200 shadow-2xs overflow-hidden hover:border-zinc-300 transition-all p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details & Features */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200">
                      <Droplets className="w-3.5 h-3.5 text-sky-600" />
                      IoT & Smart Systems
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      In Active Development
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-zinc-700 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem & Purpose */}
                  <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200/80 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    <span className="font-semibold text-zinc-900 block mb-1">
                      Problem & Purpose:
                    </span>
                    {project.purpose}
                  </div>

                  {/* Main Features Grid */}
                  <div className="space-y-2.5">
                    <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">
                      Core Functional Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-50/70 border border-zinc-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware & API adaptability note */}
                  <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900">
                    <span className="font-semibold block mb-0.5">Flexible Hardware / API Integration:</span>
                    Designed with modular interfaces so the controller logic can readily bind to ultrasonic sensors (HC-SR04/waterproof sensors) and microcontrollers (ESP32/Arduino) once final physical components are procured.
                  </div>
                </div>

                {/* Right: Interactive Simulator Callout & Quick Controls */}
                <div className="lg:col-span-4 bg-zinc-50 p-6 rounded-xl border border-zinc-200 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center shadow-xs">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Try the Interactive Simulator
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Experience AquaSync's simulated sensor intake, automated motor cut-off thresholds, and real-time status alerts right in your browser.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={onOpenAquaSyncDemo}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors shadow-xs cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch AquaSync Simulator</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-md transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View on GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
