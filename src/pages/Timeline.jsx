import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

/* 
========================================================================
 PREVIOUS DESKTOP SPLIT-SCREEN CODE (Commented out as requested)
========================================================================
const DesktopSplitScreen = () => {
  // ... the previous w-1/2 left and right code ...
  return (
    <div className="hidden md:flex relative max-w-7xl mx-auto items-start">
      <div className="w-1/2 py-[30vh] pl-8 pr-12 lg:pl-16 lg:pr-16 space-y-[40vh]">
        ... Timeline Nodes ...
      </div>
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center ...">
        ... Sticky Preview Panel ...
      </div>
    </div>
  );
}
*/

// ========================================================================
//  NEW TRUE HORIZONTAL SCROLL DEMO
// ========================================================================
const HorizontalScrollDemo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the flex container leftwards as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] hidden md:block bg-gray-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-16 items-center">
          {timeline.map((item, idx) => (
            <div 
              key={item.id} 
              className="w-[80vw] max-w-[1000px] h-[80vh] shrink-0 glass rounded-3xl border border-white/10 shadow-2xl p-8 lg:p-12 overflow-y-auto custom-scrollbar flex flex-col md:flex-row gap-8"
            >
              {/* Left Side of Card: Image & Headers */}
              <div className="w-full md:w-1/3 flex flex-col gap-6 shrink-0 border-r border-white/5 pr-8">
                <div className="w-full aspect-square bg-gray-900/80 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-gray-600 shadow-inner overflow-hidden relative group">
                  {item.image ? (
                    <img src={item.image} alt={item.org} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <>
                      <Star className="w-12 h-12 mb-2 opacity-20" />
                      <span className="text-sm tracking-widest uppercase font-semibold text-center px-4">Photo Placeholder</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none" />
                </div>
                
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">{item.title}</h2>
                  <h3 className="text-xl lg:text-2xl text-cyan-400 font-medium mb-4">{item.org}</h3>
                  
                  <div className="flex flex-col gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side of Card: Rich Data */}
              <div className="w-full md:w-2/3 flex flex-col justify-start">
                <div className="space-y-4 pb-6">
                  <DetailSection icon={Code} title="What I Made" items={item.made} />
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
                  <DetailSection icon={BookOpen} title="What I Learned" items={item.learned} />
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
                  <DetailSection icon={Trophy} title="Achievements" items={item.achievements} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Timeline() {
  return (
    <section id="timeline" className="bg-gray-950 relative">
      <div className="pt-24 container mx-auto px-6 mb-16 md:mb-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 md:hidden">Experience & Education</h2>
      </div>

      {/* MOBILE FALLBACK (Vertical Stack, < 768px) */}
      <div className="md:hidden container mx-auto px-4 space-y-8 pb-24">
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

      {/* DESKTOP TRUE HORIZONTAL SCROLL */}
      <HorizontalScrollDemo />

    </section>
  );
}