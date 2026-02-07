import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaList,
  FaTh,
  FaTimes,
} from 'react-icons/fa';
import { FiColumns } from 'react-icons/fi';
import type { Project } from '../types';
import { PROJECTS } from '../utils/constants';

type ViewMode = 'grid' | 'carousel' | 'table';
type ColumnsPerRow = 2 | 3 | 4;

const ProjectThumbnail: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = '',
}) => {
  const [hasImage, setHasImage] = useState(true);
  const imgSrc = `${process.env.PUBLIC_URL}/screenshots/project-${project.id}.png`;

  if (!hasImage) return null;

  return (
    <div className={`overflow-hidden bg-surface-100 dark:bg-surface-800 ${className}`}>
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

/* ─── Featured Strip ─── */
const FEATURED_IDS = [1, 21, 24, 5, 23, 25];

const FeaturedStrip: React.FC<{ onSelect: (p: Project) => void }> = ({ onSelect }) => {
  const featured = useMemo(() =>
    FEATURED_IDS.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean) as Project[],
    []
  );

  return (
    <div className="mb-12">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-4">
        Featured
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x-mandatory -mx-4 px-4">
        {featured.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(project)}
            className="flex-shrink-0 w-72 sm:w-80 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden cursor-pointer snap-center hover:shadow-lg transition-shadow"
          >
            <ProjectThumbnail project={project} className="h-36" />
            <div className="p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">
                {project.category}
              </span>
              <h4 className="text-sm font-bold text-surface-900 dark:text-white mt-1 mb-1">
                {project.title}
              </h4>
              <p className="text-xs text-surface-500 dark:text-surface-400 line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ─── Carousel View ─── */
const CarouselView: React.FC<{
  projects: Project[];
  onSelect: (p: Project) => void;
}> = ({ projects, onSelect }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset index when filter changes
  useEffect(() => {
    setIndex(0);
  }, [projects.length]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + projects.length) % projects.length);
    },
    [projects.length]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [go]);

  if (projects.length === 0) return null;

  const project = projects[index];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-2xl">
        {/* Nav arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 p-2.5 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white hover:border-surface-400 dark:hover:border-surface-500 shadow-sm transition-all"
          aria-label="Previous project"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 p-2.5 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white hover:border-surface-400 dark:hover:border-surface-500 shadow-sm transition-all"
          aria-label="Next project"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Card */}
        <div className="overflow-hidden rounded-xl min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => onSelect(project)}
              className="bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:border-surface-600 transition-shadow cursor-pointer"
            >
              <ProjectThumbnail project={project} className="h-56" />
              <div className="p-6 sm:p-8">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-surface-400 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-50 dark:bg-surface-700 text-surface-600 dark:text-surface-300 rounded text-[11px] font-medium border border-surface-100 dark:border-surface-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-surface-100 dark:border-surface-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors"
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
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5 mt-6">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`rounded-full transition-all duration-200 ${
              i === index
                ? 'w-6 h-2 bg-surface-900 dark:bg-white'
                : 'w-2 h-2 bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
      <p className="text-xs text-surface-400 mt-3">
        {index + 1} of {projects.length}
      </p>
    </div>
  );
};

