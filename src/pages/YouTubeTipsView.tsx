import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { YOUTUBE_TIPS_IMAGE } from '../data/initialData';
import { 
  TrendingUp, 
  Youtube, 
  Target, 
  Zap, 
  DollarSign, 
  Calculator, 
  CheckCircle2, 
  Play 
} from 'lucide-react';

export const YouTubeTipsView: React.FC = () => {
  const { language, videos, setActiveVideo, setIsSubscribeModalOpen } = useApp();

  // Interactive RPM / Earnings Calculator
  const [monthlyViews, setMonthlyViews] = useState(250000);
  const [nicheRpm, setNicheRpm] = useState(3.5); // USD per 1k views for Tech

  const estimatedUSD = ((monthlyViews / 1000) * nicheRpm).toFixed(0);
  const estimatedINR = (parseFloat(estimatedUSD) * 87).toLocaleString();

  const youtubeVideos = videos.filter(v => v.category === 'youtube-tips');

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF0000]">
            <Youtube className="h-4 w-4" />
            <span>{language === 'hi' ? 'यूट्यूब चैनल ग्रोथ गाइड 2026' : 'YouTube Channel Growth Blueprint'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? 'यूट्यूब एल्गोरिद्म और वायरल रिटेंशन के गुप्त फॉर्मूले'
              : 'Algorithmic Distribution, High CTR & Retention Engineering'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'LUCKY tech TV ने कैसे 0 से 250,000 सब्सक्राइबर्स और 1.5 करोड़ व्यूज हासिल किए। पूरा गणितीय ब्रेकडाउन।'
              : 'The exact framework responsible for generating 15M+ organic impressions across browse features and suggested loops.'}
          </p>
        </div>

        {/* Interactive YouTube Earnings Estimator */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#141419] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD700]/20 text-[#FFD700]">
                <Calculator className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {language === 'hi' ? 'इंटरैक्टिव यूट्यूब कमाई कैलकुलेटर' : 'Interactive Tech Creator Revenue Estimator'}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === 'hi'
                    ? 'अपने संभावित मासिक व्यूज और टेक RPM के आधार पर अनुमानित रेवेन्यू देखें'
                    : 'Calculate projected AdSense income based on category RPM benchmarks'}
                </p>
              </div>
            </div>
            <span className="text-[11px] text-[#00BFFF] uppercase font-bold">Tech & AI Niche</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Monthly Video Views</span>
                  <span className="font-bold text-white tabular-nums">{monthlyViews.toLocaleString()} views</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={2000000}
                  step={10000}
                  value={monthlyViews}
                  onChange={(e) => setMonthlyViews(Number(e.target.value))}
                  className="w-full accent-[#FF0000] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Audience Tech RPM (USD per 1,000 views)</span>
                  <span className="font-bold text-[#FFD700] tabular-nums">${nicheRpm.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={8.0}
                  step={0.5}
                  value={nicheRpm}
                  onChange={(e) => setNicheRpm(Number(e.target.value))}
                  className="w-full accent-[#FFD700] cursor-pointer"
                />
              </div>
            </div>

            {/* Result Display */}
            <div className="p-6 rounded-xl border border-white/5 bg-[#181822] text-center space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Monthly Earnings</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00BFFF] tabular-nums">
                ${estimatedUSD} <span className="text-sm font-normal text-slate-400">USD</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-[#FFD700] tabular-nums">
                ≈ ₹{estimatedINR} <span className="text-xs font-normal text-slate-400">INR / month</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                *Based on standard 55% YouTube partner share with blended Hindi/Global demographics.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Retention Hacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF0000]/15 text-[#FF0000]">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Title Hook Formula</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formula: [Shocking Payoff] + [Clear Target] + [Curiosity Constraint]. Example: "I Tested 50 Free AI Tools (Only 3 Actually Work)".
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00BFFF]/15 text-[#00BFFF]">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">First 30 Seconds Rule</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Never introduce yourself or ask for subscribers before the 5-minute mark. Deliver on the thumbnail promise within the first 10 seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A2BE2]/15 text-[#8A2BE2]">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Suggested Video Loop</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Group your videos into 3-part trilogies. The algorithm notices when a single user watches multiple videos in one session and multiplies your impressions.
            </p>
          </div>
        </div>

        {/* Video Tutorials for YouTube */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {language === 'hi' ? 'संबंधित यूट्यूब मास्टरक्लास वीडियो' : 'YouTube Masterclass Videos'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map(video => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141419] overflow-hidden hover:border-[#FF0000]/50 hover:bg-[#181822] cursor-pointer transition-all"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title.en}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xl shadow-red-950/80 group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 fill-white translate-x-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 text-[11px] font-semibold text-white">
                    {video.duration}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-[#FF0000] uppercase font-semibold text-[11px]">YouTube Tips</span>
                    <span>·</span>
                    <span>{video.views} views</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#FF0000] transition-colors line-clamp-2">
                    {language === 'hi' ? video.title.hi : video.title.en}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {language === 'hi' ? video.description.hi : video.description.en}
                  </p>
                </div>

                <div className="p-5 pt-0 border-t border-white/5 mt-3 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#FFD700] font-medium">{video.date}</span>
                  <span className="text-white group-hover:text-[#FF0000] font-semibold">
                    Watch Masterclass →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
