import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Clock, GraduationCap, Briefcase, ChevronRight,
  Code, Heart, Cog, Leaf, TreePine, Calculator, Building2,
  Zap, MapPin, ClipboardCheck, CheckCircle2, Sparkles,
  BookOpen, Target, Award, Lightbulb
} from 'lucide-react';

const careerConfig = {
  sys:   { icon: Code,          accent: '#3B82F6', gradient: 'from-blue-500 to-blue-600' },
  enfer: { icon: Heart,         accent: '#10B981', gradient: 'from-emerald-500 to-emerald-600' },
  meca:  { icon: Cog,           accent: '#F97316', gradient: 'from-orange-500 to-orange-600' },
  agro:  { icon: Leaf,          accent: '#84CC16', gradient: 'from-lime-500 to-lime-600' },
  forest:{ icon: TreePine,      accent: '#059669', gradient: 'from-green-600 to-green-700' },
  cont:  { icon: Calculator,    accent: '#8B5CF6', gradient: 'from-violet-500 to-violet-600' },
  admin: { icon: Briefcase,     accent: '#D97706', gradient: 'from-amber-500 to-amber-600' },
  civil: { icon: Building2,     accent: '#6366F1', gradient: 'from-indigo-500 to-indigo-600' },
  elec:  { icon: Zap,           accent: '#EAB308', gradient: 'from-yellow-500 to-yellow-600' },
  tur:   { icon: MapPin,        accent: '#06B6D4', gradient: 'from-cyan-500 to-cyan-600' },
  asist: { icon: ClipboardCheck,accent: '#EC4899', gradient: 'from-pink-500 to-pink-600' },
};

const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const m = prefersReducedMotion ? { duration: 0 } : {};

function TabButton({ active, label, onClick, accent }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 text-[11px] font-semibold transition-colors duration-200 whitespace-nowrap ${
        active ? 'text-white' : 'text-white/40 hover:text-white/60'
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="tabIndicator"
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
          style={{ backgroundColor: accent }}
          transition={{ type: 'spring', stiffness: 400, damping: 30, ...m }}
        />
      )}
    </button>
  );
}

