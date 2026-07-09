import { History, Landmark, GraduationCap, Building2, Award } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const timelineIcons = { Landmark, Building2, GraduationCap, Award };

const defaultTimeline = [];

export default function Historia({ t }) {
  const data = t.aboutMenu?.col1?.[3] || {};
  const tl = t.aboutPage?.historia?.timeline || defaultTimeline;

  return (
    <AboutPageShell
      t={t}
      title={data.title}
      breadcrumb={data.title}
    >
      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <History className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">{t.aboutPage.historia.introTitle}</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              {t.aboutPage.historia.introDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <div className="relative border-l border-primary/20 dark:border-primary/30 pl-8 ml-4 space-y-10">
          {tl.map((item, idx) => {
            const Icon = timelineIcons[item.icon] || Landmark;
            return (
              <div key={idx} className="relative group">
                <div className="absolute -left-[45px] top-1 w-9 h-9 rounded-xl bg-white dark:bg-dark-card border-2 border-primary dark:border-secondary flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-primary dark:text-secondary" />
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-5 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                  <span className="text-xs font-extrabold text-primary dark:text-secondary tracking-wider">{item.year}</span>
                  <h3 className="text-base md:text-lg font-bold text-slate-text dark:text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <div className="rounded-[2rem] bg-white/50 dark:bg-dark-card/50 border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5">{t.aboutPage.historia.galleryTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(t.aboutPage.historia.gallery).map((item, idx) => (
            <div key={idx} className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-dark-hover/40 aspect-square flex flex-col items-center justify-center p-4 text-center border border-primary/5 dark:border-white/5 hover:scale-[1.02] transition-transform">
              <Landmark className="w-8 h-8 text-primary/40 dark:text-secondary/40 mb-2" />
              <p className="text-xs font-bold text-slate-text dark:text-white">{item.label}</p>
              <p className="text-[10px] text-primary dark:text-secondary font-semibold">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
