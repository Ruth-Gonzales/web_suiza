import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, GraduationCap, ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import AboutMegaMenu from './AboutMegaMenu';

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [forceClose, setForceClose] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setForceClose(true);
    const timer = setTimeout(() => setForceClose(false), 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about, hasAboutMega: true },
    { path: '/careers', label: t.nav.careers, hasDropdown: true },
    { path: '/admission', label: t.nav.admission, hasMega: true },
    { path: '/transparency', label: t.nav.transparency, hasSimpleDropdown: true, menuKey: 'transparencyMenu' },
    { path: '/procedures', label: t.nav.procedures, hasSimpleDropdown: true, menuKey: 'proceduresMenu' },
    { path: '/services', label: t.nav.services, hasSimpleDropdown: true, menuKey: 'servicesMenu' }
  ];

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' },
    { code: 'sh', label: 'SHB' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      {/* Contact info bar above Navbar */}
      <div className="max-w-[1440px] w-full mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs navbar-amazon-identity-contact rounded-xl transition-colors duration-300">
        <div className="flex gap-4 items-center">
          <span className="inline-flex items-center gap-1.5"><Phone className="w-3 h-3 text-primary/50 dark:text-white/40" /> <span className="hidden xs:inline text-slate-text/70 dark:text-white/65">061-280665</span></span>
          <span className="hidden sm:inline-flex items-center gap-1.5"><Mail className="w-3 h-3 text-primary/50 dark:text-white/40" /> <span className="text-slate-text/70 dark:text-white/65">suiza@iestpsuiza.edu.pe</span></span>
          <span className="hidden md:inline-flex items-center gap-1.5"><MapPin className="w-3 h-3 text-primary/50 dark:text-white/40" /> <span className="text-slate-text/70 dark:text-white/65">Carretera Federico Basadre Km 5.700, Pucallpa</span></span>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Globe className="w-3.5 h-3.5 text-primary/40 dark:text-white/35" />
          <span className="text-slate-text/60 dark:text-white/55 font-medium">IESTP SUIZA - Ucayali</span>
        </div>
      </div>

      {/* Main nav bar — Identidad Amazónica Contemporánea */}
      <div className="max-w-[1440px] w-full mx-auto rounded-2xl navbar-amazon-identity shadow-[0_2px_12px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.40),0_1px_4px_rgba(0,0,0,0.30)] px-4 py-3 md:px-6 flex justify-between items-center transition-all duration-300 gap-4 relative">
        
        {/* Kené SVG — Patrón Shipibo-Konibo de fondo */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-2xl">
          <svg viewBox="0 0 1440 68" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="kene-edge-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="8%" stopColor="white" stopOpacity="1" />
                <stop offset="92%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="kene-vertical-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                <stop offset="20%" stopColor="white" stopOpacity="1" />
                <stop offset="80%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.4" />
              </linearGradient>
              <mask id="kene-mask">
                <rect width="1440" height="68" fill="url(#kene-edge-fade)" />
              </mask>
              <mask id="kene-mask-v">
                <rect width="1440" height="68" fill="url(#kene-vertical-fade)" />
              </mask>
            </defs>
            <g mask="url(#kene-mask)" stroke="var(--kene-stroke)" strokeWidth="0.9" fill="none">
              <g mask="url(#kene-mask-v)">
                {/* Líneas horizontales guía */}
                <line x1="0" y1="12" x2="1440" y2="12" strokeWidth="0.5" />
                <line x1="0" y1="34" x2="1440" y2="34" strokeWidth="0.6" />
                <line x1="0" y1="56" x2="1440" y2="56" strokeWidth="0.5" />
                
                {/* Cadena de rombos Kené */}
                {[0, 96, 192, 288, 384, 480, 576, 672, 768, 864, 960, 1056, 1152, 1248, 1344].map((x, i) => (
                  <g key={`d1-${i}`}>
                    <path d={`M${x+48} 8 L${x+72} 34 L${x+48} 60 L${x+24} 34 Z`} strokeWidth="0.8" />
                    <path d={`M${x+48} 16 L${x+64} 34 L${x+48} 52 L${x+32} 34 Z`} strokeWidth="0.5" />
                    <circle cx={x+48} cy={34} r="1.8" strokeWidth="0.5" />
                  </g>
                ))}
                
                {/* Conectores zigzag entre rombos */}
                {[0, 96, 192, 288, 384, 480, 576, 672, 768, 864, 960, 1056, 1152, 1248, 1344].map((x, i) => (
                  <g key={`z1-${i}`} strokeWidth="0.55">
                    <path d={`M${x+72} 20 L${x+84} 28 L${x+72} 34`} />
                    <path d={`M${x+72} 48 L${x+84} 40 L${x+72} 34`} />
                    <path d={`M${x+24} 20 L${x+12} 28 L${x+24} 34`} />
                    <path d={`M${x+24} 48 L${x+12} 40 L${x+24} 34`} />
                  </g>
                ))}

                {/* Líneas verticales de acento */}
                {[48, 144, 240, 336, 432, 528, 624, 720, 816, 912, 1008, 1104, 1200, 1296, 1392].map((x, i) => (
                  <g key={`a1-${i}`} strokeWidth="0.35">
                    <line x1={x} y1="0" x2={x} y2="68" />
                  </g>
                ))}
              </g>
            </g>
          </svg>
        </div>
        
        <Link to="/" className="flex items-center gap-2.5 group shrink-0 relative z-10">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-xl ring-1 ring-primary/10 dark:ring-white/15 group-hover:ring-primary/20 dark:group-hover:ring-white/25 group-hover:scale-[1.02] transition-all duration-300 shrink-0 overflow-hidden">
            <img src={LogoSuiza} alt="Logo Suiza" className="w-20 h-20 object-contain shrink-0" />
          </div>
          <div>
            <div className="font-extrabold text-[15px] leading-none text-slate-text dark:text-white tracking-tight group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
              IESTP SUIZA
            </div>
            <div className="text-[9px] text-primary/60 dark:text-white/50 font-semibold tracking-[0.25em] mt-1 transition-colors duration-300">
              PUCALLPA
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1.5 relative z-10">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {(link.hasDropdown || link.hasMega || link.hasAboutMega || link.hasSimpleDropdown) ? (
                <button
                  className={`px-3.5 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    location.pathname.startsWith(link.path) && link.path !== '/'
                      ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                      : location.pathname === link.path
                      ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                      : 'text-slate-text dark:text-white/85 hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                      : 'text-slate-text dark:text-white/85 hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown Menu for Careers */}
              {link.hasDropdown && (
                <div className={`absolute top-full left-0 w-96 opacity-0 invisible translate-y-2 transition-all duration-200 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0' : ''}`}>
                  <div className="dropdown-theme p-4">
                    <div className="grid grid-cols-1 gap-1.5 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      {t.careers.items.map((career) => (
                        <div
                          key={career.id}
                          className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-primary/[0.05] transition-all duration-200"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-[13px] text-slate-text dark:text-white group-hover/item:text-primary transition-colors duration-200">
                              {career.name}
                            </div>
                            <div className="text-[11px] text-slate-text/50 dark:text-dark-text/50 mt-1 line-clamp-2 leading-relaxed transition-colors duration-200">
                              {career.desc}
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                              <span className="text-[11px] font-bold text-amber-500">{career.employabilityRate}%</span>
                              <span className="text-[10px] text-slate-text/40 dark:text-dark-text/40 transition-colors duration-200">Empleabilidad</span>
                            </div>
                          </div>
                          <button
                            onClick={() => navigate(`/careers/${career.id}`)}
                            className="flex-shrink-0 px-3 py-2 bg-gradient-to-b from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark text-white text-[11px] font-bold rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-primary/20 active:scale-95 flex items-center gap-1 whitespace-nowrap group-hover/item:shadow-lg group-hover/item:shadow-primary/25"
                          >
                            Leer más
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-primary/[0.06] dark:border-white/[0.06]">
                      <Link
                        to="/careers"
                        className="block px-3 py-2 text-center text-[11px] font-bold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-200"
                      >
                        Ver todos los programas →
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Mega Menu for About Us */}
              {link.hasAboutMega && (
                <AboutMegaMenu t={t} forceClose={forceClose} />
              )}

              {/* Mega Menu for Admission */}
              {link.hasMega && (
                <div className={`absolute top-full left-0 w-[820px] opacity-0 invisible translate-y-2 transition-all duration-200 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0' : ''}`}>
                  <div className="dropdown-theme p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-1 border-r border-primary/[0.06] dark:border-white/[0.06] pr-4">
                        <p className="text-[10px] font-bold text-primary/50 dark:text-secondary/50 uppercase tracking-[0.15em] mb-4 transition-colors duration-200">Modalidades de admisión</p>
                        <ul className="space-y-2.5">
                          <li className="font-semibold text-[13px] text-slate-text dark:text-white cursor-pointer hover:text-primary transition-colors duration-200">Egresados de colegio</li>
                          <li className="font-semibold text-[13px] text-slate-text dark:text-white cursor-pointer hover:text-primary transition-colors duration-200">Traslados externos</li>
                          <li className="font-semibold text-[13px] text-slate-text dark:text-white cursor-pointer hover:text-primary transition-colors duration-200">Experiencia laboral</li>
                        </ul>
                      </div>
                      <div className="col-span-1 space-y-3">
                        <div>
                          <h4 className="font-bold text-[13px] text-slate-text dark:text-white transition-colors duration-200">Traslado</h4>
                          <p className="text-[12px] text-slate-text/60 dark:text-dark-text/60 mt-1 leading-relaxed transition-colors duration-200">Tienes títulos de institutos o carreras inconclusas. Completa tus estudios en IESTP Suiza con reconocimiento nacional.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[13px] text-slate-text dark:text-white transition-colors duration-200">Otros programas</h4>
                          <p className="text-[12px] text-slate-text/60 dark:text-dark-text/60 mt-1 leading-relaxed transition-colors duration-200">Explora nuestros 11 programas licenciados con alta demanda laboral y prácticas profesionales en la región.</p>
                        </div>
                      </div>
                      <div className="col-span-1 flex flex-col justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <img src={LogoSuiza} alt="Logo" className="w-20 h-20 rounded-lg object-contain shrink-0 ring-1 ring-primary/[0.10] dark:ring-white/[0.10]" />
                        </div>
                        <div className="space-y-2">
                          <button onClick={() => { navigate('/admission'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-b from-primary to-primary-dark text-white font-bold text-[13px] hover:shadow-md hover:shadow-primary/20 transition-all duration-200">Admisión 2026 <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/contact'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-primary/[0.12] text-primary font-bold text-[13px] hover:bg-primary/[0.05] transition-all duration-200">Contactenos <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/careers'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-primary/[0.12] text-primary font-bold text-[13px] hover:bg-primary/[0.05] transition-all duration-200">Ver programas <ArrowRight className="w-4 h-4"/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Simple Dropdown for Transparency, Procedures, Services */}
              {link.hasSimpleDropdown && (
                <div className={`absolute top-full left-0 w-64 opacity-0 invisible translate-y-2 transition-all duration-200 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0' : ''}`}>
                  <div className="dropdown-theme p-2.5">
                    <div className="flex flex-col gap-0.5 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      {t[link.menuKey]?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="px-3 py-2 rounded-lg text-[12px] font-medium text-slate-text dark:text-white hover:text-primary hover:bg-primary/[0.05] transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Controls (Lang, Dark Mode, Mobile Menu Button) */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="flex bg-primary/[0.06] dark:bg-white/[0.08] p-1 rounded-xl transition-colors duration-200">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                  lang === l.code
                    ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-sm shadow-primary/20 dark:shadow-white/15'
                    : 'text-slate-text/60 dark:text-white/55 hover:text-primary dark:hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] text-slate-text/50 dark:text-white/50 hover:text-primary dark:hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] text-slate-text/50 dark:text-white/50 hover:text-primary dark:hover:text-white transition-all duration-200 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-4 right-4 z-50 dropdown-theme shadow-[var(--shadow-navbar-dropdown)] p-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto dropdown-enter">
          {navLinks.map((link) => (
            <div key={link.path}>
              {link.hasDropdown ? (
                <div>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 block ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                        : 'text-slate-text dark:text-white hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20 dark:border-white/15">
                    {t.careers.items.map((career) => (
                      <button
                        key={career.id}
                        onClick={() => {
                          navigate(`/careers/${career.id}`);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 group"
                      >
                        <div className="font-semibold text-[12px] text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                          {career.name}
                        </div>
                        <div className="text-[10px] text-slate-text/50 dark:text-white/45 mt-0.5 transition-colors duration-200">
                          {career.employabilityRate}% Empleabilidad
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : link.hasAboutMega ? (
                <AboutMegaMenu t={t} isMobile onItemClick={() => setIsOpen(false)} />
              ) : link.hasSimpleDropdown ? (
                <div>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 block ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                        : 'text-slate-text dark:text-white hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  <div className="mt-2 space-y-0.5 pl-4 border-l-2 border-primary/20 dark:border-white/15">
                    {t[link.menuKey]?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 block text-[12px] font-medium text-slate-text dark:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.hasMega ? (
                <div>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 block ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                        : 'text-slate-text dark:text-white hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  <div className="mt-2 space-y-0.5 pl-4 border-l-2 border-primary/20 dark:border-white/15">
                    <Link to="/admission" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 block text-[12px] font-medium text-slate-text dark:text-white">Admisión 2026</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 block text-[12px] font-medium text-slate-text dark:text-white">Contactenos</Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 block text-[12px] font-medium text-slate-text dark:text-white">Ver programas</Link>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 block ${
                    location.pathname === link.path
                      ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-[0_2px_8px_rgba(0,68,178,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]'
                      : 'text-slate-text dark:text-white hover:bg-primary/[0.06] dark:hover:bg-white/[0.10] hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
