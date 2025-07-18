import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaCss3,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiHtml5,
  SiPython,
  SiC,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: "90%" },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" />, level: "90%" },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "85%" },
      { name: "Vite", icon: <SiVite className="text-purple-400" />, level: "85%" },
      { name: "HTML", icon: <SiHtml5 className="text-red-400" />, level: "90%" },
      { name: "CSS", icon: <FaCss3 className="text-blue-400" />, level: "80%" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <SiPython className="text-orange-400" />, level: "85%" },
      { name: "Java", icon: <FaJava className="text-blue-400" />, level: "80%" },
      { name: "C", icon: <SiC className="text-gray-400" />, level: "75%" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" />, level: "80%" },
      { name: "Database", icon: <FaDatabase className="text-indigo-400" />, level: "75%" },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "85%" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Skills
        </h2>
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((skill) => (
                  <div key={skill.name} className="w-24 h-24 flip-card">
                    <div className="flip-card-inner">
                      {/* Front Side */}
                      <div className="flip-card-front dark:bg-gray-800">
                        <span className="text-4xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mt-2">
                          {skill.name}
                        </span>
                      </div>

                      {/* Back Side */}
                      <div className="flip-card-back">
                        {skill.level ?? "80%"}
                      </div>
                    </div>
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
