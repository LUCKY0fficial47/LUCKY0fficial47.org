import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TUTORIAL_IMAGE } from '../data/initialData';
import { 
  Video, 
  Sparkles, 
  Copy, 
  Check, 
  Play, 
  Layers, 
  ArrowRight,
  Terminal,
  Cpu,
  Mic
} from 'lucide-react';

export const TutorialsView: React.FC = () => {
  const { language, videos, setActiveVideo, showToast } = useApp();

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Prompt Generator Interactive State
  const [subject, setSubject] = useState('Cyberpunk mechanical android technician');
  const [environment, setEnvironment] = useState('Inside a dimly lit holographic server room');
  const [lighting, setLighting] = useState('Neon cyan rim light with warm gold volumetric beam');
  const [lens, setLens] = useState('35mm anamorphic cinema lens, shallow depth of field');

  const generatedPrompt = `${subject}, ${environment}, ${lighting}, ${lens}, 8k photorealistic resolution, hyper-detailed textures --ar 16:9 --v 6.1 --style raw`;

  const copyPrompt = (text: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      showToast('Prompt copied to clipboard!');
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const tutorialVideos = videos.filter(v => v.category === 'video-creation' || v.category === 'ai-tools');

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF0000]">
            <Video className="h-4 w-4" />
            <span>{language === 'hi' ? 'AI वीडियो क्रिएशन वर्कशॉप' : 'AI Video Creation Masterclass'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? '4K सिनेमैटिक AI वीडियो निर्माण का संपूर्ण रोडमैप'
              : 'End-to-End AI Video Generation Blueprint 2026'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'बिना महंगे कैमरे या स्टूडियो के, सिर्फ फ्री व प्रो AI टूल्स से वायरल यूट्यूब वीडियो और रील्स बनाने की पूरी तकनीक।'
              : 'Complete methodology to synthesize hyper-realistic video keyframes, generate cinematic camera physics, and clone broadcast-grade voiceovers.'}
          </p>
        </div>

        {/* 5-Step Pipeline Architecture */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#141419] space-y-6">
          <h2 className="text-xl font-bold text-white tracking-tight">
            {language === 'hi' ? 'द 5-स्टेज AI वीडियो पाइपलाइन' : 'The 5-Stage AI Production Pipeline'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl border border-white/5 bg-[#181820] space-y-2">
              <span className="text-[11px] font-bold text-[#FF0000]">Stage 01</span>
              <h4 className="text-sm font-bold text-white">Curiosity Script</h4>
              <p className="text-xs text-slate-400">Gemini 2.5 structured prompts with 5-second retention hooks.</p>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-[#181820] space-y-2">
              <span className="text-[11px] font-bold text-[#00BFFF]">Stage 02</span>
              <h4 className="text-sm font-bold text-white">Visual Synthesis</h4>
              <p className="text-xs text-slate-400">Midjourney v6.1 & Flux 16:9 master frame rendering with seed locking.</p>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-[#181820] space-y-2">
              <span className="text-[11px] font-bold text-[#8A2BE2]">Stage 03</span>
              <h4 className="text-sm font-bold text-white">Physics Animation</h4>
              <p className="text-xs text-slate-400">Runway Gen-3 & Kling AI camera physics (Pan, Tilt, Zoom-in).</p>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-[#181820] space-y-2">
              <span className="text-[11px] font-bold text-[#FFD700]">Stage 04</span>
              <h4 className="text-sm font-bold text-white">Neural Voiceover</h4>
              <p className="text-xs text-slate-400">ElevenLabs studio voice cloning in Hindi and English.</p>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-[#181820] space-y-2">
              <span className="text-[11px] font-bold text-emerald-400">Stage 05</span>
              <h4 className="text-sm font-bold text-white">Final 4K Master</h4>
              <p className="text-xs text-slate-400">CapCut / Premiere timeline assembly with cinematic sub-bass swooshes.</p>
            </div>
          </div>
        </div>

        {/* Interactive Prompt Builder Tool */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#141419] to-[#171722] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD700]/20 text-[#FFD700]">
                <Terminal className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {language === 'hi' ? 'लाइव AI प्रॉम्प्ट जनरेटर' : 'Interactive AI Cinematic Prompt Builder'}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === 'hi'
                    ? 'Midjourney, Flux व Kling के लिए कस्टमाइज़ेबल प्रॉम्प्ट बनाएं'
                    : 'Dial in variables to generate studio-grade prompts ready for Midjourney & Kling'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Environment</label>
              <input
                type="text"
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Lighting</label>
              <input
                type="text"
                value={lighting}
                onChange={(e) => setLighting(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Camera & Lens</label>
              <input
                type="text"
                value={lens}
                onChange={(e) => setLens(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Prompt Output Box */}
          <div className="relative rounded-xl border border-white/10 bg-[#0B0B0E] p-4 text-xs font-mono text-emerald-400 flex items-start justify-between gap-4">
            <span className="leading-relaxed select-all">{generatedPrompt}</span>
            <button
              onClick={() => copyPrompt(generatedPrompt, 'builder')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0 font-sans text-xs font-semibold"
            >
              {copiedKey === 'builder' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedKey === 'builder' ? 'Copied' : 'Copy Prompt'}</span>
            </button>
          </div>
        </div>

        {/* Video Tutorials Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {language === 'hi' ? 'वीडियो मास्टरक्लास लाइब्रेरी' : 'Video Masterclass Library'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialVideos.map(video => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141419] overflow-hidden hover:border-[#00BFFF]/40 hover:bg-[#181822] cursor-pointer transition-all"
              >
                <div>
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
                </div>

                <div className="p-5 pt-0 border-t border-white/5 mt-3 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#FFD700] font-medium">{video.date}</span>
                  <span className="text-white group-hover:text-[#00BFFF] font-semibold flex items-center gap-1">
                    Watch Full Tutorial →
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
