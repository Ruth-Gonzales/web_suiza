import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Wrench, 
  Heart, 
  Trees, 
  Code, 
  FileText, 
  Sparkles, 
  Clock, 
  Coins, 
  MessageSquare,
  Award,
  Check,
  Briefcase,
  Globe,
  Zap
} from 'lucide-react';

const localTranslations = {
  es: {
    title: "Asistente de Carreras y Simulador de Elegibilidad",
    subtitle: "Descubre tu programa ideal y valida tus requisitos de admisión para el periodo 2026.",
    startBtn: "Comenzar Simulación",
    nextBtn: "Siguiente",
    prevBtn: "Atrás",
    restartBtn: "Nueva Simulación",
    step: "Paso",
    of: "de",
    interestTitle: "1. Selecciona la carrera profesional que te interesa",
    interestDesc: "Elige una de nuestras 11 especialidades oficiales para verificar tus requisitos.",
    secondaryTitle: "2. ¿Has culminado la educación secundaria completa?",
    secondaryDesc: "Es un requisito indispensable de acuerdo a la Ley de Institutos de Educación Superior en el Perú.",
    secondaryYes: "Sí, he culminado la secundaria (1° a 5° de secundaria)",
    secondaryNo: "No, aún estoy cursando la secundaria / Pendiente",
    docsTitle: "3. ¿Qué documentos tienes a la mano o en trámite?",
    docsDesc: "Selecciona los documentos que posees actualmente para postular. Si no tienes todos, no te preocupes, puedes tramitarlos.",
    modalityTitle: "4. ¿Cumples con alguna condición especial de postulación?",
    modalityDesc: "El IESTP Suiza premia el talento y ofrece facilidades de ingreso a modalidades especiales.",
    resultsTitle: "Tus Resultados de Elegibilidad - Admisión 2026",
    eligibleGreen: "ELEGIBLE COMPLETO",
    eligibleYellow: "ELEGIBLE CON DOCUMENTOS PENDIENTES",
    ineligibleRed: "NO ELEGIBLE AÚN",
    matchLabel: "Programa Seleccionado",
    statusLabel: "Estado de Postulación",
    modalityLabel: "Modalidad y Tasa de Inscripción",
    flowTitle: "Tu Flujo de Solicitud Claro y Rastreable",
    flowStep1: "1. Solicitud Directa",
    flowStep1Desc: "Completa el formulario en el lado derecho de la pantalla para reservar tu vacante de orientación.",
    flowStep2: "2. Pago de Inscripción",
    flowStep2Desc: "Realiza el pago único correspondiente en la Oficina de Tesorería del campus.",
    flowStep3: "3. Entrega de Carpeta",
    flowStep3Desc: "Entrega tus requisitos físicos en la Oficina de Admisión del campus.",
    flowStep4: "4. Examen de Admisión",
    flowStep4Desc: "Rinde la evaluación de aptitud y conocimientos el Domingo 30 de Agosto de 2026.",
    flowStep5: "5. Resultados e Inicio",
    flowStep5Desc: "Publicación de resultados el 31 de Agosto y comienzo de clases el 07 de Septiembre.",
    supportTitle: "¿Necesitas ayuda personalizada?",
    supportDesc: "Nuestro equipo y el asistente SuizaAI están disponibles para resolver tus dudas particulares sobre la matrícula.",
    btnPrefill: "Iniciar Inscripción Directa",
    btnChatbot: "Preguntar a SuizaAI",
    docDni: "DNI vigente (o Partida de Nacimiento original)",
    docCert: "Certificado oficial de estudios de 1° a 5° de secundaria",
    docSalud: "Certificado de salud y aptitud física/mental",
    docFotos: "4 fotos tamaño carnet con fondo blanco",
    modOrdinary: "Postulación Regular (Examen Ordinario General)",
    modFirst: "Primeros Puestos de Colegios Secundarios",
    modAthlete: "Deportista Calificado / Representante Deportivo",
    modNative: "Miembro de Comunidad Nativa o Persona con Discapacidad (Convenio Especial)"
  },
  en: {
    title: "Career Assistant & Eligibility Simulator",
    subtitle: "Discover your ideal program and validate your admission requirements for the 2026 period.",
    startBtn: "Start Simulation",
    nextBtn: "Next",
    prevBtn: "Back",
    restartBtn: "New Simulation",
    step: "Step",
    of: "of",
    interestTitle: "1. Select the technical career program you are interested in",
    interestDesc: "Choose one of our 11 official specialties to verify your requirements.",
    secondaryTitle: "2. Have you completed high school education?",
    secondaryDesc: "This is a mandatory requirement according to the Peruvian Higher Education Institute Law.",
    secondaryYes: "Yes, I have completed high school",
    secondaryNo: "No, I am still in high school / Pending",
    docsTitle: "3. Which documents do you have ready or pending?",
    docsDesc: "Select the documents you currently possess to apply. If you don't have all, don't worry, you can obtain them.",
    modalityTitle: "4. Do you qualify for any special admission conditions?",
    modalityDesc: "IESTP Suiza rewards talent and offers entry benefits under special modalities.",
    resultsTitle: "Your Eligibility Results - 2026 Admission",
    eligibleGreen: "FULLY ELIGIBLE",
    eligibleYellow: "ELIGIBLE WITH PENDING DOCUMENTS",
    ineligibleRed: "NOT ELIGIBLE YET",
    matchLabel: "Selected Program",
    statusLabel: "Application Status",
    modalityLabel: "Modality & Enrollment Fee",
    flowTitle: "Your Clear and Trackable Application Flow",
    flowStep1: "1. Direct Registration",
    flowStep1Desc: "Fill in the contact form on the right to reserve your academic guidance spot.",
    flowStep2: "2. Admission Fee Payment",
    flowStep2Desc: "Make the single payment at the main campus Treasury Office.",
    flowStep3: "3. Document Submission",
    flowStep3Desc: "Deliver your physical documents to the Admissions Office at the campus.",
    flowStep4: "4. Admission Exam",
    flowStep4Desc: "Take the general knowledge exam on Sunday, August 30, 2026.",
    flowStep5: "5. Results & Classes Start",
    flowStep5Desc: "Results published on August 31, classes start on September 07.",
    supportTitle: "Need personalized support?",
    supportDesc: "Our team and SwitzerlandAI are available to answer your specific enrollment questions.",
    btnPrefill: "Start Direct Registration",
    btnChatbot: "Ask SuizaAI Chatbot",
    docDni: "Valid DNI (or original Birth Certificate)",
    docCert: "Official High School Transcripts",
    docSalud: "Health & Physical/Mental Fitness Certificate",
    docFotos: "4 Passport-sized photos (white background)",
    modOrdinary: "Regular Application (General Admission Exam)",
    modFirst: "School Valedictorians / Top Performers",
    modAthlete: "Qualified Athlete / Sports Representative",
    modNative: "Native Community Member or Disabled Person (Special Agreement)"
  },
  sh: {
    title: "Joni Raonti & Tapon Nete Simulatibo (Admisión 2026)",
    subtitle: "Onanwe min joni tebo jainoax admision 2026 papilbo. Axon weenwe.",
    startBtn: "Pecanwe Simulatibo",
    nextBtn: "Jeni",
    prevBtn: "Coriki",
    restartBtn: "Jasei Simulatibo",
    step: "Paso",
    of: "non",
    interestTitle: "1. ¿Jawe joiti onanmabo min onan kasman?",
    interestDesc: "Katwe jawe ja min shinanya, min shina tebox.",
    secondaryTitle: "2. ¿Min secundaria camaseya?",
    secondaryDesc: "Requisito jawen leibo paron tebo Peru.",
    secondaryYes: "Jehe, en secundaria camaseya",
    secondaryNo: "Jaque, en secundaria ja camaseyamax",
    docsTitle: "3. ¿Jawe papilbo min tsehuaya o tranmete?",
    docsDesc: "Katwe min papilbo jain riki. Min yamax nincanwe.",
    modalityTitle: "4. ¿Min joni pehe modalisabo quin?",
    modalityDesc: "IESTP Suiza in raonta copibo joni pehe quin.",
    resultsTitle: "Min Onanti - Admisión 2026",
    eligibleGreen: "ELEGIBLE COMPLETO (PEHE)",
    eligibleYellow: "ELEGIBLE PAPIL PENDIENTE",
    ineligibleRed: "NO ELEGIBLE JAQUE YAMAX",
    matchLabel: "Program Recomendabo",
    statusLabel: "Onanti Status",
    modalityLabel: "Modalidad jainoax Copi",
    flowTitle: "Min Nete Solicitud Rastreable",
    flowStep1: "1. Formulario Onan",
    flowStep1Desc: "Formulario meenwe jainoax min reservabo quin.",
    flowStep2: "2. Copi Tesoreria",
    flowStep2Desc: "Copi senenwe tesoreria campus oche.",
    flowStep3: "3. Papil Biwe",
    flowStep3Desc: "Papilbo biwe oficina admision campus.",
    flowStep4: "4. Examen Tepo",
    flowStep4Desc: "Examen rindenwe Domingo 30 de Agosto 2026.",
    flowStep5: "5. Matrícula y Clases",
    flowStep5Desc: "Resultados 31 de Agosto, clases jenen 07 de Septiembre.",
    supportTitle: "¿Min ayuda shinanya?",
    supportDesc: "Noa SuizaAI non mia ayudaxox.",
    btnPrefill: "Inscripción Directa Pecanwe",
    btnChatbot: "SuizaAI Nincanwe",
    docDni: "DNI papil o Partida Nacimiento",
    docCert: "Certificado secundaria 1° a 5°",
    docSalud: "Certificado Salud Minsa/Essalud",
    docFotos: "4 foto carnet po",
    modOrdinary: "Examen Ordinario General",
    modFirst: "Primeros Puestos",
    modAthlete: "Deportista Calificado",
    modNative: "Comunidad Nativa / Discapacidad"
  }
};

