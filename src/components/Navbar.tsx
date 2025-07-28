import { scrollToSection } from '../utils/scroll';
import { motion } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/90 backdrop-blur-sm py-3 sm:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2>David Agustin</h2>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.div
            className={`md:hidden flex flex-col cursor-pointer space-y-1 ${
              isOpen ? 'active' : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.ul
          className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="block py-4 px-6 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
