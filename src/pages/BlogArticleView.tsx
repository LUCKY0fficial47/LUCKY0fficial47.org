import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Clock, 
  User, 
  MessageSquare, 
  Share2, 
  ThumbsUp, 
  Bookmark, 
  ArrowLeft, 
  Send, 
  Tag, 
  Check, 
  BookOpen,
  ChevronRight
} from 'lucide-react';

export const BlogArticleView: React.FC = () => {
  const { 
    articles, 
    selectedArticleId, 
    setSelectedArticleId, 
    comments, 
    addComment, 
    language, 
    showToast,
    setCurrentPage 
  } = useApp();

  const article = articles.find(a => a.id === selectedArticleId) || articles[0];
  const articleComments = comments.filter(c => c.articleId === article.id);

  const [newComment, setNewComment] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [likedArticle, setLikedArticle] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      showToast('Article link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    addComment(article.id, newComment, commenterName);
    setNewComment('');
  };

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="py-10 sm:py-14 text-left">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => setCurrentPage('home')}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <ChevronRight className="h-3 w-3" />
          <button 
            onClick={() => {
              setSelectedArticleId(null);
              setCurrentPage('blog');
            }}
            className="hover:text-white transition-colors"
          >
            Blog
          </button>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#00BFFF] uppercase font-semibold text-[11px] truncate max-w-[200px]">
            {article.category}
          </span>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="text-[#00BFFF] uppercase font-bold text-xs">{article.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span>·</span>
            <span>Published {article.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {language === 'hi' ? article.title.hi : article.title.en}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi' ? article.excerpt.hi : article.excerpt.en}
          </p>

          {/* Author Strip & Social Share Controls */}
          <div className="pt-4 pb-2 border-y border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-10 w-10 rounded-full object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-bold text-white">{article.author.name}</div>
                <div className="text-xs text-slate-400">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setLikedArticle(!likedArticle);
                  showToast(likedArticle ? 'Removed clap' : 'Thanks for clapping!');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                  likedArticle
                    ? 'border-[#FF0000] bg-[#FF0000]/15 text-[#FF0000]'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:text-white'
                }`}
              >
                <ThumbsUp className={`h-3.5 w-3.5 ${likedArticle ? 'fill-current' : ''}`} />
                <span>{likedArticle ? 143 : 142}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Visual Cover */}
        <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl relative">
          <img
            src={article.coverImage}
            alt={article.title.en}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Table of Contents for Long-form Readers */}
            <div className="p-5 rounded-xl border border-white/10 bg-[#141419] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFD700]">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Table of Contents</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {article.tableOfContents.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#00BFFF] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-slate-500">·</span>
                      <span>{language === 'hi' ? item.text.hi : item.text.en}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prose Content */}
            <div className="prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {language === 'hi' ? article.content.hi : article.content.en}
            </div>

            {/* Tags Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-1">Tags:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-slate-300 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#16161D] flex items-center gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-14 w-14 rounded-full object-cover border border-white/20 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1 text-xs">
                <span className="text-[10px] uppercase font-bold text-[#FFD700] tracking-wide">Article Author</span>
                <h4 className="text-sm font-bold text-white">{article.author.name}</h4>
                <p className="text-slate-400 leading-relaxed">
                  Tech explorer and video producer at LUCKY tech TV Official, dedicated to uncovering bleeding-edge AI models, creator workflows, and hardware optimizations.
                </p>
              </div>
            </div>

            {/* Comments Section */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#00BFFF]" />
                  <h3 className="text-lg font-bold text-white">
                    {language === 'hi' ? 'कम्युनिटी टिप्पणियाँ' : 'Discussion & Feedback'} ({articleComments.length})
                  </h3>
                </div>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-3 p-4 rounded-xl border border-white/10 bg-[#141419]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="rounded-xl border border-white/10 bg-[#0E0E12] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={
                    language === 'hi'
                      ? 'अपनी राय या सवाल साझा करें...'
                      : 'Share your thoughts, workflow tips, or questions...'
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0E0E12] p-3 text-xs text-white placeholder-slate-500 focus:border-[#00BFFF] focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00BFFF] text-xs font-bold text-black hover:bg-sky-400 transition-colors"
                >
                  <Send className="h-3 w-3" />
                  <span>{language === 'hi' ? 'टिप्पणी पोस्ट करें' : 'Post Comment'}</span>
                </button>
              </form>

              {/* Comments Feed */}
              <div className="space-y-3">
                {articleComments.map(c => (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-white/5 bg-[#14141A] space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <img
                          src={c.avatar}
                          alt={c.authorName}
                          className="h-6 w-6 rounded-full object-cover border border-white/20"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-bold text-white">{c.authorName}</span>
                      </div>
                      <span className="text-[11px] text-slate-500">{c.date}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-8">
                      {c.content}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Sticky Sidebar: Related Articles */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 rounded-2xl border border-white/10 bg-[#141419] space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD700]">Related Guides</h4>
              <div className="space-y-4">
                {relatedArticles.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setSelectedArticleId(rel.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer space-y-2"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                      <img
                        src={rel.coverImage}
                        alt={rel.title.en}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h5 className="text-xs font-bold text-white group-hover:text-[#00BFFF] transition-colors line-clamp-2">
                      {language === 'hi' ? rel.title.hi : rel.title.en}
                    </h5>
                    <span className="text-[10px] text-slate-400 block">
                      {rel.readTime} · {rel.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Community Banner */}
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1010] to-[#121216] space-y-3 text-center">
              <span className="text-xs font-bold uppercase text-[#FF0000]">Join 250K+ Creators</span>
              <h4 className="text-sm font-bold text-white">Prefer Video Masterclasses?</h4>
              <p className="text-xs text-slate-400">
                Watch full 4K breakdowns with real-time prompt screens on our official YouTube channel.
              </p>
              <a
                href="https://www.youtube.com/@LUCKYtechTV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-2.5 rounded-xl bg-[#FF0000] text-xs font-bold text-white hover:bg-red-600 transition-colors"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
