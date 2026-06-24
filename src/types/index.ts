export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: { name: string; level: number }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}