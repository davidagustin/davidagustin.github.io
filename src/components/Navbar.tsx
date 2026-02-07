import { FaMoon, FaSun } from 'react-icons/fa';
import { scrollToSection } from '../utils/scroll';
import { motion } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-surface-950/95 backdrop-blur-md shadow-sm border-b border-surface-100 dark:border-surface-800'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled
                ? 'text-surface-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-400'
                : 'text-white hover:text-primary-300'
            }`}
          >
            David Agustin
          </button>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? 'text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
                        : 'text-surface-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? 'text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800'
                  : 'text-surface-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? 'text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800'
                  : 'text-surface-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`w-5 h-px transition-all duration-300 ${
                  scrolled
                    ? 'bg-surface-800 dark:bg-white'
                    : 'bg-white'
                } ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}
              />
              <span
                className={`w-5 h-px transition-all duration-300 ${
                  scrolled
                    ? 'bg-surface-800 dark:bg-white'
                    : 'bg-white'
                } ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-5 h-px transition-all duration-300 ${
                  scrolled
                    ? 'bg-surface-800 dark:bg-white'
                    : 'bg-white'
                } ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.ul
            className="md:hidden border-t border-surface-100 dark:border-surface-800 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block py-3 px-2 text-sm transition-colors ${
                    scrolled
                      ? 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
                      : 'text-surface-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
