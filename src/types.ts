export interface Profile {
  name: string;
  headline: string;
  location: string;
  summary: string[];
  email: string;
  links: { label: string; href: string; handle: string }[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface Education {
  id: string;
  school: string;
  program: string;
  period: string;
  badge?: string;
  details?: string[];
  images?: string[];
}

export interface Achievement {
  id: string;
  rank: string;
  title: string;
  event: string;
  location: string;
  year: string;
  scale?: string;
  summary: string;
  images: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  cover: string;
  images: string[];
  status?: string;
  link?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}
