import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

export const LegalView: React.FC = () => {
  const { currentPage, language, setCurrentPage } = useApp();

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Tabs for Legal */}
        <div className="flex border-b border-white/10 pb-2 gap-4">
          <button
            onClick={() => setCurrentPage('privacy')}
            className={`pb-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              currentPage === 'privacy'
                ? 'border-[#00BFFF] text-[#00BFFF]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setCurrentPage('terms')}
            className={`pb-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              currentPage === 'terms'
                ? 'border-[#00BFFF] text-[#00BFFF]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setCurrentPage('disclaimer')}
            className={`pb-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              currentPage === 'disclaimer'
                ? 'border-[#00BFFF] text-[#00BFFF]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Disclaimer
          </button>
        </div>

        {/* Privacy Policy */}
        {currentPage === 'privacy' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-slate-400">Last updated: September 2026</p>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
              <p>
                LUCKY tech TV Official ("we", "us", or "our") respects your privacy. We collect minimal personal information strictly necessary to provide user features, such as your email address when subscribing to the newsletter or creating an optional creator profile to save favorite AI tools and bookmarks.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Cookies and Local Storage</h2>
              <p>
                We use browser localStorage to maintain your saved bookmarks, watch later video preferences, and language selection (Hindi / English). No third-party behavioral advertising trackers are injected into your browsing experience.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Third-Party Embedded Players</h2>
              <p>
                Our video guides are embedded via YouTube's official privacy-enhanced mode (youtube-nocookie.com). Interacting with the video player is governed by Google and YouTube's privacy policy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Contact & Inquiries</h2>
              <p>
                For any privacy questions or data deletion requests, contact our compliance officer at: <strong className="text-white">lucky0fficial47.org@gmail.com</strong>.
              </p>
            </section>
          </div>
        )}

        {/* Terms & Conditions */}
        {currentPage === 'terms' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Terms & Conditions</h1>
            <p className="text-slate-400">Last updated: September 2026</p>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using LUCKY tech TV Official, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please discontinue use of the site immediately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Educational & Informational Content</h2>
              <p>
                All tutorials, prompt templates, code snippets, and YouTube growth blueprints provided on this platform are for educational and instructional purposes. Third-party AI tools (e.g. Midjourney, Runway, ElevenLabs) are owned by their respective companies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
              <p>
                The branding, logos, video content, and original editorial articles of LUCKY tech TV Official are protected by applicable intellectual property and copyright laws. Unauthorized reproduction or mirroring without attribution is strictly prohibited.
              </p>
            </section>
          </div>
        )}

        {/* Disclaimer */}
        {currentPage === 'disclaimer' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Disclaimer</h1>
            <p className="text-slate-400">Last updated: September 2026</p>

            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <span>
                All tech demonstrations, developer settings, USSD codes, and AI software benchmarks are tested by our team; however, individual hardware configurations and software updates may vary. Always backup your devices before modifying developer options.
              </span>
            </div>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Earnings & Results Disclaimer</h2>
              <p>
                Any revenue estimations, YouTube CTR benchmarks, or subscriber growth projections mentioned on this platform or via our revenue calculator are illustrative estimates only. We cannot guarantee specific monetary or algorithmic outcomes for your individual channel.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Affiliate and Sponsorship Disclosure</h2>
              <p>
                Certain AI software platforms, hardware products, or services reviewed by LUCKY tech TV Official may contain affiliate partnerships or sponsored video collaborations. We maintain full editorial honesty and only recommend tools tested and proven by our production team.
              </p>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
