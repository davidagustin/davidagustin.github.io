import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaList,
  FaPause,
  FaPlay,
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
const FEATURED_IDS = [1, 17, 23, 24, 19, 18, 25];

const FeaturedStrip: React.FC<{ onSelect: (p: Project) => void }> = ({ onSelect }) => {
  const featured = useMemo(() =>
    FEATURED_IDS.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean) as Project[],
    []
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const isHoveredRef = useRef(false);

  // Auto-scroll effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (!isHoveredRef.current && scrollRef.current) {
        // Measure actual card width + gap dynamically for responsiveness
        const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
        const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 336;
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });

        // If reached the end, scroll back to start
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">
          Featured
        </h3>
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 rounded-md text-surface-400 dark:text-surface-500 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
          aria-label={isPlaying ? 'Pause auto-scroll' : 'Play auto-scroll'}
        >
          {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="text-xs" />}
        </button>
      </div>
      <div
        ref={scrollRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x-mandatory -mx-4 px-4"
      >
        {featured.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(project)}
            className="flex-shrink-0 w-80 sm:w-96 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden cursor-pointer snap-center hover:shadow-lg transition-shadow"
          >
            <ProjectThumbnail project={project} className="h-48" />
            <div className="p-5">
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
  columns: 1 | 2 | 3;
  onSelect: (p: Project) => void;
}> = ({ projects, columns, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive column override: force fewer columns on small screens
  const [effectiveCols, setEffectiveCols] = useState(columns);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setEffectiveCols(1);
      else if (w < 1024) setEffectiveCols(Math.min(columns, 2) as 1 | 2 | 3);
      else setEffectiveCols(columns);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [columns]);

  const maxIndex = Math.max(0, projects.length - effectiveCols);

  // Reset when filter or columns change
  useEffect(() => {
    setCurrentIndex(0);
  }, [projects.length, effectiveCols]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrentIndex((prev) => Math.max(0, Math.min(maxIndex, prev + dir)));
    },
    [maxIndex]
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

  // Each card takes 1/effectiveCols of the container width, with gap
  const gapPx = 24;
  const cardPercent = 100 / effectiveCols;
  const offsetPercent = -(currentIndex * cardPercent);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        {/* Nav arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={currentIndex === 0}
          className={`absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white hover:border-surface-400 dark:hover:border-surface-500 shadow-sm transition-all ${currentIndex === 0 ? 'opacity-30 cursor-default' : ''}`}
          aria-label="Previous"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={currentIndex >= maxIndex}
          className={`absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white hover:border-surface-400 dark:hover:border-surface-500 shadow-sm transition-all ${currentIndex >= maxIndex ? 'opacity-30 cursor-default' : ''}`}
          aria-label="Next"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Sliding container */}
        <div ref={containerRef} className="overflow-hidden rounded-xl">
          <motion.div
            animate={{ x: `calc(${offsetPercent}% - ${currentIndex * gapPx}px)` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex"
            style={{ gap: `${gapPx}px` }}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelect(project)}
                className="bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:border-surface-600 transition-shadow cursor-pointer flex-shrink-0"
                style={{ width: `calc(${cardPercent}% - ${gapPx * (effectiveCols - 1) / effectiveCols}px)` }}
              >
                <ProjectThumbnail project={project} className="h-44" />
                <div className="p-5">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-surface-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-surface-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
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
                  <div className="flex items-center gap-3 pt-3 border-t border-surface-100 dark:border-surface-700">
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
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Progress indicator - dots for <=10 positions, text-only otherwise */}
      {maxIndex + 1 <= 10 && (
        <div className="flex items-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? 'w-6 h-2 bg-surface-900 dark:bg-white'
                  : 'w-2 h-2 bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'
              }`}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      )}
      <p className="text-xs text-surface-400 mt-3">
        {currentIndex + 1}&ndash;{Math.min(currentIndex + effectiveCols, projects.length)} of {projects.length}
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
            <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-surface-400">
              Preview
            </th>
            <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-surface-400">
              Project
            </th>
            <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-surface-400 hidden md:table-cell">
              Description
            </th>
            <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-surface-400 hidden lg:table-cell">
              Features
            </th>
            <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-surface-400 hidden xl:table-cell">
              Technologies
            </th>
            <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-surface-400 text-right">
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
              <td className="px-5 py-6">
                <ProjectThumbnail
                  project={project}
                  className="w-40 h-28 sm:w-56 sm:h-36 lg:w-72 lg:h-48 rounded-lg flex-shrink-0"
                />
              </td>
              <td className="px-5 py-6">
                <div>
                  <span className="text-sm font-semibold text-surface-900 dark:text-white block">
                    {project.title}
                  </span>
                  <span className="text-xs text-surface-400 dark:text-surface-500 mt-0.5 block">
                    {project.category}
                  </span>
                </div>
              </td>
              <td className="px-5 py-6 hidden md:table-cell max-w-md">
                <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                  {project.description}
                </p>
              </td>
              <td className="px-5 py-6 hidden lg:table-cell">
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-surface-500 dark:text-surface-400 flex items-start gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-surface-400 flex-shrink-0 mt-1.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-5 py-6 hidden xl:table-cell">
                <div className="flex flex-wrap gap-1.5 max-w-xs">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 rounded text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-5 py-6 text-right">
                <div className="flex items-center justify-end gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg text-surface-400 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                    aria-label={`${project.title} source code`}
                  >
                    <FaGithub className="text-base" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg text-surface-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
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
  const [carouselColumns, setCarouselColumns] = useState<1 | 2 | 3>(3);

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

                {/* Columns picker (grid) */}
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

                {/* Columns picker (carousel) */}
                {viewMode === 'carousel' && (
                  <div className="inline-flex items-center bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg p-0.5 ml-1">
                    {([1, 2, 3] as const).map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setCarouselColumns(n)}
                        className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                          carouselColumns === n
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
                  columns={carouselColumns}
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
              className="bg-white dark:bg-surface-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectThumbnail
                project={selectedProject}
                className="w-full"
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
                  {selectedProject.readmeHighlights?.overview || selectedProject.description}
                </p>

                {selectedProject.readmeHighlights?.highlights && selectedProject.readmeHighlights.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.readmeHighlights.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-surface-600 dark:text-surface-400 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3">
                    Technologies
                  </h4>
                  {selectedProject.readmeHighlights?.techDetails && (
                    <p className="text-xs text-surface-500 dark:text-surface-400 leading-relaxed mb-3">
                      {selectedProject.readmeHighlights.techDetails}
                    </p>
                  )}
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

                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-surface-100 dark:border-surface-800">
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
