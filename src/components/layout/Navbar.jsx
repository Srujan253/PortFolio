import React, { useState, useEffect } from 'react';
import { Home, User, Code2, Briefcase, Clock, Mail } from 'lucide-react';
import Dock from '../ui/Dock';

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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewports to adapt Dock sizes
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const dockItems = navItems.map((item) => {
    const IconComponent = item.icon;
    return {
      icon: <IconComponent strokeWidth={activeSection === item.id ? 2.5 : 2} />,
      label: item.label,
      isActive: activeSection === item.id,
      onClick: (e) => handleClick(e, item.id),
    };
  });

  return (
    <Dock
      items={dockItems}
      panelHeight={isMobile ? 54 : 64}
      baseItemSize={isMobile ? 40 : 48}
      magnification={isMobile ? 50 : 64}
      dockHeight={isMobile ? 100 : 130}
      distance={isMobile ? 120 : 180}
      gap={isMobile ? 6 : 12}
    />
  );
}

