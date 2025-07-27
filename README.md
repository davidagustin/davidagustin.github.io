# David Agustin - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, clean design, and showcases full-stack development projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Smooth animations and transitions
- **GitHub Pages**: Deployed on GitHub Pages
- **Performance Optimized**: Fast loading and optimized for performance
- **Diverse Tech Stack**: Showcases projects built with React, Angular, Vue.js, and Astro.js

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Linting**: Biome
- **Deployment**: GitHub Pages

## 🎯 Featured Projects

This portfolio showcases a diverse range of projects built with modern web technologies:

### 🏠 **Luxury Realty** - Angular Real Estate Application
- **Tech Stack**: Angular 17, TypeScript, CSS3, Surge.sh
- **Features**: Property listings, advanced search, interactive galleries
- **Live Demo**: [https://my-surge-practice-site.surge.sh](https://my-surge-practice-site.surge.sh)
- **GitHub**: [https://github.com/davidagustin/surge-practice](https://github.com/davidagustin/surge-practice)

### 🪑 **Elegant Furniture Store** - Vue.js E-commerce
- **Tech Stack**: Vue.js 3, Vite 4, Tailwind CSS 3, Pinia 2, Vue Router 4
- **Features**: Product catalog, shopping cart, responsive design
- **Live Demo**: [https://render-practice-or72.onrender.com](https://render-practice-or72.onrender.com)
- **GitHub**: [https://github.com/davidagustin/render-practice](https://github.com/davidagustin/render-practice)

### ⚖️ **Law & Associates** - Professional Law Firm Website
- **Tech Stack**: Astro.js, Tailwind CSS, TypeScript, Netlify
- **Features**: Professional design, practice areas, team profiles
- **Live Demo**: [https://netlify-practice-one.netlify.app](https://netlify-practice-one.netlify.app)
- **GitHub**: [https://github.com/davidagustin/netlify-practice](https://github.com/davidagustin/netlify-practice)

### 🔍 **Historigal** - Historical Events Search Engine
- **Tech Stack**: Next.js 15, TypeScript 5, Tailwind CSS 3.3, React Hooks
- **Features**: 37,860+ historical events, advanced search, citation parsing
- **Live Demo**: [https://historigal-vercel.vercel.app](https://historigal-vercel.vercel.app)
- **GitHub**: [https://github.com/davidagustin/historigal-vercel](https://github.com/davidagustin/historigal-vercel)

### 🧠 **AI Learning Hub** - Interactive AI Education Platform
- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, React Hooks
- **Features**: 30+ learning sections, 1000+ quiz questions, interactive learning
- **Live Demo**: [https://comprehensive-ai-learning-app.vercel.app](https://comprehensive-ai-learning-app.vercel.app)
- **GitHub**: [https://github.com/davidagustin/comprehensive-ai-learning-app](https://github.com/davidagustin/comprehensive-ai-learning-app)

### 🛒 **A Very Nice Grocery List** - Modern Shopping App
- **Tech Stack**: Next.js 15, React 19, TypeScript, CSS3
- **Features**: Add/remove items, duplicate prevention, dark theme
- **Live Demo**: [https://a-very-nice-grocery-list-vercel.vercel.app](https://a-very-nice-grocery-list-vercel.vercel.app)
- **GitHub**: [https://github.com/davidagustin/a-very-nice-grocery-list-vercel](https://github.com/davidagustin/a-very-nice-grocery-list-vercel)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   └── Projects.tsx    # Projects showcase
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── constants.ts    # App constants
│   └── scroll.ts       # Scroll utilities
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/davidagustin/davidagustin.github.io.git
cd davidagustin.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs Biome linter
- `npm run format` - Formats code with Biome
- `npm run check` - Runs Biome check (lint + format)
- `npm run deploy` - Deploys to GitHub Pages

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue gradient (#0284c7 to #c026d3)
- **Secondary**: Purple gradient

### Components
Each section is a separate component in the `src/components/` directory:
- Update content in the respective component files
- Modify styling using Tailwind CSS classes
- Add new sections by creating new components

### Constants
App-wide constants are defined in `src/utils/constants.ts`:
- Navigation items
- Social links
- Project data
- Contact information

## 🚀 Deployment

The project is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at: https://davidagustin.github.io

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Quality
- **Biome**: Used for linting and formatting
- **TypeScript**: Type safety and better development experience
- **ESLint**: Additional linting rules

### File Organization
- Components are organized by feature
- Utility functions are separated into dedicated files
- Types are centralized in the `types/` directory
- Constants are managed in `utils/constants.ts`

## 🛠️ Technologies & Frameworks

This portfolio demonstrates expertise across multiple modern web technologies:

### Frontend Frameworks
- **React.js** - Next.js applications with modern hooks and patterns
- **Angular** - Full-featured applications with TypeScript
- **Vue.js** - Progressive framework with Composition API
- **Astro.js** - Static site generation for performance

### Build Tools & Deployment
- **Vite** - Next-generation frontend tooling
- **Vercel** - React/Next.js deployment platform
- **Netlify** - Static site hosting and deployment
- **Surge.sh** - Simple static site deployment
- **Render** - Cloud application hosting

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Modern styling with Flexbox and Grid
- **Framer Motion** - Smooth animations and transitions

### State Management & Routing
- **Pinia** - Vue.js state management
- **Vue Router** - Vue.js routing solution
- **React Hooks** - Modern React state management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Contact

- **Email**: davidsyagustin@gmail.com
- **LinkedIn**: [David Agustin](https://www.linkedin.com/in/davidsyagustin/)
- **GitHub**: [davidagustin](https://github.com/davidagustin)

---

Built with ❤️ by David Agustin 