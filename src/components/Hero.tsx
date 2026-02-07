import { SOCIAL_LINKS } from '../utils/constants';
import { motion } from 'framer-motion';
import type React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-surface-950 relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,91,219,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,91,219,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-6">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            David Agustin
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-surface-400 leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building modern web applications with React, Next.js, and AI/ML.
            22 projects deployed across multiple cloud platforms.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-white text-surface-900 text-sm font-semibold rounded-lg hover:bg-surface-100 transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-surface-600 text-surface-300 text-sm font-semibold rounded-lg hover:border-surface-400 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-500 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-surface-600 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
