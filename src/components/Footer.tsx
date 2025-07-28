import { motion } from 'framer-motion';
import type React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">David Agustin</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Full Stack Developer & AI Enthusiast passionate about creating innovative web
                solutions, machine learning applications, and exploring cutting-edge technologies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/davidagustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-xl sm:text-2xl" />
                </a>
                <a
                  href="https://linkedin.com/in/davidsyagustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-xl sm:text-2xl" />
                </a>
                <a
                  href="mailto:davidsyagustin@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaEnvelope className="text-xl sm:text-2xl" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © {currentYear} David Agustin. All rights reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <button
                  type="button"
                  onClick={() => {
                    const privacySection =
                      document.getElementById('privacy-policy');
                    if (privacySection) {
                      privacySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div
            id="privacy-policy"
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Privacy Policy
              </h3>

              <div className="space-y-6 text-gray-300 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Information We Collect
                  </h4>
                  <p className="text-gray-400">
                    This portfolio website is a static site that does not
                    collect personal information. We may use cookies for
                    analytics purposes to understand how visitors interact with
                    the site.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">
                    How We Use Information
                  </h4>
                  <p className="text-gray-400">
                    Any information collected is used solely to improve the
                    website experience and understand visitor behavior. We do
                    not sell, trade, or otherwise transfer your information.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Contact Information
                  </h4>
                  <p className="text-gray-400">
                    If you have any questions about this privacy policy or would
                    like to get in touch, please contact me through the
                    following channels:
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-primary-400" />
                      <span>Email: davidsyagustin@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-400" />
                      <span>Location: San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLinkedin className="text-primary-400" />
                      <span>LinkedIn: linkedin.com/in/davidsyagustin</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Third-Party Services
                  </h4>
                  <p className="text-gray-400">
                    This website may use third-party services such as Google
                    Analytics for website analytics. These services have their
                    own privacy policies.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-500 text-xs">
                    <strong>Last Updated:</strong>{' '}
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
