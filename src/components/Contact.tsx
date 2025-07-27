import { motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email content
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      
      // Create mailto link
      const mailtoLink = `mailto:davidsyagustin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
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
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Message sent successfully! Your email client should open with the message ready to send.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ There was an error sending your message. Please try again or email me directly at davidsyagustin@gmail.com
                  </div>
                )}
                
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
