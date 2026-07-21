import { Share2, Building2, Users, ChevronRight, GraduationCap, Settings, ClipboardList } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const levelIcons = { Building2, Settings, GraduationCap, ClipboardList };

const defaultOrgLevels = [];

export default function Organigrama({ t }) {
  const data = t.aboutMenu?.col2?.[2] || {};

  return (
    <AboutPageShell
      t={t}
      title={data.title}
      breadcrumb={data.title}
    >
      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Share2 className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">{t.aboutPage.organigrama.introTitle}</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              {t.aboutPage.organigrama.introDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Organigrama visual */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        {defaultOrgLevels.map((level, idx) => {
          const Icon = levelIcons[level.icon] || Building2;
          const isTop = level.level === 0;
          return (
            <div key={idx} className="mb-6 last:mb-0">
              {/* Level header */}
              <div className={`flex items-center gap-2 mb-3 ${isTop ? 'justify-center' : ''}`}>
                {!isTop && <ChevronRight className="w-4 h-4 text-primary/40 dark:text-secondary/40" />}
                <div className={`flex items-center gap-2 ${isTop ? 'bg-primary/10 dark:bg-primary/20 px-5 py-2 rounded-full' : ''}`}>
                  <Icon className={`${isTop ? 'w-5 h-5' : 'w-4 h-4'} text-primary dark:text-secondary`} />
                  <span className={`font-bold ${isTop ? 'text-base' : 'text-xs text-primary/60 dark:text-secondary/60 uppercase tracking-wider'}`}>
                    {level.title}
                  </span>
                </div>
              </div>
              {/* Items */}
              <div className={`grid gap-3 ${isTop ? 'grid-cols-1 max-w-xs mx-auto' : 'grid-cols-1 sm:grid-cols-3'}`}>
                {level.items.map((item, iidx) => (
                  <div key={iidx} className={`rounded-xl border border-primary/10 dark:border-white/8 p-4 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                    isTop
                      ? 'bg-primary/10 dark:bg-primary/20 border-primary/20 dark:border-primary/30'
                      : 'bg-white dark:bg-dark-card'
                  }`}>
                    <p className={`font-semibold text-sm ${isTop ? 'text-primary dark:text-secondary' : 'text-slate-text dark:text-white'}`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              {/* Connector line */}
              {idx < defaultOrgLevels.length - 1 && (
                <div className="flex justify-center my-3">
                  <div className="w-px h-6 bg-primary/20 dark:bg-primary/30" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="rounded-[2rem] bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="font-bold text-slate-text dark:text-white mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary dark:text-secondary" />
          {t.aboutPage.organigrama.governmentTitle}
        </h3>
        <div className="space-y-3">
          {(t.aboutPage.organigrama.government).map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-dark-card border border-primary/5 dark:border-white/5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary dark:text-secondary">{idx + 1}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-text dark:text-white">{item.title}</p>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
