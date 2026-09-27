import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  User, 
  Bookmark, 
  Clock, 
  ThumbsUp, 
  LogOut, 
  Play, 
  ExternalLink, 
  Trash2,
  ShieldCheck
} from 'lucide-react';

export const UserProfileModal: React.FC = () => {
  const {
    isProfileOpen,
    setIsProfileOpen,
    currentUser,
    logoutUser,
    aiTools,
    videos,
    toggleBookmarkTool,
    toggleWatchLaterVideo,
    setActiveVideo,
    language,
    setIsAdminOpen
  } = useApp();

  const [activeTab, setActiveTab] = useState<'bookmarks' | 'watchlater'>('bookmarks');

  if (!isProfileOpen || !currentUser) return null;

  const savedTools = aiTools.filter(t => currentUser.savedToolIds.includes(t.id));
  const watchLaterVideos = videos.filter(v => currentUser.watchLaterVideoIds.includes(v.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div 
        className="relative flex flex-col w-full max-w-2xl max-h-[85vh] rounded-2xl border border-white/10 bg-[#121216] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161C]">
          <div className="flex items-center gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-10 w-10 rounded-full border border-white/20 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white">{currentUser.name}</h3>
                {currentUser.role === 'admin' && (
                  <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">{currentUser.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentUser.role === 'admin' && (
              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  setIsAdminOpen(true);
                }}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:bg-amber-500/20"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Admin Console</span>
              </button>
            )}
            <button
              onClick={() => setIsProfileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-white/10 bg-[#121216] px-6">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-colors mr-6 ${
              activeTab === 'bookmarks'
                ? 'border-[#00BFFF] text-[#00BFFF]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span>{language === 'hi' ? 'सेव किए गए AI टूल्स' : 'Saved AI Tools'}</span>
            <span className="ml-1 text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full tabular-nums">
              {savedTools.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('watchlater')}
            className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'watchlater'
                ? 'border-[#00BFFF] text-[#00BFFF]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            <span>{language === 'hi' ? 'वॉच लेटर' : 'Watch Later'}</span>
            <span className="ml-1 text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full tabular-nums">
              {watchLaterVideos.length}
            </span>
          </button>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {activeTab === 'bookmarks' && (
            savedTools.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                <Bookmark className="h-8 w-8 mx-auto mb-2 opacity-30" />
                <p>{language === 'hi' ? 'आपने अभी तक कोई AI टूल सेव नहीं किया है।' : 'No AI tools saved to favorites yet.'}</p>
              </div>
            ) : (
              savedTools.map(tool => (
                <div
                  key={tool.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-[#181820] hover:border-white/15"
                >
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {language === 'hi' ? tool.description.hi : tool.description.en}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#00BFFF]/10 text-xs font-semibold text-[#00BFFF] hover:bg-[#00BFFF]/20"
                    >
                      <span>Open</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <button
                      onClick={() => toggleBookmarkTool(tool.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-400"
                      title="Remove bookmark"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )
          )}

          {activeTab === 'watchlater' && (
            watchLaterVideos.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                <Clock className="h-8 w-8 mx-auto mb-2 opacity-30" />
                <p>{language === 'hi' ? 'वॉच लेटर सूची खाली है।' : 'Your watch later list is currently empty.'}</p>
              </div>
            ) : (
              watchLaterVideos.map(vid => (
                <div
                  key={vid.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-[#181820] hover:border-white/15"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div 
                      onClick={() => {
                        setIsProfileOpen(false);
                        setActiveVideo(vid);
                      }}
                      className="relative h-14 w-24 rounded-lg overflow-hidden bg-black shrink-0 cursor-pointer group"
                    >
                      <img
                        src={vid.thumbnailUrl}
                        alt={vid.title.en}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="h-4 w-4 fill-white" />
                      </div>
                    </div>
                    <div>
                      <h4 
                        onClick={() => {
                          setIsProfileOpen(false);
                          setActiveVideo(vid);
                        }}
                        className="text-xs sm:text-sm font-semibold text-white line-clamp-1 hover:text-[#00BFFF] cursor-pointer"
                      >
                        {language === 'hi' ? vid.title.hi : vid.title.en}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{vid.views} views · {vid.duration}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleWatchLaterVideo(vid.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-400"
                    title="Remove from watch later"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-4 border-t border-white/10 bg-[#16161C]">
          <button
            onClick={() => {
              logoutUser();
              setIsProfileOpen(false);
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300"
          >
            <LogOut className="h-4 w-4" />
            <span>{language === 'hi' ? 'लॉग आउट' : 'Sign Out'}</span>
          </button>
          
          <button
            onClick={() => setIsProfileOpen(false)}
            className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold text-white hover:bg-white/15"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
