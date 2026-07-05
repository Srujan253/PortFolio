import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Trophy, BookOpen, Star, Calendar, MapPin, X } from 'lucide-react';
import { createPortal } from 'react-dom';

const timeline = [
  {
    id: 0,
    type: 'edu',
    title: 'SSLC (10th Grade)',
    org: 'State Board',
    location: 'Karnataka',
    date: 'Where it all started',
    shortDesc: 'The beginning of the journey. Scored an outstanding 92.48%.',
    made: [],
    learned: ['Foundational Mathematics', 'Science & Logic', 'Core Academics'],
    achievements: ['Secured 92.48% in Board Examinations']
  },
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
    achievements: ['Graduated with High Distinction', 'CGPA: 9.78 / 10']
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
    achievements: ['Improved API load times significantly', 'Successfully delivered MVP ahead of schedule']
  },
  {
    id: 3,
    type: 'edu',
    title: 'B.Tech in Cyber Security',
    org: 'NMAM Institute of Technology',
    location: 'Nitte',
    date: 'July 2024 - Ongoing',
    shortDesc: 'Currently pursuing Bachelor of Technology. CGPA: 8.83',
    made: ['Security-focused web applications', 'Network monitoring scripts'],
    learned: ['Advanced Cybersecurity Concepts', 'Ethical Hacking', 'Cryptography', 'Next.js & Advanced React'],
    achievements: ['Current CGPA: 8.83', 'Active in cybersecurity clubs']
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
    achievements: ['Enabled real-time operations across departments', 'Scaled database architecture for high concurrency']
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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
      onClick={onClose}
      data-lenis-prevent="true"
    >
      <motion.div 
        className="bg-gray-900 border border-cyan-500/30 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl relative"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-red-500 transition-colors z-10"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.type === 'work' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
              {item.type === 'work' ? <Briefcase className="w-7 h-7" /> : <GraduationCap className="w-7 h-7" />}
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white">{item.title}</h2>
              <p className="text-lg text-cyan-400">{item.org}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-10 text-sm text-gray-400 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {item.date}</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {item.location}</div>
          </div>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed border-l-4 border-cyan-500 pl-4">{item.shortDesc}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <DetailSection icon={Code} title="What I Built / Did" items={item.made} />
            <DetailSection icon={BookOpen} title="What I Learned" items={item.learned} />
            <div className="md:col-span-2">
              <DetailSection icon={Trophy} title="Key Achievements" items={item.achievements} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

// ========================================================================
//  MAIN COMPONENT (CINEMATIC TRAIN)
// ========================================================================
export default function Timeline() {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 1. SKY COLOR: Day (Cyan/Blue) -> Sunset (Orange/Pink) -> Night (Dark Navy)
  const skyBackground = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, #0ea5e9, #bae6fd)", // Day
      "linear-gradient(to bottom, #f97316, #db2777)", // Sunset
      "linear-gradient(to bottom, #0f172a, #020617)"  // Night
    ]
  );

  // 2. PARALLAX ELEMENTS (Moving left as we scroll down)
  const cloudsX = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const mountainsX = useTransform(smoothProgress, [0, 1], ["0%", "-100%"]);
  const tracksX = useTransform(smoothProgress, [0, 1], ["0%", "-400%"]);
  const stationsX = useTransform(smoothProgress, [0, 1], ["0%", "-300%"]); // 4 stations

  // 3. TRAIN BOUNCE (Subtle vibration to simulate movement)
  const trainY = useTransform(scrollYProgress, (val) => {
    return Math.sin(val * 200) * 4; // Vibration effect based on scroll
  });

  // 4. DAY TO NIGHT ELEMENTS
  const sunOpacity = useTransform(smoothProgress, [0, 0.4, 0.6], [1, 1, 0]);
  const moonOpacity = useTransform(smoothProgress, [0.4, 0.6, 1], [0, 1, 1]);
  const starsOpacity = useTransform(smoothProgress, [0.5, 0.8, 1], [0, 0.8, 1]);

  return (
    <section id="timeline" className="bg-gray-950 relative">
      
      {/* Desktop Header */}
      <div className="pt-24 container mx-auto px-6 lg:mb-10 absolute top-0 left-0 right-0 z-50 pointer-events-none hidden lg:block">
        <h2 className="text-4xl md:text-6xl font-display font-black text-center tracking-tighter text-white drop-shadow-lg">
          Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Milestones</span>
        </h2>
      </div>

      {/* 
        ============================================================
        MOBILE FALLBACK (< 1024px)
        ============================================================
      */}
      <div className="block lg:hidden container mx-auto px-6 py-24">
        <h2 className="text-4xl font-display font-black text-center mb-16 tracking-tighter text-white">
          Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Milestones</span>
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/50 before:to-transparent">
          {timeline.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-cyan-400 z-10 relative">
                {item.type === 'work' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass border border-white/10 bg-gray-900/60 hover:bg-gray-800/80 transition-colors cursor-pointer" onClick={() => setActiveItem(item)}>
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">{item.date}</span>
                  <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1"><MapPin className="w-3 h-3"/> {item.org}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">{item.shortDesc}</p>
                <span className="text-cyan-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 
        ============================================================
        CINEMATIC TRAIN TIMELINE (DESKTOP > 1024px)
        ============================================================
      */}
      <div ref={containerRef} className="hidden lg:block h-[400vh] relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
          
          {/* 1. SKY */}
          <motion.div className="absolute inset-0 z-0" style={{ background: skyBackground }} />
          
          {/* STARS (Night) */}
          <motion.div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50" style={{ opacity: starsOpacity }} />

          {/* SUN */}
          <motion.div 
            className="absolute top-32 left-32 w-32 h-32 rounded-full bg-yellow-300 shadow-[0_0_100px_rgba(253,224,71,0.8)] z-0" 
            style={{ opacity: sunOpacity }}
          />

          {/* MOON */}
          <motion.div 
            className="absolute top-32 right-32 w-28 h-28 rounded-full bg-gray-200 shadow-[0_0_80px_rgba(255,255,255,0.6)] z-0" 
            style={{ opacity: moonOpacity }}
          />

          {/* 2. MOUNTAINS (Parallax layer 1) */}
          <motion.div 
            className="absolute bottom-32 left-0 w-[400vw] h-96 flex items-end opacity-50 z-10"
            style={{ x: mountainsX }}
          >
            {/* Generate some abstract CSS mountains */}
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[30vw] h-full flex-shrink-0 relative -ml-[10vw]">
                <div 
                  className="absolute bottom-0 w-full h-[150%] bg-gray-900 origin-bottom" 
                  style={{ 
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    height: `${50 + Math.random() * 50}%`
                  }} 
                />
              </div>
            ))}
          </motion.div>

          {/* 3. CLOUDS (Parallax layer 2) */}
          <motion.div 
            className="absolute top-40 left-0 w-[200vw] flex gap-32 z-10 opacity-60"
            style={{ x: cloudsX }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-64 h-20 bg-white/30 rounded-full blur-xl" style={{ marginTop: `${Math.random() * 100}px` }} />
            ))}
          </motion.div>

          {/* 4. THE TRACKS */}
          <div className="absolute bottom-16 w-full h-4 bg-gray-800 z-20 border-t-2 border-gray-600 shadow-xl flex items-center overflow-hidden">
            <motion.div className="w-[400vw] h-1 flex gap-8" style={{ x: tracksX }}>
               {[...Array(200)].map((_, i) => (
                 <div key={i} className="w-8 h-full bg-gray-600" />
               ))}
            </motion.div>
          </div>
          
          {/* 5. THE STATIONS (Milestone Cards sliding past) */}
          <motion.div 
            className="absolute bottom-24 left-0 w-[400vw] h-96 flex items-end z-20 pointer-events-auto"
            style={{ x: stationsX }}
          >
            {/* Padding to start train before first station */}
            <div className="w-[50vw] flex-shrink-0" />

            {timeline.map((item, index) => (
              <div key={item.id} className="w-[100vw] flex-shrink-0 flex flex-col items-center justify-end pb-8 relative group">
                
                {/* Station Pole */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-20 bg-gray-700 rounded-t-lg" />
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-800 border border-gray-600 text-cyan-400 font-bold text-xs rounded shadow-lg whitespace-nowrap">
                  {item.date}
                </div>

                {/* Milestone Card */}
                <div 
                  className="w-96 glass bg-gray-900/80 border border-cyan-500/30 p-6 rounded-2xl shadow-2xl mb-12 hover:-translate-y-4 transition-transform duration-300 cursor-pointer backdrop-blur-md"
                  onClick={() => setActiveItem(item)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {item.type === 'work' ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-cyan-400 text-sm">{item.org}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{item.shortDesc}</p>
                  <button className="text-cyan-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Explore Station <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 6. THE TRAIN (Fixed in center, bouncing) */}
          <motion.div 
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 drop-shadow-2xl text-[100px] leading-none"
            style={{ y: trainY }}
          >
            🚆
            {/* Speed lines effect behind train */}
            <div className="absolute top-1/2 -left-32 w-24 h-1 bg-cyan-400/50 rounded-full blur-sm" />
            <div className="absolute top-1/3 -left-24 w-16 h-1 bg-cyan-400/50 rounded-full blur-sm" />
          </motion.div>

          {/* Ground */}
          <div className="absolute bottom-0 w-full h-16 bg-gray-950 z-10" />

        </div>
      </div>

      <AnimatePresence>
        {activeItem && <RichDataModal item={activeItem} onClose={() => setActiveItem(null)} />}
      </AnimatePresence>
    </section>
  );
}