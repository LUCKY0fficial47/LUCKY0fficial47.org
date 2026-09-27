export type Language = 'en' | 'hi';

export type CategoryType = 
  | 'all'
  | 'ai-tools'
  | 'video-creation'
  | 'youtube-tips'
  | 'tech-news'
  | 'mobile-tricks'
  | 'educational';

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  category: CategoryType;
  duration: string;
  views: string;
  date: string;
  thumbnailUrl: string;
  featured?: boolean;
  likes: number;
}

export interface ShortItem {
  id: string;
  youtubeId: string;
  title: { en: string; hi: string };
  views: string;
  thumbnailUrl: string;
  likes: number;
}

export interface AIToolItem {
  id: string;
  name: string;
  category: 'video' | 'image' | 'audio' | 'text' | 'automation';
  pricing: 'Free' | 'Freemium' | 'Paid';
  description: { en: string; hi: string };
  rating: number;
  url: string;
  badge?: string;
  popular?: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: { en: string; hi: string };
  excerpt: { en: string; hi: string };
  content: { en: string; hi: string };
  category: CategoryType;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
  tableOfContents: { id: string; text: { en: string; hi: string } }[];
  commentsCount: number;
}

export interface CommentItem {
  id: string;
  articleId: string;
  authorName: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  savedToolIds: string[];
  watchLaterVideoIds: string[];
  likedVideoIds: string[];
  role: 'user' | 'admin';
}

export interface FAQItem {
  id: string;
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
  category: string;
}
