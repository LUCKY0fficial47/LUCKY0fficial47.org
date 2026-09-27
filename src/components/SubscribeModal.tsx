import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Youtube, Bell, Mail, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const SubscribeModal: React.FC = () => {
  const { isSubscribeModalOpen, setIsSubscribeModalOpen, language, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  if (!isSubscribeModalOpen) return null;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setNewsletterSubscribed(true);
    showToast(
      language === 'hi'
        ? 'धन्यवाद! आप LUCKY tech VIP न्यूज़लेटर में शामिल हो गए हैं।'
        : 'Thank you! You are now subscribed to the VIP Tech Newsletter.'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#141419] p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            setIsSubscribeModalOpen(false);
            setNewsletterSubscribed(false);
          }}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Brand Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF0000]/15 text-[#FF0000] border border-[#FF0000]/30 mb-5">
          <Youtube className="h-8 w-8 fill-current" />
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {language === 'hi' ? 'LUCKY tech TV कम्युनिटी से जुड़ें' : 'Join the Official LUCKY tech TV Community'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
          {language === 'hi'
            ? '250,000+ क्रिएटर्स और टेक लवर्स के साथ सीखें। हर हफ्ते नए AI टूल्स, 4K ट्यूटोरियल्स और सीक्रेट ट्रिक्स प्राप्त करें।'
            : 'Join over 250,000 creators mastering AI generation, YouTube growth formulas, and cutting-edge tech.'}
        </p>

        {/* Benefits List */}
        <div className="my-5 space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Weekly tested AI Video Prompts & Templates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Exclusive YouTube CTR & Retention Blueprints</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Instant notification on breaking smartphone tricks</span>
          </div>
        </div>

        {/* Direct YouTube Link Button */}
        <a
          href="https://www.youtube.com/@LUCKYtechTV?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#FF0000] text-sm font-bold text-white shadow-xl shadow-red-950/60 hover:bg-red-600 transition-all mb-4"
        >
          <Youtube className="h-5 w-5 fill-white" />
          <span>{language === 'hi' ? 'यूट्यूब पर सब्सक्राइब करें (फ्री)' : 'Subscribe Directly on YouTube (Free)'}</span>
          <ExternalLink className="h-4 w-4 opacity-70 ml-1" />
        </a>

        {/* VIP Newsletter Form */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFD700] mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{language === 'hi' ? 'वीआईपी ईमेल न्यूज़लेटर' : 'VIP Creator Newsletter'}</span>
          </div>

          {newsletterSubscribed ? (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>You are on the priority list! Welcome aboard.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="flex-1 rounded-xl border border-white/10 bg-[#0E0E12] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-[#00BFFF] text-xs font-bold text-black hover:bg-sky-400 transition-colors whitespace-nowrap"
              >
                Join Free
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
