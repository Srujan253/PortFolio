import { FaGithub, FaLinkedin,FaInstagram } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 flex items-center justify-between shadow-lg">
      <a href="#hero" className="text-2xl font-extrabold tracking-tight text-cyan-400">MyPortFolio</a>
      <div className="hidden md:flex gap-8">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-400 transition-colors">
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Srujan253" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaLinkedin /></a>
        <a href="https://instagram.com/srujan_kulal18" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-400"><FaInstagram /></a>

      </div>
    </nav>
  );
} 