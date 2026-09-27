import { VideoItem, ShortItem, AIToolItem, ArticleItem, FAQItem, CommentItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_tech_tv_1790491422636.jpg';
export const TUTORIAL_IMAGE = '/src/assets/images/ai_video_tutorial_studio_1790491436985.jpg';
export const TECH_NEWS_IMAGE = '/src/assets/images/tech_news_showcase_1790491449379.jpg';
export const YOUTUBE_TIPS_IMAGE = '/src/assets/images/youtube_growth_creator_1790491461276.jpg';

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'dQw4w9WgXcQ', // fallback embed-friendly ID or real tech demo
    title: {
      en: 'Complete AI Video Creation Masterclass 2026: From Script to 4K Hyper-Realistic Video',
      hi: 'AI वीडियो क्रिएशन मास्टरक्लास 2026: स्क्रिप्ट से 4K वीडियो तक का पूरा प्रोसेस'
    },
    description: {
      en: 'Learn how to generate viral AI videos with Runway Gen-3, Midjourney v6, and ElevenLabs voice cloning in under 15 minutes.',
      hi: 'जानिए कैसे आप Runway Gen-3, Midjourney और ElevenLabs की मदद से 15 मिनट में वायरल AI वीडियो बना सकते हैं।'
    },
    category: 'video-creation',
    duration: '18:42',
    views: '420K',
    date: '2 days ago',
    thumbnailUrl: TUTORIAL_IMAGE,
    featured: true,
    likes: 24500
  },
  {
    id: 'vid-2',
    youtubeId: 'bTqVqk7FSmY',
    title: {
      en: 'Top 7 Secret AI Tools Every Tech Enthusiast Must Use in 2026 (Free & Pro)',
      hi: '2026 के शीर्ष 7 गुप्त AI टूल्स जो हर टेक लवर को पता होने चाहिए'
    },
    description: {
      en: 'Revealing the hidden AI tools for automation, image remastering, voice cloning, and coding productivity.',
      hi: 'ऑटोमेशन, इमेज रिमास्टरिंग और कोडिंग के लिए सबसे बेहतरीन गुप्त AI टूल्स का खुलासा।'
    },
    category: 'ai-tools',
    duration: '14:15',
    views: '280K',
    date: '5 days ago',
    thumbnailUrl: HERO_IMAGE,
    featured: true,
    likes: 18200
  },
  {
    id: 'vid-3',
    youtubeId: 'kJQP7kiw5Fk',
    title: {
      en: 'YouTube Algorithm Secrets 2026: How We Grew from 0 to 250,000 Subscribers',
      hi: 'यूट्यूब एल्गोरिथम सीक्रेट 2026: 0 से 2.5 लाख सब्सक्राइबर्स तक का पूरा रोडमैप'
    },
    description: {
      en: 'Exact breakdown of CTR optimization, average view duration (AVD) retention hooks, and title psychology.',
      hi: 'CTR बढ़ाने, वॉच टाइम रोकने और वायरल थंबनेल बनाने के अचूक फॉर्मूले।'
    },
    category: 'youtube-tips',
    duration: '22:10',
    views: '510K',
    date: '1 week ago',
    thumbnailUrl: YOUTUBE_TIPS_IMAGE,
    featured: true,
    likes: 36700
  },
  {
    id: 'vid-4',
    youtubeId: 'fJ9rUzIMcZQ',
    title: {
      en: 'Android 16 & HyperOS 2.0: Hidden Developer Tricks & Secret Codes You Didn’t Know',
      hi: 'Android 16 और HyperOS: छिपे हुए सीक्रेट कोड्स और मोबाइल ट्रिक्स'
    },
    description: {
      en: 'Unlock hidden developer options, double battery life, and eliminate bloatware without root.',
      hi: 'छिपे हुए डेवलपर फीचर्स ऑन करें, बैटरी लाइफ दोगुनी करें और ब्लोटवेयर हटाएं।'
    },
    category: 'mobile-tricks',
    duration: '12:05',
    views: '195K',
    date: '2 weeks ago',
    thumbnailUrl: TECH_NEWS_IMAGE,
    featured: false,
    likes: 12400
  },
  {
    id: 'vid-5',
    youtubeId: 'L_LUpnjgPso',
    title: {
      en: 'Generative AI Wars: Gemini 2.5 vs GPT-5 vs Claude 3.7 Sonnet - The Ultimate Benchmark',
      hi: 'AI का महामुकाबला: Gemini 2.5 बनाम GPT-5 बनाम Claude 3.7 Sonnet'
    },
    description: {
      en: 'Real-world coding, logic, multimodal image analysis and video reasoning tested side-by-side.',
      hi: 'कोडिंग, लॉजिक और वीडियो रीजनिंग में कौन सा AI मॉडल सबसे आगे है? जानिए पूरा टेस्ट।'
    },
    category: 'tech-news',
    duration: '16:30',
    views: '330K',
    date: '3 weeks ago',
    thumbnailUrl: HERO_IMAGE,
    featured: false,
    likes: 21900
  },
  {
    id: 'vid-6',
    youtubeId: '9bZkp7q19f0',
    title: {
      en: 'Mind-Blowing Space & Quantum Tech Facts That Will Change Your Perception of Reality',
      hi: 'दिल दहला देने वाले स्पेस और क्वांटम टेक फैक्ट्स जो आपकी सोच बदल देंगे'
    },
    description: {
      en: 'Deep dive into Dyson spheres, quantum computing entanglement, and future civilization scale.',
      hi: 'डायसन स्फीयर, क्वांटम कम्प्यूटिंग और भविष्य के सुपर-इंजीनियरिंग के अनोखे तथ्य।'
    },
    category: 'educational',
    duration: '19:48',
    views: '260K',
    date: '1 month ago',
    thumbnailUrl: TUTORIAL_IMAGE,
    featured: false,
    likes: 17800
  }
];

