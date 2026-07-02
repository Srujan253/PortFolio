import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Trophy, BookOpen, Star, Calendar, MapPin, ChevronRight } from 'lucide-react';

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
    shortDesc: 'Designed MERN tech blogging platform with JWT authentication, RBAC, and built highly optimized RESTful APIs.',
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
    shortDesc: 'Developed Contest Scoring System & Reception Management System using MERN stack with Neon PostgreSQL.',
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

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);
  const activeData = timeline[activeItem];

  return (
    <section id="timeline" className="py-24 bg-gray-950 relative">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">Journey & Milestones</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto hidden md:block">
          Select a waypoint on the roadmap below to explore my experiences, technical learnings, and major achievements.
        </p>
      </div>

      {/* MOBILE FALLBACK (Vertical Stack, < 1024px) */}
      <div className="lg:hidden container mx-auto px-4 space-y-8">
        {timeline.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/50 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shrink-0">
                {item.type === 'work' ? <Briefcase /> : <GraduationCap />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-cyan-400 text-sm font-medium">{item.org}</p>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-6 border-t border-white/5 pt-6 relative z-10">
              <DetailSection icon={Code} title="What I Made" items={item.made} />
              <DetailSection icon={BookOpen} title="What I Learned" items={item.learned} />
              <DetailSection icon={Trophy} title="Achievements" items={item.achievements} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP INTERACTIVE ROADMAP (>= 1024px) */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 gap-12 items-start min-h-[600px]">
        
        {/* LEFT PANE: The Roadmap */}
        <div className="w-1/3 relative py-8 pl-4">
          {/* Connecting Line */}
          <div className="absolute left-10 top-12 bottom-12 w-0.5 bg-gray-800" />
          
          <div className="space-y-12 relative z-10">
            {timeline.map((item, idx) => {
              const isActive = activeItem === idx;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveItem(idx)}
                  className={`relative flex items-center gap-6 cursor-pointer group transition-all duration-300 ${isActive ? 'scale-105' : 'hover:translate-x-2'}`}
                >
                  {/* Glowing Node */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10 ${isActive ? 'bg-cyan-950 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'bg-gray-900 border-gray-700 text-gray-500 group-hover:border-cyan-700 group-hover:text-cyan-600'}`}>
                      {item.type === 'work' ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    {/* Active Ping Animation */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping" />
                    )}
                  </div>
                  
                  {/* Node Label */}
                  <div className="flex-1">
                    <div className={`text-sm font-bold tracking-widest mb-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-600 group-hover:text-gray-400'}`}>
                      {item.date.split(' - ')[0]} {/* Just show starting year/month on roadmap */}
                    </div>
                    <h3 className={`text-lg font-bold leading-tight transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {item.org}
                    </h3>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-cyan-400' : 'opacity-0 -translate-x-4 text-transparent'}`}>
                    <ChevronRight />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANE: Magic Content Reveal */}
        <div className="w-2/3 relative h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeItem}
              initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 glass rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] p-10 overflow-y-auto custom-scrollbar"
            >
              <div className="flex flex-col xl:flex-row gap-8 mb-8 border-b border-white/5 pb-8">
                {/* Photo Placeholder */}
                <div className="w-full xl:w-56 h-56 bg-gray-900/80 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-gray-600 shadow-inner shrink-0 overflow-hidden relative group">
                  {activeData.image ? (
                    <img src={activeData.image} alt={activeData.org} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <>
                      <Star className="w-10 h-10 mb-2 opacity-20" />
                      <span className="text-xs tracking-widest uppercase font-semibold text-center px-4">Photo Placeholder</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none" />
                </div>
                
                {/* Headers */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                    {activeData.type === 'work' ? 'Professional Experience' : 'Education'}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{activeData.title}</h2>
                  <h3 className="text-xl text-gray-400 font-medium mb-5">{activeData.org}</h3>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      {activeData.date}
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      {activeData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rich Content Details */}
              <div className="space-y-2 pb-4">
                <DetailSection icon={Code} title="What I Made" items={activeData.made} />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
                <DetailSection icon={BookOpen} title="What I Learned" items={activeData.learned} />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
                <DetailSection icon={Trophy} title="Achievements" items={activeData.achievements} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}