import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Trophy, BookOpen, Star, Calendar, MapPin, Rocket } from 'lucide-react';

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

// ========================================================================
//  DESKTOP VOYAGE TIMELINE (Scroll-Driven Journey)
// ========================================================================
const VoyageTimeline = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Track moves left. Since we have 4 items, we need 3 "jumps".
  // Total track width is 400vw. We want to move left by exactly 300vw.
  // 300vw out of 400vw total width is -75%.
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // The solid progress line grows from 0% to 75% of the total track width.
  // This perfectly keeps the tip of the line fixed at 50vw on the screen.
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] hidden lg:block bg-gray-950">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none" />

        {/* The Traveling Rocket (Fixed in center of screen!) */}
        <div className="absolute left-1/2 top-[15vh] -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-16 h-16 bg-gray-900 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] z-30 relative"
          >
            <Rocket className="w-8 h-8 rotate-45 translate-x-0.5 -translate-y-0.5" />
            <div className="absolute -left-2 top-1/2 w-4 h-1 bg-cyan-400/50 rounded-full blur-[2px]" />
            <div className="absolute -bottom-2 left-1/2 h-4 w-1 bg-cyan-400/50 rounded-full blur-[2px]" />
          </motion.div>
        </div>

        {/* The Moving Track */}
        <motion.div style={{ x: trackX }} className="w-[400vw] h-full relative flex items-center">
          
          {/* Dashed Base Line (From center of item 1 to center of item 4) */}
          <div className="absolute top-[15vh] left-[50vw] w-[300vw] h-1 border-t-2 border-dashed border-gray-800 z-10" />
          
          {/* Solid Glowing Progress Line */}
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute top-[15vh] left-[50vw] h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 origin-left" 
          />

          {/* The 4 Destination Nodes */}
          {timeline.map((item, idx) => {
            return (
              <div key={item.id} className="w-[100vw] h-full relative flex flex-col items-center justify-center pt-[20vh] pb-10">
                
                {/* Visual Waypoint on the Line */}
                <div className="absolute top-[15vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-950 border-4 border-gray-800 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </div>

                {/* The Magic Content Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ margin: "-10% -40% -10% -40%" }} // Only animate when crossing the center 20% of the screen
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="w-[85vw] max-w-6xl h-[65vh] max-h-[700px] glass rounded-3xl border border-white/10 shadow-2xl p-8 lg:p-12 overflow-y-auto custom-scrollbar flex gap-8 z-20 mt-[5vh]"
                >
                  {/* Left Column: Header & Image */}
                  <div className="w-1/3 flex flex-col gap-6 border-r border-white/5 pr-8 shrink-0">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                      {item.type === 'work' ? <Briefcase className="w-4 h-4"/> : <GraduationCap className="w-4 h-4"/>}
                      {item.type === 'work' ? 'Experience' : 'Education'}
                    </div>

                    <h2 className="text-4xl font-bold text-white leading-tight">{item.title}</h2>
                    <h3 className="text-2xl text-cyan-400 font-medium">{item.org}</h3>
                    
                    <div className="flex flex-col gap-3 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                        <Calendar className="w-4 h-4 text-cyan-500" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                        <MapPin className="w-4 h-4 text-cyan-500" />
                        {item.location}
                      </div>
                    </div>

                    <div className="w-full flex-1 min-h-[150px] bg-gray-900/80 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-gray-600 shadow-inner overflow-hidden relative group">
                      {item.image ? (
                        <img src={item.image} alt={item.org} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <>
                          <Star className="w-8 h-8 mb-2 opacity-20" />
                          <span className="text-xs tracking-widest uppercase font-semibold text-center px-4">Destination Photo</span>
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Right Column: Rich Details */}
                  <div className="w-2/3 flex flex-col justify-start">
                    <div className="space-y-4 pb-6">
                      <DetailSection icon={Code} title="What I Made" items={item.made} />
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
                      <DetailSection icon={BookOpen} title="What I Learned" items={item.learned} />
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />
                      <DetailSection icon={Trophy} title="Achievements" items={item.achievements} />
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
      <VoyageTimeline />

    </section>
  );
}