import { GraduationCap, BookOpen, ClipboardList, Calendar, Users, FileCheck } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const areaIcons = [BookOpen, ClipboardList, Calendar, Users, FileCheck];

export default function GestionAcademica({ t }) {
  const data = t.aboutMenu?.col2?.[0] || {};
  const areas = t.aboutPage.gestionAcademica.areas;

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
            <GraduationCap className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">{t.aboutPage.gestionAcademica.introTitle}</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              {t.aboutPage.gestionAcademica.introDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {areas.map((area, idx) => {
          const Icon = area.icon || areaIcons[idx];
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-text dark:text-white text-sm mb-1">{area.title}</h3>
                  <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{area.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Academic calendar highlights */}
      <div className="rounded-[2rem] bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary dark:text-secondary" />
          {t.aboutPage.gestionAcademica.calendarTitle}
        </h3>
        <div className="space-y-3">
          {(t.aboutPage.gestionAcademica.calendar).map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-dark-card border border-primary/5 dark:border-white/5">
              <div>
                <p className="text-sm font-semibold text-slate-text dark:text-white">{item.period}</p>
                <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50">{item.date}</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                item.status === 'En curso' || item.status === 'In progress' || item.status === 'Axonona'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  : 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
