import type { ComponentType } from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  features: string[];
}

export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  url: string;
  color: string;
}

export interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  url: string;
  label: string;
}
