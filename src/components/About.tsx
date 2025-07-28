import { motion } from 'framer-motion';
import type React from 'react';

const About: React.FC = () => {
  const technologies = [
    // Frontend Frameworks & Libraries
    { name: 'Next.js', color: 'bg-black text-white' },
    { name: 'React', color: 'bg-blue-600 text-white' },
    { name: 'Angular', color: 'bg-red-600 text-white' },
    { name: 'Vue.js', color: 'bg-green-600 text-white' },
    { name: 'Astro.js', color: 'bg-purple-600 text-white' },
    { name: 'Gatsby', color: 'bg-purple-100 text-purple-700' },
    { name: 'Hugo', color: 'bg-pink-100 text-pink-700' },
    { name: 'SvelteKit', color: 'bg-orange-100 text-orange-700' },
    
    // Languages & Type Safety
    { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'CSS3', color: 'bg-blue-100 text-blue-700' },
    { name: 'Python', color: 'bg-blue-100 text-blue-700' },
    
    // Styling & UI
    { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Material-UI', color: 'bg-blue-600 text-white' },
    { name: 'Lucide React', color: 'bg-gray-100 text-gray-700' },
    { name: 'Lucide Svelte', color: 'bg-gray-100 text-gray-700' },
    { name: 'Google Fonts', color: 'bg-gray-100 text-gray-700' },
    
    // State Management & Routing
    { name: 'Pinia', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Vue Router', color: 'bg-green-100 text-green-700' },
    { name: 'React Hooks', color: 'bg-blue-100 text-blue-700' },
    
    // Build Tools & Development
    { name: 'Vite', color: 'bg-purple-100 text-purple-700' },
    
    // AI/ML & Data Science
    { name: 'Scikit-learn', color: 'bg-orange-100 text-orange-700' },
    { name: 'XGBoost', color: 'bg-green-100 text-green-700' },
    { name: 'LightGBM', color: 'bg-blue-100 text-blue-700' },
    
    // Cloud & Deployment
    { name: 'Vercel', color: 'bg-black text-white' },
    { name: 'Netlify', color: 'bg-green-100 text-green-700' },
    { name: 'Surge.sh', color: 'bg-purple-100 text-purple-700' },
    { name: 'Render', color: 'bg-blue-100 text-blue-700' },
    { name: 'Digital Ocean', color: 'bg-blue-600 text-white' },
    { name: 'AWS Amplify', color: 'bg-orange-100 text-orange-700' },
    { name: 'GitLab Pages', color: 'bg-orange-100 text-orange-700' },
    { name: 'Azure Static Web Apps', color: 'bg-blue-600 text-white' },
    
    // Additional Skills
    { name: 'SEO Optimized', color: 'bg-green-100 text-green-700' },
    { name: 'Responsive Design', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Multi-language Support', color: 'bg-purple-100 text-purple-700' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full-stack developer with expertise in modern
                web technologies, artificial intelligence, and machine learning.
                I love creating innovative solutions that solve real-world
                problems and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With experience across 10+ diverse projects and 50+ technologies including React, Next.js, Node.js, Python, Hugo, and various AI/ML frameworks, I bring ideas to life through clean, efficient, and scalable code. I'm constantly learning and exploring new technologies to stay at the forefront of web development and AI innovation.
              </p>
              
              {/* Technology Chips */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className={`px-3 py-1.5 ${tech.color} rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Key Strengths */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">🚀 Frontend Excellence</h5>
                  <p className="text-sm text-gray-600">Modern React apps with Next.js, TypeScript, and responsive design</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">⚡ Backend Development</h5>
                  <p className="text-sm text-gray-600">Scalable APIs with Node.js, Python, and robust database design</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">🤖 AI Integration</h5>
                  <p className="text-sm text-gray-600">Machine learning models, AI APIs, and intelligent automation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">☁️ Cloud & DevOps</h5>
                  <p className="text-sm text-gray-600">AWS deployment, Docker containers, and CI/CD pipelines</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl">
                {/* Placeholder for profile image or illustration */}
                <div className="flex items-center justify-center h-full text-white text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