export const INITIAL_SHORTS: ShortItem[] = [
  {
    id: 'short-1',
    youtubeId: 'dQw4w9WgXcQ',
    title: {
      en: '1-Click Free Voice Cloning with ElevenLabs ⚡',
      hi: '1-क्लिक में किसी की भी आवाज क्लोन करें! ⚡'
    },
    views: '1.2M',
    thumbnailUrl: TUTORIAL_IMAGE,
    likes: 89000
  },
  {
    id: 'short-2',
    youtubeId: 'bTqVqk7FSmY',
    title: {
      en: 'Never Google Search Like This Again! Secret AI Trick 🤖',
      hi: 'गूगल पर सर्च करने का ये सीक्रेट AI तरीका कभी मत भूलना! 🤖'
    },
    views: '940K',
    thumbnailUrl: TECH_NEWS_IMAGE,
    likes: 67400
  },
  {
    id: 'short-3',
    youtubeId: 'kJQP7kiw5Fk',
    title: {
      en: 'Triple Your YouTube CTR with this 3-Second Thumbnail Rule 📈',
      hi: '3 सेकंड का थंबनेल फॉर्मूला जो बढ़ाएगा आपके Views! 📈'
    },
    views: '1.8M',
    thumbnailUrl: YOUTUBE_TIPS_IMAGE,
    likes: 142000
  },
  {
    id: 'short-4',
    youtubeId: 'fJ9rUzIMcZQ',
    title: {
      en: 'This Hidden Phone Setting Saves 40% Battery Daily! 🔋',
      hi: 'फोन की ये छुपी सेटिंग बचाएगी 40% बैटरी रोजाना! 🔋'
    },
    views: '2.1M',
    thumbnailUrl: HERO_IMAGE,
    likes: 198000
  }
];

