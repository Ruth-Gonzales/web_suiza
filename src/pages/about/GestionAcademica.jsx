import { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  ClipboardList,
  Calendar,
  Users,
  FileCheck,
  Building2,
  ShieldCheck,
  UserRound,
  FileText,
  ArrowRight,
  Megaphone,
  X,
  CheckCircle2,
} from 'lucide-react';

import AboutPageShell from './AboutPageShell';
import directorImg from '../../assets/img/director.png';
import unidadAcademicaImg from '../../assets/img/unidad-academica.png';
import secretariaAcademicaImg from '../../assets/img/secretaria-academica.png';

const areaIcons = [
  BookOpen,
  ClipboardList,
  Calendar,
  Users,
  FileCheck,
];

const defaultAuthorities = [
  {
    title: 'Dirección General',
    name: 'Dr. Jorge Antonio Cordova Correa',
    role: 'Director General',
    description:
      'Liderazgo y gestión estratégica para el desarrollo institucional.',
    details:
      'La Dirección General conduce la planificación institucional, representa al instituto y supervisa el cumplimiento de los objetivos académicos y administrativos.',
    image: directorImg,
    icon: UserRound,
  },
  {
    title: 'Unidad Académica',
    name: 'Lic. Mg. Noe Abraham Albornoz Isidro ',
    role: 'Jefa de Unidad Académica',
    description:
      'Formación académica de calidad con enfoque práctico y humanístico.',
    details:
      'La Unidad Académica organiza, supervisa y evalúa los procesos de enseñanza, los planes de estudio y el desempeño de los programas académicos.',
    image: unidadAcademicaImg,
    icon: BookOpen,
  },
  {
    title: 'Secretaría Académica',
    name: 'Lic. Edu. Julio Cesar Cuentas Rodriguez',
    role: 'Secretario Académico',
    description:
      'Servicios académicos eficientes para nuestra comunidad estudiantil.',
    details:
      'La Secretaría Académica gestiona los registros, certificados, matrículas, documentos oficiales y demás trámites académicos de los estudiantes.',
    image: secretariaAcademicaImg,
    icon: FileText,
  },
];

const authorityStyles = [
  {
    line: 'bg-blue-600',
    icon: 'bg-blue-600',
    border: 'border-blue-200 dark:border-blue-500/20',
    button:
      'border-blue-400 text-blue-700 hover:bg-blue-600 hover:text-white dark:text-blue-300',
  },
  {
    line: 'bg-cyan-500',
    icon: 'bg-cyan-600',
    border: 'border-cyan-200 dark:border-cyan-500/20',
    button:
      'border-cyan-400 text-cyan-700 hover:bg-cyan-600 hover:text-white dark:text-cyan-300',
  },
  {
    line: 'bg-pink-500',
    icon: 'bg-pink-600',
    border: 'border-pink-200 dark:border-pink-500/20',
    button:
      'border-pink-400 text-pink-700 hover:bg-pink-600 hover:text-white dark:text-pink-300',
  },
];

function isCurrentStatus(status = '') {
  const normalized = status.toLowerCase().trim();

  return [
    'en curso',
    'in progress',
    'activo',
    'active',
    'axonona',
  ].includes(normalized);
}

