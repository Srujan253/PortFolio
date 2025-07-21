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
export default function App() {
  return (
    <>
      <Helmet>
        <title>Modern Portfolio</title>
        <meta name="description" content="A modern, glassmorphic React + Vite + Tailwind portfolio" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
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