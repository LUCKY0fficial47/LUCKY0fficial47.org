import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Check, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const { language, setCurrentPage } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lucky_tech_tv_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lucky_tech_tv_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('lucky_tech_tv_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-sm rounded-2xl border border-white/10 bg-[#16161D]/95 backdrop-blur-xl p-4 shadow-2xl text-left">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00BFFF]/10 text-[#00BFFF] shrink-0 mt-0.5">
          <Shield className="h-4 w-4" />
        </div>
        <div className="space-y-1 text-xs">
          <h4 className="font-bold text-white">
            {language === 'hi' ? 'गोपनीयता व कुकीज़' : 'Privacy & Cookie Preferences'}
          </h4>
          <p className="text-slate-400 leading-relaxed">
            {language === 'hi'
              ? 'हम आपके अनुभव और वीडियो प्राथमिकताओं को सुरक्षित रखने के लिए कुकीज़ का उपयोग करते हैं।'
              : 'We use essential cookies to maintain your saved bookmarks, watch later lists, and language preferences.'}
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 rounded-lg bg-[#00BFFF] text-black font-bold text-[11px] hover:bg-sky-400 transition-colors"
            >
              {language === 'hi' ? 'स्वीकार करें' : 'Accept All'}
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-[11px] hover:bg-white/10 transition-colors"
            >
              {language === 'hi' ? 'अस्वीकार' : 'Essential Only'}
            </button>
            <button
              onClick={() => setCurrentPage('privacy')}
              className="text-[11px] text-slate-400 hover:text-white underline ml-1"
            >
              Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
