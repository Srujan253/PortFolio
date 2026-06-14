import React, { useState } from "react";
import { FaAward, FaFilePdf, FaMedal, FaCertificate, FaTrophy, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiFreecodecamp, SiMicrosoftacademic } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", justifyContent: "center" }}
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
    </motion.div>
  );
};

const certifications = [
  {
    title: "Full Stack Developer",
    issuer: "Winsun Global Tech",
    date: "April 2024",
    Icon: SiFreecodecamp,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779393148/full_stack__winsun_sbqh5p.jpg",
    level: "Professional",
    category: "Development",
    featured: true,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Internet Crime & Cyber Security",
    issuer: "NPTEL",
    date: "Recent",
    Icon: SiUdemy,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779393159/nptel_internet_cybersecurity_lp6nmb.pdf",
    level: "Score: 96%",
    category: "Security",
    featured: true,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Microsoft AI Learning",
    issuer: "Microsoft Learn",
    date: "Aug 2025",
    Icon: SiMicrosoftacademic,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779393190/microsdt_learn_aidevelopment_kdct99.pdf",
    level: "Intermediate",
    category: "AI & Cloud",
    featured: false,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Python Fundamentals",
    issuer: "Course/Certification",
    date: "Recent",
    Icon: FaCode,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779393199/python_basics_hyncge.pdf",
    level: "Fundamentals",
    category: "Programming",
    featured: false,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Hedera Development Course",
    issuer: "Hedera",
    date: "Recent",
    Icon: FaCode,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779393206/hedera_development_uuns23.pdf",
    level: "Certified",
    category: "Blockchain",
    featured: false,
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Typing Speed Certificate",
    issuer: "Coursera",
    date: "June 2024",
    Icon: SiCoursera,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779393167/typing_one_ys2nrg.pdf",
    level: "Certified",
    category: "Skills",
    featured: false,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10",
  },
];

const achievements = [
  {
    title: "Cybersiege National Level CTF",
    issuer: "Alvas",
    date: "Recent",
    Icon: FaTrophy,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779219194/Alvas_ctf_iqrev7.jpg",
    level: "2nd Runner Up",
    category: "Winning",
    featured: true,
    color: "from-yellow-300 to-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Bit N Build Hackathon",
    issuer: "24 Hours Hackathon",
    date: "Recent",
    Icon: FaMedal,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779219194/bit_n_build_ixv25i.jpg",
    level: "Special Recognition",
    category: "Recognition",
    featured: true,
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-500/10",
  },
  {
    title: "Christ Hackathon",
    issuer: "24 Hours Hackathon",
    date: "Recent",
    Icon: FaMedal,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779219199/Christ_hackthon_qy9km2.png",
    level: "Finalist",
    category: "Recognition",
    featured: false,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Codefury 8.0",
    issuer: "24 Hours Hackathon",
    date: "Recent",
    Icon: FaCode,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779219195/Codefrury_hackthon_klslft.pdf",
    level: "Participant",
    category: "Participation",
    featured: false,
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    title: "Hackfest CTF",
    issuer: "Capture The Flag",
    date: "Recent",
    Icon: FaCode,
    link: "https://res.cloudinary.com/duf8kshsz/image/upload/v1779219198/Hackfest_ctf_r0g766.jpg",
    level: "Participant",
    category: "Participation",
    featured: false,
    color: "from-teal-400 to-emerald-500",
    bgColor: "bg-teal-500/10",
  }
];

