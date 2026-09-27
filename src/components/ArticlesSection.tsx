import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Clock, ArrowRight, MessageSquare, User } from 'lucide-react';

export const ArticlesSection: React.FC<{ limit?: number }> = ({ limit }) => {
  const { 
    articles, 
    language, 
    setCurrentPage, 
    setSelectedArticleId 
  } = useApp();

  const displayArticles = limit ? articles.slice(0, limit) : articles;

  const handleReadArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 border-b border-white/5 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00BFFF] mb-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{language === 'hi' ? 'नवीनतम ब्लॉग और गाइड्स' : 'Articles & Guides'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'hi' ? 'लेटेस्ट टेक न्यूज़ व इन-डेप्थ ट्यूटोरियल्स' : 'Latest Tech News & Deep-Dive Tutorials'}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              {language === 'hi'
                ? 'AI वीडियो तकनीक, मोबाइल ट्रिक्स और यूट्यूब ग्रोथ पर गहराई से विश्लेषण।'
                : 'Actionable blueprints, performance benchmarks, and behind-the-scenes breakdowns.'}
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('blog')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#00BFFF] hover:text-white transition-colors"
          >
            <span>{language === 'hi' ? 'सभी ब्लॉग पढ़ें' : 'Browse All Articles'}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayArticles.map(article => (
            <article
              key={article.id}
              onClick={() => handleReadArticle(article.id)}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141419] overflow-hidden hover:border-[#00BFFF]/40 hover:bg-[#181820] cursor-pointer transition-all duration-300"
            >
              <div>
                {/* Visual Cover */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={article.coverImage}
                    alt={article.title.en}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 text-left">
                  {/* Metadata (Unboxed text with separators per constitution) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-[#00BFFF] uppercase font-semibold text-[11px]">{article.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors line-clamp-2 leading-snug">
                    {language === 'hi' ? article.title.hi : article.title.en}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {language === 'hi' ? article.excerpt.hi : article.excerpt.en}
                  </p>
                </div>
              </div>

              {/* Author & Read Link */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-6 w-6 rounded-full object-cover border border-white/20"
                    referrerPolicy="no-referrer"
                  />
                  <span className="truncate max-w-[120px] text-slate-300">{article.author.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-400">
                    <MessageSquare className="h-3 w-3" />
                    <span className="tabular-nums">{article.commentsCount}</span>
                  </span>
                  <span className="text-[#FFD700] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
