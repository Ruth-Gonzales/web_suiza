import { useState, useCallback } from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MediaGallery({ data, t }) {
  if (!data || !data.items) return null;
  const items = data.items;
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const open = useCallback((idx) => setLightboxIdx(idx), []);
  const close = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() => setLightboxIdx((i) => (i === 0 ? items.length - 1 : i - 1)), [items.length]);
  const next = useCallback(() => setLightboxIdx((i) => (i === items.length - 1 ? 0 : i + 1)), [items.length]);

  if (!items.length) return null;

  return (
    <section className="mb-16 scroll-mt-20" id="gallery">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => open(idx)}
            className={`group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer text-left ${
              idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.thumb} transition-transform duration-500 group-hover:scale-105`} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/25 dark:bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xs md:text-sm font-bold text-white leading-snug line-clamp-2">
                {item.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center mt-6">
        <button onClick={() => open(0)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 text-primary dark:text-secondary font-bold text-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
          {t?.news?.exploreGallery}
        </button>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            className="max-w-3xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-full aspect-video bg-gradient-to-br ${items[lightboxIdx].thumb} flex items-center justify-center`}>
              {items[lightboxIdx].type === 'video' ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  <p className="text-white/60 text-xs">{t?.news?.videoPreview}</p>
                </div>
              ) : (
                <span className="text-white/40 text-6xl">🖼️</span>
              )}
            </div>
            <div className="bg-white dark:bg-dark-card p-5">
              <h3 className="font-bold text-sm text-slate-text dark:text-white">
                {items[lightboxIdx].title}
              </h3>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-1">
                {items[lightboxIdx].desc}
              </p>
              <p className="text-[10px] text-slate-text/40 dark:text-dark-text/40 mt-3">
                {lightboxIdx + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
