import { SOCIAL_LINKS } from '../utils/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type React from 'react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orb4Y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center bg-surface-950 relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px] animate-float"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-primary-700/5 blur-[150px] animate-float"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orb3Y }}
        className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full bg-primary-400/[0.07] blur-[100px] animate-pulse-slow"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orb4Y, animationDelay: '3s' }}
        className="absolute top-[60%] left-[-5%] w-[350px] h-[350px] rounded-full bg-primary-600/[0.06] blur-[130px] animate-float"
        aria-hidden="true"
      />

      {/* Subtle grain / noise overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,91,219,0.04),transparent_70%)]" />

      {/* Main content with parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={staggerItem}>
              <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-6">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Name - MASSIVE Apple-style typography */}
            <motion.h1
              variants={staggerItem}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight"
            >
              David Agustin
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-xl sm:text-2xl text-surface-400 font-light leading-relaxed mb-12 max-w-2xl"
            >
              Building modern web applications with React, Next.js, and AI/ML.{' '}
              <span className="text-surface-300">
                25 projects deployed across 8+ cloud platforms.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3.5 bg-white text-surface-900 text-sm font-semibold rounded-full hover:bg-surface-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 border border-surface-600 text-surface-300 text-sm font-semibold rounded-full hover:border-surface-400 hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-5"
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
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-surface-600 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-surface-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
