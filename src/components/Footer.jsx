import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="glass py-8 mt-24 text-center flex flex-col items-center gap-4">
      <div className="flex gap-8 mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors"><FaTwitter /></a>
      </div>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
} 