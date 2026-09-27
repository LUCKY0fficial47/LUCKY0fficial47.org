import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQView: React.FC = () => {
  const { faqs, language } = useApp();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFD700]">
            <HelpCircle className="h-4 w-4" />
            <span>{language === 'hi' ? 'सामान्य प्रश्नोत्तर' : 'Frequently Asked Questions'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Got Questions? We Have Answers.'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'LUCKY tech TV, हमारे AI वीडियो टूल्स, यूट्यूब टिप्स और कम्युनिटी से जुड़े मुख्य सवालों के जवाब।'
              : 'Everything you need to know about our workflows, free tools, channel growth benchmarks, and sponsorship collaborations.'}
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map(faq => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-[#141419] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white pr-4">
                    {language === 'hi' ? faq.question.hi : faq.question.en}
                  </span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#00BFFF]' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {language === 'hi' ? faq.answer.hi : faq.answer.en}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#141419] to-[#181822] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-sm">Still have an unanswered question?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Ask our live AI Assistant or email our communications desk.</p>
          </div>
          <a
            href="mailto:lucky0fficial47.org@gmail.com"
            className="px-5 py-2.5 rounded-xl bg-[#00BFFF] text-xs font-bold text-black hover:bg-sky-400 transition-colors whitespace-nowrap"
          >
            Email Support
          </a>
        </div>

      </div>
    </div>
  );
};
