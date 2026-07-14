import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Tag, Sparkles } from 'lucide-react';

export default function NewsCarousel({ title, items, icon, onCardClick }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener('scroll', updateArrows);
  }, [items]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  if (!items || !items.length) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-slate-text dark:text-white flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all text-slate-text dark:text-dark-text cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all text-slate-text dark:text-dark-text cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 pb-2"
      >
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onCardClick?.(item)}
            className="group shrink-0 w-[260px] md:w-[300px] snap-start rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] text-left cursor-pointer"
          >
            <div className={`relative h-36 bg-gradient-to-br ${item.image} p-4 overflow-hidden`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <span className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-full bg-white/20 dark:bg-white/[0.06] backdrop-blur-md border border-white/20 text-[9px] font-bold text-white uppercase">
                  <Tag className="w-2.5 h-2.5" />
                  {item.tag || item.categoryId || 'Noticia'}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-white/80">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-slate-text dark:text-white leading-snug line-clamp-2 mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-text/60 dark:text-dark-text/60 leading-relaxed line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary dark:text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                <Sparkles className="w-3 h-3" />
                Descubrir
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
