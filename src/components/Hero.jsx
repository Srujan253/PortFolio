import { motion } from 'framer-motion';
import profile from '../photo/profile.jpg';
// import profile1 from './profile1.jpg';
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24">
      <motion.div
        className="glass max-w-4xl mx-auto p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Photo Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex justify-center items-center">
          <img
            // src={profile1}
            src={profile}
            alt="Srujan H M"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
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
            Front-end Developer and Cyber Security Student 
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
        </div>
      </motion.div>
    </section>
  );
}