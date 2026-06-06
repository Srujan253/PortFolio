import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Briefcase, Clock, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'timeline', icon: Clock, label: 'Timeline' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Intersection Observer to update active nav item based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when section is 50% visible
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
        className="flex items-center gap-2 md:gap-4 px-4 py-3 bg-gray-950/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.15)]"
      >
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredIndex === index;
          const Icon = item.icon;

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-colors z-10"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Icon */}
              <Icon 
                strokeWidth={isActive ? 2.5 : 2}
                className={`relative z-10 w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                  isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-gray-400 group-hover:text-white'
                }`} 
              />

              {/* Tooltip (Only visible on hover) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-12 px-3 py-1.5 bg-gray-900 border border-white/10 text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-xl z-20 pointer-events-none"
                  >
                    {item.label}
                    {/* Tooltip arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-b border-r border-white/10 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          );
        })}
      </motion.nav>
    </div>
  );
}
