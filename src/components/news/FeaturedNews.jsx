import { Calendar, ArrowRight } from 'lucide-react';

export default function FeaturedNews({ item, onReadMore }) {
  if (!item) return null;

  return (
    <section className="mb-16">
      <div
        className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${item.image} p-8 md:p-12 shadow-lg min-h-[320px] md:min-h-[400px] flex items-end`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 dark:bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 dark:bg-white/[0.03] rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 dark:bg-white/[0.06] backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wider uppercase text-white mb-4">
            {item.category}
          </span>

          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">
            {item.title}
          </h2>

          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-5 line-clamp-3">
            {item.desc}
          </p>

          <div className="flex items-center flex-wrap gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
            <button
              onClick={onReadMore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-dark-surface text-primary dark:text-white font-bold text-sm hover:bg-white/90 dark:hover:bg-dark-card transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Leer más
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