/* ─── Table View ─── */
const TableView: React.FC<{
  projects: Project[];
  onSelect: (p: Project) => void;
}> = ({ projects, onSelect }) => {
  if (projects.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-xl border border-surface-200 dark:border-surface-700">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-surface-400">
              Title
            </th>
            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-surface-400 hidden sm:table-cell">
              Category
            </th>
            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-surface-400 hidden md:table-cell">
              Description
            </th>
            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-surface-400 hidden lg:table-cell">
              Technologies
            </th>
            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-surface-400 text-right">
              Links
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              onClick={() => onSelect(project)}
              className="border-b border-surface-100 dark:border-surface-800 last:border-b-0 hover:bg-surface-50 dark:hover:bg-surface-800/50 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3">
                <span className="text-sm font-semibold text-surface-900 dark:text-white">
                  {project.title}
                </span>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell">
                <span className="text-xs text-surface-500">
                  {project.category}
                </span>
              </td>
              <td className="px-4 py-3 hidden md:table-cell max-w-xs">
                <p className="text-xs text-surface-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </td>
              <td className="px-4 py-3 hidden lg:table-cell">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 rounded text-[10px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-surface-400 text-[10px]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded text-surface-400 hover:text-surface-900 dark:hover:text-white transition-colors"
                    aria-label={`${project.title} source code`}
                  >
                    <FaGithub className="text-sm" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded text-surface-400 hover:text-primary-600 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className="text-[11px]" />
                    </a>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ─── Grid View ─── */
const GridView: React.FC<{
  projects: Project[];
  columns: ColumnsPerRow;
  onSelect: (p: Project) => void;
}> = ({ projects, columns, onSelect }) => {
  const gridClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 4
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
          viewport={{ once: true }}
          onClick={() => onSelect(project)}
          className="group bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden hover:border-surface-300 dark:hover:border-surface-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <ProjectThumbnail project={project} className="h-40" />

          <div className="p-6">
            <div className="mb-4">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-surface-400 mb-3">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-surface-50 dark:bg-surface-700 text-surface-600 dark:text-surface-300 rounded text-[11px] font-medium border border-surface-100 dark:border-surface-600"
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
                  className="text-xs text-surface-400 dark:text-surface-500 flex items-center gap-1.5"
                >
                  <span className="w-0.5 h-0.5 rounded-full bg-surface-300 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-4 border-t border-surface-100 dark:border-surface-700">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors"
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
  );
};

/* ─── Main Projects Component ─── */
const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [columnsPerRow, setColumnsPerRow] = useState<ColumnsPerRow>(3);

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

  const viewOptions: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
    { mode: 'grid', icon: <FaTh />, label: 'Grid' },
    { mode: 'carousel', icon: <FiColumns />, label: 'Carousel' },
    { mode: 'table', icon: <FaList />, label: 'Table' },
  ];

  return (
    <section id="projects" className="py-24 bg-surface-50 dark:bg-surface-900">
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

          <FeaturedStrip onSelect={setSelectedProject} />

          <div className="mb-10 space-y-4">
            {/* Search + View Toggle Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <label htmlFor="project-search" className="sr-only">Search projects</label>
              <input
                id="project-search"
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:max-w-sm px-4 py-2.5 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg text-sm text-surface-800 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-500/30 focus:border-primary-500 dark:focus:border-primary-400 transition-all"
              />

              <div className="flex items-center gap-1 sm:ml-auto">
                {/* View mode toggle */}
                <div className="inline-flex items-center bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg p-0.5">
                  {viewOptions.map((opt) => (
                    <button
                      key={opt.mode}
                      type="button"
                      onClick={() => setViewMode(opt.mode)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                        viewMode === opt.mode
                          ? 'bg-surface-900 dark:bg-white text-white dark:text-surface-900 shadow-sm'
                          : 'text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200'
                      }`}
                      aria-label={`${opt.label} view`}
                    >
                      {opt.icon}
                      <span className="hidden sm:inline">{opt.label}</span>
                    </button>
                  ))}
                </div>

                {/* Columns picker (grid only) */}
                {viewMode === 'grid' && (
                  <div className="inline-flex items-center bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg p-0.5 ml-1">
                    {([2, 3, 4] as ColumnsPerRow[]).map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setColumnsPerRow(n)}
                        className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                          columnsPerRow === n
                            ? 'bg-surface-900 dark:bg-white text-white dark:text-surface-900 shadow-sm'
                            : 'text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200'
                        }`}
                        aria-label={`${n} columns`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-surface-900 dark:bg-white text-white dark:text-surface-900'
                      : 'bg-white dark:bg-surface-800 text-surface-500 dark:text-surface-400 border border-surface-200 dark:border-surface-700 hover:border-surface-400 dark:hover:border-surface-500 hover:text-surface-700 dark:hover:text-surface-200'
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

          {/* View content */}
          {filteredProjects.length > 0 ? (
            <>
              {viewMode === 'grid' && (
                <GridView
                  projects={filteredProjects}
                  columns={columnsPerRow}
                  onSelect={setSelectedProject}
                />
              )}
              {viewMode === 'carousel' && (
                <CarouselView
                  projects={filteredProjects}
                  onSelect={setSelectedProject}
                />
              )}
              {viewMode === 'table' && (
                <TableView
                  projects={filteredProjects}
                  onSelect={setSelectedProject}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400">No projects match your search.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
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
              className="bg-white dark:bg-surface-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
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
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg text-surface-400 dark:text-surface-500 hover:text-surface-700 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors flex-shrink-0 ml-4"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
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
                        className="px-2.5 py-1 bg-surface-50 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded-md text-xs font-medium border border-surface-200 dark:border-surface-700"
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
                        className="text-sm text-surface-600 dark:text-surface-400 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-surface-100 dark:border-surface-800">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-900 dark:bg-white text-white dark:text-surface-900 rounded-lg text-sm font-medium hover:bg-surface-800 dark:hover:bg-surface-100 transition-colors"
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
