import { SOCIAL_LINKS, TECH_STACK } from '../utils/constants';
import { motion } from 'framer-motion';
import type React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3Cpattern id=%22grain%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%221%22 fill=%22white%22 opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23grain)%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
                Hi, I'm{' '}
                <span className="text-blue-200 font-bold relative drop-shadow-lg">
                  David Agustin
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded" />
                </span>
              </h1>
            </motion.div>

            <motion.h2
              className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-100 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer & AI Enthusiast
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-8 text-blue-50 max-w-lg drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about building modern web applications with
              cutting-edge technologies. Specializing in React, Next.js, AI/ML,
              and cloud deployment solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="btn bg-white/90 hover:bg-white text-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out px-6 py-3 rounded-lg font-semibold text-base text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg font-semibold text-base text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white hover:bg-white/35 hover:text-white transition-all duration-300 shadow-lg font-medium"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <social.icon className="text-lg" />
                  <span className="font-semibold">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Tech Stack & Stats */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Tech Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6 w-full max-w-md">
              {TECH_STACK.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 sm:p-6 bg-white/25 backdrop-blur-md rounded-2xl border border-white/40 transition-all duration-300 cursor-pointer hover:bg-white/35 hover:border-white/50 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div style={{ color: tech.color }}>
                    <tech.icon className="text-3xl sm:text-4xl mb-2" />
                  </div>
                  <span className="font-bold text-white text-xs sm:text-sm text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-blue-200">12+</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-semibold">Projects</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-blue-200">50+</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-semibold">Technologies</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-blue-200">100%</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-semibold">Responsive</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="text-3xl text-blue-200 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
