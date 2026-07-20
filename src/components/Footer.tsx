import { useEffect, useState } from 'react';
import { Heart, ArrowUp, X, Send, Bot } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certificates', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* Footer */}
      <footer className="border-t border-white/8 bg-[#0B0B14] px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black">
              <span className="gradient-text">A</span><span className="text-white">K</span>
            </span>
            <span className="text-gray-500 text-sm">© 2025 Abhay Kumar. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> &amp; Code
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full bg-[#0F0F1A] border border-white/15 flex items-center justify-center text-white hover:bg-white/10 active:scale-90 transition-all shadow-lg"
          title="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Kripton AI floating chat widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat panel */}
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 rounded-2xl border border-white/10 bg-[#0F0F1A] shadow-2xl overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8B5CF6]/25 to-[#3B82F6]/25 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Kripton AI</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white active:scale-90 transition-all"
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>
            {/* Body */}
            <div className="p-4 h-64 overflow-y-auto space-y-3">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-200 max-w-[80%]">
                  Hi! I'm Kripton AI. How can I help you today?
                </div>
              </div>
            </div>
            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-white/8">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-white/5 text-white text-sm rounded-full px-4 py-2 outline-none placeholder:text-gray-500 focus:bg-white/8 transition-colors"
              />
              <button
                className="w-9 h-9 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-white hover:opacity-90 active:scale-90 transition-all"
                title="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Circular launcher button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all"
          title="Kripton AI"
        >
          {chatOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Bot size={26} className="text-white" />
          )}
          {!chatOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#0A0A12]" />
          )}
        </button>
      </div>
    </>
  );
}
