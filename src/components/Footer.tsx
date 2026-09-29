import React from 'react';
import { ArrowUp, Droplets, FileText, Github, Linkedin } from 'lucide-react';
import { SocialLinks } from '../types/portfolio';

interface FooterProps {
  name: string;
  socials: SocialLinks;
  onOpenResume: () => void;
  onOpenAquaSyncDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  name,
  socials,
  onOpenResume,
  onOpenAquaSyncDemo,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200/80 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Note */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-sm font-bold text-zinc-950">{name}</span>
            <p className="text-xs text-zinc-500">
              B.Tech Data Science Student · Nalla Narsimha Reddy Group of Institutions
            </p>
          </div>

          {/* Quick utility links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-600">
            <button
              onClick={onOpenAquaSyncDemo}
              className="inline-flex items-center gap-1.5 hover:text-sky-800 transition-colors py-1 cursor-pointer"
            >
              <Droplets className="w-3.5 h-3.5 text-sky-600" />
              <span>AquaSync Simulator</span>
            </button>

            <span className="text-zinc-300" aria-hidden="true">·</span>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors py-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-500" />
              <span>View Resume</span>
            </button>

            <span className="text-zinc-300" aria-hidden="true">·</span>

            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 transition-colors py-1"
              >
                GitHub
              </a>
            )}

            {socials.linkedin && (
              <>
                <span className="text-zinc-300" aria-hidden="true">·</span>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors py-1"
                >
                  LinkedIn
                </a>
              </>
            )}

            {socials.kaggle && (
              <>
                <span className="text-zinc-300" aria-hidden="true">·</span>
                <a
                  href={socials.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors py-1"
                >
                  Kaggle
                </a>
              </>
            )}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-md transition-colors border border-zinc-200"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2">
          <span>© {new Date().getFullYear()} {name}. Built for internship applications.</span>
          <span>Verified academic coursework and project details only.</span>
        </div>
      </div>
    </footer>
  );
};
