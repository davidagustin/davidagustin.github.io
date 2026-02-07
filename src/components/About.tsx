import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type React from 'react';

/* ------------------------------------------------------------------ */
/*  Animated counter – numbers count up when scrolled into view        */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let rafId: number;
    const duration = 1500;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  About section                                                      */
/* ------------------------------------------------------------------ */
const About: React.FC = () => {
  /* ---- skill data ---- */
  const skills = [
    {
      title: 'Frontend',
      items: [
        'React',
        'Next.js',
        'Angular',
        'Vue.js',
        'SvelteKit',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      items: [
        'Node.js',
        'Express',
        'Python',
        'Firebase',
        'REST APIs',
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      title: 'AI/ML',
      items: [
        'Scikit-learn',
        'TensorFlow',
        'PyTorch',
        'OpenAI',
        'MediaPipe',
        'XGBoost',
        'WebLLM',
      ],
    },
    {
      title: 'Infrastructure',
      items: ['AWS', 'Azure', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    },
  ];

  /* ---- stats data ---- */
  const stats: { value: number; suffix: string; label: string }[] = [
    { value: 25, suffix: '', label: 'Projects' },
    { value: 50, suffix: '+', label: 'Technologies' },
    { value: 8, suffix: '+', label: 'Platforms' },
  ];

  /* ---- refs for scroll-linked parallax ---- */
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  /* ---- stagger helpers ---- */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white dark:bg-surface-950 overflow-hidden"
    >
      {/* ---- parallax decorative element ---- */}
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-primary-100/40 dark:bg-primary-900/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* ---- heading ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Full stack developer with expertise in modern web technologies and AI/ML.
          </p>
        </motion.div>

        {/* ---- 5-column grid: bio (2) + skills (3) ---- */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ---- bio column ---- */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
              I build modern web applications using React, Next.js, Node.js, Python,
              and AI/ML frameworks. With 25 deployed projects spanning e-commerce
              platforms, educational tools, ML dashboards, and interactive games, I
              focus on creating clean, performant, and accessible experiences.
            </p>
            <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-10">
              My work covers the full stack -- from SvelteKit storefronts on Azure to
              machine learning pipelines with Scikit-learn, from real-time Firebase
              apps to Hugo sites with multi-language support. Whether it's a
              privacy-focused image editor, a 25-language coding drills platform, or
              a neural network visualizer, I'm driven by the breadth of what the web
              can do.
            </p>

            {/* ---- stats ---- */}
            <div className="flex gap-6 sm:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-surface-900 dark:text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-surface-500 dark:text-surface-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---- skills column (staggered reveal) ---- */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {skills.map((group) => (
                <motion.div key={group.title} variants={itemVariants}>
                  <h4 className="text-sm font-semibold text-surface-900 dark:text-surface-200 uppercase tracking-wider mb-4">
                    {group.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-surface-600 dark:text-surface-400 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary-500 dark:bg-primary-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
