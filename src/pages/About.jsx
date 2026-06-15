import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaExternalLinkAlt, FaGamepad, FaTimes } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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

const BlurText = ({ text, className }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
  };

  return (
    <motion.p
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const competitiveGames = [
  {
    name: 'Free Fire',
    id: '2431261289',
    image: 'https://res.cloudinary.com/duf8kshsz/image/upload/v1779608629/WhatsApp_Image_2026-05-24_at_1.10.11_PM_mczw2t.jpg',
    link: 'https://freefireinfo.in/',
    borderColor: 'border-orange-500/30 hover:border-orange-500/60',
    glow: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]',
    experience: "A battle royale survivor at heart. Pushing ranks, hitting headshots, and constantly improving my tactical gameplay."
  },
  {
    name: 'Clash Royale',
    id: '#20UPRUCGJ2',
    image: 'https://res.cloudinary.com/duf8kshsz/image/upload/v1779608629/WhatsApp_Image_2026-05-24_at_1.08.12_PM_lfuyh3.jpg',
    link: 'https://royaleapi.com/player/20UPRUCGJ2',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    experience: "Mastering elixir management and precise card placements. Building meta-defying decks to climb the ladder."
  },
  {
    name: 'Chess',
    id: 'Srujan_H_M',
    image: 'https://res.cloudinary.com/duf8kshsz/image/upload/v1779608629/WhatsApp_Image_2026-05-24_at_1.12.24_PM_q80irf.jpg',
    link: 'https://www.chess.com/member/Srujan_H_M',
    borderColor: 'border-gray-400/30 hover:border-gray-400/60',
    glow: 'group-hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]',
    experience: "Calculating lines and dominating the board. I enjoy rapid games and deep strategic mid-game maneuvers."
  },
  {
    name: 'Clash of Clans',
    id: 'Pending ID...',
    image: 'https://via.placeholder.com/300x400/111827/FFFFFF?text=Screenshot+Pending',
    link: null,
    borderColor: 'border-yellow-500/30 hover:border-yellow-500/60',
    glow: 'group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]',
    experience: "Building an impenetrable base and coordinating massive clan wars. Every star matters!"
  }
];

const funGames = [
  {
    name: 'Shadow Fight',
    id: 'Played Offline',
    image: 'https://via.placeholder.com/300x400/111827/a855f7?text=Shadow+Fight',
    link: null,
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    experience: "Enjoying the art of combat. Testing different weapons, mastering timing, and enjoying the fluid animations."
  }
];

const GameCard = ({ game, onSelect }) => (
  <motion.div 
    variants={itemVariants}
    className={`relative group rounded-2xl overflow-hidden border ${game.borderColor} bg-black/40 ${game.glow} transition-all duration-300 flex flex-col cursor-pointer shadow-lg`}
    onClick={() => onSelect(game)}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="h-40 w-full overflow-hidden bg-gray-900 relative">
      <img 
        src={game.image} 
        alt={game.name} 
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
    </div>
    <div className="p-4 flex flex-col flex-grow relative z-10 -mt-10">
      <h4 className="text-xl font-bold text-white mb-1 drop-shadow-md">{game.name}</h4>
      <div className="inline-block bg-gray-800/80 border border-white/10 px-3 py-1 rounded-full text-sm text-cyan-400 font-mono w-fit backdrop-blur-sm">
        {game.id}
      </div>
    </div>
  </motion.div>
);

