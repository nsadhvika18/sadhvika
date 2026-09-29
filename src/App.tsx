/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AquaSyncDemoModal } from './components/AquaSyncDemoModal';

export default function App() {
  const [data] = useState(portfolioData);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAquaSyncDemoOpen, setIsAquaSyncDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-zinc-900 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        name={data.hero.name}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAquaSyncDemo={() => setIsAquaSyncDemoOpen(true)}
      />

      {/* Main Content Area: The 7 Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero
          data={data.hero}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAquaSyncDemo={() => setIsAquaSyncDemoOpen(true)}
        />

        {/* 2. About Me */}
        <About data={data.about} />

        {/* 3. Skills */}
        <Skills
          technicalSkills={data.technicalSkills}
          toolsAndPlatforms={data.toolsAndPlatforms}
          softSkills={data.softSkills}
        />

        {/* 4. Projects (AquaSync) */}
        <Projects
          projects={data.projects}
          onOpenAquaSyncDemo={() => setIsAquaSyncDemoOpen(true)}
        />

        {/* 5. Education */}
        <Education education={data.education} />

        {/* 6. Experience / Learning Journey */}
        <LearningJourney journey={data.learningJourney} />

        {/* 7. Contact */}
        <Contact
          socials={data.hero.socials}
          name={data.hero.name}
        />
      </main>

      {/* Footer */}
      <Footer
        name={data.hero.name}
        socials={data.hero.socials}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAquaSyncDemo={() => setIsAquaSyncDemoOpen(true)}
      />

      {/* AquaSync Interactive Hardware/Sensor Simulator */}
      <AquaSyncDemoModal
        isOpen={isAquaSyncDemoOpen}
        onClose={() => setIsAquaSyncDemoOpen(false)}
      />

      {/* Printable Curriculum Vitae / Resume Sheet */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={data}
      />
    </div>
  );
}
