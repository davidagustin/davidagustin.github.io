import { motion } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="loading-content"
        >
          <h2>David Agustin</h2>
          <p>Portfolio</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Donation />
    </div>
  );
};

export default App;
