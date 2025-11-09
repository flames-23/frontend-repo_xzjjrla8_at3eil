import { useState, useEffect } from 'react';
import { Rocket, Mail, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem = 'text-slate-300 hover:text-cyan-300 transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'bg-slate-900/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-md bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 ring-1 ring-cyan-400/40">
            <Rocket className="h-5 w-5 text-cyan-300 group-hover:rotate-6 transition-transform" />
          </div>
          <span className="font-semibold text-slate-100 tracking-wide">
            Neon Data & AI
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className={navItem}>About</a></li>
          <li><a href="#experience" className={navItem}>Experience</a></li>
          <li><a href="#education" className={navItem}>Education</a></li>
          <li><a href="#skills" className={navItem}>Skills</a></li>
          <li><a href="#projects" className={navItem}>Projects</a></li>
          <li><a href="#contact" className={navItem}>Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="mailto:amrismadin@gmail.com" className="p-2 rounded-md bg-slate-800/60 ring-1 ring-slate-700 text-slate-300 hover:text-cyan-300 hover:ring-cyan-400/60 transition">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/ahmad-maulana-rismadin/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-slate-800/60 ring-1 ring-slate-700 text-slate-300 hover:text-cyan-300 hover:ring-cyan-400/60 transition">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
