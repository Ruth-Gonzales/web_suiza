import { MessageSquareText, Quote, Mail, Phone, MapPin } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const contactIcons = [Mail, Phone, MapPin];

export default function PalabrasDirector({ t }) {
  const data = t.aboutMenu?.col1?.[1] || {};

  return (
    <AboutPageShell
      t={t}
      title={data.title}
      breadcrumb={data.title}
    >
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Director photo placeholder */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/30 dark:from-primary/30 dark:to-dark-border flex items-center justify-center flex-shrink-0 shadow-lg">
            <MessageSquareText className="w-16 h-16 text-primary/50 dark:text-secondary/50" />
          </div>

          {/* Message */}
          <div className="flex-1">
            <div className="relative">
              <Quote className="w-8 h-8 text-primary/20 dark:text-secondary/20 absolute -top-2 -left-2" />
              <div className="pl-6">
                <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed italic mb-6">
                  "{t.aboutPage.palabrasDirector.quote}"
                </p>
              </div>
            </div>
            <div className="border-t border-primary/10 dark:border-white/8 pt-4 mt-4">
              <h3 className="font-bold text-lg text-slate-text dark:text-white">{t.aboutPage.palabrasDirector.directorName}</h3>
              <p className="text-sm text-primary dark:text-secondary font-medium">{t.aboutPage.palabrasDirector.directorRole}</p>
              <p className="text-xs text-slate-text/50 dark:text-dark-text/50 mt-1">{t.aboutPage.palabrasDirector.directorInstitution}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and commitment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm">
          <h3 className="font-bold text-slate-text dark:text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t.aboutPage.palabrasDirector.futureVisionTitle}
          </h3>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
            {t.aboutPage.palabrasDirector.futureVisionDesc}
          </p>
        </div>
        <div className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm">
          <h3 className="font-bold text-slate-text dark:text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t.aboutPage.palabrasDirector.qualityTitle}
          </h3>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
            {t.aboutPage.palabrasDirector.qualityDesc}
          </p>
        </div>
      </div>

      {/* Contact info */}
      <div className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-white/8 p-6 shadow-sm">
        <h3 className="font-bold text-slate-text dark:text-white mb-4 text-sm">{t.aboutPage.palabrasDirector.contactTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(t.aboutPage.palabrasDirector.contact).map((item, idx) => {
            const Icon = contactIcons[idx];
            return (
              <div key={idx} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-primary dark:text-secondary flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{item.label}</p>
                  <p className="text-xs font-medium text-slate-text dark:text-white">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AboutPageShell>
  );
}
