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
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: 80 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" />, level: 80 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 65 },
      { name: "Vite", icon: <SiVite className="text-purple-400" />, level: 85 },
      { name: "HTML", icon: <SiHtml5 className="text-red-400" />, level: 90 },
      { name: "CSS", icon: <FaCss3 className="text-blue-400" />, level: 80 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <SiPython className="text-orange-400" />, level: 85 },
      { name: "Java", icon: <FaJava className="text-blue-400" />, level: 80 },
      { name: "C", icon: <SiC className="text-gray-400" />, level: 75 },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" />, level: 50 },
      { name: "Database", icon: <FaDatabase className="text-indigo-400" />, level: 50 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 50 },
    ],
  },
];

const SkillCard = ({ skill, index, categoryIndex }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLevel, setShowLevel] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: (categoryIndex * 0.1) + (index * 0.05),
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }
      });
    }
  }, [isInView, controls, index, categoryIndex]);

  const handleClick = () => {
    setShowLevel(!showLevel);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-2xl blur-md"
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden">
        {/* Static border highlight instead of continuous animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="absolute inset-[2px] bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-4">
          <motion.div
            className="flex flex-col items-center justify-center"
          >
            {!showLevel && (
              <motion.div
                animate={{ opacity: showLevel ? 0 : 1, scale: showLevel ? 0.8 : 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl mb-2"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            )}
            {showLevel && (
              <motion.div
                animate={{ opacity: showLevel ? 1 : 0, scale: showLevel ? 1 : 0.8 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center h-full"
              >
                <motion.div
                  className="relative w-16 h-16 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Circular progress */}
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-gray-300 dark:text-gray-600"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-cyan-400"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                      animate={{
                        strokeDashoffset: 2 * Math.PI * 28 * (1 - skill.level / 100)
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  opacity: 0
                }}
                animate={{
                  y: -20,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </>
        )}
      </div>
      
      {/* Hover tooltip */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to view level
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background static elements instead of animated blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Click on any skill to see my proficiency level
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {skills.map((group, categoryIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Category card */}
              <div className="glass rounded-3xl p-8 backdrop-blur-sm border border-cyan-400/20 relative overflow-hidden group">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
                
                {/* Category header */}
                <motion.div
                  className="text-center mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-2">
                    {group.category}
                  </h3>
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 64 } : {}}
                    transition={{ delay: (categoryIndex * 0.2) + 0.5, duration: 0.8 }}
                  />
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
                  {group.items.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>

                {/* Category stats */}
                <motion.div
                  className="mt-8 pt-6 border-t border-cyan-400/20"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: (categoryIndex * 0.2) + 0.8, duration: 0.8 }}
                >
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{group.items.length} Skills</span>
                    <span>
                      Avg: {Math.round(group.items.reduce((acc, skill) => acc + skill.level, 0) / group.items.length)}%
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}