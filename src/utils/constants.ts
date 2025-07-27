import {
  FaBalanceScale,
  FaBrain,
  FaBuilding,
  FaChair,
  FaCloud,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaRocket,
  FaSearch,
  FaShoppingCart,
  FaCog,
  FaServer,
  FaChartLine,
  FaBolt,
} from 'react-icons/fa';

import type {
  ContactInfo,
  Project,
  SkillCategory,
  SocialLink,
  TechStack,
} from '../types';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export const TECH_STACK: TechStack[] = [
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: FaServer, name: 'Node.js', color: '#339933' },
  { icon: FaCog, name: 'AI/ML', color: '#FF6B6B' },
  { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: FaGithub, url: 'https://github.com/davidagustin', label: 'GitHub' },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/davidsyagustin/',
    label: 'LinkedIn',
  },
  { icon: FaEnvelope, url: 'mailto:davidsyagustin@gmail.com', label: 'Email' },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'davidsyagustin@gmail.com',
    url: 'mailto:davidsyagustin@gmail.com',
    color: '#EA4335',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'davidsyagustin',
    url: 'https://www.linkedin.com/in/davidsyagustin/',
    color: '#0077B5',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'davidagustin',
    url: 'https://github.com/davidagustin',
    color: '#333',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    skills: [
      'React.js',
      'Next.js',
      'Angular',
      'Vue.js',
      'SvelteKit',
      'TypeScript',
      'Tailwind CSS',
      'HTML5/CSS3',
    ],
    color: '#61DAFB',
  },
  {
    title: 'Backend Development',
    icon: FaNodeJs,
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'REST APIs',
      'Database Design',
      'Authentication',
    ],
    color: '#339933',
  },
  {
    title: 'AI/ML & Data',
    icon: FaBrain,
    skills: [
      'Machine Learning',
      'Data Analysis',
      'Python Libraries',
      'AI Integration',
      'Jupyter Notebooks',
    ],
    color: '#FF6B6B',
  },
  {
    title: 'DevOps & Deployment',
    icon: FaRocket,
    skills: [
      'Git/GitHub',
      'Vercel',
      'Netlify',
      'Surge.sh',
      'Render',
      'CI/CD',
      'Cloud Deployment',
    ],
    color: '#667eea',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'TechStore - Computer Hardware Store',
    description:
      'A modern, responsive computer hardware store built with SvelteKit, TypeScript, and Tailwind CSS, deployed on Azure Static Web Apps. Features comprehensive product catalog with 8 categories (CPUs, GPUs, Storage, RAM, Motherboards, Cooling, PSUs, Cases), advanced shopping cart with quantity management, search & filter functionality, and fully responsive design optimized for desktop, tablet, and mobile.',
    technologies: ['SvelteKit 2.0', 'TypeScript', 'Tailwind CSS', 'Lucide Svelte', 'Azure Static Web Apps'],
    githubUrl: 'https://github.com/davidagustin/azure-static-practice',
    liveUrl: 'https://ashy-sky-078d0441e.2.azurestaticapps.net',
    icon: FaBolt,
    category: 'E-commerce',
    features: [
      '8 Product Categories',
      'Advanced Shopping Cart',
      'Search & Filter System',
      'Mobile-First Design',
    ],
  },
  {
    id: 2,
    title: '20 Newsgroups ML Analysis Dashboard',
    description:
      'A comprehensive machine learning analysis dashboard for the 20 Newsgroups dataset, featuring advanced hyperparameter tuning, model comparison, and interactive visualizations. Built with Next.js 15, Material-UI, and Python ML pipeline.',
    technologies: ['Next.js 15', 'React 18', 'TypeScript', 'Material-UI 5', 'Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/machine-learning-project',
    liveUrl: 'https://machine-learning-project-theta.vercel.app',
    icon: FaChartLine,
    category: 'AI/ML Dashboard',
    features: [
      '10+ ML Algorithms',
      'Interactive Visualizations',
      'Hyperparameter Tuning',
      'Real-time Model Comparison',
    ],
  },
  {
    id: 3,
    title: 'MLI Learning Quiz App',
    description:
      'A beautiful, interactive learning and mnemonic quiz application designed specifically for the MLI (Machine Learning Institute) precourse material. Features 5 quiz categories with smart mnemonics, progress analytics, and modern UI/UX.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/ai-quiz-questions',
    liveUrl: 'https://ai-quiz-questions.vercel.app',
    icon: FaGraduationCap,
    category: 'AI/ML Education',
    features: [
      '5 Quiz Categories',
      'Smart Mnemonics',
      'Progress Analytics',
      'Interactive Learning',
    ],
  },
  {
    id: 4,
    title: 'Hope Foundation',
    description:
      'A modern, responsive charity website built with Gatsby for Hope Foundation. Features donation systems, volunteer portals, event management, and comprehensive program showcases. Deployed on Digital Ocean with excellent performance and SEO optimization.',
    technologies: ['Gatsby', 'React', 'Digital Ocean', 'SEO Optimized', 'Responsive Design'],
    githubUrl: 'https://github.com/hope-foundation/charity-website',
    liveUrl: 'https://sample-gatsby-6fe3p.ondigitalocean.app/',
    icon: FaHeart,
    category: 'Charity/Non-Profit',
    features: [
      'Donation System',
      'Volunteer Portal',
      'Event Management',
      'Program Showcase',
    ],
  },
  {
    id: 5,
    title: 'Historigal',
    description:
      'A modern, responsive web application for searching through 37,860+ historical events from 300 B.C. to 2012 with a Google-like interface. Features advanced citation parsing, intelligent search with debouncing, URL routing, and mobile-first design.',
    technologies: ['Next.js 15', 'TypeScript 5', 'Tailwind CSS 3.3', 'React Hooks', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/historigal-vercel',
    liveUrl: 'https://historigal-vercel.vercel.app',
    icon: FaSearch,
    category: 'Data/Research',
    features: [
      '37,860+ historical events',
      'Advanced citation parsing',
      'Google-like autocomplete',
      'Mobile-first responsive',
    ],
  },
  {
    id: 6,
    title: 'AI Learning Hub',
    description:
      'A comprehensive Next.js application for learning AI and machine learning concepts through interactive mnemonics, character-based learning, and quizzes. Features 30+ learning sections with 1000+ quiz questions.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Hooks', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/comprehensive-ai-learning-app',
    liveUrl: 'https://comprehensive-ai-learning-app.vercel.app',
    icon: FaBrain,
    category: 'Education/AI',
    features: [
      'Interactive Learning',
      '1000+ Quiz Questions',
      'Character-based Learning',
      '30+ AI/ML Topics',
    ],
  },
  {
    id: 7,
    title: 'A Very Nice Grocery List',
    description:
      'A modern, responsive grocery list application built with Next.js, React, and TypeScript. Features duplicate prevention, auto-scroll, and a beautiful dark theme with smooth animations.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'CSS3', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/a-very-nice-grocery-list-vercel',
    liveUrl: 'https://a-very-nice-grocery-list-vercel.vercel.app',
    icon: FaShoppingCart,
    category: 'Productivity',
    features: [
      'Add & Remove Items',
      'Duplicate Prevention',
      'Auto-scroll',
      'Dark Theme',
    ],
  },
  {
    id: 8,
    title: 'Luxury Realty',
    description:
      'A comprehensive, modern real estate website built with Angular and deployed on Surge.sh. Features luxury property listings with advanced search, filtering, interactive image galleries, and responsive design.',
    technologies: ['Angular 17', 'TypeScript', 'CSS3', 'Surge.sh', 'Google Fonts'],
    githubUrl: 'https://github.com/davidagustin/surge-practice',
    liveUrl: 'https://my-surge-practice-site.surge.sh',
    icon: FaHome,
    category: 'Real Estate',
    features: [
      'Property Listings & Search',
      'Advanced Filtering',
      'Interactive Galleries',
      'Responsive Design',
    ],
  },
  {
    id: 9,
    title: 'Elegant Furniture Store',
    description:
      'A modern, responsive furniture store built with Vue.js 3, Vite, and Tailwind CSS. Features a beautiful collection of premium furniture with shopping cart functionality, product catalog, and seamless user experience.',
    technologies: ['Vue.js 3', 'Vite 4', 'Tailwind CSS 3', 'Pinia 2', 'Vue Router 4', 'Render'],
    githubUrl: 'https://github.com/davidagustin/render-practice',
    liveUrl: 'https://render-practice-or72.onrender.com',
    icon: FaChair,
    category: 'E-commerce',
    features: [
      'Product Catalog & Search',
      'Shopping Cart System',
      'Responsive Design',
      'State Management',
    ],
  },
  {
    id: 10,
    title: 'Law & Associates',
    description:
      'A modern, professional law firm website built with Astro.js and Tailwind CSS. Features comprehensive legal services, attorney profiles, practice areas, and contact forms with a clean, professional design.',
    technologies: ['Astro.js', 'Tailwind CSS', 'TypeScript', 'Netlify'],
    githubUrl: 'https://github.com/davidagustin/netlify-practice',
    liveUrl: 'https://netlify-practice-one.netlify.app',
    icon: FaBalanceScale,
    category: 'Professional Services',
    features: [
      'Professional Design',
      'Practice Areas',
      'Team Profiles',
      'Contact Forms',
    ],
  },
];
