import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ExternalLink, 
  Bookmark, 
  Star, 
  Search, 
  Filter, 
  Video, 
  Mic, 
  Image as ImageIcon, 
  Bot, 
  Workflow 
} from 'lucide-react';

export const AIToolsSection: React.FC<{ limit?: number }> = ({ limit }) => {
  const { 
    aiTools, 
    language, 
    currentUser, 
    toggleBookmarkTool, 
    setCurrentPage 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesQuery = 
      tool.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      tool.description.en.toLowerCase().includes(filterQuery.toLowerCase()) ||
      tool.description.hi.includes(filterQuery);
    return matchesCategory && matchesQuery;
  });

  const displayTools = limit ? filteredTools.slice(0, limit) : filteredTools;

  return (
    <section className="py-14 border-b border-white/5 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00BFFF] mb-1">
              <Sparkles className="h-3.5 w-3.5 text-[#FFD700]" />
              <span>{language === 'hi' ? 'हैंडपिक्ड डायरेक्टरी' : 'Handpicked Directory'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'hi' ? 'ट्रेंडिंग AI टूल्स' : 'Trending AI Tools for Creators'}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              {language === 'hi'
                ? 'वीडियो, वॉइस, इमेज और ऑटोमेशन के लिए सर्वश्रेष्ठ टेस्टेड AI टूल्स।'
                : 'Curated and battle-tested generative AI platforms for next-generation content creation.'}
            </p>
          </div>

          {/* Interactive Filter Segment (Constitutional button tabs) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#14141A] rounded-xl border border-white/10">
            {[
              { id: 'all', labelEn: 'All', labelHi: 'सभी' },
              { id: 'video', labelEn: 'Video AI', labelHi: 'वीडियो' },
              { id: 'audio', labelEn: 'Voice AI', labelHi: 'ऑडियो' },
              { id: 'image', labelEn: 'Image AI', labelHi: 'इमेज' },
              { id: 'text', labelEn: 'Text / LLM', labelHi: 'टेक्स्ट' },
              { id: 'automation', labelEn: 'Automation', labelHi: 'ऑटोमेशन' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-[#00BFFF] text-black font-bold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {language === 'hi' ? tab.labelHi : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar for Tools */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={language === 'hi' ? 'AI टूल नाम से खोजें...' : 'Search AI tools by name or purpose...'}
            className="w-full rounded-xl border border-white/10 bg-[#16161B] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none focus:ring-1 focus:ring-[#00BFFF]"
          />
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayTools.map(tool => {
            const isSaved = currentUser?.savedToolIds.includes(tool.id);
            return (
              <div
                key={tool.id}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#141419] p-5 hover:border-[#00BFFF]/40 hover:bg-[#181820] transition-all duration-200"
              >
                <div className="space-y-3">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                          {tool.name}
                        </h3>
                        {tool.badge && (
                          <span className="text-[10px] font-semibold text-[#FFD700] uppercase tracking-wide">
                            · {tool.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span className="uppercase text-[11px] text-[#00BFFF]">{tool.category}</span>
                        <span>·</span>
                        <span>{tool.pricing}</span>
                      </div>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleBookmarkTool(tool.id)}
                      title={isSaved ? 'Remove from favorites' : 'Save to favorites'}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                        isSaved
                          ? 'border-[#FFD700] bg-[#FFD700]/10 text-[#FFD700]'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {language === 'hi' ? tool.description.hi : tool.description.en}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                  <div className="flex items-center gap-1 text-xs text-amber-400">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="tabular-nums font-semibold">{tool.rating.toFixed(2)}</span>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-[#00BFFF] hover:text-white transition-colors"
                  >
                    <span>{language === 'hi' ? 'टूल खोलें' : 'Open Tool'}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA if limited */}
        {limit && filteredTools.length > limit && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentPage('ai-tools')}
              className="px-6 py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-semibold text-white hover:bg-white/10 hover:border-[#00BFFF]/40 transition-colors"
            >
              {language === 'hi' ? 'सभी 50+ AI टूल्स देखें →' : 'View All 50+ AI Tools →'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
