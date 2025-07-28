import { motion } from 'framer-motion';
import type React from 'react';
import { useState, useMemo } from 'react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(PROJECTS.map(project => project.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Get unique technologies (without version numbers)
  const technologies = useMemo(() => {
    const allTechnologies = PROJECTS.flatMap(project => 
      project.technologies.map(tech => {
        // Remove version numbers (e.g., "Next.js 15" -> "Next.js")
        return tech.replace(/\s+\d+(\.\d+)*$/, '');
      })
    );
    const uniqueTechnologies = [...new Set(allTechnologies)];
    return ['All', ...uniqueTechnologies.sort()];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = PROJECTS.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      
      const matchesTechnology = selectedTechnology === 'All' || 
        project.technologies.some(tech => 
          tech.replace(/\s+\d+(\.\d+)*$/, '').toLowerCase() === selectedTechnology.toLowerCase()
        );
      
      return matchesSearch && matchesCategory && matchesTechnology;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedTechnology, sortBy]);

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
          
          {/* Search and Filter Controls */}
          <div className="mb-8 space-y-4">
            {/* Search Input */}
            <div className="max-w-md">
              <input
                type="text"
                placeholder="Search projects, technologies, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="name">Name (A-Z)</option>
                <option value="category">Category</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
            
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category:</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Technology Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technology:</label>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTechnology(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTechnology === tech
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Results Count */}
            <div className="text-gray-600 text-sm">
              Showing {filteredProjects.length} of {PROJECTS.length} projects
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        className="btn btn-secondary flex-1 text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.githubUrl.includes('gitlab.com') ? 'GitLab' : 'GitHub'}
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
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg mb-2">
                No projects found matching your search criteria
              </div>
              <div className="text-gray-400 text-sm">
                Try adjusting your search term or category filter
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
