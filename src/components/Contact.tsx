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
  const [showEmailFallback, setShowEmailFallback] = useState(false);
  const [emailContent, setEmailContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create professional email content
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Hi David,

I hope this message finds you well. I came across your portfolio and would like to connect regarding potential opportunities.

Contact Information:
• Name: ${formData.name}
• Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}

---
This message was sent from your portfolio contact form at https://davidagustin.github.io`;
      
      // Create mailto link
      const mailtoLink = `mailto:davidsyagustin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try multiple methods to open email client (works across all browsers)
      let emailOpened = false;
      
      try {
        // Method 1: Direct window.open
        const emailWindow = window.open(mailtoLink, '_blank');
        
        // Method 2: If window.open fails, try location.href
        if (!emailWindow || emailWindow.closed || typeof emailWindow.closed === 'undefined') {
          window.location.href = mailtoLink;
          emailOpened = true;
        } else {
          emailOpened = true;
        }
      } catch (windowError) {
        // Method 3: Fallback to location.href
        window.location.href = mailtoLink;
        emailOpened = true;
      }
      
      // If email client didn't open, show fallback
      setTimeout(() => {
        if (!emailOpened) {
          setEmailContent(body);
          setShowEmailFallback(true);
        }
      }, 1000);
      
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
                    ✅ Perfect! Your email client should now open with a professionally formatted message ready to send. The email includes your contact information and message in a clean, business-friendly format.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ There was an error sending your message. Please try again or email me directly at davidsyagustin@gmail.com
                  </div>
                )}
                
                {/* Email Fallback Modal */}
                {showEmailFallback && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Email Client Not Found</h3>
                        <button
                          onClick={() => setShowEmailFallback(false)}
                          className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                          ×
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Your email client didn't open automatically. Here's your formatted message - you can copy and paste it into your email client:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <div className="mb-2">
                          <strong>To:</strong> davidsyagustin@gmail.com
                        </div>
                        <div className="mb-2">
                          <strong>Subject:</strong> Portfolio Contact from {formData.name}
                        </div>
                        <div className="mb-4">
                          <strong>Message:</strong>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-white p-3 rounded border">
                          {emailContent}
                        </pre>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(emailContent);
                            alert('Email content copied to clipboard!');
                          }}
                          className="btn btn-primary"
                        >
                          Copy to Clipboard
                        </button>
                        <a
                          href={`mailto:davidsyagustin@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(emailContent)}`}
                          className="btn btn-secondary"
                        >
                          Try Mailto Link Again
                        </a>
                      </div>
                    </div>
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
