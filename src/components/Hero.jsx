import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profile from '../photo/profile.jpg';

const TypingEffect = ({ texts, speed = 82, className = "", delay = 0, loopDelay = 3000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const typeText = (textIndex) => {
        const text = texts[textIndex];
        let i = 0;
        const timer = setInterval(() => {
          if (i < text.length) {
            setDisplayText(prev => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(timer);
            // Start next text after delay
            setTimeout(() => {
              setDisplayText('');
              const nextIndex = (textIndex + 1) % texts.length;
              setCurrentTextIndex(nextIndex);
              typeText(nextIndex);
            }, loopDelay);
          }
        }, speed);
      };
      typeText(currentTextIndex);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [texts, speed, delay, loopDelay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="text-cyan-400 animate-pulse">|</span>}
    </span>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="glass max-w-6xl w-full mx-auto p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut"
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            className="flex justify-center md:justify-start order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.img
                src={profile}
                alt="Srujan H M"
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl group-hover:border-cyan-400 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {/* Floating elements around photo */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-300 rounded-full opacity-60"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6 order-2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span 
                className="inline-block text-cyan-400 font-medium text-lg mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mb-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              > 
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                  Srujan H M
                </span>
              </motion.h1>
            </motion.div>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <TypingEffect
                texts={[" Web Developer (React, MERN)", " Data Science & ML Enthusiast"]}
                speed={82}
                className="text-gray-700 dark:text-gray-200"
                delay={1000}
              />
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I build modern websites with elegant design, robust functionality, and top-tier security.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold shadow-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social indicators or scroll hint */}
            <motion.div
              className="flex items-center justify-center md:justify-start pt-6 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
