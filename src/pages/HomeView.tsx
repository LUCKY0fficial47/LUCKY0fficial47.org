import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/Hero';
import { ShortsCarousel } from '../components/ShortsCarousel';
import { AIToolsSection } from '../components/AIToolsSection';
import { YouTubeGrowthSection } from '../components/YouTubeGrowthSection';
import { ArticlesSection } from '../components/ArticlesSection';
import { 
  Play, 
  Youtube, 
  Sparkles, 
  Filter, 
  ArrowRight,
  TrendingUp,
  Clock,
  Eye,
  ThumbsUp,
  CheckCircle2
} from 'lucide-react';
import { CategoryType } from '../types';

export const HomeView: React.FC = () => {
  const { 
    videos, 
    language, 
    setActiveVideo, 
    setCurrentPage, 
    setIsSubscribeModalOpen 
  } = useApp();

  const [selectedCat, setSelectedCat] = useState<CategoryType>('all');

  const filteredVideos = selectedCat === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCat);

  return (
    <div className="space-y-4">
      {/* Hero Banner */}
      <Hero />

      {/* Featured Videos Catalog Section */}
      <section className="py-14 border-b border-white/5 bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF0000] mb-1">
                <Youtube className="h-4 w-4" />
                <span>{language === 'hi' ? 'विशेष वीडियो ट्यूटोरियल्स' : 'Curated Video Guides'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === 'hi' ? 'लेटेस्ट व फीचर्ड टेक वीडियो' : 'Featured Video Masterclasses'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {language === 'hi'
                  ? 'AI वीडियो मेकिंग, मोबाइल ट्रिक्स और यूट्यूब टिप्स के सबसे लोकप्रिय वीडियो।'
                  : 'Watch high-retention video guides directly on your screen.'}
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1 p-1 bg-[#15151B] rounded-xl border border-white/10">
              {[
                { id: 'all', en: 'All', hi: 'सभी' },
                { id: 'video-creation', en: 'AI Video', hi: 'AI वीडियो' },
                { id: 'ai-tools', en: 'AI Tools', hi: 'AI टूल्स' },
                { id: 'youtube-tips', en: 'YouTube Tips', hi: 'यूट्यूब टिप्स' },
                { id: 'mobile-tricks', en: 'Mobile Tricks', hi: 'मोबाइल ट्रिक्स' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedCat(f.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    selectedCat === f.id
                      ? 'bg-[#FF0000] text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {language === 'hi' ? f.hi : f.en}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141419] overflow-hidden hover:border-[#00BFFF]/50 hover:bg-[#181822] cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title.en}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xl shadow-red-950/80 group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-white translate-x-0.5" />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 text-[11px] font-semibold text-white tabular-nums">
                      {video.duration}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 text-left space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-[#00BFFF] uppercase font-semibold text-[11px]">{video.category}</span>
                      <span>·</span>
                      <span className="tabular-nums">{video.views} views</span>
                      <span>·</span>
                      <span>{video.date}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00BFFF] transition-colors line-clamp-2 leading-snug">
                      {language === 'hi' ? video.title.hi : video.title.en}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {language === 'hi' ? video.description.hi : video.description.en}
                    </p>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="p-5 pt-0 flex items-center justify-between text-xs text-slate-400 border-t border-white/5 mt-3 pt-3">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <ThumbsUp className="h-3.5 w-3.5 text-[#FFD700]" />
                    <span className="tabular-nums">{video.likes.toLocaleString()}</span>
                  </div>
                  <span className="text-[#00BFFF] font-semibold flex items-center gap-1">
                    Watch Now →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Shorts Carousel */}
      <ShortsCarousel />

      {/* Trending AI Tools (Limit 4 for Home) */}
      <AIToolsSection limit={4} />

      {/* YouTube Algorithmic Growth Master Section */}
      <YouTubeGrowthSection />

      {/* Latest Articles Preview (Limit 3 for Home) */}
      <ArticlesSection limit={3} />

      {/* Big Community CTA */}
      <section className="py-16 bg-gradient-to-b from-[#0D0D0D] to-[#121218] border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 text-xs font-semibold text-[#FF0000]">
            <Youtube className="h-3.5 w-3.5 fill-current" />
            <span>250,000+ Strong Creator Community</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? 'क्या आप अपने टेक व वीडियो क्रिएशन को अगले स्तर पर ले जाने के लिए तैयार हैं?'
              : 'Ready to Transform Your AI Content Creation & YouTube Channel?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'hi'
              ? 'LUCKY tech TV Official चैनल को अभी सब्सक्राइब करें और पाएं फ्री AI टूल्स, 4K ट्यूटोरियल्स और सीक्रेट ग्रोथ टिप्स सीधे अपने नोटिफिकेशन में।'
              : 'Join the fastest-growing community of video creators, AI builders, and tech lovers today.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsSubscribeModalOpen(true)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF0000] text-sm font-bold text-white shadow-2xl shadow-red-950/70 hover:bg-red-600 transition-all hover:scale-105"
            >
              <Youtube className="h-5 w-5 fill-white" />
              <span>{language === 'hi' ? 'सब्सक्राइब करें (फ्री)' : 'Subscribe Free on YouTube'}</span>
            </button>

            <button
              onClick={() => setCurrentPage('contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span>{language === 'hi' ? 'स्पॉन्सरशिप व संपर्क' : 'Business & Sponsorship'}</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
