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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
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
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#fff_100%)] bg-[length:20px_20px]" style={{backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)'}} />
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 relative z-10">
              <FaMapMarkerAlt className="text-3xl text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Base of Operations</h3>
            <p className="text-gray-400 relative z-10">Earth</p>
            <p className="text-sm text-cyan-500/80 mt-2 font-mono relative z-10">Available for remote work</p>
          </motion.div>
        </motion.div>

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
