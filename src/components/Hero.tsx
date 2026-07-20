import { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Play, Download, ArrowRight } from 'lucide-react';

const typingPhrases = ['AI/ML Enthusiast', 'Electronics Engineer', 'Problem Solver'];

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '6+', label: 'Certifications Earned' },
  { value: '2+', label: 'Hackathons Participated' },
  { value: '100+', label: 'Hours of Learning' },
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText === phrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex(i => (i + 1) % typingPhrases.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : phrase.slice(0, prev.length + 1)
        );
      }, isDeleting ? 55 : 85);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex flex-col starry-bg overflow-hidden">
      {/* Subtle dot-grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── MAIN TWO-COLUMN AREA ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-8 pt-28 pb-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 space-y-5 z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/25 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-[4.5rem] xl:text-[5.5rem] font-black leading-[1.0] tracking-tight">
            <span className="text-white">Abhay </span>
            <span className="gradient-text">Kumar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base tracking-wide">
            Electronics &amp; Communication Engineering Student
          </p>

          {/* Typing text */}
          <p className="text-lg font-bold text-white min-h-[1.75rem]">
            {displayText}
            <span className="cursor-blink text-[#8B5CF6] font-light ml-px">|</span>
          </p>

          {/* Description */}
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-[520px]">
            I love building innovative solutions that bridge the gap between electronics,
            AI, and real-world problems.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-purple-500/30 text-sm"
            >
              Explore My Work <ArrowRight size={16} />
            </button>

            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/8 active:scale-95 transition-all text-sm"
            >
              <Download size={15} /> Download Resume
            </a>

            <button
              onClick={() => alert('Video intro coming soon!')}
              className="flex items-center gap-2.5 text-gray-300 font-medium text-sm hover:text-white transition-colors"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full border border-white/25 hover:bg-white/8 transition-colors">
                <Play size={12} fill="currentColor" />
              </span>
              Watch Intro
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://github.com/RoyalStyleAbhay-og"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/8 active:scale-90 transition-all"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/abhay-kumar-ece"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/8 active:scale-90 transition-all"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/8 active:scale-90 transition-all"
            >
              <Instagram size={17} />
            </a>
            <a
              href="mailto:abhay7@gmail.com"
              title="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/8 active:scale-90 transition-all"
            >
              <Mail size={17} />
            </a>
            
          </div>
        </div>

        {/* ── RIGHT COLUMN — circular portrait with animated gradient ring ── */}
        <div className="relative flex items-center justify-center flex-shrink-0 lg:w-[480px]">

          {/* Floating translucent cubes */}
          <div className="animate-float-1 absolute top-6 right-6 w-9 h-9 opacity-50 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/40" />
          <div className="animate-float-3 absolute top-28 right-0 w-7 h-7 opacity-40 rounded-lg bg-[#3B82F6]/20 border border-[#3B82F6]/40" />
          <div className="animate-float-2 absolute bottom-12 right-8 w-8 h-8 opacity-35 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30" />

          {/* Outer soft glow */}
          <div
            className="absolute w-96 h-96 rounded-full animate-pulse-glow"
            style={{
              background:
                'radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)',
            }}
          />

          {/* Rotating gradient ring (SVG, rotates independently) */}
          <div className="absolute animate-ring" style={{ width: 340, height: 340 }}>
            <svg viewBox="0 0 340 340" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="35%" stopColor="#6366F1" />
                  <stop offset="65%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <filter id="ringGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              {/* Full gradient ring (thick) */}
              <circle cx="170" cy="170" r="166" fill="none"
                stroke="url(#ringGrad)" strokeWidth="9"
                filter="url(#ringGlow)" />
              {/* Travelling glowing dot */}
              <circle cx="170" cy="4" r="8" fill="#A855F7" filter="url(#ringGlow)" />
            </svg>
          </div>

          {/* Static circular portrait (stays still) */}
          <div className="relative rounded-full overflow-hidden bg-[#0D0D18] shadow-2xl"
            style={{ width: 322, height: 322 }}>
            <img
              src='/assets/images/certificates/photo.jpg'
              alt="Abhay Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="max-w-7xl mx-auto w-full px-8 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="text-4xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #3B82F6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </span>
              <span className="text-gray-400 text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll down */}
        <div className="flex flex-col items-center gap-2 mt-10">
          <button
            onClick={() => scrollTo('skills')}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] group-hover:scale-150 transition-transform" />
            <span className="text-xs text-gray-500 tracking-[0.2em] uppercase group-hover:text-gray-300 transition-colors">
              Scroll Down
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
