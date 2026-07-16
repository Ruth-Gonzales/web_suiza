import { Building2, Settings, DollarSign, FileText, Users, Shield, ClipboardCheck, Target, Scale, Clock, Mail, Phone, Briefcase, MapPin, X } from 'lucide-react';
import AboutPageShell from './AboutPageShell';
import reunionImg from '../../assets/imagenes.suiza/reunion.png';
import entradaImg from '../../assets/imagenes.suiza/entrada.jpg';
import contabilidadImg from '../../assets/img/contabilidad-presupuesto.png';
import patrimonioImg from '../../assets/img/patrimonio.png';
import tesoreriaImg from '../../assets/img/tesoreria.png';
import personalImg from '../../assets/img/area-personal.png';
import soporteImg from '../../assets/img/soporte-informatico.png';
import abastecimientoImg from '../../assets/img/abastecimiento.png';
import serviciosGeneralesImg from '../../assets/img/servicios-generales.png';
import equipoImg from '../../assets/imagenes.suiza/equipo.jpg';
import { useState, useEffect, useRef } from 'react';

function AnimatedNumber({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const target = parseInt(value.replace(/[^0-9]/g, ''));
          const duration = 1500;
          const start = performance.now();

          function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const display = value.includes('+')
    ? `${count}+`
    : count.toString();

  return <span ref={ref}>{display}{suffix}</span>;
}

const staffMembers = [
  {
    id: 1,
    name: 'Jorge Antonio Cordova Correa',
    position: 'Director General',
    area: 'Dirección General',
    photo: '/Imagen1.png',
    functions: [
      'Máxima instancia ejecutiva del instituto',
      'Lidera la planificación estratégica institucional',
      'Toma de decisiones institucionales',
      'Representa legal del IESTP Suiza',
      'Supervisión de todas las áreas administrativas y académicas',
    ],
    email: 'direcciongeneral@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50 dark:bg-blue-950/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200/50 dark:border-blue-800/30',
    shadowColor: 'shadow-blue-500/10',
    icon: Settings,
  },
  {
    id: 2,
    name: 'Zelita Tejada Rodriguez',
    position: 'Contabilidad y Presupuesto',
    area: 'Administración y Finanzas',
    photo: contabilidadImg,
    functions: [
      'Elaboración y ejecución del presupuesto anual',
      'Contabilidad institucional y registros financieros',
      'Control de ingresos y egresos',
      'Reportes financieros y estados contables',
      'Cumplimiento normativo contable',
    ],
    email: 'contabilidad@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-emerald-500 to-emerald-600',
    lightBg: 'bg-emerald-50 dark:bg-emerald-950/20',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
    shadowColor: 'shadow-emerald-500/10',
    icon: DollarSign,
  },
  {
    id: 3,
    name: 'ISAI RODRIGUEZ LUNA',
    position: 'Patrimonio Institucional',
    area: 'Administración y Finanzas',
    photo: patrimonioImg,
    functions: [
      'Gestión del inventario institucional',
      'Control de bienes muebles e inmuebles',
      'Registro y custodia patrimonial',
      'Mantenimiento de activos fijos',
      'Auditoría interna de bienes',
    ],
    email: 'patrimonio@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-teal-500 to-teal-600',
    lightBg: 'bg-teal-50 dark:bg-teal-950/20',
    textColor: 'text-teal-600 dark:text-teal-400',
    borderColor: 'border-teal-200/50 dark:border-teal-800/30',
    shadowColor: 'shadow-teal-500/10',
    icon: Briefcase,
  },
  {
    id: 4,
    name: 'LUCILA ELENA SORIA RUIZ',
    position: 'Tesorería',
    area: 'Administración y Finanzas',
    photo: tesoreriaImg,
    functions: [
      'Gestión de fondos institucionales',
      'Control de cobros y pagos',
      'Conciliaciones bancarias',
      'Emisión de comprobantes de pago',
      'Manejo de cuentas corrientes',
    ],
    email: 'tesoreria@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-amber-500 to-amber-600',
    lightBg: 'bg-amber-50 dark:bg-amber-950/20',
    textColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-200/50 dark:border-amber-800/30',
    shadowColor: 'shadow-amber-500/10',
    icon: DollarSign,
  },
  {
    id: 5,
    name: 'Área de Personal',
    position: 'Gestión de Personal',
    area: 'Recursos Humanos',
    photo: personalImg,
    functions: [
      'Selección y contratación de personal',
      'Control de asistencia y puntualidad',
      'Gestión de nómina y beneficios sociales',
      'Evaluación del desempeño laboral',
      'Desarrollo profesional del talento humano',
    ],
    email: 'personal@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-violet-500 to-violet-600',
    lightBg: 'bg-violet-50 dark:bg-violet-950/20',
    textColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-200/50 dark:border-violet-800/30',
    shadowColor: 'shadow-violet-500/10',
    icon: Users,
  },
  {
    id: 6,
    name: 'GINO ANDERSON GARCIA ACOSTA',
    position: 'Soporte Informático',
    area: 'Tecnología e Informática',
    photo: soporteImg,
    functions: [
      'Mantenimiento de infraestructura tecnológica',
      'Soporte técnico a usuarios',
      'Gestión de redes y sistemas',
      'Seguridad informática institucional',
      'Administración de plataformas digitales',
    ],
    email: 'soporte.ti@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-50 dark:bg-cyan-950/20',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    borderColor: 'border-cyan-200/50 dark:border-cyan-800/30',
    shadowColor: 'shadow-cyan-500/10',
    icon: Settings,
  },
  {
    id: 7,
    name: 'BARBARA SOLHANS SOLIGNAC GONZALEZ',
    position: 'Abastecimiento',
    area: 'Administración y Finanzas',
    photo: abastecimientoImg,
    functions: [
      'Gestión de procesos de adquisición',
      'Control de inventarios y almacén',
      'Elaboración de especificaciones técnicas',
      'Seguimiento de contrataciones',
      'Distribución de materiales y suministros',
    ],
    email: 'abastecimiento@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-orange-500 to-orange-600',
    lightBg: 'bg-orange-50 dark:bg-orange-950/20',
    textColor: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-200/50 dark:border-orange-800/30',
    shadowColor: 'shadow-orange-500/10',
    icon: ClipboardCheck,
  },
  {
    id: 8,
    name: 'Servicios Generales',
    position: 'Servicios Generales',
    area: 'Operaciones Institucionales',
    photo: serviciosGeneralesImg,
    functions: [
      'Mantenimiento de infraestructura física',
      'Gestión de limpieza y aseo',
      'Control de servicios básicos',
      'Seguridad y vigilancia del recinto',
      'Gestión de espacios y mobiliario',
    ],
    email: 'serviciosgenerales@iestpsuiza.edu.pe',
    phone: '061-280665',
    color: 'from-rose-500 to-rose-600',
    lightBg: 'bg-rose-50 dark:bg-rose-950/20',
    textColor: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-200/50 dark:border-rose-800/30',
    shadowColor: 'shadow-rose-500/10',
    icon: Shield,
  },
];

export default function GestionAdministrativa({ t }) {
  const data = t.aboutMenu?.col2?.[1] || {};
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (!selectedMember) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelectedMember(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedMember]);

  const stats = [
    { label: 'Áreas Administrativas', value: '8', icon: Building2 },
    { label: 'Personal Administrativo', value: '40+', icon: Users },
    { label: 'Documentos de Gestión', value: '12+', icon: FileText },
    { label: 'Años de Gestión', value: '46', icon: Clock },
  ];

  const documents = [
    { title: 'Plan Anual de Trabajo', desc: 'Documento de gestión operativa institucional 2026', icon: ClipboardCheck, grad: 'from-primary to-secondary', iconBg: 'bg-primary/10 dark:bg-primary/20', iconColor: 'text-primary dark:text-secondary' },
    { title: 'Reglamento Interno', desc: 'Normas y disposiciones que rigen la vida institucional', icon: Scale, grad: 'from-amber-500 to-amber-600', iconBg: 'bg-amber-500/10 dark:bg-amber-500/20', iconColor: 'text-amber-600 dark:text-amber-400' },
    { title: 'Manual de Organización', desc: 'Estructura orgánica y funciones de cada unidad', icon: Target, grad: 'from-violet-500 to-violet-600', iconBg: 'bg-violet-500/10 dark:bg-violet-500/20', iconColor: 'text-violet-600 dark:text-violet-400' },
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Gestión Administrativa'}
      breadcrumb={data.title || 'Gestión Administrativa'}
      image={reunionImg}
      imageClassName="object-top"
    >
      {/* ─── INTRO — HERO ─── */}
      <div className="relative rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 shadow-sm mb-12 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img src={entradaImg} alt="" className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[42%] via-white/95 via-[58%] to-transparent to-[100%] dark:from-dark-card dark:via-dark-card/95 dark:to-transparent z-0"></div>

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/30 dark:from-secondary dark:via-primary dark:to-secondary/30 z-10 hidden md:block"></div>

        <div className="relative z-10 flex flex-col justify-center w-full md:max-w-[60%] px-8 md:px-12 py-10 md:py-14">
          <div className="flex items-center gap-5 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/5 dark:ring-primary/10">
              <Building2 className="w-7 h-7 text-primary dark:text-secondary" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60 dark:text-dark-text/50 mb-1">
                Gestión Institucional
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-text dark:text-white leading-tight">
                Estructura Administrativa
              </h2>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-primary/20 to-transparent dark:from-white/10 mb-5"></div>

          <p className="text-sm md:text-base text-slate-text/75 dark:text-dark-text/75 leading-relaxed text-justify max-w-3xl">
            La gestión administrativa del IESTP Suiza se rige por principios de transparencia, eficiencia 
            y eficacia. Nuestra estructura organizativa permite una administración óptima de los recursos 
            institucionales al servicio de la comunidad educativa.
          </p>
        </div>
      </div>

      {/* ─── STATS ROW ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-5 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-primary dark:text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-primary dark:text-secondary mb-1">
                <AnimatedNumber value={s.value} />
              </p>
              <p className="text-[11px] text-slate-text/60 dark:text-dark-text/60 font-medium">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* ─── DEPARTAMENTOS / ÁREAS ADMINISTRATIVAS ─── */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent dark:from-white/10"></div>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary/50 dark:text-dark-text/50">
            Áreas Administrativas
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-primary/20 to-transparent dark:from-white/10"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {staffMembers.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className="group flex flex-col items-center text-center cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {/* Photo */}
                <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl ${member.lightBg} flex items-center justify-center ring-4 ring-white dark:ring-dark-card shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden mb-3`}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <Icon className={`w-12 h-12 ${member.textColor}`} />
                  )}
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-end justify-center pb-2`}>
                    <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver más</span>
                  </div>
                </div>

                {/* Cargo */}
                <h3 className="font-bold text-sm text-slate-text dark:text-white leading-tight">
                  {member.position}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── MODAL FULL-SCREEN ─── */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[80] flex flex-col md:flex-row"
          onClick={() => setSelectedMember(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-blue-900/15 dark:bg-[#001A41]/40 backdrop-blur-xl animate-fs-fade" />

          {/* ─── PANEL IZQUIERDO: Imagen / Icono ─── */}
          <div
            className="relative w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 dark:from-[#001A41] dark:via-[#002D7A] dark:to-[#0044B2] flex items-center justify-center animate-fs-slide-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decoración de fondo */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/40 blur-2xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/30 blur-3xl" />
              <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/35 blur-xl" />
            </div>

            {/* Foto o icono — centrado, grande */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-sm ring-4 ring-white/40 dark:ring-white/20 flex items-center justify-center overflow-hidden shadow-2xl">
              {selectedMember.photo ? (
                <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
              ) : (
                (() => {
                  const ModalIcon = selectedMember.icon;
                  return <ModalIcon className="w-32 h-32 md:w-40 md:h-40 text-blue-700 dark:text-white" />;
                })()
              )}
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 md:top-6 md:right-6 z-20 w-11 h-11 rounded-full bg-white/30 dark:bg-white/15 backdrop-blur-md flex items-center justify-center text-blue-800 dark:text-white hover:bg-white/50 dark:hover:bg-white/30 transition-all duration-200 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ─── PANEL DERECHO: Información ─── */}
          <div
            className="relative w-full md:w-1/2 flex-1 bg-white/80 dark:bg-[#001A41]/60 backdrop-blur-xl overflow-hidden animate-fs-slide-right border-l border-blue-200/30 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decoración sutil de fondo */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/20 dark:bg-[#0044B2]/8 rounded-full blur-3xl" />
              <div className="absolute bottom-20 -left-10 w-48 h-48 bg-blue-100/30 dark:bg-[#002D7A]/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-200/15 dark:bg-[#0044B2]/5 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 p-6 md:p-8 lg:p-10">

              {/* ─── HEADER con accent bar ─── */}
              <div className="flex gap-4 mb-8">
                <div className="w-1 self-stretch bg-gradient-to-b from-primary via-[#7DAEF5] to-secondary dark:from-[#0044B2] dark:via-[#7DAEF5] dark:to-[#002D7A] rounded-full flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full bg-primary/10 dark:bg-[#0044B2]/20 text-primary dark:text-[#7DAEF5] mb-3 backdrop-blur-sm">
                    {selectedMember.area}
                  </span>
                  <h3 className="font-extrabold text-2xl md:text-3xl text-slate-text dark:text-white leading-tight mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary dark:text-[#7DAEF5]">
                    {selectedMember.position}
                  </p>
                </div>
              </div>

              {/* ─── FUNCIONES ─── */}
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 dark:bg-[#0044B2]/20 flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-primary dark:text-[#7DAEF5]" />
                  </div>
                  <p className="text-xs font-bold tracking-wider uppercase text-slate-text/50 dark:text-white/50">
                    Funciones
                  </p>
                  <div className="flex-1 h-px bg-blue-200/30 dark:bg-white/5" />
                  <span className="text-[10px] font-bold text-slate-text/25 dark:text-white/25">{selectedMember.functions.length}</span>
                </div>

                <div className="space-y-1.5">
                  {selectedMember.functions.map((fn, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-white/5 border border-transparent hover:border-blue-200/30 dark:hover:border-white/5 transition-all duration-200 animate-fs-fade"
                      style={{ animationDelay: `${0.2 + i * 0.06}s` }}
                    >
                      <span className="w-6 h-6 rounded-lg bg-primary/10 dark:bg-[#0044B2]/15 flex items-center justify-center flex-shrink-0 text-[10px] font-extrabold text-primary dark:text-[#7DAEF5] group-hover:bg-primary/20 dark:group-hover:bg-[#0044B2]/30 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-text/70 dark:text-white/70 leading-snug pt-0.5 group-hover:text-slate-text dark:group-hover:text-white/90 transition-colors">
                        {fn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─── CONTACTO ─── */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 dark:bg-[#0044B2]/20 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-primary dark:text-[#7DAEF5]" />
                  </div>
                  <p className="text-xs font-bold tracking-wider uppercase text-slate-text/50 dark:text-white/50">
                    Contacto
                  </p>
                  <div className="flex-1 h-px bg-blue-200/30 dark:bg-white/5" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-br from-blue-50/60 to-blue-100/40 dark:from-[#0044B2]/10 dark:to-[#002D7A]/10 border border-blue-200/30 dark:border-[#0044B2]/15 hover:border-primary/30 dark:hover:border-[#0044B2]/30 hover:from-blue-50 dark:hover:from-[#0044B2]/15 hover:to-blue-100/60 dark:hover:to-[#002D7A]/15 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 dark:bg-[#0044B2]/25 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Mail className="w-4 h-4 text-primary dark:text-[#7DAEF5]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-text/40 dark:text-white/35 mb-0.5">Email</p>
                        <p className="text-xs text-slate-text/70 dark:text-white/70 truncate group-hover:text-primary dark:group-hover:text-white/90 transition-colors">{selectedMember.email}</p>
                      </div>
                    </a>
                  )}
                  {selectedMember.phone && (
                    <a
                      href={`tel:${selectedMember.phone.replace(/\s/g, '')}`}
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-br from-blue-50/60 to-blue-100/40 dark:from-[#0044B2]/10 dark:to-[#002D7A]/10 border border-blue-200/30 dark:border-[#0044B2]/15 hover:border-primary/30 dark:hover:border-[#0044B2]/30 hover:from-blue-50 dark:hover:from-[#0044B2]/15 hover:to-blue-100/60 dark:hover:to-[#002D7A]/15 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 dark:bg-[#0044B2]/25 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary dark:text-[#7DAEF5]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-text/40 dark:text-white/35 mb-0.5">Teléfono</p>
                        <p className="text-xs text-slate-text/70 dark:text-white/70 group-hover:text-primary dark:group-hover:text-white/90 transition-colors">{selectedMember.phone}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ─── DOCUMENTOS DE GESTIÓN ─── */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent dark:from-white/10"></div>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary/50 dark:text-dark-text/50">
            Documentos de Gestión
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-primary/20 to-transparent dark:from-white/10"></div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-sm border border-primary/10 dark:border-white/8">
          <div className="absolute inset-0 z-0">
            <img src={equipoImg} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/75 to-white/70 dark:from-dark-card/92 dark:via-dark-card/88 dark:to-dark-card/85 z-10"></div>

          <div className="relative z-20 px-8 md:px-12 py-10 md:py-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/5 dark:ring-primary/10">
                <FileText className="w-6 h-6 text-primary dark:text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-text dark:text-white">Documentos de Gestión</h3>
                <p className="text-xs text-slate-text/50 dark:text-dark-text/50">Instrumentos de planificación y gestión institucional</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {documents.map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <div key={idx} className="group relative rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${doc.grad}`}></div>

                    <div className="flex flex-col items-center text-center">
                      <div className={`w-14 h-14 rounded-2xl ${doc.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${doc.iconColor}`} />
                      </div>
                      <h4 className="font-bold text-sm text-slate-text dark:text-white mb-2">{doc.title}</h4>
                      <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{doc.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <div className="mt-6 text-center">
              <p className="text-[10px] text-slate-text/40 dark:text-dark-text/40">
                Estos documentos se encuentran disponibles en la mesa de partes y en el portal de transparencia institucional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutPageShell>
  );
}