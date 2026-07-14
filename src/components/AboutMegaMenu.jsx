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
      <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/[0.12]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium text-slate-text dark:text-dark-text hover:bg-primary/[0.06] dark:hover:bg-primary/[0.08] hover:text-primary dark:hover:text-secondary transition-all duration-200"
        >
          <span>{t.nav.about}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="space-y-0.5 pb-2 animate-fade-slide-in">
            {allItems.map((item, idx) => {
              const Icon = item.icon;
              const route = idx < 4 ? col1Routes[idx] : col2Routes[idx - 4];
              return (
                <Link
                  key={idx}
                  to={route}
                  onClick={onItemClick}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/[0.05] dark:hover:bg-primary/[0.08] transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.08] dark:bg-primary/[0.12] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200">
                    <Icon className="w-4 h-4 text-primary dark:text-secondary transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="font-semibold text-[12px] text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-text/50 dark:text-dark-text/50 mt-0.5 leading-tight transition-colors duration-200">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-primary/[0.06] dark:border-white/[0.06]">
              <Link
                to="/about"
                onClick={onItemClick}
                className="flex items-center gap-2 px-3 py-2 text-[11px] font-bold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-200"
              >
                {col3.cta || 'Conócenos'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[860px] opacity-0 invisible translate-y-2 transition-all duration-200 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0' : ''}`}>
      <div className="dropdown-theme p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-primary/50 dark:text-secondary/50 uppercase tracking-[0.15em] mb-3 pl-3 transition-colors duration-200">
              INSTITUCIÓN
            </p>
            {col1.map((item, idx) => {
              const Icon = col1Icons[idx];
              return (
                <Link
                  key={idx}
                  to={col1Routes[idx] || '/about'}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/[0.05] dark:hover:bg-primary/[0.08] transition-all duration-200 group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/[0.08] dark:bg-primary/[0.12] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-white dark:group-hover/item:bg-secondary dark:group-hover/item:text-dark-bg transition-all duration-200">
                    <Icon className="w-4 h-4 text-primary dark:text-secondary group-hover/item:text-white dark:group-hover/item:text-dark-bg transition-colors duration-200" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[13px] text-slate-text dark:text-white group-hover/item:text-primary dark:group-hover/item:text-secondary transition-colors duration-200">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-text/45 dark:text-dark-text/45 mt-0.5 leading-snug line-clamp-2 transition-colors duration-200">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-1 border-x border-primary/[0.05] dark:border-white/[0.06] px-5 transition-colors duration-200">
            <p className="text-[10px] font-bold text-primary/50 dark:text-secondary/50 uppercase tracking-[0.15em] mb-3 pl-3 transition-colors duration-200">
              GESTIÓN
            </p>
            {col2.map((item, idx) => {
              const Icon = col2Icons[idx];
              return (
                <Link
                  key={idx}
                  to={col2Routes[idx] || '/about'}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/[0.05] dark:hover:bg-primary/[0.08] transition-all duration-200 group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/[0.08] dark:bg-primary/[0.12] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-white dark:group-hover/item:bg-secondary dark:group-hover/item:text-dark-bg transition-all duration-200">
                    <Icon className="w-4 h-4 text-primary dark:text-secondary group-hover/item:text-white dark:group-hover/item:text-dark-bg transition-colors duration-200" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[13px] text-slate-text dark:text-white group-hover/item:text-primary dark:group-hover/item:text-secondary transition-colors duration-200">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-text/45 dark:text-dark-text/45 mt-0.5 leading-snug line-clamp-2 transition-colors duration-200">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Column 3 - Brand card */}
          <div className="flex flex-col">
            <div className="relative rounded-xl bg-gradient-to-br from-primary/[0.06] via-primary/[0.03] to-blue-50/50 dark:from-primary/[0.10] dark:via-dark-card dark:to-dark-surface border border-primary/[0.05] dark:border-white/[0.06] p-5 flex flex-col items-center text-center h-full overflow-hidden transition-all duration-200">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/[0.08] dark:bg-primary/[0.12] rounded-full blur-2xl transition-all duration-200" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-secondary/[0.06] dark:bg-secondary/[0.08] rounded-full blur-2xl transition-all duration-200" />
              
              <div className="relative z-10 flex flex-col items-center gap-3 h-full">
                <div className="w-24 h-24 rounded-xl bg-white dark:bg-dark-surface shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.20)] p-2 flex items-center justify-center ring-1 ring-primary/[0.08] dark:ring-white/[0.08] transition-all duration-200">
                  <img src={LogoSuiza} alt="IESTP Suiza" className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/[0.08] dark:bg-primary/[0.12] text-primary dark:text-secondary text-[10px] font-bold tracking-wider mx-auto transition-colors duration-200">
                    <Sparkles className="w-3 h-3" />
                    {col3.tagline || 'Instituto de Excelencia Tecnológica'}
                  </div>
                  
                  <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50 leading-relaxed transition-colors duration-200">
                    {col3.description}
                  </p>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-b from-primary to-primary-dark text-white text-[12px] font-bold transition-all duration-200 hover:shadow-[var(--shadow-pill-active)] active:scale-95 w-full justify-center group/cta"
                >
                  {col3.cta || 'Conócenos'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-3 border-t border-primary/[0.05] dark:border-white/[0.06] flex items-center justify-between px-1 transition-colors duration-200">
          <p className="text-[10px] text-slate-text/35 dark:text-dark-text/35 transition-colors duration-200">
            IESTP Suiza — Pucallpa, Ucayali
          </p>
          <Link
            to="/about"
            className="text-[10px] font-semibold text-primary hover:text-primary-dark dark:hover:text-secondary transition-colors duration-200"
          >
            Ver página completa →
          </Link>
        </div>
      </div>
    </div>
  );
}
