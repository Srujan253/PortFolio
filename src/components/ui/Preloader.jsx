import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootMessages = [
  "Establishing secure connection...",
  "Initializing neural pathways...",
  "Loading 3D environments...",
  "Compiling shaders...",
  "Bypassing security protocols...",
  "System Ready."
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // The preloader will take exactly 2.5 seconds to reach 100%.
    const duration = 2500;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Easing function for smoother progress increment
      const easeOutQuart = 1 - Math.pow(1 - currentStep / steps, 4);
      const currentProgress = Math.min(Math.floor(easeOutQuart * 100), 100);
      
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onComplete, 600); // Wait a tiny bit at 100% before exiting
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Change messages periodically based on progress
    if (progress < 20) setMessageIndex(0);
    else if (progress < 40) setMessageIndex(1);
    else if (progress < 60) setMessageIndex(2);
    else if (progress < 80) setMessageIndex(3);
    else if (progress < 99) setMessageIndex(4);
    else setMessageIndex(5);
  }, [progress]);

  return (
    <motion.div 
      className="fixed inset-0 z-[99999] bg-[#030712] flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Loading Ring */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-8">
          <motion.svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" stroke="#1f2937" strokeWidth="2" 
            />
            <motion.circle 
              cx="50" cy="50" r="45" 
              fill="none" stroke="#06b6d4" strokeWidth="2" 
              strokeDasharray={283}
              strokeDashoffset={283 - (283 * progress) / 100}
              strokeLinecap="round"
            />
          </motion.svg>
          
          <div className="flex flex-col items-center drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tabular-nums tracking-tighter">
              {progress}<span className="text-2xl">%</span>
            </span>
          </div>
        </div>

        {/* Tech Jargon / Message */}
        <div className="h-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-cyan-400/80 font-mono text-sm tracking-widest uppercase drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]"
            >
              {bootMessages[messageIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Brand */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 text-xs tracking-[0.3em] uppercase font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Srujan H M OS v2.0
      </motion.div>
    </motion.div>
  );
}
