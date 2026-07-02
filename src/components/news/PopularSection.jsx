import { Eye, TrendingUp } from 'lucide-react';

const typeIcons = {
  news: '📰',
  achievement: '🏆',
  event: '🎉',
  opportunity: '🚀',
};

export default function PopularSection({ data, onCardClick }) {
  if (!data || !data.items) return null;
  const items = data.items;

  return (
    <section className="mb-16">
      <h2 className="text-xl md:text-2xl font-bold text-slate-text dark:text-white mb-6 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary dark:text-secondary" />
        {data.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onCardClick?.(item)}
            className="group relative rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer"
          >
            <div className={`h-24 bg-gradient-to-br ${item.image} p-3 flex items-start justify-between`}>
              <span className="text-xl">{typeIcons[item.type] || '📌'}</span>
              <span className="inline-flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-lg">
                <Eye className="w-2.5 h-2.5" />
                {item.views.toLocaleString()}
              </span>
            </div>

            <div className="p-3">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[9px] font-bold text-primary dark:text-secondary uppercase tracking-wider">
                  {item.tag}
                </span>
                {idx === 0 && (
                  <span className="text-[9px] font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-md">
                    #1
                  </span>
                )}
              </div>
              <h3 className="text-xs font-bold text-slate-text dark:text-white leading-snug line-clamp-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
