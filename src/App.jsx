import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './pages/Hero';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence, motion } from 'framer-motion';

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
        <title>Srujan H M</title>
        <meta name="description" content="Srujan H M - A modern, glassmorphic React + Vite + Tailwind portfolio" />
      </Helmet>
      
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
                  <main className="flex-1 flex flex-col gap-24 md:gap-32 pt-8 md:pt-16 overflow-hidden">
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
    </HelmetProvider>
  );
}