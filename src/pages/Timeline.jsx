import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Trophy, BookOpen, Star, Calendar, MapPin, Fish, X } from 'lucide-react';

const timeline = [
  {
    id: 1,
    type: 'edu',
    title: 'Diploma in Full Stack Development',
    org: 'SDM Polytechnic',
    location: 'Ujire',
    date: 'June 2021 - June 2024',
    shortDesc: 'Graduated with high distinction. CGPA: 9.78',
    made: ['Foundational static websites', 'Database Management schemas', 'Several academic web projects'],
    learned: ['HTML/CSS/JavaScript', 'C & C++', 'Basic Database Management', 'Core Computer Science Principles'],
    achievements: ['Graduated with High Distinction', 'CGPA: 9.78 / 10'],
    image: null
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'Winsun Global Tech',
    location: 'Nagarbhavi, Bangalore',
    date: 'Jan 2024 - Apr 2024',
    shortDesc: 'Designed MERN tech blogging platform with JWT authentication, RBAC.',
    made: ['MERN Tech Blogging Platform', 'Custom Authentication System with JWT', 'Role-Based Access Control (RBAC)'],
    learned: ['MongoDB, Express.js, React, Node.js', 'Advanced API optimization techniques', 'State Management'],
    achievements: ['Improved API load times significantly', 'Successfully delivered MVP ahead of schedule'],
    image: null
  },
  {
    id: 3,
    type: 'edu',
    title: 'B.Tech in Cyber Security',
    org: 'NMAM Institute of Technology',
    location: 'Nitte',
    date: 'July 2024 - Ongoing',
    shortDesc: 'Currently pursuing Bachelor of Technology. CGPA: 8.55',
    made: ['Security-focused web applications', 'Network monitoring scripts'],
    learned: ['Advanced Cybersecurity Concepts', 'Ethical Hacking', 'Cryptography', 'Next.js & Advanced React'],
    achievements: ['Current CGPA: 8.55', 'Active in cybersecurity clubs'],
    image: null
  },
  {
    id: 4,
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'Vill Design Co. Limited',
    location: 'Japan (Remote)',
    date: 'Feb 2025 - Present',
    shortDesc: 'Developed Contest Scoring System & Reception Management System using MERN stack.',
    made: ['Contest Scoring System', 'Reception Management System', 'Real-time Operations Dashboards'],
    learned: ['Neon PostgreSQL', 'Real-time WebSocket integrations', 'Remote international collaboration', 'Advanced MERN patterns'],
    achievements: ['Enabled real-time operations across departments', 'Scaled database architecture for high concurrency'],
    image: null
  }
];

