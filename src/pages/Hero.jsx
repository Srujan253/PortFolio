import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { FaFilePdf, FaEnvelope, FaCode } from 'react-icons/fa';
import { Spotlight } from "@/components/ui/spotlight";
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight";

const SplineScene = lazy(() => import("@/components/ui/splite").then(module => ({ default: module.SplineScene })));

const TypingEffect = ({ texts, speed = 82, className = "", delay = 0, loopDelay = 3000 }) => {
// ... keeping typing effect intact ...
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, speed / 2);
    } else {
      if (displayText.length === currentText.length) {
        timer = setTimeout(() => setIsDeleting(true), loopDelay);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, speed, loopDelay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`text-cyan-400 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeLink = "https://res.cloudinary.com/duf8kshsz/image/upload/v1779219567/Srujan_H_M-Current_ppopvn.pdf";

  // 3D Tilt Logic for Profile Picture (currently hidden, but kept for future use)
  const picRef = useRef(null);
  const picX = useMotionValue(0);
  const picY = useMotionValue(0);
  const picXSpring = useSpring(picX, { stiffness: 150, damping: 15 });
  const picYSpring = useSpring(picY, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(picYSpring, [-0.5, 0.5], ["5deg", "-5deg"]); 
  const rotateY = useTransform(picXSpring, [-0.5, 0.5], ["-5deg", "5deg"]); 

  const handlePicMouseMove = (e) => {
    if (!picRef.current) return;
    const rect = picRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    picX.set(localX / width - 0.5);
    picY.set(localY / height - 0.5);
  };

  const handlePicMouseLeave = () => {
    picX.set(0);
    picY.set(0);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-[#050505]">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] gpu-accelerated" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] gpu-accelerated" />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <motion.div
        className="glass max-w-7xl w-full mx-auto p-8 md:p-14 rounded-[2.5rem] shadow-2xl backdrop-blur-md border border-white/5 relative z-10"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo Section with Spline */}
          <motion.div
            className="flex justify-center lg:justify-start order-1 lg:order-2 w-full h-[300px] md:h-[400px] lg:h-[600px] relative pointer-events-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{ perspective: "1000px" }}
          >
            <InteractiveSpotlight />
            
            <Suspense fallback={
              <div className="w-full h-full flex flex-col items-center justify-center text-cyan-400">
                <div className="w-10 h-10 border-t-2 border-cyan-400 border-r-2 rounded-full animate-spin mb-4" />
                <span className="font-display tracking-widest uppercase text-sm">Loading Neural Engine...</span>
              </div>
            }>
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Suspense>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold tracking-widest text-xs uppercase mb-6"
                animate={{ boxShadow: ["0 0 0px rgba(6,182,212,0)", "0 0 20px rgba(6,182,212,0.3)", "0 0 0px rgba(6,182,212,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome to my universe
              </motion.span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 tracking-tighter leading-tight drop-shadow-sm">
                Srujan H M
              </h1>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold leading-relaxed h-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <TypingEffect
                texts={["Full Stack Developer", "AI & ML Enthusiast", "Creative Technologist"]}
                speed={80}
                className="text-gray-300"
                delay={1000}
              />
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I engineer beautiful, highly interactive web applications combining robust backend architecture with cutting-edge frontend design.
            </motion.p>

            {/* Action Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* Resume Interactive Card */}
              <motion.div
                className="group relative glass rounded-2xl p-4 border border-cyan-500/20 cursor-pointer overflow-hidden flex items-center gap-4 bg-gray-900/50 hover:bg-gray-800/80 transition-colors shadow-lg sm:col-span-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsResumeOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <FaFilePdf className="text-white text-xl" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-white font-bold text-lg tracking-wide">My Resume</h3>
                  <p className="text-cyan-400 text-sm">Click to view or download</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all">
                  <span className="text-gray-400 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all">→</span>
                </div>
              </motion.div>

              <motion.a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gray-800 text-white font-bold border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all shadow-lg group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCode className="group-hover:text-cyan-400" />
                Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gray-800 text-white font-bold border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all shadow-lg group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="group-hover:text-blue-400" />
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm bg-black/20"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* High-End Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div 
              className="bg-gray-900/90 border border-cyan-400/30 rounded-[2rem] w-full max-w-5xl shadow-[0_0_100px_rgba(6,182,212,0.2)] overflow-hidden flex flex-col lg:flex-row h-[90vh] relative"
              initial={{ scale: 0.95, y: 30, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.95, y: 30, opacity: 0, rotateX: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* PDF Viewer Side */}
              <div className="w-full lg:w-3/4 h-[60vh] lg:h-full bg-black/80 relative border-b lg:border-b-0 lg:border-r border-gray-800/50 flex items-center justify-center p-6">
                <iframe 
                  src={`${resumeLink}#toolbar=0`} 
                  className="w-full h-full rounded-2xl bg-white shadow-2xl" 
                  title="Srujan H M Resume"
                />
              </div>

              {/* Info & Action Side */}
              <div className="w-full lg:w-1/4 p-8 flex flex-col relative bg-gradient-to-b from-gray-900 to-black justify-center items-center text-center">
                <button 
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-red-500/80 transition-all z-10 shadow-lg"
                  onClick={() => setIsResumeOpen(false)}
                >
                  ✕
                </button>

                <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-6 shadow-inner border border-cyan-500/20">
                  <FaFilePdf className="text-5xl text-cyan-400 drop-shadow-md" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Curriculum Vitae</h3>
                <p className="text-gray-400 text-sm mb-8">Srujan H M</p>
                
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all hover:-translate-y-1"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
