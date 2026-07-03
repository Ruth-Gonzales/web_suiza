export const translations = {
  es: {
    nav: {
      home: "Inicio",
      careers: "Programas de Estudio",
      admission: "Admisión y Matrícula",
      about: "Nosotros",
      transparency: "Transparencia",
      procedures: "Trámites",
      services: "Servicios"
    },
    instituteMenu: {
      title: "Nuestro Instituto",
      about: "Nosotros",
      news: "Noticias",
      contact: "Contáctanos",
      cta: "Conoce el Instituto"
    },
    hero: {
      welcome: "Bienvenidos al Instituto de Educación Superior Tecnológico Público Suiza",
      subtitle: "Formando profesionales técnicos de excelencia en la Amazonía peruana con reconocimiento nacional e internacional.",
      explore: "Explorar Carreras",
      portalTitle: "Portal del Estudiante",
      greeting: "¡Hola, Estudiante Suiza!",
      desc: "Vamos a terminar tus tareas de hoy.",
      searchPlaceholder: "Buscar cursos o especialidades...",
      task1: "Desarrollo de Software",
      task2: "Enfermería Comunitaria",
      task3: "Manejo de Suelos",
      statusProgress: "En curso",
      stats: {
        students: "Estudiantes",
        teachers: "Docentes",
        newStudents: "Ingresantes",
        graduates: "Titulados"
      }
    },
    careers: {
      title: "Nuestros Programas de Estudio",
      subtitle: "Educación de vanguardia con alta demanda laboral en la región Ucayali y todo el Perú.",
      categories: {
        all: "Todos",
        tech: "Tecnología",
        business: "Gestión y Servicios",
        field: "Ingeniería y Campo"
      },
      duration: "Duración: 3 Años (6 Semestres)",
      employability: "Empleabilidad",
      viewCurriculum: "Ver Malla Curricular",
      items: [
        { id: "turismo", name: "Administración de Operaciones Turísticas", category: "business", employabilityRate: 85, desc: "Planifica y opera servicios turísticos sostenibles." },
        { id: "asistencia", name: "Asistencia Administrativa", category: "business", employabilityRate: 82, desc: "Organiza y gestiona las operaciones de oficina corporativas." },
        { id: "contabilidad", name: "Contabilidad", category: "business", employabilityRate: 88, desc: "Gestiona información financiera y tributaria." },
        { id: "civil", name: "Construcción Civil", category: "field", employabilityRate: 90, desc: "Planifica y ejecuta obras de infraestructura civil." },
        { id: "gestion", name: "Gestión Administrativa", category: "business", employabilityRate: 84, desc: "Lidera procesos administrativos y recursos empresariales." },
        { id: "sistemas", name: "Desarrollo de Sistemas de Información", category: "tech", employabilityRate: 92, desc: "Desarrolla software, aplicaciones y bases de datos." },
        { id: "electricidad", name: "Electricidad Industrial", category: "tech", employabilityRate: 86, desc: "Instala y mantiene sistemas eléctricos e industriales." },
        { id: "enfermeria", name: "Enfermería Técnica", category: "field", employabilityRate: 89, desc: "Brinda atención integral y promoción de la salud." },
        { id: "forestal", name: "Manejo Forestal", category: "field", employabilityRate: 80, desc: "Administra y protege los recursos forestales y fauna." },
        { id: "mecatronica", name: "Mecatrónica Automotriz", category: "field", employabilityRate: 87, desc: "Diagnostica y repara sistemas mecánicos y electrónicos." },
        { id: "agropecuaria", name: "Producción Agropecuaria", category: "field", employabilityRate: 81, desc: "Gestiona producción agrícola y pecuaria." }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber para unirte a nuestra comunidad de excelencia.",
      q1: "¿Dónde me desempeño laboralmente?",
      a1: "Nuestros egresados trabajan en empresas públicas y privadas de todo el país, liderando áreas de soporte tecnológico, gestión administrativa, centros de salud, producción agroforestal, o iniciando sus propios negocios innovadores.",
      q2: "¿Por qué debo estudiar en el IESTP Suiza?",
      a2: "Porque ofrecemos educación superior pública 100% gratuita con certificación oficial de la Nación, laboratorios especializados modernos, convenios de prácticas profesionales y bolsas de trabajo activas.",
      q3: "¿Dónde hago las prácticas pre-profesionales?",
      a3: "A través de convenios con municipalidades, hospitales, clínicas, empresas agrarias, talleres mecánicos, constructoras e industrias de la región Ucayali y a nivel nacional.",
      q4: "Requisitos para la inscripción al examen de admisión",
      a4: "Certificado oficial de estudios secundarios completos, copia de DNI vigente, partida de nacimiento original, foto tamaño carnet en fondo blanco y el recibo de pago por derecho de inscripción."
    },
    news: {
      title: "Noticias y Eventos Institucionales",
      subtitle: "Entérate de las últimas actividades, logros académicos y publicaciones de nuestra institución.",
      readMore: "Leer Artículo",
      featured: {
        image: "from-indigo-600 via-primary to-secondary",
        title: "IESTP Suiza obtiene licenciamiento institucional por 6 años otorgado por el MINEDU",
        desc: "El Ministerio de Educación otorgó el licenciamiento institucional al IESTP Suiza, reconociendo la calidad educativa, infraestructura moderna y planes de estudio alineados a la demanda laboral de la región Ucayali.",
        date: "15 de Mayo, 2026",
        category: "institutional"
      },
      categories: [
        { id: 'all', label: 'Todas' },
        { id: 'institutional', label: 'Institucional' },
        { id: 'academic', label: 'Académico' },
        { id: 'events', label: 'Eventos' },
        { id: 'achievements', label: 'Logros' },
        { id: 'opportunities', label: 'Oportunidades' },
        { id: 'sports', label: 'Deportes' },
        { id: 'culture', label: 'Cultura' }
      ],
      items: [
        {
          tag: "Institucional",
          categoryId: "institutional",
          image: "from-amber-500 to-orange-600",
          title: "IESTP Suiza firma convenio interinstitucional con la Municipalidad Provincial de Coronel Portillo",
          desc: "Este convenio permitirá a nuestros estudiantes realizar prácticas pre-profesionales en las diferentes dependencias municipales, fortaleciendo su formación técnica con experiencia real en el sector público.",
          date: "10 de Junio, 2026"
        },
        {
          tag: "Académico",
          categoryId: "academic",
          image: "from-emerald-500 to-teal-600",
          title: "Docentes del IESTP Suiza participan en taller internacional de innovación pedagógica",
          desc: "Nuestros docentes fueron capacitados en metodologías activas de enseñanza-aprendizaje por especialistas de la Universidad Nacional de Ingeniería, incorporando herramientas digitales y evaluación por competencias.",
          date: "5 de Junio, 2026"
        },
        {
          tag: "Logros",
          categoryId: "achievements",
          image: "from-violet-500 to-purple-600",
          title: "Estudiantes de Desarrollo de Sistemas ganan primer lugar en hackathon regional",
          desc: "El equipo 'CodeSuiza' conformado por estudiantes del cuarto ciclo obtuvo el primer puesto en el Hackathon Ucayali 2026, desarrollando una aplicación móvil para la gestión de residuos sólidos urbanos.",
          date: "28 de Mayo, 2026"
        },
        {
          tag: "Eventos",
          categoryId: "events",
          image: "from-blue-500 to-cyan-600",
          title: "Feria Tecnológica 2026: Innovación y emprendimiento estudiantil",
          desc: "Se realizó con éxito la Feria Tecnológica 2026 donde los estudiantes presentaron proyectos innovadores en robótica, desarrollo de software, enfermería, mecatrónica y producción agropecuaria.",
          date: "20 de Mayo, 2026"
        },
        {
          tag: "Oportunidades",
          categoryId: "opportunities",
          image: "from-pink-500 to-rose-600",
          title: "Beca Permanencia 2026: Nuevos beneficios para estudiantes de alto rendimiento",
          desc: "El PRONABEC asignó 50 nuevas becas de permanencia para estudiantes del IESTP Suiza que mantengan un rendimiento académico sobresaliente y se encuentren en situación de vulnerabilidad económica.",
          date: "15 de Mayo, 2026"
        },
        {
          tag: "Deportes",
          categoryId: "sports",
          image: "from-green-500 to-lime-600",
          title: "IESTP Suiza campeón de los Juegos Deportivos Inter-Tecnológicos Ucayali 2026",
          desc: "Nuestra delegación deportiva obtuvo el primer lugar en las disciplinas de fútbol, básquet varones y atletismo, demostrando que la excelencia también se construye en el deporte.",
          date: "10 de Mayo, 2026"
        },
        {
          tag: "Cultura",
          categoryId: "culture",
          image: "from-red-500 to-rose-600",
          title: "Festival de la Canción Shipiba: Estudiantes celebran la riqueza cultural de Ucayali",
          desc: "Estudiantes de las diferentes carreras participaron en el Festival de la Canción Shipiba, promoviendo el rescate de la lengua y la música tradicional de los pueblos indígenas de la región.",
          date: "5 de Mayo, 2026"
        },
        {
          tag: "Académico",
          categoryId: "academic",
          image: "from-sky-500 to-indigo-600",
          title: "Nuevo laboratorio de simulación clínica para Enfermería Técnica",
          desc: "El IESTP Suiza inauguró un moderno laboratorio de simulación clínica equipado con maniquíes de última generación, permitiendo a los estudiantes de Enfermería Técnica practicar procedimientos en un entorno seguro y controlado.",
          date: "28 de Abril, 2026"
        },
        {
          tag: "Revista Científica",
          categoryId: "academic",
          image: "from-teal-500 to-emerald-600",
          title: "Revista Latinoamericana de Innovación Tecnológica (RELITES) - Vol. 1 2026",
          desc: "Publicación de investigaciones científicas lideradas por docentes y estudiantes del IESTP Suiza en inteligencia artificial aplicada a la agricultura y mecatrónica.",
          date: "Mayo 2026"
        }
      ],
      events: {
        title: "Eventos y Actividades",
        subtitle: "Ferias, conferencias, talleres y actividades que fortalecen tu formación profesional.",
        items: [
          {
            image: "from-blue-500 to-cyan-600",
            title: "Feria Tecnológica Suiza 2026",
            date: "20 de Mayo, 2026",
            time: "9:00 am - 5:00 pm",
            location: "Auditorio Institucional - IESTP Suiza",
            organizer: "Dirección Académica",
            audience: "Estudiantes, docentes y público en general",
            objective: "Promover la innovación y el emprendimiento tecnológico entre los estudiantes",
            benefits: [
              "Conocer proyectos innovadores de todas las carreras",
              "Conectar con empresas invitadas del sector tecnológico",
              "Participar en charlas sobre tendencias tecnológicas",
              "Obtener certificación de participación",
              "Descubrir oportunidades de prácticas y empleo"
            ],
            desc: "Exposición de proyectos innovadores de todas las carreras, con la participación de empresas invitadas y charlas sobre tendencias tecnológicas. Un espacio donde los estudiantes demuestran sus habilidades técnicas y creatividad ante profesionales del sector.",
            agenda: [
              { time: "09:00", title: "Registro y Bienvenida", desc: "Acreditación de participantes y entrega de materiales." },
              { time: "10:00", title: "Ceremonia de Apertura", desc: "Palabras del director y presentación de la feria." },
              { time: "11:00", title: "Exposición de Proyectos", desc: "Recorrido por los stands de las 11 carreras profesionales." },
              { time: "13:00", title: "Almuerzo y Networking", desc: "Espacio de integración entre estudiantes y empresas." },
              { time: "15:00", title: "Charla Magistral: IA en la Educación", desc: "Ponencia del invitado especial sobre inteligencia artificial." },
              { time: "16:00", title: " Premiación", desc: "Reconocimiento a los mejores proyectos de cada categoría." },
              { time: "17:00", title: "Clausura", desc: "Cierre del evento y agradecimientos." }
            ],
            locationDetail: {
              address: "Carretera Federico Basadre Km 5.700, Pucallpa",
              reference: "Frente al Hospital Regional de Pucallpa"
            },
            stats: [
              { icon: "users", value: "800", label: "Asistentes registrados" },
              { icon: "building", value: "11", label: "Carreras participantes" },
              { icon: "lightbulb", value: "40", label: "Proyectos presentados" },
              { icon: "briefcase", value: "15", label: "Empresas invitadas" },
              { icon: "camera", value: "200", label: "Fotografías registradas" }
            ],
            testimonials: [
              { name: "Ana Torres", role: "Estudiante de Administración", text: "Participar en la Feria Tecnológica me permitió mostrar mi proyecto de gestión empresarial y recibir retroalimentación directa de profesionales del sector." },
              { name: "Carlos Rivas", role: "Docente - Desarrollo de Sistemas", text: "Ver a nuestros estudiantes presentar sus proyectos con tanto profesionalismo me llena de orgullo. La feria es el escaparate perfecto de su talento." },
              { name: "María López", role: "Egresada - Desarrollo de Sistemas", text: "Regresar como invitada a la feria donde hace dos años presenté mi proyecto es una experiencia increíble. Ahora vengo en representación de mi empresa." }
            ],
            gallery: [
              { thumb: "from-blue-400 to-cyan-500", title: "Inauguración de la feria", date: "20 May 2026" },
              { thumb: "from-indigo-400 to-violet-500", title: "Stand de Desarrollo de Sistemas", date: "20 May 2026" },
              { thumb: "from-emerald-400 to-teal-500", title: "Proyecto de Enfermería Técnica", date: "20 May 2026" },
              { thumb: "from-amber-400 to-orange-500", title: "Exposición de Mecatrónica", date: "20 May 2026" },
              { thumb: "from-pink-400 to-rose-500", title: "Premiación a los ganadores", date: "20 May 2026" },
              { thumb: "from-green-400 to-lime-500", title: "Participación de empresas invitadas", date: "20 May 2026" }
            ],
            videos: [
              { thumb: "from-gray-600 to-gray-800", title: "Resumen Feria Tecnológica 2026", duration: "3:45", desc: "Los mejores momentos de la feria en video." },
              { thumb: "from-gray-600 to-gray-800", title: "Entrevista a estudiantes ganadores", duration: "5:20", desc: "Conoce las historias detrás de los proyectos ganadores." }
            ],
            relatedEvents: [
              { title: "I Congreso de Investigación e Innovación Tecnológica", date: "15-17 Julio, 2026", image: "from-purple-500 to-violet-600" },
              { title: "Taller de Emprendimiento e Innovación", date: "10 Junio, 2026", image: "from-emerald-500 to-green-600" }
            ]
          },
          {
            image: "from-purple-500 to-violet-600",
            title: "I Congreso de Investigación e Innovación Tecnológica",
            date: "15-17 de Julio, 2026",
            time: "8:00 am - 6:00 pm",
            location: "Centro de Convenciones Ucayali",
            organizer: "Unidad de Investigación - IESTP Suiza",
            audience: "Investigadores, docentes, estudiantes y profesionales",
            objective: "Fomentar la investigación aplicada y la transferencia tecnológica en la región",
            benefits: [
              "Asistir a ponencias de expertos nacionales e internacionales",
              "Presentar trabajos de investigación",
              "Participar en talleres especializados",
              "Establecer redes de colaboración académica",
              "Acceder a publicaciones indexadas"
            ],
            desc: "Congreso académico con ponentes nacionales e internacionales sobre inteligencia artificial, salud comunitaria y desarrollo sostenible. Un espacio para la difusión del conocimiento científico y la innovación tecnológica.",
            agenda: [
              { time: "08:00", title: "Registro", desc: "Acreditación de participantes." },
              { time: "09:00", title: "Conferencia Inaugural", desc: "IA y su impacto en la educación superior." },
              { time: "11:00", title: "Mesas de Trabajo", desc: "Presentación de investigaciones por áreas temáticas." },
              { time: "13:00", title: "Almuerzo", desc: "Networking entre investigadores." },
              { time: "15:00", title: "Talleres Especializados", desc: "Workshops sobre metodologías de investigación." },
              { time: "17:00", title: "Clausura y Premiación", desc: "Reconocimiento a las mejores investigaciones." }
            ],
            locationDetail: {
              address: "Av. Centenario 1250, Pucallpa",
              reference: "A 5 minutos del centro de la ciudad"
            },
            stats: [
              { icon: "users", value: "500", label: "Participantes" },
              { icon: "book", value: "60", label: "Investigaciones presentadas" },
              { icon: "globe", value: "8", label: "Países representados" },
              { icon: "award", value: "12", label: "Ponencias magistrales" }
            ],
            testimonials: [
              { name: "Dr. Miguel Ángel Ruiz", role: "Ponente Internacional - UNI", text: "El nivel de las investigaciones presentadas demuestra el compromiso del IESTP Suiza con la calidad académica y la innovación." }
            ],
            gallery: [
              { thumb: "from-violet-400 to-purple-500", title: "Auditorio del congreso", date: "15 Jul 2026" },
              { thumb: "from-indigo-400 to-blue-500", title: "Ponencia magistral", date: "15 Jul 2026" },
              { thumb: "from-fuchsia-400 to-pink-500", title: "Mesas de trabajo", date: "16 Jul 2026" },
              { thumb: "from-cyan-400 to-teal-500", title: "Premiación", date: "17 Jul 2026" }
            ],
            videos: [
              { thumb: "from-gray-600 to-gray-800", title: "Resumen del Congreso", duration: "4:30", desc: "Lo mejor del I Congreso de Investigación." }
            ],
            relatedEvents: [
              { title: "Feria Tecnológica Suiza 2026", date: "20 Mayo, 2026", image: "from-blue-500 to-cyan-600" },
              { title: "Taller de Emprendimiento e Innovación", date: "10 Junio, 2026", image: "from-emerald-500 to-green-600" }
            ]
          },
          {
            image: "from-emerald-500 to-green-600",
            title: "Taller de Emprendimiento e Innovación",
            date: "10 de Junio, 2026",
            time: "2:00 pm - 6:00 pm",
            location: "Laboratorio de Innovación - IESTP Suiza",
            organizer: "Incubadora de Negocios",
            audience: "Estudiantes emprendedores de todas las carreras",
            objective: "Desarrollar habilidades de innovación y creación de modelos de negocio",
            benefits: [
              "Aprender metodología Design Thinking",
              "Crear un modelo de negocio funcional",
              "Recibir mentoría de expertos",
              "Acceder a la red de emprendedores del instituto",
              "Oportunidad de financiamiento para mejores proyectos"
            ],
            desc: "Taller práctico de design thinking y creación de modelos de negocio para estudiantes emprendedores de todas las carreras. Al finalizar, los participantes presentarán sus ideas ante un jurado.",
            agenda: [
              { time: "14:00", title: "Introducción al Design Thinking", desc: "Fundamentos de la metodología." },
              { time: "14:30", title: "Taller de Ideación", desc: "Generación de ideas innovadoras." },
              { time: "15:30", title: "Prototipado Rápido", desc: "Creación de prototipos funcionales." },
              { time: "16:30", title: "Pitch de Presentación", desc: "Presentación de proyectos ante el jurado." },
              { time: "17:30", title: "Premiación", desc: "Reconocimiento a los mejores proyectos." }
            ],
            locationDetail: {
              address: "Carretera Federico Basadre Km 5.700, Pucallpa",
              reference: "Edificio de Innovación, segundo piso"
            },
            stats: [
              { icon: "users", value: "60", label: "Participantes" },
              { icon: "lightbulb", value: "15", label: "Proyectos generados" },
              { icon: "trophy", value: "3", label: "Proyectos premiados" }
            ],
            testimonials: [
              { name: "José Pérez", role: "Estudiante de Enfermería", text: "Nunca pensé que podría crear un modelo de negocio. Este taller me abrió los ojos a nuevas posibilidades." }
            ],
            gallery: [
              { thumb: "from-emerald-400 to-green-500", title: "Taller de ideación", date: "10 Jun 2026" },
              { thumb: "from-teal-400 to-cyan-500", title: "Prototipado rápido", date: "10 Jun 2026" },
              { thumb: "from-lime-400 to-green-500", title: "Premiación", date: "10 Jun 2026" }
            ],
            relatedEvents: [
              { title: "Feria Tecnológica Suiza 2026", date: "20 Mayo, 2026", image: "from-blue-500 to-cyan-600" },
              { title: "I Congreso de Investigación", date: "15-17 Julio, 2026", image: "from-purple-500 to-violet-600" }
            ]
          },
          {
            image: "from-orange-500 to-red-600",
            title: "Campeonato Deportivo Inter-Carreras",
            date: "Todo el mes de Junio",
            location: "Losas Deportivas IESTP Suiza",
            desc: "Competencia deportiva anual donde las diferentes carreras compiten en fútbol, vóley, básquet y atletismo, fomentando el compañerismo."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Festival Cultural de la Amazonía",
            date: "24 de Junio, 2026",
            time: "10:00 am - 8:00 pm",
            location: "Plaza Principal de Pucallpa",
            organizer: "Dirección de Bienestar Estudiantil",
            audience: "Comunidad en general",
            objective: "Promover y preservar la riqueza cultural de la Amazonía peruana",
            benefits: [
              "Disfrutar de presentaciones artísticas en vivo",
              "Degustar la gastronomía regional",
              "Conocer la artesanía shipiba",
              "Participar en talleres culturales",
              "Vivir una experiencia de integración cultural"
            ],
            desc: "Festival abierto a la comunidad con muestras de danzas típicas, gastronomía regional, artesanía shipiba y música en vivo. Un espacio para celebrar la diversidad cultural de nuestra Amazonía.",
            agenda: [
              { time: "10:00", title: "Apertura del Festival", desc: "Ceremonia de inauguración con danzas típicas." },
              { time: "11:00", title: "Feria Gastronómica", desc: "Degustación de platos típicos de la región." },
              { time: "14:00", title: "Taller de Artesanía Shipiba", desc: "Aprende técnicas ancestrales de tejido." },
              { time: "16:00", title: "Presentaciones Musicales", desc: "Bandas locales y música tradicional." },
              { time: "19:00", title: "Festival de la Canción Shipiba", desc: "Competencia de canciones en lengua shipiba." },
              { time: "20:00", title: "Clausura", desc: "Cierre del festival con show de luces." }
            ],
            locationDetail: {
              address: "Plaza Principal de Pucallpa",
              reference: "Frente a la Municipalidad Provincial"
            },
            stats: [
              { icon: "users", value: "2000", label: "Asistentes" },
              { icon: "music", value: "15", label: "Agrupaciones musicales" },
              { icon: "utensils", value: "25", label: "Puestos gastronómicos" },
              { icon: "palette", value: "30", label: "Artesanos participantes" }
            ],
            testimonials: [
              { name: "Elena Fuentes", role: "Gestora Cultural", text: "El Festival Cultural de la Amazonía es el evento más importante para la preservación de nuestras tradiciones. Ver a los jóvenes participando con tanto entusiasmo es esperanzador." }
            ],
            gallery: [
              { thumb: "from-pink-400 to-rose-500", title: "Danzas típicas", date: "24 Jun 2026" },
              { thumb: "from-red-400 to-orange-500", title: "Feria gastronómica", date: "24 Jun 2026" },
              { thumb: "from-purple-400 to-violet-500", title: "Artesanía shipiba", date: "24 Jun 2026" },
              { thumb: "from-amber-400 to-yellow-500", title: "Presentaciones musicales", date: "24 Jun 2026" }
            ],
            videos: [
              { thumb: "from-gray-600 to-gray-800", title: "Resumen Festival Cultural 2026", duration: "6:15", desc: "Los momentos más emotivos del festival." }
            ],
            relatedEvents: [
              { title: "Feria Tecnológica Suiza 2026", date: "20 Mayo, 2026", image: "from-blue-500 to-cyan-600" },
              { title: "Campeonato Deportivo Inter-Carreras", date: "Junio 2026", image: "from-orange-500 to-red-600" }
            ]
          },
          {
            image: "from-cyan-500 to-blue-600",
            title: "Charla: Oportunidades de becas internacionales",
            date: "8 de Julio, 2026",
            location: "Sala de Conferencias - IESTP Suiza",
            desc: "Charla informativa sobre programas de becas ofrecidos por PRONABEC, organismos internacionales y universidades extranjeras."
          }
        ]
      },
      achievements: {
        title: "Logros y Reconocimientos",
        subtitle: "Celebramos los éxitos de nuestra comunidad que nos llenan de orgullo institucional.",
        items: [
          {
            image: "from-amber-500 to-yellow-600",
            title: "Estudiante de Enfermería Técnica obtiene primer puesto en concurso nacional de primeros auxilios",
            desc: "María Torres, estudiante del VI ciclo, representó a Ucayali y obtuvo la medalla de oro en el Concurso Nacional de Habilidades en Enfermería organizado por el MINEDU.",
            badge: "Medalla de Oro"
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Docente investigador publica artículo en revista científica indexada",
            desc: "El Mg. Carlos Rivas, docente del programa de Desarrollo de Sistemas, publicó su investigación sobre 'Machine Learning para la predicción de cosechas en la Amazonía' en la revista Scopus.",
            badge: "Publicación Scopus"
          },
          {
            image: "from-blue-500 to-indigo-600",
            title: "Proyecto agropecuario sostenible gana concurso nacional de innovación",
            desc: "El proyecto 'BioAbono Suiza' liderado por estudiantes de Producción Agropecuaria obtuvo el primer lugar en el Concurso Nacional de Innovación Tecnológica Agraria 2026.",
            badge: "Premio Nacional"
          },
          {
            image: "from-emerald-500 to-teal-600",
            title: "IESTP Suiza reconocido como institución licenciada con excelente desempeño",
            desc: "El MINEDU otorgó la categoría 'A' al IESTP Suiza en el ranking de desempeño institucional, destacando en los indicadores de empleabilidad, investigación y gestión académica.",
            badge: "Categoría A - MINEDU"
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Estudiantes de Mecatrónica Automotriz clasifican a competencia internacional",
            desc: "El equipo 'Mecatrónicos Suiza' clasificó a la final del Concurso Internacional de Robótica Educativa que se realizará en Bogotá, representando al Perú.",
            badge: "Clasificación Internacional"
          },
          {
            image: "from-orange-500 to-amber-600",
            title: "Reconocimiento a la trayectoria institucional - 49 años formando profesionales",
            desc: "El Gobierno Regional de Ucayali otorgó un reconocimiento público al IESTP Suiza por sus 49 años de servicio ininterrumpido formando profesionales técnicos para el desarrollo de la región.",
            badge: "Reconocimiento Regional"
          }
        ]
      },
      opportunities: {
        title: "Oportunidades para Estudiantes",
        subtitle: "Becas, convocatorias, prácticas y certificaciones para impulsar tu carrera profesional.",
        items: [
          {
            image: "from-blue-500 to-cyan-600",
            title: "Beca Permanencia - PRONABEC 2026",
            deadline: "30 de Julio, 2026",
            desc: "Cobertura de estudios, alimentación y materiales educativos para estudiantes de alto rendimiento académico con recursos económicos limitados."
          },
          {
            image: "from-emerald-500 to-teal-600",
            title: "Prácticas Pre-Profesionales - Municipalidad de Coronel Portillo",
            deadline: "15 de Julio, 2026",
            desc: "10 vacantes para estudiantes de Administración, Contabilidad y Desarrollo de Sistemas para realizar prácticas en áreas administrativas y de sistemas."
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Curso Gratuito: Inglés Técnico para Profesionales",
            deadline: "20 de Julio, 2026",
            desc: "Curso intensivo de 120 horas totalmente gratuito para estudiantes regulares del IESTP Suiza. Incluye certificación internacional."
          },
          {
            image: "from-orange-500 to-red-600",
            title: "Convocatoria: Auxiliar de Laboratorio - IESTP Suiza",
            deadline: "25 de Julio, 2026",
            desc: "2 plazas para estudiantes destacados de los últimos ciclos para apoyar en la gestión de los laboratorios de cómputo, enfermería y mecatrónica."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Certificación gratuita: Microsoft Office Specialist",
            deadline: "10 de Agosto, 2026",
            desc: "Certificación oficial MOS en Word, Excel y PowerPoint completamente gratuita para estudiantes regulares. Vacantes limitadas."
          },
          {
            image: "from-indigo-500 to-blue-600",
            title: "Oferta Laboral: Técnico en Enfermería - Hospital Regional",
            deadline: "5 de Julio, 2026",
            desc: "El Hospital Regional de Pucallpa requiere 5 técnicos en enfermería para su nuevo servicio de emergencias. Exclusivo para egresados del IESTP Suiza."
          }
        ]
      },
      upcoming: {
        title: "Próximos Eventos",
        subtitle: "No te pierdas las actividades más importantes de nuestra comunidad institucional.",
        items: [
          { date: "15", month: "Jun", name: "Feria Tecnológica Suiza 2026", time: "9:00 am - 5:00 pm", location: "Auditorio Principal" },
          { date: "24", month: "Jun", name: "Festival Cultural de la Amazonía", time: "10:00 am - 8:00 pm", location: "Plaza de Armas" },
          { date: "08", month: "Jul", name: "Charla de Becas Internacionales", time: "3:00 pm - 5:00 pm", location: "Sala de Conferencias" },
          { date: "15", month: "Jul", name: "I Congreso de Investigación", time: "8:00 am - 6:00 pm", location: "Centro de Convenciones" },
          { date: "20", month: "Jul", name: "Taller de Emprendimiento", time: "2:00 pm - 6:00 pm", location: "Lab. de Innovación" },
          { date: "28", month: "Jul", name: "Ceremonia por Fiestas Patrias", time: "9:00 am - 12:00 pm", location: "Patio Institucional" }
        ]
      },
      gallery: {
        title: "Galería Multimedia",
        subtitle: "Momentos que reflejan la vida institucional, académica y cultural del IESTP Suiza.",
        items: [
          { type: "photo", thumb: "from-blue-500 to-cyan-600", title: "Inauguración de laboratorio de simulación clínica", desc: "Moderno laboratorio equipado para Enfermería Técnica" },
          { type: "photo", thumb: "from-emerald-500 to-teal-600", title: "Feria Tecnológica 2026", desc: "Estudiantes presentando proyectos innovadores" },
          { type: "photo", thumb: "from-amber-500 to-orange-600", title: "Ceremonia de licenciamiento institucional", desc: "Reconocimiento del MINEDU a nuestra calidad educativa" },
          { type: "photo", thumb: "from-violet-500 to-purple-600", title: "Hackathon Ucayali 2026", desc: "Equipo CodeSuiza ganador del primer lugar" },
          { type: "photo", thumb: "from-pink-500 to-rose-600", title: "Festival Cultural Shipibo", desc: "Estudiantes celebrando la riqueza cultural de Ucayali" },
          { type: "photo", thumb: "from-sky-500 to-indigo-600", title: "Taller de robótica educativa", desc: "Estudiantes de Mecatrónica en competencia internacional" },
          { type: "photo", thumb: "from-green-500 to-lime-600", title: "Juegos Deportivos Inter-Tecnológicos", desc: "Delegación campeona 2026" },
          { type: "photo", thumb: "from-red-500 to-rose-600", title: "Visita guiada de postulantes", desc: "Futuros estudiantes conocen nuestras instalaciones" },
          { type: "video", thumb: "from-gray-700 to-gray-900", title: "Video Institucional IESTP Suiza 2026", desc: "Conoce nuestra oferta educativa y valores institucionales" }
        ]
      },
      successStories: {
        title: "De estudiante a profesional exitoso",
        subtitle: "Egresados que hoy brillan en el mundo laboral gracias a su formación en el IESTP Suiza.",
        items: [
          {
            image: "from-violet-500 to-purple-600",
            name: "María López",
            career: "Desarrollo de Sistemas de Información",
            company: "TechSolutions Perú",
            story: "Desde mi primer ciclo supe que el IESTP Suiza me daría las herramientas para cumplir mis sueños. Hoy lidero un equipo de desarrollo en una de las empresas tecnológicas más importantes del país."
          },
          {
            image: "from-emerald-500 to-teal-600",
            name: "José Pérez",
            career: "Enfermería Técnica",
            company: "Hospital Regional de Pucallpa",
            story: "La formación práctica y el apoyo de mis docentes fueron clave. Hoy trabajo en el área de emergencias del hospital más importante de la región, salvando vidas cada día."
          },
          {
            image: "from-amber-500 to-orange-600",
            name: "Ana Torres",
            career: "Administración de Empresas",
            company: "Grupo AgroExport Ucayali",
            story: "El instituto me brindó las herramientas para emprender. Hoy soy gerente de operaciones en una empresa que exporta productos amazónicos a tres continentes."
          },
          {
            image: "from-sky-500 to-indigo-600",
            name: "Carlos Mendoza",
            career: "Mecatrónica Automotriz",
            company: "Toyota del Perú",
            story: "Los talleres modernos y la formación especializada me prepararon para los desafíos del mundo laboral. Hoy soy técnico especialista en una concesionaria oficial."
          }
        ]
      },
      popular: {
        title: "Lo Más Popular Esta Semana",
        items: [
          {
            type: "news",
            image: "from-indigo-500 to-blue-600",
            title: "IESTP Suiza obtiene licenciamiento institucional por 6 años",
            tag: "Institucional",
            views: 2847
          },
          {
            type: "achievement",
            image: "from-violet-500 to-purple-600",
            title: "Estudiantes ganan primer lugar en hackathon regional",
            tag: "Logros",
            views: 2156
          },
          {
            type: "event",
            image: "from-blue-500 to-cyan-600",
            title: "Feria Tecnológica 2026: Innovación estudiantil",
            tag: "Eventos",
            views: 1892
          },
          {
            type: "opportunity",
            image: "from-pink-500 to-rose-600",
            title: "Beca Permanencia 2026: Nuevos beneficios",
            tag: "Oportunidades",
            views: 1543
          },
          {
            type: "news",
            image: "from-green-500 to-lime-600",
            title: "IESTP Suiza campeón de los Juegos Deportivos",
            tag: "Deportes",
            views: 1278
          }
        ]
      },
      experiences: {
        title: "Experiencias Institucionales",
        subtitle: "Momentos que marcan la vida de nuestra comunidad educativa.",
        items: [
          {
            image: "from-amber-500 to-yellow-600",
            title: "Ceremonia de Graduación 2026",
            date: "Diciembre 2026",
            type: "graduacion",
            desc: "La ceremonia de graduación más emotiva del año. Más de 300 estudiantes recibieron su título profesional técnico en una ceremonia llena de orgullo y esperanza.",
            stats: [
              { value: "300+", label: "Graduados" },
              { value: "11", label: "Carreras" },
              { value: "49", label: "Años de historia" }
            ],
            gallery: [
              { thumb: "from-amber-400 to-yellow-500", title: "Imposición de birretes" },
              { thumb: "from-orange-400 to-red-500", title: "Entrega de diplomas" },
              { thumb: "from-gold-400 to-amber-500", title: "Foto promocional" }
            ],
            testimonial: "Recibir mi título en el IESTP Suiza es el logro más importante de mi vida. Esta institución me formó como profesional y como persona."
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Concurso de Innovación 2026",
            date: "Noviembre 2026",
            type: "concurso",
            desc: "Estudiantes de todas las carreras compitieron con proyectos innovadores que solucionan problemas reales de la región Ucayali.",
            stats: [
              { value: "40", label: "Proyectos" },
              { value: "200", label: "Estudiantes" },
              { value: "15", label: "Docentes asesores" }
            ],
            gallery: [
              { thumb: "from-violet-400 to-purple-500", title: "Presentación de proyectos" },
              { thumb: "from-indigo-400 to-blue-500", title: "Evaluación del jurado" },
              { thumb: "from-fuchsia-400 to-pink-500", title: "Equipos ganadores" }
            ],
            testimonial: "Nuestro proyecto de bioabono ganó el primer lugar. Fue increíble ver cómo nuestro trabajo puede tener un impacto real en la agricultura local."
          },
          {
            image: "from-blue-500 to-cyan-600",
            title: "Semana Institucional Suiza",
            date: "Julio 2026",
            type: "semana",
            desc: "Una semana llena de actividades académicas, culturales, deportivas y recreativas que fortalecen el sentido de pertenencia institucional.",
            stats: [
              { value: "7", label: "Días de actividades" },
              { value: "50+", label: "Actividades realizadas" },
              { value: "1000+", label: "Participantes" }
            ],
            gallery: [
              { thumb: "from-blue-400 to-cyan-500", title: "Actividades deportivas" },
              { thumb: "from-emerald-400 to-teal-500", title: "Talleres culturales" },
              { thumb: "from-sky-400 to-indigo-500", title: "Noche de talentos" }
            ],
            testimonial: "La Semana Institucional es el momento donde realmente sentimos que somos una gran familia. La energía y el compañerismo son contagiosos."
          },
          {
            image: "from-green-500 to-lime-600",
            title: "Campeonato Deportivo Anual",
            date: "Junio 2026",
            type: "deportes",
            desc: "El deporte como herramienta de integración y desarrollo personal. Nuestros estudiantes demostraron su talento y espíritu competitivo.",
            stats: [
              { value: "500+", label: "Deportistas" },
              { value: "4", label: "Disciplinas" },
              { value: "11", label: "Carreras participantes" }
            ],
            gallery: [
              { thumb: "from-green-400 to-lime-500", title: "Final de fútbol" },
              { thumb: "from-emerald-400 to-green-500", title: "Competencia de atletismo" },
              { thumb: "from-teal-400 to-cyan-500", title: "Premiación" }
            ],
            testimonial: "El deporte me enseñó disciplina y trabajo en equipo. Valores que aplico tanto en la cancha como en el aula."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Festival Cultural Shipibo",
            date: "Agosto 2026",
            type: "cultura",
            desc: "Celebración de la riqueza cultural shipiba con danzas, música, artesanía y gastronomía tradicional de la Amazonía.",
            stats: [
              { value: "2000+", label: "Asistentes" },
              { value: "30", label: "Artesanos" },
              { value: "15", label: "Agrupaciones culturales" }
            ],
            gallery: [
              { thumb: "from-pink-400 to-rose-500", title: "Danzas típicas" },
              { thumb: "from-red-400 to-orange-500", title: "Artesanía shipiba" },
              { thumb: "from-purple-400 to-violet-500", title: "Música tradicional" }
            ],
            testimonial: "Preservar nuestra cultura shipiba es fundamental. Este festival nos permite compartir nuestras tradiciones con las nuevas generaciones."
          }
        ]
      }
    },
    
    transparencyMenu: [
      { name: "Documentos de Gestión", path: "/transparency/documentos" },
      { name: "Convenios", path: "/transparency/convenios" },
      { name: "Convocatorias", path: "/transparency/convocatorias" },
      { name: "Calendario Académico", path: "/transparency/calendario" },
      { name: "Estadísticas", path: "/transparency/estadisticas" },
      { name: "Inversiones y Donaciones", path: "/transparency/inversiones" }
    ],
    proceduresMenu: [
      { name: "Trabajos de Aplicación Profesional", path: "/procedures/trabajos" },
      { name: "Contáctanos", path: "/procedures/contactanos" },
      { name: "Proceso de Titulación", path: "/procedures/titulacion" }
    ],
    servicesMenu: [
      { name: "Campus Virtual", path: "/services/campus" },
      { name: "Sistema de Gestión Académica", path: "/services/sga" },
      { name: "Bolsa Laboral", path: "/services/bolsa" },
      { name: "Centro de Idiomas", path: "/services/idiomas" },
      { name: "Biblioteca Virtual", path: "/services/biblioteca" },
      { name: "Publicaciones", path: "/services/publicaciones" },
      { name: "Enlaces Institucionales", path: "/services/enlaces" },
      { name: "Base de Datos", path: "/services/bd" }
    ],

    aboutMenu: {
      col1: [
        { title: "Presentación", desc: "Conoce la historia y objetivos institucionales.", id: "presentacion" },
        { title: "Palabras del Director", desc: "Mensaje de nuestro director institucional.", id: "director" },
        { title: "Visión y Misión", desc: "Descubre nuestros valores y metas educativas.", id: "vision-mision" },
        { title: "Historia Institucional", desc: "Conoce la evolución de nuestro instituto.", id: "historia" }
      ],
      col2: [
        { title: "Gestión Académica", desc: "Información sobre la organización académica.", id: "gestion-academica" },
        { title: "Gestión Administrativa", desc: "Estructura y procesos administrativos.", id: "gestion-administrativa" },
        { title: "Organigrama Institucional", desc: "Conoce nuestra estructura organizativa.", id: "organigrama" },
        { title: "Plana Docente", desc: "Nuestro equipo de profesionales educativos.", id: "docentes" }
      ],
      col3: {
        tagline: "Instituto de Excelencia Tecnológica",
        description: "Formando profesionales técnicos de excelencia en la Amazonía peruana con reconocimiento nacional e internacional.",
        cta: "Conócenos"
      }
    },
    contact: {
      hero: {
        title: "Estamos para ayudarte",
        subtitle: "Estudiantes, postulantes y comunidad en general pueden comunicarse con nosotros. Estamos aquí para resolver tus dudas y brindarte la información que necesitas.",
        cta: "Contáctanos ahora"
      },
      info: {
        title: "Información de Contacto",
        phone: { label: "Teléfono", value: "061-280665" },
        email: { label: "Correo Electrónico", value: "suiza@iestpsuiza.edu.pe" },
        hours: { label: "Horario de Atención", value: "Lunes a Viernes — 8:00 am a 5:00 pm" },
        address: { label: "Dirección", value: "Carretera Federico Basadre Km 5.700, Pucallpa — Ucayali" }
      },
      location: {
        title: "¿Cómo llegar al IESTP Suiza?",
        address: "Carretera Federico Basadre Km 5.700, Pucallpa, Ucayali, Perú",
        references: "Frente al Hospital Regional de Pucallpa, a 10 minutos del centro de la ciudad.",
        openInMaps: "Abrir en Google Maps",
        getDirections: "Cómo llegar",
        distanceLabel: "Distancia desde tu ubicación",
        walking: "Caminando",
        driving: "Automóvil",
        transit: "Transporte público",
        locationDenied: "Permiso de ubicación denegado. Activa la ubicación para ver distancias.",
        locationError: "No se pudo obtener tu ubicación. Intenta nuevamente.",
        detectLocation: "Detectar mi ubicación",
        calculating: "Calculando distancia..."
      },
      form: {
        title: "Envíanos un mensaje",
        subtitle: "Déjanos tus datos y te responderemos a la brevedad.",
        nameLabel: "Nombre Completo",
        emailLabel: "Correo Electrónico",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Ej: Información sobre admisión",
        messageLabel: "Tu Mensaje",
        sendButton: "ENVIAR MENSAJE",
        success: "¡Mensaje enviado con éxito! Nos comunicaremos contigo pronto.",
        placeholderName: "Ej: Juan Pérez",
        placeholderEmail: "Ej: juan@example.com",
        placeholderMsg: "Escribe tu consulta aquí..."
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Resuelve tus dudas rápidamente.",
        items: [
          { q: "¿Cómo postular al IESTP Suiza?", a: "Debes asistir al proceso de admisión que se realiza dos veces al año. Inscríbete en nuestra sede principal con tu DNI y certificado de estudios secundarios, o a través de nuestra plataforma virtual durante las fechas establecidas." },
          { q: "¿Qué carreras ofrece el instituto?", a: "Ofrecemos 11 programas de estudio licenciados: Desarrollo de Sistemas de Información, Enfermería Técnica, Mecatrónica Automotriz, Producción Agropecuaria, Manejo Forestal, Contabilidad, Administración de Empresas, Construcción Civil, Electricidad Industrial, Administración de Operaciones Turísticas y Asistencia Administrativa." },
          { q: "¿Cuáles son los requisitos de admisión?", a: "Certificado oficial de estudios secundarios completos, copia de DNI vigente, partida de nacimiento original, foto tamaño carnet en fondo blanco y el recibo de pago por derecho de inscripción." },
          { q: "¿Dónde está ubicado el instituto?", a: "Estamos ubicados en la Carretera Federico Basadre Km 5.700, Pucallpa, región Ucayali, frente al Hospital Regional de Pucallpa." },
          { q: "¿Cuál es el horario de atención?", a: "Nuestro horario de atención es de lunes a viernes de 8:00 am a 5:00 pm en nuestra sede institucional." }
        ]
      },
      social: {
        title: "Síguenos en Redes Sociales",
        subtitle: "Mantente informado de nuestras actividades y novedades.",
        facebook: "Facebook",
        instagram: "Instagram",
        youtube: "YouTube",
        tiktok: "TikTok"
      },
      whatsapp: {
        title: "WhatsApp Institucional",
        subtitle: "Resuelve tus dudas de forma rápida y directa.",
        message: "¡Hola! Quiero información sobre el IESTP Suiza",
        cta: "Hablar con un asesor",
        available: "Horario de atención: Lun - Vie 8:00 am - 5:00 pm"
      },
      whyChooseUs: {
        title: "¿Por qué elegir el IESTP Suiza?",
        subtitle: "Razones para formar parte de nuestra comunidad educativa.",
        items: [
          { title: "Formación Técnica de Calidad", desc: "Programas licenciados por el MINEDU con planes de estudio actualizados y enfoque práctico." },
          { title: "Docentes Especializados", desc: "Plana docente con amplia experiencia profesional y académica, comprometida con tu éxito." },
          { title: "Convenios Institucionales", desc: "Alianzas estratégicas con empresas e instituciones para prácticas pre-profesionales." },
          { title: "Oportunidades Laborales", desc: "Alta empleabilidad de nuestros egresados gracias a una formación alineada al mercado." },
          { title: "Infraestructura Moderna", desc: "Laboratorios equipados, talleres especializados y ambientes diseñados para tu aprendizaje." },
          { title: "Reconocimiento Institucional", desc: "Institución licenciada y reconocida a nivel nacional por su calidad educativa." }
        ]
      },
      stats: {
        title: "El IESTP Suiza en cifras",
        students: "Estudiantes",
        graduates: "Egresados",
        years: "Años de Experiencia",
        programs: "Carreras Profesionales",
        agreements: "Convenios Estratégicos"
      },
      testimonials: {
        title: "Lo que dicen nuestros estudiantes",
        subtitle: "Experiencias que inspiran a futuros profesionales.",
        items: [
          { name: "María López", career: "Desarrollo de Sistemas", text: "Gracias al IESTP Suiza pude desarrollar habilidades técnicas que me permitieron acceder a mejores oportunidades laborales en el sector tecnológico." },
          { name: "José Pérez", career: "Enfermería Técnica", text: "La formación práctica y el apoyo de los docentes fueron clave para mi desarrollo profesional. Hoy trabajo en el Hospital Regional de Pucallpa." },
          { name: "Ana Torres", career: "Administración de Empresas", text: "El instituto me brindó las herramientas necesarias para emprender mi propio negocio y contribuir al desarrollo de mi comunidad." },
          { name: "Carlos Mendoza", career: "Mecatrónica Automotriz", text: "Los talleres modernos y la formación especializada me prepararon para los desafíos del mundo laboral." }
        ]
      },
      visit: {
        title: "¿Quieres conocer nuestras instalaciones?",
        subtitle: "Agenda una visita guiada y descubre todo lo que el IESTP Suiza tiene para ti.",
        cta: "Agendar visita",
        modalTitle: "Solicitar visita",
        nameLabel: "Nombre Completo",
        phoneLabel: "Teléfono",
        emailLabel: "Correo Electrónico",
        dateLabel: "Fecha de visita",
        sendButton: "Enviar solicitud",
        success: "¡Solicitud enviada! Te contactaremos para confirmar tu visita.",
        close: "Cerrar"
      },
      whatsappHighlight: {
        title: "¿Tienes dudas sobre admisión o nuestras carreras?",
        subtitle: "Nuestro equipo de atención está listo para resolver todas tus consultas.",
        cta: "Hablar con un asesor"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      careers: "Study Programs",
      admission: "Admission 2026",
      about: "About Us",
      news: "News",
      contact: "Contact Us",
      institute: "Institute",
      research: "Research",
      library: "Library",
      transparency: "Transparency"
    },
    instituteMenu: {
      title: "Our Institute",
      about: "About Us",
      news: "News",
      contact: "Contact Us",
      cta: "Explore the Institute"
    },
    hero: {
      welcome: "Welcome to the Switzerland Public Higher Technological Institute",
      subtitle: "Training technical professionals of excellence in the Peruvian Amazon with national and international recognition.",
      explore: "Explore Programs",
      portalTitle: "Student Dashboard",
      greeting: "Hello, Switzerland Student!",
      desc: "Let's complete your tasks for today.",
      searchPlaceholder: "Search courses or programs...",
      task1: "Software Development",
      task2: "Community Nursing",
      task3: "Soil Management",
      statusProgress: "In progress",
      stats: {
        students: "Students",
        teachers: "Faculty",
        newStudents: "New Admitted",
        graduates: "Graduates"
      }
    },
    careers: {
      title: "Our Study Programs",
      subtitle: "Vanguard education with high job demand in the Ucayali region and throughout Peru.",
      categories: {
        all: "All",
        tech: "Technology",
        business: "Management & Services",
        field: "Engineering & Field"
      },
      duration: "Duration: 3 Years (6 Semesters)",
      employability: "Employability",
      viewCurriculum: "View Curriculum Map",
      items: [
        {
          id: "sys",
          name: "Information Systems Development",
          category: "tech",
          desc: "Design, develop, and manage software, mobile applications, and databases using state-of-the-art technologies.",
          tagline: "Transform ideas into digital solutions that drive the region.",
          learn: "You will learn to program, design databases and build web and mobile apps using modern frameworks.",
          learningPoints: ["Full-stack development","Database design","Deployment and maintenance"],
          alumni: { name: "María López", role: "Full-Stack Developer", quote: "The program helped me join a regional software company." },
          employabilityRate: 92
        },
        {
          id: "enfer",
          name: "Technical Nursing",
          category: "field",
          desc: "Provide comprehensive health care in prevention, recovery, and rehabilitation to individuals and communities with high humanitarian values.",
          tagline: "Caring for lives, training professionals committed to the community.",
          learn: "You will learn care techniques, first aid, health promotion, and clinical/community support skills.",
          learningPoints: ["Basic nursing care","Resuscitation techniques","Health promotion and prevention"],
          alumni: { name: "José Pérez", role: "Nursing Technician", quote: "The program gave me the practical experience to work in a local hospital." },
          employabilityRate: 88
        },
        {
          id: "meca",
          name: "Automotive Mechatronics",
          category: "field",
          desc: "Diagnose, repair, and optimize mechanical, electrical, and electronic systems of modern vehicles and machinery.",
          tagline: "Integrate mechanics and electronics for real mobility solutions.",
          learn: "Training in electronics, mechanics and automation applied to vehicles and mechatronic systems.",
          learningPoints: ["Automotive electronics","Applied mechanics","Control systems"],
          alumni: { name: "Luis García", role: "Mechatronics Technician", quote: "I maintain regional transport fleets today." },
          employabilityRate: 85
        },
        {
          id: "agro",
          name: "Agricultural Production",
          category: "field",
          desc: "Manage crop and livestock production processes with sustainable techniques, biotechnology, and high efficiency.",
          tagline: "Innovation and sustainability for the field and community.",
          learn: "Techniques for cultivation and livestock management, agroecosystem management and productivity-boosting technologies.",
          learningPoints: ["Crop management","Animal health","Water resources management"],
          alumni: { name: "Ana Torres", role: "Agricultural Manager", quote: "I implemented sustainable production systems in my community." },
          employabilityRate: 80
        },
        {
          id: "forest",
          name: "Forest Management",
          category: "field",
          desc: "Manage, protect, and sustainably exploit forest and wildlife resources in the Peruvian Amazon.",
          tagline: "Conservation and responsible use of our natural resources.",
          learn: "Sustainable forest management, ecosystem protection, and responsible use techniques.",
          learningPoints: ["Forest inventory","Ecological restoration","Sustainable management policies"],
          alumni: { name: "Marcos Rivera", role: "Forest Specialist", quote: "I work on conservation projects with local communities." },
          employabilityRate: 82
        },
        {
          id: "cont",
          name: "Accounting",
          category: "business",
          desc: "Manage financial, cost, and tax information of public and private companies under international standards.",
          tagline: "Accuracy and ethics for financial management in organizations.",
          learn: "Financial accounting, costing, auditing and accounting systems for modern businesses.",
          learningPoints: ["Financial accounting","Auditing","Taxation"],
          alumni: { name: "Patricia Huaman", role: "Accountant", quote: "I certified and found employment in a regional accounting firm." },
          employabilityRate: 85
        },
        {
          id: "admin",
          name: "Business Administration",
          category: "business",
          desc: "Plan, organize, and direct organizations, leading commercial projects and driving business innovation.",
          tagline: "Leadership and management to transform organizations and projects.",
          learn: "Project management, basic finance, marketing and leadership to drive productive initiatives.",
          learningPoints: ["Project management","Basic marketing","Leadership and management"],
          alumni: { name: "Carlos Mendoza", role: "Operations Manager", quote: "The program was key for my professional growth." },
          employabilityRate: 87
        },
        {
          id: "civil",
          name: "Civil Construction",
          category: "field",
          desc: "Supervise, plan, and execute civil infrastructure works, buildings, and roads with quality and safety standards.",
          tagline: "Building safe and sustainable spaces for the region.",
          learn: "Construction techniques, blueprint reading, quality control and safety on civil works.",
          learningPoints: ["Blueprint reading","Construction management","Industrial safety"],
          alumni: { name: "Javier Ramos", role: "Works Supervisor", quote: "I work on regional infrastructure projects with modern standards." },
          employabilityRate: 90
        },
        {
          id: "elec",
          name: "Industrial Electricity",
          category: "tech",
          desc: "Install, operate, and maintain energy systems, machinery automation, and industrial control systems.",
          tagline: "Energy and control for the modern industry.",
          learn: "Industrial electrical systems, automation and preventive maintenance of electrical equipment.",
          learningPoints: ["Electrical installations","Automation","Industrial maintenance"],
          alumni: { name: "Rosa Delgado", role: "Electrician Technician", quote: "I participated in installing electrical systems for an agro-industrial plant." },
          employabilityRate: 86
        },
        {
          id: "tur",
          name: "Tourism Operations Administration",
          category: "business",
          desc: "Design, promote, and operate sustainable tourism services, valuing the biodiversity and cultural wealth of our rainforest.",
          tagline: "Promoting sustainable experiences that connect culture and nature.",
          learn: "Tourism service management, destination promotion and customer service specialized in sustainable tourism.",
          learningPoints: ["Tourism promotion","Customer service","Service management"],
          alumni: { name: "Elena Fuentes", role: "Tourism Manager", quote: "I coordinate sustainable tourism experiences for national visitors." },
          employabilityRate: 78
        },
        {
          id: "asist",
          name: "Administrative Assistance",
          category: "business",
          desc: "Organize, manage, and optimize office operations and both internal and external corporate communications.",
          tagline: "Efficient support for the operation of organizations and services.",
          learn: "Office tools, business communication and administrative organization to support institutional processes.",
          learningPoints: ["Office automation","Business communication","Administrative organization"],
          alumni: { name: "Karina Soto", role: "Administrative Assistant", quote: "I found employment immediately after graduating at a local municipality." },
          employabilityRate: 80
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know to join our community of excellence.",
      q1: "Where can I work?",
      a1: "Our graduates work in public and private companies across the country, leading tech support, management, health centers, agricultural production, or starting their own innovative businesses.",
      q2: "Why study at IESTP Switzerland?",
      a2: "Because we offer 100% free public higher education with official National certification, modern specialized laboratories, professional internship agreements, and active job boards.",
      q3: "Where can I do my internships?",
      a3: "Through agreements with municipalities, hospitals, clinics, agricultural companies, mechanical workshops, builders, and industries in Ucayali and nationwide.",
      q4: "Requirements for admission exam registration",
      a4: "Official certificate of completed secondary studies, copy of valid ID (DNI), original birth certificate, passport-sized white background photo, and the registration payment receipt."
    },
    news: {
      title: "Institutional News and Events",
      subtitle: "Find out about the latest activities, academic achievements, and publications of our institution.",
      readMore: "Read Article",
      featured: {
        image: "from-indigo-600 via-primary to-secondary",
        title: "IESTP Suiza obtains 6-year institutional licensing granted by MINEDU",
        desc: "The Ministry of Education granted institutional licensing to IESTP Suiza, recognizing educational quality, modern infrastructure, and study plans aligned with the labor demand of the Ucayali region.",
        date: "May 15, 2026",
        category: "institutional"
      },
      categories: [
        { id: 'all', label: 'All' },
        { id: 'institutional', label: 'Institutional' },
        { id: 'academic', label: 'Academic' },
        { id: 'events', label: 'Events' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'opportunities', label: 'Opportunities' },
        { id: 'sports', label: 'Sports' },
        { id: 'culture', label: 'Culture' }
      ],
      items: [
        {
          tag: "Institutional",
          categoryId: "institutional",
          image: "from-amber-500 to-orange-600",
          title: "IESTP Suiza signs inter-institutional agreement with the Provincial Municipality of Coronel Portillo",
          desc: "This agreement will allow our students to carry out pre-professional internships in different municipal departments, strengthening their technical training with real experience in the public sector.",
          date: "June 10, 2026"
        },
        {
          tag: "Academic",
          categoryId: "academic",
          image: "from-emerald-500 to-teal-600",
          title: "IESTP Suiza faculty participate in international pedagogical innovation workshop",
          desc: "Our teachers were trained in active teaching-learning methodologies by specialists from the National University of Engineering, incorporating digital tools and competency-based assessment.",
          date: "June 5, 2026"
        },
        {
          tag: "Achievements",
          categoryId: "achievements",
          image: "from-violet-500 to-purple-600",
          title: "Software Development students win first place in regional hackathon",
          desc: "The 'CodeSuiza' team, made up of fourth-cycle students, won first place in the Ucayali 2026 Hackathon, developing a mobile application for urban solid waste management.",
          date: "May 28, 2026"
        },
        {
          tag: "Events",
          categoryId: "events",
          image: "from-blue-500 to-cyan-600",
          title: "Technology Fair 2026: Innovation and student entrepreneurship",
          desc: "The 2026 Technology Fair was successfully held where students presented innovative projects in robotics, software development, nursing, mechatronics, and agricultural production.",
          date: "May 20, 2026"
        },
        {
          tag: "Opportunities",
          categoryId: "opportunities",
          image: "from-pink-500 to-rose-600",
          title: "Permanence Scholarship 2026: New benefits for high-performing students",
          desc: "PRONABEC allocated 50 new permanence scholarships for IESTP Suiza students who maintain outstanding academic performance and are in situations of economic vulnerability.",
          date: "May 15, 2026"
        },
        {
          tag: "Sports",
          categoryId: "sports",
          image: "from-green-500 to-lime-600",
          title: "IESTP Suiza champion of the Inter-Technological Sports Games Ucayali 2026",
          desc: "Our sports delegation obtained first place in soccer, men's basketball and athletics, demonstrating that excellence is also built through sports.",
          date: "May 10, 2026"
        },
        {
          tag: "Culture",
          categoryId: "culture",
          image: "from-red-500 to-rose-600",
          title: "Shipibo Song Festival: Students celebrate the cultural richness of Ucayali",
          desc: "Students from different programs participated in the Shipibo Song Festival, promoting the rescue of the language and traditional music of the indigenous peoples of the region.",
          date: "May 5, 2026"
        },
        {
          tag: "Academic",
          categoryId: "academic",
          image: "from-sky-500 to-indigo-600",
          title: "New clinical simulation laboratory for Technical Nursing",
          desc: "IESTP Suiza inaugurated a modern clinical simulation laboratory equipped with state-of-the-art mannequins, allowing Technical Nursing students to practice procedures in a safe and controlled environment.",
          date: "April 28, 2026"
        },
        {
          tag: "Scientific Journal",
          categoryId: "academic",
          image: "from-teal-500 to-emerald-600",
          title: "Latin American Journal of Technological Innovation (RELITES) - Vol. 1 2026",
          desc: "Publication of scientific research led by teachers and students of IESTP Switzerland in artificial intelligence applied to agriculture and mechatronics.",
          date: "May 2026"
        }
      ],
      events: {
        title: "Events and Activities",
        subtitle: "Fairs, conferences, workshops, and activities that strengthen your professional training.",
        items: [
          {
            image: "from-blue-500 to-cyan-600",
            title: "Suiza Technology Fair 2026",
            date: "May 20, 2026",
            location: "Institutional Auditorium",
            desc: "Exhibition of innovative projects from all programs, with participation of invited companies and talks on technology trends."
          },
          {
            image: "from-purple-500 to-violet-600",
            title: "1st Congress of Research and Technological Innovation",
            date: "July 15-17, 2026",
            location: "Ucayali Convention Center",
            desc: "Academic congress with national and international speakers on artificial intelligence, community health, and sustainable development."
          },
          {
            image: "from-emerald-500 to-green-600",
            title: "Entrepreneurship and Innovation Workshop",
            date: "June 10, 2026",
            location: "Innovation Lab - IESTP Suiza",
            desc: "Hands-on workshop on design thinking and business model creation for entrepreneurial students from all programs."
          },
          {
            image: "from-orange-500 to-red-600",
            title: "Inter-Program Sports Championship",
            date: "Throughout June",
            location: "IESTP Suiza Sports Courts",
            desc: "Annual sports competition where different programs compete in soccer, volleyball, basketball, and athletics, fostering camaraderie."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Amazon Cultural Festival",
            date: "June 24, 2026",
            location: "Pucallpa Main Square",
            desc: "Community-open festival with traditional dance performances, regional gastronomy, Shipibo crafts, and live music."
          },
          {
            image: "from-cyan-500 to-blue-600",
            title: "Talk: International scholarship opportunities",
            date: "July 8, 2026",
            location: "Conference Room - IESTP Suiza",
            desc: "Informative talk on scholarship programs offered by PRONABEC, international organizations, and foreign universities."
          }
        ]
      },
      achievements: {
        title: "Achievements and Recognitions",
        subtitle: "We celebrate the successes of our community that fill us with institutional pride.",
        items: [
          {
            image: "from-amber-500 to-yellow-600",
            title: "Technical Nursing student wins first place in national first aid competition",
            desc: "María Torres, a VI-cycle student, represented Ucayali and won the gold medal at the National Nursing Skills Competition organized by MINEDU.",
            badge: "Gold Medal"
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Research faculty publishes article in indexed scientific journal",
            desc: "Mg. Carlos Rivas, professor in the Software Development program, published his research on 'Machine Learning for crop prediction in the Amazon' in a Scopus journal.",
            badge: "Scopus Publication"
          },
          {
            image: "from-blue-500 to-indigo-600",
            title: "Sustainable agricultural project wins national innovation competition",
            desc: "The 'BioAbono Suiza' project led by Agricultural Production students won first place in the 2026 National Agrarian Technological Innovation Competition.",
            badge: "National Award"
          },
          {
            image: "from-emerald-500 to-teal-600",
            title: "IESTP Suiza recognized as licensed institution with excellent performance",
            desc: "MINEDU granted category 'A' to IESTP Suiza in the institutional performance ranking, standing out in employability, research, and academic management indicators.",
            badge: "Category A - MINEDU"
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Automotive Mechatronics students qualify for international competition",
            desc: "The 'Mecatrónicos Suiza' team qualified for the final of the International Educational Robotics Competition to be held in Bogotá, representing Peru.",
            badge: "International Qualification"
          },
          {
            image: "from-orange-500 to-amber-600",
            title: "Recognition for institutional trajectory - 49 years training professionals",
            desc: "The Regional Government of Ucayali granted public recognition to IESTP Suiza for its 49 years of uninterrupted service training technical professionals for the region's development.",
            badge: "Regional Recognition"
          }
        ]
      },
      opportunities: {
        title: "Opportunities for Students",
        subtitle: "Scholarships, calls, internships, and certifications to boost your professional career.",
        items: [
          {
            image: "from-blue-500 to-cyan-600",
            title: "Permanence Scholarship - PRONABEC 2026",
            deadline: "July 30, 2026",
            desc: "Coverage of studies, meals, and educational materials for high-performing students with limited economic resources."
          },
          {
            image: "from-emerald-500 to-teal-600",
            title: "Pre-Professional Internships - Municipality of Coronel Portillo",
            deadline: "July 15, 2026",
            desc: "10 vacancies for Administration, Accounting, and Software Development students to intern in administrative and systems areas."
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Free Course: Technical English for Professionals",
            deadline: "July 20, 2026",
            desc: "Intensive 120-hour course completely free for regular IESTP Suiza students. Includes international certification."
          },
          {
            image: "from-orange-500 to-red-600",
            title: "Call: Laboratory Assistant - IESTP Suiza",
            deadline: "July 25, 2026",
            desc: "2 positions for outstanding students from the last cycles to assist in managing computing, nursing, and mechatronics laboratories."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Free Certification: Microsoft Office Specialist",
            deadline: "August 10, 2026",
            desc: "Official MOS certification in Word, Excel and PowerPoint completely free for regular students. Limited vacancies."
          },
          {
            image: "from-indigo-500 to-blue-600",
            title: "Job Offer: Nursing Technician - Regional Hospital",
            deadline: "July 5, 2026",
            desc: "The Regional Hospital of Pucallpa requires 5 nursing technicians for its new emergency service. Exclusive for IESTP Suiza graduates."
          }
        ]
      },
      upcoming: {
        title: "Upcoming Events",
        subtitle: "Don't miss the most important activities of our institutional community.",
        items: [
          { date: "15", month: "Jun", name: "Suiza Technology Fair 2026", time: "9:00 am - 5:00 pm", location: "Main Auditorium" },
          { date: "24", month: "Jun", name: "Amazon Cultural Festival", time: "10:00 am - 8:00 pm", location: "Main Square" },
          { date: "08", month: "Jul", name: "International Scholarships Talk", time: "3:00 pm - 5:00 pm", location: "Conference Room" },
          { date: "15", month: "Jul", name: "1st Research Congress", time: "8:00 am - 6:00 pm", location: "Convention Center" },
          { date: "20", month: "Jul", name: "Entrepreneurship Workshop", time: "2:00 pm - 6:00 pm", location: "Innovation Lab" },
          { date: "28", month: "Jul", name: "Independence Day Ceremony", time: "9:00 am - 12:00 pm", location: "Institutional Courtyard" }
        ]
      },
      gallery: {
        title: "Multimedia Gallery",
        subtitle: "Moments that reflect the institutional, academic, and cultural life of IESTP Suiza.",
        items: [
          { type: "photo", thumb: "from-blue-500 to-cyan-600", title: "Clinical simulation lab inauguration", desc: "Modern laboratory equipped for Technical Nursing" },
          { type: "photo", thumb: "from-emerald-500 to-teal-600", title: "Technology Fair 2026", desc: "Students presenting innovative projects" },
          { type: "photo", thumb: "from-amber-500 to-orange-600", title: "Institutional licensing ceremony", desc: "MINEDU recognition of our educational quality" },
          { type: "photo", thumb: "from-violet-500 to-purple-600", title: "Ucayali Hackathon 2026", desc: "CodeSuiza team winning first place" },
          { type: "photo", thumb: "from-pink-500 to-rose-600", title: "Shipibo Cultural Festival", desc: "Students celebrating Ucayali's cultural richness" },
          { type: "photo", thumb: "from-sky-500 to-indigo-600", title: "Educational robotics workshop", desc: "Mechatronics students in international competition" },
          { type: "photo", thumb: "from-green-500 to-lime-600", title: "Inter-Technological Sports Games", desc: "Champion delegation 2026" },
          { type: "photo", thumb: "from-red-500 to-rose-600", title: "Guided tour for applicants", desc: "Future students explore our facilities" },
          { type: "video", thumb: "from-gray-700 to-gray-900", title: "IESTP Suiza Institutional Video 2026", desc: "Learn about our educational offering and institutional values" }
        ]
      },
      successStories: {
        title: "From student to successful professional",
        subtitle: "Graduates who shine in the workforce thanks to their training at IESTP Suiza.",
        items: [
          {
            image: "from-violet-500 to-purple-600",
            name: "María López",
            career: "Information Systems Development",
            company: "TechSolutions Peru",
            story: "From my first semester I knew IESTP Suiza would give me the tools to achieve my dreams. Today I lead a development team at one of the country's most important tech companies."
          },
          {
            image: "from-emerald-500 to-teal-600",
            name: "José Pérez",
            career: "Technical Nursing",
            company: "Regional Hospital of Pucallpa",
            story: "The practical training and faculty support were key. Today I work in the emergency department of the most important hospital in the region, saving lives every day."
          },
          {
            image: "from-amber-500 to-orange-600",
            name: "Ana Torres",
            career: "Business Administration",
            company: "AgroExport Ucayali Group",
            story: "The institute gave me the tools to undertake. Today I am operations manager at a company that exports Amazonian products to three continents."
          },
          {
            image: "from-sky-500 to-indigo-600",
            name: "Carlos Mendoza",
            career: "Automotive Mechatronics",
            company: "Toyota del Perú",
            story: "The modern workshops and specialized training prepared me for the challenges of the working world. Today I am a specialist technician at an official dealership."
          }
        ]
      },
      popular: {
        title: "Most Popular This Week",
        items: [
          {
            type: "news",
            image: "from-indigo-500 to-blue-600",
            title: "IESTP Suiza obtains 6-year institutional licensing",
            tag: "Institutional",
            views: 2847
          },
          {
            type: "achievement",
            image: "from-violet-500 to-purple-600",
            title: "Students win first place in regional hackathon",
            tag: "Achievements",
            views: 2156
          },
          {
            type: "event",
            image: "from-blue-500 to-cyan-600",
            title: "Technology Fair 2026: Student innovation",
            tag: "Events",
            views: 1892
          },
          {
            type: "opportunity",
            image: "from-pink-500 to-rose-600",
            title: "Permanence Scholarship 2026: New benefits",
            tag: "Opportunities",
            views: 1543
          },
          {
            type: "news",
            image: "from-green-500 to-lime-600",
            title: "IESTP Suiza champion of Sports Games",
            tag: "Sports",
            views: 1278
          }
        ]
      },
      experiences: {
        title: "Institutional Experiences",
        subtitle: "Moments that mark the life of our educational community.",
        items: [
          {
            image: "from-amber-500 to-yellow-600",
            title: "Graduation Ceremony 2026",
            date: "December 2026",
            type: "graduation",
            desc: "The most emotional graduation ceremony of the year. Over 300 students received their professional technical degree in a ceremony full of pride and hope.",
            stats: [
              { value: "300+", label: "Graduates" },
              { value: "11", label: "Programs" },
              { value: "49", label: "Years of history" }
            ],
            gallery: [
              { thumb: "from-amber-400 to-yellow-500", title: "Cap and gown ceremony" },
              { thumb: "from-orange-400 to-red-500", title: "Diploma presentation" },
              { thumb: "from-gold-400 to-amber-500", title: "Graduation photo" }
            ],
            testimonial: "Receiving my degree from IESTP Suiza is the most important achievement of my life. This institution shaped me as a professional and as a person."
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Innovation Contest 2026",
            date: "November 2026",
            type: "contest",
            desc: "Students from all programs competed with innovative projects that solve real problems in the Ucayali region.",
            stats: [
              { value: "40", label: "Projects" },
              { value: "200", label: "Students" },
              { value: "15", label: "Advisor teachers" }
            ],
            gallery: [
              { thumb: "from-violet-400 to-purple-500", title: "Project presentations" },
              { thumb: "from-indigo-400 to-blue-500", title: "Judging panel" },
              { thumb: "from-fuchsia-400 to-pink-500", title: "Winning teams" }
            ],
            testimonial: "Our biofertilizer project won first place. It was amazing to see how our work can have a real impact on local agriculture."
          },
          {
            image: "from-blue-500 to-cyan-600",
            title: "Institutional Week Suiza",
            date: "July 2026",
            type: "week",
            desc: "A week full of academic, cultural, sports and recreational activities that strengthen the sense of institutional belonging.",
            stats: [
              { value: "7", label: "Activity days" },
              { value: "50+", label: "Activities held" },
              { value: "1000+", label: "Participants" }
            ],
            gallery: [
              { thumb: "from-blue-400 to-cyan-500", title: "Sports activities" },
              { thumb: "from-emerald-400 to-teal-500", title: "Cultural workshops" },
              { thumb: "from-sky-400 to-indigo-500", title: "Talent night" }
            ],
            testimonial: "Institutional Week is when we truly feel we are one big family. The energy and camaraderie are contagious."
          },
          {
            image: "from-green-500 to-lime-600",
            title: "Annual Sports Championship",
            date: "June 2026",
            type: "sports",
            desc: "Sports as a tool for integration and personal development. Our students demonstrated their talent and competitive spirit.",
            stats: [
              { value: "500+", label: "Athletes" },
              { value: "4", label: "Disciplines" },
              { value: "11", label: "Participating programs" }
            ],
            gallery: [
              { thumb: "from-green-400 to-lime-500", title: "Soccer final" },
              { thumb: "from-emerald-400 to-green-500", title: "Athletics competition" },
              { thumb: "from-teal-400 to-cyan-500", title: "Award ceremony" }
            ],
            testimonial: "Sports taught me discipline and teamwork. Values I apply both on the field and in the classroom."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Shipibo Cultural Festival",
            date: "August 2026",
            type: "culture",
            desc: "Celebration of the rich Shipibo culture with dances, music, crafts and traditional Amazonian gastronomy.",
            stats: [
              { value: "2000+", label: "Attendees" },
              { value: "30", label: "Artisans" },
              { value: "15", label: "Cultural groups" }
            ],
            gallery: [
              { thumb: "from-pink-400 to-rose-500", title: "Traditional dances" },
              { thumb: "from-red-400 to-orange-500", title: "Shipibo crafts" },
              { thumb: "from-purple-400 to-violet-500", title: "Traditional music" }
            ],
            testimonial: "Preserving our Shipibo culture is essential. This festival allows us to share our traditions with new generations."
          }
        ]
      }
    },
    contact: {
      hero: {
        title: "We're here to help you",
        subtitle: "Students, applicants and the community can reach us. We're here to answer your questions and provide the information you need.",
        cta: "Contact us now"
      },
      info: {
        title: "Contact Information",
        phone: { label: "Phone", value: "061-280665" },
        email: { label: "Email", value: "suiza@iestpsuiza.edu.pe" },
        hours: { label: "Office Hours", value: "Monday to Friday — 8:00 am to 5:00 pm" },
        address: { label: "Address", value: "Carretera Federico Basadre Km 5.700, Pucallpa — Ucayali" }
      },
      location: {
        title: "How to get to IESTP Suiza?",
        address: "Carretera Federico Basadre Km 5.700, Pucallpa, Ucayali, Peru",
        references: "In front of the Regional Hospital of Pucallpa, 10 minutes from downtown.",
        openInMaps: "Open in Google Maps",
        getDirections: "Get Directions",
        distanceLabel: "Distance from your location",
        walking: "Walking",
        driving: "Driving",
        transit: "Transit",
        locationDenied: "Location permission denied. Enable location to see distances.",
        locationError: "Could not get your location. Please try again.",
        detectLocation: "Detect my location",
        calculating: "Calculating distance..."
      },
      form: {
        title: "Send us a message",
        subtitle: "Leave your details and we'll get back to you shortly.",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        subjectLabel: "Subject",
        subjectPlaceholder: "E.g.: Admission information",
        messageLabel: "Your Message",
        sendButton: "SEND MESSAGE",
        success: "Message sent successfully! We will contact you soon.",
        placeholderName: "E.g.: John Doe",
        placeholderEmail: "E.g.: john@example.com",
        placeholderMsg: "Write your question here..."
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to common questions.",
        items: [
          { q: "How do I apply to IESTP Suiza?", a: "You must attend the admission process held twice a year. Register at our main headquarters with your ID and secondary school certificate, or through our virtual platform during the established dates." },
          { q: "What programs does the institute offer?", a: "We offer 11 licensed study programs: Information Systems Development, Technical Nursing, Automotive Mechatronics, Agricultural Production, Forest Management, Accounting, Business Administration, Civil Construction, Industrial Electricity, Tourism Operations Administration, and Administrative Assistance." },
          { q: "What are the admission requirements?", a: "Official certificate of completed secondary studies, copy of valid ID, original birth certificate, passport-sized photo on white background, and registration payment receipt." },
          { q: "Where is the institute located?", a: "We are located at Carretera Federico Basadre Km 5.700, Pucallpa, Ucayali region, in front of the Regional Hospital of Pucallpa." },
          { q: "What are the office hours?", a: "Our office hours are Monday to Friday from 8:00 am to 5:00 pm at our institutional headquarters." }
        ]
      },
      social: {
        title: "Follow Us on Social Media",
        subtitle: "Stay updated on our activities and news.",
        facebook: "Facebook",
        instagram: "Instagram",
        youtube: "YouTube",
        tiktok: "TikTok"
      },
      whatsapp: {
        title: "Institutional WhatsApp",
        subtitle: "Get quick and direct answers to your questions.",
        message: "Hello! I want information about IESTP Suiza",
        cta: "Chat with an advisor",
        available: "Office hours: Mon - Fri 8:00 am - 5:00 pm"
      },
      whyChooseUs: {
        title: "Why choose IESTP Suiza?",
        subtitle: "Reasons to join our educational community.",
        items: [
          { title: "Quality Technical Training", desc: "MINEDU-licensed programs with updated curricula and hands-on approach." },
          { title: "Specialized Faculty", desc: "Experienced professors committed to your success." },
          { title: "Institutional Agreements", desc: "Strategic partnerships with companies for internships." },
          { title: "Job Opportunities", desc: "High employability rate thanks to market-aligned training." },
          { title: "Modern Infrastructure", desc: "Equipped labs, specialized workshops, and learning environments." },
          { title: "Institutional Recognition", desc: "Licensed institution recognized nationally for educational quality." }
        ]
      },
      stats: {
        title: "IESTP Suiza by the numbers",
        students: "Students",
        graduates: "Graduates",
        years: "Years of Experience",
        programs: "Career Programs",
        agreements: "Strategic Agreements"
      },
      testimonials: {
        title: "What our students say",
        subtitle: "Experiences that inspire future professionals.",
        items: [
          { name: "María López", career: "Information Systems", text: "Thanks to IESTP Suiza I developed technical skills that allowed me to access better job opportunities in the technology sector." },
          { name: "José Pérez", career: "Technical Nursing", text: "The practical training and faculty support were key to my professional development. Today I work at the Regional Hospital of Pucallpa." },
          { name: "Ana Torres", career: "Business Administration", text: "The institute gave me the tools to start my own business and contribute to my community's development." },
          { name: "Carlos Mendoza", career: "Automotive Mechatronics", text: "The modern workshops and specialized training prepared me for the challenges of the working world." }
        ]
      },
      visit: {
        title: "Would you like to visit our facilities?",
        subtitle: "Schedule a guided tour and discover everything IESTP Suiza has to offer.",
        cta: "Schedule a visit",
        modalTitle: "Request a visit",
        nameLabel: "Full Name",
        phoneLabel: "Phone",
        emailLabel: "Email",
        dateLabel: "Visit Date",
        sendButton: "Submit request",
        success: "Request submitted! We will contact you to confirm your visit.",
        close: "Close"
      },
      whatsappHighlight: {
        title: "Questions about admission or our programs?",
        subtitle: "Our support team is ready to answer all your questions.",
        cta: "Chat with an advisor"
      }
    },
    aboutMenu: {
      col1: [
        { title: "Presentation", desc: "Learn about our history and institutional goals.", id: "presentacion" },
        { title: "Director's Message", desc: "Message from our institutional director.", id: "director" },
        { title: "Vision and Mission", desc: "Discover our values and educational goals.", id: "vision-mision" },
        { title: "Institutional History", desc: "Learn about our institute's evolution.", id: "historia" }
      ],
      col2: [
        { title: "Academic Management", desc: "Information about academic organization.", id: "gestion-academica" },
        { title: "Administrative Management", desc: "Structure and administrative processes.", id: "gestion-administrativa" },
        { title: "Organizational Chart", desc: "Learn about our organizational structure.", id: "organigrama" },
        { title: "Faculty", desc: "Our team of educational professionals.", id: "docentes" }
      ],
      col3: {
        tagline: "Institute of Technological Excellence",
        description: "Training technical professionals of excellence in the Peruvian Amazon with national and international recognition.",
        cta: "About Us"
      }
    }
  },
  sh: {
    nav: {
      home: "Jowé",
      careers: "Axontibo",
      admission: "Ikanti 2026",
      about: "Noa",
      news: "Joibo",
      contact: "Wishati",
      institute: "Instituto",
      research: "Investigación",
      library: "Biblioteca",
      transparency: "Transparencia"
    },
    instituteMenu: {
      title: "Non Instituto",
      about: "Noa",
      news: "Joibo",
      contact: "Wishati",
      cta: "Instituto Ointi"
    },
    hero: {
      welcome: "Jakon yatan, non joibo IESTP Suiza",
      subtitle: "Sina axonti jonibo non jomeax axona, Pucallpapish ramonpish jawekeskaribi jakon shinanya winonox.",
      explore: "Ointi Axontibo",
      portalTitle: "Axoni Mené",
      greeting: "¡Hola, IESTP Suiza Axoni!",
      desc: "Raman moa axonti senenti yonka.",
      searchPlaceholder: "Carreras beneti...",
      task1: "Sistemas Axonti",
      task2: "Enfermería Axonti",
      task3: "Agropecuaria Axonti",
      statusProgress: "Axonona",
      stats: {
        students: "Axonibo",
        teachers: "Mestrotibo",
        newStudents: "Jejeibo",
        graduates: "Senebo"
      }
    },
    careers: {
      title: "Non Axontibo",
      subtitle: "Ucayali jemeax jakonbi axonox, tee benti jaweno.",
      categories: {
        all: "Jatibi",
        tech: "Sistemas",
        business: "Gestión",
        field: "Tee"
      },
      duration: "Seneyotibo: 3 Baritia (6 Semestres)",
      employability: "Tee Benti",
      viewCurriculum: "Quirica Ointi",
      items: [
        {
          id: "sys",
          name: "Desarrollo de Sistemas de Información",
          category: "tech",
          desc: "Computadoras quirica axonti, software y apps wishati jomeax teti.",
          employabilityRate: 92
        },
        {
          id: "enfer",
          name: "Enfermería Técnica",
          category: "field",
          desc: "Yoyo iquibo isinbo coinox, jakon shinanmobi joinox.",
          employabilityRate: 88
        },
        {
          id: "meca",
          name: "Mecatrónica Automotriz",
          category: "field",
          desc: "Carrotibo y maquinariatibo reparati y minati jakon axonox.",
          employabilityRate: 85
        },
        {
          id: "agro",
          name: "Producción Agropecuaria",
          category: "field",
          desc: "Wai banati, jawetibo coinox y quena bio-tecnología axeiti.",
          employabilityRate: 80
        },
        {
          id: "forest",
          name: "Manejo Forestal",
          category: "field",
          desc: "Niibo, jiwibo y yoinabo coinox shinan axonti Amazoníapo.",
          employabilityRate: 82
        },
        {
          id: "cont",
          name: "Contabilidad",
          category: "business",
          desc: "Coriqui shinanti y teti empresaquin, quirica jakon wishati.",
          employabilityRate: 85
        },
        {
          id: "admin",
          name: "Administración de Empresas",
          category: "business",
          desc: "Empresatibo organizati, tee bebonox y proyectos shinanti.",
          employabilityRate: 87
        },
        {
          id: "civil",
          name: "Construcción Civil",
          category: "field",
          desc: "Tapiti y caibo wishati, xoboribo tapinox jakonbi.",
          employabilityRate: 90
        },
        {
          id: "elec",
          name: "Electricidad Industrial",
          category: "tech",
          desc: "Corriente y motores instali y repairti industriatibopo.",
          employabilityRate: 86
        },
        {
          id: "tur",
          name: "Administración de Operaciones Turísticas",
          category: "business",
          desc: "Turistabo jonibo joinox y noa jeme oinonox noa joshi noa joni.",
          employabilityRate: 78
        },
        {
          id: "asist",
          name: "Asistencia Administrativa",
          category: "business",
          desc: "Oficinapo tee axonox y jatibi quinonox quiricatibo.",
          employabilityRate: 80
        }
      ]
    },
    faq: {
      title: "Yocati Joinibo",
      subtitle: "Jatibi shinanti mia noa betan axonox.",
      q1: "¿Jawe tee non benti?",
      a1: "Nono axonibo tee bicanai empresatibopo, gobierno betan y teebo, o jashipish quena teebo binox.",
      q2: "¿Jawecopa IESTP Suiza axonti?",
      a2: "Nono axonti coriquipoma (gratis), titulo nacionpish benti, laboratorios jakonbo y teebo bicanox convenio.",
      q3: "¿Jaweax tee axonon prácticas?",
      a3: "Municipalidad, clinicatibopo, construccion e industrias Ucayali jemeax y nacionpo convenienti.",
      q4: "Requisitos para la inscripción al examen de admisión",
      a4: "Quirica secundaria seneti, DNI copia, partida nacimiento original, foto carnet y recibo coriqui pagati."
    },
    news: {
      title: "Noticias y Eventos Institucionales",
      subtitle: "Ramano tee axona noa instituto jomeax ointi.",
      readMore: "Ointi",
      featured: {
        image: "from-indigo-600 via-primary to-secondary",
        title: "IESTP Suiza MINEDUquin licencia 6 baritia benti",
        desc: "MINEDU IESTP Suiza licencia oa, jakon formación, infraestructura moderna y plan estudio Ucayali jemeax tee betan.",
        date: "15 Mayo, 2026",
        category: "institutional"
      },
      categories: [
        { id: 'all', label: 'Jatibi' },
        { id: 'institutional', label: 'Institucional' },
        { id: 'academic', label: 'Académico' },
        { id: 'events', label: 'Eventos' },
        { id: 'achievements', label: 'Logros' },
        { id: 'opportunities', label: 'Oportunidades' },
        { id: 'sports', label: 'Deportes' },
        { id: 'culture', label: 'Cultura' }
      ],
      items: [
        {
          tag: "Institucional",
          categoryId: "institutional",
          image: "from-amber-500 to-orange-600",
          title: "IESTP Suiza Municipalidad Coronel Portillo betan convenio firma",
          desc: "Este convenio non axonibo práctica pre-profesional benti municipalidadpo, formación técnica jakonbi.",
          date: "10 Junio, 2026"
        },
        {
          tag: "Académico",
          categoryId: "academic",
          image: "from-emerald-500 to-teal-600",
          title: "Mestrotibo taller internacional innovación pedagógicapo participa",
          desc: "Non mestrotibo metodología activa enseñanza-aprendizaje capacitación bican Universidad Nacional de Ingeniería jomeax.",
          date: "5 Junio, 2026"
        },
        {
          tag: "Logros",
          categoryId: "achievements",
          image: "from-violet-500 to-purple-600",
          title: "Desarrollo de Sistemas axoni jonibo hackathon regional quinona",
          desc: "'CodeSuiza' equipo cuarto ciclo axoni jonibo primer lugar Ucayali Hackathon 2026po, aplicación móvil residuos sólidos gestión.",
          date: "28 Mayo, 2026"
        },
        {
          tag: "Eventos",
          categoryId: "events",
          image: "from-blue-500 to-cyan-600",
          title: "Feria Tecnológica 2026: Innovación y emprendimiento estudiantil",
          desc: "Feria Tecnológica 2026 jakonbi realiza, axoni jonibo proyectos innovadores robótica, software, enfermería y agropecuaria ointi.",
          date: "20 Mayo, 2026"
        },
        {
          tag: "Oportunidades",
          categoryId: "opportunities",
          image: "from-pink-500 to-rose-600",
          title: "Beca Permanencia 2026: Beneficios nuevos alto rendimiento axoni jonibobo",
          desc: "PRONABEC 50 beca permanencia nueva IESTP Suiza axoni jonibobo asigna, rendimiento académico jakonbi y vulnerabilidad económica.",
          date: "15 Mayo, 2026"
        },
        {
          tag: "Deportes",
          categoryId: "sports",
          image: "from-green-500 to-lime-600",
          title: "IESTP Suiza campeón Juegos Deportivos Inter-Tecnológicos Ucayali 2026",
          desc: "Non delegación deportiva primer lugar fútbol, básquet varones y atletismo quinona, excelencia deportepo jakonbi.",
          date: "10 Mayo, 2026"
        },
        {
          tag: "Cultura",
          categoryId: "culture",
          image: "from-red-500 to-rose-600",
          title: "Festival Canción Shipiba: Estudiantes Ucayali riqueza cultural celebra",
          desc: "Carreras diferentespo axoni jonibo Festival Canción Shipibapo participa, lengua y música tradicional shipiba rescate.",
          date: "5 Mayo, 2026"
        },
        {
          tag: "Académico",
          categoryId: "academic",
          image: "from-sky-500 to-indigo-600",
          title: "Laboratorio simulación clínica nuevo Enfermería Técnica",
          desc: "IESTP Suiza laboratorio simulación clínica moderno inaugura, maniquíes última generación, Enfermería Técnica axoni jonibo práctica jakonbi.",
          date: "28 Abril, 2026"
        },
        {
          tag: "Revista RELITES",
          categoryId: "academic",
          image: "from-teal-500 to-emerald-600",
          title: "Revista Latinoamericana de Innovación Tecnológica (RELITES) - Vol. 1 2026",
          desc: "Mestrotibo y axoni jonibo Suiza jomeax investigación artificial y agropecuaria quinona.",
          date: "Mayo 2026"
        }
      ],
      events: {
        title: "Eventos y Actividades",
        subtitle: "Ferias, conferencias, talleres y actividades formación profesional jakonbi.",
        items: [
          {
            image: "from-blue-500 to-cyan-600",
            title: "Feria Tecnológica Suiza 2026",
            date: "20 Mayo, 2026",
            location: "Auditorio Institucional",
            desc: "Proyectos innovadores carreras jatibipo ointi, empresas invitadas y charlas tecnología."
          },
          {
            image: "from-purple-500 to-violet-600",
            title: "I Congreso Investigación e Innovación Tecnológica",
            date: "15-17 Julio, 2026",
            location: "Centro Convenciones Ucayali",
            desc: "Congreso ponentes nacionales e internacionales inteligencia artificial, salud y desarrollo sostenible."
          },
          {
            image: "from-emerald-500 to-green-600",
            title: "Taller Emprendimiento e Innovación",
            date: "10 Junio, 2026",
            location: "Laboratorio Innovación - IESTP Suiza",
            desc: "Taller práctico design thinking y modelo negocio creación emprendedores axoni jonibobo."
          },
          {
            image: "from-orange-500 to-red-600",
            title: "Campeonato Deportivo Inter-Carreras",
            date: "Junio mes jatibi",
            location: "Losas Deportivas IESTP Suiza",
            desc: "Competencia deportiva anual carreras diferentes fútbol, vóley, básquet y atletismo."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Festival Cultural Amazonía",
            date: "24 Junio, 2026",
            location: "Plaza Principal Pucallpa",
            desc: "Festival comunidad abierta danzas típicas, gastronomía, artesanía shipiba y música en vivo."
          },
          {
            image: "from-cyan-500 to-blue-600",
            title: "Charla: Beca internacional oportunidades",
            date: "8 Julio, 2026",
            location: "Sala Conferencias - IESTP Suiza",
            desc: "Charla informativa becas PRONABEC, organismos internacionales y universidades extranjeras."
          }
        ]
      },
      achievements: {
        title: "Logros y Reconocimientos",
        subtitle: "Noa comunidad éxitos celebra, orgullo institucional.",
        items: [
          {
            image: "from-amber-500 to-yellow-600",
            title: "Enfermería Técnica axoni concurso nacional primeros auxilios primer lugar",
            desc: "María Torres, VI ciclo axoni, Ucayali representa y medalla oro Concurso Nacional Habilidades Enfermería MINEDUquin.",
            badge: "Medalla Oro"
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Mestro investigador artículo revista científica indexada publica",
            desc: "Mg. Carlos Rivas, Desarrollo Sistemas mestro, 'Machine Learning cosecha predicción Amazonía' investigación Scopus revista publica.",
            badge: "Scopus Publicación"
          },
          {
            image: "from-blue-500 to-indigo-600",
            title: "Proyecto agropecuario sostenible concurso nacional innovación quina",
            desc: "'BioAbono Suiza' proyecto Producción Agropecuaria axoni jonibo primer lugar Concurso Nacional Innovación Tecnológica Agraria 2026.",
            badge: "Premio Nacional"
          },
          {
            image: "from-emerald-500 to-teal-600",
            title: "IESTP Suiza licencia 'A' categoría MINEDUquin reconocida",
            desc: "MINEDU 'A' categoría IESTP Suiza oa, empleabilidad, investigación y gestión académica indicadores quin jakonbi.",
            badge: "Categoría A - MINEDU"
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Mecatrónica Automotriz axoni jonibo competencia internacional clasifica",
            desc: "'Mecatrónicos Suiza' equipo final Concurso Internacional Robótica Educativa Bogotá clasifica, Perú representa.",
            badge: "Clasificación Internacional"
          },
          {
            image: "from-orange-500 to-amber-600",
            title: "Trayectoria institucional reconocimiento - 49 baritia profesional formando",
            desc: "Gobierno Regional Ucayali IESTP Suiza reconocimiento público oa 49 baritia formación técnica profesional Ucayali jemeax.",
            badge: "Reconocimiento Regional"
          }
        ]
      },
      opportunities: {
        title: "Oportunidades Estudiantesbo",
        subtitle: "Becas, convocatorias, prácticas y certificaciones carrera profesional jakonbi.",
        items: [
          {
            image: "from-blue-500 to-cyan-600",
            title: "Beca Permanencia - PRONABEC 2026",
            deadline: "30 Julio, 2026",
            desc: "Estudios, alimentación y materiales cobertura, alto rendimiento axoni jonibo recursos económicos limitados."
          },
          {
            image: "from-emerald-500 to-teal-600",
            title: "Prácticas Pre-Profesionales - Municipalidad Coronel Portillo",
            deadline: "15 Julio, 2026",
            desc: "10 vacantes Administración, Contabilidad y Desarrollo Sistemas axoni jonibobo práctica administrativa y sistemas."
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Curso Gratuito: Inglés Técnico Profesionalesbo",
            deadline: "20 Julio, 2026",
            desc: "120 horas curso intensivo gratuito IESTP Suiza axoni jonibobo. Certificación internacional incluida."
          },
          {
            image: "from-orange-500 to-red-600",
            title: "Convocatoria: Auxiliar Laboratorio - IESTP Suiza",
            deadline: "25 Julio, 2026",
            desc: "2 plazas últimos ciclos axoni jonibobo laboratorio cómputo, enfermería y mecatrónica gestión."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Certificación gratuita: Microsoft Office Specialist",
            deadline: "10 Agosto, 2026",
            desc: "Certificación oficial MOS Word, Excel y PowerPoint gratuita axoni jonibobo. Vacantes limitadas."
          },
          {
            image: "from-indigo-500 to-blue-600",
            title: "Oferta Laboral: Técnico Enfermería - Hospital Regional",
            deadline: "5 Julio, 2026",
            desc: "Hospital Regional Pucallpa 5 técnico enfermería nuevo servicio emergencias. IESTP Suiza egresadobo exclusivo."
          }
        ]
      },
      upcoming: {
        title: "Próximos Eventos",
        subtitle: "Noa comunidad actividades importantes raman ointi.",
        items: [
          { date: "15", month: "Jun", name: "Feria Tecnológica Suiza 2026", time: "9:00 am - 5:00 pm", location: "Auditorio Principal" },
          { date: "24", month: "Jun", name: "Festival Cultural Amazonía", time: "10:00 am - 8:00 pm", location: "Plaza Armas" },
          { date: "08", month: "Jul", name: "Becas Internacionales Charla", time: "3:00 pm - 5:00 pm", location: "Sala Conferencias" },
          { date: "15", month: "Jul", name: "I Congreso Investigación", time: "8:00 am - 6:00 pm", location: "Centro Convenciones" },
          { date: "20", month: "Jul", name: "Taller Emprendimiento", time: "2:00 pm - 6:00 pm", location: "Lab. Innovación" },
          { date: "28", month: "Jul", name: "Fiestas Patrias Ceremonia", time: "9:00 am - 12:00 pm", location: "Patio Institucional" }
        ]
      },
      gallery: {
        title: "Galería Multimedia",
        subtitle: "Momentos vida institucional, académica y cultural IESTP Suiza jomeax.",
        items: [
          { type: "photo", thumb: "from-blue-500 to-cyan-600", title: "Laboratorio simulación clínica inauguración", desc: "Laboratorio moderno Enfermería Técnica equipado" },
          { type: "photo", thumb: "from-emerald-500 to-teal-600", title: "Feria Tecnológica 2026", desc: "Axoni jonibo proyectos innovadores ointi" },
          { type: "photo", thumb: "from-amber-500 to-orange-600", title: "Licenciamiento institucional ceremonia", desc: "MINEDU calidad educativa reconocimiento" },
          { type: "photo", thumb: "from-violet-500 to-purple-600", title: "Hackathon Ucayali 2026", desc: "CodeSuiza equipo primer lugar" },
          { type: "photo", thumb: "from-pink-500 to-rose-600", title: "Festival Cultural Shipibo", desc: "Axoni jonibo Ucayali riqueza cultural celebra" },
          { type: "photo", thumb: "from-sky-500 to-indigo-600", title: "Taller robótica educativa", desc: "Mecatrónica axoni jonibo competencia internacional" },
          { type: "photo", thumb: "from-green-500 to-lime-600", title: "Juegos Deportivos Inter-Tecnológicos", desc: "Delegación campeona 2026" },
          { type: "photo", thumb: "from-red-500 to-rose-600", title: "Visita guiada postulantesbo", desc: "Futuros axoni jonibo noa instalaciones ointi" },
          { type: "video", thumb: "from-gray-700 to-gray-900", title: "Video Institucional IESTP Suiza 2026", desc: "Noa oferta educativa y valores institucionales ointi" }
        ]
      },
      successStories: {
        title: "Axoni jonibo profesional exitosobo",
        subtitle: "Egresadobo raman tee bican IESTP Suiza formación gracias.",
        items: [
          {
            image: "from-violet-500 to-purple-600",
            name: "María López",
            career: "Desarrollo Sistemas Información",
            company: "TechSolutions Perú",
            story: "Primer ciclopo IESTP Suiza non sueños cumplir jakon herramientas oa. Raman equipo desarrollo lidera, país tecnología empresa importante."
          },
          {
            image: "from-emerald-500 to-teal-600",
            name: "José Pérez",
            career: "Enfermería Técnica",
            company: "Hospital Regional Pucallpa",
            story: "Formación práctica y mestro apoyo jakonbi. Raman emergencias área, región hospital más importante, vida salvati cada día."
          },
          {
            image: "from-amber-500 to-orange-600",
            name: "Ana Torres",
            career: "Administración Empresas",
            company: "Grupo AgroExport Ucayali",
            story: "Instituto herramientas emprendimiento oa. Raman gerente operaciones, empresa productos amazónicos tres continentes exporta."
          },
          {
            image: "from-sky-500 to-indigo-600",
            name: "Carlos Mendoza",
            career: "Mecatrónica Automotriz",
            company: "Toyota del Perú",
            story: "Talleres modernos y formación especializada mundo laboral desafíos prepara. Raman técnico especialista concesionaria oficial."
          }
        ]
      },
      popular: {
        title: "Lo Más Popular Esta Semana",
        items: [
          {
            type: "news",
            image: "from-indigo-500 to-blue-600",
            title: "IESTP Suiza licencia 6 baritia benti",
            tag: "Institucional",
            views: 2847
          },
          {
            type: "achievement",
            image: "from-violet-500 to-purple-600",
            title: "Axoni jonibo hackathon regional quina",
            tag: "Logros",
            views: 2156
          },
          {
            type: "event",
            image: "from-blue-500 to-cyan-600",
            title: "Feria Tecnológica 2026",
            tag: "Eventos",
            views: 1892
          },
          {
            type: "opportunity",
            image: "from-pink-500 to-rose-600",
            title: "Beca Permanencia 2026",
            tag: "Oportunidades",
            views: 1543
          },
          {
            type: "news",
            image: "from-green-500 to-lime-600",
            title: "IESTP Suiza Juegos Deportivos campeón",
            tag: "Deportes",
            views: 1278
          }
        ]
      },
      experiences: {
        title: "Experiencias Institucionales",
        subtitle: "Momentos noa comunidad educativa vida marca.",
        items: [
          {
            image: "from-amber-500 to-yellow-600",
            title: "Graduación Ceremonia 2026",
            date: "Diciembre 2026",
            type: "graduacion",
            desc: "Ceremonia graduación más emotiva. 300+ axoni jonibo título profesional técnico bican, orgullo y esperanza lleno.",
            stats: [
              { value: "300+", label: "Graduados" },
              { value: "11", label: "Carreras" },
              { value: "49", label: "Baritia historia" }
            ],
            gallery: [
              { thumb: "from-amber-400 to-yellow-500", title: "Birretes imposición" },
              { thumb: "from-orange-400 to-red-500", title: "Diplomas entrega" },
              { thumb: "from-gold-400 to-amber-500", title: "Foto promocional" }
            ],
            testimonial: "IESTP Suiza título benti non vida logro más importante. Institución non profesional y persona formar."
          },
          {
            image: "from-violet-500 to-purple-600",
            title: "Innovación Concurso 2026",
            date: "Noviembre 2026",
            type: "concurso",
            desc: "Carreras jatibipo axoni jonibo proyectos innovadores Ucayali región problemas reales soluciona.",
            stats: [
              { value: "40", label: "Proyectos" },
              { value: "200", label: "Axonibo" },
              { value: "15", label: "Mestrotibo" }
            ],
            gallery: [
              { thumb: "from-violet-400 to-purple-500", title: "Proyectos presentación" },
              { thumb: "from-indigo-400 to-blue-500", title: "Jurado evaluación" },
              { thumb: "from-fuchsia-400 to-pink-500", title: "Equipos ganadores" }
            ],
            testimonial: "Non bioabono proyecto primer lugar quina. Jakonbi noa trabajo agricultura local impacto real."
          },
          {
            image: "from-blue-500 to-cyan-600",
            title: "Semana Institucional Suiza",
            date: "Julio 2026",
            type: "semana",
            desc: "Semana actividades académicas, culturales, deportivas y recreativas pertenencia institucional fortalece.",
            stats: [
              { value: "7", label: "Baritia actividades" },
              { value: "50+", label: "Actividades realizadas" },
              { value: "1000+", label: "Participantes" }
            ],
            gallery: [
              { thumb: "from-blue-400 to-cyan-500", title: "Actividades deportivas" },
              { thumb: "from-emerald-400 to-teal-500", title: "Talleres culturales" },
              { thumb: "from-sky-400 to-indigo-500", title: "Talento noche" }
            ],
            testimonial: "Semana Institucional noa gran familia jomeax senti. Energía y compañerismo contagioso."
          },
          {
            image: "from-green-500 to-lime-600",
            title: "Campeonato Deportivo Anual",
            date: "Junio 2026",
            type: "deportes",
            desc: "Deporte integración y desarrollo personal herramienta. Non axoni jonibo talento y espíritu competitivo demuestra.",
            stats: [
              { value: "500+", label: "Deportistas" },
              { value: "4", label: "Disciplinas" },
              { value: "11", label: "Carreras participantes" }
            ],
            gallery: [
              { thumb: "from-green-400 to-lime-500", title: "Fútbol final" },
              { thumb: "from-emerald-400 to-green-500", title: "Atletismo competencia" },
              { thumb: "from-teal-400 to-cyan-500", title: "Premiación" }
            ],
            testimonial: "Deporte disciplina y trabajo en equipo enseñan. Canchapoy aula y jakonbi valores aplica."
          },
          {
            image: "from-pink-500 to-rose-600",
            title: "Festival Cultural Shipibo",
            date: "Agosto 2026",
            type: "cultura",
            desc: "Riqueza cultural shipiba danzas, música, artesanía y gastronomía Amazonía celebración.",
            stats: [
              { value: "2000+", label: "Asistentes" },
              { value: "30", label: "Artesanos" },
              { value: "15", label: "Agrupaciones culturales" }
            ],
            gallery: [
              { thumb: "from-pink-400 to-rose-500", title: "Danzas típicas" },
              { thumb: "from-red-400 to-orange-500", title: "Artesanía shipiba" },
              { thumb: "from-purple-400 to-violet-500", title: "Música tradicional" }
            ],
            testimonial: "Cultura shipiba preservar fundamental. Festival noa tradiciones nuevas generaciones compartir."
          }
        ]
      }
    },
    aboutMenu: {
      col1: [
        { title: "Joi Jato", desc: "Noa instituto jomeax ointi.", id: "presentacion" },
        { title: "Director Joibo", desc: "Non director yoyoiti.", id: "director" },
        { title: "Ointi y Joime", desc: "Non jakon shinanbo ointi.", id: "vision-mision" },
        { title: "Instituto Bena", desc: "Noa instituto seneyotibo ointi.", id: "historia" }
      ],
      col2: [
        { title: "Axon Joi Jato", desc: "Axon jomeax tee ointi.", id: "gestion-academica" },
        { title: "Administrativo Joi Jato", desc: "Tee jomeax ointi.", id: "gestion-administrativa" },
        { title: "Tee Jato Ointi", desc: "Noa tee jato jomeax ointi.", id: "organigrama" },
        { title: "Mestrotibo", desc: "Non jakon mestrotibo.", id: "docentes" }
      ],
      col3: {
        tagline: "Instituto de Excelencia Tecnológica",
        description: "Formando profesionales técnicos de excelencia en la Amazonía peruana con reconocimiento nacional e internacional.",
        cta: "Noa Ointi"
      }
    },
    contact: {
      hero: {
        title: "Noa joshin betan yoyoiti",
        subtitle: "Axoni jonibo, jeneibo y jatibi jonibo noa betan yoyoiti. Noa joshin betan yoyoiti mia yocati joibo ointi.",
        cta: "Noa wishahué raman"
      },
      info: {
        title: "Wishati Joi Jato",
        phone: { label: "Teléfono", value: "061-280665" },
        email: { label: "Correo Electrónico", value: "suiza@iestpsuiza.edu.pe" },
        hours: { label: "Atencion Tiempo", value: "Lunes a Viernes — 8:00 am a 5:00 pm" },
        address: { label: "Jeme", value: "Carretera Federico Basadre Km 5.700, Pucallpa — Ucayali" }
      },
      location: {
        title: "¿Jaweax noa jeme ointi?",
        address: "Carretera Federico Basadre Km 5.700, Pucallpa, Ucayali, Perú",
        references: "Hospital Regional de Pucallpa jemaxon, centro ciudad 10 minuto.",
        openInMaps: "Google Maps poi ointi",
        getDirections: "Jeme ointi",
        distanceLabel: "Mia jemeax noa jeme betan",
        walking: "Noni",
        driving: "Carroquin",
        transit: "Busquin",
        locationDenied: "Ubicación permitioma. Ubicación activa ointi distancias oinon.",
        locationError: "Mia jeme oinoma. Atia jewe.",
        detectLocation: "Non jeme ointi",
        calculating: "Distancia contati..."
      },
      form: {
        title: "Noa joi wishati",
        subtitle: "Mia joi noa wisha, non yoyoiti raman.",
        nameLabel: "Jane y Janea",
        emailLabel: "Correo Electrónico",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Ej: Admission joibo",
        messageLabel: "Joibo",
        sendButton: "WISHATI",
        success: "¡Irake! Moa joi wishana. Non yoyoiti ramano.",
        placeholderName: "Ej: Juan Pérez",
        placeholderEmail: "Ej: juan@example.com",
        placeholderMsg: "Nono wishahué..."
      },
      faq: {
        title: "Yocati Joinibo",
        subtitle: "Raman ointi yocatibo.",
        items: [
          { q: "¿Jaweax IESTP Suiza postulati?", a: "Admisión proceso dos veces baritia. Noa sede principalpo inscríbete DNI quirica secundaria seneti betan, o virtual plataformapo fechas establecidas." },
          { q: "¿Jawe axontibo non bican?", a: "Non 11 programa licenciado bican: Desarrollo de Sistemas, Enfermería Técnica, Mecatrónica Automotriz, Producción Agropecuaria, Manejo Forestal, Contabilidad, Administración de Empresas, Construcción Civil, Electricidad Industrial, Turismo y Asistencia Administrativa." },
          { q: "¿Jawe requisitos admisión?", a: "Certificado secundaria completo, DNI copia, partida nacimiento original, foto carnet fondo blanco y recibo pago inscripción." },
          { q: "¿Jaweax noa jeme?", a: "Carretera Federico Basadre Km 5.700, Pucallpa, Ucayali, Hospital Regional de Pucallpa jemaxon." },
          { q: "¿Jawe tiempo atencion?", a: "Lunes a viernes 8:00 am a 5:00 pm noa sede principalpo." }
        ]
      },
      social: {
        title: "Noa betan joinox redespo",
        subtitle: "Noa actividad y novedades ointi.",
        facebook: "Facebook",
        instagram: "Instagram",
        youtube: "YouTube",
        tiktok: "TikTok"
      },
      whatsapp: {
        title: "WhatsApp Institucional",
        subtitle: "Raman yoyoiti noa betan.",
        message: "¡Hola! Quiero información sobre el IESTP Suiza",
        cta: "Asesor betan yoyoiti",
        available: "Atencion tiempo: Lun - Vie 8:00 am - 5:00 pm"
      },
      whyChooseUs: {
        title: "¿Jawecopa IESTP Suiza axonti?",
        subtitle: "Noa betan axonox jakon shinanbo.",
        items: [
          { title: "Jakon Axon Joi", desc: "Programas licenciados MINEDUquin, jakon plan estudio y práctica." },
          { title: "Jakon Mestrotibo", desc: "Mestrotibo jakon experiencia profesional, mia axonox joshin." },
          { title: "Convenio Instituciones", desc: "Empresas betan convenio práctica pre-profesional." },
          { title: "Tee Benti", desc: "Egresadobo alta empleabilidad, mercado laboralquin jakon formación." },
          { title: "Infraestructura Moderna", desc: "Laboratorio equipado, taller especializado, jakon ambiente aprendizaje." },
          { title: "Reconocimiento Nacional", desc: "Institución licenciada, calidad educativa reconocida." }
        ]
      },
      stats: {
        title: "IESTP Suiza númerosquin",
        students: "Axonibo",
        graduates: "Senebo",
        years: "Baritia Experiencia",
        programs: "Carreras",
        agreements: "Convenios"
      },
      testimonials: {
        title: "Non axonibo yoyoiti",
        subtitle: "Experiencias que inspiran a futuros profesionales.",
        items: [
          { name: "María López", career: "Desarrollo de Sistemas", text: "Gracias al IESTP Suiza pude desarrollar habilidades técnicas que me permitieron acceder a mejores oportunidades laborales en el sector tecnológico." },
          { name: "José Pérez", career: "Enfermería Técnica", text: "La formación práctica y el apoyo de los docentes fueron clave para mi desarrollo profesional." },
          { name: "Ana Torres", career: "Administración de Empresas", text: "El instituto me brindó las herramientas necesarias para emprender mi propio negocio." },
          { name: "Carlos Mendoza", career: "Mecatrónica Automotriz", text: "Los talleres modernos me prepararon para los desafíos del mundo laboral." }
        ]
      },
      visit: {
        title: "¿Mia noa jeme ointi?",
        subtitle: "Visita guiada agenda, IESTP Suiza jakon ointi.",
        cta: "Visita agenda",
        modalTitle: "Visita solicitar",
        nameLabel: "Jane Completo",
        phoneLabel: "Teléfono",
        emailLabel: "Correo Electrónico",
        dateLabel: "Visita Fecha",
        sendButton: "Solicitud enviar",
        success: "¡Solicitud enviada! Non yoyoiti visita confirmar.",
        close: "Cerrar"
      },
      whatsappHighlight: {
        title: "¿Admisión o carreras dudas bican?",
        subtitle: "Non atencion equipo mia yocati resolver listo.",
        cta: "Asesor betan yoyoiti"
      }
    }
  }
};
