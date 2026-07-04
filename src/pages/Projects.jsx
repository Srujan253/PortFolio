import React, { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaTimes,
  FaCheckCircle,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRender,
  SiVite,
  SiPostgresql,
} from "react-icons/si";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, ArrowLeft, X, ExternalLink, Code2, Database, LayoutTemplate, Layers } from "lucide-react";
import { createPortal } from "react-dom";

// ==========================================
// DATA
// ==========================================
const projects = [
  {
    id: "club-modx",
    title: "Club MODX",
    shortDescription: "Modular Discipline Exchange Platform for Communities.",
    fullDescription:
      "A comprehensive full-stack club management platform designed to solve fragmented communication. It enables users to invite members, join specialized communities, and collaborate seamlessly via real-time chat with complete CRUD capabilities.",
    features: [
      "Role-Based Access Control",
      "Real-Time Community Chat",
      "Dynamic Event Scheduling",
      "Analytics Dashboard",
    ],
    challenge:
      "Handling concurrent real-time connections efficiently while ensuring strict data isolation between different clubs.",
    image: "https://res.cloudinary.com/duf8kshsz/image/upload/v1782494743/Screenshot_2026-06-26_224315_pvmxmj.png",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-500" },
    ],
    demo: "https://modx-second-2.onrender.com",
    github: "#",
    year: "2024",
    role: "Full Stack Developer",
    status: "Live",
    bentoClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "gupshup",
    title: "GupShup",
    shortDescription: "Secure, real-time MERN chat application.",
    fullDescription:
      "GupShup is a robust real-time messaging platform built on the MERN stack and Socket.io. It features instant message delivery, online presence indicators, and AI-powered chat suggestions to keep conversations engaging.",
    features: [
      "Instant Messaging via WebSockets",
      "AI Message Suggestions",
      "Online/Offline Presence",
      "Media Sharing",
    ],
    challenge:
      "Optimizing MongoDB queries for loading chat history instantly without causing lag during rapid message bursts.",
    image: "https://res.cloudinary.com/duf8kshsz/image/upload/v1782494705/Screenshot_2026-06-26_224634_ydevrm.png",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
      { icon: <SiSocketdotio />, name: "Socket.IO", color: "text-white" },
    ],
    demo: "https://gupshup-rbcp.onrender.com/",
    github: "https://github.com/Srujan253/Gupshup",
    year: "2024",
    role: "Backend Architect",
    status: "Live",
    bentoClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "sinchana-portfolio",
    title: "Sinchana Portfolio",
    shortDescription: "3D Interactive Portfolio built with React and Three.js.",
    fullDescription:
      "A modern, highly interactive portfolio web application built with React, Vite, and 3D graphics. Powered by three.js and cobe for stunning visual elements, featuring fluid animations via framer-motion and smooth scrolling mechanics integrated via lenis.",
    features: [
      "Immersive 3D Experiences",
      "Fluid Animations",
      "Smooth Scrolling",
      "Fast Development",
    ],
    challenge:
      "Integrating Three.js and Cobe 3D globes alongside Framer Motion animations while maintaining 60fps performance.",
    image: "https://res.cloudinary.com/duf8kshsz/image/upload/v1782494695/Screenshot_2026-06-26_224531_nfhabj.png",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    ],
    demo: "https://sinchana-frd.vercel.app",
    github: "https://github.com/Srujan253/portfolio-frd.git",
    year: "2024",
    role: "Frontend Developer",
    status: "Live",
    bentoClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "privacy-id",
    title: "Privacy-Preserving ID",
    shortDescription: "Cryptographically secure offline/online ID verification.",
    fullDescription:
      "A privacy-first identity verification web application that generates cryptographically signed QR codes. It supports offline verification via RSA signatures and online verification using JWTs, ensuring user data remains protected.",
    features: [
      "RSA Signed QR Codes",
      "JWT Online Verification",
      "Zero-Knowledge Proofs",
      "Offline Mode",
    ],
    challenge:
      "Implementing robust RSA cryptography in the browser while maintaining high performance for QR generation.",
    image: "https://placehold.co/800x500/0f172a/06b6d4?text=Privacy+ID+Verification",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-300" },
    ],
    demo: "#",
    github: "#",
    year: "2023",
    role: "Security Engineer",
    status: "Proof of Concept",
    bentoClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "clash-portfolio",
    title: "Clash Royale Portfolio",
    shortDescription: "Game-themed personal portfolio design.",
    fullDescription:
      "A highly creative, interactive personal portfolio inspired by the aesthetics and mechanics of Clash Royale. It gamifies the browsing experience, turning standard sections into 'arenas' and 'cards'.",
    features: [
      "Gamified UI",
      "Custom Animations",
      "Interactive 'Cards'",
      "Themed Sound Effects",
    ],
    challenge:
      "Replicating complex game mechanics and animations strictly using web technologies and CSS.",
    image: "https://res.cloudinary.com/duf8kshsz/image/upload/v1782494622/Screenshot_2026-06-26_224441_sypry0.png",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    ],
    demo: "https://clash-royal-portfolio.vercel.app/",
    github: "#",
    year: "2023",
    role: "UI/UX Developer",
    status: "Live",
    bentoClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "archicanvas",
    title: "ArchiCanvas",
    shortDescription: "Modern digital art & architecture marketplace.",
    fullDescription:
      "A sleek marketplace designed for architects and digital artists. Features include role-based authentication, advanced artwork filtering, AI-powered descriptions, and highly animated UI components for a premium browsing experience.",
    features: [
      "Role-Based Auth",
      "Advanced Search & Filtering",
      "AI Descriptions",
      "Animated UI",
    ],
    challenge:
      "Designing a highly complex animated UI that performs smoothly at 60fps across all devices.",
    image: "https://placehold.co/800x500/0f172a/06b6d4?text=ArchiCanvas",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    ],
    demo: "#",
    github: "https://github.com/Srujan253/ArchiCanvas_",
    year: "2023",
    role: "Frontend Architect",
    status: "Development",
    bentoClass: "md:col-span-2 md:row-span-1",
  },
];

