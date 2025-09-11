import React from "react";
import { FaAward, FaFilePdf, FaMedal, FaCertificate } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiFreecodecamp, SiMicrosoftacademic } from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";

const full_stack__winsun = '/certificates/full_stack__winsun.jpg';
const JavsScriptDOMs = '/certificates/JavsScriptDOMs.pdf';
const SystemandUsableSecurity = '/certificates/SystemandUsableSecurity.pdf';
const typing = '/certificates/typing.pdf';



const certifications = [
  {
    title: "Full Stack Developer",
    issuer: "Winsun Global Tech",
    date: "Issued April 2024",
    Icon: SiFreecodecamp,
    link: full_stack__winsun,
    level: "Professional",
    category: "Development",
    featured: true,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    title: "JSON DOMs Certificate",
    issuer: "Microsoft Learn",
    date: "Issued Dec 2023",
    Icon: SiMicrosoftacademic,
    link: JavsScriptDOMs,
    level: "Intermediate",
    category: "Programming",
    featured: false,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "System and Usable Security",
    issuer: "NPTEL",
    date: "Issued Mar 2025",
    Icon: SiUdemy,
    link: SystemandUsableSecurity,
    level: "Advanced",
    category: "Security",
    featured: false,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Typing Speed Certificate",
    issuer: "Coursera",
    date: "Issued June 2024",
    Icon: SiCoursera,
    link: typing,
    level: "Certified",
    category: "Skills",
    featured: false,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10",
  },
];

const CertificationCard = ({ cert, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.15,
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 60,
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-3xl blur-xl`}
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Featured badge */}
      {cert.featured && (
        <motion.div
          className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
        >
          <FaMedal className="text-xs" />
          Featured
        </motion.div>
      )}

      {/* Main card */}
      <motion.div
        className="relative glass rounded-3xl backdrop-blur-sm border border-cyan-400/20 overflow-hidden cursor-pointer h-full"
        whileHover={{
          y: -8,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20`}
          animate={{
            background: isHovered ? [
              `linear-gradient(0deg, ${cert.color.split(' ')[1]}, transparent, ${cert.color.split(' ')[3]})`,
              `linear-gradient(90deg, ${cert.color.split(' ')[1]}, transparent, ${cert.color.split(' ')[3]})`,
              `linear-gradient(180deg, ${cert.color.split(' ')[1]}, transparent, ${cert.color.split(' ')[3]})`,
              `linear-gradient(270deg, ${cert.color.split(' ')[1]}, transparent, ${cert.color.split(' ')[3]})`,
            ] : `linear-gradient(0deg, ${cert.color.split(' ')[1]}, transparent, ${cert.color.split(' ')[3]})`
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Front face */}
        <div
          className="p-6 flex flex-col"
        >
          {/* Header section */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              className={`p-4 ${cert.bgColor} rounded-2xl`}
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <cert.Icon className={`text-3xl bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
            </motion.div>
            <div className="flex-1">
              <motion.h3
                className="text-xl font-bold text-cyan-300 mb-2 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cert.title}
              </motion.h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                {cert.issuer}
              </p>
            </div>
          </div>

          {/* Certificate details */}
          <div className="flex-1 space-y-4">
            {/* Category and level badges */}
            <div className="flex gap-2 flex-wrap">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white shadow-sm`}>
                {cert.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {cert.level}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FaCertificate className="text-cyan-400" />
              <span className="text-sm">{cert.date}</span>
            </div>

            {/* Animated progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Verification Status</span>
                <span className="text-xs text-green-400 font-semibold">Verified ✓</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 bg-gradient-to-r ${cert.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: index * 0.15 + 0.8, duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Action button */}
<div
  className={`mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl font-semibold shadow-lg relative overflow-hidden group/btn cursor-pointer select-none`}
  onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
  onAuxClick={(e) => {
    e.stopPropagation();
    if (e.button === 1) {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  }}
  role="button"
  tabIndex={0}
  aria-label={`View certificate: ${cert.title}`}
>
  <motion.div
    className="absolute inset-0 bg-white/20"
    initial={{ x: "-100%" }}
    whileHover={{ x: "100%" }}
    transition={{ duration: 0.5 }}
  />
  <span className="relative z-10 flex items-center gap-2">
    <FaFilePdf />
    View Certificate
  </span>
</div>


        </div>



        {/* Corner decoration */}
        <motion.div
          className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${cert.color} opacity-10 rounded-full group-hover:opacity-20`}
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${cert.color} rounded-full`}
                initial={{
                  x: Math.random() * 200,
                  y: Math.random() * 200,
                  opacity: 0
                }}
                animate={{
                  y: -30,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
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
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-yellow-500 bg-clip-text text-transparent flex items-center justify-center gap-3"
            animate={{
              backgroundPosition: isInView ? ["0%", "100%", "0%"] : "0%",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaAward className="text-yellow-400" />
            Certificates & Achievements
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional certifications and achievements showcasing continuous learning
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        {/* Stats summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { label: "Certificates", value: certifications.length, icon: FaCertificate, color: "text-cyan-400" },
            { label: "Featured", value: certifications.filter(c => c.featured).length, icon: FaMedal, color: "text-yellow-400" },
            { label: "Categories", value: [...new Set(certifications.map(c => c.category))].length, icon: FaAward, color: "text-green-400" },
            { label: "Verified", value: "100%", icon: FaFilePdf, color: "text-blue-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-4 text-center backdrop-blur-sm border border-cyan-400/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className={`text-2xl ${stat.color} mx-auto mb-2`} />
              <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}