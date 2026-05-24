import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Background glow */}
        <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
        
        {/* Main Logo / Animation Container */}
        <motion.div
          className="relative w-20 h-20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-cyan-400 opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-r-2 border-purple-500 opacity-80"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Center core */}
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-[2px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="mt-8 text-cyan-400 font-mono tracking-widest text-sm uppercase flex items-center gap-1 font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Initializing System
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>.</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>.</motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
