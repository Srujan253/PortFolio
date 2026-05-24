import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy load heavy components below the fold
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Certifications = lazy(() => import('./components/Certifications'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Srujan H M</title>
        <meta name="description" content="Srujan H M - A modern, glassmorphic React + Vite + Tailwind portfolio" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gray-950 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingScreen />}>
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
        <Analytics />
        <SpeedInsights />
      </div>
    </HelmetProvider>
  );
}