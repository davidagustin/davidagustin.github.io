import type React from 'react';
import { useState } from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';

const Donation: React.FC = () => {
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
    <div className="bg-surface-950 dark:bg-surface-950 border-b border-surface-800 dark:border-surface-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-500 dark:text-surface-500">
            Support my projects
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://buy.stripe.com/fZucN5epreyuchqdtZfnO00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-surface-400 dark:text-surface-400 hover:text-white dark:hover:text-white transition-colors"
            >
              Stripe
            </a>

            <span className="text-surface-700 dark:text-surface-700">|</span>

            <button
              type="button"
              onClick={() => copyToClipboard(btcAddress, 'BTC')}
              className="flex items-center gap-1.5 text-xs text-surface-400 dark:text-surface-400 hover:text-white dark:hover:text-white transition-colors"
            >
              <FaBitcoin className="text-xs" />
              {copiedAddress === 'BTC' ? 'Copied!' : 'BTC'}
            </button>

            <span className="text-surface-700 dark:text-surface-700">|</span>

            <button
              type="button"
              onClick={() => copyToClipboard(ethAddress, 'ETH')}
              className="flex items-center gap-1.5 text-xs text-surface-400 dark:text-surface-400 hover:text-white dark:hover:text-white transition-colors"
            >
              <FaEthereum className="text-xs" />
              {copiedAddress === 'ETH' ? 'Copied!' : 'ETH'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
