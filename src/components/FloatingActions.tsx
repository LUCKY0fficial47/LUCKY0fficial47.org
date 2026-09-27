import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Youtube, MessageCircle, ArrowUp, Sparkles, Home, Compass, Bookmark, Shield } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { 
    setIsSubscribeModalOpen, 
    setIsAIChatOpen, 
    currentPage, 
    setCurrentPage, 
    setIsProfileOpen, 
    currentUser 
  } = useApp();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello LUCKY tech TV Official! I am reaching out from your official website.");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Cluster (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181820] border border-white/15 text-white shadow-xl hover:bg-white/10 hover:border-[#00BFFF] transition-all"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}

        {/* WhatsApp Direct Chat Button */}
        <button
          onClick={handleWhatsApp}
          title="Chat on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-950/40 hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle className="h-5 w-5 fill-current" />
        </button>

        {/* Floating YouTube Subscribe Pill */}
        <button
          onClick={() => setIsSubscribeModalOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#FF0000] text-white shadow-xl shadow-red-950/60 hover:bg-red-600 hover:scale-105 active:scale-95 transition-all"
        >
          <Youtube className="h-4 w-4 fill-white" />
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">Subscribe</span>
        </button>
      </div>

      {/* Mobile App-like Bottom Navigation Bar (Hidden on desktop) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 h-16 bg-[#0E0E12]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-around px-2">
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            currentPage === 'home' ? 'text-[#00BFFF]' : 'text-slate-400'
          }`}
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('ai-tools');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            currentPage === 'ai-tools' ? 'text-[#00BFFF]' : 'text-slate-400'
          }`}
        >
          <Compass className="h-4 w-4" />
          <span>AI Tools</span>
        </button>

        {/* Center AI Chat Action */}
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="flex flex-col items-center -mt-5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF0000] via-[#8A2BE2] to-[#00BFFF] p-0.5 shadow-lg shadow-purple-950/50">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0D0D0D]">
              <Sparkles className="h-5 w-5 text-[#FFD700]" />
            </div>
          </div>
          <span className="text-[10px] font-semibold text-purple-300 mt-0.5">AI Bot</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('tutorials');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            currentPage === 'tutorials' ? 'text-[#00BFFF]' : 'text-slate-400'
          }`}
        >
          <Youtube className="h-4 w-4" />
          <span>Guides</span>
        </button>

        <button
          onClick={() => setIsProfileOpen(true)}
          className="flex flex-col items-center gap-1 text-[10px] font-medium text-slate-400 hover:text-white"
        >
          <Bookmark className="h-4 w-4" />
          <span>Saved</span>
        </button>
      </div>
    </>
  );
};