const careersInfo = {
  sys: {
    id: "sys",
    name: "Desarrollo de Sistemas de Información",
    category: "tech",
    desc: "Diseño y desarrollo de software, aplicaciones móviles, bases de datos y administración de redes y servidores.",
    color: "from-blue-500 to-indigo-600",
    icon: Code,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Desarrollo-de-sistemas-de-informacion-scaled.jpg"
  },
  civil: {
    id: "civil",
    name: "Construcción Civil",
    category: "tech",
    desc: "Dibujo técnico, topografía, costos, presupuestos y control de calidad en obras públicas y edificaciones.",
    color: "from-amber-600 to-yellow-700",
    icon: Wrench,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Construccion-Civil-scaled.jpg"
  },
  enfer: {
    id: "enfer",
    name: "Enfermería Técnica",
    category: "health",
    desc: "Cuidado integral del paciente, primeros auxilios, salud preventiva y prácticas preprofesionales en hospitales.",
    color: "from-rose-500 to-red-600",
    icon: Heart,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Enferrmeria-Tecnica.jpg"
  },
  admin: {
    id: "admin",
    name: "Administración de Empresas",
    category: "business",
    desc: "Planificación estratégica, marketing de ventas, finanzas corporativas y gestión de recursos humanos.",
    color: "from-violet-500 to-purple-600",
    icon: Briefcase,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Suiza.webp"
  },
  cont: {
    id: "cont",
    name: "Contabilidad",
    category: "business",
    desc: "Gestión de información contable, planillas electrónicas, tributación mensual y auditoría de finanzas.",
    color: "from-sky-500 to-blue-600",
    icon: Coins,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Contabilidad.jpg"
  },
  asist: {
    id: "asist",
    name: "Asistencia Administrativa",
    category: "business",
    desc: "Organización de procesos documentarios, correspondencia comercial, ofimática y logística de oficina.",
    color: "from-indigo-500 to-purple-600",
    icon: FileText,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/SecEj-1.jpg"
  },
  tur: {
    id: "tur",
    name: "Administración de Operaciones Turísticas",
    category: "business",
    desc: "Planificación de servicios turísticos, guiado ecológico en Amazonía, gestión hotelera y paquetes turísticos.",
    color: "from-cyan-500 to-teal-600",
    icon: Globe,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Suiza.webp"
  },
  meca: {
    id: "meca",
    name: "Mecatrónica Automotriz",
    category: "field",
    desc: "Diagnóstico computarizado con scanner, mantenimiento de motores y sistemas electrónicos vehiculares modernos.",
    color: "from-amber-500 to-orange-600",
    icon: Wrench,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Mecatronica-Automotriz-scaled.jpg"
  },
  elec: {
    id: "elec",
    name: "Electricidad Industrial",
    category: "field",
    desc: "Instalación, operación y automatización de sistemas eléctricos industriales, motores y programación con PLC.",
    color: "from-yellow-500 to-amber-600",
    icon: Zap,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Electricidad-Industrial-scaled.jpg"
  },
  agro: {
    id: "agro",
    name: "Producción Agropecuaria",
    category: "field",
    desc: "Gestión de producción agrícola y pecuaria con biotecnología, buenas prácticas agrícolas y tecnificación.",
    color: "from-green-600 to-emerald-700",
    icon: Trees,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Produccion-Agropecuaria-scaled.jpg"
  },
  forest: {
    id: "forest",
    name: "Manejo Forestal",
    category: "field",
    desc: "Conservación ambiental, teledetección (SIG), reforestación y aprovechamiento sostenible de recursos maderables.",
    color: "from-emerald-500 to-teal-600",
    icon: Trees,
    image: "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Administracion-de-Recursos-Forestales-scaled.jpg"
  }
};

