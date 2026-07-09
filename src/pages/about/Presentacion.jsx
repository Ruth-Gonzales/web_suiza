import {
  FileText, Award, TrendingUp, Users, MapPin
} from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const featureIcons = [Award, TrendingUp, Users, MapPin];

export default function Presentacion({ t }) {
  const data = t.aboutMenu?.col1?.[0] || {};
  const features = t.aboutPage.presentacion.features;

  return (
    <AboutPageShell
      t={t}
      title={data.title}
      breadcrumb={data.title}
    >
      {/* Intro card */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-text dark:text-white mb-2">
              {t.aboutPage.presentacion.introTitle}
            </h2>
            <p className="text-sm text-slate-text/60 dark:text-dark-text/60">
              {t.aboutPage.presentacion.introSubtitle}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed mb-6">
          {t.aboutPage.presentacion.introP1}
        </p>
        <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
          {t.aboutPage.presentacion.introP2}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {(t.aboutPage.presentacion.stats).map((stat, idx) => (
          <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/5 dark:border-white/8 p-5 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-extrabold text-primary dark:text-secondary">{stat.number}</div>
            <div className="text-[11px] text-slate-text/60 dark:text-dark-text/60 mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {features.map((f, idx) => {
          const Icon = featureIcons[idx];
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary dark:text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-slate-text dark:text-white text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AboutPageShell>
  );
}
