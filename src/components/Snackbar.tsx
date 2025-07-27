import { motion, AnimatePresence } from 'framer-motion';
import type React from 'react';
import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

interface SnackbarProps {
  isOpen: boolean;
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Snackbar: React.FC<SnackbarProps> = ({
  isOpen,
  message,
  type,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500" />;
      case 'error':
        return <FaExclamationCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800',
          icon: 'text-green-500',
        };
      case 'error':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          icon: 'text-red-500',
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-800',
          icon: 'text-gray-500',
        };
    }
  };

  const styles = getStyles();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.3 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border ${styles.bg} ${styles.border} ${styles.text} max-w-md mx-4`}
          >
            <div className="flex-shrink-0 text-xl">
              {getIcon()}
            </div>
            <div className="flex-1 text-sm font-medium">
              {message}
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close notification"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Snackbar; 