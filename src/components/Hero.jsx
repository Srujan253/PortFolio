import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24">
      <motion.div
        className="glass max-w-2xl mx-auto p-10 rounded-3xl flex flex-col items-center gap-6 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Hi, I'm Srujan H M
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          FrontEnd Developer and Cyber Security Student 
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I build modern website with design and security.
        </motion.p>
        <motion.div
          className="flex gap-6 mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a href="#projects" className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-bold shadow-lg hover:bg-cyan-600 transition">View Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-gray-900 text-cyan-400 font-bold shadow-lg hover:bg-gray-800 transition">Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
} 