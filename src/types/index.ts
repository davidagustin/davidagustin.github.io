import type { ComponentType } from 'react';

// Navigation types
export interface NavItem {
  id: string;
  label: string;
}

// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
  features: string[];
}

// Contact types
export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  url: string;
  color: string;
}

// Skill types
export interface SkillCategory {
  title: string;
  icon: ComponentType<{ className?: string }>;
  skills: string[];
  color: string;
}

// Tech stack types
export interface TechStack {
  icon: ComponentType<{ className?: string }>;
  name: string;
  color: string;
}

// Social link types
export interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  url: string;
  label: string;
}
