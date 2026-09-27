import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Youtube, 
  Send, 
  Mail, 
  CheckCircle2, 
  ArrowUp, 
  Sparkles,
  Shield,
  Heart,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    setCurrentPage, 
    language, 
    setIsSubscribeModalOpen,
    showToast 
  } = useApp();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast(
      language === 'hi'
        ? 'VIP न्यूज़लेटर सदस्यता सफल हुई!'
        : 'Subscribed to LUCKY tech TV VIP weekly digest!'
    );
  };

  const navTo = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0D] text-left text-slate-400">
      {/* Newsletter Accent Strip */}
      <div className="border-b border-white/5 bg-gradient-to-r from-[#FF0000]/10 via-[#8A2BE2]/10 to-[#00BFFF]/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFD700] mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{language === 'hi' ? 'वीआईपी टेक इनसाइट्स' : 'Weekly AI & Tech Digest'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {language === 'hi'
                  ? 'हर हफ्ते नए AI प्रॉम्पट्स और यूट्यूब ग्रोथ सीक्रेट्स'
                  : 'Get Curated AI Tools & YouTube Growth Blueprints in Your Inbox'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {language === 'hi'
                  ? 'बिना किसी स्पैम के, सिर्फ काम की टेक इनसाइट्स। 45,000+ क्रिएटर्स पहले से जुड़े हैं।'
                  : 'Zero spam. High-signal breakdowns delivered every Friday to 45,000+ tech creators.'}
              </p>
            </div>

            {/* Newsletter Input */}
            <div className="w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{language === 'hi' ? 'आप सदस्यता ले चुके हैं!' : 'You are subscribed! Thank you.'}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="creator@gmail.com"
                    className="rounded-xl border border-white/10 bg-[#121216] px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none min-w-[240px]"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#00BFFF] text-xs font-bold text-black hover:bg-sky-400 transition-colors whitespace-nowrap"
                  >
                    <span>{language === 'hi' ? 'ज्वाइन करें' : 'Subscribe'}</span>
                    <Send className="h-3 w-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF0000] via-[#8A2BE2] to-[#00BFFF] p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#0D0D0D]">
                  <Youtube className="h-4.5 w-4.5 text-[#FF0000]" />
                </div>
              </div>
              <span className="font-bold tracking-tight text-xl text-white">
                LUCKY <span className="text-[#00BFFF]">tech</span> <span className="text-[#FFD700]">TV</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {language === 'hi'
                ? 'LUCKY tech TV Official: भारत का विश्वसनीय टेक व AI मीडिया प्लेटफॉर्म। AI वीडियो ट्यूटोरियल्स, यूट्यूब सीक्रेट्स और मोबाइल ट्रिक्स का संपूर्ण केंद्र।'
                : 'LUCKY tech TV Official: Premier bilingual tech authority covering generative AI tools, YouTube video mastery, algorithms, and mobile optimizations.'}
            </p>

            <div className="space-y-1 text-xs">
              <div className="text-slate-300 font-semibold">Official Contact:</div>
              <a
                href="mailto:lucky0fficial47.org@gmail.com"
                className="text-[#00BFFF] hover:underline"
              >
                lucky0fficial47.org@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.youtube.com/@LUCKYtechTV"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/40 transition-colors"
              >
                <Youtube className="h-4.5 w-4.5 fill-current" />
              </a>
              <button
                onClick={() => setIsSubscribeModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/30 text-xs font-semibold text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-colors"
              >
                <span>Subscribe 250K+</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navTo('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navTo('ai-tools')} className="hover:text-white transition-colors">
                  AI Tools Directory
                </button>
              </li>
              <li>
                <button onClick={() => navTo('tutorials')} className="hover:text-white transition-colors">
                  AI Video Tutorials
                </button>
              </li>
              <li>
                <button onClick={() => navTo('youtube-tips')} className="hover:text-white transition-colors">
                  YouTube Growth Tips
                </button>
              </li>
              <li>
                <button onClick={() => navTo('tech-news')} className="hover:text-white transition-colors">
                  Tech News & Leaks
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navTo('blog')} className="hover:text-white transition-colors">
                  Articles & Guides
                </button>
              </li>
              <li>
                <button onClick={() => navTo('about')} className="hover:text-white transition-colors">
                  About the Channel
                </button>
              </li>
              <li>
                <button onClick={() => navTo('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors">
                  Contact & Sponsorship
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Policy</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navTo('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navTo('terms')} className="hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navTo('disclaimer')} className="hover:text-white transition-colors">
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LUCKY tech TV Official. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Designed for Mobile, Desktop & Smart TV</span>
            <span>·</span>
            <span className="text-slate-400">Hindi + English</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
