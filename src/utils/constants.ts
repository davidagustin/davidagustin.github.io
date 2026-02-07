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
      'Interactive learning platform for mastering programming languages through hands-on practice. Thousands of problems across 25 languages and 4 frontend frameworks, with real-time code execution, algorithm visualizations, AI mock interviews, regex training, and an algorithm pattern quiz.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Monaco Editor', 'Playwright'],
    githubUrl: 'https://github.com/davidagustin/coding-drills',
    liveUrl: 'https://coding-drills.vercel.app',
    category: 'Education Platform',
    features: [
      '25 Programming Languages',
      'AI Mock Interviews',
      'Algorithm Visualizations',
      'Real-time Code Execution',
    ],
  },
  {
    id: 2,
    title: 'StreamFlix',
    description:
      'Modern streaming platform with a Netflix/Disney+ inspired interface. Features movie browsing with genre-based carousels, hero sections with backdrops, real movie posters with robust image fallback systems, hover cards with ratings, and responsive dark-themed UI.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AWS Amplify'],
    githubUrl: 'https://github.com/davidagustin/aws-amplify-practice',
    liveUrl: 'https://main.d1bolbr8do04cv.amplifyapp.com/',
    category: 'Streaming Platform',
    features: [
      'Genre-Based Carousels',
      'Hero Section with Backdrop',
      'Real Movie Posters',
      'Responsive Dark Theme',
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
      'Comprehensive e-commerce platform for computer hardware enthusiasts. Features 8 product categories, advanced shopping cart with real-time updates, search and filtering, product detail pages with specifications, and mobile-first responsive design.',
    technologies: ['SvelteKit 2.0', 'TypeScript 5', 'Tailwind CSS 3', 'Azure Static Web Apps'],
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
      'Complete machine learning pipeline and analysis dashboard for the 20 Newsgroups text classification dataset. Features 10+ ML algorithms including Logistic Regression, SVM, XGBoost, and LightGBM with advanced hyperparameter tuning via Grid Search CV and interactive visualizations.',
    technologies: ['Next.js 15', 'React 18', 'TypeScript', 'Material-UI', 'Python', 'Scikit-learn', 'XGBoost', 'LightGBM'],
    githubUrl: 'https://github.com/davidagustin/machine-learning-project',
    liveUrl: 'https://machine-learning-project-theta.vercel.app',
    category: 'AI/ML',
    features: [
      '10+ ML Algorithms',
      'Grid Search CV Tuning',
      'Interactive Visualizations',
      'Static Data Architecture',
    ],
  },
  {
    id: 6,
    title: 'MLI Learning Quiz',
    description:
      'Interactive learning and mnemonic quiz application for MLI precourse material. 5 quiz categories covering NumPy, Pandas, Prompt Engineering, ML Fundamentals, and Spatial Data with randomized questions, progress analytics, and performance badges.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/ai-quiz-questions',
    liveUrl: 'https://ai-quiz-questions.vercel.app',
    category: 'Education',
    features: [
      '5 Quiz Categories',
      'Smart Mnemonics',
      'Performance Badges',
      'Study Recommendations',
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
      'Search engine for 37,860+ historical events from 300 B.C. to 2012 with a Google-like interface. Features real-time autocomplete with 300ms debouncing, smart filtering across descriptions and dates, URL-based routing for bookmarkable searches, and seamless browser navigation.',
    technologies: ['Next.js 15', 'TypeScript 5', 'Tailwind CSS', 'React Hooks', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/historigal-vercel',
    liveUrl: 'https://historigal-vercel.vercel.app',
    category: 'Data/Research',
    features: [
      '37,860+ Events',
      'Google-like Autocomplete',
      'URL-Based Search Routing',
      'Debounced Filtering',
    ],
  },
  {
    id: 9,
    title: 'AI Learning Hub',
    description:
      'Comprehensive application for learning AI and machine learning concepts through interactive mnemonics and character-based learning. Covers Core ML, Deep Learning, Computer Vision, NLP, Advanced AI, MLOps, and Ethics across 30+ sections with hundreds of quiz questions.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Hooks', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/comprehensive-ai-learning-app',
    liveUrl: 'https://comprehensive-ai-learning-app.vercel.app',
    category: 'Education',
    features: [
      '7 Learning Paths',
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
    technologies: ['Next.js 15', 'React 19', 'TypeScript 5', 'Tailwind CSS', 'Vercel'],
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
      'Comprehensive real estate website with luxury property listings. Features advanced search by location, type, price and status, property detail pages with image galleries, filtering across houses, apartments, condos, townhouses, and land, and professional UI with smooth animations.',
    technologies: ['Angular 17', 'TypeScript', 'CSS3', 'Surge.sh'],
    githubUrl: 'https://github.com/davidagustin/surge-practice',
    liveUrl: 'https://my-surge-practice-site.surge.sh',
    category: 'Real Estate',
    features: [
      'Advanced Property Search',
      '5 Property Types',
      'Image Galleries',
      'Status Filtering',
    ],
  },
  {
    id: 12,
    title: 'Elegant Furniture Store',
    description:
      'Modern furniture store built with Vue.js 3 Composition API and Tailwind CSS. Features a product catalog with category browsing and search, shopping cart with real-time updates via Pinia, detailed product pages with specifications, and client-side routing with Vue Router.',
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
      'Professional law firm website with dark-themed modern design. Features 6 practice areas (Business, Real Estate, Family, Civil Litigation, Estate Planning, Criminal Defense), attorney team profiles, legal resource forms and articles, and consultation booking.',
    technologies: ['Astro.js', 'Tailwind CSS', 'TypeScript', 'Netlify'],
    githubUrl: 'https://github.com/davidagustin/netlify-practice',
    liveUrl: 'https://netlify-practice-one.netlify.app',
    category: 'Professional Services',
    features: [
      '6 Practice Areas',
      'Team Profiles',
      'Legal Resources',
      'Consultation Booking',
    ],
  },
  {
    id: 14,
    title: 'FoodRater',
    description:
      'Restaurant rating application inspired by Yelp, built with Angular 17 and Firebase. Features restaurant discovery with cuisine, location and price filtering, 5-star rating system with half-star support and detailed reviews, Firebase authentication, and real-time data updates.',
    technologies: ['Angular 17', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Material Design', 'RxJS'],
    githubUrl: 'https://github.com/davidagustin/firebase-practice',
    liveUrl: 'https://firebase-practice--fir-practice-54eb3.us-central1.hosted.app/',
    category: 'Food & Rating',
    features: [
      'Restaurant Discovery',
      '5-Star + Half-Star Ratings',
      'Firebase Authentication',
      'Real-time Reviews',
    ],
  },
  {
    id: 15,
    title: 'Sudoku Game',
    description:
      'Interactive Sudoku game with three difficulty levels. Click cells and type numbers with real-time validation, visual feedback through highlighted cells and error indicators, auto-solve functionality, and modern gradient UI. Supports keyboard controls including backspace to clear.',
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
      "Interactive app to memorize Google's 43 Rules of Machine Learning Engineering. Three study modes: Browse with category filtering and search, Study with sequential progress tracking, and Flashcard for active recall. Covers all ML phases from first pipeline to complex models.",
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/rules-of-machine-learning',
    liveUrl: 'https://rules-of-machine-learning.vercel.app/',
    category: 'Education',
    features: [
      '43 ML Rules',
      'Three Study Modes',
      '12 Rule Categories',
      'Progress Tracking',
    ],
  },
  {
    id: 17,
    title: 'Sign Language Learning',
    description:
      'Learn to spell your name in ASL with real-time AI-powered hand tracking. Uses MediaPipe Hands API for computer vision with precise finger state detection (open/closed), color-coded hand landmarks, and hand stability monitoring for better accuracy.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript 5', 'Tailwind CSS 3', 'MediaPipe Hands', 'Vercel'],
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
      'Comprehensive learning platform for mastering system design interviews. 50 study materials covering load balancing, database replication, caching, CDNs, microservices, event-driven architecture, and sharding. 40 core concepts, 60 quiz questions with progressive difficulty, and dark mode.',
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
      'Production-ready collection of 90+ modern React UI patterns and components. Enterprise-grade codebase demonstrating senior-level React skills with 100% TypeScript coverage, WCAG 2.1 AA accessibility compliance, full keyboard navigation, and scalable architecture.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript 5.6', 'Tailwind CSS 3.4', 'Vercel'],
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
      'Professional code sandbox designed for coding interviews. Features built-in timer persisting through refreshes, live preview with hot reload, resizable panels, Prism.js syntax highlighting, dual styling (BEM + Tailwind), and 56+ tests covering unit, integration, accessibility, and performance.',
    technologies: ['React 18', 'TypeScript', 'BEM CSS', 'Tailwind CSS', 'Prism.js', 'Jest'],
    githubUrl: 'https://github.com/davidagustin/react-interview-sandbox',
    category: 'Development Tools',
    features: [
      'Interview Timer',
      'Live Code Preview',
      '56+ Test Suite',
      'Syntax Highlighting',
    ],
  },
  {
    id: 21,
    title: 'PIIxelate',
    description:
      'AI-powered privacy protection tool that detects and pixelates PII in images. Uses multi-layer detection for credit cards, driver\'s licenses, phone numbers, emails, addresses, medical records, and barcodes. Browser-based local processing with optional AI services for 95-99% accuracy.',
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
      'Modern implementation of the classic Snake game with 60fps smooth gameplay, zero input lag, and custom animations. Features mobile-first responsive design with touch controls, high score persistence, cross-platform compatibility, and accessibility compliance.',
    technologies: ['React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Vite 6', 'Framer Motion'],
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
  {
    id: 23,
    title: 'Backend Engineer Detective',
    description:
      'Interactive detective game with 121 real-world backend incident scenarios across 11 categories. Investigate clues progressively through error logs, metrics, code snippets, config files, and engineer testimonies. Features an AI mentor (Detective Claude) using Socratic guidance and automated scoring.',
    technologies: ['Cloudflare Workers', 'TypeScript', 'Hono', 'Llama 3.1'],
    githubUrl: 'https://github.com/davidagustin/backend-engineer-detective',
    liveUrl: 'https://backend-engineer-detective.app-production.workers.dev/',
    category: 'Education',
    features: [
      '121 Detective Cases',
      '11 Incident Categories',
      'AI Mentor Guidance',
      'Automated Scoring',
    ],
  },
  {
    id: 24,
    title: 'Coding Tricks Practice',
    description:
      'LeetCode-style practice platform with 155+ JavaScript and TypeScript challenges across 19 categories. Features Monaco Editor for a professional coding experience, real-time validation with IntelliSense, sandboxed execution with test validation, and progress tracking with difficulty filtering.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript 5.9', 'Tailwind CSS 4', 'Monaco Editor', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/coding-tricks-practice',
    liveUrl: 'https://coding-tricks-practice.vercel.app',
    category: 'Education',
    features: [
      '155+ Challenges',
      '19 Categories',
      'Monaco Editor',
      'Sandboxed Execution',
    ],
  },
  {
    id: 25,
    title: 'React 30',
    description:
      'Modern React reimagining of Wes Bos\'s JavaScript30 course. 30 vanilla JS projects rebuilt as type-safe React components covering DOM manipulation, canvas drawing, media handling, and browser APIs. Includes drum kit, analog clock, webcam integration, speech recognition, and geolocation.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Vercel'],
    githubUrl: 'https://github.com/davidagustin/react-30',
    liveUrl: 'https://react-30-nu.vercel.app',
    category: 'Education',
    features: [
      '30 React Projects',
      'Spec-Driven Development',
      'Browser API Integration',
      'Canvas & Media',
    ],
  },
];
