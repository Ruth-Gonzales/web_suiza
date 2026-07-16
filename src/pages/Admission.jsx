import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { ChevronDown, ChevronUp, FileText, CalendarRange, HandshakeIcon, HeadphonesIcon, Layers, GraduationCap, BookOpen, Building2, Clock } from 'lucide-react';
import useInstitutionalTexture from '../hooks/useInstitutionalTexture';

const INST_STATS = [
  { icon: GraduationCap, value: "1,600+", label: "Estudiantes formados" },
  { icon: Clock, value: "57+", label: "Años de experiencia" },
  { icon: BookOpen, value: "11", label: "Carreras profesionales" },
  { icon: Building2, value: "30+", label: "Convenios institucionales" },
];

const INFO_SECTIONS = [
  {
    icon: Layers,
    title: "Modalidades de Admisión",
    items: [
      "Examen de Admisión General (febrero y agosto)",
      "Ingreso Directo para Primeros Puestos",
      "Egresados de Colegio",
      "Traslados Externos",
      "Experiencia Laboral",
      "Ingreso por Convenio",
      "Deportistas Calificados",
    ],
  },
  {
    icon: CalendarRange,
    title: "Cronograma",
    items: [
      "Inscripciones: Enero – Marzo / Julio – Agosto",
      "Examen de Admisión: Marzo y Agosto",
      "Matrícula Regulares: Abril y Setiembre",
    ],
  },
  {
    icon: FileText,
    title: "Requisitos",
    items: [
      "Certificado oficial de estudios secundarios",
      "DNI vigente (copia simple)",
      "Partida de nacimiento original",
      "2 fotografías tamaño carnet fondo blanco",
      "Recibo de pago por derecho de inscripción",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Becas y Convenios",
    items: [
      "Beca Permanencia PRONABEC",
      "Convenios para prácticas en entidades públicas y privadas",
      "Bolsas de trabajo activas",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Asesoría",
    items: [
      "Orientación vocacional personalizada",
      "Información sobre carreras y campo laboral",
      "Asistencia en el proceso de inscripción",
    ],
  },
];

export default function Admission({ t }) {
  useInstitutionalTexture();
  const [activeFaq, setActiveFaq] = useState(null);

  const faqItems = [
    { id: 1, question: t.faq.q1, answer: t.faq.a1 },
    { id: 2, question: t.faq.q2, answer: t.faq.a2 },
    { id: 3, question: t.faq.q3, answer: t.faq.a3 },
    { id: 4, question: t.faq.q4, answer: t.faq.a4 }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      {/* ===== HERO ===== */}
      <section className="relative mb-16 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 dark:from-primary/[0.07] dark:via-dark-card dark:to-secondary/[0.05] border border-primary/10 dark:border-white/8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold text-xs tracking-wider uppercase mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>ADMISIÓN 2026</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-text dark:text-white leading-tight tracking-tight">
              Tu futuro profesional{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                comienza aquí
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-text/70 dark:text-dark-text/70 mt-4 max-w-2xl leading-relaxed">
              Da el primer paso hacia una carrera con futuro. Estudia en el IESTP Suiza, una institución licenciada por el MINEDU con formación técnica de calidad, docentes especializados y modernos laboratorios.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl">
            {INST_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/10 dark:border-white/8 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 dark:from-primary/20 dark:to-secondary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-text dark:text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-text/60 dark:text-dark-text/60 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <a
              href="/#/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-dark-card border border-primary/20 dark:border-white/8 text-slate-text dark:text-white font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Contáctanos
            </a>
            <a
              href="/#/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-dark-card border border-primary/20 dark:border-white/8 text-slate-text dark:text-white font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Ver Programas
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer">
              📥 Descargar Prospecto
            </button>
          </div>
        </div>
      </section>

      {/* ===== INFO GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {INFO_SECTIONS.map((section, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 dark:from-primary/20 dark:to-secondary/10 flex items-center justify-center mb-4">
              <section.icon className="w-5 h-5 text-primary dark:text-secondary" />
            </div>
            <h3 className="text-base font-bold text-slate-text dark:text-white mb-3">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {section.items.map((item, i) => (
                <li key={i}>
                  {idx === 0 ? (
                    <a
                      href="/#/contact"
                      className="flex items-start gap-2 text-sm text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-secondary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-secondary/40 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-2 text-sm text-slate-text/70 dark:text-dark-text/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-secondary/40 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===== FAQ + FORM ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contacto">
        <div className="lg:col-span-7">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-text dark:text-white">
              {t.faq.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-1">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqItems.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-light/40 dark:hover:bg-dark-border/20 transition-all font-semibold text-sm md:text-base text-slate-text dark:text-white cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed border-t border-primary/5 animate-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <ContactForm t={t} />
        </div>
      </div>
    </div>
  );
}
