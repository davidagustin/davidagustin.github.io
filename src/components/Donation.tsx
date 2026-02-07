import { motion } from 'framer-motion';
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
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-title mx-auto text-center">Support My Work</h2>
          <p className="text-surface-500 mb-10">
            If you find my projects helpful, consider supporting continued development.
          </p>

          <div className="space-y-4">
            <a
              href="https://buy.stripe.com/fZucN5epreyuchqdtZfnO00"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 bg-surface-900 text-white text-sm font-semibold rounded-lg hover:bg-surface-800 transition-colors"
            >
              Donate via Stripe
            </a>

            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => copyToClipboard(btcAddress, 'BTC')}
                className="flex items-center gap-3 p-4 border border-surface-200 rounded-lg hover:border-surface-300 transition-colors text-left group"
              >
                <FaBitcoin className="text-lg text-surface-400 group-hover:text-[#f7931a] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-surface-900 mb-0.5">Bitcoin</div>
                  <div className="text-[11px] text-surface-400 truncate font-mono">
                    {copiedAddress === 'BTC' ? 'Copied!' : btcAddress}
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(ethAddress, 'ETH')}
                className="flex items-center gap-3 p-4 border border-surface-200 rounded-lg hover:border-surface-300 transition-colors text-left group"
              >
                <FaEthereum className="text-lg text-surface-400 group-hover:text-[#627eea] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-surface-900 mb-0.5">Ethereum</div>
                  <div className="text-[11px] text-surface-400 truncate font-mono">
                    {copiedAddress === 'ETH' ? 'Copied!' : ethAddress}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;
