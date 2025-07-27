import { motion } from 'framer-motion';
import type React from 'react';

const About: React.FC = () => {
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
                problems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With experience in React, Next.js, Node.js, and various AI/ML
                frameworks, I bring ideas to life through clean, efficient, and
                scalable code.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  AI/ML
                </span>
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
