import { Quote, Briefcase, GraduationCap, Trophy } from 'lucide-react';

export default function SuccessStories({ data, onCardClick }) {
  if (!data || !data.items) return null;
  const items = data.items;

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onCardClick?.(item)}
            className="group relative rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className={`h-28 bg-gradient-to-br ${item.image} relative`}>
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="px-6 pb-6 -mt-10 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-extrabold shadow-lg border-4 border-white dark:border-dark-card mb-4">
                {item.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>

              <h3 className="text-lg font-bold text-slate-text dark:text-white mb-1">
                {item.name}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-text/60 dark:text-dark-text/60 mb-3">
                <span className="inline-flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-primary dark:text-secondary" />
                  {item.career}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-primary dark:text-secondary" />
                  {item.company}
                </span>
              </div>

              <div className="relative pl-5 border-l-2 border-primary/20 dark:border-primary/30 mb-4">
                <Quote className="absolute -top-1 -left-2 w-4 h-4 text-primary/30 dark:text-secondary/30" />
                <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed italic">
                  &ldquo;{item.story}&rdquo;
                </p>
              </div>

              <button onClick={(e) => { e.stopPropagation(); onCardClick?.(item); }} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold text-[11px] hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all cursor-pointer">
                <Trophy className="w-4 h-4" />
                Conocer su Historia
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
