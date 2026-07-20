import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Eye, Lightbulb, Monitor, Code2, Wind, Cpu, BookOpen, X,} from 'lucide-react';

const achievements = [
  {
    title: 'Active Member - Drone Club',
    sub: 'Galgotias Centre for Drone Intelligence & Simulation',
    iconBg: 'bg-[#1E2A4A]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.5" fill="#3B82F6" />
        <line x1="12" y1="9.5" x2="12" y2="5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="14.5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="9.5" y1="12" x2="5" y2="12" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="19" y1="12" x2="14.5" y2="12" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="5" r="2" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="12" cy="19" r="2" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="5" cy="12" r="2" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="19" cy="12" r="2" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Active Member - Robotics Club',
    sub: 'Galgotias Robotics Club',
    iconBg: 'bg-[#0D2A2A]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="7" y="10" width="10" height="8" rx="2" fill="none" stroke="#14B8A6" strokeWidth="1.6" />
        <circle cx="10" cy="14" r="1" fill="#14B8A6" />
        <circle cx="14" cy="14" r="1" fill="#14B8A6" />
        <path d="M9 10V8a3 3 0 0 1 6 0v2" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="5" y1="12" x2="7" y2="12" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="17" y1="12" x2="19" y2="12" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="7" r="1" fill="#14B8A6" />
      </svg>
    ),
  },
  {
    title: 'Hackathon Participant',
    sub: 'Participated in multiple hackathons and ideathons',
    iconBg: 'bg-[#2A1E08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3L9 9H3L8 13.5L6 20L12 16L18 20L16 13.5L21 9H15Z" fill="rgba(234,179,8,0.2)" stroke="#EAB308" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Consistent Learner',
    sub: '100+ hours of learning in 6+ different technologies',
    iconBg: 'bg-[#1A1030]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#A855F7" />
        <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const certs = [
  {
    title: 'Computational Thinking',
    provider: 'GUVI (HCL)',
    date: 'NOVEMBER 2025',
    image: '/assets/images/projects/HCL GUVI Certification - CT.png',
    icon: <Lightbulb size={18} className="text-gray-400" />,
  },
  {
    title: 'C Programming',
    provider: 'GUVI (HCL)',
    date: 'Dec 2025',
    image: '/assets/images/projects/HCL GUVI Certification - C PRO.png',
    icon: <Monitor size={18} className="text-gray-400" />,
  },
  {
    title: 'OOPS using C++',
    provider: 'GUVI (HCL)',
    date: 'Apr 2026',
    image: '/assets/images/projects/HCL GUVI Certification - OOPS.png',
    icon: <Code2 size={18} className="text-gray-400" />,
  },
  {
    title: 'Wind Hybrid Energy Workshop',
    provider: 'IEEE IAS x DEECE',
    date: 'Oct 2025',
    image: '/assets/images/projects/IEEE IAS x DEECE.jpeg',
    icon: <Wind size={18} className="text-gray-400" />,
  },
  {
    title: 'IT World Essentials_ Your Digital Entry Point',
    provider: 'L&T Edutech',
    date: 'Jan 2026',
    image: '/assets/images/projects/Abhay Kumar_IT World Essentials_ Your Digital Entry Point_page-.jpg',
    icon: <Cpu size={18} className="text-gray-400" />,
  },
  {
    title: 'Build For Snap by snapchat',
    provider: 'Bharat XR',
    date: 'Mar 2026',
    image: '/assets/images/projects/Bharat XR - Abhay.jpg',
    icon: <BookOpen size={18} className="text-gray-400" />,
  },
];

export default function AchievementsCerts() {
  const [certIdx, setCertIdx] = useState(0);
  const [visibleCerts, setVisibleCerts] = useState(4);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [openCert, setOpenCert] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCerts(1);
      else if (window.innerWidth < 1024) setVisibleCerts(2);
      else setVisibleCerts(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (openCert !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [openCert]);

  const maxIdx = Math.max(0, certs.length - visibleCerts);
  const prev = () => setCertIdx(i => Math.max(i - 1, 0));
  const next = () => setCertIdx(i => Math.min(i + 1, maxIdx));

  const cardWidthPct = 100 / visibleCerts;
  const gapPx = 16;

  {/*const handleDownload = (image: string, title: string) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };*/}

  return (
    <>
      {/* ── Achievements ── */}
      <section id="achievements" className="py-24 px-6 bg-[#0A0A12]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">Achievements</span>
          </div>
          <h2 className="text-5xl font-black text-white mb-10">Achievements</h2>

          <div className="space-y-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-2xl bg-[#0E0E1C] border border-white/6 px-6 py-5 hover:border-white/12 hover:bg-[#111120] transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${a.iconBg} flex items-center justify-center`}>
                  {a.icon}
                </div>
                <div>
                  <p className="font-bold text-white text-base">{a.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certificates" className="py-24 px-6 bg-[#0A0A12]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">Certificates</span>
          </div>
          <h2 className="text-5xl font-black mb-10">
            <span className="text-white">My </span>
            <span className="gradient-text">Certifications</span>
          </h2>

          {/* Carousel */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={prev}
              disabled={certIdx === 0}
              className="absolute -left-6 top-[45%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0E0E1C] border border-white/12 flex items-center justify-center text-white hover:bg-white/8 transition-colors disabled:opacity-20 disabled:cursor-not-allowed shadow-lg"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex transition-transform duration-500 ease-out"
                style={{
                  gap: `${gapPx}px`,
                  transform: `translateX(calc(-${certIdx * cardWidthPct}% - ${certIdx * gapPx * (1 - 1 / visibleCerts)}px))`,
                }}
              >
                {certs.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => setOpenCert(i)}
                    className="flex-shrink-0 rounded-2xl bg-[#0E0E1C] border border-white/8 overflow-hidden hover:border-white/18 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    style={{ width: `calc(${cardWidthPct}% - ${gapPx * (visibleCerts - 1) / visibleCerts}px)` }}
                    onMouseEnter={() => setHoveredCert(i)}
                    onMouseLeave={() => setHoveredCert(null)}
                  >
                    {/* Certificate image */}
                    <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Eye overlay */}
                      <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${hoveredCert === i ? 'opacity-100' : 'opacity-0'}`}>
                        <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors">
                          <Eye size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 relative">
                      <div className="mb-3">{c.icon}</div>
                      <h3 className="font-bold text-white text-base leading-snug mb-1">{c.title}</h3>
                      <p className="text-gray-400 text-sm">{c.provider}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{c.date}</p>

                      {/* Green G badge */}
                      <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-base shadow-md">
                        G
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              disabled={certIdx >= maxIdx}
              className="absolute -right-6 top-[45%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0E0E1C] border border-white/12 flex items-center justify-center text-white hover:bg-white/8 transition-colors disabled:opacity-20 disabled:cursor-not-allowed shadow-lg"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: certs.length }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCertIdx(Math.min(i, maxIdx))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === certIdx
                    ? 'w-8 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificate Modal ── */}
      {openCert !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setOpenCert(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpenCert(null)}
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Modal content */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate info */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white">{certs[openCert].title}</h3>
              <p className="text-gray-400 text-sm mt-1">{certs[openCert].provider} · {certs[openCert].date}</p>
            </div>

            {/* Full certificate image */}
            <div className="relative w-full max-h-[70vh] overflow-auto rounded-lg bg-white">
              <img
                src={certs[openCert].image}
                alt={certs[openCert].title}
                className="w-full h-auto"
              />
            </div>

            {/* Download button */}
            {/*<button
              onClick={() => handleDownload(certs[openCert].image, certs[openCert].title)}
              className="mt-5 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
             <Download size={18} />
              Download Certificate
            </button>*/}
          </div>
        </div>
      )}
    </>
  );
}
