import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const skills = [
  {
    id: 'programming',
    title: 'Programming',
    color: '#3B82F6',
    border: 'rgba(59,130,246,0.4)',
    glow: 'rgba(59,130,246,0.13)',
    hover: '0 0 30px rgba(59,130,246,0.38), 0 0 70px rgba(59,130,246,0.1)',
    bars: [{ w: '85%', g: 'linear-gradient(90deg,#1D4ED8,#60A5FA)' }, { w: '72%', g: 'linear-gradient(90deg,#2563EB,#3B82F6)' }],
    items: ['Python', 'C / C++', 'Java', 'HTML, CSS'],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <path d="M9 15L3 22L9 29" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 15L41 22L35 29" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 9L17 35" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'electronics',
    title: 'Electronics & Embedded',
    color: '#14B8A6',
    border: 'rgba(20,184,166,0.4)',
    glow: 'rgba(20,184,166,0.13)',
    hover: '0 0 30px rgba(20,184,166,0.38), 0 0 70px rgba(20,184,166,0.1)',
    bars: [{ w: '80%', g: 'linear-gradient(90deg,#0D9488,#2DD4BF)' }, { w: '65%', g: 'linear-gradient(90deg,#14B8A6,#3B82F6)' }],
    items: ['Arduino', 'ESP32 / ESP8266', 'Raspberry Pi', 'Embedded C', 'UART, I2C, SPI', 'IoT'],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <rect x="11" y="11" width="22" height="22" rx="2" stroke="#14B8A6" strokeWidth="2" />
        <rect x="17" y="17" width="10" height="10" rx="1" fill="rgba(20,184,166,0.2)" stroke="#14B8A6" strokeWidth="1.5" />
        <line x1="15" y1="11" x2="15" y2="7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="11" x2="22" y2="7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="11" x2="29" y2="7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="33" x2="15" y2="37" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="33" x2="22" y2="37" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="33" x2="29" y2="37" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="17" x2="7" y2="17" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="27" x2="7" y2="27" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="33" y1="17" x2="37" y2="17" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <line x1="33" y1="27" x2="37" y2="27" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'web',
    title: 'Web Development',
    color: '#06B6D4',
    border: 'rgba(6,182,212,0.4)',
    glow: 'rgba(6,182,212,0.13)',
    hover: '0 0 30px rgba(6,182,212,0.38), 0 0 70px rgba(6,182,212,0.1)',
    bars: [{ w: '70%', g: 'linear-gradient(90deg,#0891B2,#22D3EE)' }, { w: '55%', g: 'linear-gradient(90deg,#06B6D4,#818CF8)' }],
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <circle cx="22" cy="22" r="17" stroke="#06B6D4" strokeWidth="2" />
        <ellipse cx="22" cy="22" rx="8" ry="17" stroke="#06B6D4" strokeWidth="1.5" />
        <line x1="5" y1="22" x2="39" y2="22" stroke="#06B6D4" strokeWidth="1.5" />
        <path d="M7 14 C12 17 32 17 37 14" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
        <path d="M7 30 C12 27 32 27 37 30" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    color: '#F59E0B',
    border: 'rgba(245,158,11,0.4)',
    glow: 'rgba(245,158,11,0.13)',
    hover: '0 0 30px rgba(245,158,11,0.38), 0 0 70px rgba(245,158,11,0.1)',
    bars: [{ w: '90%', g: 'linear-gradient(90deg,#D97706,#FCD34D)' }, { w: '82%', g: 'linear-gradient(90deg,#F59E0B,#FDE68A)' }],
    items: ['Problem Solving', 'Teamwork', 'Communication', 'Leadership', 'Presentation Skills', 'Time Management'],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <circle cx="22" cy="16" r="7" stroke="#F59E0B" strokeWidth="2" />
        <path d="M8 38 C8 30 14 26 22 26 C30 26 36 30 36 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="18" r="4" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="34" cy="18" r="4" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M2 34 C2 28 6 25 10 25" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M42 34 C42 28 38 25 34 25" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'design',
    title: 'Design & Content',
    color: '#EC4899',
    border: 'rgba(236,72,153,0.4)',
    glow: 'rgba(236,72,153,0.13)',
    hover: '0 0 30px rgba(236,72,153,0.38), 0 0 70px rgba(236,72,153,0.1)',
    bars: [{ w: '75%', g: 'linear-gradient(90deg,#BE185D,#F472B6)' }, { w: '65%', g: 'linear-gradient(90deg,#EC4899,#A855F7)' }],
    items: ['UI/UX Design', 'Canva', 'Photoshop', 'Video Editing', 'Photography'],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <rect x="6" y="6" width="32" height="32" rx="4" stroke="#EC4899" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="rgba(236,72,153,0.25)" stroke="#EC4899" strokeWidth="1.5" />
        <path d="M6 30 L14 22 L20 28 L28 18 L38 30" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    color: '#A855F7',
    border: 'rgba(168,85,247,0.4)',
    glow: 'rgba(168,85,247,0.13)',
    hover: '0 0 30px rgba(168,85,247,0.38), 0 0 70px rgba(168,85,247,0.1)',
    bars: [{ w: '72%', g: 'linear-gradient(90deg,#7C3AED,#C084FC)' }, { w: '58%', g: 'linear-gradient(90deg,#A855F7,#EC4899)' }],
    items: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'TensorFlow (Basics)'],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <ellipse cx="22" cy="19" rx="12" ry="11" stroke="#A855F7" strokeWidth="2" />
        <path d="M10 19 C8 27 12 34 22 36 C32 34 36 27 34 19" stroke="#A855F7" strokeWidth="2" />
        <circle cx="15.5" cy="14.5" r="2" fill="#A855F7" />
        <circle cx="22" cy="10" r="2" fill="#A855F7" />
        <circle cx="28.5" cy="14.5" r="2" fill="#A855F7" />
        <circle cx="28" cy="23" r="2" fill="#A855F7" />
        <circle cx="16" cy="23" r="2" fill="#A855F7" />
        <line x1="22" y1="36" x2="22" y2="41" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="41" x2="27" y2="41" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <>
      <section id="skills" ref={sectionRef} className="py-24 px-8 bg-[#0B0B14]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex items-start justify-between mb-12 reveal">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">What I Do</span>
              </div>
              <h2 className="text-4xl font-black">
                <span className="text-white">My </span>
                <span className="gradient-text">Skills</span>
              </h2>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-300 border border-white/15 rounded-full px-5 py-2.5 hover:bg-white/8 hover:border-white/30 active:scale-95 transition-all"
            >
              View All Skills →
            </button>
          </div>

          {/* 3 × 2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <div
                key={s.id}
                className="reveal group relative rounded-2xl p-6 flex flex-col cursor-default transition-all duration-300"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  background: `radial-gradient(ellipse at -10% -10%, ${s.glow} 0%, #0D0D1A 58%)`,
                  border: `1px solid ${s.border}`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = s.hover; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div className="mb-5">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4">{s.title}</h3>
                <ul className="space-y-2 flex-1 mb-6">
                  {s.items.slice(0, 4).map(item => (
                    <li key={item} className="text-gray-300 text-sm">{item}</li>
                  ))}
                  {s.items.length > 4 && (
                    <li className="text-gray-500 text-xs mt-1">+{s.items.length - 4} more...</li>
                  )}
                </ul>
                <div className="space-y-2.5">
                  {s.bars.map((bar, j) => (
                    <div key={j} className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: bar.w, background: bar.g }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View All Skills Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0E0E1C] border border-white/10 shadow-2xl">
            {/* Modal header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-[#0E0E1C]/95 border-b border-white/8 backdrop-blur-md">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase mb-1">Complete Skill Set</p>
                <h3 className="text-2xl font-black">
                  <span className="text-white">All </span>
                  <span className="gradient-text">Skills</span>
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 active:scale-90 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skills.map(s => (
                <div
                  key={s.id}
                  className="rounded-2xl p-5 flex flex-col gap-4"
                  style={{
                    background: `radial-gradient(ellipse at -10% -10%, ${s.glow} 0%, #0D0D1A 58%)`,
                    border: `1px solid ${s.border}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div>{s.icon}</div>
                    <h4 className="font-bold text-white">{s.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map(item => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          background: `${s.color}18`,
                          border: `1px solid ${s.color}40`,
                          color: s.color,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {s.bars.map((bar, j) => (
                      <div key={j} className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: bar.w, background: bar.g }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
