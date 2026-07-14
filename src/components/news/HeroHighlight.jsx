import { useRef, useEffect, useState } from 'react';
import { Calendar, Eye, Sparkles, Compass } from 'lucide-react';

export default function HeroHighlight({ item, onAction }) {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const handleScroll = () => {
          const rect = el.getBoundingClientRect();
          const speed = 0.15;
          setOffsetY((rect.top - window.innerHeight / 2) * speed);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!item) return null;

  return (
    <section ref={ref} className="mb-16 group">
      <div
        className="relative overflow-hidden rounded-[2.5rem] shadow-xl min-h-[340px] md:min-h-[460px] flex items-end"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${item.image} transition-transform duration-700 group-hover:scale-105`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 dark:bg-white/[0.03] rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/5 dark:bg-white/[0.02] rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 w-full p-6 md:p-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 dark:bg-white/[0.06] backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wider uppercase text-white">
              {item.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-white/70">
              <Calendar className="w-3 h-3" />
              {item.date}
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 max-w-3xl">
            {item.title}
          </h2>

          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 max-w-2xl line-clamp-2">
            {item.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onAction?.('discover')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-dark-surface text-primary dark:text-white font-bold text-sm hover:bg-white/90 dark:hover:bg-dark-card hover:-translate-y-0.5 transition-all shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Descubrir Historia
            </button>
            <button
              onClick={() => onAction?.('details')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 dark:bg-white/[0.05] backdrop-blur-md border border-white/25 text-white font-bold text-sm hover:bg-white/25 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              Ver Detalles
            </button>
            <button
              onClick={() => onAction?.('explore')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 dark:bg-white/[0.05] backdrop-blur-md border border-white/25 text-white font-bold text-sm hover:bg-white/25 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              Conocer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
