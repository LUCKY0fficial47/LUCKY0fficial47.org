import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ThumbsUp, 
  Clock, 
  Share2, 
  Youtube, 
  Play, 
  Check,
  ExternalLink
} from 'lucide-react';

export const VideoPlayerModal: React.FC = () => {
  const { 
    activeVideo, 
    setActiveVideo, 
    language, 
    videos, 
    currentUser, 
    likeVideo, 
    toggleWatchLaterVideo,
    showToast,
    setIsSubscribeModalOpen 
  } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveVideo]);

  if (!activeVideo) return null;

  const isLiked = currentUser?.likedVideoIds.includes(activeVideo.id);
  const isWatchLater = currentUser?.watchLaterVideoIds.includes(activeVideo.id);

  const relatedVideos = videos.filter(v => v.id !== activeVideo.id).slice(0, 3);

  const handleShare = () => {
    const url = `https://www.youtube.com/watch?v=${activeVideo.youtubeId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      showToast('Video link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-[#121216] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#18181E]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00BFFF]">
            <Youtube className="h-4 w-4 text-[#FF0000]" />
            <span>LUCKY tech TV Player</span>
          </div>
          <button
            onClick={() => setActiveVideo(null)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
            title={activeVideo.title.en}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        {/* Content & Metadata */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {language === 'hi' ? activeVideo.title.hi : activeVideo.title.en}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="tabular-nums">{activeVideo.views} views</span>
                <span>·</span>
                <span>{activeVideo.date}</span>
                <span>·</span>
                <span className="text-[#FFD700] uppercase font-medium">{activeVideo.category}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Like Button */}
              <button
                onClick={() => likeVideo(activeVideo.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isLiked
                    ? 'bg-[#FF0000] text-white shadow-lg shadow-red-950/40'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <ThumbsUp className={`h-3.5 w-3.5 ${isLiked ? 'fill-white' : ''}`} />
                <span className="tabular-nums">{activeVideo.likes.toLocaleString()}</span>
              </button>

              {/* Watch Later */}
              <button
                onClick={() => toggleWatchLaterVideo(activeVideo.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isWatchLater
                    ? 'bg-[#00BFFF] text-black font-bold'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <Clock className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">
                  {isWatchLater ? 'Saved' : 'Watch Later'}
                </span>
              </button>

              {/* Share */}
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </button>

              {/* Subscribe quick trigger */}
              <button
                onClick={() => setIsSubscribeModalOpen(true)}
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#FF0000] text-xs font-semibold text-white hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
          </div>

          {/* Description Block */}
          <div className="rounded-xl border border-white/5 bg-[#18181F] p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p className="font-medium text-slate-200 mb-1">
              {language === 'hi' ? 'विवरण' : 'About this Masterclass'}:
            </p>
            <p>{language === 'hi' ? activeVideo.description.hi : activeVideo.description.en}</p>
          </div>

          {/* Related Videos Suggestion Strip */}
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {language === 'hi' ? 'अन्य महत्वपूर्ण ट्यूटोरियल्स' : 'Related Tech Guides'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedVideos.map(video => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group flex gap-3 sm:flex-col items-center sm:items-start p-2 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#00BFFF]/30 cursor-pointer transition-all"
                >
                  <div className="relative aspect-video w-28 sm:w-full overflow-hidden rounded-lg bg-black shrink-0">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title.en}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-white tabular-nums">
                      {video.duration}
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-white group-hover:text-[#00BFFF] transition-colors line-clamp-2">
                      {language === 'hi' ? video.title.hi : video.title.en}
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {video.views} views
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
