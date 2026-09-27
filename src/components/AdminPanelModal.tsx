import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  LayoutDashboard, 
  Video, 
  FileText, 
  Sparkles, 
  Users, 
  BarChart3, 
  Plus, 
  Trash2, 
  Check, 
  Upload,
  TrendingUp,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { CategoryType } from '../types';

export const AdminPanelModal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    videos,
    addVideo,
    aiTools,
    addAITool,
    articles,
    addArticle,
    language,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'videos' | 'blogs' | 'tools' | 'analytics'>('dashboard');

  // New Video Form State
  const [vidYoutubeId, setVidYoutubeId] = useState('');
  const [vidTitleEn, setVidTitleEn] = useState('');
  const [vidTitleHi, setVidTitleHi] = useState('');
  const [vidCategory, setVidCategory] = useState<CategoryType>('video-creation');
  const [vidDuration, setVidDuration] = useState('14:20');

  // New Blog Form State
  const [blogTitleEn, setBlogTitleEn] = useState('');
  const [blogTitleHi, setBlogTitleHi] = useState('');
  const [blogExcerptEn, setBlogExcerptEn] = useState('');
  const [blogContentEn, setBlogContentEn] = useState('');
  const [blogCategory, setBlogCategory] = useState<CategoryType>('ai-tools');

  // New Tool Form State
  const [toolName, setToolName] = useState('');
  const [toolUrl, setToolUrl] = useState('');
  const [toolCat, setToolCat] = useState<'video' | 'image' | 'audio' | 'text' | 'automation'>('video');
  const [toolPricing, setToolPricing] = useState<'Free' | 'Freemium' | 'Paid'>('Freemium');
  const [toolDescEn, setToolDescEn] = useState('');

  if (!isAdminOpen) return null;

  const handleCreateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vidYoutubeId || !vidTitleEn) {
      showToast('Please fill all required video fields', 'error');
      return;
    }

    addVideo({
      youtubeId: vidYoutubeId,
      title: { en: vidTitleEn, hi: vidTitleHi || vidTitleEn },
      description: {
        en: 'New guide published from LUCKY tech TV Admin Console.',
        hi: 'लकी टेक टीवी एडमिन कंसोल से प्रकाशित नया ट्यूटोरियल।'
      },
      category: vidCategory,
      duration: vidDuration,
      views: '1.2K',
      date: 'Just now',
      thumbnailUrl: '/src/assets/images/hero_tech_tv_1790491422636.jpg',
      featured: false
    });

    setVidYoutubeId('');
    setVidTitleEn('');
    setVidTitleHi('');
    showToast('Video published to website!');
  };

  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitleEn || !blogContentEn) {
      showToast('Please fill title and content', 'error');
      return;
    }

    addArticle({
      slug: blogTitleEn.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: { en: blogTitleEn, hi: blogTitleHi || blogTitleEn },
      excerpt: { en: blogExcerptEn || blogContentEn.slice(0, 120), hi: blogTitleHi || blogTitleEn },
      content: { en: blogContentEn, hi: blogContentEn },
      category: blogCategory,
      readTime: '4 min read',
      date: 'Just now',
      author: {
        name: 'LUCKY tech TV Editorial',
        role: 'Verified Administrator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      },
      coverImage: '/src/assets/images/ai_video_tutorial_studio_1790491436985.jpg',
      tags: ['Tech News', 'Official', 'Update'],
      tableOfContents: [
        { id: 'sec-1', text: { en: 'Overview', hi: 'विवरण' } }
      ]
    });

    setBlogTitleEn('');
    setBlogTitleHi('');
    setBlogExcerptEn('');
    setBlogContentEn('');
    showToast('Blog article created!');
  };

  const handleCreateTool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolName || !toolUrl) {
      showToast('Please provide tool name and URL', 'error');
      return;
    }

    addAITool({
      name: toolName,
      category: toolCat,
      pricing: toolPricing,
      description: {
        en: toolDescEn || 'Advanced AI platform recommended by LUCKY tech TV.',
        hi: 'लकी टेक टीवी द्वारा अनुशंसित उन्नत AI प्लेटफ़ॉर्म।'
      },
      rating: 4.8,
      url: toolUrl,
      badge: 'Admin Pick'
    });

    setToolName('');
    setToolUrl('');
    setToolDescEn('');
    showToast('AI Tool added to directory!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div 
        className="relative flex flex-col w-full max-w-5xl h-[88vh] rounded-2xl border border-white/10 bg-[#121216] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161C]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <h2 className="text-base font-bold text-white">LUCKY tech TV – Creator & Admin Console</h2>
              <p className="text-xs text-slate-400">Content Management System & Real-Time Performance</p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-white/10 bg-[#14141A] overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'videos', label: 'Publish Video', icon: Video },
            { id: 'blogs', label: 'Create Blog', icon: FileText },
            { id: 'tools', label: 'Manage AI Tools', icon: Sparkles },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-3.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#00BFFF] text-[#00BFFF]'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 text-left">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Analytics Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-[#16161D]">
                  <div className="text-xs text-slate-400">Total Subscribers</div>
                  <div className="text-2xl font-bold text-white mt-1 tabular-nums">254,820</div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>+3,420 this week</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-[#16161D]">
                  <div className="text-xs text-slate-400">Monthly Video Views</div>
                  <div className="text-2xl font-bold text-white mt-1 tabular-nums">1.84M</div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>+18.4% vs last month</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-[#16161D]">
                  <div className="text-xs text-slate-400">Active AI Tools Listed</div>
                  <div className="text-2xl font-bold text-[#00BFFF] mt-1 tabular-nums">{aiTools.length}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Verified & Working</div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-[#16161D]">
                  <div className="text-xs text-slate-400">Avg. Click-Through Rate</div>
                  <div className="text-2xl font-bold text-[#FFD700] mt-1 tabular-nums">9.2%</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Top 5% of Tech Niche</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-5 rounded-xl border border-white/10 bg-[#16161D] space-y-3">
                <h3 className="text-sm font-bold text-white">Live Published Content Inventory</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <span>Videos Online</span>
                    <strong className="text-white tabular-nums">{videos.length}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <span>Articles Published</span>
                    <strong className="text-white tabular-nums">{articles.length}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <span>AI Directory Items</span>
                    <strong className="text-white tabular-nums">{aiTools.length}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">Add New YouTube Video to Website</h3>
                <p className="text-xs text-slate-400 mt-0.5">Enter the YouTube video ID and bilingual metadata to immediately display on the homepage and video feed.</p>
              </div>

              <form onSubmit={handleCreateVideo} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">YouTube Video ID (e.g., dQw4w9WgXcQ)</label>
                  <input
                    type="text"
                    required
                    value={vidYoutubeId}
                    onChange={(e) => setVidYoutubeId(e.target.value)}
                    placeholder="dQw4w9WgXcQ"
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Title (English)</label>
                    <input
                      type="text"
                      required
                      value={vidTitleEn}
                      onChange={(e) => setVidTitleEn(e.target.value)}
                      placeholder="e.g. Master Midjourney v6.1 in 10 Minutes"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Title (Hindi)</label>
                    <input
                      type="text"
                      value={vidTitleHi}
                      onChange={(e) => setVidTitleHi(e.target.value)}
                      placeholder="उदा. 10 मिनट में सीखें Midjourney v6.1"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                    <select
                      value={vidCategory}
                      onChange={(e) => setVidCategory(e.target.value as any)}
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    >
                      <option value="video-creation">AI Video Creation</option>
                      <option value="ai-tools">AI Tools</option>
                      <option value="youtube-tips">YouTube Tips</option>
                      <option value="tech-news">Tech News</option>
                      <option value="mobile-tricks">Mobile Tricks</option>
                      <option value="educational">Educational</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Duration (MM:SS)</label>
                    <input
                      type="text"
                      value={vidDuration}
                      onChange={(e) => setVidDuration(e.target.value)}
                      placeholder="18:30"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF0000] text-xs font-semibold text-white hover:bg-red-600"
                >
                  <Plus className="h-4 w-4" />
                  <span>Publish Video</span>
                </button>
              </form>
            </div>
          )}

          {/* Blogs Tab */}
          {activeTab === 'blogs' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">Publish Tech Article / Blog Post</h3>
                <p className="text-xs text-slate-400 mt-0.5">Write deep-dive articles with SEO tags and structured content.</p>
              </div>

              <form onSubmit={handleCreateBlog} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Article Title (English)</label>
                  <input
                    type="text"
                    required
                    value={blogTitleEn}
                    onChange={(e) => setBlogTitleEn(e.target.value)}
                    placeholder="e.g. Breakthrough in Quantum Photonics 2026"
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Article Content (Markdown supported)</label>
                  <textarea
                    rows={6}
                    required
                    value={blogContentEn}
                    onChange={(e) => setBlogContentEn(e.target.value)}
                    placeholder="Write detailed guide content here..."
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] p-4 text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00BFFF] text-xs font-semibold text-black hover:bg-sky-400"
                >
                  <Plus className="h-4 w-4" />
                  <span>Publish Article</span>
                </button>
              </form>
            </div>
          )}

          {/* AI Tools Tab */}
          {activeTab === 'tools' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">Add New Tool to AI Directory</h3>
                <p className="text-xs text-slate-400 mt-0.5">Keep the community updated with the newest generative AI releases.</p>
              </div>

              <form onSubmit={handleCreateTool} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Tool Name</label>
                    <input
                      type="text"
                      required
                      value={toolName}
                      onChange={(e) => setToolName(e.target.value)}
                      placeholder="e.g. Ideogram 2.0"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Website URL</label>
                    <input
                      type="url"
                      required
                      value={toolUrl}
                      onChange={(e) => setToolUrl(e.target.value)}
                      placeholder="https://ideogram.ai"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                    <select
                      value={toolCat}
                      onChange={(e) => setToolCat(e.target.value as any)}
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    >
                      <option value="video">Video AI</option>
                      <option value="image">Image AI</option>
                      <option value="audio">Voice / Audio</option>
                      <option value="text">Text / LLM</option>
                      <option value="automation">Automation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Pricing Model</label>
                    <select
                      value={toolPricing}
                      onChange={(e) => setToolPricing(e.target.value as any)}
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                    >
                      <option value="Free">100% Free</option>
                      <option value="Freemium">Freemium</option>
                      <option value="Paid">Paid / Subscription</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Short Description</label>
                  <input
                    type="text"
                    value={toolDescEn}
                    onChange={(e) => setToolDescEn(e.target.value)}
                    placeholder="e.g. Revolutionary typography in AI image generation."
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8A2BE2] text-xs font-semibold text-white hover:bg-purple-600"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add AI Tool</span>
                </button>
              </form>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-base font-bold text-white">LUCKY tech TV Real-Time Reach</h3>
              <div className="p-6 rounded-2xl border border-white/10 bg-[#16161D] space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Top Geographies</span>
                  <span>Audience Share</span>
                </div>
                <div className="space-y-2">
                  {[
                    { country: 'India (Hindi & Hinglish)', share: '74%' },
                    { country: 'United States & Canada', share: '12%' },
                    { country: 'United Arab Emirates & Gulf', share: '8%' },
                    { country: 'Other Global Markets', share: '6%' }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/5">
                      <span className="text-slate-200">{row.country}</span>
                      <span className="font-bold text-[#00BFFF] tabular-nums">{row.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
