import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Youtube, 
  Globe, 
  Sparkles,
  Phone
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { language, showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Brand Sponsorship / AI Tool Review');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message.trim()) {
      showToast('Please fill all required fields', 'error');
      return;
    }
    setSubmitted(true);
    showToast(
      language === 'hi'
        ? 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।'
        : 'Message delivered! The LUCKY tech TV team will respond within 24 hours.'
    );
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi LUCKY tech TV, I'd like to collaborate regarding: ${subject}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00BFFF]">
            <Mail className="h-4 w-4" />
            <span>{language === 'hi' ? 'संपर्क व कोलैबोरेशन' : 'Contact & Sponsorships'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? 'LUCKY tech TV टीम से संपर्क करें'
              : 'Connect with the Official Production Studio'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'ब्रांड स्पॉन्सरशिप, AI टूल रिव्यूज, या तकनीकी प्रश्नों के लिए नीचे दिए गए फॉर्म, ईमेल या व्हाट्सएप के जरिए हमसे जुड़ें।'
              : 'Whether you want to sponsor a YouTube masterclass, request an in-depth AI tool review, or ask a question, our inbox is open.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#141419] shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You for Connecting!</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  We have received your message regarding <strong className="text-white">{subject}</strong>. Our communications desk will reach out to <strong className="text-white">{email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-white mb-2">
                  {language === 'hi' ? 'संदेश भेजें' : 'Send an Official Inquiry'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'hi' ? 'आपका नाम' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vicky Kumar"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-[#00BFFF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === 'hi' ? 'ईमेल एड्रेस' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vicky@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-[#00BFFF] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'hi' ? 'पूछताछ का विषय' : 'Inquiry Category / Topic'}
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] px-4 py-2.5 text-xs text-white focus:border-[#00BFFF] focus:outline-none"
                  >
                    <option value="Brand Sponsorship / Dedicated Video">Brand Sponsorship / Dedicated Video</option>
                    <option value="AI Tool Feature Request">AI Tool Feature Request</option>
                    <option value="Content Consultation & Mentorship">Content Consultation & Mentorship</option>
                    <option value="General Tech Feedback">General Tech Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {language === 'hi' ? 'संदेश' : 'Your Message / Project Scope'}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'hi'
                        ? 'अपने प्रोजेक्ट, चैनल या टूल के बारे में विवरण लिखें...'
                        : 'Describe your proposal, deliverable timeline, or question in detail...'
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#0E0E12] p-4 text-xs text-white placeholder-slate-600 focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00BFFF] text-xs font-bold text-black hover:bg-sky-400 transition-colors shadow-lg shadow-sky-950/40"
                  >
                    <Send className="h-4 w-4" />
                    <span>{language === 'hi' ? 'संदेश प्रेषित करें' : 'Submit Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-xs font-bold text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Google Maps Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#141419] space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication Channels</h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <Mail className="h-4 w-4 text-[#00BFFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-300 block">Official Support Email</span>
                    <a
                      href="mailto:lucky0fficial47.org@gmail.com"
                      className="text-[#00BFFF] hover:underline"
                    >
                      lucky0fficial47.org@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <Youtube className="h-4 w-4 text-[#FF0000] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-300 block">Official YouTube Hub</span>
                    <span className="text-slate-400">@LUCKYtechTV (250K+ Subscribers)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <MapPin className="h-4 w-4 text-[#FFD700] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-300 block">Production Studio Hub</span>
                    <span className="text-slate-400">Cyber City Digital Hub, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Interactive Simulation */}
            <div className="rounded-2xl border border-white/10 bg-[#141419] overflow-hidden">
              <div className="p-3.5 border-b border-white/5 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Studio Location</span>
                <span className="text-[11px] text-slate-400">Global Tech Hub</span>
              </div>
              <div className="relative aspect-video w-full bg-slate-900">
                <iframe
                  title="Studio Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.7981504938!2d77.01633519897147!3d28.45949652570077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sCyber%20City%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 brightness-75"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
