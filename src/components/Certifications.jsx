import React, { useRef, useState } from "react";
import { FaAward, FaFilePdf, FaMedal, FaCertificate, FaTrophy, FaCode } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiFreecodecamp, SiMicrosoftacademic } from "react-icons/si";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

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

// Holographic 3D Tilt Card
const TiltCard = ({ item, index, setSelectedItem }) => {
  const ref = useRef(null);
  
  // Mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position to rotation angles (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group perspective-[1000px] cursor-pointer"
      onClick={() => setSelectedItem(item)}
    >
      <div 
        className="glass rounded-3xl p-6 backdrop-blur-md border border-gray-700 hover:border-cyan-400/50 transition-colors h-full flex flex-col relative overflow-hidden shadow-2xl"
        style={{ transform: "translateZ(30px)" }} // Pop out effect
      >
        {/* Holographic glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
        
        {/* Animated border gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10`}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {item.featured && (
          <div className="absolute -top-1 -right-1 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-bl-xl rounded-tr-3xl text-xs font-bold shadow-lg flex items-center gap-1">
            <FaMedal /> Featured
          </div>
        )}

        <div className="flex items-start gap-4 mb-6 relative z-10" style={{ transform: "translateZ(40px)" }}>
          <div className={`p-4 ${item.bgColor} rounded-2xl shadow-inner`}>
            <item.Icon className={`text-3xl bg-gradient-to-br ${item.color} bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-cyan-400 font-medium text-sm">
              {item.issuer}
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
          <div className="flex gap-2 flex-wrap">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white shadow-sm`}>
              {item.category}
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-800 text-gray-300 border border-gray-600">
              {item.level}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaCertificate className="text-cyan-500/50" />
            <span>{item.date}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
           <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">Click to view details</span>
           <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity`}>
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

  const displayData = activeTab === "certifications" ? certifications : achievements;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-black mb-6 text-white tracking-tight">
            Hall of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Fame</span>
          </h2>
          
          {/* Futuristic Tab Switcher */}
          <div className="inline-flex bg-gray-900/50 backdrop-blur-xl p-1.5 rounded-full border border-gray-800 shadow-2xl relative">
            <div 
              className={`absolute inset-y-1.5 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-transform duration-500 ease-spring shadow-[0_0_20px_rgba(6,182,212,0.4)] ${activeTab === "certifications" ? "translate-x-0" : "translate-x-full"}`} 
              style={{ width: 'calc(50% - 6px)' }}
            />
            <button 
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors ${activeTab === "certifications" ? "text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("certifications")}
            >
              CERTIFICATIONS
            </button>
            <button 
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors ${activeTab === "achievements" ? "text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("achievements")}
            >
              ACHIEVEMENTS
            </button>
          </div>
        </div>

        {/* Masonry/Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            style={{ perspective: "2000px" }}
          >
            {displayData.map((item, index) => (
              <TiltCard key={item.title} item={item} index={index} setSelectedItem={setSelectedItem} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reused High-End Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="bg-gray-900/90 border border-cyan-400/30 rounded-[2rem] w-full max-w-5xl shadow-[0_0_100px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col lg:flex-row max-h-[90vh] relative"
              initial={{ scale: 0.9, y: 50, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, y: 50, opacity: 0, rotateX: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Left Side: Document Preview */}
              <div className="lg:w-2/3 bg-black/80 relative border-r border-gray-800/50 flex items-center justify-center p-6">
                {selectedItem.link.endsWith('.pdf') ? (
                  <iframe 
                    src={`${selectedItem.link}#toolbar=0`} 
                    className="w-full h-[50vh] lg:h-[80vh] rounded-2xl bg-white shadow-2xl" 
                    title={selectedItem.title}
                  />
                ) : (
                  <img 
                    src={selectedItem.link} 
                    alt={selectedItem.title} 
                    className="max-w-full max-h-[50vh] lg:max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  />
                )}
              </div>

              {/* Right Side: Info Panel */}
              <div className="lg:w-1/3 p-10 flex flex-col relative bg-gradient-to-b from-gray-900 to-black">
                {/* Close Button */}
                <button 
                  className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-red-500/80 transition-all z-10 shadow-lg"
                  onClick={() => setSelectedItem(null)}
                >
                  ✕
                </button>

                <div className="flex-1 mt-8">
                  <div className={`inline-flex p-5 ${selectedItem.bgColor} rounded-3xl mb-8 shadow-inner`}>
                    <selectedItem.Icon className={`text-5xl bg-gradient-to-br ${selectedItem.color} bg-clip-text text-transparent drop-shadow-md`} />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{selectedItem.title}</h3>
                  <p className="text-cyan-400 font-bold text-lg mb-10 tracking-wide uppercase text-sm">{selectedItem.issuer}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-bold">Category</div>
                      <span className={`px-4 py-2 text-sm font-bold rounded-xl bg-gradient-to-r ${selectedItem.color} text-white shadow-lg inline-block`}>
                        {selectedItem.category}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-bold">Outcome / Level</div>
                      <span className="px-4 py-2 text-sm font-bold rounded-xl bg-gray-800 text-white border border-gray-700 shadow-md inline-block">
                        {selectedItem.level}
                      </span>
                    </div>

                    <div className="pt-8 border-t border-gray-800/50">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-gray-500 font-bold uppercase">Status</span>
                        <span className="text-xs text-green-400 font-black tracking-widest">VERIFIED</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden shadow-inner">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${selectedItem.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 text-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2 group"
                >
                  Open Original <FaAward className="group-hover:scale-125 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}