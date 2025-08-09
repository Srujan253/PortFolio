import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

// Navigation links
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 py-4 px-6 flex items-center justify-between shadow-lg transition-all duration-300">
      
      {/* Logo */}
      <a href="#hero" className="text-2xl font-extrabold tracking-tight text-cyan-400">
        MyPortfolio
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-4">
        <a href="https://github.com/Srujan253" target="_blank" rel="noopener noreferrer" 
           className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors duration-200">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/srujan-h-m-a51940321" target="_blank" rel="noopener noreferrer" 
           className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors duration-200">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/srujan_kulal18" target="_blank" rel="noopener noreferrer" 
           className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors duration-200">
          <FaInstagram />
        </a>
      </div>

      {/* Dark mode toggle button */}
      {/* <button 
        onClick={toggleDarkMode} 
        className="hidden md:block px-3 py-1 rounded-md bg-cyan-400 text-white hover:bg-cyan-500 transition-colors"
      >
        {darkMode ? "Light" : "Dark"}
      </button> */}

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-3xl text-gray-700 dark:text-gray-200 focus:outline-none z-50"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-40" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden flex flex-col`}
      >
        <button
          className="self-end m-4 text-3xl text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center gap-6 mt-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-400 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-6 justify-center mt-10">
          <a href="https://github.com/Srujan253" target="_blank" rel="noopener noreferrer" 
             className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/srujan-h-m-a51940321" target="_blank" rel="noopener noreferrer" 
             className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/srujan_kulal18" target="_blank" rel="noopener noreferrer" 
             className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
