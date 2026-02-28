import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet';
import certifications from './components/Certifications';
import Certifications from './components/Certifications';
import LiquidEther from './components/LiquidEther';
export default function App() {
  return (
    <>
      <Helmet>
        <title>Srujan H M</title>
        <meta name="description" content="Srujan H M - A modern, glassmorphic React + Vite + Tailwind portfolio" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950/50 transition-colors duration-300 relative">
        <div className="fixed inset-0 -z-10">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <Navbar />
        <DarkModeToggle />
        <main className="flex-1 flex flex-col gap-24 md:gap-32 pt-8 md:pt-16">
          <Hero />
          <Skills />
          <Certifications/>
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
       
      </div>
    </>
  );
} 