export default function CareerEligibilityWidget({ lang = 'es' }) {
  const [step, setStep] = useState(0); // 0: Intro, 1: Interest, 2: Secondary, 3: Docs, 4: Modality, 5: Results
  const [interest, setInterest] = useState('sys');
  const [isSecondaryComplete, setIsSecondaryComplete] = useState(true);
  const [documents, setDocuments] = useState({
    dni: true,
    cert: false,
    salud: false,
    fotos: false
  });
  const [modality, setModality] = useState('ordinario');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const text = localTranslations[lang] || localTranslations['es'];

  const handleDocToggle = (key) => {
    setDocuments(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleReset = () => {
    setStep(1);
    setInterest('sys');
    setIsSecondaryComplete(true);
    setDocuments({
      dni: true,
      cert: false,
      salud: false,
      fotos: false
    });
    setModality('ordinario');
    setCategoryFilter('all');
  };

  // Eligibility Evaluation
  const evalEligibility = () => {
    if (!isSecondaryComplete) {
      return {
        status: 'RED',
        label: text.ineligibleRed,
        colorClass: 'bg-red-500/10 text-red-600 border-red-500/20 dark:bg-red-500/20 dark:text-red-400',
        desc: "Para poder postular al instituto superior tecnológico necesitas tener toda tu secundaria completa. Si no la tienes completa, no podrás postular."
      };
    }

    const hasAllDocs = documents.dni && documents.cert && documents.salud && documents.fotos;
    if (hasAllDocs) {
      return {
        status: 'GREEN',
        label: text.eligibleGreen,
        colorClass: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400',
        desc: "¡Felicidades! Tienes todos los requisitos académicos y cuentas con la documentación lista para postular. Puedes proceder con tu inscripción ordinaria o preferencial."
      };
    } else {
      const missing = [];
      if (!documents.dni) missing.push("DNI");
      if (!documents.cert) missing.push("Certificado de Estudios");
      if (!documents.salud) missing.push("Certificado de Salud");
      if (!documents.fotos) missing.push("Fotografías carnet");

      return {
        status: 'YELLOW',
        label: text.eligibleYellow,
        colorClass: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400',
        desc: `Cumples con los requisitos de estudios secundarios, pero aún tienes documentos pendientes: (${missing.join(', ')}). No te preocupes: puedes iniciar tu inscripción ahora y presentar tu carpeta física completa en el campus hasta el 18 de agosto de 2026.`
      };
    }
  };

  // Cost and details of modality
  const getModalityDetails = () => {
    switch (modality) {
      case 'primer_puesto':
        return {
          title: text.modFirst,
          cost: "S/ 300.00",
          tag: "Ingreso Exonerado",
          note: "Esta modalidad exonera del examen ordinario a los 2 primeros puestos de colegios secundarios de la región Ucayali. Derecho de ingreso preferente."
        };
      case 'deportista':
        return {
          title: text.modAthlete,
          cost: "S/ 300.00",
          tag: "Ingreso Exonerado",
          note: "Destinado a deportistas calificados con acreditación del IPD. Se otorga ingreso libre sujeto a evaluación y vacantes disponibles."
        };
      case 'convenio':
        return {
          title: text.modNative,
          cost: "S/ 180.00",
          tag: "Convenio Especial (Matrícula Preferente)",
          note: "Costo especial subsidiado para miembros de comunidades nativas de la Amazonía y personas inscritas en el CONADIS."
        };
      case 'ordinario':
      default:
        return {
          title: text.modOrdinary,
          cost: "S/ 180.00",
          tag: "Examen General Ordinario",
          note: "Modalidad regular para egresados de secundaria. Se rinde el examen general teórico-práctico de admisión."
        };
    }
  };

  const handlePrefillClick = () => {
    const recommended = careersInfo[interest]?.name || "";
    const modalityDetails = getModalityDetails();
    const eligibility = evalEligibility();

    const prefillMessage = `Hola, he realizado la simulación de admisión en la plataforma y quiero iniciar mi preinscripción:
• Programa de interés: ${recommended}
• Modalidad: ${modalityDetails.title}
• Estado de Simulación: ${eligibility.label}
• Nombre Completo: [Tu Nombre Aquí]
• Teléfono: [Tu Teléfono Aquí]
¡Por favor, asístanme con la postulación para la Admisión 2026!`;

    const event = new CustomEvent('prefill-admission-form', {
      detail: { message: prefillMessage }
    });
    window.dispatchEvent(event);
  };

  const handleChatbotClick = () => {
    window.dispatchEvent(new CustomEvent('open-suiza-ai-chat'));
  };

  const recommendedCareer = careersInfo[interest];
  const eligibility = evalEligibility();
  const modalityDetails = getModalityDetails();

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All' : lang === 'sh' ? 'Jenebo' : 'Todas' },
    { id: 'tech', label: lang === 'en' ? 'Tech & Civil' : lang === 'sh' ? 'Tecnologia' : 'Tecnología y Construcción' },
    { id: 'health', label: lang === 'en' ? 'Health' : lang === 'sh' ? 'Salud' : 'Salud' },
    { id: 'business', label: lang === 'en' ? 'Business' : lang === 'sh' ? 'Negocios' : 'Gestión y Negocios' },
    { id: 'field', label: lang === 'en' ? 'Field & Engineering' : lang === 'sh' ? 'Campo' : 'Campo e Ingeniería' }
  ];

  const filteredCareers = Object.values(careersInfo).filter(
    c => categoryFilter === 'all' || c.category === categoryFilter
  );

  return (
    <div className="w-full bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(75,122,244,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />

      {/* STEP 0: INTRO SCREEN */}
      {step === 0 && (
        <div className="flex flex-col items-center text-center py-8 px-2 md:px-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-inner">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold text-slate-text dark:text-white tracking-tight leading-tight max-w-lg">
            {text.title}
          </h3>
          <p className="text-sm text-slate-text/75 dark:text-dark-text/70 mt-3 max-w-md leading-relaxed">
            {text.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={handleNext}
              className="w-full py-4 px-6 rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold text-sm tracking-wider shadow-lg shadow-primary/25 hover:shadow-primary-dark/35 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{text.startBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[10px] text-slate-text/50 dark:text-dark-text/40 font-medium">
              IESTP SUIZA • Admisión II Semestre 2026
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: SELECT CAREER */}
      {step === 1 && (
        <div className="flex flex-col text-left py-2 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-[10px] text-primary dark:text-secondary font-bold tracking-widest uppercase mb-2">
            <span>{text.step} 1 {text.of} 4</span>
            <span className="h-1.5 w-24 bg-primary/10 dark:bg-dark-border rounded-full overflow-hidden">
              <span className="block h-full bg-primary w-[25%] rounded-full"></span>
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-bold text-slate-text dark:text-white leading-tight">
            {text.interestTitle}
          </h4>
          <p className="text-xs text-slate-text/60 dark:text-dark-text/50 mt-1 mb-4">
            {text.interestDesc}
          </p>

          {/* Categories Tab Selector */}
          <div className="flex gap-1.5 overflow-x-auto pb-3.5 mb-2.5 border-b border-primary/5 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  categoryFilter === cat.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-light dark:bg-dark-border/40 text-slate-text/80 dark:text-dark-text/80 hover:bg-primary/10 hover:text-primary dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Careers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[300px] overflow-y-auto pr-1">
            {filteredCareers.map((career) => {
              const IconComp = career.icon;
              const isSelected = interest === career.id;
              return (
                <button
                  key={career.id}
                  onClick={() => setInterest(career.id)}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm' 
                      : 'border-primary/10 dark:border-dark-border/60 bg-transparent hover:bg-slate-light/40 dark:hover:bg-dark-border/20'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-primary text-white' : 'bg-primary/5 text-primary'} shrink-0`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-text dark:text-white leading-tight">
                      {career.name}
                    </h5>
                    <p className="text-[10px] text-slate-text/75 dark:text-dark-text/65 mt-1.5 leading-snug">
                      {career.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end gap-3 border-t border-primary/5 pt-4">
            <button
              onClick={handleNext}
              className="py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center gap-1.5 cursor-pointer"
            >
              <span>{text.nextBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SECUNDARIA */}
      {step === 2 && (
        <div className="flex flex-col text-left py-2 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-[10px] text-primary dark:text-secondary font-bold tracking-widest uppercase mb-2">
            <span>{text.step} 2 {text.of} 4</span>
            <span className="h-1.5 w-24 bg-primary/10 dark:bg-dark-border rounded-full overflow-hidden">
              <span className="block h-full bg-primary w-[50%] rounded-full"></span>
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-bold text-slate-text dark:text-white leading-tight">
            {text.secondaryTitle}
          </h4>
          <p className="text-xs text-slate-text/60 dark:text-dark-text/50 mt-1 mb-6">
            {text.secondaryDesc}
          </p>

          <div className="flex flex-col gap-4 max-w-xl">
            <button
              onClick={() => setIsSecondaryComplete(true)}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                isSecondaryComplete 
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm' 
                  : 'border-primary/10 dark:border-dark-border/60 bg-transparent hover:bg-slate-light/40 dark:hover:bg-dark-border/20'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSecondaryComplete ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>
                {isSecondaryComplete && <Check className="w-3.5 h-3.5" />}
              </div>
              <div>
                <span className="font-bold text-sm text-slate-text dark:text-white block">
                  {text.secondaryYes}
                </span>
              </div>
            </button>

            <button
              onClick={() => setIsSecondaryComplete(false)}
              className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                !isSecondaryComplete 
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm' 
                  : 'border-primary/10 dark:border-dark-border/60 bg-transparent hover:bg-slate-light/40 dark:hover:bg-dark-border/20'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${!isSecondaryComplete ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>
                {!isSecondaryComplete && <Check className="w-3.5 h-3.5" />}
              </div>
              <div>
                <span className="font-bold text-sm text-slate-text dark:text-white block">
                  {text.secondaryNo}
                </span>
              </div>
            </button>
          </div>

          <div className="mt-8 flex justify-between gap-3 border-t border-primary/5 pt-4">
            <button
              onClick={handlePrev}
              className="py-3 px-5 rounded-xl border border-primary/10 dark:border-dark-border text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/30 font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{text.prevBtn}</span>
            </button>
            <button
              onClick={handleNext}
              className="py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center gap-1.5 cursor-pointer"
            >
              <span>{text.nextBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: DOCUMENTOS */}
      {step === 3 && (
        <div className="flex flex-col text-left py-2 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-[10px] text-primary dark:text-secondary font-bold tracking-widest uppercase mb-2">
            <span>{text.step} 3 {text.of} 4</span>
            <span className="h-1.5 w-24 bg-primary/10 dark:bg-dark-border rounded-full overflow-hidden">
              <span className="block h-full bg-primary w-[75%] rounded-full"></span>
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-bold text-slate-text dark:text-white leading-tight">
            {text.docsTitle}
          </h4>
          <p className="text-xs text-slate-text/60 dark:text-dark-text/50 mt-1 mb-6">
            {text.docsDesc}
          </p>

          <div className="flex flex-col gap-3 max-w-xl">
            {[
              { key: 'dni', label: text.docDni },
              { key: 'cert', label: text.docCert },
              { key: 'salud', label: text.docSalud },
              { key: 'fotos', label: text.docFotos }
            ].map((doc) => {
              const isChecked = documents[doc.key];
              return (
                <button
                  key={doc.key}
                  onClick={() => handleDocToggle(doc.key)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isChecked 
                      ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                      : 'border-primary/10 dark:border-dark-border/60 bg-transparent hover:bg-slate-light/40 dark:hover:bg-dark-border/20'
                  }`}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${isChecked ? 'border-primary bg-primary text-white' : 'border-slate-300 dark:border-dark-border'}`}>
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs font-semibold text-slate-text dark:text-white leading-tight">
                    {doc.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between gap-3 border-t border-primary/5 pt-4">
            <button
              onClick={handlePrev}
              className="py-3 px-5 rounded-xl border border-primary/10 dark:border-dark-border text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/30 font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{text.prevBtn}</span>
            </button>
            <button
              onClick={handleNext}
              className="py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center gap-1.5 cursor-pointer"
            >
              <span>{text.nextBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: MODALIDAD */}
      {step === 4 && (
        <div className="flex flex-col text-left py-2 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-[10px] text-primary dark:text-secondary font-bold tracking-widest uppercase mb-2">
            <span>{text.step} 4 {text.of} 4</span>
            <span className="h-1.5 w-24 bg-primary/10 dark:bg-dark-border rounded-full overflow-hidden">
              <span className="block h-full bg-primary w-[100%] rounded-full"></span>
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-bold text-slate-text dark:text-white leading-tight">
            {text.modalityTitle}
          </h4>
          <p className="text-xs text-slate-text/60 dark:text-dark-text/50 mt-1 mb-6">
            {text.modalityDesc}
          </p>

          <div className="flex flex-col gap-3 max-w-xl">
            {[
              { key: 'ordinario', label: text.modOrdinary },
              { key: 'primer_puesto', label: text.modFirst },
              { key: 'deportista', label: text.modAthlete },
              { key: 'convenio', label: text.modNative }
            ].map((mod) => {
              const isSelected = modality === mod.key;
              return (
                <button
                  key={mod.key}
                  onClick={() => setModality(mod.key)}
                  className={`flex items-center gap-4 p-4.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                      : 'border-primary/10 dark:border-dark-border/60 bg-transparent hover:bg-slate-light/40 dark:hover:bg-dark-border/20'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs font-semibold text-slate-text dark:text-white leading-tight">
                    {mod.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between gap-3 border-t border-primary/5 pt-4">
            <button
              onClick={handlePrev}
              className="py-3 px-5 rounded-xl border border-primary/10 dark:border-dark-border text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/30 font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{text.prevBtn}</span>
            </button>
            <button
              onClick={handleNext}
              className="py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver Resultados</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: RESULTS SCREEN */}
      {step === 5 && (
        <div className="flex flex-col text-left py-2 animate-in fade-in duration-300">
          <h4 className="text-lg md:text-2xl font-extrabold text-slate-text dark:text-white tracking-tight flex items-center gap-2.5 border-b border-primary/5 pb-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <span>{text.resultsTitle}</span>
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            {/* Left side results summary */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              
              {/* Program Match Card */}
              <div className="p-5 rounded-2xl bg-slate-light/60 dark:bg-dark-bg/40 border border-primary/5 text-left relative overflow-hidden flex flex-col gap-4">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                
                {recommendedCareer.image && (
                  <div className="w-full h-36 rounded-xl overflow-hidden relative shadow-inner shrink-0">
                    <img 
                      src={recommendedCareer.image} 
                      alt={recommendedCareer.name} 
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                )}

                <div>
                  <span className="text-[9px] font-bold text-primary dark:text-secondary tracking-widest uppercase block mb-1">
                    {text.matchLabel}
                  </span>
                  
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${recommendedCareer.color} text-white`}>
                      {React.createElement(recommendedCareer.icon, { className: "w-4 h-4" })}
                    </div>
                    <h5 className="font-extrabold text-xs md:text-sm text-slate-text dark:text-white leading-tight">
                      {recommendedCareer.name}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-text/75 dark:text-dark-text/70 mt-3.5 leading-relaxed">
                    {recommendedCareer.desc}
                  </p>
                </div>
              </div>

              {/* Eligibility Status Card */}
              <div className="p-5 rounded-2xl border bg-slate-light/20 dark:bg-transparent flex flex-col gap-3 text-left">
                <span className="text-[9px] font-bold text-slate-text/60 dark:text-dark-text/60 tracking-widest uppercase block">
                  {text.statusLabel}
                </span>
                <div className={`px-3 py-1.5 rounded-xl text-xs font-bold self-start border inline-flex items-center gap-1.5 ${eligibility.colorClass}`}>
                  {eligibility.status === 'GREEN' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  {eligibility.status === 'YELLOW' && <AlertCircle className="w-4 h-4 shrink-0" />}
                  {eligibility.status === 'RED' && <AlertCircle className="w-4 h-4 shrink-0" />}
                  <span>{eligibility.label}</span>
                </div>
                <p className="text-xs text-slate-text/75 dark:text-dark-text/70 leading-relaxed mt-1">
                  {eligibility.desc}
                </p>
              </div>

              {/* Modality Details Card */}
              <div className="p-5 rounded-2xl bg-slate-light/60 dark:bg-dark-bg/40 border border-primary/5 flex flex-col gap-2.5 text-left">
                <span className="text-[9px] font-bold text-primary dark:text-secondary tracking-widest uppercase block">
                  {text.modalityLabel}
                </span>
                <div className="flex justify-between items-center border-b border-primary/5 pb-2">
                  <span className="text-xs font-bold text-slate-text dark:text-white truncate max-w-[200px]">
                    {modalityDetails.title}
                  </span>
                  <span className="text-base font-extrabold text-primary dark:text-secondary shrink-0">
                    {modalityDetails.cost}
                  </span>
                </div>
                <p className="text-[11px] text-slate-text/70 dark:text-dark-text/65 leading-relaxed">
                  {modalityDetails.note}
                </p>
              </div>

            </div>

            {/* Right side flow tracker (Procesa) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/5 flex flex-col gap-4 text-left">
                <span className="text-[10px] font-extrabold text-slate-text dark:text-white tracking-widest uppercase flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>{text.flowTitle}</span>
                </span>
                
                <div className="relative border-l border-primary/10 dark:border-dark-border ml-2 pl-4 flex flex-col gap-5 text-left">
                  
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[25px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-card flex items-center justify-center"></div>
                    <h6 className="text-xs font-bold text-slate-text dark:text-white">
                      {text.flowStep1}
                    </h6>
                    <p className="text-[11px] text-slate-text/70 dark:text-dark-text/65 mt-0.5">
                      {text.flowStep1Desc}
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[25px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-card flex items-center justify-center"></div>
                    <h6 className="text-xs font-bold text-slate-text dark:text-white">
                      {text.flowStep2}
                    </h6>
                    <p className="text-[11px] text-slate-text/70 dark:text-dark-text/65 mt-0.5">
                      {text.flowStep2Desc}
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[25px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-card flex items-center justify-center"></div>
                    <h6 className="text-xs font-bold text-slate-text dark:text-white">
                      {text.flowStep3}
                    </h6>
                    <p className="text-[11px] text-slate-text/70 dark:text-dark-text/65 mt-0.5">
                      {text.flowStep3Desc}
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div className="absolute -left-[25px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-card flex items-center justify-center"></div>
                    <h6 className="text-xs font-bold text-slate-text dark:text-white">
                      {text.flowStep4}
                    </h6>
                    <p className="text-[11px] text-slate-text/70 dark:text-dark-text/65 mt-0.5">
                      {text.flowStep4Desc}
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="relative">
                    <div className="absolute -left-[25px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-dark-card flex items-center justify-center animate-pulse"></div>
                    <h6 className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {text.flowStep5}
                    </h6>
                    <p className="text-[11px] text-slate-text/70 dark:text-dark-text/65 mt-0.5">
                      {text.flowStep5Desc}
                    </p>
                  </div>

                </div>
              </div>

              {/* Support Card (Soporta) */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-transparent border border-primary/10 flex flex-col gap-3 text-left">
                <span className="text-[9px] font-bold text-primary dark:text-secondary tracking-widest uppercase flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{text.supportTitle}</span>
                </span>
                <p className="text-[11px] text-slate-text/75 dark:text-dark-text/70 leading-relaxed">
                  {text.supportDesc}
                </p>
                <div className="flex flex-wrap gap-2.5 mt-1.5">
                  <button
                    onClick={handlePrefillClick}
                    disabled={eligibility.status === 'RED'}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-[10px] tracking-wider transition-all flex items-center justify-center gap-1 ${
                      eligibility.status === 'RED'
                        ? 'bg-slate-200 dark:bg-dark-border text-slate-400 dark:text-dark-text/40 cursor-not-allowed hover:scale-100'
                        : 'bg-primary hover:bg-primary-dark text-white hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
                    }`}
                  >
                    <span>{eligibility.status === 'RED' ? "Inscripción no disponible" : text.btnPrefill}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={handleChatbotClick}
                    className="py-3 px-4 rounded-xl border border-primary/25 text-primary dark:text-secondary hover:bg-primary/5 font-bold text-[10px] tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{text.btnChatbot}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-8 flex justify-start border-t border-primary/5 pt-4">
            <button
              onClick={handleReset}
              className="py-3 px-5 rounded-xl border border-primary/10 dark:border-dark-border text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/30 font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{text.restartBtn}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
