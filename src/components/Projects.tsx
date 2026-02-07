import { motion } from 'framer-motion';
import type React from 'react';
import { useState, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = [...new Set(PROJECTS.map(p => p.category))];
    return ['All', ...unique.sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="projects" className="py-24 bg-surface-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of projects spanning web applications, ML dashboards, educational platforms, and more.
          </p>

          <div className="mb-10 space-y-4">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-sm px-4 py-2.5 bg-white border border-surface-200 rounded-lg text-sm text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-surface-900 text-white'
                      : 'bg-white text-surface-500 border border-surface-200 hover:border-surface-400 hover:text-surface-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <p className="text-xs text-surface-400">
              {filteredProjects.length} of {PROJECTS.length} projects
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-surface-200 rounded-xl p-6 hover:border-surface-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-surface-400 mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-surface-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-surface-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-surface-50 text-surface-600 rounded text-[11px] font-medium border border-surface-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-surface-400 text-[11px]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <ul className="mb-5 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-xs text-surface-400 flex items-center gap-1.5">
                        <span className="w-0.5 h-0.5 rounded-full bg-surface-300 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-surface-500 hover:text-surface-900 transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-surface-500 hover:text-primary-600 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-[10px]" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400">No projects match your search.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
