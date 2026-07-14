import { Users, Award, BookOpen, Star, GraduationCap } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const statIcons = [Users, GraduationCap, Award, Star];

const defaultFaculties = [];

export default function PlanaDocente({ t }) {
  const data = t.aboutMenu?.col2?.[3] || {};
  const faculties = t.aboutPage?.plannDocente?.faculties || defaultFaculties;

  return (
    <AboutPageShell
      t={t}
      title={data.title}
      breadcrumb={data.title}
    >
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {(t.aboutPage.plannDocente.stats).map((stat, idx) => {
          const Icon = stat.icon || statIcons[idx];
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-5 text-center shadow-sm hover:shadow-md transition-all">
              <Icon className="w-6 h-6 text-primary dark:text-secondary mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-extrabold text-primary dark:text-secondary">{stat.number}</div>
              <div className="text-[10px] text-slate-text/60 dark:text-dark-text/60 mt-1 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Users className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">{t.aboutPage.plannDocente.introTitle}</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              {t.aboutPage.plannDocente.introDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Faculty by area */}
      {faculties.map((faculty, idx) => (
        <div key={idx} className={`rounded-[2rem] bg-gradient-to-br ${faculty.color} dark:from-dark-card dark:to-dark-hover/30 border border-primary/10 dark:border-white/8 p-6 md:p-8 shadow-sm mb-6`}>
          <h3 className="font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary dark:text-secondary" />
            {faculty.area}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {faculty.members.map((member, midx) => (
              <div key={midx} className="rounded-xl bg-white dark:bg-dark-card border border-primary/5 dark:border-white/5 p-4 flex items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary dark:text-secondary">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-slate-text dark:text-white truncate">{member.name}</p>
                  <p className="text-[10px] font-medium text-primary dark:text-secondary">{member.role}</p>
                  <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50 mt-0.5">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AboutPageShell>
  );
}
