export interface Project {
  id: string;
  title: string;
  description: string | string[];
  technicalHighlights?: string[];
  techStack: string[];
  imageUrl?: string;
  link?: string;
  images?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string | string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  location?: string;
  description: string[];
  keyAreas: string[];
  year: string;
  images?: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}
