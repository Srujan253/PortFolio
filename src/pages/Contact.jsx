import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaHackerrank, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [status, setStatus] = useState(''); // '', 'SENDING', 'SUCCESS', 'FAILED'
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');

    emailjs.sendForm(
      'service_hrnleuw',    // Service id
      'template_cmn7kcy',   // Template id
      form.current,
      'm5ZBrgleEEuGfDYJu'   // Public key
    ).then(() => {
      setStatus('SUCCESS');
      setTimeout(() => setStatus(''), 5000); // Reset after 5s
    }).catch((error) => {
      console.error(error);
      setStatus('FAILED');
      setTimeout(() => setStatus(''), 5000);
    });

    e.target.reset();
  };

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Srujan253", color: "hover:bg-gray-800 hover:border-gray-500", iconColor: "text-white" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/srujan-h-m-a51940321/", color: "hover:bg-blue-900/40 hover:border-blue-500", iconColor: "text-blue-500" },
    { name: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/u/SrujanHM/", color: "hover:bg-yellow-900/40 hover:border-yellow-500", iconColor: "text-yellow-500" },
    { name: "HackerRank", icon: <FaHackerrank />, url: "https://www.hackerrank.com/profile/srujanhm135", color: "hover:bg-green-900/40 hover:border-green-500", iconColor: "text-green-500" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-950 min-h-screen flex items-center">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether it's a project proposal, an architecture discussion, or just a friendly hello—my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Pane: Connect & Discover */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center glass p-10 rounded-[2.5rem] border border-white/5 bg-gray-900/30 relative overflow-hidden shadow-2xl"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something <span className="text-cyan-400">Extraordinary.</span></h3>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                I am actively seeking opportunities to collaborate on complex systems, build scalable web architectures, and solve challenging engineering problems. Connect with me across the web.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group ${social.color}`}
                  >
                    <div className={`text-3xl ${social.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <span className="text-white font-semibold tracking-wide">{social.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Direct Email</p>
                  <a href="mailto:srujanhm135@gmail.com" className="text-white text-lg font-medium hover:text-cyan-400 transition-colors">
                    srujanhm135@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Pane: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-10 rounded-[2.5rem] border border-gray-800 bg-gray-900/60 backdrop-blur-xl relative shadow-2xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FaPaperPlane className="text-cyan-500" /> Send a Transmission
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="peer w-full px-5 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white transition-colors pt-6"
                />
                <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 font-medium pointer-events-none">
                  Your Designation / Name
                </label>
              </div>

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  className="peer w-full px-5 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white transition-colors pt-6"
                />
                <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 font-medium pointer-events-none">
                  Return Comm Link (Email)
                </label>
              </div>

              <div className="group relative">
                <textarea
                  name="message"
                  placeholder=" "
                  required
                  rows={5}
                  className="peer w-full px-5 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white transition-colors pt-6 resize-none"
                />
                <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 font-medium pointer-events-none">
                  Encrypted Message...
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`group relative w-full py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 ${
                  status === 'SENDING' 
                  ? 'bg-gray-800 text-gray-400 cursor-wait' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]'
                }`}
              >
                {/* Button loading animation */}
                {status === 'SENDING' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                )}
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'SENDING' ? 'Transmitting...' : 'Initiate Sequence'}
                </span>
              </button>

              {/* Status Indicators */}
              {status === 'SUCCESS' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/20"
                >
                  <FaCheckCircle className="text-xl" />
                  <span className="font-semibold">Transmission successful. I'll respond shortly.</span>
                </motion.div>
              )}
              {status === 'FAILED' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                >
                  <FaExclamationCircle className="text-xl" />
                  <span className="font-semibold">Transmission failed. Please check network and try again.</span>
                </motion.div>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
