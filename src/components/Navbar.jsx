import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import AboutMegaMenu from './AboutMegaMenu';
import CareersMegaMenu from './CareersMegaMenu';

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/careers', label: t.nav.careers, hasCareersMega: true },
    { path: '/admission', label: t.nav.admission, hasMega: true },
    { path: '/about', label: t.nav.about, hasAboutMega: true },
    { path: '/news', label: t.nav.news },
    { path: '/contact', label: t.nav.contact }
  ];

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' },
    { code: 'sh', label: 'SHB' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      {/* Contact info bar above Navbar */}
      <div className="max-w-7xl mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs border-b border-primary/10 dark:border-white/8 text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">
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
      <div className="max-w-7xl mx-auto rounded-2xl glassmorphism navbar-premium px-4 py-3 md:px-6 flex justify-between items-center transition-all duration-300">
        
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300">
            <img src={LogoSuiza} alt="Logo Suiza" className="w-20 h-20" />
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
              {link.hasCareersMega ? (
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isOpen && location.pathname === link.path
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : link.hasMega ? (
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isOpen && location.pathname === link.path
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : link.hasAboutMega ? (
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    location.pathname === link.path
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

              {/* Mega Menu for Careers */}
              {link.hasCareersMega && (
                <CareersMegaMenu t={t} />
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
                      {/* Left column - categories list */}
                      <div className="col-span-1 border-r border-primary/10 dark:border-white/10 pr-4">
                        <p className="text-xs font-bold text-primary dark:text-secondary uppercase mb-4 transition-colors duration-300">{t.admissionDropdown.title}</p>
                        <ul className="space-y-3">
                          {(t.admissionDropdown.modalities || []).map((mod, i) => (
                            <li key={i} className="font-semibold text-sm text-slate-text dark:text-white cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors duration-300">{mod}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Middle column - info blocks */}
                      <div className="col-span-1 space-y-3">
                        <div>
                          <h4 className="font-bold text-slate-text dark:text-white transition-colors duration-300">{t.admissionDropdown.transfer.title}</h4>
                          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">{t.admissionDropdown.transfer.desc}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-text dark:text-white transition-colors duration-300">{t.admissionDropdown.otherPrograms.title}</h4>
                          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 transition-colors duration-300">{t.admissionDropdown.otherPrograms.desc}</p>
                        </div>
                      </div>

                      {/* Right column - CTA */}
                      <div className="col-span-1 flex flex-col justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <img src={LogoSuiza} alt="Logo" className="w-20 h-20 rounded-md object-cover" />
                        </div>
                        <div className="space-y-2">
                          <button onClick={() => { navigate('/admission'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-all duration-300">{t.admissionDropdown.ctaAdmission} <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/contact'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300">{t.admissionDropdown.ctaContact} <ArrowRight className="w-4 h-4"/></button>
                          <button onClick={() => { navigate('/careers'); }} className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300">{t.admissionDropdown.ctaPrograms} <ArrowRight className="w-4 h-4"/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Controls (Lang, Dark Mode, Mobile Menu Button) */}
        <div className="flex items-center gap-3">
          {/* Language Selector Segmented Control */}
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

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-light dark:bg-dark-hover hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-all duration-300 cursor-pointer"
            aria-label={t.common.toggleTheme}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
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
              {link.hasCareersMega ? (
                <div>
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
                  <CareersMegaMenu t={t} isMobile onItemClick={() => setIsOpen(false)} />
                </div>
              ) : link.hasAboutMega ? (
                <AboutMegaMenu t={t} isMobile onItemClick={() => setIsOpen(false)} />
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
