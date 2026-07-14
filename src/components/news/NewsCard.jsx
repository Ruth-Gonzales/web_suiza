import { Calendar, Tag } from 'lucide-react';

export default function NewsCard({ item, onReadMore, index }) {
  return (
    <div
      onClick={onReadMore}
      className="group rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(75,122,244,0.06)] dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left cursor-pointer"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
      <div className={`relative w-full h-48 bg-gradient-to-br ${item.image} p-6 flex flex-col justify-between text-white`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 dark:bg-white/[0.06] backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wider uppercase self-start">
          <Tag className="w-3 h-3" />
          <span>{item.tag}</span>
        </span>
        <div className="absolute right-5 bottom-4 opacity-10">
          <span className="text-3xl font-extrabold tracking-tighter">SUIZA</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-white/80">
          <Calendar className="w-3.5 h-3.5" />
          {item.date}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-text dark:text-white mb-2 leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed mb-5 line-clamp-3">
            {item.desc}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-secondary bg-primary/5 dark:bg-primary/10 px-3.5 py-1.5 rounded-xl">
          <span>🚀 Descubrir</span>
        </span>
      </div>
    </div>
  );
}