const DetailSection = ({ icon: Icon, title, items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-6">
      <h4 className="flex items-center gap-2 text-cyan-300 font-semibold mb-3">
        <Icon className="w-5 h-5" /> {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="text-cyan-500 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ========================================================================
//  RICH DATA MODAL
// ========================================================================
const RichDataModal = ({ item, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        className="w-full max-w-5xl max-h-[90vh] glass rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10 overflow-y-auto custom-scrollbar relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header & Image */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:border-r border-white/5 lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
              {item.type === 'work' ? <Briefcase className="w-4 h-4"/> : <GraduationCap className="w-4 h-4"/>}
              {item.type === 'work' ? 'Experience' : 'Education'}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white leading-tight mb-2">{item.title}</h2>
              <h3 className="text-xl text-cyan-400 font-medium mb-4">{item.org}</h3>
              
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  {item.date}
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  {item.location}
                </div>
              </div>
            </div>

            <div className="w-full aspect-video lg:aspect-square bg-gray-900/80 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-gray-600 shadow-inner overflow-hidden relative group mt-auto">
              {item.image ? (
                <img src={item.image} alt={item.org} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <>
                  <Star className="w-8 h-8 mb-2 opacity-20" />
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-center px-4">Photo Placeholder</span>
                </>
              )}
            </div>
          </div>

          {/* Rich Details */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <DetailSection icon={Code} title="What I Made" items={item.made} />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
            <DetailSection icon={BookOpen} title="What I Learned" items={item.learned} />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
            <DetailSection icon={Trophy} title="Achievements" items={item.achievements} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ========================================================================
//  DESKTOP FISH VOYAGE (Zig Zag Info Bubbles)
// ========================================================================
const FishVoyageTimeline = () => {
  const targetRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring physics to the scroll progress for buttery smooth traversal
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // 4 items = 300vw movement required.
  const trackX = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);
  // Line grows perfectly underneath the fish
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "75%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] hidden lg:block bg-gray-950 gpu-accelerated">
      
      {/* Modals are rendered outside the scrolling context */}
      <AnimatePresence>
        {selectedItem && (
          <RichDataModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center gpu-accelerated">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none" />

        {/* The Swimming Fish (Fixed in center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div 
            animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-16 h-16 bg-gray-900 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] z-30 relative"
          >
            {/* The Fish icon - pointing left as requested */}
            <div className="flex items-center justify-center">
              <Fish className="w-8 h-8" />
            </div>
            {/* Bubbles behind the fish */}
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.5], x: -20, y: -10 }} transition={{ repeat: Infinity, duration: 2 }} className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan-400/50" />
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1.5], x: -30, y: 10 }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} className="absolute left-0 bottom-4 w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
          </motion.div>
        </div>

        {/* The Moving Track */}
        <motion.div style={{ x: trackX }} className="w-[400vw] h-full relative flex items-center gpu-accelerated">
          
          {/* Dashed Base Line */}
          <div className="absolute top-1/2 left-[50vw] w-[300vw] h-1 border-t-2 border-dashed border-gray-800 z-10" />
          
          {/* Solid Glowing Progress Line */}
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute top-1/2 left-[50vw] h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 origin-left" 
          />

          {/* The Destination Info Bubbles (Zig-Zag) */}
          {timeline.map((item, idx) => {
            // Zig zag logic: even index above line, odd index below line
            const isAbove = idx % 2 === 0;

            return (
              <div key={item.id} className="w-[100vw] h-full relative flex flex-col items-center justify-center">
                
                {/* Visual Waypoint on the Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-950 border-4 border-gray-800 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                </div>

                {/* Connecting stem from bubble to line */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-800 border-l border-dashed border-gray-700 z-0 ${isAbove ? 'bottom-1/2 h-24' : 'top-1/2 h-24'}`} />

                {/* Info Bubble Card */}
                <motion.div 
                  initial={{ opacity: 0, y: isAbove ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-10% -30% -10% -30%" }}
                  className={`absolute left-1/2 -translate-x-1/2 w-[350px] cursor-pointer group z-20 ${isAbove ? 'bottom-[calc(50%+6rem)]' : 'top-[calc(50%+6rem)]'}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shrink-0">
                        {item.type === 'work' ? <Briefcase className="w-5 h-5"/> : <GraduationCap className="w-5 h-5"/>}
                      </div>
                      <div className="text-sm font-bold tracking-widest text-cyan-500">
                        {item.date.split(' - ')[0]}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{item.org}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{item.title}</p>
                    
                    <div className="mt-4 text-xs font-semibold text-cyan-500 uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                      Click to explore <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Chevron for the "Click to explore" link
const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);


// ========================================================================
//  MAIN EXPORT
// ========================================================================
export default function Timeline() {
  return (
    <section id="timeline" className="bg-gray-950 relative">
      <div className="pt-24 container mx-auto px-6 mb-16 lg:mb-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 lg:hidden">Journey & Milestones</h2>
      </div>

      {/* MOBILE FALLBACK (Vertical Stack, < 1024px) */}
      <div className="lg:hidden container mx-auto px-4 space-y-8 pb-24">
        {timeline.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/50 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shrink-0">
                {item.type === 'work' ? <Briefcase /> : <GraduationCap />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-cyan-400 text-sm font-medium">{item.org}</p>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-6 border-t border-white/5 pt-6">
              <DetailSection icon={Code} title="What I Made" items={item.made} />
              <DetailSection icon={BookOpen} title="What I Learned" items={item.learned} />
              <DetailSection icon={Trophy} title="Achievements" items={item.achievements} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP VOYAGE TIMELINE */}
      <FishVoyageTimeline />

    </section>
  );
}