import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Clock, Calendar, Award, TrendingUp, FileText, User } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Dashboard Estudiantil
          </h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">
            Portal de consulta para estudiantes. Accede a tus notas, horarios y más.
          </p>
        </div>

        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/3 to-secondary/5 border border-primary/10 dark:border-dark-border/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-text dark:text-white">Juan Pérez López</h2>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60">Código: 2024-001 | Ingeniería de Sistemas | IV Ciclo</p>
              <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-[10px] font-semibold border border-green-200 dark:border-green-800">
                Matrícula activa
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: 'Cursos matriculados', value: '6', gradient: 'from-blue-500/10 to-blue-600/5' },
            { icon: Award, label: 'Promedio ponderado', value: '15.2', gradient: 'from-green-500/10 to-green-600/5' },
            { icon: Clock, label: 'Créditos llevados', value: '24', gradient: 'from-purple-500/10 to-purple-600/5' },
            { icon: TrendingUp, label: 'Progreso de carrera', value: '33%', gradient: 'from-amber-500/10 to-amber-600/5' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`rounded-2xl bg-gradient-to-br ${stat.gradient} border border-primary/5 dark:border-dark-border/40 p-5`}>
                <Icon className="w-5 h-5 text-primary dark:text-secondary mb-2" />
                <div className="text-2xl font-extrabold text-slate-text dark:text-white">{stat.value}</div>
                <div className="text-[10px] font-medium text-slate-text/60 dark:text-dark-text/60 uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-6">
            <h3 className="text-sm font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              Cursos del Ciclo
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Programación Web', code: 'PW-401', credits: 4, progress: 75 },
                { name: 'Base de Datos II', code: 'BD-402', credits: 4, progress: 60 },
                { name: 'Redes y Comunicaciones', code: 'RC-403', credits: 3, progress: 45 },
                { name: 'Ingeniería de Software', code: 'IS-404', credits: 4, progress: 30 },
                { name: 'Matemática Discreta', code: 'MD-405', credits: 3, progress: 80 },
                { name: 'Taller de Investigación', code: 'TI-406', credits: 3, progress: 20 },
              ].map((course, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-light/50 dark:bg-dark-border/30">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-slate-text dark:text-white truncate">{course.name}</p>
                    <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{course.code} · {course.credits} créd.</p>
                  </div>
                  <div className="ml-4 flex items-center gap-3">
                    <div className="w-20 h-1.5 rounded-full bg-slate-200 dark:bg-dark-border overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-text/60 dark:text-dark-text/60 w-8 text-right">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-6">
              <h3 className="text-sm font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Próximas Evaluaciones
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Examen Parcial - Programación Web', date: '15 Oct 2026', type: 'Parcial' },
                  { title: 'Entrega de Proyecto - BD II', date: '20 Oct 2026', type: 'Proyecto' },
                  { title: 'Examen Final - Redes', date: '05 Dic 2026', type: 'Final' },
                ].map((ev, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-light/50 dark:bg-dark-border/30">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-text dark:text-white truncate">{ev.title}</p>
                      <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{ev.date} · {ev.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 p-5 text-center">
              <p className="text-xs text-slate-text/70 dark:text-dark-text/70 mb-3">
                Este es un dashboard demostrativo. Conéctate al sistema oficial para ver tus datos reales.
              </p>
              <button
                className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://www.iestpsuiza.edu.pe', '_blank')}
              >
                Ir al aula virtual
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
