import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Search, 
  ExternalLink, 
  Bookmark, 
  Star, 
  Filter, 
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';

export const AIToolsView: React.FC = () => {
  const { aiTools, language, currentUser, toggleBookmarkTool } = useApp();

  const [category, setCategory] = useState<string>('all');
  const [pricing, setPricing] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating');

  const filtered = aiTools.filter(tool => {
    const matchesCat = category === 'all' || tool.category === category;
    const matchesPrice = pricing === 'all' || tool.pricing.toLowerCase() === pricing.toLowerCase();
    const matchesSearch = 
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.en.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.hi.includes(search);
    return matchesCat && matchesPrice && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00BFFF]">
            <Sparkles className="h-4 w-4 text-[#FFD700]" />
            <span>{language === 'hi' ? 'व्यापक AI डायरेक्टरी' : 'Comprehensive AI Directory 2026'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? 'सर्वश्रेष्ठ AI टूल्स संग्रह'
              : 'The Ultimate Generative AI Directory for Creators'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'LUCKY tech TV द्वारा व्यक्तिगत रूप से परीक्षित और सत्यापित टूल्स। वीडियो, इमेज, ऑडियो, स्क्रिप्टिंग और ऑटोमेशन के लिए बेस्ट प्लेटफॉर्म्स।'
              : 'Personally tested, benchmarked, and categorized by the LUCKY tech TV team. Filter by utility, pricing, and community rating.'}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#141419] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={language === 'hi' ? 'टूल नाम या उद्देश्य खोजें...' : 'Search tools by keyword or use case...'}
                className="w-full rounded-xl border border-white/10 bg-[#0E0E12] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white focus:border-[#00BFFF] focus:outline-none"
              >
                <option value="all">All Categories (सभी श्रेणियां)</option>
                <option value="video">Video Generation (वीडियो)</option>
                <option value="image">Image Synthesis (इमेज)</option>
                <option value="audio">Voice / Audio (ऑडियो)</option>
                <option value="text">Text / LLM Reasoning (टेक्स्ट)</option>
                <option value="automation">Workflow Automation (ऑटोमेशन)</option>
              </select>
            </div>

            {/* Pricing Filter */}
            <div className="flex gap-2">
              <select
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-[#0E0E12] px-3 py-2.5 text-xs text-white focus:border-[#00BFFF] focus:outline-none"
              >
                <option value="all">All Pricing</option>
                <option value="free">100% Free</option>
                <option value="freemium">Freemium (Free Credits)</option>
                <option value="paid">Paid</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="flex-1 rounded-xl border border-white/10 bg-[#0E0E12] px-3 py-2.5 text-xs text-white focus:border-[#00BFFF] focus:outline-none"
              >
                <option value="rating">Top Rated (रेटिंग)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
            <span>Showing <strong className="text-white tabular-nums">{filtered.length}</strong> verified AI tools</span>
            {(category !== 'all' || pricing !== 'all' || search) && (
              <button
                onClick={() => {
                  setCategory('all');
                  setPricing('all');
                  setSearch('');
                }}
                className="text-[#00BFFF] hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(tool => {
            const isSaved = currentUser?.savedToolIds.includes(tool.id);
            return (
              <div
                key={tool.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141419] p-6 hover:border-[#00BFFF]/50 hover:bg-[#181822] transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                          {tool.name}
                        </h3>
                        {tool.badge && (
                          <span className="text-[10px] font-semibold text-[#FFD700] uppercase tracking-wide">
                            · {tool.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                        <span className="text-[#00BFFF] uppercase font-semibold text-[11px]">{tool.category}</span>
                        <span>·</span>
                        <span>{tool.pricing}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmarkTool(tool.id)}
                      title={isSaved ? 'Remove bookmark' : 'Bookmark tool'}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                        isSaved
                          ? 'border-[#FFD700] bg-[#FFD700]/10 text-[#FFD700]'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'hi' ? tool.description.hi : tool.description.en}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="tabular-nums font-bold">{tool.rating.toFixed(2)}</span>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-xs font-semibold text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black transition-all"
                  >
                    <span>{language === 'hi' ? 'टूल वेबसाइट' : 'Launch Tool'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
