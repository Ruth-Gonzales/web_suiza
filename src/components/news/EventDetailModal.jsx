import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, Calendar, Tag, Heart, MapPin, Clock, Users, Target, Briefcase, Play, ExternalLink } from 'lucide-react';

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-light/60 dark:bg-dark-border/20 border border-primary/5 dark:border-white/5">
    <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold text-slate-text/50 dark:text-dark-text/50 uppercase tracking-wider">{label}</p>
      <p className="text-xs font-bold text-slate-text dark:text-white truncate">{value}</p>
    </div>
  </div>
);

const StatBadge = ({ icon, value, label }) => (
  <div className="text-center p-3 rounded-xl bg-primary/5 dark:bg-primary/10">
    <p className="text-lg md:text-xl font-extrabold text-primary dark:text-secondary">{value}</p>
    <p className="text-[9px] font-semibold text-slate-text/60 dark:text-dark-text/60 mt-0.5 uppercase tracking-wider">{label}</p>
  </div>
);

export default function EventDetailModal({ item, onClose, allItems }) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [liked, setLiked] = useState(false);

  const eventGallery = item.gallery || [];
  const eventAgenda = item.agenda || [];
  const eventStats = item.stats || [];
  const eventTestimonials = item.testimonials || [];
  const eventVideos = item.videos || [];
  const eventBenefits = item.benefits || [];
  const eventRelated = item.relatedEvents || [];
  const eventLoc = item.locationDetail;

  if (!item) return null;

  const fallbackGallery = [
    item.image,
    'from-indigo-400 via-primary to-secondary',
    'from-violet-400 to-purple-500',
    'from-emerald-400 to-teal-500',
  ];

  const galleryImages = eventGallery.length > 0
    ? eventGallery.map((g) => g.thumb)
    : fallbackGallery;

  const prevGal = useCallback(() => setGalleryIdx((i) => (i === 0 ? galleryImages.length - 1 : i - 1)), [galleryImages.length]);
  const nextGal = useCallback(() => setGalleryIdx((i) => (i === galleryImages.length - 1 ? 0 : i + 1)), [galleryImages.length]);

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-0 bg-black/70 backdrop-blur-sm overflow-y-auto overscroll-contain" onClick={onClose}>
      <div
        className="w-full max-w-4xl my-4 md:my-8 mx-3 md:mx-6 rounded-[2rem] bg-white dark:bg-dark-card shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ===== COVER IMAGE ===== */}
        <div className="relative group">
          <div className={`h-56 md:h-80 bg-gradient-to-br ${galleryImages[galleryIdx]} flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <span className="text-white/15 text-7xl select-none">
              {galleryIdx === 0 ? '📰' : '🖼️'}
            </span>

            {galleryImages.length > 1 && (
              <>
                <button onClick={prevGal} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 dark:bg-white/[0.05] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextGal} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 dark:bg-white/[0.05] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <span className="absolute bottom-4 right-4 bg-black/40 text-white text-[10px] px-2.5 py-1 rounded-lg font-semibold z-10">
              {galleryIdx + 1} / {galleryImages.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-all cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="p-6 md:p-8 lg:p-10">
          {/* Tag + Date */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary text-[10px] font-bold uppercase">
              <Tag className="w-3 h-3" />
              {item.tag || item.categoryId || 'Noticia'}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-text/50 dark:text-dark-text/50">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-text dark:text-white mb-6 leading-tight">
            {item.title}
          </h2>

          {/* ===== INFO CARDS GRID ===== */}
          {(item.time || item.location || item.organizer || item.audience) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {item.date && <InfoCard icon={<Calendar className="w-4 h-4 text-primary dark:text-secondary" />} label="Fecha" value={item.date} />}
              {item.time && <InfoCard icon={<Clock className="w-4 h-4 text-primary dark:text-secondary" />} label="Hora" value={item.time} />}
              {item.location && <InfoCard icon={<MapPin className="w-4 h-4 text-primary dark:text-secondary" />} label="Lugar" value={item.location} />}
              {item.organizer && <InfoCard icon={<Briefcase className="w-4 h-4 text-primary dark:text-secondary" />} label="Organizador" value={item.organizer} />}
              {item.audience && <InfoCard icon={<Users className="w-4 h-4 text-primary dark:text-secondary" />} label="Público" value={item.audience} />}
              {item.objective && <InfoCard icon={<Target className="w-4 h-4 text-primary dark:text-secondary" />} label="Objetivo" value={item.objective} />}
            </div>
          )}

          {/* ===== DESCRIPTION ===== */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Descripción</h3>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{item.desc}</p>
          </div>

          {/* ===== BENEFITS ===== */}
          {eventBenefits.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Beneficios de asistir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {eventBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-200/30 dark:border-emerald-500/10">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                    <span className="text-xs text-slate-text/70 dark:text-dark-text/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== AGENDA TIMELINE ===== */}
          {eventAgenda.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-4 uppercase tracking-wider">Agenda del Evento</h3>
              <div className="relative pl-8 space-y-0">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 rounded-full" />
                {eventAgenda.map((a, i) => (
                  <div key={i} className="relative pb-6 last:pb-0 group">
                    <div className={`absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-all ${
                      i === 0
                        ? 'bg-primary border-primary shadow-md shadow-primary/30'
                        : 'bg-white dark:bg-dark-card border-primary/40 group-hover:border-primary group-hover:bg-primary/10'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white dark:bg-white' : 'bg-primary/40 group-hover:bg-primary'}`} />
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 text-[11px] font-bold text-primary dark:text-secondary w-12 pt-0.5">{a.time}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-text dark:text-white">{a.title}</p>
                        {a.desc && <p className="text-[11px] text-slate-text/60 dark:text-dark-text/60 mt-0.5">{a.desc}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== LOCATION ===== */}
          {eventLoc && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Ubicación</h3>
              <div className="rounded-2xl bg-slate-light/60 dark:bg-dark-border/20 border border-primary/5 dark:border-white/5 p-5">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary dark:text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-text dark:text-white">{eventLoc.address}</p>
                    {eventLoc.reference && <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50 mt-0.5">{eventLoc.reference}</p>}
                  </div>
                </div>
                <div className="h-32 md:h-36 rounded-xl bg-gradient-to-br from-sky-100 to-primary/10 dark:from-dark-border dark:to-primary/5 flex items-center justify-center border border-primary/5 dark:border-white/5">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary/40 dark:text-secondary/40 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-text/40 dark:text-dark-text/40">Mapa interactivo</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-[11px] font-bold hover:bg-primary-dark transition-all cursor-pointer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Cómo llegar
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-light dark:bg-dark-border/40 text-slate-text dark:text-dark-text text-[11px] font-bold hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all cursor-pointer">
                    <MapPin className="w-3.5 h-3.5" />
                    Abrir en Google Maps
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ===== GALLERY ===== */}
          {eventGallery.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Galería</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {eventGallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIdx(i)}
                    className={`group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${g.thumb} transition-transform group-hover:scale-105`} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                      <p className="text-[10px] font-bold text-white truncate">{g.title}</p>
                      {g.date && <p className="text-[8px] text-white/70">{g.date}</p>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ===== VIDEOS ===== */}
          {eventVideos.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">🎥 Videos del Evento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventVideos.map((v, i) => (
                  <div key={i} className="group rounded-xl overflow-hidden bg-slate-light/60 dark:bg-dark-border/20 border border-primary/5 dark:border-white/5 cursor-pointer">
                    <div className={`relative h-28 bg-gradient-to-br ${v.thumb} flex items-center justify-center`}>
                      <div className="w-12 h-12 rounded-full bg-white/20 dark:bg-white/[0.06] backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">{v.duration}</span>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-bold text-slate-text dark:text-white">{v.title}</p>
                      {v.desc && <p className="text-[10px] text-slate-text/60 dark:text-dark-text/60 mt-0.5 line-clamp-1">{v.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== STATISTICS ===== */}
          {eventStats.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Estadísticas del Evento</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {eventStats.map((s, i) => (
                  <StatBadge key={i} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          )}

          {/* ===== TESTIMONIALS ===== */}
          {eventTestimonials.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Testimonios</h3>
              <div className="space-y-3">
                {eventTestimonials.map((t, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-light/60 dark:bg-dark-border/20 border border-primary/5 dark:border-white/5">
                    <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed italic mb-3">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary text-[10px] font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-text dark:text-white">{t.name}</p>
                        {t.role && <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{t.role}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== RELATED EVENTS ===== */}
          {eventRelated.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">🚀 También te puede interesar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eventRelated.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/20 border border-primary/5 dark:border-white/5 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${r.image} shrink-0`} />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-text dark:text-white leading-snug line-clamp-2">{r.title}</p>
                      <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50 mt-0.5">{r.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== ACTIONS ===== */}
          <div className="flex items-center gap-3 pt-5 border-t border-primary/10 dark:border-white/8">
            <button
              onClick={() => setLiked(!liked)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                liked
                  ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-500'
                  : 'bg-slate-light/60 dark:bg-dark-border/30 text-slate-text/60 dark:text-dark-text/60 hover:text-rose-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500' : ''}`} />
              {liked ? 'Te gusta' : 'Me gusta'}
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 text-slate-text/60 dark:text-dark-text/60 hover:text-primary dark:hover:text-secondary font-bold text-xs transition-all cursor-pointer">
              <Share2 className="w-4 h-4" />
              Compartir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
