import { motion } from 'framer-motion';
import type React from 'react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
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

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("q2ic3TavT5Sv1CTEP");
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSnackbar({
        isOpen: true,
        message: 'Please fill in all fields.',
        type: 'error',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSnackbar({
        isOpen: true,
        message: 'Please enter a valid email address.',
        type: 'error',
      });
      return;
    }
    

    
    setIsSubmitting(true);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_email: 'davidsyagustin@gmail.com',
        subject: `Portfolio Contact from ${formData.name.trim()}`,
      };

      // Send email using EmailJS (without reCAPTCHA)
      const result = await emailjs.send(
        'service_vdkx6od',
        'template_8u7ryea',
        templateParams,
        'q2ic3TavT5Sv1CTEP'
      );

      console.log('EmailJS result:', result);

      if (result.status === 200 || result.text === 'OK') {
        setSnackbar({
          isOpen: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          type: 'success',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('EmailJS returned non-success status:', result);
        setSnackbar({
          isOpen: true,
          message: 'Failed to send message. Please try again.',
          type: 'error',
        });
      }
          } catch (error) {
        console.error('Error sending email:', error);
        
        // Check for reCAPTCHA error
        if (error instanceof Error && error.message.includes('reCAPTCHA')) {
          setSnackbar({
            isOpen: true,
            message: 'Email service configuration error. Please contact the site administrator.',
            type: 'error',
          });
        } else {
          setSnackbar({
            isOpen: true,
            message: 'Network error. Please check your connection and try again.',
            type: 'error',
          });
        }
        
        // Log additional error details for debugging
        if (error instanceof Error) {
          console.error('Error details:', {
            message: error.message,
            stack: error.stack
          });
        }
      } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Work Together
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">davidsyagustin@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Availability
                    </h4>
                    <p className="text-gray-600">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Snackbar Component */}
                <Snackbar
                  isOpen={snackbar.isOpen}
                  message={snackbar.message}
                  type={snackbar.type}
                  onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
                  duration={5000}
                />
                
                <button 
                  type="submit" 
                  className={`w-full btn btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
