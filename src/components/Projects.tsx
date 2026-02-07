import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import type { Project } from '../types';
import { PROJECTS } from '../utils/constants';

const ProjectThumbnail: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = '',
}) => {
  const [hasImage, setHasImage] = useState(true);
  const imgSrc = `${process.env.PUBLIC_URL}/screenshots/project-${project.id}.png`;

  if (!hasImage) return null;

  return (
    <div className={`overflow-hidden bg-surface-100 ${className}`}>
      <img
        src={imgSrc}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover object-top"
        onError={() => setHasImage(false)}
        loading="lazy"
      />
    </div>
  );
};

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const categories = useMemo(() => {
    const unique = [...new Set(PROJECTS.map((p) => p.category))];
    return ['All', ...unique.sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
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
            A selection of projects spanning web applications, ML dashboards,
            educational platforms, and more.
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
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white border border-surface-200 rounded-xl overflow-hidden hover:border-surface-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <ProjectThumbnail project={project} className="h-40" />

                  <div className="p-6">
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
                        <li
                          key={feature}
                          className="text-xs text-surface-400 flex items-center gap-1.5"
                        >
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
                        onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-surface-500 hover:text-primary-600 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          Live Demo
                        </a>
                      )}
                    </div>
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectThumbnail
                project={selectedProject}
                className="h-56 sm:h-64"
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary-600 mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-bold text-surface-900">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 transition-colors flex-shrink-0 ml-4"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                <p className="text-sm text-surface-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-surface-50 text-surface-700 rounded-md text-xs font-medium border border-surface-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3">
                    Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-surface-600 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-surface-100">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-900 text-white rounded-lg text-sm font-medium hover:bg-surface-800 transition-colors"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
