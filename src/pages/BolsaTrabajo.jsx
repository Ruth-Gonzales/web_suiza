import { useState } from 'react';
import { Briefcase, Building2, MapPin, Calendar, Filter, Send, ExternalLink } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Asistente Administrativo',
    company: 'Gobierno Regional de Ucayali',
    location: 'Pucallpa',
    type: 'Prácticas',
    deadline: '2026-08-15',
    desc: 'Apoyo en gestión documentaria y archivo. Requisitos: estudiante de Administración o afines.',
    career: 'Administración',
  },
  {
    id: 2,
    title: 'Técnico en Enfermería',
    company: 'Hospital Regional de Pucallpa',
    location: 'Pucallpa',
    type: 'Practicante',
    deadline: '2026-09-01',
    desc: 'Atención básica en consultorios externos. Requisitos: estudiante de Enfermería a partir del 4to ciclo.',
    career: 'Enfermería',
  },
  {
    id: 3,
    title: 'Auxiliar Contable',
    company: 'Estudio Contable Sánchez & Asociados',
    location: 'Pucallpa',
    type: 'Prácticas',
    deadline: '2026-08-30',
    desc: 'Registro de operaciones contables, apoyo en declaraciones SUNAT. Requisitos: estudiante de Contabilidad.',
    career: 'Contabilidad',
  },
  {
    id: 4,
    title: 'Soporte Técnico TI',
    company: 'Municipalidad Provincial de Coronel Portillo',
    location: 'Pucallpa',
    type: 'Practicante',
    deadline: '2026-09-15',
    desc: 'Soporte en mantenimiento de equipos, redes y sistemas. Requisitos: estudiante de Sistemas o afines.',
    career: 'Sistemas',
  },
  {
    id: 5,
    title: 'Asistente de Producción',
    company: 'Agroindustria Pucallpa SAC',
    location: 'Pucallpa',
    type: 'Prácticas',
    deadline: '2026-08-20',
    desc: 'Apoyo en procesos de producción y control de calidad. Requisitos: estudiante de Agroindustria.',
    career: 'Agroindustria',
  },
  {
    id: 6,
    title: 'Docente de Cómputo',
    company: 'I.E. Privada San Martín',
    location: 'Pucallpa',
    type: 'Tiempo Parcial',
    deadline: '2026-10-01',
    desc: 'Dictado de clases de cómputo a nivel secundaria. Requisitos: egresado de Sistemas o afines.',
    career: 'Sistemas',
  },
  {
    id: 7,
    title: 'Inspector Técnico de Obras',
    company: 'Constructora Amazónica SAC',
    location: 'Pucallpa',
    type: 'Prácticas',
    deadline: '2026-09-10',
    desc: 'Supervisión de obras civiles, elaboración de informes técnicos. Requisitos: estudiante de Construcción Civil.',
    career: 'Construcción Civil',
  },
  {
    id: 8,
    title: 'Asistente de Turismo',
    company: 'Agencia de Viajes Ucayali Travel',
    location: 'Pucallpa',
    type: 'Practicante',
    deadline: '2026-08-25',
    desc: 'Atención al cliente, reservas, organización de tours. Requisitos: estudiante de Turismo.',
    career: 'Turismo',
  },
];

const careers = ['Todas', ...new Set(jobs.map((j) => j.career))];
const types = ['Todos', ...new Set(jobs.map((j) => j.type))];

export default function BolsaTrabajo() {
  const [filterCareer, setFilterCareer] = useState('Todas');
  const [filterType, setFilterType] = useState('Todos');

  const filtered = jobs.filter((j) => {
    if (filterCareer !== 'Todas' && j.career !== filterCareer) return false;
    if (filterType !== 'Todos' && j.type !== filterType) return false;
    return true;
  });

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Briefcase className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Bolsa de Trabajo
          </h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">
            Oportunidades laborales y prácticas para estudiantes y egresados del IESTP Suiza.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <div className="flex items-center gap-2 bg-white/60 dark:bg-dark-border/30 rounded-xl px-4 py-2 border border-primary/5 dark:border-dark-border/40">
            <Filter className="w-4 h-4 text-slate-text/50 dark:text-dark-text/50" />
            <select
              value={filterCareer}
              onChange={(e) => setFilterCareer(e.target.value)}
              className="bg-transparent text-xs font-medium text-slate-text dark:text-dark-text outline-none cursor-pointer"
            >
              {careers.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 bg-white/60 dark:bg-dark-border/30 rounded-xl px-4 py-2 border border-primary/5 dark:border-dark-border/40">
            <Filter className="w-4 h-4 text-slate-text/50 dark:text-dark-text/50" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-xs font-medium text-slate-text dark:text-dark-text outline-none cursor-pointer"
            >
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-text/50 dark:text-dark-text/50">{job.career}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-text dark:text-white">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-text/60 dark:text-dark-text/60">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" /> {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Cierre: {job.deadline}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
                    {job.desc}
                  </p>
                </div>
                <button
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  onClick={() => window.location.href = 'mailto:bolsa@iestpsuiza.edu.pe?subject=Postulación: ' + encodeURIComponent(job.title)}
                >
                  <Send className="w-3.5 h-3.5" />
                  Postular
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-text/50 dark:text-dark-text/50">
            <p className="text-sm">No hay ofertas disponibles con esos filtros.</p>
          </div>
        )}

        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 text-center">
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-3">
            ¿Egresado o empresa? Déjanos tu CV o solicitud de personal.
          </p>
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            onClick={() => window.location.href = 'mailto:bolsa@iestpsuiza.edu.pe'}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            bolsa@iestpsuiza.edu.pe
          </button>
        </div>
      </div>
    </div>
  );
}
