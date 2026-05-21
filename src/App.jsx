import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Certifications from './components/Certifications';
import AIAssistant from './components/AIAssistant';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Srujan H M</title>
        <meta name="description" content="Srujan H M - A modern, glassmorphic React + Vite + Tailwind portfolio" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gray-950 transition-colors duration-300">
        <Navbar />
        <main className="flex-1 flex flex-col gap-24 md:gap-32 pt-8 md:pt-16">
          <Hero />
          <Skills />
          <Certifications/>
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </HelmetProvider>
  );
}