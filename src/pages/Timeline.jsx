import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Trophy, BookOpen, Star, Calendar, MapPin } from 'lucide-react';

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
    image: null // placeholder for later
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'Winsun Global Tech',
    location: 'Nagarbhavi, Bangalore',
    date: 'Jan 2024 - Apr 2024',
    shortDesc: 'Designed MERN tech blogging platform with JWT authentication, RBAC, and built highly optimized RESTful APIs.',
    made: ['MERN Tech Blogging Platform', 'Custom Authentication System with JWT', 'Role-Based Access Control (RBAC)'],
    learned: ['MongoDB, Express.js, React, Node.js', 'Advanced API optimization techniques', 'State Management'],
    achievements: ['Improved API load times significantly', 'Successfully delivered MVP ahead of schedule'],
    image: null // placeholder
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
    image: null // placeholder
  },
  {
    id: 4,
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'Vill Design Co. Limited',
    location: 'Japan (Remote)',
    date: 'Feb 2025 - Present',
    shortDesc: 'Developed Contest Scoring System & Reception Management System using MERN stack with Neon PostgreSQL.',
    made: ['Contest Scoring System', 'Reception Management System', 'Real-time Operations Dashboards'],
    learned: ['Neon PostgreSQL', 'Real-time WebSocket integrations', 'Remote international collaboration', 'Advanced MERN patterns'],
    achievements: ['Enabled real-time operations across departments', 'Scaled database architecture for high concurrency'],
    image: null // placeholder
  }
];

// Reusable components for the Sticky Preview
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

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);
  const containerRef = useRef(null);
  
  // Track scroll position to determine active item on desktop
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      // We calculate which element is currently crossing the center of the screen
      const elements = document.querySelectorAll('.timeline-node');
      let currentActive = 0;
      let minDistance = Infinity;
      
      const centerY = window.innerHeight / 2;
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - centerY);
        if (distance < minDistance) {
          minDistance = distance;
          currentActive = index;
        }
      });
      
      if (currentActive !== activeItem) {
        setActiveItem(currentActive);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

  const activeData = timeline[activeItem];

  return (
    <section id="timeline" className="py-24 bg-gray-950 relative" ref={containerRef}>
      <div className="container mx-auto px-6 mb-16 md:mb-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 md:hidden">Experience & Education</h2>
      </div>

      {/* MOBILE FALLBACK (Vertical Stack, < 768px) */}
      <div className="md:hidden container mx-auto px-4 space-y-8">
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

      {/* DESKTOP SPLIT SCREEN (>= 768px) */}
      <div className="hidden md:flex relative max-w-7xl mx-auto items-start">
        
        {/* Left Side: Scrolling Timeline Nodes */}
        <div className="w-1/2 py-[30vh] pl-8 pr-12 lg:pl-16 lg:pr-16 space-y-[40vh]">
          {timeline.map((item, idx) => (
            <div 
              key={item.id} 
              className={`timeline-node transition-all duration-700 ease-out cursor-pointer ${activeItem === idx ? 'opacity-100 scale-105' : 'opacity-30 scale-95 hover:opacity-60'}`}
              onClick={() => {
                // Smooth scroll to this item
                const nodes = document.querySelectorAll('.timeline-node');
                if(nodes[idx]) {
                  nodes[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 shrink-0 ${activeItem === idx ? 'bg-cyan-900/50 border-cyan-400 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]' : 'bg-gray-900 border-gray-800 text-gray-600'}`}>
                   {item.type === 'work' ? <Briefcase className="w-8 h-8" /> : <GraduationCap className="w-8 h-8" />}
                </div>
                <div>
                  <div className="text-sm font-bold tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </div>
                  <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeItem === idx ? 'text-white' : 'text-gray-400'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-lg mt-1 transition-colors duration-500 ${activeItem === idx ? 'text-cyan-400' : 'text-gray-600'}`}>
                    {item.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Preview Panel */}
        <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-8 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none" />
          
          <motion.div 
            key={activeItem} // Trigger re-animation when activeItem changes
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-[85vh] glass rounded-3xl border border-white/10 shadow-2xl p-8 overflow-y-auto custom-scrollbar relative z-10"
          >
            {/* Header / Image Placeholder */}
            <div className="flex flex-col xl:flex-row gap-6 mb-8 border-b border-white/5 pb-8">
              <div className="w-full xl:w-48 h-48 bg-gray-900/80 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-gray-600 shadow-inner shrink-0 overflow-hidden relative group">
                {activeData.image ? (
                  <img src={activeData.image} alt={activeData.org} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <>
                    <Star className="w-8 h-8 mb-2 opacity-20" />
                    <span className="text-xs tracking-widest uppercase font-semibold text-center px-4">Photo Placeholder</span>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{activeData.title}</h2>
                <h3 className="text-xl text-cyan-400 font-medium mb-4">{activeData.org}</h3>
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    {activeData.date}
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    {activeData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Rich Content Details */}
            <div className="space-y-2 pb-6">
              <DetailSection icon={Code} title="What I Made" items={activeData.made} />
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
              <DetailSection icon={BookOpen} title="What I Learned" items={activeData.learned} />
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
              <DetailSection icon={Trophy} title="Achievements" items={activeData.achievements} />
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}