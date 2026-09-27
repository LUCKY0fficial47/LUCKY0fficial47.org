import React from 'react';
import { useApp } from '../context/AppContext';
import { HERO_IMAGE, YOUTUBE_TIPS_IMAGE } from '../data/initialData';
import { 
  Youtube, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Users, 
  Video, 
  Globe, 
  Mail,
  Zap,
  Cpu
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { language, setIsSubscribeModalOpen, setCurrentPage } = useApp();

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF0000]">
            <Youtube className="h-4 w-4" />
            <span>{language === 'hi' ? 'चैनल परिचय' : 'About LUCKY tech TV'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {language === 'hi'
              ? 'AI टूल्स, वीडियो निर्माण और टेक शिक्षा का सबसे भरोसेमंद केंद्र'
              : 'Empowering Millions of Creators with Generative AI & Video Mastery'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'LUCKY tech TV Official की स्थापना आधुनिक तकनीक, जनरेटिव AI टूल्स, 4K वीडियो प्रोडक्शन और यूट्यूब ग्रोथ तकनीकों को हर भारतीय और वैश्विक क्रिएटर तक सरल भाषा में पहुँचाने के लिए की गई है।'
              : 'LUCKY tech TV Official is a premier digital tech brand bridging the gap between cutting-edge generative artificial intelligence and actionable creator workflows in Hindi and English.'}
          </p>
        </div>

        {/* Visual Dual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
            <img
              src={HERO_IMAGE}
              alt="High-Tech AI Production Desk"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
              <span className="font-bold text-[#00BFFF] block">Production Lab 01</span>
              <span>Ultra-Wide Neural AI & 4K Video Editing Rig</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
            <img
              src={YOUTUBE_TIPS_IMAGE}
              alt="YouTube Podcast & Lighting Studio"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
              <span className="font-bold text-[#FFD700] block">Creator Suite</span>
              <span>Podcast & Studio Recording Environment</span>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {language === 'hi' ? 'हमारे 4 प्रमुख स्तंभ' : 'Our 4 Core Pillars'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00BFFF]/15 text-[#00BFFF]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? '1. जेनरेटिव AI टूल्स' : '1. Generative AI Tools'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'hi'
                  ? 'Midjourney, Runway Gen-3, Kling, ElevenLabs और Gemini के व्यावहारिक उपयोग।'
                  : 'Practical, real-world deployment of image, voice, and cinematic video generators.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF0000]/15 text-[#FF0000]">
                <Video className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? '2. यूट्यूब ग्रोथ सीक्रेट्स' : '2. YouTube Algorithmic Scaling'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'hi'
                  ? 'CTR बूस्टिंग, 5-सेकंड रिटेंशन हुक्स और वायरल थंबनेल मनोविज्ञान।'
                  : 'Actionable data science behind 8.5%+ CTR, retention spikes, and viewer binge loops.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A2BE2]/15 text-[#8A2BE2]">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? '3. सीक्रेट मोबाइल ट्रिक्स' : '3. Smartphone & OS Tricks'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'hi'
                  ? 'Android डेवलपर कोड्स, 40% बैटरी सेवर सेटिंग्स और फोन स्पीड बूस्टर्स।'
                  : 'Hidden USSD telemetry codes, animation throttling, and bloatware eradication.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD700]/15 text-[#FFD700]">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? '4. द्विभाषी सुलभता' : '4. Bilingual Accessibility'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'hi'
                  ? 'हर भारतीय और विदेशी दर्शक के लिए शुद्ध हिंदी और स्पष्ट अंग्रेजी में सामग्री।'
                  : 'Zero technical gatekeeping: crystal-clear explanations in Hindi and English.'}
              </p>
            </div>
          </div>
        </div>

        {/* Milestones & Statistics */}
        <div className="rounded-2xl border border-white/10 bg-[#141419] p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {language === 'hi' ? 'चैनल के प्रमुख पड़ाव' : 'Key Milestones & Track Record'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-l-2 border-[#FF0000] pl-4">
              <div className="text-3xl font-extrabold text-white tabular-nums">250,000+</div>
              <div className="text-xs text-slate-400 mt-1">Dedicated YouTube Subscribers</div>
            </div>
            <div className="border-l-2 border-[#00BFFF] pl-4">
              <div className="text-3xl font-extrabold text-white tabular-nums">15,000,000+</div>
              <div className="text-xs text-slate-400 mt-1">Total Lifetime Video Views</div>
            </div>
            <div className="border-l-2 border-[#8A2BE2] pl-4">
              <div className="text-3xl font-extrabold text-white tabular-nums">450+</div>
              <div className="text-xs text-slate-400 mt-1">In-Depth Guides & Tutorials</div>
            </div>
            <div className="border-l-2 border-[#FFD700] pl-4">
              <div className="text-3xl font-extrabold text-white tabular-nums">99.8%</div>
              <div className="text-xs text-slate-400 mt-1">Community Upvote Ratio</div>
            </div>
          </div>
        </div>

        {/* Founder & Official Contact Box */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#14141A] to-[#181822] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">
              {language === 'hi' ? 'आधिकारिक स्पॉन्सरशिप व बिजनेस पूछताछ' : 'Business Inquiries & Creator Sponsorships'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              {language === 'hi'
                ? 'हम AI टूल्स, सॉफ्टवेयर और हार्डवेयर ब्रांड्स के साथ कोलैबोरेट करते हैं। हमें सीधे ईमेल करें:'
                : 'Partner with LUCKY tech TV for software reviews, AI tool sponsorships, and dedicated video integrations.'}
            </p>
            <div className="text-sm font-semibold text-[#00BFFF] pt-1">
              lucky0fficial47.org@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setIsSubscribeModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF0000] text-xs font-bold text-white hover:bg-red-600 transition-colors"
            >
              <Youtube className="h-4 w-4 fill-white" />
              <span>Subscribe on YouTube</span>
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
