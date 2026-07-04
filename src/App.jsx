import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './pages/Hero';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './components/layout/SmoothScroll';

// Lazy load heavy components below the fold
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Timeline = lazy(() => import('./pages/Timeline'));
const Contact = lazy(() => import('./pages/Contact'));
const Certifications = lazy(() => import('./pages/Certifications'));
const AIAssistant = lazy(() => import('./components/ui/AIAssistant'));

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    // Instantly remove app loading state since index.html handles the CSS loader
    setIsAppLoading(false);
    // Give the Hero a brief moment to render before mounting the heavy Suspense components
    const timer = setTimeout(() => setIsHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Srujan H M | Full Stack Developer & Cybersecurity Enthusiast</title>
        <meta name="description" content="Portfolio of Srujan H M, an NMAMIT student specializing in Full Stack Development, React, Node.js, and Cybersecurity." />
        <meta name="keywords" content="Srujan HM, Srujan HM Portfolio, NMAMIT student, Full Stack Developer, React Developer, Node.js, Cybersecurity, Srujan H M" />
        <meta name="author" content="Srujan H M" />
        <meta property="og:title" content="Srujan H M | Full Stack Developer" />
        <meta property="og:site_name" content="Srujan H M" />
        <meta property="og:description" content="Portfolio of Srujan H M, an NMAMIT student specializing in Full Stack Web Development and Cybersecurity." />
        <meta property="og:image" content="https://res.cloudinary.com/duf8kshsz/image/upload/v1779219766/PLACEMENT_PIC2_ckncvk.jpg" />
        <meta property="og:url" content="https://srujanhm.dev/" />
        <link rel="canonical" href="https://srujanhm.dev/" />
      </Helmet>
      
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-gray-950 transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-200">
          <AnimatePresence mode="wait">
            {isAppLoading ? (
              <LoadingScreen key="loading-screen" />
            ) : (
              <motion.div 
                key="main-app"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col flex-1"
              >
                <Navbar />
                <Hero />
                
                {isHeroLoaded && (
                  <Suspense fallback={<div className="h-screen w-full bg-gray-950 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-t-2 border-cyan-500 animate-spin" /></div>}>
                    <main className="flex-1 flex flex-col gap-24 md:gap-32 pt-8 md:pt-16">
                      <About />
                      <Skills />
                      <Certifications />
                      <Projects />
                      <Timeline />
                      <Contact />
                    </main>
                    <Footer />
                    <AIAssistant />
                  </Suspense>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          <Analytics />
          <SpeedInsights />
        </div>
      </SmoothScroll>
    </HelmetProvider>
  );
}