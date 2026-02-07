import { motion } from 'framer-motion';
import type React from 'react';

const About: React.FC = () => {
  const skills = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Angular', 'Vue.js', 'SvelteKit', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Firebase', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'AI/ML',
      items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenAI', 'MediaPipe', 'XGBoost', 'WebLLM'],
    },
    {
      title: 'Infrastructure',
      items: ['AWS', 'Azure', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Full stack developer with expertise in modern web technologies and AI/ML.
          </p>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="text-surface-600 leading-relaxed mb-6">
                I build modern web applications using React, Next.js, Node.js, Python,
                and AI/ML frameworks. With 20+ deployed projects spanning e-commerce
                platforms, educational tools, ML dashboards, and interactive games,
                I focus on creating clean, performant, and accessible experiences.
              </p>
              <p className="text-surface-600 leading-relaxed mb-8">
                My work covers the full stack -- from SvelteKit storefronts on Azure
                to machine learning pipelines with Scikit-learn, from real-time Firebase
                apps to Hugo sites with multi-language support. I'm constantly exploring
                new technologies and building tools that help people learn.
              </p>

              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-bold text-surface-900">22</div>
                  <div className="text-sm text-surface-500 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-surface-900">50+</div>
                  <div className="text-sm text-surface-500 mt-1">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-surface-900">8</div>
                  <div className="text-sm text-surface-500 mt-1">Platforms</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-8">
                {skills.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-semibold text-surface-900 uppercase tracking-wider mb-4">
                      {group.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-surface-600 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
