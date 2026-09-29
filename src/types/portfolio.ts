export interface SocialLinks {
  linkedin?: string;
  github?: string;
  kaggle?: string;
  email: string;
}

export interface HeroData {
  name: string;
  headline: string;
  shortBio: string;
  status: string;
  avatarUrl?: string;
  resumeFileName?: string;
  socials: SocialLinks;
}

export interface AboutData {
  summary: string;
  careerProfile: string;
  interests: string[];
  currentFocus: string;
}

export interface SkillGroup {
  name: string;
  skills: { name: string; level?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  purpose: string;
  technologies: string[];
  features: string[];
  statusNote: string;
  githubUrl?: string;
  hasInteractiveDemo?: boolean;
}

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  field?: string;
  yearOrStatus: string;
  score: string;
  scoreType: string;
}

export interface LearningJourneyItem {
  id: string;
  phase: string;
  title: string;
  focus: string;
  activities: string[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  technicalSkills: { name: string; level?: string }[];
  softSkills: string[];
  toolsAndPlatforms: string[];
  projects: ProjectItem[];
  education: EducationItem[];
  learningJourney: LearningJourneyItem[];
}
