import type React from 'react';
import { useState } from 'react';
import { FaBitcoin, FaEthereum, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const btcAddress = 'bc1qkq0g79l2c7s33h28qlevt7jffxajcd3';
  const ethAddress = '0x846a4460455f9db3c0b3cd1e0e7d1070288e88f2';

  const copyToClipboard = (address: string, label: string) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedAddress(label);
      setTimeout(() => setCopiedAddress(null), 2000);
    }).catch(() => {});
  };

  return (
    <footer className="bg-surface-950 text-surface-400 py-16 dark:border-t dark:border-surface-800">
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

        {/* Support strip */}
        <div className="border-t border-surface-800 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-surface-500">
            Support my projects
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://buy.stripe.com/fZucN5epreyuchqdtZfnO00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-surface-400 hover:text-white transition-colors"
            >
              Stripe
            </a>
            <span className="text-surface-700">|</span>
            <button
              type="button"
              onClick={() => copyToClipboard(btcAddress, 'BTC')}
              className="flex items-center gap-1.5 text-xs text-surface-400 hover:text-white transition-colors"
            >
              <FaBitcoin className="text-xs" />
              {copiedAddress === 'BTC' ? 'Copied!' : 'BTC'}
            </button>
            <span className="text-surface-700">|</span>
            <button
              type="button"
              onClick={() => copyToClipboard(ethAddress, 'ETH')}
              className="flex items-center gap-1.5 text-xs text-surface-400 hover:text-white transition-colors"
            >
              <FaEthereum className="text-xs" />
              {copiedAddress === 'ETH' ? 'Copied!' : 'ETH'}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-surface-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
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
