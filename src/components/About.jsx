import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGamepad, FaHeadphones, FaCoffee, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Main Bio - Spans 2 columns */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 glass rounded-3xl p-8 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400" />
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              I am a passionate Full Stack Developer who thrives on turning complex problems into elegant, user-centric solutions. With a strong foundation in modern web technologies and an eye for design, I don't just write code—I build digital experiences. I am constantly exploring new frameworks, optimizing performance, and pushing the boundaries of what's possible on the web.
            </p>
          </motion.div>

          {/* Location / Base */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-8 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors duration-500 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
             {/* Subtle map lines background effect */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#fff_100%)] bg-[length:20px_20px]" style={{backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)'}} />
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 relative z-10">
              <FaMapMarkerAlt className="text-3xl text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Base of Operations</h3>
            <p className="text-gray-400 relative z-10">Earth</p>
            <p className="text-sm text-cyan-500/80 mt-2 font-mono relative z-10">Available for remote work</p>
          </motion.div>

          {/* Quick Facts / Hobbies */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 glass rounded-3xl p-8 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Beyond the Screen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGamepad className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Gaming</h4>
                  <p className="text-gray-400 text-sm">Strategic & Indie</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaHeadphones className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Music</h4>
                  <p className="text-gray-400 text-sm">Synthwave & Lo-Fi</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaCoffee className="text-2xl text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Coffee</h4>
                  <p className="text-gray-400 text-sm">Fueling the code</p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
