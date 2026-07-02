import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({ t }) {
  const faq = t.contact?.faq || {};
  const items = faq.items || [];
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {faq.title || 'Preguntas Frecuentes'}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-8">
        {faq.subtitle}
      </p>

      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 shadow-sm transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-primary dark:text-secondary" />
                </div>
                <span className="flex-1 text-sm font-semibold text-slate-text dark:text-white">
                  {item.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-text/40 dark:text-dark-text/40 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 pb-4 text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed pl-16">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
