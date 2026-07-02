const normalize = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()\[\]{}"'\/\\@#$%^&*_\-+=<>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const intents = {
  greeting: {
    keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'saludos', 'hey', 'buena', 'bueno', 'que tal', 'como estas', 'alo', 'ola'],
    priority: 1,
  },
  careers: {
    keywords: ['carrera', 'carreras', 'profesion', 'profesiones', 'estudiar', 'programa', 'programas', 'especialidad', 'especialidades', 'que carreras', 'que estudiar', 'cuales son las carreras', 'cuantas carreras', 'lista carreras', 'catalogo', 'titulo', 'titulacion', 'profesional tecnico'],
    priority: 1,
  },
  admission: {
    keywords: ['admision', 'inscripcion', 'inscribirme', 'inscribir', 'postular', 'postulacion', 'examen', 'proceso', 'convocatoria', 'ingreso', 'ingresar', 'vacante', 'cupo'],
    priority: 1,
  },
  costs: {
    keywords: ['costo', 'costos', 'precio', 'precios', 'pagar', 'pago', 'pagos', 'cuesta', 'cuanto cuesta', 'cuanto vale', 'tasa', 'tasas', 'mensualidad', 'mensualidades', 'pension', 'pensiones', 'cuota', 'cuotas', 'gratis', 'gratuito', 'gratuita', 'arancel', 'derecho', 'inversion economica', 'presupuesto', 'economico'],
    priority: 1,
  },
  requirements: {
    keywords: ['requisito', 'requisitos', 'documento', 'documentos', 'necesito', 'necesita', 'papeles', 'carpeta', 'que necesito', 'que piden', 'que necesitan', 'tramite', 'tramites', 'certificado', 'dni', 'partida nacimiento', 'fotos carnet'],
    priority: 1,
  },
  schedule: {
    keywords: ['horario', 'horarios', 'fecha', 'fechas', 'cronograma', 'cuando', 'cuanto tiempo', 'duracion', 'cuantos semestres', 'cuantos anios', 'semestre', 'ciclo', 'calendario', 'clases', 'inicio clases', 'feriado'],
    priority: 1,
  },
  location: {
    keywords: ['donde', 'ubicacion', 'direccion', 'campus', 'sede', 'llegar', 'como llegar', 'mapa', 'carretera', 'basadre', 'pucallpa', 'ucayali', 'direccion exacta', 'estamos'],
    priority: 1,
  },
  contact: {
    keywords: ['contacto', 'contactar', 'telefono', 'celular', 'whatsapp', 'correo', 'email', 'comunicarme', 'llamar', 'mensaje', 'escribir', 'atencion', 'comunicacion', 'asesoria', 'ayuda', 'persona', 'hablar con', 'asesor humano', 'humano'],
    priority: 1,
  },
  free: {
    keywords: ['gratis', 'gratuito', 'gratuita', 'mensualidad', 'pension', 'cuota', 'cobra', 'cobran', 'precio mensual', 'cuanto pagas', 'sin costo', 'libre', 'beca', 'becas', 'beneficio', 'subvencion', 'estatal', 'publico'],
    priority: 2,
  },
  infrastructure: {
    keywords: ['infraestructura', 'sede', 'obra', 'construccion', 'nueva sede', 'nuevo local', 'megaproyecto', 'megasede', 'inversion', 'gore', '201 millones', 'laboratorio', 'laboratorios', 'taller', 'talleres', 'instalacion', 'instalaciones', 'modulo', 'piscigranja', 'biblioteca', 'cerco', 'perimetrico'],
    priority: 1,
  },
  library: {
    keywords: ['biblioteca', 'libro', 'libros', 'lectura', 'estudiar', 'sala estudio', 'material', 'recurso', 'recursos', 'catalogo'],
    priority: 1,
  },
  events: {
    keywords: ['evento', 'eventos', 'noticias', 'noticia', 'actividad', 'actividades', 'taller extracurricular', 'cultural', 'deportivo', 'feria', 'charla', 'seminario', 'conferencia'],
    priority: 1,
  },
  agreements: {
    keywords: ['convenio', 'convenios', 'alianza', 'alianzas', 'practica', 'practicas', 'preprofesional', 'profesional', 'empresa', 'empresarial', 'institucion', 'municipalidad', 'hospital', 'clinica'],
    priority: 1,
  },
  history: {
    keywords: ['historia', 'fundacion', 'fundado', 'origen', 'inicio', 'creacion', '1984', 'aniversario', 'trayectoria', 'resena'],
    priority: 1,
  },
  vision: {
    keywords: ['vision', 'mision', 'vision y mision', 'valores', 'objetivos', 'proposito', 'filosofia'],
    priority: 1,
  },
  graduate: {
    keywords: ['egresado', 'egresados', 'perfil egresado', 'titulado', 'campo laboral', 'trabajo', 'trabajar', 'empleo', 'empleabilidad', 'bolsa trabajo', 'practicas profesionales', 'que hago despues'],
    priority: 1,
  },
  results: {
    keywords: ['resultado', 'resultados', 'ingresante', 'ingresantes', 'admitido', 'admitidos', 'lista ingresantes', 'publicacion resultados', 'saber si ingrese', 'fui admitido'],
    priority: 1,
  },
  thanks: {
    keywords: ['gracias', 'muchas gracias', 'agradecido', 'agradezco', 'thank you', 'thanks'],
    priority: 1,
  },
  farewell: {
    keywords: ['chao', 'adios', 'nos vemos', 'hasta luego', 'hasta pronto', 'bye', 'goodbye', 'salir', 'cerrar'],
    priority: 1,
  },
};

