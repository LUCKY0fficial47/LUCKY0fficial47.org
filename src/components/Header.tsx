import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Youtube, 
  User, 
  Languages, 
  Menu, 
  X, 
  Sparkles,
  ChevronDown,
  Tv,
  Bookmark,
  Clock,
  ShieldAlert
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    language,
    toggleLanguage,
    setIsSearchOpen,
    currentUser,
    setIsAuthModalOpen,
    setIsProfileOpen,
    setIsSubscribeModalOpen,
    setIsAIChatOpen,
    setIsAdminOpen,
    isCinemaMode,
    toggleCinemaMode
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNav = (page: any) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0D0D0D]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text wordmark as required by constitution */}
        <button 
          onClick={() => handleNav('home')} 
          className="group flex items-center gap-2.5 text-left focus-visible:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF0000] via-[#8A2BE2] to-[#00BFFF] p-[1.5px] shadow-lg shadow-red-950/40">
            <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#0D0D0D]">
              <Youtube className="h-4.5 w-4.5 text-[#FF0000] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-bold tracking-tight text-lg sm:text-xl text-white whitespace-nowrap">
            LUCKY <span className="text-[#00BFFF]">tech</span> <span className="text-[#FFD700]">TV</span>
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links (single line, subtle hover underline) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => handleNav('home')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              currentPage === 'home' ? 'text-white border-b-2 border-[#00BFFF] pb-0.5' : 'text-slate-400'
            }`}
          >
            {language === 'hi' ? 'होम' : 'Home'}
          </button>

          <button
            onClick={() => handleNav('ai-tools')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              currentPage === 'ai-tools' ? 'text-white border-b-2 border-[#00BFFF] pb-0.5' : 'text-slate-400'
            }`}
          >
            {language === 'hi' ? 'AI टूल्स' : 'AI Tools'}
          </button>

          <button
            onClick={() => handleNav('tutorials')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              currentPage === 'tutorials' ? 'text-white border-b-2 border-[#00BFFF] pb-0.5' : 'text-slate-400'
            }`}
          >
            {language === 'hi' ? 'ट्यूटोरियल्स' : 'Tutorials'}
          </button>

          <button
            onClick={() => handleNav('tech-news')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              currentPage === 'tech-news' ? 'text-white border-b-2 border-[#00BFFF] pb-0.5' : 'text-slate-400'
            }`}
          >
            {language === 'hi' ? 'टेक न्यूज़' : 'Tech News'}
          </button>

          <button
            onClick={() => handleNav('youtube-tips')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              currentPage === 'youtube-tips' ? 'text-white border-b-2 border-[#00BFFF] pb-0.5' : 'text-slate-400'
            }`}
          >
            {language === 'hi' ? 'यूट्यूब टिप्स' : 'YouTube Tips'}
          </button>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 text-slate-400 hover:text-white whitespace-nowrap"
            >
              <span>{language === 'hi' ? 'अन्य' : 'More'}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute left-0 mt-3 w-48 rounded-xl border border-white/10 bg-[#141418] p-2 shadow-2xl backdrop-blur-xl">
                <button
                  onClick={() => handleNav('blog')}
                  className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                >
                  {language === 'hi' ? 'ब्लॉग व आर्टिकल्स' : 'Blog & Articles'}
                </button>
                <button
                  onClick={() => handleNav('about')}
                  className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                >
                  {language === 'hi' ? 'हमारे बारे में' : 'About Us'}
                </button>
                <button
                  onClick={() => handleNav('faq')}
                  className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                >
                  {language === 'hi' ? 'सवाल-जवाब (FAQ)' : 'FAQ'}
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                >
                  {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* AI Tech Chatbot Trigger */}
          <button
            onClick={() => setIsAIChatOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#8A2BE2]/40 bg-[#8A2BE2]/10 text-xs font-medium text-purple-300 hover:bg-[#8A2BE2]/20 transition-colors whitespace-nowrap"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00BFFF]" />
            <span>AI Assistant</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            title={language === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Languages className="h-3.5 w-3.5 text-[#FFD700]" />
            <span>{language === 'hi' ? 'HI' : 'EN'}</span>
          </button>

          {/* Smart TV / Cinema Mode */}
          <button
            onClick={toggleCinemaMode}
            title={isCinemaMode ? 'Normal View' : 'Smart TV / Cinema Mode'}
            className={`hidden md:flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
              isCinemaMode
                ? 'border-[#00BFFF] bg-[#00BFFF]/20 text-[#00BFFF]'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <Tv className="h-4 w-4" />
          </button>

          {/* YouTube Subscribe Button (Primary CTA) */}
          <button
            onClick={() => setIsSubscribeModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#FF0000] text-xs sm:text-sm font-semibold text-white shadow-lg shadow-red-950/50 hover:bg-red-600 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <Youtube className="h-4 w-4" />
            <span className="hidden sm:inline">{language === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}</span>
            <span className="sm:hidden">Join</span>
          </button>

          {/* User Account / Profile */}
          {currentUser ? (
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1 sm:px-2.5 sm:py-1 hover:border-[#00BFFF]/40 transition-colors"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="h-7 w-7 rounded-full object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />
              <span className="hidden xl:inline text-xs font-medium text-slate-300 max-w-[90px] truncate">
                {currentUser.name}
              </span>
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white transition-colors"
            >
              <User className="h-4 w-4" />
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0E0E12] px-4 py-4 space-y-2">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === 'home' ? 'bg-[#00BFFF]/10 text-[#00BFFF]' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {language === 'hi' ? 'होम पेज' : 'Home'}
          </button>
          <button
            onClick={() => handleNav('ai-tools')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === 'ai-tools' ? 'bg-[#00BFFF]/10 text-[#00BFFF]' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {language === 'hi' ? 'AI टूल्स डायरेक्टरी' : 'AI Tools Directory'}
          </button>
          <button
            onClick={() => handleNav('tutorials')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === 'tutorials' ? 'bg-[#00BFFF]/10 text-[#00BFFF]' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {language === 'hi' ? 'AI वीडियो ट्यूटोरियल्स' : 'AI Video Tutorials'}
          </button>
          <button
            onClick={() => handleNav('tech-news')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === 'tech-news' ? 'bg-[#00BFFF]/10 text-[#00BFFF]' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {language === 'hi' ? 'टेक न्यूज़' : 'Tech News'}
          </button>
          <button
            onClick={() => handleNav('youtube-tips')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === 'youtube-tips' ? 'bg-[#00BFFF]/10 text-[#00BFFF]' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {language === 'hi' ? 'यूट्यूब ग्रोथ टिप्स' : 'YouTube Growth Tips'}
          </button>
          <button
            onClick={() => handleNav('blog')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === 'blog' ? 'bg-[#00BFFF]/10 text-[#00BFFF]' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {language === 'hi' ? 'ब्लॉग' : 'Blog'}
          </button>
          <button
            onClick={() => handleNav('about')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5"
          >
            {language === 'hi' ? 'चैनल के बारे में' : 'About Channel'}
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5"
          >
            {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
          </button>

          <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setIsAIChatOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-xs font-semibold text-purple-200"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#00BFFF]" />
              AI Assistant
            </button>
            {currentUser?.role === 'admin' && (
              <button
                onClick={() => {
                  setIsAdminOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                Admin Panel
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