// ==========================================
// HOOKS
// ==========================================
const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const velocityX = useMotionValue(0);

  useEffect(() => {
    let lastX = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      
      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        const dx = e.clientX - lastX;
        // Cap velocity to prevent extreme tilts
        const v = Math.max(-5, Math.min(5, dx / dt)); 
        velocityX.set(v);
      }
      lastX = e.clientX;
      lastTime = now;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, velocityX]);

  return { x, y, velocityX };
};

// ==========================================
// PROJECT DETAIL PAGE OVERLAY
// ==========================================
const ProjectDetailOverlay = ({ project, onClose, nextProject, prevProject }) => {
  // Prevent background scroll
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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-gray-950 overflow-y-auto custom-scrollbar"
    >
      {/* Navbar/Close button */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white font-bold tracking-widest uppercase text-sm pointer-events-auto mix-blend-difference"
        >
          {project.title}
        </motion.div>
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors pointer-events-auto shadow-2xl border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden group">
        <motion.div
          layoutId={`project-image-${project.id}`}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6">{project.title}</h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">{project.shortDescription}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-[100rem] mx-auto px-6 md:px-16 lg:px-24 py-24 flex flex-col lg:flex-row gap-20">
        
        {/* Left Column: Story & Features */}
        <div className="w-full lg:w-2/3 flex flex-col gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-6">The Story</h3>
            <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-12">Key Insights</h3>
            <div className="space-y-12 border-l border-white/10 pl-8 md:pl-12">
              {project.features.map((feature, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[3.1rem] md:-left-[4.1rem] top-1 text-4xl font-black text-gray-800 group-hover:text-cyan-500 transition-colors duration-500">
                    0{idx + 1}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{feature}</h4>
                  <div className="h-px w-full max-w-sm bg-white/5 mt-6 group-hover:bg-gradient-to-r from-cyan-500 to-transparent transition-colors duration-500" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-6">The Challenge</h3>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed border border-white/5 bg-white/5 p-8 md:p-12 rounded-3xl">
              {project.challenge}
            </p>
          </motion.div>

          {/* Placeholders for visual gallery scrolling */}
          <div className="w-full space-y-8">
            <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-6">Gallery</h3>
            <div className="w-full aspect-video bg-gray-900 rounded-3xl border border-white/5 overflow-hidden group">
               <img src="https://placehold.co/1200x800/0f172a/06b6d4?text=Dashboard+Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mockup" />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
               <div className="w-full md:w-1/2 aspect-square bg-gray-900 rounded-3xl border border-white/5 overflow-hidden group">
                 <img src="https://placehold.co/800x800/0f172a/06b6d4?text=Mobile+View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mockup" />
               </div>
               <div className="w-full md:w-1/2 aspect-square bg-gray-900 rounded-3xl border border-white/5 overflow-hidden group">
                 <img src="https://placehold.co/800x800/0f172a/06b6d4?text=Dark+Mode" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mockup" />
               </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32 space-y-16">
            
            {/* Metadata Table */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest border-b border-white/10 pb-4">Details</h3>
              
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Year</div>
                  <div className="text-white font-medium">{project.year || "2024"}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</div>
                  <div className="text-white font-medium">{project.role || "Developer"}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</div>
                  <div className="text-cyan-400 font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    {project.status || "Live"}
                  </div>
                </div>
              </div>
            </div>

            {/* Liquid Tech Stack */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest border-b border-white/10 pb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <div 
                    key={idx}
                    className="relative px-4 py-2 text-gray-300 font-medium text-sm rounded-full border border-white/10 overflow-hidden group cursor-default"
                  >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                      {t.icon} {t.name}
                    </span>
                    <div className="absolute inset-0 bg-cyan-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </div>
                ))}
              </div>
            </div>

            {/* Code Access */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest border-b border-white/10 pb-4">Repository</h3>
              {project.github !== "#" ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">View Source</div>
                    <div className="text-xs">Available on GitHub</div>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 text-gray-500">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Code2 className="w-5 h-5 opacity-50" />
                  </div>
                  <div>
                    <div className="font-medium">Private Repository</div>
                    <div className="text-xs">Developed under NDA</div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Huge Visit Website Action */}
      <a 
        href={project.demo !== "#" ? project.demo : null} 
        target="_blank" 
        rel="noreferrer"
        className={`block w-full py-24 md:py-32 border-t border-b border-white/10 group transition-colors duration-500 ${project.demo !== "#" ? 'hover:bg-cyan-500 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
      >
        <div className="max-w-[100rem] mx-auto px-6 md:px-16 flex items-center justify-between">
          <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter group-hover:text-gray-950 transition-colors duration-500">
            {project.demo !== "#" ? "VISIT WEBSITE" : "NOT AVAILABLE"}
          </h2>
          {project.demo !== "#" && (
            <ArrowRight className="w-12 h-12 md:w-32 md:h-32 text-white group-hover:text-gray-950 group-hover:-rotate-45 transition-all duration-500" />
          )}
        </div>
      </a>

      {/* Project Navigation Footer */}
      <div className="w-full flex">
        <button 
          onClick={() => prevProject()}
          className="w-1/2 p-12 md:p-24 bg-gray-900 hover:bg-gray-800 transition-colors flex flex-col items-start gap-4"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2"><ArrowLeft className="w-4 h-4"/> Previous Project</span>
        </button>
        <button 
          onClick={() => nextProject()}
          className="w-1/2 p-12 md:p-24 bg-gray-900 hover:bg-gray-800 transition-colors border-l border-white/5 flex flex-col items-end text-right gap-4"
        >
           <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">Next Project <ArrowRight className="w-4 h-4"/></span>
        </button>
      </div>
      
    </motion.div>,
    document.body
  );
};

// ==========================================
// MAIN COMPONENT (Minimal List)
// ==========================================
export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { x, y, velocityX } = useMousePosition();
  
  // Smooth spring physics for the cursor follower
  const cursorX = useSpring(x, { stiffness: 150, damping: 25, mass: 0.5 });
  const cursorY = useSpring(y, { stiffness: 150, damping: 25, mass: 0.5 });
  
  // Tilt physics based on mouse velocity
  const rotateTilt = useTransform(velocityX, [-5, 5], [-8, 8]);
  const smoothTilt = useSpring(rotateTilt, { stiffness: 100, damping: 20 });

  const navigateProject = (direction) => {
    const currentIndex = projects.findIndex(p => p.id === activeProject.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = projects.length - 1;
    if (nextIndex >= projects.length) nextIndex = 0;
    setActiveProject(projects[nextIndex]);
  };

  return (
    <section id="projects" ref={containerRef} className="py-32 relative bg-gray-950">
      
      {/* Title */}
      <div className="text-center mb-16 md:mb-24 px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Projects
          </span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A curated selection of my latest work. Click on any project to dive
          into the detailed case study.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      <div className="max-w-[100rem] mx-auto px-6 md:px-16 lg:px-24 relative flex">
        
        {/* Left Scroll Progress Indicator */}
        <div className="hidden md:flex w-24 shrink-0 flex-col items-center py-12 relative">
           <div className="absolute top-0 bottom-0 w-px bg-gray-800" />
           <motion.div 
             style={{ height: lineHeight }} 
             className="absolute top-0 w-[3px] bg-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
           />
        </div>

        {/* Minimalist List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative flex flex-col md:flex-row md:items-center py-12 md:py-16 border-b border-white/10 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                setHoveredProject(null); // hide preview instantly
                setActiveProject(project);
              }}
            >
              {/* Number */}
              <div className="text-gray-600 font-mono text-xl md:text-3xl font-light mb-4 md:mb-0 md:w-32 transition-colors duration-500 group-hover:text-cyan-500">
                0{index + 1}
              </div>

              {/* Title with Gradient Fill on Hover */}
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-700 tracking-tighter relative overflow-hidden inline-block w-fit">
                 {/* Base text */}
                 <span>{project.title}</span>
                 
                 {/* Overlay Text (fills from left) */}
                 <span className="absolute top-0 left-0 text-white w-0 overflow-hidden whitespace-nowrap transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full">
                   {project.title}
                 </span>
              </h2>

              {/* Mobile Arrow */}
              <div className="mt-6 md:hidden">
                <ArrowRight className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* FLOATING CURSOR PREVIEW (Hidden on touch) */}
      {/* ========================================== */}
      <AnimatePresence>
        {hoveredProject && !activeProject && (
          <motion.div
            style={{ 
              x: cursorX, 
              y: cursorY, 
              rotate: smoothTilt,
            }}
            className="fixed top-0 left-0 pointer-events-none z-50 -ml-[200px] -mt-[150px] hidden md:block"
          >
            <motion.div
              layoutId={`project-image-${hoveredProject.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative"
            >
              <img 
                src={hoveredProject.image} 
                alt={hoveredProject.title} 
                className="w-full h-full object-cover"
              />
              {/* Dark overlay to make it look premium */}
              <div className="absolute inset-0 bg-gray-900/10 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* FULLSCREEN PROJECT DETAIL OVERLAY */}
      {/* ========================================== */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetailOverlay 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
            nextProject={() => navigateProject(1)}
            prevProject={() => navigateProject(-1)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