export const detectIntent = (text) => {
  const normalized = normalize(text);
  if (!normalized) return 'unknown';

  const words = normalized.split(' ');
  const scores = {};

  for (const [intent, config] of Object.entries(intents)) {
    let score = 0;
    for (const keyword of config.keywords) {
      const kwWords = keyword.split(' ');
      if (kwWords.length > 1) {
        if (normalized.includes(keyword)) {
          score += 3;
        }
      } else {
        if (words.includes(keyword)) {
          score += 2;
        } else if (normalized.includes(keyword)) {
          score += 1;
        }
      }
    }
    if (score > 0) {
      scores[intent] = { score, priority: config.priority };
    }
  }

  if (Object.keys(scores).length === 0) return 'unknown';

  return Object.entries(scores)
    .sort((a, b) => {
      const scoreDiff = b[1].score - a[1].score;
      if (scoreDiff !== 0) return scoreDiff;
      return a[1].priority - b[1].priority;
    })[0][0];
};

export const detectNavigationActions = (text) => {
  const lower = text.toLowerCase();
  const actions = [];
  const n = normalize(text);

  if (/carrera|sistemas|enfermeria|mecatronica|agropecuaria|forestal|contabilidad|administracion|construccion|electricidad|turismo|asistencia/i.test(n)) {
    actions.push({ label: '📚 Ver carreras', route: '/careers' });
  }
  if (/admision|inscripcion|examen|postular|resultado/i.test(n)) {
    actions.push({ label: '📝 Ir a admisión', route: '/admission' });
  }
  if (/costo|precio|tasa|mensualidad/i.test(n)) {
    actions.push({ label: '💰 Ver costos', route: '/costos' });
  }
  if (/requisito|documento/i.test(n)) {
    actions.push({ label: '📋 Ver requisitos', route: '/requisitos' });
  }
  if (/cronograma|fecha|calendario|examen/i.test(n)) {
    actions.push({ label: '📅 Ver cronograma', route: '/cronograma' });
  }
  if (/ubicacion|direccion|donde|sede/i.test(n)) {
    actions.push({ label: '📍 Ver ubicación', route: '/about' });
  }
  if (/contacto|telefono|correo|asesor/i.test(n)) {
    actions.push({ label: '📞 Contactar', route: '/contact' });
  }
  if (/preinscripcion|inscribirme/i.test(n)) {
    actions.push({ label: '✍️ Preinscripción', route: '/preinscripcion' });
  }
  if (/resultado|ingresante|admitido/i.test(n)) {
    actions.push({ label: '🏆 Ver resultados', route: '/resultados' });
  }
  if (/convenio|practica/i.test(n)) {
    actions.push({ label: '🤝 Ver convenios', route: '/convenios' });
  }
  if (/laboratorio|taller/i.test(n)) {
    actions.push({ label: '🔬 Ver laboratorios', route: '/laboratorios' });
  }
  if (/biblioteca/i.test(n)) {
    actions.push({ label: '📖 Ir a biblioteca', route: '/library' });
  }
  if (/historia|mision|vision/i.test(n)) {
    actions.push({ label: '🏛️ Sobre nosotros', route: '/about' });
  }
  if (/egresado|trabajo|empleo|bolsa/i.test(n)) {
    actions.push({ label: '💼 Bolsa de trabajo', route: '/bolsa-trabajo' });
  }

  return actions.length > 0 ? actions : null;
};