function InfoTab({ career, t }) {
  const mm = t.megaMenu?.careers?.labels || {};
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-extrabold text-white leading-tight tracking-tight">{career.name}</h4>
        <p className="text-sm text-white/50 mt-1 leading-relaxed line-clamp-2">{career.tagline}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: Clock, label: career.duration },
          { icon: GraduationCap, label: career.modality },
          { icon: Briefcase, label: `${career.employabilityRate}% ${mm.employability}` },
          { icon: Sparkles, label: career.degree || mm.degree },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.05, ...m }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/8 backdrop-blur-sm border border-white/8"
          >
            <item.icon className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
            <span className="text-[11px] text-white/70 font-medium leading-tight truncate">{item.label}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-[12px] text-white/55 leading-relaxed">{career.desc}</p>
      {career.technologies?.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-white/35 uppercase tracking-wider">{mm.technologies}</p>
          <div className="flex flex-wrap gap-1.5">
            {career.technologies.map((tech, i) => (
              <span key={i} className="text-[10px] font-semibold text-white/75 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/8 hover:bg-white/15 transition-colors duration-200">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PlanTab({ career, cfg, t }) {
  const mm = t.megaMenu?.careers?.labels || {};
  const curriculum = career.curriculum || [];
  const learningPoints = career.learningPoints || [];
  return (
    <div className="space-y-4">
      {curriculum.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-white/35 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3 h-3" /> {mm.curriculum}
          </p>
          <div className="space-y-1.5">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.04, ...m }}
                className="flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-bold text-white/80" style={{ backgroundColor: `${cfg.accent}25` }}>
                  {i + 1}
                </div>
                <span className="text-[12px] text-white/65 leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {learningPoints.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-white/35 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-3 h-3" /> {mm.learning}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {learningPoints.map((p, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-[11px] text-white/65 bg-white/8 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/6">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: cfg.accent }} />
                {p}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FieldTab({ career, cfg, t }) {
  const mm = t.megaMenu?.careers?.labels || {};
  const skills = career.skills || [];
  const opportunities = career.opportunities || [];
  return (
    <div className="space-y-4">
      {opportunities.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-white/35 uppercase tracking-wider flex items-center gap-1.5">
            <Briefcase className="w-3 h-3" /> {mm.fieldWork}
          </p>
          <div className="space-y-1.5">
            {opportunities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.04, ...m }}
                className="flex items-start gap-2"
              >
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: cfg.accent }} />
                <span className="text-[12px] text-white/65 leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {skills.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-white/35 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-3 h-3" /> {mm.skills}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s, i) => (
              <span key={i} className="text-[11px] font-medium text-white/60 bg-white/8 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/6">{s}</span>
            ))}
          </div>
        </div>
      )}
      {career.whyYou && (
        <div className="p-3 rounded-xl bg-white/5 border border-white/8">
          <p className="text-[10px] font-bold text-white/35 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
            <Target className="w-3 h-3" /> {mm.whyCareer}
          </p>
          <p className="text-[12px] text-white/55 leading-relaxed">{career.whyYou}</p>
        </div>
      )}
    </div>
  );
}

function RightPanelInner({ career, t }) {
  const cfg = careerConfig[career.id] || careerConfig.sys;
  const [activeTab, setActiveTab] = useState('info');
  const mm = t.megaMenu?.careers || {};
  const tabLabels = mm.tabs || {};
  const categories = mm.categories || {};

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case 'plan': return <PlanTab career={career} cfg={cfg} t={t} />;
      case 'field': return <FieldTab career={career} cfg={cfg} t={t} />;
      default: return <InfoTab career={career} t={t} />;
    }
  }, [activeTab, career, cfg, t]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={career.id}
        initial={{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], ...m }}
        className="absolute inset-0 flex flex-col"
      >
        <div className="absolute inset-0">
          <img src={career.image} alt={career.name} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="px-5 pt-4 pb-2 flex items-center justify-between">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ...m }}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
            >
              <cfg.icon className="w-3 h-3" />
              {categories[career.category] || career.category}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15, ...m }}
              className="text-xs font-extrabold text-white"
            >
              {career.employabilityRate}%
            </motion.span>
          </div>

          <div className="px-5 flex items-center gap-1 border-b border-white/10">
            {Object.entries(tabLabels).map(([key, label]) => (
              <TabButton
                key={key}
                active={activeTab === key}
                label={label}
                onClick={() => setActiveTab(key)}
                accent={cfg.accent}
              />
            ))}
          </div>

          <div className="px-5 py-2">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${career.employabilityRate}%` }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut', ...m }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${cfg.accent}, ${cfg.accent}CC)` }}
              />
            </div>
          </div>

          <div className="relative z-10 flex-1 px-5 pb-3 flex flex-col min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + career.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ...m }}
                className="flex-1 overflow-hidden"
              >
                {tabContent}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="px-5 py-3 border-t border-white/8">
            <button
              onClick={() => {}}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:shadow-xl active:scale-[0.98] group/cta relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${cfg.accent}, ${cfg.accent}DD)`,
                boxShadow: `0 8px 25px -5px ${cfg.accent}50`
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 35px -5px ${cfg.accent}70`; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 8px 25px -5px ${cfg.accent}50`; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span className="relative z-10">{mm.labels.viewComplete}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function CareerListItem({ career, isActive, onHover, onClick, index, t }) {
  const cfg = careerConfig[career.id] || careerConfig.sys;
  const Icon = cfg.icon;
  const mm = t.megaMenu?.careers?.labels || {};
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03, ...m }}
      onMouseEnter={onHover}
      onClick={onClick}
      className={`w-full text-left rounded-xl transition-all duration-300 group/item relative flex items-center gap-3 px-3 py-3 ${
        isActive ? 'bg-white dark:bg-white/5 shadow-md shadow-black/5 dark:shadow-black/20' : 'hover:bg-white/60 dark:hover:bg-white/[0.03]'
      }`}
      role="option"
      aria-selected={isActive}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      <div className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300 ease-out ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} style={{ backgroundColor: cfg.accent }} />
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? `bg-gradient-to-br ${cfg.gradient} text-white shadow-md` : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-white/30 group-hover/item:text-slate-600 dark:group-hover/item:text-white/50'}`} style={isActive ? { boxShadow: `0 4px 14px -3px ${cfg.accent}40` } : {}}>
        <Icon className="w-4 h-4" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`block font-semibold text-[13px] leading-tight transition-colors duration-200 truncate ${isActive ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-white/70 group-hover/item:text-slate-800 dark:group-hover/item:text-white/90'}`}>{career.name}</span>
        <span className={`block text-[10px] mt-0.5 transition-colors duration-200 ${isActive ? 'text-slate-500 dark:text-white/50' : 'text-slate-400 dark:text-white/30'}`}>{career.employabilityRate}% {mm.employability}</span>
      </div>
      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover/item:opacity-50 group-hover/item:translate-x-0'}`} style={{ color: isActive ? cfg.accent : undefined }} />
    </motion.button>
  );
}

