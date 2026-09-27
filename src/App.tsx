import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { AIChatbotModal } from './components/AIChatbotModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { SearchModal } from './components/SearchModal';
import { SubscribeModal } from './components/SubscribeModal';
import { FloatingActions } from './components/FloatingActions';
import { CookieConsent } from './components/CookieConsent';
import { ToastContainer } from './components/ToastContainer';

// Page Views
import { HomeView } from './pages/HomeView';
import { AboutView } from './pages/AboutView';
import { AIToolsView } from './pages/AIToolsView';
import { TutorialsView } from './pages/TutorialsView';
import { TechNewsView } from './pages/TechNewsView';
import { YouTubeTipsView } from './pages/YouTubeTipsView';
import { BlogArticleView } from './pages/BlogArticleView';
import { ContactView } from './pages/ContactView';
import { FAQView } from './pages/FAQView';
import { LegalView } from './pages/LegalView';

const MainLayout: React.FC = () => {
  const { currentPage, isCinemaMode } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'about':
        return <AboutView />;
      case 'ai-tools':
        return <AIToolsView />;
      case 'tutorials':
        return <TutorialsView />;
      case 'tech-news':
        return <TechNewsView />;
      case 'youtube-tips':
        return <YouTubeTipsView />;
      case 'blog':
        return <BlogArticleView />;
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FAQView />;
      case 'privacy':
      case 'terms':
      case 'disclaimer':
        return <LegalView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#0D0D0D] text-slate-100 selection:bg-[#FF0000] selection:text-white ${
      isCinemaMode ? 'scale-[1.02] transform transition-transform duration-500 max-w-[1920px] mx-auto' : ''
    }`}>
      {/* Top Header */}
      <Header />

      {/* Main Page Content Body */}
      <main className="flex-1 pb-16 sm:pb-0">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Overlays and Modals */}
      <VideoPlayerModal />
      <AIChatbotModal />
      <AuthModal />
      <UserProfileModal />
      <AdminPanelModal />
      <SearchModal />
      <SubscribeModal />

      {/* Floating Utilities */}
      <FloatingActions />
      <CookieConsent />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
