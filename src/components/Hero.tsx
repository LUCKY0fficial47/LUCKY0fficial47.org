import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HERO_IMAGE } from '../data/initialData';
import { 
  Play, 
  Youtube, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Eye, 
  Users, 
  Award,
  Film
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { 
    language, 
    setCurrentPage, 
    setIsSubscribeModalOpen, 
    videos, 
    setActiveVideo 
  } = useApp();

  const featuredVideo = videos[0] || null;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5">
      {/* Background Neon Ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#00BFFF]/15 via-[#8A2BE2]/15 to-[#FF0000]/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Editorial Lead-in (Clean typography, no pill enclosures) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#00BFFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0000] animate-ping" />
              <span>
                {language === 'hi'
                  ? 'आधिकारिक टेक व AI कम्युनिटी'
                  : 'Official Tech & AI Creator Hub'}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-[#FFD700]">Hindi + English</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {language === 'hi' ? (
                <>
                  मास्टर करें <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#8A2BE2] to-[#FF0000]">AI टूल्स</span> और यूट्यूब वीडियो क्रिएशन
                </>
              ) : (
                <>
                  Master Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#8A2BE2] to-[#FF0000]">AI Video</span> & YouTube Technology
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'LUCKY tech TV पर सीखें AI वीडियो निर्माण, बेस्ट AI टूल्स, यूट्यूब एल्गोरिद्म ट्रिक्स, लेटेस्ट टेक न्यूज़ और सीक्रेट मोबाइल सेटिंग्स आसान भाषा में।'
                : 'Step-by-step masterclasses in generative AI video creation, top productivity tools, YouTube algorithmic growth, and smartphone mastery.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsSubscribeModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF0000] text-sm font-semibold text-white shadow-xl shadow-red-950/60 hover:bg-red-600 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Youtube className="h-5 w-5" />
                <span>{language === 'hi' ? 'चैनल सब्सक्राइब करें' : 'Subscribe on YouTube'}</span>
              </button>

              <button
                onClick={() => setCurrentPage('tutorials')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-[#00BFFF]/40 transition-colors whitespace-nowrap"
              >
                <span>{language === 'hi' ? 'ट्यूटोरियल्स देखें' : 'Explore Tutorials'}</span>
                <ArrowRight className="h-4 w-4 text-[#00BFFF]" />
              </button>

              <button
                onClick={() => setCurrentPage('ai-tools')}
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-xl border border-[#8A2BE2]/30 bg-[#8A2BE2]/10 text-xs sm:text-sm font-medium text-purple-200 hover:bg-[#8A2BE2]/20 transition-colors whitespace-nowrap"
              >
                <Sparkles className="h-4 w-4 text-[#FFD700]" />
                <span>{language === 'hi' ? 'AI टूल्स खोजें' : 'AI Directory'}</span>
              </button>
            </div>

            {/* Proof Metrics (Claim-to-Proof Adjacency, Tabular Numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">250K+</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'hi' ? 'सक्रिय सब्सक्राइबर्स' : 'Active Subscribers'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">15M+</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'hi' ? 'कुल वीडियो व्यूज' : 'Video Views'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">450+</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'hi' ? 'टेक गाइड्स' : 'Tech Guides'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FFD700] tabular-nums">4.9/5</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'hi' ? 'कम्युनिटी रेटिंग' : 'Audience Rating'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Marquee Video Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-[#00BFFF]/40 via-white/10 to-[#8A2BE2]/30 shadow-2xl">
              <div className="relative overflow-hidden rounded-[15px] bg-[#141418]">
                
                {/* Visual Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={HERO_IMAGE}
                    alt="LUCKY tech TV Official Studio"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Floating Play Button */}
                  <button
                    onClick={() => featuredVideo && setActiveVideo(featuredVideo)}
                    aria-label="Play Featured Video"
                    className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-2xl shadow-red-900/80 hover:scale-110 active:scale-95 transition-all"
                  >
                    <Play className="h-7 w-7 fill-white translate-x-0.5" />
                  </button>

                  {/* Top Right Duration Tag */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-semibold text-white tabular-nums">
                    18:42 · 4K UHD
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 text-left space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[#00BFFF] font-semibold">Featured Masterclass</span>
                    <span>420K views · 2 days ago</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2 hover:text-[#00BFFF] transition-colors cursor-pointer"
                      onClick={() => featuredVideo && setActiveVideo(featuredVideo)}>
                    {language === 'hi'
                      ? 'AI वीडियो क्रिएशन मास्टरक्लास 2026: स्क्रिप्ट से 4K वीडियो तक का पूरा प्रोसेस'
                      : 'Complete AI Video Creation Masterclass 2026: From Script to 4K Hyper-Realistic Video'}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 text-[#FFD700]">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Runway + Midjourney + ElevenLabs</span>
                    </div>
                    <button
                      onClick={() => featuredVideo && setActiveVideo(featuredVideo)}
                      className="text-white hover:text-[#00BFFF] font-medium flex items-center gap-1"
                    >
                      <span>Watch</span>
                      <Play className="h-3 w-3 fill-current" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
