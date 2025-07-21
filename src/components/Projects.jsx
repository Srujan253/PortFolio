import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRender,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import gupshup from "../photo/gupshup.png";

const projects = [
  {
    title: "GupShup",
    description:
      "A modern chat application with real-time messaging and user authentication.",
    image: gupshup,
    tech: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiSocketdotio />, name: "Socket.IO" },
      // { icon: <SiRender />, name: "Render" },
      { icon: <SiVite />, name: "Vite" },
    ],

    demo: "https://gupshup-rbcp.onrender.com/",
    github: "https://github.com/Srujan253/Gupshup",
  },
  {
    title: "Tech Blog",
    description: "A full-stack tech blog platform using the MERN stack.",
    image: "https://placehold.co/600x400/0ea5e9/fff?text=Blog",
    tech: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      // { icon: <SiExpress />, name: "Express.js" },
      // { icon: <SiMongodb />, name: "MongoDB" },
      // { icon: <SiSocketdotio />, name: "Socket.IO" },
      // { icon: <SiRender />, name: "Render" },
      { icon: <SiVite />, name: "Vite" },
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Dashboard App",
    description: "A responsive dashboard with charts and authentication.",
    image: "https://placehold.co/600x400/64748b/fff?text=Dashboard",
    tech: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiSocketdotio />, name: "Socket.IO" },
      { icon: <SiRender />, name: "Render" },
      { icon: <SiVite />, name: "Vite" },
    ],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-2">
                {project.description}
              </p>
              <div className="flex gap-3 text-xl mb-2">
                {project.tech.map((iconObj, i) => (
                  <div key={i} className="relative group">
                    <span>{iconObj.icon}</span>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                      {iconObj.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-cyan-400 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
