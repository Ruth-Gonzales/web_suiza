import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, ChevronRight, Building2 } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const megaRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const handleInstituteEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleInstituteLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  };

  const handleBannerEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleBannerLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const instituteLinks = [
    { path: '/about', label: t.instituteMenu.about },
    { path: '/news', label: t.instituteMenu.news },
    { path: '/contact', label: t.instituteMenu.contact }
  ];

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/careers', label: t.nav.careers },
    { path: '/admission', label: t.nav.admission },
    { path: '/about', label: t.nav.about },
    { path: '/news', label: t.nav.news },
    { path: '/contact', label: t.nav.contact }
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
      <div className="max-w-7xl mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs border-b border-primary/10 text-slate-text/70 dark:text-dark-text/70">
        <div className="flex gap-4 items-center">
          <span>📞 061-280665</span>
          <span className="hidden sm:inline">✉️ suiza@iestpsuiza.edu.pe</span>
          <span className="hidden md:inline">📍 Carretera Federico Basadre Km 5.700, Pucallpa</span>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Globe className="w-3.5 h-3.5" />
          <span>IESTP SUIZA - Ucayali</span>
        </div>
      </div>

      {/* Main glassmorphism nav bar */}
      <div className="max-w-7xl mx-auto rounded-2xl glassmorphism dark:glassmorphism-dark shadow-[0_8px_32px_0_rgba(75,122,244,0.08)] px-4 py-3 md:px-6 flex justify-between items-center transition-all duration-300">
        
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-xl  shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300">
            {/* Vanguardist geometric representation of the Swiss gear logo */}
            {/* <GraduationCap className="w-6 h-6 animate-pulse" /> */}
            <img src={LogoSuiza} alt="Logo Suiza" className="w-20 h-20" />
            <div className="absolute -inset-0.5 rounded-xl border border-white/30 animate-ping opacity-25 pointer-events-none"></div>
          </div>
          <div>
            <div className="font-bold text-base leading-none text-slate-text dark:text-white tracking-tight group-hover:text-primary transition-colors">
              IESTP SUIZA
            </div>
            <div className="text-[10px] text-primary dark:text-secondary font-medium tracking-widest mt-0.5">
              PUCALLPA
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-6 bg-slate-text/15 dark:bg-dark-text/15 mx-1" />
          <button
            onClick={() => setMegaOpen(!megaOpen)}
            onMouseEnter={handleInstituteEnter}
            onMouseLeave={handleInstituteLeave}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              megaOpen
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            {t.nav.institute}
            <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${megaOpen ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Action Controls (Lang, Dark Mode, Mobile Menu Button) */}
        <div className="flex items-center gap-3">
          {/* Language Selector Segmented Control */}
          <div className="flex bg-slate-light dark:bg-dark-border/50 p-1 rounded-xl">
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
            className="p-2.5 rounded-xl bg-slate-light dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-light dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text transition-all duration-300 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Banner */}
      {megaOpen && (
        <div
          ref={megaRef}
          onMouseEnter={handleBannerEnter}
          onMouseLeave={handleBannerLeave}
          className="absolute left-0 right-0 top-full mt-1 z-40 px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto rounded-2xl glassmorphism dark:glassmorphism-dark shadow-2xl border border-white/20 dark:border-white/5 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
              <img
                src="/campus.jpg"
                alt="Campus IESTP Suiza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-xs font-semibold bg-primary/70 px-3 py-1 rounded-full backdrop-blur-sm">
                  IESTP SUIZA
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  {t.instituteMenu.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {instituteLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => { setMegaOpen(false); setIsOpen(false); }}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-slate-light dark:bg-dark-border/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-text dark:text-dark-text group-hover:text-primary dark:group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => { setMegaOpen(false); setIsOpen(false); }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 group"
              >
                {t.instituteMenu.cta}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-4 right-4 z-50 rounded-2xl glassmorphism dark:glassmorphism-dark shadow-2xl p-4 flex flex-col gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-slate-text/15 dark:bg-dark-text/15 mx-2 my-1" />
          <button
            onClick={() => setMegaOpen(!megaOpen)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              megaOpen
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {t.nav.institute}
            </span>
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? 'rotate-90' : ''}`} />
          </button>
          {megaOpen && (
            <div className="pl-2 flex flex-col gap-1 animate-in fade-in slide-in-from-left-2 duration-200">
              {instituteLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => { setIsOpen(false); setMegaOpen(false); }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-text dark:text-dark-text hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about"
                onClick={() => { setIsOpen(false); setMegaOpen(false); }}
                className="mt-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 text-sm"
              >
                {t.instituteMenu.cta}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
