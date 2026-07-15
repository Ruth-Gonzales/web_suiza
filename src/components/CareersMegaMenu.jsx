import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Clock, GraduationCap, Briefcase, ChevronRight,
  Code, Heart, Cog, TreePine, Calculator, Building2,
  Zap, MapPin, ClipboardCheck, CheckCircle2, Stethoscope,
  BookOpen, Target, Award, Lightbulb, Users, TrendingUp,
  FlaskConical, Handshake, Award as Certificate, Layers
} from 'lucide-react';
import { careersData } from '../data/careersData';

const LIGHT_COLORS = {
  primaryDark: '#082B5C',
  primary: '#0B4DBB',
  primaryMedium: '#2867C7',
  primaryLight: '#EAF2FF',
  surface: '#FFFFFF',
  background: '#F6F9FE',
  border: '#DDE7F3',
  text: '#14233D',
  muted: '#66758D',
  gold: '#C99418',
  goldLight: '#FFF7DC',
};

const DARK_COLORS = {
  primaryDark: '#60A5FA',
  primary: '#3B82F6',
  primaryMedium: '#60A5FA',
  primaryLight: '#17253A',
  surface: '#0F172A',
  background: '#081326',
  border: 'rgba(255,255,255,0.08)',
  text: '#F5F7FB',
  muted: '#AAB6C8',
  gold: '#C99418',
  goldLight: '#2D2410',
};

function useDarkMode() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains('dark'));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

function useColors() {
  const dark = useDarkMode();
  return dark ? DARK_COLORS : LIGHT_COLORS;
}

const careerConfig = {
  sistemas:    { icon: Code,          color: '#2563EB', softColor: '#EAF2FF', darkSoftColor: '#1A2744' },
  enfermeria:  { icon: Stethoscope,   color: '#E5486D', softColor: '#FDECF1', darkSoftColor: '#2D1520' },
  mecatronica: { icon: Cog,           color: '#F97316', softColor: '#FFF1E8', darkSoftColor: '#2D2018' },
  agropecuaria:{ icon: TrendingUp,    color: '#4CAF50', softColor: '#EAF7EB', darkSoftColor: '#1A2D1C' },
  forestal:    { icon: TreePine,      color: '#168A55', softColor: '#E5F6ED', darkSoftColor: '#162D22' },
  contabilidad:{ icon: Calculator,    color: '#7C3AED', softColor: '#F1EAFE', darkSoftColor: '#221A35' },
  admin:       { icon: Briefcase,     color: '#0F7C8D', softColor: '#E5F6F8', darkSoftColor: '#152D30' },
  civil:       { icon: Building2,     color: '#64748B', softColor: '#EEF2F6', darkSoftColor: '#1E2530' },
  elec:        { icon: Zap,           color: '#E6A700', softColor: '#FFF8D9', darkSoftColor: '#2D2A18' },
  turismo:     { icon: MapPin,        color: '#0284C7', softColor: '#E5F5FD', darkSoftColor: '#152530' },
  asistencia:  { icon: ClipboardCheck,color: '#5B6FD8', softColor: '#EDF0FF', darkSoftColor: '#1C1F35' },
  gestion:     { icon: Users,         color: '#9C6ADE', softColor: '#F3ECFC', darkSoftColor: '#241D35' },
};

function getSoftColor(careerId, dark) {
  const cfg = careerConfig[careerId] || careerConfig.sistemas;
  return dark ? cfg.darkSoftColor : cfg.softColor;
}

const catLabel = { tech: 'Tecnología', field: 'Ingeniería', business: 'Gestión' };

const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const anim = (dur = 0.25, extra = {}) => prefersReducedMotion ? { duration: 0 } : { duration: dur, ...extra };

function SectionHeading({ label }) {
  const C = useColors();
  return (
    <div className="flex items-center gap-2.5 mb-1.5">
      <div className="w-[22px] h-[3px] rounded-full" style={{ background: C.gold }} />
      <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: C.primary }}>{label}</h4>
    </div>
  );
}

