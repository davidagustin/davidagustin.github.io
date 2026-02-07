import { motion } from 'framer-motion';
import type React from 'react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Snackbar from './Snackbar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });

  useEffect(() => {
    try {
      emailjs.init("q2ic3TavT5Sv1CTEP");
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSnackbar({ isOpen: true, message: 'Please fill in all fields.', type: 'error' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSnackbar({ isOpen: true, message: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_email: 'davidsyagustin@gmail.com',
        subject: `Portfolio Contact from ${formData.name.trim()}`,
      };

      const result = await emailjs.send(
        'service_vdkx6od',
        'template_8u7ryea',
        templateParams,
        'q2ic3TavT5Sv1CTEP'
      );

      if (result.status === 200 || result.text === 'OK') {
        setSnackbar({
          isOpen: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSnackbar({ isOpen: true, message: 'Failed to send message. Please try again.', type: 'error' });
      }
    } catch (error) {
      setSnackbar({
        isOpen: true,
        message: 'Something went wrong. Please try again or email me directly.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-surface-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Interested in working together? Send a message or reach out directly.
          </p>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-surface-900 uppercase tracking-wider mb-4">
                  Reach Out
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:davidsyagustin@gmail.com"
                    className="flex items-center gap-3 text-sm text-surface-600 hover:text-surface-900 transition-colors"
                  >
                    <FaEnvelope className="text-surface-400 flex-shrink-0" />
                    davidsyagustin@gmail.com
                  </a>
                  <a
                    href="https://github.com/davidagustin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-surface-600 hover:text-surface-900 transition-colors"
                  >
                    <FaGithub className="text-surface-400 flex-shrink-0" />
                    github.com/davidagustin
                  </a>
                  <a
                    href="https://www.linkedin.com/in/davidsyagustin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-surface-600 hover:text-surface-900 transition-colors"
                  >
                    <FaLinkedin className="text-surface-400 flex-shrink-0" />
                    linkedin.com/in/davidsyagustin
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-surface-900 uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-sm text-surface-500">San Francisco, CA</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-surface-900 uppercase tracking-wider mb-2">
                  Availability
                </h3>
                <p className="text-sm text-surface-500">Open to new opportunities</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-surface-700 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-surface-700 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-surface-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Snackbar
                  isOpen={snackbar.isOpen}
                  message={snackbar.message}
                  type={snackbar.type}
                  onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
                  duration={5000}
                />

                <button
                  type="submit"
                  className={`w-full py-3 px-6 bg-surface-900 text-white text-sm font-semibold rounded-lg hover:bg-surface-800 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
