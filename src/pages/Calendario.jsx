import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, GraduationCap } from 'lucide-react';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const events = [
  { date: '2026-07-01', title: 'Inicio de inscripciones 2026-II', type: 'admision' },
  { date: '2026-07-15', title: 'Cierre de inscripciones', type: 'admision' },
  { date: '2026-07-20', title: 'Examen de admisión', type: 'admision' },
  { date: '2026-07-25', title: 'Publicación de resultados', type: 'admision' },
  { date: '2026-08-01', title: 'Matrícula ingresantes', type: 'admision' },
  { date: '2026-08-10', title: 'Inicio de clases 2026-II', type: 'academico' },
  { date: '2026-09-15', title: 'Semana Universitaria', type: 'cultural' },
  { date: '2026-10-05', title: 'Exámenes parciales', type: 'academico' },
  { date: '2026-11-15', title: 'Festival de Investigación', type: 'investigacion' },
  { date: '2026-12-01', title: 'Exámenes finales', type: 'academico' },
  { date: '2026-12-15', title: 'Vacaciones académicas', type: 'academico' },
  { date: '2027-01-05', title: 'Inicio de clases 2027-I', type: 'academico' },
];

const typeColors = {
  admision: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  academico: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  cultural: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  investigacion: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
};

const typeLabels = {
  admision: 'Admisión',
  academico: 'Académico',
  cultural: 'Cultural',
  investigacion: 'Investigación',
};

export default function Calendario() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else { setMonth(m => m - 1); } };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else { setMonth(m => m + 1); } };

  const pad = (n) => String(n).padStart(2, '0');
  const monthEvents = events.filter(e => e.date.startsWith(`${year}-${pad(month + 1)}`));

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Calendar className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Calendario Académico
          </h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3">
            Fechas importantes del proceso académico y de admisión.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-6">
              <div className="flex items-center justify-between mb-6">
                <button onClick={prev} className="p-2 rounded-xl hover:bg-slate-light dark:hover:bg-dark-border/50 transition-all cursor-pointer" aria-label="Mes anterior">
                  <ChevronLeft className="w-5 h-5 text-slate-text dark:text-dark-text" />
                </button>
                <h2 className="text-lg font-bold text-slate-text dark:text-white">
                  {months[month]} {year}
                </h2>
                <button onClick={next} className="p-2 rounded-xl hover:bg-slate-light dark:hover:bg-dark-border/50 transition-all cursor-pointer" aria-label="Mes siguiente">
                  <ChevronRight className="w-5 h-5 text-slate-text dark:text-dark-text" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(d => (
                  <div key={d} className="text-[10px] font-semibold text-slate-text/50 dark:text-dark-text/50 uppercase py-1">{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;
                  const hasEvent = events.some(e => e.date === dateStr);
                  const isToday = year === now.getFullYear() && month === now.getMonth() && day === now.getDate();
                  return (
                    <div
                      key={day}
                      className={`aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all ${
                        isToday
                          ? 'bg-primary text-white shadow-md'
                          : hasEvent
                            ? 'bg-primary/10 text-primary dark:text-secondary font-bold'
                            : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/30'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-sm text-slate-text dark:text-white mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Eventos del mes
            </h3>
            {monthEvents.length === 0 ? (
              <p className="text-xs text-slate-text/50 dark:text-dark-text/50">No hay eventos este mes.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {monthEvents.map((ev, idx) => (
                  <div key={idx} className="rounded-xl border border-primary/5 dark:border-dark-border/40 bg-white/60 dark:bg-dark-card/60 p-4">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border ${typeColors[ev.type]}`}>
                      {typeLabels[ev.type]}
                    </span>
                    <p className="text-sm font-medium text-slate-text dark:text-white mt-2">{ev.title}</p>
                    <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50 mt-1">{ev.date}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
              <h4 className="text-xs font-bold text-slate-text dark:text-white mb-3 uppercase tracking-wider">Leyenda</h4>
              <div className="flex flex-col gap-2">
                {Object.entries(typeLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${typeColors[key].split(' ')[0]}`} />
                    <span className="text-[11px] text-slate-text/70 dark:text-dark-text/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