function RightPanel({ career, t }) {
  return <RightPanelInner key={career.id} career={career} t={t} />;
}

export default function CareersMegaMenu({ t, isMobile, onItemClick }) {
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();
  const careers = useMemo(() => t.careers?.items || [], [t]);
  const activeCareer = useMemo(() => careers.find(c => c.id === activeId) || careers[0], [careers, activeId]);
  const handleCareerClick = useCallback((id) => { navigate(`/careers/${id}`); onItemClick?.(); }, [navigate, onItemClick]);
  const mm = t.megaMenu?.careers || {};

  const listScrollRef = useRef(null);
  const fadeTopRef = useRef(null);
  const fadeBottomRef = useRef(null);

  const handleListScroll = useCallback(() => {
    const el = listScrollRef.current;
    if (!el) return;
    const atTop = el.scrollTop < 5;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 5;
    if (fadeTopRef.current) fadeTopRef.current.style.opacity = atTop ? '0' : '1';
    if (fadeBottomRef.current) fadeBottomRef.current.style.opacity = atBottom ? '0' : '1';
  }, []);

  useEffect(() => { handleListScroll(); }, [handleListScroll, activeId]);

  if (isMobile) {
    return (
      <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
        {careers.map((career, index) => {
          const cfg = careerConfig[career.id] || careerConfig.sys;
          const Icon = cfg.icon;
          return (
            <motion.button key={career.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: index * 0.03 }} onClick={() => handleCareerClick(career.id)} className="w-full text-left px-3 py-3 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 group flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-white/30"><Icon className="w-4 h-4" /></div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300 truncate">{career.name}</div>
                <div className="text-[10px] text-slate-text/60 dark:text-dark-text/60 mt-0.5">{career.employabilityRate}% {mm.labels.employability}</div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-text/40 dark:text-dark-text/40 group-hover:text-primary dark:group-hover:text-secondary group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
            </motion.button>
          );
        })}
        <button onClick={() => { navigate('/careers'); onItemClick?.(); }} className="mt-2 pt-2 border-t border-primary/10 dark:border-white/10 block px-3 py-2 text-center text-xs font-bold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-300">{mm.viewAll} →</button>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3">
      <div className="rounded-2xl overflow-hidden bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border border-slate-200/60 dark:border-white/[0.06] shadow-2xl shadow-black/10 dark:shadow-black/40">
        <div className="flex h-[415px]">
          <div className="w-[400px] flex-shrink-0 border-r border-slate-100 dark:border-white/6 flex flex-col">
            <div className="px-5 pt-4 pb-2.5 flex-shrink-0">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-[0.15em]">{mm.header || t.nav.careers}</p>
                <span className="text-[10px] text-slate-300 dark:text-white/20 font-medium">{careers.length} {mm.programs}</span>
              </div>
            </div>

            <div className="flex-1 relative min-h-0">
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/95 dark:from-dark-card/95 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" style={{ opacity: 'var(--fade-top, 0)' }} ref={fadeTopRef} />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/95 dark:from-dark-card/95 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" style={{ opacity: 'var(--fade-bottom, 0)' }} ref={fadeBottomRef} />

              <div
                ref={listScrollRef}
                className="h-full overflow-y-auto px-3 pb-3 space-y-0.5 scrollbar-thin scroll-smooth"
                role="listbox"
                aria-label={mm.header}
                onScroll={handleListScroll}
              >
                {careers.map((career, index) => (
                  <CareerListItem key={career.id} career={career} isActive={activeCareer?.id === career.id} onHover={() => setActiveId(career.id)} onClick={() => handleCareerClick(career.id)} index={index} t={t} />
                ))}
              </div>
            </div>

            <div className="px-5 py-2.5 border-t border-slate-100 dark:border-white/6 flex-shrink-0">
              <button onClick={() => { navigate('/careers'); onItemClick?.(); }} className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-300 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10">
                {mm.viewAll}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <RightPanel career={activeCareer} t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}
