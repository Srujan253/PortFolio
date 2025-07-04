import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A fast, glassmorphic portfolio built with React, Vite, and Tailwind.',
    image: 'https://placehold.co/600x400/38bdf8/fff?text=Portfolio',
    tech: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />],
    demo: '#',
    github: '#',
  },
  {
    title: 'MERN Blog',
    description: 'A full-stack blog platform using the MERN stack.',
    image: 'https://placehold.co/600x400/0ea5e9/fff?text=Blog',
    tech: [<FaReact key="react" />, <FaNodeJs key="node" />],
    demo: '#',
    github: '#',
  },
  {
    title: 'Dashboard App',
    description: 'A responsive dashboard with charts and authentication.',
    image: 'https://placehold.co/600x400/64748b/fff?text=Dashboard',
    tech: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />],
    demo: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Projects</h2>
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
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-2">{project.description}</p>
              <div className="flex gap-3 text-xl mb-2">
                {project.tech.map((icon, i) => <span key={i}>{icon}</span>)}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 transition">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-cyan-400 rounded-lg font-semibold shadow hover:bg-gray-800 transition">
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