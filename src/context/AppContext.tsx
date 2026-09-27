import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  CategoryType,
  VideoItem,
  ShortItem,
  AIToolItem,
  ArticleItem,
  CommentItem,
  UserProfile,
  FAQItem
} from '../types';
import {
  INITIAL_VIDEOS,
  INITIAL_SHORTS,
  INITIAL_AI_TOOLS,
  INITIAL_ARTICLES,
  INITIAL_COMMENTS,
  INITIAL_FAQS
} from '../data/initialData';

export type PageRoute =
  | 'home'
  | 'about'
  | 'ai-tools'
  | 'tutorials'
  | 'tech-news'
  | 'youtube-tips'
  | 'blog'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  text: string;
}

interface AppContextType {
  // Navigation & Page State
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  selectedArticleId: string | null;
  setSelectedArticleId: (id: string | null) => void;
  language: Language;
  toggleLanguage: () => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  
  // Modals
  activeVideo: VideoItem | null;
  setActiveVideo: (video: VideoItem | null) => void;
  activeShort: ShortItem | null;
  setActiveShort: (short: ShortItem | null) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalTab: 'login' | 'signup' | 'forgot';
  setAuthModalTab: (tab: 'login' | 'signup' | 'forgot') => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAIChatOpen: boolean;
  setIsAIChatOpen: (open: boolean) => void;
  isSubscribeModalOpen: boolean;
  setIsSubscribeModalOpen: (open: boolean) => void;
  
  // Data lists & mutations
  videos: VideoItem[];
  shorts: ShortItem[];
  aiTools: AIToolItem[];
  articles: ArticleItem[];
  comments: CommentItem[];
  faqs: FAQItem[];
  
  // User Actions
  currentUser: UserProfile | null;
  loginUser: (email: string, name?: string) => void;
  logoutUser: () => void;
  toggleBookmarkTool: (toolId: string) => void;
  toggleWatchLaterVideo: (videoId: string) => void;
  likeVideo: (videoId: string) => void;
  addComment: (articleId: string, content: string, authorName: string) => void;
  addVideo: (video: Omit<VideoItem, 'id' | 'likes'>) => void;
  addAITool: (tool: Omit<AIToolItem, 'id'>) => void;
  addArticle: (article: Omit<ArticleItem, 'id' | 'commentsCount'>) => void;
  
