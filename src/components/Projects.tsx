import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import type React from 'react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(PROJECTS.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(PROJECTS.length / 3));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(PROJECTS.length / 3) - 1 : prevIndex - 1
    );
  };

  const getCurrentProjects = () => {
    const startIndex = currentIndex * 3;
    return PROJECTS.slice(startIndex, startIndex + 3);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getCurrentProjects().map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <project.icon className="text-6xl text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.githubUrl}
                          className="btn btn-secondary flex-1 text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.liveUrl}
                          className="btn btn-primary flex-1 text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Previous projects"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Next projects"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(PROJECTS.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={() => {
                // You can add functionality to show all projects in a modal or navigate to a full projects page
                console.log('View all projects');
              }}
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