export default function GestionAcademica({ t }) {
  const [selectedAuthority, setSelectedAuthority] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const data = t?.aboutMenu?.col2?.[0] || {};
  const gestion = t?.aboutPage?.gestionAcademica || {};

  const areas = Array.isArray(gestion.areas)
    ? gestion.areas
    : [];

  const calendar = Array.isArray(gestion.calendar)
    ? gestion.calendar
    : [];

  const authorities =
    Array.isArray(gestion.authorities) &&
    gestion.authorities.length > 0
      ? gestion.authorities
      : defaultAuthorities;

  const heroFeatures =
    areas.length > 0
      ? areas.slice(0, 4).map((area, index) => ({
          icon:
            area.icon ||
            areaIcons[index % areaIcons.length],
          title: area.title,
          description: area.desc,
        }))
      : [
          {
            icon: GraduationCap,
            title: 'Calidad Educativa',
            description: 'Formación integral y actualizada',
          },
          {
            icon: Users,
            title: 'Docentes Capacitados',
            description: 'Profesionales con experiencia',
          },
          {
            icon: Building2,
            title: 'Infraestructura Moderna',
            description: 'Ambientes académicos equipados',
          },
          {
            icon: ShieldCheck,
            title: 'Gestión Transparente',
            description: 'Información clara y accesible',
          },
        ];

  const statistics = gestion.statistics || {};

  return (
    <>
      <AboutPageShell
        t={t}
        title={data.title || 'Gestión Académica'}
        breadcrumb={data.title || 'Gestión Académica'}
        variant="academic"
        image={
          gestion.bannerImage ||
          'src/assets/img/banner-gestionacademica.png'

        }
        eyebrow="Bienvenidos a"
        accentTitle="IESTP Suiza"
        description={
          gestion.introDesc ||
          'Comprometidos con la formación de profesionales competentes para el desarrollo de nuestra región.'
        }
        features={heroFeatures}
        ctaText="Conócenos más"
        ctaHref="#direccion-unidades"
        showBreadcrumb={false}
        showBackButton={false}
      >
        {/* =====================================================
            DIRECCIÓN Y UNIDADES ACADÉMICAS
        ====================================================== */}
        <section
          id="direccion-unidades"
          className="scroll-mt-28 py-8 md:py-10"
        >
          <div className="mb-7 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-text/60 dark:text-dark-text/60">
              Conoce nuestra gestión
            </span>

            <h2 className="mt-1 text-2xl font-black text-[#071b53] dark:text-white md:text-[28px]">
              Dirección y Unidades Académicas
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {authorities.slice(0, 3).map((authority, index) => {
              const style =
                authorityStyles[
                  index % authorityStyles.length
                ];

              const AuthorityIcon =
                authority.icon ||
                [UserRound, BookOpen, FileText][index % 3];

              return (
                <article
                  key={`${authority.title}-${index}`}
                  className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,45,95,0.15)] dark:bg-dark-card ${style.border}`}
                >
                  <div
                    className={`absolute left-0 right-0 top-0 z-20 h-[3px] ${style.line}`}
                  />

                  <div className="grid min-h-[250px] grid-cols-1 sm:grid-cols-[46%_54%] lg:grid-cols-[46%_54%]">
                    {/* Foto */}
                    <div className="relative min-h-[250px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <UserRound className="h-20 w-20 text-slate-300 dark:text-white/10" />
                      </div>

                      <img
                        src={authority.image}
                        alt={authority.name || authority.title}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#041640]/25 via-transparent to-transparent" />
                    </div>

                    {/* Información */}
                    <div className="relative flex flex-col justify-center p-5">
                      <div
                        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ${style.icon}`}
                      >
                        <AuthorityIcon className="h-5 w-5 text-white" />
                      </div>

                      <h3 className="text-lg font-black leading-tight text-[#071b53] dark:text-white">
                        {authority.title}
                      </h3>

                      {authority.name && (
                        <p className="mt-1 text-sm font-bold text-primary dark:text-secondary">
                          {authority.name}
                        </p>
                      )}

                      <p className="mt-3 text-xs leading-5 text-slate-text/65 dark:text-dark-text/65">
                        {authority.description}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedAuthority(authority)
                        }
                        className={`mt-5 inline-flex self-start items-center gap-2 rounded-md border px-4 py-2 text-[11px] font-bold transition-all duration-300 ${style.button}`}
                      >
                        Ver perfil

                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            NOVEDADES E INDICADORES
        ====================================================== */}
        <section className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#091c64] via-[#173a96] to-[#076dbb] shadow-xl">
          <div className="grid grid-cols-1 divide-y divide-white/15 lg:grid-cols-[1.45fr_repeat(4,1fr)] lg:divide-x lg:divide-y-0">
            {/* Comunicados */}
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/50 shadow-lg shadow-blue-950/30 ring-1 ring-white/15">
                <Megaphone className="h-6 w-6 text-white" />
              </div>

              <div>
                <h3 className="text-sm font-black text-white">
                  Novedades y Comunicados
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-blue-100/70">
                  Entérate de las últimas noticias y anuncios
                  importantes.
                </p>

                <button
                  type="button"
                  onClick={() => setShowCalendar(true)}
                  className="mt-2 rounded-md bg-[#087cf0] px-3 py-1.5 text-[10px] font-bold text-white transition-colors hover:bg-blue-500"
                >
                  Ver calendario
                </button>
              </div>
            </div>

            <Statistic
              icon={Users}
              number={statistics.programs || '11'}
              label="Programas de Estudio"
              description="Carreras Técnicas"
            />

            <Statistic
              icon={GraduationCap}
              number={statistics.students || '850+'}
              label="Estudiantes"
              description="Formándose"
            />

            <Statistic
              icon={UserRound}
              number={statistics.teachers || '45+'}
              label="Docentes"
              description="Especializados"
            />

            <Statistic
              icon={Building2}
              number={statistics.experience || '15+'}
              label="Años de Experiencia"
              description="Educativa"
            />
          </div>
        </section>
      </AboutPageShell>

      {/* =====================================================
          MODAL DE AUTORIDAD
      ====================================================== */}
      {selectedAuthority && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#02091d]/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedAuthority(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-dark-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAuthority(null)}
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[42%_58%]">
              <div className="relative min-h-[320px] bg-slate-100 dark:bg-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <UserRound className="h-24 w-24 text-slate-300 dark:text-white/10" />
                </div>

                <img
                  src={selectedAuthority.image}
                  alt={
                    selectedAuthority.name ||
                    selectedAuthority.title
                  }
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-9">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">
                  Gestión Académica
                </span>

                <h2 className="mt-2 text-2xl font-black text-[#071b53] dark:text-white">
                  {selectedAuthority.title}
                </h2>

                {selectedAuthority.name && (
                  <p className="mt-3 text-lg font-bold text-primary dark:text-secondary">
                    {selectedAuthority.name}
                  </p>
                )}

                {selectedAuthority.role && (
                  <p className="mt-1 text-sm font-medium text-slate-text/60 dark:text-dark-text/60">
                    {selectedAuthority.role}
                  </p>
                )}

                <div className="mt-5 h-px bg-gradient-to-r from-primary/20 to-transparent dark:from-white/10" />

                <p className="mt-5 text-sm leading-7 text-slate-text/70 dark:text-dark-text/70">
                  {selectedAuthority.details ||
                    selectedAuthority.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedAuthority(null)}
                  className="mt-7 inline-flex self-start items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
                >
                  Cerrar

                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          MODAL DEL CALENDARIO
      ====================================================== */}
      {showCalendar && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#02091d]/75 p-4 backdrop-blur-sm"
          onClick={() => setShowCalendar(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl dark:bg-dark-card md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowCalendar(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white"
              aria-label="Cerrar calendario"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex items-center gap-4 pr-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                <Calendar className="h-6 w-6 text-primary dark:text-secondary" />
              </div>

              <div>
                <h2 className="text-xl font-black text-[#071b53] dark:text-white">
                  {gestion.calendarTitle ||
                    'Calendario Académico'}
                </h2>

                <p className="text-xs text-slate-text/50 dark:text-dark-text/50">
                  Periodos y fechas académicas
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {calendar.map((item, index) => {
                const current = isCurrentStatus(item.status);

                return (
                  <div
                    key={`${item.period}-${index}`}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center"
                  >
                    <div
                      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                        current
                          ? 'bg-green-100 dark:bg-green-900/30'
                          : 'bg-primary/10 dark:bg-primary/20'
                      }`}
                    >
                      {current ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Calendar className="h-5 w-5 text-primary dark:text-secondary" />
                      )}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-text dark:text-white">
                        {item.period}
                      </p>

                      <p className="mt-1 text-xs text-slate-text/50 dark:text-dark-text/50">
                        {item.date}
                      </p>
                    </div>

                    <span
                      className={`self-start rounded-full px-3 py-1.5 text-[10px] font-bold sm:self-center ${
                        current
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                );
              })}

              {calendar.length === 0 && (
                <div className="rounded-2xl border border-dashed border-primary/20 p-8 text-center">
                  <Calendar className="mx-auto h-9 w-9 text-primary/40" />

                  <p className="mt-3 text-sm text-slate-text/60 dark:text-dark-text/60">
                    No existen periodos registrados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Statistic({
  icon: Icon,
  number,
  label,
  description,
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-5">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
        <Icon className="h-5 w-5 text-blue-100" />
      </div>

      <div>
        <p className="text-2xl font-black leading-none text-white">
          {number}
        </p>

        <p className="mt-2 text-[10px] font-semibold text-white">
          {label}
        </p>

        <p className="mt-0.5 text-[9px] text-blue-100/70">
          {description}
        </p>
         </div>
    </div>
  );
}