  // Notifications
  toasts: ToastMessage[];
  showToast: (text: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;

  // TV / Cinema Mode
  isCinemaMode: boolean;
  toggleCinemaMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  USER: 'lucky_tech_tv_user',
  BOOKMARKS: 'lucky_tech_tv_bookmarks',
  WATCH_LATER: 'lucky_tech_tv_watch_later',
  COMMENTS: 'lucky_tech_tv_comments',
  VIDEOS: 'lucky_tech_tv_videos',
  AI_TOOLS: 'lucky_tech_tv_tools',
  ARTICLES: 'lucky_tech_tv_articles',
  LANG: 'lucky_tech_tv_lang'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) as Language) || 'en';
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeShort, setActiveShort] = useState<ShortItem | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup' | 'forgot'>('login');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.VIDEOS);
    return saved ? JSON.parse(saved) : INITIAL_VIDEOS;
  });
  
  const [shorts] = useState<ShortItem[]>(INITIAL_SHORTS);
  
  const [aiTools, setAiTools] = useState<AIToolItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.AI_TOOLS);
    return saved ? JSON.parse(saved) : INITIAL_AI_TOOLS;
  });
  
  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.ARTICLES);
    return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
  });
  
  const [comments, setComments] = useState<CommentItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.COMMENTS);
    return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
  });

  const [faqs] = useState<FAQItem[]>(INITIAL_FAQS);
  
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);
    if (saved) return JSON.parse(saved);
    // Initial guest/demo user for seamless experience
    return {
      id: 'usr-1',
      name: 'Lucky Tech Member',
      email: 'member@luckytechtv.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      savedToolIds: ['tool-1', 'tool-2'],
      watchLaterVideoIds: ['vid-1'],
      likedVideoIds: ['vid-3'],
      role: 'admin' // Enable admin switch convenience
    };
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, language);
  }, [language]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, text }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'en' ? 'hi' : 'en';
      showToast(next === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई' : 'Switched language to English', 'info');
      return next;
    });
  };

  const loginUser = (email: string, name?: string) => {
    const user: UserProfile = {
      id: 'usr-' + Date.now(),
      name: name || email.split('@')[0],
      email: email,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(email)}`,
      savedToolIds: [],
      watchLaterVideoIds: [],
      likedVideoIds: [],
      role: email.includes('admin') || email.includes('lucky') ? 'admin' : 'user'
    };
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    showToast(language === 'hi' ? 'सफलतापूर्वक लॉग इन हुआ!' : 'Successfully signed in! Welcome back.');
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    showToast(language === 'hi' ? 'लॉग आउट किया गया' : 'Logged out successfully', 'info');
  };

  const toggleBookmarkTool = (toolId: string) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    const isSaved = currentUser.savedToolIds.includes(toolId);
    const updated = isSaved
      ? currentUser.savedToolIds.filter(id => id !== toolId)
      : [...currentUser.savedToolIds, toolId];
    
    setCurrentUser({ ...currentUser, savedToolIds: updated });
    showToast(
      isSaved
        ? (language === 'hi' ? 'टूल बुकमार्क से हटाया गया' : 'Removed tool from bookmarks')
        : (language === 'hi' ? 'टूल बुकमार्क में जोड़ा गया!' : 'Saved tool to bookmarks!')
    );
  };

  const toggleWatchLaterVideo = (videoId: string) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    const isSaved = currentUser.watchLaterVideoIds.includes(videoId);
    const updated = isSaved
      ? currentUser.watchLaterVideoIds.filter(id => id !== videoId)
      : [...currentUser.watchLaterVideoIds, videoId];

    setCurrentUser({ ...currentUser, watchLaterVideoIds: updated });
    showToast(
      isSaved
        ? (language === 'hi' ? 'वॉच लेटर से हटाया गया' : 'Removed from Watch Later')
        : (language === 'hi' ? 'वॉच लेटर में जोड़ा गया!' : 'Added to Watch Later!')
    );
  };

  const likeVideo = (videoId: string) => {
    setVideos(prev =>
      prev.map(v => {
        if (v.id === videoId) {
          const isLiked = currentUser?.likedVideoIds.includes(videoId);
          return { ...v, likes: isLiked ? v.likes - 1 : v.likes + 1 };
        }
        return v;
      })
    );

    if (currentUser) {
      const isLiked = currentUser.likedVideoIds.includes(videoId);
      const updated = isLiked
        ? currentUser.likedVideoIds.filter(id => id !== videoId)
        : [...currentUser.likedVideoIds, videoId];
      setCurrentUser({ ...currentUser, likedVideoIds: updated });
      showToast(isLiked ? 'Removed like' : 'Thanks for liking!', 'info');
    }
  };

  const addComment = (articleId: string, content: string, authorName: string) => {
    const newComment: CommentItem = {
      id: 'comm-' + Date.now(),
      articleId,
      authorName: authorName || (currentUser?.name ?? 'Tech Explorer'),
      avatar: currentUser?.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${authorName}`,
      content,
      date: 'Just now',
      likes: 1
    };
    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.COMMENTS, JSON.stringify(updated));
    showToast(language === 'hi' ? 'आपकी टिप्पणी प्रकाशित हो गई है!' : 'Your comment was posted successfully!');
  };

  const addVideo = (videoData: Omit<VideoItem, 'id' | 'likes'>) => {
    const newVideo: VideoItem = {
      ...videoData,
      id: 'vid-' + Date.now(),
      likes: 0
    };
    const updated = [newVideo, ...videos];
    setVideos(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.VIDEOS, JSON.stringify(updated));
    showToast('Video added to catalog!');
  };

  const addAITool = (toolData: Omit<AIToolItem, 'id'>) => {
    const newTool: AIToolItem = {
      ...toolData,
      id: 'tool-' + Date.now()
    };
    const updated = [newTool, ...aiTools];
    setAiTools(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.AI_TOOLS, JSON.stringify(updated));
    showToast('AI Tool added successfully!');
  };

  const addArticle = (articleData: Omit<ArticleItem, 'id' | 'commentsCount'>) => {
    const newArt: ArticleItem = {
      ...articleData,
      id: 'art-' + Date.now(),
      commentsCount: 0
    };
    const updated = [newArt, ...articles];
    setArticles(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
    showToast('Article published successfully!');
  };

  const toggleCinemaMode = () => {
    setIsCinemaMode(prev => !prev);
    showToast(isCinemaMode ? 'Smart TV / Cinema mode disabled' : 'Smart TV / Cinema view enabled', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedArticleId,
        setSelectedArticleId,
        language,
        toggleLanguage,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        activeVideo,
        setActiveVideo,
        activeShort,
        setActiveShort,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        isProfileOpen,
        setIsProfileOpen,
        isAdminOpen,
        setIsAdminOpen,
        isAIChatOpen,
        setIsAIChatOpen,
        isSubscribeModalOpen,
        setIsSubscribeModalOpen,
        videos,
        shorts,
        aiTools,
        articles,
        comments,
        faqs,
        currentUser,
        loginUser,
        logoutUser,
        toggleBookmarkTool,
        toggleWatchLaterVideo,
        likeVideo,
        addComment,
        addVideo,
        addAITool,
        addArticle,
        toasts,
        showToast,
        removeToast,
        isCinemaMode,
        toggleCinemaMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
