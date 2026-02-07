import type React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-surface-400 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-3 tracking-tight">David Agustin</h3>
            <p className="text-sm leading-relaxed">
              Full stack developer building modern web applications, educational platforms,
              and AI-powered tools.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-surface-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-surface-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/davidagustin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/davidsyagustin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:davidsyagustin@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-500">
            &copy; {currentYear} David Agustin
          </p>
          <p className="text-xs text-surface-600">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
