import { Clock, MapPin } from 'lucide-react';

export default function UpcomingEvents({ data, onCardClick }) {
  if (!data || !data.items) return null;
  const items = data.items;

  return (
    <section className="mb-16 scroll-mt-20" id="upcoming">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>

      <div className="bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="divide-y divide-primary/5 dark:divide-dark-border/30">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onCardClick?.(item)}
              className="flex items-center gap-4 p-4 md:p-5 hover:bg-slate-light/50 dark:hover:bg-dark-hover/20 transition-colors group cursor-pointer"
            >
              <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex flex-col items-center justify-center text-center group-hover:bg-primary dark:group-hover:bg-secondary transition-colors">
                <span className="text-lg md:text-xl font-extrabold text-primary dark:text-secondary group-hover:text-white transition-colors leading-none">
                  {item.date}
                </span>
                <span className="text-[9px] font-bold text-primary/70 dark:text-secondary/70 group-hover:text-white/80 transition-colors uppercase tracking-wider">
                  {item.month}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors truncate">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-text/50 dark:text-dark-text/50">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); onCardClick?.(item); }} className="shrink-0 text-[9px] font-bold text-primary dark:text-secondary bg-primary/5 dark:bg-primary/10 px-2.5 py-1 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
                🎉
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
