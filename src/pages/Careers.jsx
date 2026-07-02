import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Code, Heart, Truck, Sprout, Trees, Calculator,
  Briefcase, HardHat, Bolt, Compass, FolderClosed,
  ChevronDown, ChevronUp, Star, GraduationCap, BookOpen, Clock, CheckCircle2, Sparkles, ArrowLeft
} from 'lucide-react';

const categoryColors = {
  tech: { hex: '#4B7AF4' },
  business: { hex: '#F59E0B' },
  field: { hex: '#10B981' },
};

const careerIcons = {
  sys: Code, enfer: Heart, meca: Truck, agro: Sprout,
  forest: Trees, cont: Calculator, admin: Briefcase,
  civil: HardHat, elec: Bolt, tur: Compass, asist: FolderClosed,
};

function Stars({ rate }) {
  const filled = Math.round(rate / 20);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 transition-all duration-300 ${i <= filled ? 'text-amber-400 fill-amber-400 drop-shadow-sm' : 'text-slate-text/20 dark:text-dark-text/20'}`}
        />
      ))}
    </div>
  );
}

function ModuleTimeline() {
  const modules = [
    { num: 'I', title: 'Fundamentos y Soporte Técnico Operativo', sem: '1 y 2' },
    { num: 'II', title: 'Desarrollo de Soluciones y Procesos Especializados', sem: '3 y 4' },
    { num: 'III', title: 'Gestión Estratégica e Innovación Tecnológica', sem: '5 y 6' },
  ];

  return (
    <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-secondary/50">
      {modules.map((m, idx) => (
        <div key={idx} className="relative pb-5 last:pb-0 group/module">
          <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-white dark:bg-dark-surface border-2 border-primary flex items-center justify-center text-[10px] font-extrabold text-primary group-hover/module:scale-110 transition-transform">
            {m.num}
          </div>
          <p className="text-[11px] font-bold text-slate-text dark:text-white leading-snug">{m.title}</p>
          <span className="text-[9px] text-primary font-semibold tracking-wider">Semestre {m.sem}</span>
        </div>
      ))}
    </div>
  );
}

export default function Careers({ t }) {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCareer, setExpandedCareer] = useState(null);
  const [showLearn, setShowLearn] = useState(false);
  const learnRef = useRef(null);
  const { careerId } = useParams();
  const navigate = useNavigate();

  // Find specific career if careerId is provided
  const selectedCareer = careerId ? t.careers.items.find(c => c.id === careerId) : null;

  const filteredCareers = selectedCareer 
    ? [selectedCareer]
    : activeTab === 'all'
      ? t.careers.items
      : t.careers.items.filter(c => c.category === activeTab);

  const toggleExpand = (id) => {
    setExpandedCareer(expandedCareer === id ? null : id);
  };

  useEffect(() => {
    setShowLearn(!!selectedCareer);
  }, [selectedCareer]);

  const tabs = [
    { id: 'all', label: t.careers.categories.all, hex: '#4B7AF4' },
    { id: 'tech', label: t.careers.categories.tech, hex: '#4B7AF4' },
    { id: 'business', label: t.careers.categories.business, hex: '#F59E0B' },
    { id: 'field', label: t.careers.categories.field, hex: '#10B981' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">

      {/* Background depth layers */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      {/* Floating geometric accents */}
      <div className="absolute top-60 right-1/4 w-4 h-4 border-2 border-primary/20 rounded-full animate-float pointer-events-none" />
      <div className="absolute top-32 left-1/4 w-3 h-3 bg-primary/10 rotate-45 animate-float-delayed pointer-events-none" />
      <div className="absolute bottom-60 right-1/3 w-5 h-5 border border-emerald-500/20 rounded-full animate-float-slow pointer-events-none" />

      {/* Back Button - Show when viewing specific career */}
      {selectedCareer && (
        <button
          onClick={() => navigate('/careers')}
          className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-primary hover:text-primary-dark dark:text-secondary dark:hover:text-white hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a todos los programas
        </button>
      )}

      {/* Hero Section - detailed for selected career */}
      {selectedCareer && (
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch rounded-2xl overflow-hidden shadow-lg">
            {/* Left dark panel */}
            <div className="bg-slate-900 dark:bg-black/80 text-white p-10 flex flex-col justify-center">
              <div className="max-w-xl">
                <span className="inline-block w-12 h-1.5 bg-primary rounded-full mb-6" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">{selectedCareer.name}</h1>
                <p className="text-sm md:text-base text-slate-200/80 mb-6">{selectedCareer.desc}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={`/careers`} className="px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-sm font-semibold hover:bg-white/20 transition">Volver</Link>
                  <button
                    onClick={() => {
                      setShowLearn(prev => !prev);
                      if (!showLearn) {
                        setTimeout(() => learnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
                      }
                    }}
                    className="px-5 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition flex items-center gap-2"
                  >
                    ¿Qué aprenderás?
                    <ChevronDown className={`w-4 h-4 transition-transform ${showLearn ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="w-full h-80 lg:h-auto relative bg-slate-200 dark:bg-dark-card">
              <img
                src={`/careers/${selectedCareer.id}.jpg`}
                alt={selectedCareer.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Info tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white dark:bg-dark-card rounded-2xl border border-primary/10 dark:border-white/10 shadow-sm">
              <div className="text-xs font-bold text-slate-text/70 dark:text-dark-text/70 uppercase mb-1">Duración</div>
              <div className="text-lg font-extrabold text-slate-text dark:text-white">{t.careers.duration || '3 Años'}</div>
            </div>
            <div className="p-4 bg-white dark:bg-dark-card rounded-2xl border border-primary/10 dark:border-white/10 shadow-sm">
              <div className="text-xs font-bold text-slate-text/70 dark:text-dark-text/70 uppercase mb-1">Empleabilidad</div>
              <div className="text-lg font-extrabold text-primary">{selectedCareer.employabilityRate}%</div>
            </div>
            <div className="p-4 bg-white dark:bg-dark-card rounded-2xl border border-primary/10 dark:border-white/10 shadow-sm">
              <div className="text-xs font-bold text-slate-text/70 dark:text-dark-text/70 uppercase mb-1">Categoría</div>
              <div className="text-lg font-extrabold text-slate-text dark:text-white">{selectedCareer.category === 'tech' ? 'Tecnología' : selectedCareer.category === 'business' ? 'Gestión y Servicios' : 'Ingeniería y Campo'}</div>
            </div>
          </div>
          {/* Learn / Curriculum anchor */}
          <div ref={learnRef} id="curriculum" className="mt-8">
            {showLearn && (
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-primary/10 dark:border-white/10 shadow-sm mb-6">
                <h3 className="text-xl font-bold text-slate-text dark:text-white mb-4">¿Qué aprenderás?</h3>
                <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-4">{selectedCareer.learn || selectedCareer.desc}</p>

                <div className="space-y-3 career-accordion">
                  {(selectedCareer.learningPoints || []).map((point, i) => (
                    <details key={i} className="rounded-lg" open={false}>
                      <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{i+1}</span>
                          <span className="font-medium">{point}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-text/60 chev" />
                      </summary>
                      <div className="detail-body">{selectedCareer.learn || ''}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-primary/10 dark:border-white/10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-text dark:text-white mb-4">Estructura curricular</h3>
              <ModuleTimeline />
            </div>

            {/* Tagline / frase sobre la carrera */}
            {selectedCareer && selectedCareer.tagline && (
              <div className="mt-6 px-6 py-5 bg-slate-light dark:bg-dark-card rounded-2xl border border-primary/5 dark:border-white/10 text-center">
                <p className="text-lg md:text-xl font-semibold text-slate-text/80 dark:text-dark-text/80 italic">{`"${selectedCareer.tagline}"`}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Categories Filter Tabs - Only show when viewing all careers */}
      {!selectedCareer && (
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-primary/10 dark:border-white/10 p-1.5 rounded-2xl shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setExpandedCareer(null); }}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white shadow-md shadow-black/10'
                      : 'text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-white'
                  }`}
                  style={isActive ? { backgroundColor: tab.hex } : {}}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Careers Grid (hidden when a specific career is selected to avoid duplicate info) */}
      {!selectedCareer && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCareers.map((c, idx) => {
          const isExpanded = expandedCareer === c.id;
          const catColor = categoryColors[c.category] || categoryColors.tech;
          const Icon = careerIcons[c.id] || FolderClosed;

          return (
            <div
              key={c.id}
              className={`group rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 transition-all duration-500 flex flex-col text-left overflow-hidden shadow-[0_10px_35px_-5px_rgba(75,122,244,0.02)] hover:shadow-[0_25px_60px_-12px_rgba(75,122,244,0.15)] dark:hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-2 ${
                isExpanded ? 'ring-2 ring-primary/40 dark:ring-primary/30 shadow-lg shadow-primary/10' : 'animate-shimmer-border'
              } animate-card-enter`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* Image header */}
              <div className="relative h-44 overflow-hidden bg-slate-light dark:bg-dark-card">
                <div className="absolute top-0 left-0 right-0 h-1.5 z-10 shadow-sm" style={{ backgroundColor: catColor.hex }} />
                <div className="absolute inset-0 bg-slate-light dark:bg-dark-card animate-pulse" />
                <img
                  src={`/careers/${c.id}.jpg`}
                  alt={c.name}
                  width="800"
                  height="533"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out relative"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0F172A] via-white/30 dark:via-[#0F172A]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md backdrop-blur-sm ring-2 ring-white dark:ring-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{ backgroundColor: catColor.hex + '20', color: catColor.hex }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm text-[9px] font-bold text-slate-text dark:text-dark-text tracking-wider uppercase border border-primary/10 dark:border-white/10 shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" />
                    3 Años
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[9px] font-bold tracking-widest uppercase mb-1.5" style={{ color: catColor.hex }}>
                    {c.category === 'tech' ? 'Tecnología' : c.category === 'business' ? 'Gestión y Servicios' : 'Ingeniería y Campo'}
                  </span>

                  <h3 className="text-lg font-bold text-slate-text dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors flex-1 mb-1">
                    {c.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Stars rate={c.employabilityRate} />
                    <span className="text-lg font-black text-primary dark:text-secondary">{c.employabilityRate}%</span>
                    <span className="text-[9px] text-slate-text/50 dark:text-dark-text/50 font-medium">{t.careers.employability}</span>
                  </div>

                  <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed mb-4 line-clamp-3">
                    {c.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => toggleExpand(c.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isExpanded
                        ? 'bg-slate-light dark:bg-dark-card text-slate-text dark:text-dark-text'
                        : 'bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99]'
                    }`}
                  >
                      <span>{isExpanded ? 'Cerrar' : t.careers.viewCurriculum}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                  {isExpanded && (
                    <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-slate-light/80 to-white/50 dark:from-dark-surface/80 dark:to-dark-card/50 border border-primary/10 dark:border-white/8 animate-in slide-in-from-top-2 duration-300">
                      <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Formación por Módulos
                      </h4>
                      <ModuleTimeline />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
          })}
        </div>
      )}

      {!selectedCareer && filteredCareers.length === 0 && (
        <div className="text-center py-20 text-slate-text/50 dark:text-dark-text/50">
          No se encontraron programas en esta categoría.
        </div>
      )}
    </div>
  );
}
