import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, Video, Sparkles, BookOpen, ExternalLink, Play } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    videos,
    aiTools,
    articles,
    setActiveVideo,
    setSelectedArticleId,
    setCurrentPage,
    language
  } = useApp();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const query = searchQuery.trim().toLowerCase();

  const matchedVideos = query
    ? videos.filter(
        v =>
          v.title.en.toLowerCase().includes(query) ||
          v.title.hi.includes(query) ||
          v.description.en.toLowerCase().includes(query)
      )
    : [];

  const matchedTools = query
    ? aiTools.filter(
        t =>
          t.name.toLowerCase().includes(query) ||
          t.description.en.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query)
      )
    : [];

  const matchedArticles = query
    ? articles.filter(
        a =>
          a.title.en.toLowerCase().includes(query) ||
          a.title.hi.includes(query) ||
          a.excerpt.en.toLowerCase().includes(query)
      )
    : [];

  const totalResults = matchedVideos.length + matchedTools.length + matchedArticles.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-md p-4 pt-16 sm:pt-24">
      <div 
        className="relative flex flex-col w-full max-w-2xl max-h-[75vh] rounded-2xl border border-white/10 bg-[#121216] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#16161C] gap-3">
          <Search className="h-5 w-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'वीडियो, AI टूल्स या आर्टिकल्स खोजें...'
                : 'Search videos, AI tools, tutorials, news...'
            }
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white ml-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
          {!query && (
            <div className="py-12 text-center text-xs text-slate-400">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-30" />
              <p>
                {language === 'hi'
                  ? 'कीवर्ड टाइप करें: "Runway", "Thumbnail", "Battery", "Sora"...'
                  : 'Type a keyword like "Runway", "Thumbnail", "Battery", or "ElevenLabs" to search.'}
              </p>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-12 text-center text-xs text-slate-400">
              <p>{language === 'hi' ? 'कोई परिणाम नहीं मिला।' : 'No matching results found.'}</p>
            </div>
          )}

          {/* Videos Section */}
          {matchedVideos.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF0000] mb-2">
                <Video className="h-3.5 w-3.5" />
                <span>Videos ({matchedVideos.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedVideos.map(vid => (
                  <div
                    key={vid.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setActiveVideo(vid);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.07] hover:border-[#FF0000]/40 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-16 rounded overflow-hidden bg-black shrink-0">
                        <img
                          src={vid.thumbnailUrl}
                          alt={vid.title.en}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Play className="h-3 w-3 fill-white" />
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-white line-clamp-1">
                        {language === 'hi' ? vid.title.hi : vid.title.en}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 tabular-nums shrink-0 ml-2">
                      {vid.views}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Tools Section */}
          {matchedTools.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00BFFF] mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Tools ({matchedTools.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedTools.map(tool => (
                  <a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.07] hover:border-[#00BFFF]/40 transition-all text-xs"
                  >
                    <div>
                      <span className="font-bold text-white block">{tool.name}</span>
                      <span className="text-[10px] text-slate-400">{tool.category} · {tool.pricing}</span>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-[#00BFFF] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD700] mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Articles ({matchedArticles.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedArticles.map(art => (
                  <div
                    key={art.id}
                    onClick={() => {
                      setSelectedArticleId(art.id);
                      setCurrentPage('blog');
                      setIsSearchOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.07] hover:border-[#FFD700]/40 cursor-pointer transition-all text-xs"
                  >
                    <span className="font-bold text-white line-clamp-1">
                      {language === 'hi' ? art.title.hi : art.title.en}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">
                      {art.readTime} · {art.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
