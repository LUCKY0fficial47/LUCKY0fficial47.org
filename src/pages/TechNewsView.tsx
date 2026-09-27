import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TECH_NEWS_IMAGE } from '../data/initialData';
import { 
  Zap, 
  Smartphone, 
  Cpu, 
  Battery, 
  Copy, 
  Check, 
  ShieldAlert, 
  Flame, 
  Play 
} from 'lucide-react';

const SECRET_CODES = [
  {
    code: '*#*#4636#*#*',
    titleEn: 'Complete Phone Testing & Battery Info',
    titleHi: 'फोन टेस्टिंग व विस्तृत बैटरी जानकारी',
    descEn: 'Displays battery health percentage, cellular ping test, and WiFi telemetry.'
  },
  {
    code: '*#06#',
    titleEn: 'Check IMEI & Hardware Serial',
    titleHi: 'IMEI और हार्डवेयर सीरियल नंबर जांचें',
    descEn: 'Instant device identity verification without digging through settings.'
  },
  {
    code: '*#0*#',
    titleEn: 'Samsung General Diagnostic Screen',
    titleHi: 'सैमसंग जनरल डायग्नोस्टिक मेनू',
    descEn: 'Test RGB screen sub-pixels, vibration motors, touch digitizer, and speaker.'
  },
  {
    code: '*#*#7780#*#*',
    titleEn: 'Factory Soft Cache Reset',
    titleHi: 'सिस्टम कैश रीसेट मेनू',
    descEn: 'Clears residual app data without wiping your personal files or photos.'
  }
];

export const TechNewsView: React.FC = () => {
  const { language, videos, setActiveVideo, showToast } = useApp();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      showToast('Copied code ' + code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const mobileVideos = videos.filter(v => v.category === 'mobile-tricks' || v.category === 'tech-news');

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00BFFF]">
            <Flame className="h-4 w-4 text-[#FF0000]" />
            <span>{language === 'hi' ? 'ब्रेकिंग टेक व मोबाइल सीक्रेट्स' : 'Breaking Tech & Smartphone Tricks'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? 'लेटेस्ट टेक न्यूज़ और गुप्त मोबाइल सेटिंग्स'
              : 'Tech Innovations, Hardware Leaks & Phone Hacks'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'स्मार्टफोन की परफॉरमेंस दोगुनी करने वाले सीक्रेट कोड्स, Android 16 फीचर्स और टेक इंडस्ट्री की सबसे बड़ी खबरें।'
              : 'In-depth investigative reports on neural silicon, flagship leaks, and unreleased Android developer options.'}
          </p>
        </div>

        {/* Featured Leaks & News Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 aspect-4/3 relative shadow-2xl group">
            <img
              src={TECH_NEWS_IMAGE}
              alt="Flagship Smartphone & Futuristic Circuits"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFD700]">Hardware Spotlight</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {language === 'hi'
                  ? 'अगली पीढ़ी के सिलिकॉन चिप्स: 2nm आर्किटेक्चर और AI एनपीयू का विश्लेषण'
                  : 'The 2nm Silicon Revolution: What Next-Gen AI NPUs Mean for Creators'}
              </h2>
              <p className="text-xs text-slate-300 line-clamp-2">
                On-device multimodal inference without cloud reliance will soon render 4K video directly in your pocket.
              </p>
            </div>
          </div>

          {/* Secret Phone Codes Box */}
          <div className="lg:col-span-6 p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-[#00BFFF]" />
                <h3 className="text-base font-bold text-white">
                  {language === 'hi' ? 'सीक्रेट एंड्रॉइड डायग्नोस्टिक कोड्स' : 'Secret Diagnostic & Performance Codes'}
                </h3>
              </div>
              <span className="text-[11px] text-[#FFD700] uppercase font-semibold">1-Click Copy</span>
            </div>

            <div className="space-y-3">
              {SECRET_CODES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-[#181820] hover:border-[#00BFFF]/30 transition-colors"
                >
                  <div className="space-y-0.5 text-left">
                    <div className="font-mono text-xs font-bold text-[#00BFFF]">{item.code}</div>
                    <div className="text-xs font-semibold text-white">
                      {language === 'hi' ? item.titleHi : item.titleEn}
                    </div>
                    <div className="text-[11px] text-slate-400">{item.descEn}</div>
                  </div>

                  <button
                    onClick={() => handleCopy(item.code)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors shrink-0 ml-3"
                  >
                    {copiedCode === item.code ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedCode === item.code ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Guides for Mobile & Tech News */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {language === 'hi' ? 'संबंधित वीडियो विश्लेषण' : 'Related Video Breakdowns'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileVideos.map(video => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141419] overflow-hidden hover:border-[#00BFFF]/40 hover:bg-[#181822] cursor-pointer transition-all"
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
                    <span className="text-[#00BFFF] uppercase font-semibold text-[11px]">{video.category}</span>
                    <span>·</span>
                    <span>{video.views} views</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00BFFF] transition-colors line-clamp-2">
                    {language === 'hi' ? video.title.hi : video.title.en}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {language === 'hi' ? video.description.hi : video.description.en}
                  </p>
                </div>

                <div className="p-5 pt-0 border-t border-white/5 mt-3 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#FFD700] font-medium">{video.date}</span>
                  <span className="text-white group-hover:text-[#00BFFF] font-semibold">
                    Watch Video →
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