function InfoTab({ career, cfg }) {
  const C = useColors();
  const dark = useDarkMode();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4">
      <div className="space-y-4">
        <div>
          <SectionHeading label="Descripción" />
          <p className="text-sm leading-relaxed" style={{ color: C.text }}>{career.description}</p>
        </div>
        <div>
          <SectionHeading label="Perfil del Egresado" />
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{career.graduateProfile}</p>
        </div>
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-[22px] h-[3px] rounded-full" style={{ background: C.gold }} />
            <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: C.primary }}>Competencias Principales</h4>
          </div>
          <div className="space-y-1.5">
            {(career.competencies || []).map((c, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: cfg.accent }} />
                <span className="text-sm" style={{ color: C.text }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { icon: Clock, label: 'Duración', value: career.duration, highlight: false },
          { icon: GraduationCap, label: 'Modalidad', value: career.modality, highlight: false },
          { icon: Layers, label: 'Turnos', value: career.shifts || 'Mañana y Tarde', highlight: false },
          { icon: Award, label: 'Título', value: career.degree, highlight: false },
          { icon: Certificate, label: 'Certificación', value: career.certifications?.[0] || 'Profesional Técnico', highlight: false },
          { icon: TrendingUp, label: 'Empleabilidad', value: `${career.employabilityRate}%`, highlight: true },
          { icon: FlaskConical, label: 'Laboratorios', value: `${career.labs?.length || 0} disponibles`, highlight: false },
          { icon: Handshake, label: 'Convenios', value: `${career.agreements?.length || 0} instituciones`, highlight: false },
          { icon: Target, label: 'Nivel', value: 'Técnico Superior', highlight: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-[1px]" style={{ borderColor: item.highlight ? `${C.gold}30` : C.border, background: C.surface, boxShadow: item.highlight ? (dark ? `0 8px 24px ${C.primaryDark}15` : `0 8px 24px ${C.primaryDark}0A`) : (dark ? '0 8px 24px rgba(0,0,0,0.2)' : '0 8px 24px rgba(8,43,92,0.04)') }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: item.highlight ? `${C.gold}12` : `${C.primary}0A` }}>
              <item.icon className="w-4 h-4" style={{ color: item.highlight ? C.gold : C.primary }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: C.muted }}>{item.label}</p>
              <p className="text-xs font-bold truncate" style={{ color: item.highlight ? C.primaryDark : C.text }}>{item.value}</p>
            </div>
            {item.highlight && <div className="w-[3px] h-6 rounded-full flex-shrink-0" style={{ background: C.gold }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanTab({ career, cfg }) {
  const C = useColors();
  const dark = useDarkMode();
  const curriculum = career.curriculum || [];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {curriculum.map((subjects, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={anim(0.2, { delay: i * 0.04 })}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: C.border }}
          >
            <div className="px-3 py-2 flex items-center gap-2" style={{ background: `${C.primary}08` }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: C.primary }}>
                {i + 1}
              </div>
              <span className="text-xs font-bold" style={{ color: C.text }}>Semestre {i + 1}</span>
            </div>
            <div className="px-3 py-2" style={{ background: C.surface }}>
              <div className="flex flex-wrap gap-1">
                {subjects.map((s, j) => (
                  <span key={j} className="text-[11px] px-2 py-0.5 rounded-md border" style={{ color: C.text, borderColor: `${C.primary}12`, background: C.primaryLight }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {career.skills?.length > 0 && (
        <div className="pt-2 border-t" style={{ borderColor: C.border }}>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-[22px] h-[3px] rounded-full" style={{ background: C.gold }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: C.primary }}>Habilidades Clave</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {career.skills.map((s, i) => (
              <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-lg border" style={{ color: C.primary, borderColor: `${C.primary}20`, background: `${C.primary}06` }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FieldTab({ career, cfg }) {
  const C = useColors();
  const dark = useDarkMode();
  const fieldIcons = [Briefcase, Building2, Users, TrendingUp, Handshake, Target];
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-[22px] h-[3px] rounded-full" style={{ background: C.gold }} />
          <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: C.primary }}>Oportunidades Laborales</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {(career.opportunities || []).map((opp, i) => {
            const Ico = fieldIcons[i % fieldIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={anim(0.2, { delay: i * 0.03 })}
                className="flex items-start gap-2.5 p-2.5 rounded-xl border"
                style={{ borderColor: C.border, background: C.surface }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${cfg.accent}10` }}>
                  <Ico className="w-3.5 h-3.5" style={{ color: cfg.accent }} />
                </div>
                <span className="text-sm leading-snug" style={{ color: C.text }}>{opp}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
      {career.whyYou && (
        <div className="p-3 rounded-xl border-l-4" style={{ borderColor: C.gold, background: dark ? `${C.gold}10` : `${C.goldLight}40` }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: C.gold }}>¿Por qué esta carrera?</p>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{career.whyYou}</p>
        </div>
      )}
    </div>
  );
}

const COLLAPSE_THRESHOLD = 60;
const EXPAND_THRESHOLD = 20;

function RightPanel({ career, t, onItemClick }) {
  const C = useColors();
  const dark = useDarkMode();
  const cfg = careerConfig[career.id] || careerConfig.sistemas;
  const navigate = useNavigate();
  const [tab, setTab] = useState('info');
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const scrollContainerRef = useRef(null);
  const previousScrollTop = useRef(0);
  const headerCollapsedRef = useRef(false);
  const mm = t.megaMenu?.careers || {};
  const heroRef = useRef(null);

  useEffect(() => {
    headerCollapsedRef.current = false;
    setTab('info');
    setHeaderCollapsed(false);
    previousScrollTop.current = 0;
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
  }, [career.id]);

  const handleContentScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const st = el.scrollTop;
    const isScrollingDown = st > previousScrollTop.current;
    previousScrollTop.current = st;
    const collapsed = headerCollapsedRef.current;

    if (!collapsed && isScrollingDown && st > COLLAPSE_THRESHOLD) {
      headerCollapsedRef.current = true;
      setHeaderCollapsed(true);
    } else if (collapsed && st < EXPAND_THRESHOLD) {
      headerCollapsedRef.current = false;
      setHeaderCollapsed(false);
    }
  }, []);

  const handleTabChange = useCallback((newTab) => {
    setTab(newTab);
    headerCollapsedRef.current = false;
    setHeaderCollapsed(false);
    previousScrollTop.current = 0;
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={career.id}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={anim(0.22)}
        className="flex flex-col h-full"
      >
        {/* A. Collapsible Header */}
        <div
          ref={heroRef}
          className="relative overflow-hidden shrink-0"
          style={{
            height: headerCollapsed ? '0px' : '220px',
            opacity: headerCollapsed ? 0 : 1,
            transform: headerCollapsed ? 'translateY(-30px)' : 'translateY(0)',
            pointerEvents: headerCollapsed ? 'none' : 'auto',
            transition: 'height 380ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease, transform 380ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <img
            src={career.image}
            alt={career.name}
            className="w-full h-full object-cover"
            style={{
              objectPosition: career.objectPosition || 'center 40%',
              transform: headerCollapsed ? 'translateY(-24px) scale(1.015)' : 'translateY(0) scale(1)',
              opacity: headerCollapsed ? 0 : 1,
              transition: 'transform 380ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
            }}
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, rgba(4,35,82,0.98) 0%, rgba(8,73,155,0.84) 46%, rgba(8,73,155,0.18) 100%)` }} />
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <div className="flex justify-between items-start">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.24)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
                <cfg.icon className="w-3 h-3" />
                {catLabel[career.category]}
              </span>
              <div className="text-right" style={{ background: 'rgba(8,43,92,0.82)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '12px', padding: '8px 12px' }}>
                <div className="text-2xl font-extrabold text-white leading-none">{career.employabilityRate}%</div>
                <div className="text-[9px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>Empleabilidad</div>
                <div className="w-full h-[2px] rounded-full mt-1.5" style={{ background: cfg.color }} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-1">{career.name}</h3>
              <p className="text-sm text-white/70 max-w-md leading-relaxed">{career.tagline}</p>
            </div>
          </div>
        </div>

        {/* B. Sticky Tabs + Compact Header */}
        <div
          className="shrink-0"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            background: C.surface,
            borderBottom: `1px solid ${C.border}`,
            boxShadow: headerCollapsed ? (dark ? '0 5px 16px rgba(0,0,0,0.3)' : '0 5px 16px rgba(15,23,42,0.06)') : 'none',
            transition: 'box-shadow 280ms ease',
          }}
        >
          {/* Compact mini-header when collapsed */}
          <div
            className="flex items-center gap-3 px-5 overflow-hidden"
            style={{
              height: headerCollapsed ? '48px' : '0px',
              opacity: headerCollapsed ? 1 : 0,
              transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease',
            }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: getSoftColor(career.id, dark) }}>
              <cfg.icon className="w-4 h-4" style={{ color: cfg.color }} />
            </div>
            <span className="font-bold text-sm truncate" style={{ color: C.text }}>{career.name}</span>
            <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: getSoftColor(career.id, dark), color: cfg.color }}>{career.employabilityRate}%</span>
          </div>

          {/* Tab bar */}
          <div className="flex items-center gap-0 px-5">
            {[
              { key: 'info', label: 'Información' },
              { key: 'plan', label: 'Plan de Estudios' },
              { key: 'field', label: 'Campo Laboral' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => handleTabChange(t.key)}
                className="relative px-4 py-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                style={{ color: tab === t.key ? C.primary : C.muted }}
                role="tab"
                aria-selected={tab === t.key}
              >
                {t.label}
                {tab === t.key && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full" style={{ background: C.gold }} transition={anim(0.2)} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* C. Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="flex-1 min-h-0 overflow-y-auto cm-scroll"
          style={{ background: C.background, overscrollBehavior: 'contain', scrollbarGutter: 'stable', position: 'relative' }}
          onScroll={handleContentScroll}
        >
          {/* Subtle Shipibo watermark */}
          <svg className="pointer-events-none select-none absolute top-3 right-3 opacity-[0.018]" width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <path d="M60 10 L110 35 L110 85 L60 110 L10 85 L10 35 Z" stroke={C.primary} strokeWidth="1.2" fill="none" />
            <path d="M60 25 L95 42 L95 78 L60 95 L25 78 L25 42 Z" stroke={C.primary} strokeWidth="0.8" fill="none" />
            <path d="M60 40 L80 50 L80 70 L60 80 L40 70 L40 50 Z" stroke={C.primary} strokeWidth="0.6" fill="none" />
            <line x1="60" y1="10" x2="60" y2="25" stroke={C.primary} strokeWidth="0.5" />
            <line x1="110" y1="35" x2="95" y2="42" stroke={C.primary} strokeWidth="0.5" />
            <line x1="110" y1="85" x2="95" y2="78" stroke={C.primary} strokeWidth="0.5" />
            <line x1="60" y1="110" x2="60" y2="95" stroke={C.primary} strokeWidth="0.5" />
            <line x1="10" y1="85" x2="25" y2="78" stroke={C.primary} strokeWidth="0.5" />
            <line x1="10" y1="35" x2="25" y2="42" stroke={C.primary} strokeWidth="0.5" />
          </svg>
          <div className="p-5">
            <AnimatePresence mode="wait">
              <motion.div key={tab + career.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={anim(0.18)}>
                {tab === 'info' && <InfoTab career={career} cfg={cfg} />}
                {tab === 'plan' && <PlanTab career={career} cfg={cfg} />}
                {tab === 'field' && <FieldTab career={career} cfg={cfg} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* D. Fixed Footer CTA */}
        <div className="px-5 py-3 border-t shrink-0" style={{ borderColor: C.border, background: C.surface }}>
          <button
            onClick={() => {
              if (!career?.id) return;
              navigate(`/careers/${career.id}`);
              onItemClick?.();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all duration-250 hover:shadow-lg hover:-translate-y-[1px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: `linear-gradient(90deg, ${C.primary} 0%, ${C.primaryMedium} 100%)`, boxShadow: `0 4px 14px -3px ${C.primary}40`, borderTop: '1px solid rgba(255,255,255,0.12)', minHeight: '48px', focusVisibleRingColor: C.primary }}
            aria-label={`Ver información completa de ${career.name}`}
          >
            <span>{mm.labels?.viewComplete || 'Ver información completa'}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function CareerItem({ career, isActive, onHover, onClick, index }) {
  const C = useColors();
  const dark = useDarkMode();
  const cfg = careerConfig[career.id] || careerConfig.sistemas;
  const Icon = cfg.icon;
  const softBg = getSoftColor(career.id, dark);
  return (
    <motion.button
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={anim(0.2, { delay: index * 0.02 })}
      onMouseEnter={onHover}
      onClick={onClick}
      className="w-full text-left rounded-xl transition-all duration-200 group relative flex items-center gap-3 px-3 py-3 cm-career-item"
      style={{
        '--program-color': cfg.color,
        '--program-soft-color': softBg,
        borderLeft: isActive ? `3px solid ${cfg.color}` : '3px solid transparent',
        background: isActive
          ? (dark
            ? `linear-gradient(90deg, ${softBg}E6, ${C.surface})`
            : `linear-gradient(90deg, ${softBg}B3, ${C.surface})`)
          : 'transparent',
        border: isActive ? `1px solid ${cfg.color}30` : '1px solid transparent',
        borderLeftWidth: '3px',
        borderLeftColor: isActive ? cfg.color : 'transparent',
        boxShadow: isActive ? (dark ? `0 4px 14px ${cfg.color}15` : `0 4px 14px ${cfg.color}10`) : 'none',
        transform: isActive ? 'none' : undefined,
      }}
      role="option"
      aria-selected={isActive}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 cm-career-icon"
        style={{
          background: softBg,
          color: cfg.color,
          border: `1px solid ${cfg.color}1D`,
        }}
      >
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="block font-semibold text-[13px] leading-tight truncate" style={{ color: isActive ? C.text : C.muted }}>{career.name}</span>
        <span className="block text-[11px] mt-0.5" style={{ color: C.muted }}>{career.employabilityRate}% empleabilidad</span>
      </div>
      <ChevronRight className="w-4 h-4 flex-shrink-0 transition-all duration-200 cm-career-arrow" style={{ color: isActive ? cfg.color : 'transparent' }} />
    </motion.button>
  );
}

export default function CareersMegaMenu({ t, isMobile, onItemClick }) {
  const C = useColors();
  const dark = useDarkMode();
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();
  const careers = useMemo(() => careersData, []);
  const activeCareer = useMemo(() => careers.find(c => c.id === activeId) || careers[0], [careers, activeId]);
  const handleCareerClick = useCallback((id) => { navigate(`/careers/${id}`); onItemClick?.(); }, [navigate, onItemClick]);
  const mm = t.megaMenu?.careers || {};

  const scrollRef = useRef(null);
  const fadeTopRef = useRef(null);
  const fadeBottomRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (fadeTopRef.current) fadeTopRef.current.style.opacity = el.scrollTop < 5 ? '0' : '1';
    if (fadeBottomRef.current) fadeBottomRef.current.style.opacity = el.scrollHeight - el.scrollTop - el.clientHeight < 5 ? '0' : '1';
  }, []);

  useEffect(() => { handleScroll(); }, [handleScroll, activeId]);

  if (isMobile) {
    return (
      <div className="mt-2 space-y-1 pl-4 border-l-2" style={{ borderColor: `${C.primary}20` }}>
        {careers.map((career, index) => {
          const cfg = careerConfig[career.id] || careerConfig.sistemas;
          const Icon = cfg.icon;
          return (
            <motion.button key={career.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={anim(0.2, { delay: index * 0.025 })} onClick={() => handleCareerClick(career.id)} className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-200 group flex items-center gap-3 ${dark ? 'hover:bg-white/5' : 'hover:bg-blue-50'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: getSoftColor(career.id, dark) }}><Icon className="w-4 h-4" style={{ color: cfg.color }} /></div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs truncate" style={{ color: C.text }}>{career.name}</div>
                <div className="text-[10px] mt-0.5" style={{ color: C.muted }}>{career.employabilityRate}% empleabilidad</div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: C.muted }} />
            </motion.button>
          );
        })}
        <button onClick={() => { navigate('/careers'); onItemClick?.(); }} className="mt-2 pt-2 border-t block px-3 py-2 text-center text-xs font-bold transition-colors duration-200" style={{ borderColor: `${C.primary}0D`, color: C.primary }}>
          {mm.viewAll || 'Ver todos los programas'} →
        </button>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[960px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out z-50">
      <div style={{ background: C.surface, border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(11,77,187,0.10)'}`, borderRadius: '24px', boxShadow: dark ? '0 24px 65px rgba(0,0,0,0.4)' : '0 24px 65px rgba(8,43,92,0.18)', overflow: 'hidden' }}>
        <div className="flex" style={{ height: '440px' }}>
          <div className="flex flex-col" style={{ width: '320px', flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
            <div className="px-4 pt-4 pb-2 shrink-0">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.muted }}>{mm.header || 'Programas de Estudio'}</p>
                <span className="text-[10px] font-medium" style={{ color: `${C.muted}80` }}>{careers.length} programas</span>
              </div>
            </div>
            <div className="flex-1 relative min-h-0">
              <div className="absolute top-0 left-0 right-0 h-4 z-10 pointer-events-none opacity-0 transition-opacity" ref={fadeTopRef} style={{ background: `linear-gradient(to bottom, ${C.surface}, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-5 z-10 pointer-events-none opacity-0 transition-opacity" ref={fadeBottomRef} style={{ background: `linear-gradient(to top, ${C.surface}, transparent)` }} />
              <div ref={scrollRef} className="h-full overflow-y-auto px-2.5 pb-2 space-y-0.5 cm-scroll scroll-smooth" role="listbox" aria-label="Programas de Estudio" onScroll={handleScroll}>
                {careers.map((career, index) => (
                  <CareerItem key={career.id} career={career} isActive={activeCareer?.id === career.id} onHover={() => setActiveId(career.id)} onClick={() => handleCareerClick(career.id)} index={index} />
                ))}
              </div>
            </div>
            <div className="px-4 py-2.5 shrink-0 border-t" style={{ borderColor: C.border }}>
              <button onClick={() => { navigate('/careers'); onItemClick?.(); }} className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold rounded-lg transition-all duration-200" style={{ color: C.primary }}>
                {mm.viewAll || 'Ver todos los programas'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="flex-1 min-w-0 overflow-hidden" style={{ background: C.surface }}>
            <RightPanel career={activeCareer} t={t} onItemClick={onItemClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
