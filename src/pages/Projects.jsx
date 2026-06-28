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
import { motion, AnimatePresence, useInView } from "framer-motion";

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
    bentoClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "privacy-id",
    title: "Privacy-Preserving ID",
    shortDescription:
      "Cryptographically secure offline/online ID verification.",
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
    image:
      "https://placehold.co/800x500/0f172a/06b6d4?text=Privacy+ID+Verification",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-300" },
    ],
    demo: "#",
    github: "#",
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
    image:
      "https://res.cloudinary.com/duf8kshsz/image/upload/v1782494622/Screenshot_2026-06-26_224441_sypry0.png",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    ],
    demo: "https://clash-royal-portfolio.vercel.app/",
    github: "#",
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
    bentoClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 5;
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_LIMIT);
  const hasMore = projects.length > INITIAL_LIMIT;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gray-950"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              className={`group relative glass gpu-accelerated rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-500/50 transition-colors bg-gray-900/40 ${project.bentoClass}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                layoutId={`image-container-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-end"
                layoutId={`content-${project.id}`}
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-3">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10"
                      >
                        {t.icon}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-transparent border border-cyan-500/50 text-cyan-400 font-bold tracking-wide hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              {showAll ? "See Less Projects" : "Explore More Projects"}
            </button>
          </motion.div>
        )}
      </div>

      {/* Case Study Modal (Split-Pane Design) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-black/80 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="bg-gray-950 border border-cyan-500/30 w-full max-w-7xl min-h-[80vh] rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.15)] flex flex-col lg:flex-row relative my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:rotate-90 transition-all z-50"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              {/* Left Pane - Visual Showcase (MacBook Frame) */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-cyan-500/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

                {/* Simulated Device Frame */}
                <motion.div
                  layoutId={`image-container-${selectedProject.id}`}
                  className="w-full relative rounded-2xl border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden"
                >
                  {/* Fake Mac Top Bar */}
                  <div className="w-full h-6 bg-gray-800 flex items-center px-3 gap-1.5 border-b border-gray-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Right Pane - Case Study Details */}
              <motion.div
                layoutId={`content-${selectedProject.id}`}
                className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center overflow-y-auto"
              >
                <div className="max-w-xl mx-auto w-full">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="space-y-8">
                    {/* Key Features */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                        <FaRocket className="text-cyan-400" /> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5"
                          >
                            <FaCheckCircle className="text-cyan-500 shrink-0" />
                            <span className="text-sm font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Challenge */}
                    <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-2xl border-l-4 border-blue-500">
                      <h4 className="text-lg font-bold text-blue-400 mb-2">
                        The Engineering Challenge
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                        <FaLaptopCode className="text-cyan-400" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((t, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500/50 transition-colors group cursor-default shadow-lg"
                          >
                            <span className={`text-xl ${t.color}`}>
                              {t.icon}
                            </span>
                            <span className="text-gray-300 text-sm font-semibold group-hover:text-white transition-colors">
                              {t.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 min-w-[200px] flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg transition-all ${
                          selectedProject.demo !== "#"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
                            : "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
                        }`}
                        onClick={(e) =>
                          selectedProject.demo === "#" && e.preventDefault()
                        }
                      >
                        <FaExternalLinkAlt />{" "}
                        {selectedProject.demo !== "#" ? "Live Demo" : "Offline"}
                      </a>

                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 min-w-[200px] flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg border transition-all ${
                          selectedProject.github !== "#"
                            ? "bg-gray-900 border-gray-700 text-white hover:border-cyan-500 hover:bg-gray-800 hover:scale-[1.02]"
                            : "bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed"
                        }`}
                        onClick={(e) =>
                          selectedProject.github === "#" && e.preventDefault()
                        }
                      >
                        <FaGithub className="text-xl" />{" "}
                        {selectedProject.github !== "#"
                          ? "Source Code"
                          : "Private"}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
