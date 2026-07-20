import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const projects = [
  {
    title: 'Smart Plant Care System',
    desc: 'IoT based smart system that monitors soil moisture, water level and automates watering.',
    img: '/assets/images/projects/Smart Plant.png',
    tags: [
      { label: 'IoT', cls: 'border-teal-500/40 text-teal-400 bg-teal-500/10' },
      { label: 'NodeMCU', cls: 'border-purple-500/40 text-purple-400 bg-purple-500/10' },
      { label: 'Blynk', cls: 'border-blue-500/40 text-blue-400 bg-blue-500/10' },
    ],
  },
  {
    title: 'Blind Navigation Stick',
    desc: 'Helping visually impaired people to navigate safely using sensors and audio feedback.',
    img:'/assets/images/projects/Smart Stick.png',
    tags: [
      { label: 'Arduino', cls: 'border-blue-500/40 text-blue-400 bg-blue-500/10' },
      { label: 'Ultrasonic', cls: 'border-teal-500/40 text-teal-400 bg-teal-500/10' },
      { label: 'Buzzer', cls: 'border-purple-500/40 text-purple-400 bg-purple-500/10' },
    ],
  },
  {
    title: 'Laser Angle Measurement',
    desc: 'Calculates the angle using laser and sensors with high precision measurement.',
    img: '/assets/images/projects/lazer.png',
    tags: [
      { label: 'Arduino', cls: 'border-blue-500/40 text-blue-400 bg-blue-500/10' },
      { label: 'Laser', cls: 'border-red-500/40 text-red-400 bg-red-500/10' },
      { label: 'LCD', cls: 'border-teal-500/40 text-teal-400 bg-teal-500/10' },
    ],
  },
  {
    title: 'Royal Baraat (Concept)',
    desc: 'Car booking app for weddings with multiple features and a user-friendly interface.',
    img: '/assets/images/projects/Royal.png',
    tags: [
      { label: 'Figma', cls: 'border-purple-500/40 text-purple-400 bg-purple-500/10' },
      { label: 'UI/UX', cls: 'border-purple-500/40 text-purple-400 bg-purple-500/10' },
      { label: 'Firebase', cls: 'border-orange-500/40 text-orange-400 bg-orange-500/10' },
    ],
  },
];

const DOTS = 6;

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 1024 ? 2 : 4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const maxIndex = Math.max(0, projects.length - visibleCount);
  const next = () => setIndex(i => Math.min(i + 1, maxIndex));
  const prev = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <>
      <section id="projects" className="py-24 px-8 bg-[#0A0A12]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">My Work</span>
              </div>
              <h2 className="text-4xl font-black">
                <span className="text-white">Featured </span>
                <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-300 border border-white/15 rounded-full px-5 py-2.5 hover:bg-white/8 hover:border-white/30 active:scale-95 transition-all"
            >
              View All Projects →
            </button>
          </div>

          {/* Carousel */}
          <div className="relative px-7">
            <button onClick={prev} disabled={index === 0}
              className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#12121E] border border-white/12 flex items-center justify-center text-white hover:bg-white/8 active:scale-90 transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-lg"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(calc(-${index * (100 / visibleCount)}% - ${index * 16 / visibleCount}px))` }}
              >
                {projects.map((p, i) => (
                  <div key={i}
                    className="flex-shrink-0 rounded-2xl border border-white/8 bg-[#0F0F1A] overflow-hidden group hover:border-purple-500/30 hover:shadow-[0_0_24px_rgba(139,92,246,0.18)] transition-all duration-300"
                    style={{ width: `calc(${100 / visibleCount}% - ${(4 * (visibleCount - 1)) / visibleCount}px)` }}
                  >
                    <div className="h-48 overflow-hidden bg-[#0a0a14]">
                      <img src={p.img} alt={p.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white mb-2 text-[15px]">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map(t => (
                          <span key={t.label} className={`text-xs font-medium px-3 py-1 rounded-full border ${t.cls}`}>
                            {t.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={next} disabled={index >= maxIndex}
              className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#12121E] border border-white/12 flex items-center justify-center text-white hover:bg-white/8 active:scale-90 transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-lg"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: DOTS }).map((_, i) => (
              <button key={i} onClick={() => setIndex(Math.min(i, maxIndex))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* View All Projects Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0E0E1C] border border-white/10 shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-[#0E0E1C]/95 border-b border-white/8 backdrop-blur-md">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase mb-1">All Projects</p>
                <h3 className="text-2xl font-black">
                  <span className="text-white">Featured </span>
                  <span className="gradient-text">Projects</span>
                </h3>
              </div>
              <button onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 active:scale-90 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projects.map((p, i) => (
                <div key={i}
                  className="rounded-2xl border border-white/8 bg-[#0F0F1A] overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden bg-[#0a0a14]">
                    <img src={p.img} alt={p.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <span key={t.label} className={`text-xs font-medium px-3 py-1 rounded-full border ${t.cls}`}>
                          {t.label}
                        </span>
                      ))}
                    </div>
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
