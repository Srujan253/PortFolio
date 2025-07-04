import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  // Placeholder for EmailJS or Formspree integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING');
    setTimeout(() => setStatus('SUCCESS'), 1200); // Simulate async
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          className="glass rounded-2xl p-10 shadow-2xl flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">Contact</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">Want to work together or have a question? Fill out the form or reach out directly!</p>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-600 transition-transform duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'SENDING'}
            >
              {status === 'SENDING' ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status === 'SUCCESS' && <p className="text-green-600 font-semibold mt-2">Message sent! I'll get back to you soon.</p>}
          </form>
          <div className="flex flex-col items-center gap-2 mt-6">
            <a href="mailto:your@email.com" className="flex items-center gap-2 text-cyan-400 hover:underline"><FaEnvelope /> your@email.com</a>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaLinkedin /></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaTwitter /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 