// Optimized Card without heavy 3D math
const FastCard = ({ item, index, setSelectedItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer h-full"
      onClick={() => setSelectedItem(item)}
    >
      <div className="glass gpu-accelerated rounded-3xl p-6 backdrop-blur-sm border border-gray-800/80 hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden bg-gray-900/40 hover:bg-gray-800/60 shadow-xl">
        
        {/* Animated border gradient placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        {item.featured && (
          <div className="absolute top-0 right-0 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-bl-xl rounded-tr-3xl text-xs font-bold shadow-lg flex items-center gap-1">
            <FaMedal /> Featured
          </div>
        )}

        <div className="flex items-start gap-4 mb-6 relative z-10">
          <div className={`p-4 ${item.bgColor} rounded-2xl`}>
            <item.Icon className={`text-3xl bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-cyan-400/80 font-medium text-sm">
              {item.issuer}
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4 relative z-10">
          <div className="flex gap-2 flex-wrap">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}>
              {item.category}
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-800/80 text-gray-300 border border-gray-700">
              {item.level}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaCertificate className="text-cyan-500/40" />
            <span>{item.date}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between relative z-10">
           <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors font-medium">Click to view details</span>
           <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity`}>
             <FaFilePdf className="text-white text-xs" />
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("achievements");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const activeData = activeTab === "certifications" ? certifications : achievements;
  const INITIAL_LIMIT = 6;
  const displayData = showAll ? activeData : activeData.slice(0, INITIAL_LIMIT);
  const hasMore = activeData.length > INITIAL_LIMIT;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Backgrounds - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] will-change-transform" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] will-change-transform" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl font-black mb-4 text-white tracking-tight">
            Hall of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Fame</span>
          </h2>
          <BlurText 
            text="A showcase of my professional certifications, continuous learning journey, and competitive hackathon wins."
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium"
          />
          
          {/* Futuristic Tab Switcher */}
          <div className="inline-flex bg-gray-900/80 backdrop-blur-md p-1.5 rounded-full border border-gray-800 shadow-xl relative gpu-accelerated">
            <div 
              className={`absolute inset-y-1.5 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-transform duration-300 ease-out ${activeTab === "certifications" ? "translate-x-0" : "translate-x-full"}`} 
              style={{ width: 'calc(50% - 6px)' }}
            />
            <button 
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors ${activeTab === "certifications" ? "text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => { setActiveTab("certifications"); setShowAll(false); }}
            >
              CERTIFICATIONS
            </button>
            <button 
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors ${activeTab === "achievements" ? "text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => { setActiveTab("achievements"); setShowAll(false); }}
            >
              ACHIEVEMENTS
            </button>
          </div>
        </motion.div>

        {/* Optimized Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12"
          >
            {displayData.map((item, index) => (
               <FastCard key={item.title} item={item} index={index} setSelectedItem={setSelectedItem} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More Button */}
        {hasMore && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-transparent border border-cyan-500/50 text-cyan-400 font-bold tracking-wide hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              {showAll ? "See Less" : `Explore More ${activeTab === 'certifications' ? 'Certificates' : 'Achievements'}`}
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="bg-gray-900 border border-cyan-400/30 rounded-[2rem] w-full max-w-5xl shadow-[0_0_80px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col lg:flex-row max-h-[90vh] relative"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Document Preview */}
              <div className="lg:w-2/3 bg-black/90 relative border-b lg:border-b-0 lg:border-r border-gray-800 flex items-center justify-center p-6">
                {selectedItem.link.endsWith('.pdf') ? (
                  <iframe 
                    src={`${selectedItem.link}#toolbar=0`} 
                    className="w-full h-[40vh] lg:h-[80vh] rounded-xl bg-white shadow-xl" 
                    title={selectedItem.title}
                  />
                ) : (
                  <img 
                    src={selectedItem.link} 
                    alt={selectedItem.title} 
                    className="max-w-full max-h-[40vh] lg:max-h-[80vh] object-contain rounded-xl shadow-xl"
                  />
                )}
              </div>

              {/* Right Side: Info Panel */}
              <div className="lg:w-1/3 p-8 lg:p-10 flex flex-col relative bg-gray-950 overflow-y-auto">
                <button 
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-all z-10"
                  onClick={() => setSelectedItem(null)}
                >
                  ✕
                </button>

                <div className="flex-1 mt-4">
                  <div className={`inline-flex p-4 ${selectedItem.bgColor} rounded-2xl mb-6`}>
                    <selectedItem.Icon className={`text-4xl bg-gradient-to-br ${selectedItem.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">{selectedItem.title}</h3>
                  <p className="text-cyan-400 font-bold text-md mb-8 tracking-wide uppercase text-sm">{selectedItem.issuer}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-bold">Category</div>
                      <span className={`px-4 py-2 text-sm font-bold rounded-xl bg-gradient-to-r ${selectedItem.color} text-white inline-block`}>
                        {selectedItem.category}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-bold">Outcome / Level</div>
                      <span className="px-4 py-2 text-sm font-bold rounded-xl bg-gray-800 text-white border border-gray-700 inline-block">
                        {selectedItem.level}
                      </span>
                    </div>

                    <div className="pt-6 border-t border-gray-800/50">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-gray-500 font-bold uppercase">Status</span>
                        <span className="text-xs text-green-400 font-black tracking-widest">VERIFIED</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${selectedItem.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 py-3 text-center text-sm font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-center gap-2 group border border-white/10"
                >
                  Open Original <FaExternalLinkAlt className="group-hover:scale-110 transition-transform text-xs" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}