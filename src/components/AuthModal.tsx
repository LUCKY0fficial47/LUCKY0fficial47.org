import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authModalTab, 
    setAuthModalTab, 
    loginUser, 
    language,
    showToast 
  } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [resetSent, setResetSent] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    if (authModalTab === 'forgot') {
      setResetSent(true);
      showToast('Password reset link sent to ' + email, 'info');
      return;
    }

    loginUser(email, name || undefined);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div 
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#141419] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsAuthModalOpen(false);
            setResetSent(false);
          }}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Title */}
        <div className="text-left mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {authModalTab === 'login' && (language === 'hi' ? 'लॉग इन करें' : 'Welcome Back')}
            {authModalTab === 'signup' && (language === 'hi' ? 'नया खाता बनाएं' : 'Create Free Account')}
            {authModalTab === 'forgot' && (language === 'hi' ? 'पासवर्ड रीसेट करें' : 'Reset Password')}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'hi'
              ? 'LUCKY tech TV पर अपने पसंदीदा AI टूल्स और वीडियो सेव करें'
              : 'Save favorite AI tools, watch-later videos, and unlock creator bookmarks'}
          </p>
        </div>

        {/* Tabs for Login / Signup */}
        {authModalTab !== 'forgot' && (
          <div className="flex rounded-xl bg-white/5 p-1 mb-6 border border-white/5">
            <button
              onClick={() => setAuthModalTab('login')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                authModalTab === 'login'
                  ? 'bg-[#00BFFF] text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'hi' ? 'लॉग इन' : 'Sign In'}
            </button>
            <button
              onClick={() => setAuthModalTab('signup')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                authModalTab === 'signup'
                  ? 'bg-[#00BFFF] text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'hi' ? 'साइन अप' : 'Sign Up'}
            </button>
          </div>
        )}

        {resetSent ? (
          <div className="py-6 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mx-auto">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white">Reset Link Dispatched</h3>
            <p className="text-xs text-slate-400">
              We have sent instructions to <strong className="text-white">{email}</strong>. Check your inbox to set a new password.
            </p>
            <button
              onClick={() => {
                setResetSent(false);
                setAuthModalTab('login');
              }}
              className="text-xs font-semibold text-[#00BFFF] hover:underline"
            >
              Return to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {authModalTab === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === 'hi' ? 'आपका नाम' : 'Full Name'}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                {language === 'hi' ? 'ईमेल एड्रेस' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#0E0E12] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:border-[#00BFFF] focus:outline-none"
                />
              </div>
            </div>

            {authModalTab !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    {language === 'hi' ? 'पासवर्ड' : 'Password'}
                  </label>
                  {authModalTab === 'login' && (
                    <button
                      type="button"
                      onClick={() => setAuthModalTab('forgot')}
                      className="text-[11px] text-[#00BFFF] hover:underline"
                    >
                      {language === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot password?'}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF0000] to-[#8A2BE2] text-xs sm:text-sm font-semibold text-white shadow-xl shadow-red-950/40 hover:opacity-95 transition-opacity"
            >
              {authModalTab === 'login' && (language === 'hi' ? 'लॉग इन करें' : 'Sign In')}
              {authModalTab === 'signup' && (language === 'hi' ? 'खाता बनाएं' : 'Create Free Account')}
              {authModalTab === 'forgot' && (language === 'hi' ? 'रीसेट लिंक भेजें' : 'Send Reset Link')}
            </button>
          </form>
        )}

        {authModalTab === 'forgot' && !resetSent && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setAuthModalTab('login')}
              className="text-xs text-slate-400 hover:text-white"
            >
              ← Back to Sign In
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
