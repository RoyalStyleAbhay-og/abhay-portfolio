import { Mail, MapPin, Linkedin, Instagram, Github, Bot, MessageSquare } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail size={20} />,
    iconColor: 'text-blue-400',
    iconBg: 'bg-[#1A2744] border-blue-500/30',
    label: 'Email',
    value: 'abhay799211@gmail.com',
    href: 'mailto:abhay799211@gmail.com',
    rowStart: 1,
    colStart: 1,
  },
  {
    icon: <MapPin size={20} />,
    iconColor: 'text-red-400',
    iconBg: 'bg-[#2A1520] border-red-500/30',
    label: 'Location',
    value: 'Greater Noida, India',
    href: 'https://maps.google.com/?q=Greater+Noida,+India',
    rowStart: 1,
    colStart: 2,
  },
  {
    icon: <Linkedin size={20} />,
    iconColor: 'text-blue-400',
    iconBg: 'bg-[#0E2038] border-blue-600/30',
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhay-kumar-ece',
    href: 'https://linkedin.com/in/abhay-kumar-ece',
    rowStart: 2,
    colStart: 1,
  },
  {
    icon: <Instagram size={20} />,
    iconColor: 'text-pink-400',
    iconBg: 'bg-[#2A1030] border-pink-500/30',
    label: 'Instagram',
    value: '@mr.devilking80',
    href: 'https://instagram.com/mr.devilking80',
    rowStart: 2,
    colStart: 2,
  },
  {
    icon: <Github size={20} />,
    iconColor: 'text-gray-300',
    iconBg: 'bg-[#1A1A2E] border-white/15',
    label: 'GitHub',
    value: 'github.com/RoyalStyleAbhay-og',
    href: 'https://github.com/RoyalStyleAbhay-og',
    rowStart: 3,
    colStart: 1,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0B0B14]">
      <div className="max-w-7xl mx-auto">
        {/* Header – left-aligned like the image */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Get In </span>
            <span className="text-[#8B5CF6]">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            I'm always open to discussing new projects, creative ideas or opportunities.
          </p>
        </div>

        {/* Content grid: contact cards left, AI card right */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: 2-col contact grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 rounded-2xl border bg-[#0F0F1A] border-white/8 p-4 hover:bg-[#131325] hover:border-white/15 transition-all group ${item.label === 'GitHub' ? 'sm:col-span-1' : ''}`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${item.iconBg} ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-white text-sm font-semibold truncate group-hover:text-[#A78BFA] transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Kripton AI card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-8 flex flex-col items-center gap-4 text-center">
              {/* Bot avatar */}
              <div className="w-20 h-20 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-lg shadow-purple-700/40">
                <Bot size={38} className="text-white" />
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-1">Kripton AI</h3>
                <p className="text-gray-400 text-sm">How can I help you?</p>
              </div>

              <a
                href="mailto:abhay799211@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5B21B6] hover:bg-[#4C1D95] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm mt-1"
              >
                <MessageSquare size={16} />
                Chat with Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
