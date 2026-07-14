import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsCarousel({ t }) {
  const data = t.contact?.testimonials || {};
  const items = data.items || [];
  const [current, setCurrent] = useState(0);

  if (!items.length) return null;

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
  const item = items[current];

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title || 'Lo que dicen nuestros estudiantes'}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>

      <div className="max-w-3xl mx-auto relative">
        <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm">
          <Quote className="w-10 h-10 text-primary/15 dark:text-secondary/15 mb-4" />
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed italic mb-6">
            &ldquo;{item.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary font-bold text-sm">
              {item.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-sm text-slate-text dark:text-white">{item.name}</p>
              <p className="text-[11px] text-primary dark:text-secondary">{item.career}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all text-slate-text dark:text-dark-text"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'bg-primary w-6'
                    : 'bg-primary/30 dark:bg-dark-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all text-slate-text dark:text-dark-text"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