export const getSuggestedFollowUps = (intent) => {
  const suggestions = {
    careers: [
      { label: '📝 Admisión', text: '¿Cómo me inscribo?' },
      { label: '💰 Costos', text: '¿Cuánto cuesta?' },
      { label: '📋 Requisitos', text: '¿Qué necesito?' },
    ],
    admission: [
      { label: '💰 Costos', text: '¿Cuánto cuesta postular?' },
      { label: '📋 Requisitos', text: '¿Qué requisitos piden?' },
      { label: '📅 Fechas', text: '¿Cuándo es el examen?' },
    ],
    costs: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📝 Admisión', text: '¿Cómo postulo?' },
      { label: '✨ ¿Es gratis?', text: '¿Es gratis estudiar?' },
    ],
    requirements: [
      { label: '✍️ Preinscripción', text: 'Quiero preinscribirme' },
      { label: '💰 Costos', text: '¿Cuánto cuesta?' },
      { label: '📅 Fechas', text: '¿Cuándo es el examen?' },
    ],
    schedule: [
      { label: '📝 Admisión', text: '¿Cómo me inscribo?' },
      { label: '💰 Costos', text: '¿Cuánto cuesta?' },
      { label: '📍 Ubicación', text: '¿Dónde están?' },
    ],
    location: [
      { label: '📞 Contacto', text: 'Números de contacto' },
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📝 Admisión', text: '¿Cómo postulo?' },
    ],
    contact: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📍 Ubicación', text: '¿Dónde están ubicados?' },
      { label: '💰 Costos', text: '¿Cuánto cuesta?' },
    ],
    free: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📝 Admisión', text: '¿Cómo postulo?' },
      { label: '📍 Ubicación', text: '¿Dónde están?' },
    ],
    infrastructure: [
      { label: '🔬 Laboratorios', text: '¿Qué laboratorios tienen?' },
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📍 Ubicación', text: '¿Dónde están?' },
    ],
    library: [
      { label: '🔬 Laboratorios', text: '¿Qué laboratorios tienen?' },
      { label: '📞 Contacto', text: 'Números de contacto' },
      { label: '⏰ Horarios', text: '¿Cuál es el horario?' },
    ],
    events: [
      { label: '📝 Admisión', text: '¿Cómo me inscribo?' },
      { label: '📰 Noticias', text: 'Últimas noticias' },
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
    ],
    agreements: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '💼 Bolsa trabajo', text: 'Bolsa de trabajo' },
      { label: '📍 Ubicación', text: '¿Dónde están?' },
    ],
    history: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📍 Ubicación', text: '¿Dónde están?' },
      { label: '📞 Contacto', text: 'Números de contacto' },
    ],
    vision: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '🏛️ Historia', text: 'Historia del instituto' },
      { label: '📍 Ubicación', text: '¿Dónde están?' },
    ],
    graduate: [
      { label: '💼 Bolsa trabajo', text: 'Bolsa de trabajo' },
      { label: '🤝 Convenios', text: 'Convenios empresariales' },
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
    ],
    results: [
      { label: '📝 Admisión', text: 'Proceso de admisión' },
      { label: '✍️ Preinscripción', text: 'Quiero preinscribirme' },
      { label: '📅 Fechas', text: '¿Cuándo inician las clases?' },
    ],
    thanks: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📝 Admisión', text: '¿Cómo postulo?' },
      { label: '💬 FAQ', text: 'Preguntas frecuentes' },
    ],
    farewell: [
      { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
      { label: '📝 Admisión', text: '¿Cómo me inscribo?' },
      { label: '📞 Contacto', text: 'Números de contacto' },
    ],
  };

  return suggestions[intent] || [
    { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
    { label: '📝 Admisión', text: '¿Cómo postulo?' },
    { label: '📞 Contacto', text: 'Números de contacto' },
  ];
};

export const quickReplies = [
  { label: '🎓 Carreras', text: '¿Qué carreras tienen?' },
  { label: '📝 Admisión', text: '¿Cómo me inscribo?' },
  { label: '💰 Costos', text: '¿Cuánto cuesta postular?' },
  { label: '📋 Requisitos', text: '¿Qué requisitos piden?' },
  { label: '📅 Fechas', text: '¿Cuándo es el examen?' },
  { label: '📍 Ubicación', text: '¿Dónde están ubicados?' },
  { label: '📞 Contacto', text: 'Números de contacto' },
  { label: '❓ FAQ', text: 'Preguntas frecuentes' },
  { label: '🎉 Eventos', text: 'Próximos eventos' },
  { label: '✨ Gratis', text: '¿Es gratis estudiar?' },
];
