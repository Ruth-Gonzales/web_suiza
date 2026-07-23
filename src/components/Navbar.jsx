import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import AboutMegaMenu from './AboutMegaMenu';
import CareersMegaMenu from './CareersMegaMenu';

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
    { path: '/careers', label: t.nav.careers, hasCareersMega: true },
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

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      {/* Contact info bar above Navbar */}
      <div className="max-w-[1440px] w-full mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs navbar-amazon-identity-contact rounded-xl transition-colors duration-300">
        <div className="flex gap-4 items-center">
          <a href="tel:061-280665" className="inline-flex items-center gap-1.5 hover:text-primary dark:hover:text-secondary transition-colors duration-250">
            <Phone className="w-3 h-3 text-primary/50 dark:text-white/40" />
            <span className="hidden xs:inline text-slate-text/70 dark:text-white/65">061-280665</span>
          </a>
          <a href="mailto:suiza@iestpsuiza.edu.pe" className="hidden sm:inline-flex items-center gap-1.5 hover:text-primary dark:hover:text-secondary transition-colors duration-250">
            <Mail className="w-3 h-3 text-primary/50 dark:text-white/40" />
            <span className="text-slate-text/70 dark:text-white/65">suiza@iestpsuiza.edu.pe</span>
          </a>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-primary/50 dark:text-white/40" />
            <span className="text-slate-text/70 dark:text-white/65">Carretera Federico Basadre Km 5.700, Pucallpa</span>
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Globe className="w-3.5 h-3.5 text-primary/40 dark:text-white/35" />
          <span className="text-slate-text/60 dark:text-white/55 font-medium">IESTP SUIZA - Ucayali</span>
        </div>
      </div>

      {/* Main nav bar — Identidad Amazónica Contemporánea */}
      <div className="max-w-[1440px] w-full mx-auto rounded-2xl navbar-amazon-identity shadow-[0_2px_12px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.40),0_1px_4px_rgba(0,0,0,0.30)] px-4 py-3 md:px-6 flex justify-between items-center transition-all duration-300 gap-4 relative">
        
        <Link to="/" className="flex items-center gap-2.5 group shrink-0 relative z-10">
          <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl ring-1 ring-primary/10 dark:ring-white/15 group-hover:ring-primary/20 dark:group-hover:ring-white/25 group-hover:scale-[1.02] transition-all duration-300 shrink-0 overflow-hidden">
            <img src={LogoSuiza} alt="Logo Suiza" className="w-10 h-10 md:w-11 md:h-11 object-contain shrink-0" />
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
              {(link.hasCareersMega || link.hasMega || link.hasAboutMega || link.hasSimpleDropdown) ? (
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
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-250" />
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

              {/* Mega Menu for Careers */}
              {link.hasCareersMega && (
                <CareersMegaMenu t={t} />
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
                      <div className="col-span-1 border-r border-primary/10 dark:border-white/10 pr-4">
                        <p className="text-xs font-bold text-primary dark:text-secondary uppercase mb-4 transition-colors duration-300">{t.admissionDropdown?.title || 'Modalidades de admisión'}</p>
                        <ul className="space-y-3">
                          {(t.admissionDropdown?.modalities || ['Egresados de colegio', 'Traslados externos', 'Experiencia laboral']).map((mod, i) => (
                            <li key={i} className="font-semibold text-sm text-slate-text dark:text-white cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors duration-300">{mod}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-1 space-y-3">
                        <div>
                          <h4 className="font-bold text-slate-text dark:text-white transition-colors duration-300">{t.admissionDropdown?.transfer?.title || 'Traslado'}</h4>
                          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">{t.admissionDropdown?.transfer?.desc || 'Convalidación y homologación de cursos.'}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-text dark:text-white transition-colors duration-300">{t.admissionDropdown?.otherPrograms?.title || 'Otros programas'}</h4>
                          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">{t.admissionDropdown?.otherPrograms?.desc || '11 carreras técnicas de alto nivel.'}</p>
                        </div>
                      </div>
                      <div className="col-span-1 flex flex-col justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <img src={LogoSuiza} alt="Logo" className="w-16 h-16 rounded-lg object-contain shrink-0 ring-1 ring-primary/[0.10] dark:ring-white/[0.10]" />
                        </div>
                        <div className="space-y-2">
                          <button onClick={() => { navigate('/admission'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-all duration-300">{t.admissionDropdown?.ctaAdmission || 'Admisión 2026'} <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/contact'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-primary text-primary font-bold text-xs hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300">{t.admissionDropdown?.ctaContact || 'Contáctanos'} <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/careers'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-primary text-primary font-bold text-xs hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300">{t.admissionDropdown?.ctaPrograms || 'Ver programas'} <ArrowRight className="w-4 h-4"/></button>
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
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
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
              {link.hasCareersMega ? (
                <CareersMegaMenu t={t} isMobile onItemClick={() => setIsOpen(false)} />
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
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 block text-[12px] font-medium text-slate-text dark:text-white">Contáctanos</Link>
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
