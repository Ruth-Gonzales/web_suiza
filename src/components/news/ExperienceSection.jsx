import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Play } from 'lucide-react';

const typeConfig = {
  graduacion: { icon: '🎓', gradient: 'from-amber-500 to-yellow-600' },
  concurso: { icon: '🏆', gradient: 'from-violet-500 to-purple-600' },
  semana: { icon: '🎉', gradient: 'from-blue-500 to-cyan-600' },
  deportes: { icon: '⚽', gradient: 'from-green-500 to-lime-600' },
  cultura: { icon: '🎭', gradient: 'from-pink-500 to-rose-600' },
};

export default function ExperienceSection({ data }) {
  if (!data || !data.items) return null;
  const items = data.items;
  const [modal, setModal] = useState(null);

  const openModal = (item) => setModal(item);
  const closeModal = () => setModal(null);

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => {
          const cfg = typeConfig[item.type] || { icon: '📌', gradient: 'from-primary to-secondary' };
          return (
            <button
              key={idx}
              onClick={() => openModal(item)}
              className="group relative rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-br ${cfg.gradient} p-5 flex items-end relative`}>
                <span className="text-4xl">{cfg.icon}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[10px] text-primary dark:text-secondary font-semibold mb-1.5">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="font-bold text-sm text-slate-text dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Modal */}
      {modal && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center p-0 bg-black/70 backdrop-blur-sm overflow-y-auto" onClick={closeModal}>
          <div
            className="w-full max-w-2xl my-4 md:my-8 mx-3 md:mx-6 rounded-[2rem] bg-white dark:bg-dark-card shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-48 md:h-56 bg-gradient-to-br ${typeConfig[modal.type]?.gradient || 'from-primary to-secondary'} flex items-center justify-center relative`}>
              <span className="text-7xl">{typeConfig[modal.type]?.icon || '📌'}</span>
              <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-[10px] text-primary dark:text-secondary font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                {modal.date}
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-text dark:text-white mb-4 leading-tight">
                {modal.title}
              </h2>
              <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed mb-6">
                {modal.desc}
              </p>

              {/* Stats */}
              {modal.stats && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {modal.stats.map((s, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-primary/5 dark:bg-primary/10">
                      <p className="text-lg font-extrabold text-primary dark:text-secondary">{s.value}</p>
                      <p className="text-[9px] font-semibold text-slate-text/60 dark:text-dark-text/60 uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery */}
              {modal.gallery && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Fotografías</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {modal.gallery.map((g, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${g.thumb}`} />
                        <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/50 to-transparent">
                          <p className="text-[8px] font-bold text-white truncate">{g.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {modal.testimonial && (
                <div className="p-4 rounded-xl bg-slate-light/60 dark:bg-dark-hover/20 border border-primary/5 dark:border-white/5">
                  <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed italic">
                    &ldquo;{modal.testimonial}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
