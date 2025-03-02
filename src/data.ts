import { NavItem, Experience, Education, Skill, Project, Certification, SocialLink } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    title: 'Web Development Intern',
    company: 'Systemtron',
    period: 'Feb 2025 - Present',
    description: [
      'Gaining hands-on experience in web development, working on real-world projects.',
      'Enhancing frontend and backend development skills.',
      'Collaborating with senior developers to implement new features and fix bugs.'
    ]
  },
  {
    title: 'Head of GitHub Club',
    company: 'SVCE',
    period: 'Nov 2025 - Present',
    description: [
      'Led and managed a team of developers to promote open-source contributions.',
      'Organized workshops, hackathons, and coding events.',
      'Guided students on Git, GitHub workflows, and version control best practices.',
      'Collaborated with faculty and industry professionals for tech sessions.'
    ]
  }
];

export const education: Education[] = [
  {
    institution: 'Sri Venkateshwara College of Engineering, Bengaluru',
    degree: 'B.E. in Computer Science and Engineering (AI)',
    period: '2022 - Present',
    gpa: '8.9'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C', 'Python', 'Java', 'TypeScript']
  },
  {
    category: 'Libraries / Frameworks',
    items: ['Flask', 'YOLO', 'pandas', 'matplotlib', 'HTML', 'CSS']
  },
  {
    category: 'Tools / Platforms',
    items: ['Git', 'VS Code', 'Arduino IDE']
  },
  {
    category: 'Databases',
    items: ['SQL', 'MongoDB', 'MySQL']
  }
];

export const projects: Project[] = [
  {
    title: 'Research Paper: Development of a Software Tool to Aid Search and Rescue of an Aircraft',
    description: 'Published and presented at BIS-24.',
    technologies: ['AI', 'Python'],
    points: [
      'Developed AI-driven software for search and rescue operations.',
      'Implemented algorithms to optimize search patterns based on aircraft data.',
      'Created visualization tools to aid rescue teams in decision-making.'
    ]
  },
  {
    title: 'Accident Detection System',
    description: 'Real-time accident detection with notifications.',
    technologies: ['Python', 'CustomTkinter', 'YOLOv11'],
    points: [
      'Implemented an accident detection system using YOLO and real-time notifications.',
      'Developed a user-friendly interface for monitoring and alerts.',
      'Integrated with notification systems for immediate response.'
    ]
  },
  {
    title: 'CCTV Surveillance Security Enhancement',
    description: 'Web application for selecting pre-trained detection models.',
    technologies: ['React', 'TypeScript', 'Flask', 'YOLOv11', 'MongoDB'],
    points: [
      'Developed a web application for selecting pre-trained detection models.',
      'Enhanced security with camera-specific model choices.',
      'Implemented a dashboard for monitoring and managing security alerts.'
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: 'Machine Learning NSDC Certification',
    issuer: 'Internshala'
  },
  {
    title: 'BIS-24 Presentation',
    issuer: 'IETE'
  },
  {
    title: 'IobiT Solutions Certificate',
    issuer: 'IobiT Solutions'
  },
  {
    title: 'Python Fundamentals',
    issuer: 'Infosys Springboard'
  },
  {
    title: 'NCC \'B\' Certificate',
    issuer: '9 KAR Battalion'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/shubhash-b',
    icon: 'Linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/shubhash-b',
    icon: 'Github'
  },
  {
    platform: 'Email',
    url: 'mailto:shubhash.pvt@gmail.com',
    icon: 'Mail'
  }
];

export const contactInfo = {
  email: 'shubhash.pvt@gmail.com',
  phone: '+91 964899479'
};