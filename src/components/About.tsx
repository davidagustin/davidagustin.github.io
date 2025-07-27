import { motion } from 'framer-motion';
import type React from 'react';

const About: React.FC = () => {
  const technologies = [
    // Core Web Technologies
    { name: 'HTML5', color: 'bg-orange-100 text-orange-700' },
    { name: 'CSS3', color: 'bg-blue-100 text-blue-700' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
    
    // Frontend Framework
    { name: 'React', color: 'bg-blue-100 text-blue-700' },
    
    // Styling
    { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700' },
    
    // Version Control
    { name: 'Git', color: 'bg-orange-100 text-orange-700' },
    { name: 'GitHub', color: 'bg-gray-800 text-white' },
    
    // Design & UX
    { name: 'Responsive Design', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'UI/UX Design', color: 'bg-purple-100 text-purple-700' },
    
    // Additional Skills
    { name: 'Problem Solving', color: 'bg-green-100 text-green-700' },
    { name: 'Clean Code', color: 'bg-blue-100 text-blue-700' },
    { name: 'Debugging', color: 'bg-red-100 text-red-700' },
    { name: 'Performance', color: 'bg-orange-100 text-orange-700' },
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
                Frontend Developer
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate frontend developer with expertise in modern
                web technologies. I love creating beautiful, responsive, and
                user-friendly web applications that provide excellent user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With experience in React and modern CSS frameworks like Tailwind,
                I focus on writing clean, maintainable code and building intuitive
                interfaces. I'm always learning and exploring new ways to improve
                my development skills.
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
                  <h5 className="font-semibold text-gray-800 mb-2">🎨 Frontend Development</h5>
                  <p className="text-sm text-gray-600">Building responsive and interactive web applications with React</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💻 Clean Code</h5>
                  <p className="text-sm text-gray-600">Writing maintainable, well-structured, and efficient code</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">🔧 Problem Solving</h5>
                  <p className="text-sm text-gray-600">Analyzing issues and finding effective solutions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">📱 Responsive Design</h5>
                  <p className="text-sm text-gray-600">Creating websites that work perfectly on all devices</p>
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
