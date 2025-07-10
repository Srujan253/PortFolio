
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 flex items-center justify-between shadow-lg">
      <a href="#hero" className="text-2xl font-extrabold tracking-tight text-cyan-400">MyPortFolio</a>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-400 transition-colors">
            {link.name}
          </a>
        ))}
      </div>
      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-4">
        <a href="https://github.com/Srujan253" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaLinkedin /></a>
        <a href="https://instagram.com/srujan_kulal18" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaInstagram /></a>
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-3xl text-gray-700 dark:text-gray-200 focus:outline-none z-50"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden flex flex-col`}
        style={{ minHeight: '100vh' }}
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
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-400 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-6 justify-center mt-10">
          <a href="https://github.com/Srujan253" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaLinkedin /></a>
          <a href="https://instagram.com/srujan_kulal18" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaInstagram /></a>
        </div>
      </div>
    </nav>
  );
}