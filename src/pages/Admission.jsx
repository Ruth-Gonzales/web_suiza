import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import CareerEligibilityWidget from '../components/CareerEligibilityWidget';
import { ChevronDown, ChevronUp, FileText, CheckSquare, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const getLangCode = (t) => {
  if (t.nav?.home === "Inicio") return "es";
  if (t.nav?.home === "Home") return "en";
  return "sh";
};

export default function Admission({ t }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const galleryItems = [
    {
      title: "Desarrollo de Sistemas de Información",
      desc: "Nuestros laboratorios están equipados con computadoras de última generación, ideales para el desarrollo de software, bases de datos, redes y servidores.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Desarrollo-de-sistemas-de-informacion-scaled.jpg"
    },
    {
      title: "Construcción Civil",
      desc: "Prácticas de levantamientos topográficos, dibujo técnico digital, diseño de obras, costos y presupuestos para edificaciones y obras viales.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Construccion-Civil-scaled.jpg"
    },
    {
      title: "Enfermería Técnica",
      desc: "Talleres y simuladores de cuidado del paciente, primeros auxilios, farmacología básica, inmunización y salud pública preventiva.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Enferrmeria-Tecnica.jpg"
    },
    {
      title: "Contabilidad",
      desc: "Formación especializada en gestión de libros contables físicos y digitales, planillas tributarias, costos de empresas y auditoría.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Contabilidad.jpg"
    },
    {
      title: "Mecatrónica Automotriz",
      desc: "Contamos con escáneres automotrices de última generación, motores en corte y módulos electrónicos reales para prácticas profesionales.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Mecatronica-Automotriz-scaled.jpg"
    },
    {
      title: "Electricidad Industrial",
      desc: "Espacio especializado en automatización de sistemas eléctricos industriales, programación de tableros PLC y control de máquinas eléctricas.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Electricidad-Industrial-scaled.jpg"
    },
    {
      title: "Producción Agropecuaria",
      desc: "Campos de cultivo e invernaderos tecnificados donde los estudiantes realizan prácticas directas de injertos, cultivo y biotecnología vegetal.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Produccion-Agropecuaria-scaled.jpg"
    },
    {
      title: "Manejo Forestal",
      desc: "Áreas de silvicultura y conservación de especies forestales nativas de la Amazonía peruana, equipadas con sistemas de georreferenciación forestal.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Administracion-de-Recursos-Forestales-scaled.jpg"
    },
    {
      title: "Asistencia Administrativa",
      desc: "Técnicas modernas de administración documentaria, correspondencia mercantil, redacción comercial, ofimática de oficina y atención al cliente.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/SecEj-1.jpg"
    },
    {
      title: "Administración de Empresas",
      desc: "Planificación estratégica de negocios, mercadotecnia, control logístico, finanzas corporativas y dirección eficaz de personal.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Docentes-Suiza.jpg"
    },
    {
      title: "Administración de Operaciones Turísticas",
      desc: "Planificación de paquetes turísticos, guiado ecológico y de aventura en reservas amazónicas, y dirección de empresas de servicios hoteleros.",
      img: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Suiza.webp"
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Autoplay timer effect for the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 4500); // changes slide every 4.5 seconds

    return () => clearInterval(timer);
  }, [activeSlide]);

  const faqItems = [
    { id: 1, question: t.faq.q1, answer: t.faq.a1 },
    { id: 2, question: t.faq.q2, answer: t.faq.a2 },
    { id: 3, question: t.faq.q3, answer: t.faq.a3 },
    { id: 4, question: t.faq.q4, answer: t.faq.a4 }
  ];

  const requirements = [
    "Certificado oficial de estudios secundarios completos.",
    "Copia simple de Documento Nacional de Identidad (DNI) vigente.",
    "Partida de nacimiento original.",
    "2 Fotografías tamaño carnet en fondo blanco.",
    "Recibo de pago por derecho de inscripción al examen."
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Custom keyframe styles for progress bar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />
      {/* Hero Banner with Official Image & Student Cutout */}
      <section className="relative w-full h-[320px] md:h-[380px] overflow-hidden -mt-4 bg-gradient-to-r from-primary to-primary-dark">
        {/* Background Image with Overlay */}
        <img
          src="https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Suiza.webp"
          alt="Admisión IESTP Suiza"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/65 via-primary/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="max-w-2xl text-left">
            <span className="text-[9px] md:text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full tracking-widest uppercase inline-block mb-3.5 animate-pulse">
              Proceso de Admisión 2026 Abierto
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              {t.nav.admission} IESTP Suiza
            </h2>
            <p className="text-sm md:text-base text-white/90 mt-3 leading-relaxed max-w-lg drop-shadow-sm">
              Inicia tu camino hacia la excelencia académica y conviértete en un profesional técnico calificado de alta demanda. Conoce los requisitos y regístrate hoy mismo.
            </p>
          </div>

          {/* Student Cutout Graphic (Hidden on mobile for clean layouts) */}
          <div className="hidden md:block h-full relative w-80 shrink-0 select-none pointer-events-none">
            <img
              src="https://iestpsuiza.edu.pe/wp-content/uploads/2023/09/AnyConv.com__DSC_1082-removebg-preview.webp"
              alt="Estudiante Suiza"
              className="absolute bottom-0 right-0 h-[105%] w-auto object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
        <div className="bg-circle-1 top-20 right-10"></div>
        <div className="bg-circle-2 bottom-20 left-10"></div>

        {/* Content Split: Left (Requirements & FAQs) | Right (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Requirements & FAQs */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Interactive Career Assistant & Eligibility Simulator */}
            <CareerEligibilityWidget lang={getLangCode(t)} />
            
            {/* Section: Requirements */}
            <div className="text-left bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 p-6 md:p-8 rounded-[2rem] shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-slate-text dark:text-white flex items-center gap-2.5 mb-5 border-b border-primary/5 pb-3">
                <FileText className="w-5 h-5 text-primary" />
                <span>Requisitos de Postulación</span>
              </h3>
              
              <ul className="flex flex-col gap-3.5 text-sm md:text-base text-slate-text/80 dark:text-dark-text/80">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Award className="w-4 h-4" />
                <span>Modalidades de Ingreso Libre para Primeros Puestos y Deportistas Calificados</span>
              </div>
            </div>

            {/* Section: FAQs (Adapted from example1.jpg options) */}
            <div className="text-left">
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
                      className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 overflow-hidden transition-all duration-300 shadow-sm"
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

          </div>

          {/* Right Side: Form card */}
          <div className="lg:col-span-5 w-full">
            <ContactForm t={t} />
          </div>

        </div>

        {/* Official Campus & Workshop Gallery Carousel */}
        <div className="pb-8 pt-12 mt-16 border-t border-primary/5">
          <div className="text-left mb-8 flex justify-between items-end">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-text dark:text-white tracking-tight">
                Nuestra Infraestructura y Talleres Especializados
              </h3>
              <p className="text-xs md:text-sm text-slate-text/75 dark:text-dark-text/70 mt-1.5 leading-relaxed">
                Conoce los laboratorios, de simulación y campos de práctica donde desarrollarás tus habilidades reales.
              </p>
            </div>
            
            {/* Carousel Arrow Controls */}
            <div className="flex gap-2 shrink-0">
              <button 
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full border border-primary/10 dark:border-dark-border/60 hover:bg-primary hover:text-white flex items-center justify-center transition-all cursor-pointer text-slate-text dark:text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full border border-primary/10 dark:border-dark-border/60 hover:bg-primary hover:text-white flex items-center justify-center transition-all cursor-pointer text-slate-text dark:text-white"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Slide Container */}
          <div className="relative w-full min-h-[300px] md:h-[360px] rounded-[2rem] overflow-hidden border border-primary/5 dark:border-dark-border/40 shadow-lg bg-white dark:bg-dark-card flex flex-col md:flex-row">
            
            {/* Automatic progress bar timeline indicator at the top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100/50 dark:bg-dark-border/20 z-20">
              <div 
                key={activeSlide}
                className="h-full bg-primary"
                style={{ animation: 'progress-bar 4.5s linear forwards' }}
              />
            </div>

            {/* Left Box (Text Info) - transitions on slide change using key */}
            <div key={activeSlide} className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-between text-left relative z-10 animate-in fade-in slide-in-from-left-8 duration-500 shrink-0">
              <div>
                <span className="text-[9px] font-bold text-primary dark:text-secondary tracking-widest uppercase block mb-2">
                  Campus Suiza • Instalación {activeSlide + 1} de {galleryItems.length}
                </span>
                <h4 className="text-lg md:text-xl font-extrabold text-slate-text dark:text-white leading-tight">
                  {galleryItems[activeSlide].title}
                </h4>
                <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-3 md:mt-4 leading-relaxed">
                  {galleryItems[activeSlide].desc}
                </p>
              </div>

              {/* Slide Indicator Dots */}
              <div className="flex gap-1.5 mt-6 md:mt-0">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === idx ? 'w-6 bg-primary' : 'w-1.5 bg-slate-200 dark:bg-dark-border'
                    }`}
                    aria-label={`Ir al slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Box (Slide Image) - Continuous horizontal sliding ribbon */}
            <div className="w-full md:w-3/5 h-[200px] md:h-full relative overflow-hidden flex-shrink-0 flex-1">
              <div 
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)`, display: 'flex' }}
              >
                {galleryItems.map((item, idx) => (
                  <div key={idx} className="w-full h-full shrink-0 relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Fade gradient overlay for split transition effect */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white dark:from-dark-card via-white/5 to-transparent md:w-[20%] w-full h-1/4 md:h-full top-0 left-0 pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
