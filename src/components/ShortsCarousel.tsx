import React from 'react';
import { useApp } from '../context/AppContext';
import { Zap, Play, Eye, ThumbsUp } from 'lucide-react';

export const ShortsCarousel: React.FC = () => {
  const { shorts, language, setActiveVideo, videos } = useApp();

  const handlePlayShort = (shortId: string, youtubeId: string, title: any) => {
    // Open in modal as VideoItem
    const mockVid = {
      id: shortId,
      youtubeId,
      title,
      description: {
        en: 'Quick 60-second AI trick from LUCKY tech TV Shorts.',
        hi: 'लकी टेक टीवी शॉर्ट्स से त्वरित 60-सेकंड AI ट्रिक।'
      },
      category: 'mobile-tricks' as const,
      duration: '0:58',
      views: '1.2M',
      date: 'Shorts',
      thumbnailUrl: '',
      likes: 45000
    };
    setActiveVideo(mockVid);
  };

  return (
    <section className="py-12 border-b border-white/5 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000]/15 text-[#FF0000]">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {language === 'hi' ? 'वायरल यूट्यूब शॉर्ट्स' : 'Trending YouTube Shorts'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'hi' ? '60 सेकंड में त्वरित AI और मोबाइल ट्रिक्स' : 'Quick 60-second AI hacks & phone secrets'}
              </p>
            </div>
          </div>
          <span className="text-xs text-[#00BFFF] font-semibold cursor-pointer hover:underline">
            {language === 'hi' ? 'सभी शॉर्ट्स देखें' : 'View All Shorts'}
          </span>
        </div>

        {/* 9:16 Shorts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {shorts.map((short) => (
            <div
              key={short.id}
              onClick={() => handlePlayShort(short.id, short.youtubeId, short.title)}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-[#16161B] cursor-pointer shadow-lg hover:border-[#FF0000]/60 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={short.thumbnailUrl}
                alt={short.title.en}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Top YouTube Short Badge */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#FF0000]">
                <Zap className="h-2.5 w-2.5 fill-current" />
                <span>Shorts</span>
              </div>

              {/* Center Play Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xl shadow-red-950/80">
                  <Play className="h-5 w-5 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-3 space-y-1.5 text-left">
                <p className="text-xs font-semibold text-white line-clamp-2 leading-tight group-hover:text-[#00BFFF] transition-colors">
                  {language === 'hi' ? short.title.hi : short.title.en}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span className="tabular-nums font-medium">{short.views} views</span>
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    <ThumbsUp className="h-2.5 w-2.5" />
                    <span className="tabular-nums">{(short.likes / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
