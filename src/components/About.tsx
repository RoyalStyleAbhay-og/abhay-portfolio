import { GraduationCap, MapPin, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const infoCards = [
  {
    icon: <GraduationCap size={22} />,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-400/10',
    label: 'Education',
    value: 'B.Tech ECE\nGalgotias University',
  },
  {
    icon: <MapPin size={22} />,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-400/10',
    label: 'Location',
    value: 'Greater Noida,\nIndia',
  },
  {
    icon: <Calendar size={22} />,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
    label: 'Year',
    value: '1st Year\n(2nd Semester)',
  },
  {
    icon: <MessageCircle size={22} />,
    iconColor: 'text-yellow-300',
    iconBg: 'bg-yellow-300/10',
    label: 'Languages',
    value: 'English, Hindi',
  },
];

function BrainIllustration() {
  return (
    <svg viewBox="0 0 260 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Outer spinning ring gradient */}
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00BFFF" />
          <stop offset="40%" stopColor="#7B2FFF" />
          <stop offset="80%" stopColor="#FF2DAF" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.3" />
        </linearGradient>
        {/* Brain gradient */}
        <linearGradient id="brainLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#8A60FF" />
          <stop offset="100%" stopColor="#FF3ABA" />
        </linearGradient>
        {/* Radial glow for background */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0a3a" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#0d0520" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0A0A12" stopOpacity="0.7" />
        </radialGradient>
        {/* Drop shadow filter */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dark background circle */}
      <circle cx="130" cy="130" r="115" fill="url(#centerGlow)" />

      {/* Outer ring - dashed partial */}
      <circle cx="130" cy="130" r="118" fill="none" stroke="url(#ringGrad)" strokeWidth="2.5"
        strokeDasharray="120 30 60 40 80 20"
        strokeLinecap="round" />

      {/* Second ring */}
      <circle cx="130" cy="130" r="108" fill="none" stroke="#1E1040" strokeWidth="1" />

      {/* Inner decorative ring */}
      <circle cx="130" cy="130" r="102" fill="none" stroke="rgba(100,60,200,0.2)" strokeWidth="0.8" />

      {/* Small accent dots on the outer ring */}
      <circle cx="130" cy="12" r="3" fill="#00D4FF" filter="url(#glow)" />
      <circle cx="244" cy="175" r="2.5" fill="#FF3ABA" filter="url(#glow)" />
      <circle cx="16" cy="95" r="2" fill="#7B2FFF" filter="url(#glow)" />

      {/* === BRAIN === */}
      {/* Main brain outline - left hemisphere */}
      <path
        d="M130 72
           C130 72 118 68 110 62
           C98 54 86 56 80 66
           C72 60 60 62 58 74
           C48 76 44 88 50 98
           C44 104 44 116 52 122
           C48 134 54 144 66 146
           C68 156 78 164 90 162
           C96 168 108 168 116 162
           C120 166 126 168 130 168"
        fill="none"
        stroke="url(#brainLine)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Right hemisphere outer */}
      <path
        d="M130 72
           C130 72 142 68 150 62
           C162 54 174 56 180 66
           C188 60 200 62 202 74
           C212 76 216 88 210 98
           C216 104 216 116 208 122
           C212 134 206 144 194 146
           C192 156 182 164 170 162
           C164 168 152 168 144 162
           C140 166 134 168 130 168"
        fill="none"
        stroke="url(#brainLine)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Brain folds - left side */}
      <path d="M90 70 C84 80 84 98 90 108" fill="none" stroke="url(#brainLine)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" filter="url(#glow)" />
      <path d="M108 65 C102 80 102 100 108 115" fill="none" stroke="url(#brainLine)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" filter="url(#glow)" />
      <path d="M62 90 C68 100 68 112 62 120" fill="none" stroke="url(#brainLine)" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" filter="url(#glow)" />
      <path d="M72 125 C80 132 90 134 98 130" fill="none" stroke="url(#brainLine)" strokeWidth="1.3" opacity="0.6" strokeLinecap="round" filter="url(#glow)" />
      <path d="M80 148 C88 152 100 152 108 148" fill="none" stroke="url(#brainLine)" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" filter="url(#glow)" />

      {/* Brain folds - right side */}
      <path d="M170 70 C176 80 176 98 170 108" fill="none" stroke="url(#brainLine)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" filter="url(#glow)" />
      <path d="M152 65 C158 80 158 100 152 115" fill="none" stroke="url(#brainLine)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" filter="url(#glow)" />
      <path d="M198 90 C192 100 192 112 198 120" fill="none" stroke="url(#brainLine)" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" filter="url(#glow)" />
      <path d="M188 125 C180 132 170 134 162 130" fill="none" stroke="url(#brainLine)" strokeWidth="1.3" opacity="0.6" strokeLinecap="round" filter="url(#glow)" />
      <path d="M180 148 C172 152 160 152 152 148" fill="none" stroke="url(#brainLine)" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" filter="url(#glow)" />

      {/* Center dividing line */}
      <path d="M130 72 L130 168" fill="none" stroke="url(#brainLine)" strokeWidth="1.2" opacity="0.4" strokeDasharray="4 3" />

      {/* Brain stem */}
      <path d="M122 168 L122 185 M138 168 L138 185 M114 185 L146 185" fill="none" stroke="url(#brainLine)" strokeWidth="2" strokeLinecap="round" filter="url(#glow)" />

      {/* Neural connection nodes */}
      <circle cx="130" cy="120" r="5" fill="#7B2FFF" opacity="0.9" filter="url(#softGlow)" />
      <circle cx="130" cy="120" r="2.5" fill="#B060FF" />

      <circle cx="88" cy="96" r="3.5" fill="#00D4FF" opacity="0.85" filter="url(#softGlow)" />
      <circle cx="88" cy="96" r="1.8" fill="#60E8FF" />

      <circle cx="172" cy="96" r="3.5" fill="#FF3ABA" opacity="0.85" filter="url(#softGlow)" />
      <circle cx="172" cy="96" r="1.8" fill="#FF80D0" />

      <circle cx="68" cy="108" r="2.5" fill="#00D4FF" opacity="0.6" filter="url(#glow)" />
      <circle cx="192" cy="108" r="2.5" fill="#FF3ABA" opacity="0.6" filter="url(#glow)" />
      <circle cx="108" cy="78" r="2" fill="#8A60FF" opacity="0.7" filter="url(#glow)" />
      <circle cx="152" cy="78" r="2" fill="#8A60FF" opacity="0.7" filter="url(#glow)" />

      {/* Connective lines between nodes */}
      <line x1="88" y1="96" x2="130" y2="120" stroke="#00D4FF" strokeWidth="0.8" opacity="0.35" />
      <line x1="172" y1="96" x2="130" y2="120" stroke="#FF3ABA" strokeWidth="0.8" opacity="0.35" />
      <line x1="108" y1="78" x2="130" y2="120" stroke="#8A60FF" strokeWidth="0.7" opacity="0.3" />
      <line x1="152" y1="78" x2="130" y2="120" stroke="#8A60FF" strokeWidth="0.7" opacity="0.3" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0A0A12]">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">About Me</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          <span className="text-white">Get To Know </span>
          <span className="text-[#7C3AED]">Me</span>
        </h2>

        {/* Three-column layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT — desk photo + button below */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src='/assets/images/certificates/Abhay.jpg'
                alt="Coding setup"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3.5 rounded-full transition-colors shadow-lg shadow-purple-900/40 text-sm"
            >
              Know More About Me <ArrowRight size={15} />
            </a>
          </div>

          {/* MIDDLE — bio text + 4 info cards in one row */}
          <div className="lg:col-span-6 flex flex-col gap-7">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-[15px]">
                I'm <span className="text-white font-semibold">Abhay Kumar</span>, a 1st year B.Tech ECE student at{' '}
                <span className="text-white font-semibold">Galgotias University</span>. I'm passionate about Electronics,
                AI/ML and building real-world solutions that create impact.
              </p>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                I enjoy learning new technologies, working on projects and participating in hackathons. My goal is to
                become a skilled engineer and contribute to innovative technologies that make life better.
              </p>
            </div>

            {/* 4 cards in a single row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-white/[0.08] bg-[#0F0F1E] p-4 hover:bg-[#13132a] transition-colors flex flex-col gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.iconBg} ${card.iconColor}`}>
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">{card.label}</div>
                    <div className="text-white font-bold text-sm whitespace-pre-line leading-snug">{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — brain SVG in circular ring */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <BrainIllustration />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
