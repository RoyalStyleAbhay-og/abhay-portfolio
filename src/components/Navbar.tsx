import { useState, useEffect } from 'react';
import {/* Moon */} from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(navLinks[i].label);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (link: (typeof navLinks)[0]) => {
    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(link.label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0A0A12]/85 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center">

        {/* Logo — left */}
        <button
          onClick={() => scrollTo(navLinks[0])}
          className="text-2xl font-black tracking-tight mr-auto"
        >
          <span className="gradient-text">A</span>
          <span className="text-white">K</span>
        </button>

        {/* Links — center */}
        <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium transition-colors relative pb-1.5 ${
                active === link.label ? 'text-[#8B5CF6]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              {active === link.label && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Theme toggle — right */}
        {/*<div className="ml-auto flex items-center gap-2.5">
          <span className="text-sm text-gray-400 hidden sm:block select-none">Theme</span>
          <div
            className="flex items-center justify-end w-12 h-6 rounded-full cursor-pointer transition-colors"
            style={{ background: 'rgba(139,92,246,0.6)' }}
          >
            <div className="w-5 h-5 mr-0.5 rounded-full bg-[#0F0F1A] flex items-center justify-center shadow-md">
              <Moon size={12} className="text-[#8B5CF6]" />
            </div>
          </div>
        </div>*/}
      </div>
    </nav>
  );
}
