import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, GraduationCap, ChevronDown, ArrowRight } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import AboutMegaMenu from './AboutMegaMenu';

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className="max-w-7xl w-full mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs border-b border-primary/10 dark:border-white/8 text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">
        <div className="flex gap-4 items-center">
          <span className="inline-flex items-center gap-1">📞 <span className="hidden xs:inline">061-280665</span></span>
          <span className="hidden sm:inline-flex items-center gap-1">✉️ suiza@iestpsuiza.edu.pe</span>
          <span className="hidden md:inline-flex items-center gap-1">📍 Carretera Federico Basadre Km 5.700, Pucallpa</span>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Globe className="w-3.5 h-3.5 transition-colors duration-300" />
          <span className="transition-colors duration-300">IESTP SUIZA - Ucayali</span>
        </div>
      </div>

      {/* Main glassmorphism nav bar */}
      <div className="max-w-7xl w-full mx-auto rounded-2xl glassmorphism navbar-premium px-4 py-3 md:px-6 flex justify-between items-center transition-all duration-300">
        
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300 shrink-0">
            <img src={LogoSuiza} alt="Logo Suiza" className="w-20 h-20 object-contain shrink-0" />
            <div className="absolute -inset-0.5 rounded-xl border border-white/30 animate-ping opacity-25 pointer-events-none"></div>
          </div>
          <div>
            <div className="font-bold text-base leading-none text-slate-text dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300">
              IESTP SUIZA
            </div>
            <div className="text-[10px] text-primary dark:text-secondary font-medium tracking-widest mt-0.5 transition-colors duration-300">
              PUCALLPA
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1.5 relative">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {(link.hasDropdown || link.hasMega || link.hasAboutMega || link.hasSimpleDropdown) ? (
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    location.pathname.startsWith(link.path) && link.path !== '/'
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : location.pathname === link.path
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown Menu for Careers */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3">
                  <div className="dropdown-theme p-4">
                    <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      {t.careers.items.map((career) => (
                        <div
                          key={career.id}
                          className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-slate-text dark:text-white group-hover/item:text-primary dark:group-hover/item:text-secondary transition-colors duration-300">
                              {career.name}
                            </div>
                            <div className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-1 line-clamp-2 transition-colors duration-300">
                              {career.desc}
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                              <span className="text-xs font-semibold text-amber-500">{career.employabilityRate}%</span>
                              <span className="text-[10px] text-slate-text/50 dark:text-dark-text/50 transition-colors duration-300">Empleabilidad</span>
                            </div>
                          </div>
                          <button
                            onClick={() => navigate(`/careers/${career.id}`)}
                            className="flex-shrink-0 px-3 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 whitespace-nowrap group-hover/item:shadow-lg group-hover/item:shadow-primary/30"
                          >
                            Leer más
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/careers"
                      className="mt-3 pt-3 border-t border-primary/10 dark:border-white/10 block px-3 py-2 text-center text-xs font-bold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-300"
                    >
                      Ver todos los programas →
                    </Link>
                  </div>
                </div>
              )}

              {/* Mega Menu for About Us */}
              {link.hasAboutMega && (
                <AboutMegaMenu t={t} />
              )}

              {/* Mega Menu for Admission */}
              {link.hasMega && (
                <div className="absolute top-full left-0 w-[820px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3">
                  <div className="dropdown-theme p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-1 border-r border-primary/10 dark:border-white/10 pr-4">
                        <p className="text-xs font-bold text-primary dark:text-secondary uppercase mb-4 transition-colors duration-300">Modalidades de admisión</p>
                        <ul className="space-y-3">
                          <li className="font-semibold text-sm text-slate-text dark:text-white cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors duration-300">Egresados de colegio</li>
                          <li className="font-semibold text-sm text-slate-text dark:text-white cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors duration-300">Traslados externos</li>
                          <li className="font-semibold text-sm text-slate-text dark:text-white cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors duration-300">Experiencia laboral</li>
                        </ul>
                      </div>
                      <div className="col-span-1 space-y-3">
                        <div>
                          <h4 className="font-bold text-slate-text dark:text-white transition-colors duration-300">Traslado</h4>
                          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">Tienes títulos de institutos o carreras inconclusas. Completa tus estudios en IESTP Suiza con reconocimiento nacional.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-text dark:text-white transition-colors duration-300">Otros programas</h4>
                          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">Explora nuestros 11 programas licenciados con alta demanda laboral y prácticas profesionales en la región.</p>
                        </div>
                      </div>
                      <div className="col-span-1 flex flex-col justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <img src={LogoSuiza} alt="Logo" className="w-20 h-20 rounded-md object-contain shrink-0" />
                        </div>
                        <div className="space-y-2">
                          <button onClick={() => { navigate('/admission'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-all duration-300">Admisión 2026 <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/contact'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300">Contactenos <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/careers'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300">Ver programas <ArrowRight className="w-4 h-4"/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Simple Dropdown for Transparency, Procedures, Services */}
              {link.hasSimpleDropdown && (
                <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3">
                  <div className="dropdown-theme p-3">
                    <div className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      {t[link.menuKey]?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-text dark:text-white hover:text-primary dark:hover:text-secondary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200"
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
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-light dark:bg-dark-hover p-1 rounded-xl transition-colors duration-300">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 ${
                  lang === l.code
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-light dark:bg-dark-hover hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-light dark:bg-dark-hover hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text transition-all duration-300 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-4 right-4 z-50 dropdown-theme shadow-2xl p-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto dropdown-enter">
          {navLinks.map((link) => (
            <div key={link.path}>
              {link.hasDropdown ? (
                <div>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  <div className="mt-2 space-y-2 pl-4 border-l-2 border-primary/20">
                    {t.careers.items.map((career) => (
                      <button
                        key={career.id}
                        onClick={() => {
                          navigate(`/careers/${career.id}`);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 group"
                      >
                        <div className="font-semibold text-xs text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                          {career.name}
                        </div>
                        <div className="text-[10px] text-slate-text/60 dark:text-dark-text/60 mt-0.5 transition-colors duration-300">
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
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
                    {t[link.menuKey]?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 block text-xs font-semibold text-slate-text dark:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.hasMega ? (
                <div>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
                    <Link to="/admission" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 block text-xs font-semibold text-slate-text dark:text-white">Admisión 2026</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 block text-xs font-semibold text-slate-text dark:text-white">Contactenos</Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 block text-xs font-semibold text-slate-text dark:text-white">Ver programas</Link>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block ${
                    location.pathname === link.path
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
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
