import React from 'react';
import { useApp } from '../context/AppContext';
import { YOUTUBE_TIPS_IMAGE } from '../data/initialData';
import { 
  TrendingUp, 
  Youtube, 
  Target, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  BarChart2
} from 'lucide-react';

export const YouTubeGrowthSection: React.FC = () => {
  const { language, setCurrentPage, setIsSubscribeModalOpen } = useApp();

  return (
    <section className="py-16 border-b border-white/5 bg-[#0E0E12] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={YOUTUBE_TIPS_IMAGE}
                alt="YouTube Growth Studio & Golden Play Button Aura"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FFD700] mb-1">
                  <BarChart2 className="h-4 w-4" />
                  <span>{language === 'hi' ? 'चैनल ग्रोथ स्ट्रेटेजी 2026' : 'Channel Scaling Blueprint 2026'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'hi'
                    ? '15,000,000+ व्यूज और 250,000 सब्सक्राइबर्स तक पहुँचने का वास्तविक डेटा-ड्रिवन फॉर्मूला।'
                    : 'The exact mathematical formula used to scale to 15M+ views and 250K+ loyal subscribers.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Breakdown & Rules */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF0000]">
              <Youtube className="h-4 w-4" />
              <span>{language === 'hi' ? 'यूट्यूब मास्टरी' : 'YouTube Algorithmic Mastery'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'hi'
                ? 'व्यूज और सब्सक्राइबर्स बढ़ाने के अचूक नियम'
                : 'Cracking the Modern YouTube Algorithm & CTR'}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'सिर्फ वीडियो अपलोड करने से चैनल नहीं बढ़ता। यूट्यूब का न्यूरल इंजन 3 मुख्य चीजों को देखता है: 8.5%+ CTR, पहले 30 सेकंड का 70% रिटेंशन और दर्शकों का संपूर्ण वॉच सेशन।'
                : 'Stop relying on vanity tags. YouTube recommends videos based on initial 2-hour CTR, 30-second retention spikes, and viewer session continuation.'}
            </p>

            {/* 3 Core Rules */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-[#141419]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000]/10 text-[#FF0000] shrink-0 mt-0.5">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {language === 'hi' ? '1. 3-सेकंड थंबनेल और जिज्ञासा नियम' : '1. The 3-Second Thumbnail Contrast Rule'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'hi'
                      ? 'थंबनेल में केवल 2-3 मुख्य एलिमेंट्स रखें। लाल (#FF0000) और गोल्डन हाइलाइट्स मोबाइल फीड में सबसे ज्यादा क्लिक लाते हैं।'
                      : 'Never exceed 3 focal points. High contrast dark-mode backgrounds paired with vivid red or gold accents yield 2.4x higher mobile CTR.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-[#141419]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00BFFF]/10 text-[#00BFFF] shrink-0 mt-0.5">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {language === 'hi' ? '2. नो-इंट्रो 5-सेकंड हुक' : '2. Zero-Filler 5-Second Hook Strategy'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'hi'
                      ? 'वीडियो शुरू होते ही "वेलकम बैक" जैसे फालतू इंट्रो से बचें। पहले 5 सेकंड में सीधा समस्या और उसका समाधान दिखाएं।'
                      : 'Eliminate channel intros. Lead directly with the high-stakes payoff or curiosity question to keep retention above 70%.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-[#141419]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8A2BE2]/10 text-[#8A2BE2] shrink-0 mt-0.5">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {language === 'hi' ? '3. एंड-स्क्रीन सेशन लूप' : '3. End-Screen Binge Loop Architecture'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'hi'
                      ? 'वीडियो के अंत में दर्शक को कभी "अलविदा" न कहें, बल्कि अगले संबंधित वीडियो पर तुरंत क्लिक करने का कारण दें।'
                      : 'Never say goodbye at the end of videos. Immediately pitch the next complementary video to double session watch-time.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setIsSubscribeModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF0000] text-xs sm:text-sm font-semibold text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-950/40"
              >
                <Youtube className="h-4 w-4" />
                <span>{language === 'hi' ? 'यूट्यूब कम्युनिटी ज्वाइन करें' : 'Join YouTube Community'}</span>
              </button>

              <button
                onClick={() => setCurrentPage('youtube-tips')}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>{language === 'hi' ? 'विस्तार से पढ़ें' : 'Read Full Guide'}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#00BFFF]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
