import { motion, useScroll, useSpring } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="loading-content"
        >
          <h1>David Agustin</h1>
          <p>Portfolio</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-surface-900 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold dark:focus:bg-surface-800 dark:focus:text-white"
      >
        Skip to main content
      </a>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Donation />
      <Footer />
    </div>
  );
};

export default App;
