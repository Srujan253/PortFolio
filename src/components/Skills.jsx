import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiVite } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      { name: 'Database', icon: <FaDatabase className="text-blue-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="glass rounded-2xl p-8 flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{group.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map(skill => (
                  <div key={skill.name} className="flex flex-col items-center gap-2">
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 