export const INITIAL_AI_TOOLS: AIToolItem[] = [
  {
    id: 'tool-1',
    name: 'Runway Gen-3 Alpha',
    category: 'video',
    pricing: 'Freemium',
    description: {
      en: 'High-fidelity cinematic video generation with camera control, motion brush, and text-to-video capabilities.',
      hi: 'टेक्स्ट से 4K सिनेमैटिक वीडियो जनरेट करने के लिए सबसे लोकप्रिय AI टूल।'
    },
    rating: 4.9,
    url: 'https://runwayml.com',
    badge: 'Trending',
    popular: true
  },
  {
    id: 'tool-2',
    name: 'ElevenLabs PrimeVoice',
    category: 'audio',
    pricing: 'Freemium',
    description: {
      en: 'Industry-leading natural text-to-speech and emotional voice cloning in 29+ languages including Hindi.',
      hi: 'हिंदी और अंग्रेजी में असली इंसानी जैसी आवाज और वॉइस क्लोनिंग टूल।'
    },
    rating: 4.95,
    url: 'https://elevenlabs.io',
    badge: 'Top Pick',
    popular: true
  },
  {
    id: 'tool-3',
    name: 'Midjourney v6.1',
    category: 'image',
    pricing: 'Paid',
    description: {
      en: 'Photorealistic image synthesis, YouTube thumbnail artwork, and futuristic concept art.',
      hi: 'यूट्यूब थंबनेल और हाइपर-रियलिस्टिक आर्ट बनाने के लिए सर्वश्रेष्ठ AI टूल।'
    },
    rating: 4.9,
    url: 'https://midjourney.com',
    badge: 'Editor Choice',
    popular: true
  },
  {
    id: 'tool-4',
    name: 'Google Gemini 2.5 Flash',
    category: 'text',
    pricing: 'Free',
    description: {
      en: 'High-speed multimodal reasoning model supporting 1M+ token context for video scripts and research.',
      hi: 'यूट्यूब वीडियो रिसर्च और स्क्रिप्ट राइटिंग के लिए सुपर-फास्ट गूगल AI मॉडल।'
    },
    rating: 4.85,
    url: 'https://gemini.google.com',
    popular: true
  },
  {
    id: 'tool-5',
    name: 'Kling AI v1.5',
    category: 'video',
    pricing: 'Freemium',
    description: {
      en: 'Exceptional physical motion simulation and 1080p long-duration video generation.',
      hi: 'लंबे और यथार्थवादी मोशन वाले AI वीडियो बनाने के लिए शक्तिशाली टूल।'
    },
    rating: 4.8,
    url: 'https://klingai.com'
  },
  {
    id: 'tool-6',
    name: 'Suno v4',
    category: 'audio',
    pricing: 'Freemium',
    description: {
      en: 'Generate full studio-quality music, background BGM, and songs with vocals in any genre.',
      hi: 'यूट्यूब बैकग्राउंड म्यूजिक और फुल गाने जनरेट करने वाला म्यूजिक AI।'
    },
    rating: 4.75,
    url: 'https://suno.com'
  },
  {
    id: 'tool-7',
    name: 'Make.com & n8n Automation',
    category: 'automation',
    pricing: 'Freemium',
    description: {
      en: 'Automate YouTube uploads, social media repurposing, and AI newsletter workflows.',
      hi: 'यूट्यूब वर्कफ़्लो और सोशल मीडिया पोस्ट्स को ऑटोमेट करने का सिस्टम।'
    },
    rating: 4.85,
    url: 'https://www.make.com'
  },
  {
    id: 'tool-8',
    name: 'Claude 3.7 Sonnet',
    category: 'text',
    pricing: 'Freemium',
    description: {
      en: 'World-class hybrid fast and thinking model for programming, debugging, and deep research.',
      hi: 'कोडिंग और गहरी तकनीकी रिसर्च के लिए सबसे सटीक AI मॉडल।'
    },
    rating: 4.9,
    url: 'https://claude.ai',
    badge: 'New'
  }
];

