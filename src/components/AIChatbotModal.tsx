import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  RotateCcw, 
  Copy, 
  Check,
  Zap,
  Youtube
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

const PRESET_QUESTIONS = [
  {
    en: 'Best free AI video generator for YouTube?',
    hi: 'यूट्यूब के लिए सबसे अच्छा फ्री AI वीडियो टूल कौन सा है?'
  },
  {
    en: 'How to increase CTR on YouTube thumbnails?',
    hi: 'यूट्यूब थंबनेल पर CTR कैसे बढ़ाएं?'
  },
  {
    en: 'Secret Android code for battery telemetry?',
    hi: 'बैटरी हेल्थ चेक करने का सीक्रेट एंड्रॉइड कोड क्या है?'
  },
  {
    en: 'How to clone my voice for Hindi faceless videos?',
    hi: 'हिंदी फेसलेस वीडियो के लिए अपनी वॉइस कैसे क्लोन करें?'
  }
];

export const AIChatbotModal: React.FC = () => {
  const { isAIChatOpen, setIsAIChatOpen, language, showToast } = useApp();
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: language === 'hi' 
        ? 'नमस्ते! मैं LUCKY tech TV का AI असिस्टेंट हूँ। आप मुझसे AI वीडियो टूल्स, यूट्यूब अल्गोरिद्म, मोबाइल ट्रिक्स या स्क्रिप्ट राइटिंग के बारे में कुछ भी पूछ सकते हैं!'
        : 'Hello! I am the LUCKY tech TV AI Assistant. Ask me anything about generative AI tools, YouTube growth tactics, mobile hacks, or video script prompting!',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isAIChatOpen) return null;

  const handleSend = async (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      role: 'user',
      content: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Knowledge base responses for lightning fast tech advice:
    setTimeout(() => {
      let reply = '';
      const text = userText.toLowerCase();

      if (text.includes('video') || text.includes('free') || text.includes('kling') || text.includes('runway') || text.includes('वीडियो')) {
        reply = language === 'hi'
          ? `🎥 **AI वीडियो जनरेशन के लिए सर्वश्रेष्ठ टूल्स 2026:**\n\n1. **Kling AI (v1.5)**: फ्री टियर में बेहतरीन 1080p सिनेमैटिक क्लिप्स देता है।\n2. **Runway Gen-3 Alpha**: रियलिस्टिक कैमरा मूवमेंट्स और टेक्स्ट-टू-वीडियो के लिए बेस्ट।\n3. **Hailuo AI (MiniMax)**: फ्री में 6-सेकंड की हाई-डेफिनिशन क्लिप्स।\n\n💡 *प्रो टिप*: Midjourney या Flux से पहले 16:9 में इमेज बनाएं और उसे Kling में "Image-to-Video" के रूप में डालें, इससे रिजल्ट्स 3x ज्यादा रियलिस्टिक आते हैं!`
          : `🎥 **Best AI Video Creation Tools for 2026:**\n\n1. **Kling AI v1.5**: Offers generous free credits and industry-leading physical motion.\n2. **Runway Gen-3 Alpha**: Unmatched text-to-video cinematic fidelity and brush control.\n3. **Hailuo AI (MiniMax)**: Exceptional 1080p rendering with high motion consistency.\n\n💡 *Creator Pro Tip*: Generate a master keyframe in Midjourney v6.1 or Flux first, then feed it into Kling as "Image-to-Video". This guarantees 100% character consistency!`;
      } else if (text.includes('ctr') || text.includes('thumbnail') || text.includes('youtube') || text.includes('थंबनेल') || text.includes('व्यूज')) {
        reply = language === 'hi'
          ? `📈 **यूट्यूब थंबनेल CTR बूस्ट करने का 3-स्टेप फॉर्मूला:**\n\n1. **3-एलिमेंट नियम**: थंबनेल में सिर्फ 3 चीजें रखें—(1) इमोशनल चेहरा, (2) मुख्य ऑब्जेक्ट, (3) 2 या 3 शब्दों का बोल्ड टेक्स्ट।\n2. **हाई-कंट्रास्ट कलर्स**: बैकग्राउंड डार्क रखें और टेक्स्ट में लाल (#FF0000) या सुनहरा पीला (#FFD700) इस्तेमाल करें।\n3. **जिज्ञासा गैप**: थंबनेल में उत्तर न दें, बल्कि दर्शक के मन में सवाल खड़ा करें।\n\nलक्ष्य: पहले 2 घंटों में CTR 8.5% से ऊपर रखना!`
          : `📈 **3-Step Formula to Scale YouTube CTR beyond 9%:**\n\n1. **The 3-Element Rule**: Restrict your canvas to exactly 3 visual components (High-emotion expression + focal item + max 3 punchy words).\n2. **Color Contrast Dominance**: Deep black/slate backing with vivid crimson (#FF0000) or neon gold (#FFD700) overlays pop on dark mode mobile feeds.\n3. **Curiosity Gap**: Don't summarize the video; present an unresolved tension that forces the click.`;
      } else if (text.includes('battery') || text.includes('code') || text.includes('android') || text.includes('बैटरी') || text.includes('कोड')) {
        reply = language === 'hi'
          ? `⚡ **सीक्रेट एंड्रॉइड कोड्स और बैटरी ट्रिक्स:**\n\n1. **हार्डवेयर और बैटरी टेस्ट**: डायलर में \`*#*#4636#*#*\` डायल करें।\n2. **एनिमेशन स्केल**: डेवलपर ऑप्शन्स में जाकर तीनों एनिमेशन स्केल्स को 0.5x करें। फोन तुरंत मक्खन जैसा तेज चलेगा।\n3. **डीप स्लीप**: सेटिंग्स में जाकर भारी सोशल ऐप्स को 'Deep Sleep' में डालें, इससे रात भर में 0% बैटरी ड्रेन होगी।`
          : `⚡ **Secret Android Diagnostic Codes & Battery Mastery:**\n\n1. **Battery & Radio Diagnostics**: Dial \`*#*#4636#*#*\` for hardware health and signal band locks.\n2. **Animation Scale**: In Developer Options, set Window, Transition, and Animator scales to 0.5x for zero perceived lag.\n3. **App Deep Sleep**: Put background-heavy apps into Deep Sleep to prevent wake-locks during screen-off hours.`;
      } else if (text.includes('voice') || text.includes('clone') || text.includes('elevenlabs') || text.includes('वॉइस')) {
        reply = language === 'hi'
          ? `🎙️ **AI वॉइस क्लोनिंग गाइड (हिंदी + इंग्लिश):**\n\n1. **ElevenLabs PrimeVoice**: अपनी 1 मिनट की साफ ऑडियो रिकॉर्डिंग अपलोड करें। यह हिंदी और हिंग्लिश दोनों में नैचुरल आवाज बनाता है।\n2. **फ्री विकल्प**: आप CapCut के इन-बिल्ट टेक्स्ट-टू-स्पीच या Fish Audio का इस्तेमाल कर सकते हैं।\n\n💡 *सलाह*: बोलते समय माइक से 6 इंच की दूरी रखें और बैकग्राउंड में कोई शोर न हो!`
          : `🎙️ **AI Voice Cloning Guide (Hindi & English):**\n\n1. **ElevenLabs PrimeVoice**: Upload a clean 60-second studio sample. Its multilingual model captures nuances and emotional inflection flawlessly.\n2. **Generous Alternatives**: Fish Audio and Cartesia Sonic offer low-latency generation for long-form explainers.`;
      } else {
        reply = language === 'hi'
          ? `LUCKY tech TV पर आपका स्वागत है! मैं AI वीडियो टूल्स, यूट्यूब टिप्स, लेटेस्ट टेक न्यूज़ और गैजेट रिव्यूज में आपकी पूरी मदद कर सकता हूँ। ऊपर दिए गए प्रश्नों में से चुनें या अपना सवाल टाइप करें!`
          : `Welcome to LUCKY tech TV! I specialize in generative AI workflows, YouTube retention growth, smartphone tricks, and tech breakdowns. Ask me anything or choose one of the quick suggestions above!`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: 'asst-' + Date.now(),
          role: 'assistant',
          content: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleCopy = (id: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      showToast('Copied to clipboard!');
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6">
      <div 
        className="relative flex flex-col w-full max-w-2xl h-[650px] max-h-[90vh] rounded-2xl border border-white/10 bg-[#121216] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#181820]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00BFFF] via-[#8A2BE2] to-[#FF0000] p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#101014]">
                <Bot className="h-5 w-5 text-[#00BFFF]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-white">LUCKY tech AI Assistant</span>
                <span className="text-[10px] font-semibold text-[#FFD700] uppercase tracking-wide">
                  · Online
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {language === 'hi' ? 'AI व यूट्यूब एक्सपर्ट बॉट' : 'Tech, AI Tools & YouTube Growth Expert'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setMessages([messages[0]])}
              title="Reset Chat"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setIsAIChatOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Preset Questions Suggestions */}
        <div className="p-3 bg-[#15151B] border-b border-white/5 overflow-x-auto flex gap-2 no-scrollbar">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(language === 'hi' ? q.hi : q.en)}
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[11px] font-medium text-slate-300 hover:border-[#00BFFF]/50 hover:text-white whitespace-nowrap transition-colors"
            >
              {language === 'hi' ? q.hi : q.en}
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8A2BE2]/20 text-[#00BFFF] shrink-0 mt-0.5 border border-[#8A2BE2]/40">
                  <Bot className="h-4 w-4" />
                </div>
              )}

              <div
                className={`relative max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#00BFFF] text-black font-medium'
                    : 'bg-[#181820] border border-white/10 text-slate-200'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>

                <div className="flex items-center justify-between gap-4 mt-2 pt-1 border-t border-black/10 dark:border-white/5 text-[10px] opacity-70">
                  <span>{msg.time}</span>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="hover:text-white"
                      title="Copy message"
                    >
                      {copiedId === msg.id ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    </button>
                  )}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00BFFF]/20 text-[#00BFFF] shrink-0 mt-0.5 border border-[#00BFFF]/40">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs text-slate-400">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8A2BE2]/20 text-[#00BFFF] shrink-0 border border-[#8A2BE2]/40">
                <Bot className="h-4 w-4 animate-spin" />
              </div>
              <div className="flex items-center gap-1 bg-[#181820] border border-white/10 px-3 py-2 rounded-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00BFFF] animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#8A2BE2] animate-bounce [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF0000] animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="p-3 sm:p-4 bg-[#181820] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'AI वीडियो, यूट्यूब या टेक के बारे में कुछ भी पूछें...'
                : 'Ask anything about AI tools, YouTube, or phone hacks...'
            }
            className="flex-1 rounded-xl border border-white/10 bg-[#121216] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00BFFF] text-black font-bold disabled:opacity-40 hover:bg-sky-400 transition-all shrink-0"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
