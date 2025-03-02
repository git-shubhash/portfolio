export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}