import React from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRender,
  SiVite,
} from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";
import gupshup from "../photo/gupshup.png";

const projects = [
  {
    title: "GupShup",
    description:
      "A modern chat application with real-time messaging and user authentication.",
    image: gupshup,
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
      { icon: <SiSocketdotio />, name: "Socket.IO", color: "text-white" },
      { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    ],
    demo: "https://gupshup-rbcp.onrender.com/",
    github: "https://github.com/Srujan253/Gupshup",
    featured: true,
  },
  {
    title: "Tech Blog",
    description: "A full-stack tech blog platform using the MERN stack.",
    image: "https://placehold.co/600x400/0ea5e9/fff?text=Blog",
    tech: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    ],
    demo: "#",
    github: "#",
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.2,
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      className={`relative group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-3xl blur-xl"
        animate={{
          opacity: isHovered ? 0.8 : 0.2,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Featured badge */}
      {project.featured && (
        <motion.div
          className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
        >
          ⭐ Featured
        </motion.div>
      )}

      {/* Main card */}
      <motion.div
        className="relative glass rounded-3xl p-6 backdrop-blur-sm border border-cyan-400/20 overflow-hidden h-full flex flex-col"
        whileHover={{ 
          y: -8,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-transparent to-cyan-400 opacity-0 group-hover:opacity-20"
          animate={{
            background: isHovered ? [
              "linear-gradient(0deg, #06b6d4, transparent, #06b6d4)",
              "linear-gradient(90deg, #06b6d4, transparent, #06b6d4)",
              "linear-gradient(180deg, #06b6d4, transparent, #06b6d4)",
              "linear-gradient(270deg, #06b6d4, transparent, #06b6d4)",
            ] : "linear-gradient(0deg, #06b6d4, transparent, #06b6d4)"
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Image container */}
        <div className="relative overflow-hidden rounded-2xl mb-6 group/image">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover/image:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-all duration-500 group-hover/image:scale-110"
            onLoad={() => setImageLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Image overlay with quick actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover/image:opacity-100 z-20"
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                if (project.demo === "#") {
                  e.preventDefault();
                }
              }}
            >
              <FaExternalLinkAlt className="text-lg" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-cyan-400 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                if (project.github === "#") {
                  e.preventDefault();
                }
              }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
          </motion.div>

          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <motion.h3
            className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
          >
            {project.description}
          </motion.p>

          {/* Tech stack */}
          <div className="mb-6">
            <motion.h4
              className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
            >
              Tech Stack
            </motion.h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className="relative group/tech"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.5 + (techIndex * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className={`text-2xl ${tech.color} transition-all duration-300 cursor-pointer`}>
                    {tech.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-gray-900 rounded-lg opacity-0 group-hover/tech:opacity-100 pointer-events-none z-30 whitespace-nowrap shadow-lg"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
          >
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold shadow-lg relative overflow-hidden group/btn"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                if (project.demo === "#") {
                  e.preventDefault();
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaExternalLinkAlt />
                {project.demo === "#" ? "Coming Soon" : "Live Demo"}
              </span>
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-cyan-400 rounded-xl font-semibold shadow-lg border border-cyan-400/20 hover:bg-gray-700 hover:border-cyan-400/40 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                if (project.github === "#") {
                  e.preventDefault();
                }
              }}
            >
              <FaGithub />
              {project.github === "#" ? "Private" : "View Code"}
            </motion.a>
          </motion.div>
        </div>

        {/* Corner decoration */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: isInView ? ["0%", "100%", "0%"] : "0%",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore my latest work and personal projects
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}