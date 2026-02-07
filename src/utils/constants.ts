import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import type {
  ContactInfo,
  Project,
  SocialLink,
} from '../types';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

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
    color: '#333',
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Coding Drills',
    description:
      'Interactive learning platform for mastering coding through hands-on practice. Thousands of problems across 25 languages, 4 frontend frameworks, drill mode with Monaco Editor, quiz mode, AI mock interviews, and regex training.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Monaco Editor', 'WebLLM'],
    githubUrl: 'https://github.com/davidagustin/coding-drills',
    liveUrl: 'https://coding-drills.vercel.app',
    category: 'Education Platform',
    features: [
      '25 Programming Languages',
      'AI Mock Interviews',
      '460+ Frontend Drills',
      'Real-time Code Execution',
    ],
  },
  {
    id: 2,
    title: 'StreamFlix',
    description:
      'A modern streaming platform built with Next.js 15, featuring a Netflix/Disney+ inspired interface with movie browsing, carousels, hero sections, real movie posters, and robust image fallback systems.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AWS Amplify'],
    githubUrl: 'https://github.com/davidagustin/aws-amplify-practice',
    liveUrl: 'https://main.d1bolbr8do04cv.amplifyapp.com/',
    category: 'Streaming Platform',
    features: [
      'Movie Carousels & Browsing',
      'Netflix-Style UI/UX',
      'Real Movie Posters',
      'Responsive Design',
    ],
  },
  {
    id: 3,
    title: 'Premium Auto Sales',
    description:
      'Professional car sales website built with Hugo for GitLab Pages. Features vehicle inventory with detailed listings, contact forms, multi-language support (English, French, Persian RTL), and SEO optimization.',
    technologies: ['Hugo', 'GitLab Pages', 'CSS3', 'Multi-language', 'SEO'],
    githubUrl: 'https://gitlab.com/davidagustin1-group/gitlab-hugo-practice-app',
    liveUrl: 'https://gitlab-hugo-practice-app-e1b201.gitlab.io/',
    category: 'E-commerce',
    features: [
      'Vehicle Inventory',
      'Multi-language Support',
      'Contact Forms',
      'SEO Optimized',
    ],
  },
  {
    id: 4,
    title: 'TechStore',
    description:
      'Responsive computer hardware store built with SvelteKit, TypeScript, and Tailwind CSS on Azure. Features 8 product categories, advanced shopping cart, search & filter, and mobile-first design.',
    technologies: ['SvelteKit 2.0', 'TypeScript', 'Tailwind CSS', 'Azure Static Web Apps'],
    githubUrl: 'https://github.com/davidagustin/azure-static-practice',
    liveUrl: 'https://ashy-sky-078d0441e.2.azurestaticapps.net',
    category: 'E-commerce',
    features: [
      '8 Product Categories',
      'Shopping Cart',
      'Search & Filter',
      'Mobile-First Design',
    ],
  },
  {
    id: 5,
    title: '20 Newsgroups ML Dashboard',
    description:
      'Comprehensive machine learning analysis dashboard for the 20 Newsgroups dataset, featuring hyperparameter tuning, model comparison across 10+ algorithms, and interactive visualizations.',
    technologies: ['Next.js 15', 'React 18', 'TypeScript', 'Material-UI', 'Python', 'Scikit-learn', 'XGBoost'],
    githubUrl: 'https://github.com/davidagustin/machine-learning-project',
    liveUrl: 'https://machine-learning-project-theta.vercel.app',
    category: 'AI/ML',
    features: [
      '10+ ML Algorithms',
      'Interactive Visualizations',
      'Hyperparameter Tuning',
      'Model Comparison',
    ],
  },
  {
    id: 6,
    title: 'MLI Learning Quiz',
    description:
      'Interactive learning and mnemonic quiz application for MLI precourse material. Features 5 quiz categories with smart mnemonics, progress analytics, and modern UI.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/ai-quiz-questions',
    liveUrl: 'https://ai-quiz-questions.vercel.app',
    category: 'Education',
    features: [
      '5 Quiz Categories',
      'Smart Mnemonics',
      'Progress Analytics',
      'Interactive Learning',
    ],
  },
  {
    id: 7,
    title: 'Hope Foundation',
    description:
      'Responsive charity website built with Gatsby. Features donation systems, volunteer portals, event management, and program showcases with excellent performance and SEO.',
    technologies: ['Gatsby', 'React', 'Digital Ocean', 'SEO'],
    githubUrl: 'https://github.com/hope-foundation/charity-website',
    liveUrl: 'https://sample-gatsby-6fe3p.ondigitalocean.app/',
    category: 'Non-Profit',
    features: [
      'Donation System',
      'Volunteer Portal',
      'Event Management',
      'Program Showcase',
    ],
  },
  {
    id: 8,
    title: 'Historigal',
    description:
      'Search through 37,860+ historical events from 300 B.C. to 2012 with a Google-like interface. Features advanced citation parsing, intelligent search with debouncing, and URL routing.',
    technologies: ['Next.js 15', 'TypeScript 5', 'Tailwind CSS', 'React Hooks', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/historigal-vercel',
    liveUrl: 'https://historigal-vercel.vercel.app',
    category: 'Data/Research',
    features: [
      '37,860+ Events',
      'Citation Parsing',
      'Autocomplete Search',
      'Mobile-First',
    ],
  },
  {
    id: 9,
    title: 'AI Learning Hub',
    description:
      'Comprehensive application for learning AI and machine learning concepts through interactive mnemonics, character-based learning, and quizzes. 30+ learning sections with hundreds of quiz questions.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Hooks', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/comprehensive-ai-learning-app',
    liveUrl: 'https://comprehensive-ai-learning-app.vercel.app',
    category: 'Education',
    features: [
      'Interactive Learning',
      'Hundreds of Quizzes',
      'Character-based Learning',
      '30+ AI/ML Topics',
    ],
  },
  {
    id: 10,
    title: 'A Very Nice Grocery List',
    description:
      'Modern, responsive grocery list application with duplicate prevention, auto-scroll, and a beautiful dark theme with smooth animations.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'CSS3', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/a-very-nice-grocery-list-vercel',
    liveUrl: 'https://a-very-nice-grocery-list-vercel.vercel.app',
    category: 'Productivity',
    features: [
      'Add & Remove Items',
      'Duplicate Prevention',
      'Auto-scroll',
      'Dark Theme',
    ],
  },
  {
    id: 11,
    title: 'Luxury Realty',
    description:
      'Comprehensive real estate website built with Angular. Features luxury property listings with advanced search, filtering, interactive image galleries, and responsive design.',
    technologies: ['Angular 17', 'TypeScript', 'CSS3', 'Surge.sh'],
    githubUrl: 'https://github.com/davidagustin/surge-practice',
    liveUrl: 'https://my-surge-practice-site.surge.sh',
    category: 'Real Estate',
    features: [
      'Property Search',
      'Advanced Filtering',
      'Image Galleries',
      'Responsive Design',
    ],
  },
  {
    id: 12,
    title: 'Elegant Furniture Store',
    description:
      'Modern furniture store built with Vue.js 3 and Tailwind CSS. Features a premium furniture collection with shopping cart, product catalog, and seamless user experience.',
    technologies: ['Vue.js 3', 'Vite 4', 'Tailwind CSS', 'Pinia', 'Vue Router', 'Render'],
    githubUrl: 'https://github.com/davidagustin/render-practice',
    liveUrl: 'https://render-practice-or72.onrender.com',
    category: 'E-commerce',
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Responsive Design',
      'State Management',
    ],
  },
  {
    id: 13,
    title: 'Law & Associates',
    description:
      'Professional law firm website built with Astro.js and Tailwind CSS. Features legal services, attorney profiles, practice areas, and contact forms.',
    technologies: ['Astro.js', 'Tailwind CSS', 'TypeScript', 'Netlify'],
    githubUrl: 'https://github.com/davidagustin/netlify-practice',
    liveUrl: 'https://netlify-practice-one.netlify.app',
    category: 'Professional Services',
    features: [
      'Professional Design',
      'Practice Areas',
      'Team Profiles',
      'Contact Forms',
    ],
  },
  {
    id: 14,
    title: 'FoodRater',
    description:
      'Restaurant rating application built with Angular 17 and Firebase. Features restaurant discovery, 5-star rating system, user authentication, real-time data with Material Design.',
    technologies: ['Angular 17', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Material Design', 'RxJS'],
    githubUrl: 'https://github.com/davidagustin/firebase-practice',
    liveUrl: 'https://firebase-practice--fir-practice-54eb3.us-central1.hosted.app/',
    category: 'Food & Rating',
    features: [
      'Restaurant Discovery',
      '5-Star Ratings',
      'User Authentication',
      'Real-time Data',
    ],
  },
  {
    id: 15,
    title: 'Sudoku Game',
    description:
      'Interactive Sudoku game built with React and Express on Heroku. Three difficulty levels, real-time validation, visual feedback with highlighted cells, and modern UI.',
    technologies: ['React 18', 'Express.js', 'Node.js', 'Webpack 5', 'Heroku'],
    githubUrl: 'https://github.com/davidagustin/heroku-practice',
    liveUrl: 'https://heroku-sudoku-49243446e4d3.herokuapp.com/',
    category: 'Gaming',
    features: [
      'Three Difficulty Levels',
      'Real-time Validation',
      'Interactive Gameplay',
      'Modern UI',
    ],
  },
  {
    id: 16,
    title: 'Rules of ML',
    description:
      'Interactive app to memorize Google\'s 43 Rules of Machine Learning Engineering. Three study modes: Browse, Study, and Flashcard with progress tracking.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/rules-of-machine-learning',
    liveUrl: 'https://rules-of-machine-learning.vercel.app/',
    category: 'Education',
    features: [
      '43 ML Rules',
      'Three Study Modes',
      'Category Filtering',
      'Progress Tracking',
    ],
  },
  {
    id: 17,
    title: 'Sign Language Learning',
    description:
      'Learn to spell your name in ASL with real-time AI-powered hand tracking. Features MediaPipe hand recognition, personalized learning, visual guides, and interactive feedback.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'MediaPipe', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/spell-your-name',
    liveUrl: 'https://spell-your-name.vercel.app/',
    category: 'AI/ML',
    features: [
      'Real-time Hand Tracking',
      'AI Gesture Recognition',
      'Personalized Learning',
      'ASL Alphabet Guide',
    ],
  },
  {
    id: 18,
    title: 'System Design Practice',
    description:
      'Interactive learning platform for mastering system design interviews. 50 study materials, 40 core concepts, 60 quiz questions with progressive difficulty, and dark mode.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/system-design-practice',
    liveUrl: 'https://system-design-practice.vercel.app/',
    category: 'Education',
    features: [
      '50 Study Materials',
      '40 Core Concepts',
      '60 Quiz Questions',
      'Dark Mode',
    ],
  },
  {
    id: 19,
    title: 'UI Patterns React',
    description:
      'Collection of 90+ production-ready React UI patterns and components. Full accessibility compliance (WCAG 2.1 AA), comprehensive form patterns, data visualization, and navigation systems.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript 5.6', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/ui-patterns-react',
    liveUrl: 'https://ui-patterns-react.vercel.app/',
    category: 'Component Library',
    features: [
      '90+ UI Patterns',
      '100% TypeScript',
      'WCAG 2.1 AA',
      'Dark Mode',
    ],
  },
  {
    id: 20,
    title: 'React Interview Sandbox',
    description:
      'Professional code sandbox for coding interviews with built-in timer, live preview, resizable panels, BEM methodology, and Prism.js syntax highlighting.',
    technologies: ['React 18', 'TypeScript', 'BEM CSS', 'Tailwind CSS', 'Prism.js', 'Jest'],
    githubUrl: 'https://github.com/davidagustin/react-interview-sandbox',
    category: 'Development Tools',
    features: [
      'Interview Timer',
      'Live Code Preview',
      'Resizable Panels',
      'Syntax Highlighting',
    ],
  },
  {
    id: 21,
    title: 'PIIxelate',
    description:
      'Multi-layer PII detection and pixelation application with seven-layer detection architecture. Detects financial data, identity documents, medical records, and digital identifiers with 95-99% accuracy using computer vision and LLM verification.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Tesseract.js', 'OpenAI', 'Anthropic'],
    githubUrl: 'https://github.com/davidagustin/piixelate',
    liveUrl: 'https://piixelate.vercel.app',
    category: 'AI/ML',
    features: [
      '7-Layer Detection',
      'Browser-Based Processing',
      'Privacy-First Design',
      'Multi-API Support',
    ],
  },
  {
    id: 22,
    title: 'Classic Snake Game',
    description:
      'Modern implementation of the classic Snake game. Smooth 60fps gameplay, responsive controls (keyboard and touch), high score persistence, and cross-platform compatibility.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/davidagustin/classic-snake-game',
    liveUrl: 'https://classic-snake-game-phi.vercel.app/',
    category: 'Gaming',
    features: [
      '60fps Gameplay',
      'Responsive Controls',
      'High Score Tracking',
      'Mobile-First',
    ],
  },
];
