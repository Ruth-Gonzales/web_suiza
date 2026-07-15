import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, MessageSquareText, Target, History,
  GraduationCap, Building2, Share2, Users,
  ChevronDown, ArrowRight, Sparkles
} from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';

const col1Icons = [FileText, MessageSquareText, Target, History];
const col2Icons = [GraduationCap, Building2, Share2, Users];

const col1Routes = ['/about/presentacion', '/about/director', '/about/vision-mision', '/about/historia'];
const col2Routes = ['/about/gestion-academica', '/about/gestion-administrativa', '/about/organigrama', '/about/docentes'];

export default function AboutMegaMenu({ t, isMobile, onItemClick, forceClose = false }) {
  const [open, setOpen] = useState(false);
  const col1 = t.aboutMenu?.col1 || [];
  const col2 = t.aboutMenu?.col2 || [];
  const col3 = t.aboutMenu?.col3 || {};

  const allItems = [
    ...col1.map((item, i) => ({ ...item, icon: col1Icons[i] })),
    ...col2.map((item, i) => ({ ...item, icon: col2Icons[i] }))
  ];

  if (isMobile) {
    return (
      <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-text dark:text-dark-text hover:bg-primary/5 dark:hover:bg-dark-hover transition-all duration-300"
        >
          <span>{t.nav.about}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="space-y-1 pb-2 animate-fade-slide-in">
            {allItems.map((item, idx) => {
              const Icon = item.icon;
              const route = idx < 4 ? col1Routes[idx] : col2Routes[idx - 4];
              return (
                <Link
                  key={idx}
                  to={route}
                  onClick={onItemClick}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/8 dark:hover:bg-primary/15 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-4 h-4 text-primary dark:text-secondary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-text/60 dark:text-dark-text-secondary/70 mt-0.5 leading-tight transition-colors duration-300">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-primary/10 dark:border-white/10">
              <Link
                to="/about"
                onClick={onItemClick}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-300"
              >
                {col3.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[860px] max-w-[calc(100vw-2rem)] opacity-0 invisible translate-y-2 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0' : ''}`}>
      <div className="dropdown-theme p-6 about-mega-dark">
        <div className="grid grid-cols-3 gap-5">
          {/* Column 1 */}
          <div className="space-y-1.5 about-mega-col about-mega-col-first">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-3 pl-3 transition-colors duration-300 about-mega-title-text">
              {t.megaMenu.about.institution}
            </p>
            {col1.map((item, idx) => {
              const Icon = col1Icons[idx];
              return (
                <Link
                  key={idx}
                  to={col1Routes[idx] || '/about'}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/item about-mega-item"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 about-mega-icon">
                    <Icon className="w-4 h-4 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm transition-colors duration-300 about-mega-text-primary">
                      {item.title}
                    </div>
                    <div className="text-[11px] mt-0.5 leading-snug line-clamp-2 transition-colors duration-300 about-mega-text-secondary">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-1.5 about-mega-col about-mega-col-border px-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-3 pl-3 transition-colors duration-300 about-mega-title-text">
              {t.megaMenu.about.management}
            </p>
            {col2.map((item, idx) => {
              const Icon = col2Icons[idx];
              return (
                <Link
                  key={idx}
                  to={col2Routes[idx] || '/about'}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/item about-mega-item"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 about-mega-icon">
                    <Icon className="w-4 h-4 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm transition-colors duration-300 about-mega-text-primary">
                      {item.title}
                    </div>
                    <div className="text-[11px] mt-0.5 leading-snug line-clamp-2 transition-colors duration-300 about-mega-text-secondary">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Column 3 - Brand card */}
          <div className="flex flex-col">
            <div className="relative rounded-xl p-5 flex flex-col items-center text-center h-full overflow-hidden transition-all duration-300 about-mega-brand">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/8 rounded-full blur-2xl transition-all duration-300" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-primary/5 rounded-full blur-2xl transition-all duration-300" />
              
              <div className="relative z-10 flex flex-col items-center gap-3 h-full">
                <div className="w-24 h-24 rounded-xl p-2 flex items-center justify-center transition-all duration-300 about-mega-logo">
                  <img src={LogoSuiza} alt="IESTP Suiza" className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mx-auto transition-colors duration-300 about-mega-tagline">
                    <Sparkles className="w-3 h-3" />
                    {col3.tagline}
                  </div>
                  
                  <p className="text-[11px] leading-relaxed transition-colors duration-300 about-mega-text-secondary">
                    {col3.description}
                  </p>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-xs font-bold transition-all duration-300 hover:shadow-lg active:scale-95 w-full justify-center group/cta about-mega-cta"
                >
                  {col3.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider + bar */}
        <div className="about-mega-divider-line mt-4" />
        <div className="px-1 py-3.5 flex items-center justify-between transition-colors duration-300">
          <p className="text-[10px] transition-colors duration-300 about-mega-text-secondary">
            {t.megaMenu.about.location}
          </p>
          <Link
            to="/about"
            className="text-[10px] font-semibold text-primary transition-all duration-250 about-mega-link-bottom"
          >
            {t.megaMenu.about.viewFull}
          </Link>
        </div>
      </div>
    </div>
  );
}