export default function About() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Profile & Stats */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Profile Photo Bento */}
            <motion.div variants={itemVariants} className="glass rounded-[2rem] p-8 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors flex flex-col items-center relative overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur-xl opacity-40 animate-pulse" />
                <img 
                  src="https://res.cloudinary.com/duf8kshsz/image/upload/v1779219766/PLACEMENT_PIC2_ckncvk.jpg" 
                  alt="Srujan"
                  className="w-full h-full rounded-full object-cover border-4 border-gray-800 relative z-10 shadow-2xl"
                />
              </div>
              <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-6 z-10 drop-shadow-md">Srujan</h3>
              
              <div className="w-full flex flex-col gap-3 z-10">
                <div className="flex justify-between items-center bg-gray-950/80 px-5 py-3.5 rounded-xl border border-white/5 shadow-inner">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Score</span>
                  <span className="text-cyan-400 font-black">CGPA 8.55</span>
                </div>
                <div className="flex justify-between items-center bg-gray-950/80 px-5 py-3.5 rounded-xl border border-white/5 shadow-inner">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Year</span>
                  <span className="text-cyan-400 font-black">3rd Year</span>
                </div>
                <div className="flex justify-between items-center bg-gray-950/80 px-5 py-3.5 rounded-xl border border-white/5 shadow-inner">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">College</span>
                  <span className="text-cyan-400 font-black">NMAMIT</span>
                </div>
              </div>
            </motion.div>

            {/* Info Bento */}
            <motion.div variants={itemVariants} className="glass rounded-[2rem] p-6 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors flex flex-col gap-4 shadow-xl">
               <div className="flex items-center gap-4 bg-gray-950/80 px-5 py-4 rounded-xl border border-white/5 shadow-inner">
                 <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                 <span className="text-gray-300 font-medium tracking-wide">Karnataka, India</span>
               </div>
               <div className="flex items-center gap-4 bg-gray-950/80 px-5 py-4 rounded-xl border border-white/5 shadow-inner">
                 <FaGraduationCap className="text-blue-400 text-xl" />
                 <span className="text-gray-300 font-medium tracking-wide">Born 20-10-2005</span>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Overview & Education */}
          <motion.div 
            className="lg:col-span-8 flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Overview Bento */}
            <motion.div variants={itemVariants} className="glass rounded-[2rem] p-8 md:p-10 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
              <h3 className="text-3xl font-black text-cyan-400 mb-6 drop-shadow-md">Overview</h3>
              <BlurText 
                text="I am an aspiring cybersecurity professional and full-stack developer, currently pursuing my B.Tech at NMAMIT. With a diploma in Full Stack Web Development and an ongoing internship at Vill Design Co. Ltd. (Japan), I build secure, high-performance applications that bridge elegant UIs with robust APIs. My goal is to craft digital experiences that are solid and performant."
                className="text-gray-300 leading-relaxed text-[1.1rem] relative z-10 mb-8 font-medium"
              />
              
              {/* Languages */}
              <div className="flex flex-wrap gap-3 z-10 relative mt-4">
                <span className="bg-gray-950/80 border border-white/5 px-5 py-2.5 rounded-full text-sm shadow-inner"><span className="text-gray-400">English</span> <span className="text-cyan-400 font-bold ml-2">Fluent</span></span>
                <span className="bg-gray-950/80 border border-white/5 px-5 py-2.5 rounded-full text-sm shadow-inner"><span className="text-gray-400">Kannada</span> <span className="text-cyan-400 font-bold ml-2">Native</span></span>
                <span className="bg-gray-950/80 border border-white/5 px-5 py-2.5 rounded-full text-sm shadow-inner"><span className="text-gray-400">Hindi</span> <span className="text-cyan-400 font-bold ml-2">Proficient</span></span>
                <span className="bg-gray-950/80 border border-white/5 px-5 py-2.5 rounded-full text-sm shadow-inner"><span className="text-gray-400">Japanese</span> <span className="text-blue-400 font-bold ml-2">Beginner</span></span>
              </div>
            </motion.div>

            {/* Education Title */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2 mb-2 pl-2">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              <h3 className="text-2xl font-black text-white tracking-wide drop-shadow-md">Education</h3>
            </motion.div>

            {/* Education Bento 1 */}
            <motion.div variants={itemVariants} className="glass rounded-[2rem] p-6 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-lg group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform">
                  <span className="text-2xl drop-shadow-md">👑</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">B.Tech Cybersecurity</h4>
                  <p className="text-gray-400 font-medium">NMAMIT, Nitte</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <span className="bg-gray-950/80 border border-white/5 px-5 py-2.5 rounded-xl text-sm font-bold text-gray-300 text-center shadow-inner">2024–Ongoing</span>
                <span className="bg-cyan-500/10 border border-cyan-500/20 px-5 py-2.5 rounded-xl text-sm font-black text-cyan-400 text-center shadow-[0_0_10px_rgba(6,182,212,0.1)]">8.55 CGPA</span>
              </div>
            </motion.div>

            {/* Education Bento 2 */}
            <motion.div variants={itemVariants} className="glass rounded-[2rem] p-6 border border-white/10 bg-gray-900/40 hover:bg-gray-800/60 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-lg group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform">
                  <span className="text-2xl drop-shadow-md">🏆</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-1 group-hover:text-blue-300 transition-colors">Diploma Full Stack Dev</h4>
                  <p className="text-gray-400 font-medium">SDM Polytechnic, Ujire</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <span className="bg-gray-950/80 border border-white/5 px-5 py-2.5 rounded-xl text-sm font-bold text-gray-300 text-center shadow-inner">Ended 2024</span>
                <span className="bg-blue-500/10 border border-blue-500/20 px-5 py-2.5 rounded-xl text-sm font-black text-blue-400 text-center shadow-[0_0_10px_rgba(59,130,246,0.1)]">9.78 CGPA</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Gaming Profiles Section */}
        <motion.div
          className="glass rounded-3xl p-8 border border-white/10 bg-gray-900/40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
            <FaGamepad className="text-3xl text-purple-400" />
            <h3 className="text-3xl font-bold text-white text-center">Gaming Profile</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <h4 className="text-xl font-bold text-gray-200 uppercase tracking-widest text-sm">Competitive</h4>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {competitiveGames.map((game) => (
                  <GameCard key={game.name} game={game} onSelect={setSelectedGame} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h4 className="text-xl font-bold text-gray-200 uppercase tracking-widest text-sm">Fun</h4>
              </motion.div>
              <div className="grid grid-cols-1 gap-4">
                {funGames.map((game) => (
                  <GameCard key={game.name} game={game} onSelect={setSelectedGame} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pop-up Modal for Game Details */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGame(null)}
          >
            <motion.div 
              className={`bg-gray-900 border ${selectedGame.borderColor} rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative`}
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 z-20 backdrop-blur-md transition-colors"
                onClick={() => setSelectedGame(null)}
              >
                <FaTimes />
              </button>

              <div className="w-full h-64 relative">
                <img src={selectedGame.image} alt={selectedGame.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6 relative z-10 -mt-16">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{selectedGame.name}</h3>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gray-800 border border-white/10 px-4 py-1.5 rounded-full text-cyan-400 font-mono font-bold">
                    ID: {selectedGame.id}
                  </span>
                </div>

                <div className="mb-6 bg-gray-800/50 p-4 rounded-2xl border border-white/5">
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">My Experience</h4>
                  <p className="text-gray-200 leading-relaxed">
                    {selectedGame.experience}
                  </p>
                </div>

                {selectedGame.link ? (
                  <a 
                    href={selectedGame.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${selectedGame.color || 'from-cyan-500/20 to-blue-500/20'} hover:opacity-80 text-white rounded-xl border border-white/10 transition-all font-bold text-lg`}
                  >
                    View Stats / Profile <FaExternalLinkAlt className="text-sm" />
                  </a>
                ) : (
                  <button 
                    disabled
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800/50 text-gray-500 rounded-xl border border-gray-700/50 font-bold text-lg cursor-not-allowed"
                  >
                    No Public Web Tracker
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