export const INITIAL_ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'ai-video-creation-guide-2026',
    title: {
      en: 'The Complete Step-by-Step Blueprint to AI Video Production in 2026',
      hi: '2026 में AI वीडियो बनाने की पूरी स्टेप-बाय-स्टेप गाइड'
    },
    excerpt: {
      en: 'How creators are producing high-retention faceless videos using Midjourney, Kling, Runway, and ElevenLabs without any camera equipment.',
      hi: 'बिना कैमरे के सामने आए प्रोफेशनल AI वीडियो बनाने का पूरा फॉर्मूला और फ्री टूल्स।'
    },
    content: {
      en: `### 1. The Paradigm Shift in Video Production
Artificial intelligence in 2026 has revolutionized content creation. Creators no longer need expensive 8K cinema cameras, soundproof acoustic studios, or tens of thousands of dollars in gear to produce cinematic visuals.

### 2. Crafting the Viral Hook with Gemini 2.5
Every viral video begins with an irresistible premise. Use structured prompting:
- "Act as an expert YouTube documentary writer. Formulate a 3-act narrative hook about the secret history of artificial brains."
- Ensure retention peaks in the first 5 seconds with a curiosity gap.

### 3. Visual Prompting in Midjourney & Flux
For video consistency, maintain a fixed character seed or visual style anchor:
- Formula: [Subject] + [Environment] + [Cinematic Lighting] + [Camera Lens 35mm] + [--v 6.1 --ar 16:9]

### 4. Motion Animation with Runway Gen-3 & Kling
Export your generated master frames and import them into Kling or Runway. Apply subtle camera motion (slow push-in or pan-left) with a motion intensity index of 3–5 to prevent unnatural distortion.

### 5. Sound Design and Audio Immersion
Sound design accounts for 60% of viewer retention. Layer your cloned or synthetic voiceover with:
- Sub-bass swooshes on scene transitions
- Ambient atmospheric pads
- Subtle foley sound effects matching visuals`,
      hi: `### 1. वीडियो प्रोडक्शन में नया मोड़
2026 में AI ने कंटेंट क्रिएशन का तरीका हमेशा के लिए बदल दिया है। अब आपको महंगे कैमरे या स्टूडियो की जरूरत नहीं है।

### 2. स्क्रिप्ट और वायरल हुक तैयार करना
हर सफल वीडियो की शुरुआत एक मजबूत हुक से होती है। पहले 5 सेकंड में व्यूअर का ध्यान आकर्षित करना सबसे जरूरी है।

### 3. AI से इमेज तैयार करना
Midjourney और Flux टूल्स का इस्तेमाल करके 16:9 आस्पेक्ट रेशियो में हाइपर-रियलिस्टिक कैरेक्टर और सीन तैयार करें।

### 4. मोशन और वीडियो जनरेशन
Runway Gen-3 या Kling AI में इमेज डालकर कैमरा मूवमेंट्स (Pan, Tilt, Zoom) सेट करें और 4K में एक्सपोर्ट करें।

### 5. वॉइस और बैकग्राउंड म्यूजिक
ElevenLabs से वॉइसओवर रिकॉर्ड करें और Suno AI से कॉपीराइट-फ्री बैकग्राउंड म्यूजिक जोड़ें।`
    },
    category: 'video-creation',
    readTime: '6 min read',
    date: 'Sep 24, 2026',
    author: {
      name: 'LUCKY tech TV Team',
      role: 'Lead AI Creator & Tech Analyst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    coverImage: TUTORIAL_IMAGE,
    tags: ['AI Video', 'Runway', 'Midjourney', 'ElevenLabs', 'Hindi Tutorials'],
    tableOfContents: [
      { id: '1-the-paradigm-shift', text: { en: '1. The Paradigm Shift', hi: '1. वीडियो प्रोडक्शन का बदलाव' } },
      { id: '2-crafting-viral-hook', text: { en: '2. Crafting the Hook', hi: '2. स्क्रिप्ट और हुक' } },
      { id: '3-visual-prompting', text: { en: '3. Visual Prompting', hi: '3. इमेज प्रॉम्प्टिंग' } },
      { id: '4-motion-animation', text: { en: '4. Motion Animation', hi: '4. मोशन जनरेशन' } },
      { id: '5-sound-design', text: { en: '5. Sound Design', hi: '5. साउंड डिज़ाइन' } }
    ],
    commentsCount: 38
  },
  {
    id: 'art-2',
    slug: 'youtube-algorithm-retention-secrets-2026',
    title: {
      en: 'Cracking YouTube Retention: The 3 Metrics That Actually Decide Viral Reach',
      hi: 'यूट्यूब अल्गोरिदम का सच: वो 3 मैट्रिक्स जो आपके वीडियो को वायरल करते हैं'
    },
    excerpt: {
      en: 'Stop guessing about tags and upload times. Here is how Click-Through Rate (CTR), Average Percentage Viewed (APV), and Viewer Satisfaction Drive Millions of Impressions.',
      hi: 'टैग्स और अपलोड टाइम की चिंता छोड़ें। जानिए CTR और वॉच-टाइम को सही तरीके से बढ़ाने का रहस्य।'
    },
    content: {
      en: `### The Triad of Modern YouTube Distribution
In 2026, YouTube's neural recommendation system scores content purely on three pillars:
1. **Initial CTR (First 2 Hours)**: If your thumbnail and title hook achieve $\ge 8.5\%$ CTR in the impressions test pool, the recommendation engine expands distribution to broader lookalike audiences.
2. **First-30-Second Retention**: Videos retaining $\ge 70\%$ of viewers at the 30-second mark receive 4x more browse feature impressions.
3. **End-Screen Session Continuation**: When a viewer clicks your recommended next video, your entire channel authority score rises.

### Master Rules for Thumbnails:
- Never exceed 3 main focal elements (e.g., Face + Object + 2-word punchy text).
- Test complementary contrast: deep dark backgrounds paired with vivid crimson (#FF0000) or gold highlights.`,
      hi: `### यूट्यूब सिफारिश प्रणाली के 3 मुख्य नियम
1. **CTR (क्लिक थ्रू रेट)**: पहले 2 घंटों में अगर आपका CTR 8% से ज्यादा रहता है, तो यूट्यूब आपके वीडियो को और बड़े दर्शकों तक भेजता है।
2. **शुरुआती 30 सेकंड का वॉच-टाइम**: वीडियो के पहले 30 सेकंड में कम से कम 70% दर्शकों को रोक कर रखना जरूरी है।
3. **सेशन टाइम**: अगर आपका वीडियो देखने के बाद दर्शक आपके चैनल का दूसरा वीडियो भी देखता है, तो चैनल तेजी से बूस्ट होता है।`
    },
    category: 'youtube-tips',
    readTime: '5 min read',
    date: 'Sep 21, 2026',
    author: {
      name: 'LUCKY tech TV Team',
      role: 'YouTube Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    coverImage: YOUTUBE_TIPS_IMAGE,
    tags: ['YouTube Tips', 'Algorithm', 'CTR', 'Growth Strategy'],
    tableOfContents: [
      { id: 'triad-distribution', text: { en: 'Triad Distribution', hi: '3 मुख्य नियम' } },
      { id: 'master-rules', text: { en: 'Thumbnail Rules', hi: 'थंबनेल नियम' } }
    ],
    commentsCount: 52
  },
  {
    id: 'art-3',
    slug: 'secret-android-hidden-codes-battery-tips',
    title: {
      en: '10 Hidden Android Developer Codes & Battery Life Hacks for 2026',
      hi: 'एंड्रॉइड के 10 गुप्त सीक्रेट कोड्स और बैटरी बचाने के जादुई ट्रिक्स'
    },
    excerpt: {
      en: 'Discover USSD diagnostic codes, cache clearing routines, and background process throttles that make your phone run like new.',
      hi: 'अपने फोन को सुपर-फास्ट बनाएं और बैटरी बैकअप 40% तक बढ़ाएं इन आसान सेटिंग्स से।'
    },
    content: {
      en: `### 1. Secret Diagnostic Menus
Dial \`*#*#4636#*#*\` on most Android devices to access the hardware testing screen, LTE signal band locking, and battery health telemetry.

### 2. Animation Scale Optimization
Navigate to Settings > Developer Options:
- Set Window animation scale to 0.5x
- Set Transition animation scale to 0.5x
- Set Animator duration scale to 0.5x
This makes navigation instantaneous without draining additional GPU cycles.

### 3. Background Task Deep Sleep
Put rarely used social apps into deep sleep mode so their background push services don't keep CPU cores awake during screen-off periods.`,
      hi: `### 1. सीक्रेट डायग्नोस्टिक मेनू
फोन के डायलर में \`*#*#4636#*#*\` डायल करें और बैटरी हेल्थ, नेटवर्क बैंड और हार्डवेयर टेस्ट चेक करें।

### 2. एनिमेशन स्पीड बढ़ाएं
डेवलपर ऑप्शन में जाकर 'Window Animation Scale' को 0.5x पर सेट करें। फोन तुरंत सुपर-फास्ट महसूस होगा।

### 3. बैकग्राउंड ऐप्स को डीप स्लीप में डालें
जो ऐप्स आप रोजाना इस्तेमाल नहीं करते उन्हें डीप स्लीप में डालें जिससे रात भर में बैटरी ड्रेन न हो।`
    },
    category: 'mobile-tricks',
    readTime: '4 min read',
    date: 'Sep 18, 2026',
    author: {
      name: 'LUCKY tech TV Team',
      role: 'Mobile Hardware Specialist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
    },
    coverImage: TECH_NEWS_IMAGE,
    tags: ['Android', 'Mobile Tricks', 'Battery Tips', 'Tech News'],
    tableOfContents: [
      { id: 'secret-codes', text: { en: 'Diagnostic Codes', hi: 'डायग्नोस्टिक कोड्स' } },
      { id: 'animation-scale', text: { en: 'Animation Scale', hi: 'एनिमेशन स्पीड' } },
      { id: 'deep-sleep', text: { en: 'Background Deep Sleep', hi: 'डीप स्लीप' } }
    ],
    commentsCount: 29
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: 'What is LUCKY tech TV Official?',
      hi: 'लकी टेक टीवी ऑफिशियल (LUCKY tech TV Official) क्या है?'
    },
    answer: {
      en: 'LUCKY tech TV Official is a premier tech and educational media platform dedicated to artificial intelligence tools, AI video creation workflows, YouTube growth hacks, mobile optimization tricks, and breaking technology news in both Hindi and English.',
      hi: 'LUCKY tech TV Official एक प्रमुख टेक और शैक्षणिक प्लेटफॉर्म है जो AI टूल्स, AI वीडियो निर्माण, यूट्यूब ग्रोथ ट्रिक्स, मोबाइल सेटिंग्स और नवीनतम टेक समाचार हिंदी और अंग्रेजी दोनों भाषाओं में प्रदान करता है।'
    }
  },
  {
    id: 'faq-2',
    category: 'ai',
    question: {
      en: 'Do I need paid AI subscriptions to follow your tutorials?',
      hi: 'क्या आपके ट्यूटोरियल्स सीखने के लिए मुझे पेड AI सब्सक्रिप्शन की जरूरत है?'
    },
    answer: {
      en: 'No! We prioritize 100% free and generous freemium tools (like Kling, ElevenLabs free tier, Google Gemini, and CapCut) so everyone can start creating without spending money.',
      hi: 'बिल्कुल नहीं! हम हमेशा फ्री और फ्रीमियम टूल्स (जैसे Kling AI, ElevenLabs फ्री टियर, Gemini और CapCut) के तरीके बताते हैं ताकि कोई भी बिना पैसे खर्च किए वीडियो बना सके।'
    }
  },
  {
    id: 'faq-3',
    category: 'youtube',
    question: {
      en: 'How can I grow my YouTube channel from scratch in 2026?',
      hi: '2026 में जीरो से नया यूट्यूब चैनल कैसे ग्रो करें?'
    },
    answer: {
      en: 'Focus on 3 essentials: (1) High-curiosity thumbnail with under 3 words, (2) Strong 5-second video hook with zero filler intro, and (3) Consistent weekly uploads in a focused niche.',
      hi: '3 मुख्य बातों पर ध्यान दें: (1) आकर्षक थंबनेल जिसमें 3 से कम शब्द हों, (2) पहले 5 सेकंड में बिना किसी फालतू बातचीत के सीधा मुख्य विषय, और (3) एक ही केटेगरी में नियमित वीडियो पोस्ट करना।'
    }
  },
  {
    id: 'faq-4',
    category: 'contact',
    question: {
      en: 'How can I collaborate or sponsor LUCKY tech TV?',
      hi: 'LUCKY tech TV के साथ स्पॉन्सरशिप या कोलैबोरेशन कैसे करें?'
    },
    answer: {
      en: 'You can email us directly at lucky0fficial47.org@gmail.com or send a message via our Contact form and WhatsApp button. Our team responds within 24 hours.',
      hi: 'आप हमें सीधे lucky0fficial47.org@gmail.com पर ईमेल भेज सकते हैं या वेबसाइट के कांटेक्ट फॉर्म और व्हाट्सएप बटन से मैसेज कर सकते हैं। हमारी टीम 24 घंटे में जवाब देती है।'
    }
  }
];

export const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'comm-1',
    articleId: 'art-1',
    authorName: 'Rohan Sharma',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
    content: 'Bhai Runway Gen-3 aur ElevenLabs wala tutorial best tha! Maine kal hi pehla AI video banaya aur 5k views cross ho gaye. Thank you LUCKY tech TV!',
    date: 'Yesterday at 4:20 PM',
    likes: 19
  },
  {
    id: 'comm-2',
    articleId: 'art-1',
    authorName: 'Aman Verma',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80',
    content: 'Very clear explanation for Hindi creators. Finally someone explained the prompt structure simply without jargon.',
    date: '2 days ago',
    likes: 8
  }
];
