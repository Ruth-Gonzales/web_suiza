import { Clock } from 'lucide-react';

export default function OpportunitySection({ data }) {
  if (!data || !data.items) return null;
  const items = data.items;

  return (
    <section className="mb-16 scroll-mt-20" id="opportunities">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`h-28 bg-gradient-to-br ${item.image} p-5 flex items-end relative`}>
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 dark:bg-white/[0.06] backdrop-blur-md rounded-lg px-2.5 py-1 text-white text-[9px] font-bold">
                <Clock className="w-3 h-3" />
                <span>{item.deadline}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-text dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed mb-4 line-clamp-2">
                {item.desc}
              </p>
              <button className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary dark:text-secondary bg-primary/5 dark:bg-primary/10 px-3.5 py-1.5 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all cursor-pointer">
                <span>🚀 Explorar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
