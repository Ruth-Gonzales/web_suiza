const fs = require('fs');
const path = 'src/translations.js';
let content = fs.readFileSync(path, 'utf8');

const newContent = `
    transparencyContent: {
      documentos: {
        description: "Documentos de Gestión Institucional aprobados que rigen el funcionamiento del IESTP Suiza, garantizando la calidad y transparencia educativa de acuerdo a la Ley N° 30512.",
        type: "document",
        items: [
          { title: "Reglamento Institucional (RI)", date: "Actualizado: 2024", size: "2.4 MB" },
          { title: "Proyecto Educativo Institucional (PEI)", date: "Actualizado: 2023-2027", size: "3.1 MB" },
          { title: "Plan Anual de Trabajo (PAT)", date: "Año 2024", size: "1.2 MB" },
          { title: "Manual de Perfil de Puestos (MPP)", date: "Actualizado: 2024", size: "1.8 MB" },
          { title: "Plan de Estudios (Todos los programas)", date: "Aprobado", size: "4.5 MB" }
        ]
      },
      convenios: {
        description: "Convenios institucionales vigentes con entidades públicas y privadas para fortalecer la formación académica, prácticas preprofesionales y empleabilidad de nuestros estudiantes.",
        type: "document",
        items: [
          { title: "Convenios Sector Salud (MINSA, EsSalud)", date: "Vigente hasta 2026", size: "1.5 MB" },
          { title: "Convenios Sector Productivo y Tecnológico", date: "Vigente hasta 2025", size: "2.1 MB" },
          { title: "Convenios con Gobiernos Locales y Regionales", date: "Vigente hasta 2027", size: "1.1 MB" }
        ]
      },
      convocatorias: {
        description: "Accede a las convocatorias públicas vigentes para selección de personal docente y administrativo del IESTP Suiza.",
        type: "document",
        items: [
          { title: "Convocatoria Docente 2024-II", date: "Estado: Cerrado", size: "500 KB" },
          { title: "Concurso Público de Méritos Administrativos", date: "Estado: Cerrado", size: "450 KB" }
        ]
      },
      calendario: {
        description: "Cronograma de actividades académicas, procesos de matrícula, evaluación y fechas cívicas para el presente año lectivo.",
        type: "document",
        items: [
          { title: "Calendario Académico 2024", date: "Resolución Directoral N° 045-2024", size: "800 KB" }
        ]
      },
      estadisticas: {
        description: "Reportes estadísticos sobre matrícula, egresados, retención estudiantil y empleabilidad.",
        type: "document",
        items: [
          { title: "Boletín Estadístico 2023", date: "Publicado: Enero 2024", size: "1.4 MB" },
          { title: "Reporte de Empleabilidad por Programa", date: "Publicado: Marzo 2024", size: "1.2 MB" }
        ]
      },
      inversiones: {
        description: "Información transparente sobre los proyectos de inversión, infraestructura y donaciones recibidas por la institución.",
        type: "document",
        items: [
          { title: "Reporte Anual de Ejecución Presupuestal 2023", date: "Publicado: Febrero 2024", size: "2.5 MB" }
        ]
      }
    },
    proceduresContent: {
      trabajos: {
        description: "Repositorio y formatos requeridos para la presentación de los Trabajos de Aplicación Profesional (Proyectos Productivos / Empresariales).",
        type: "document",
        items: [
          { title: "Guía para Elaboración de Proyectos Productivos", date: "Actualizado: 2024", size: "1.5 MB" },
          { title: "Formatos de Presentación (Anexos)", date: "Word / DOCX", size: "500 KB" },
          { title: "Reglamento de Titulación", date: "Resolución Institucional", size: "1.2 MB" }
        ]
      },
      contactanos: {
        description: "Comunícate con nuestras diferentes áreas administrativas y académicas.",
        type: "link",
        items: [
          { title: "Mesa de Partes Virtual", date: "Atención 24/7", size: "Enlace externo" },
          { title: "Directorio Telefónico Institucional", date: "Lunes a Viernes 8am - 5pm", size: "PDF - 300 KB" }
        ],
        content: "<p><strong>Trámites Presenciales:</strong> Puede acercarse a la oficina de Secretaría General de lunes a viernes en horario de oficina.</p>"
      },
      titulacion: {
        description: "Requisitos y pasos para el proceso de Titulación Profesional Técnica.",
        type: "document",
        items: [
          { title: "Requisitos para Grado de Bachiller Técnico", date: "Normativa actual", size: "600 KB" },
          { title: "Requisitos para Título Profesional Técnico", date: "Normativa actual", size: "650 KB" },
          { title: "Formatos FUT y Constancias", date: "Descargable", size: "400 KB" }
        ]
      }
    },
    servicesContent: {
      campus: {
        description: "Accede al Campus Virtual institucional, donde encontrarás aulas virtuales, material educativo y evaluaciones en línea (Moodle/Google Classroom).",
        type: "link",
        items: [
          { title: "Ingresar al Campus Virtual (Q10)", date: "Plataforma Educativa", size: "Enlace Web" },
          { title: "Manual de Estudiante - Campus Virtual", date: "Guía PDF", size: "1.2 MB" }
        ]
      },
      sga: {
        description: "El Sistema de Gestión Académica permite a los estudiantes consultar sus notas, historial académico y realizar matrículas en línea.",
        type: "link",
        items: [
          { title: "Acceso al SGA (Intranet Estudiantil)", date: "Portal de notas", size: "Enlace Web" },
          { title: "Módulo Docente", date: "Ingreso de calificaciones", size: "Enlace Web" }
        ]
      },
      bolsa: {
        description: "Nuestra Bolsa Laboral conecta a los estudiantes y egresados del IESTP Suiza con las principales empresas e instituciones de la región Ucayali.",
        type: "link",
        items: [
          { title: "Portal de Empleo IESTP Suiza", date: "Ofertas Laborales", size: "Enlace Web" },
          { title: "Formato de Hoja de Vida Institucional", date: "Plantilla", size: "DOCX - 250 KB" }
        ]
      },
      idiomas: {
        description: "El Centro de Idiomas del IESTP Suiza ofrece cursos de inglés y portugués, con certificación oficial exigida para la titulación.",
        type: "link",
        items: [
          { title: "Inscripciones Centro de Idiomas", date: "Proceso 2024", size: "Enlace Web" },
          { title: "Reglamento del Centro de Idiomas", date: "Documento", size: "800 KB" }
        ]
      },
      biblioteca: {
        description: "Acceso a nuestro catálogo bibliográfico virtual, revistas científicas y convenios con bibliotecas digitales nacionales e internacionales.",
        type: "link",
        items: [
          { title: "Catálogo de Biblioteca Virtual", date: "Sistema de Búsqueda", size: "Enlace Web" },
          { title: "Repositorio Institucional (Tesis y Proyectos)", date: "DSpace", size: "Enlace Web" }
        ]
      },
      publicaciones: {
        description: "Revistas académicas, boletines informativos y producciones científicas elaboradas por nuestros docentes y estudiantes.",
        type: "document",
        items: [
          { title: "Revista de Investigación Tecnológica Vol. 1", date: "Diciembre 2023", size: "5.2 MB" },
          { title: "Boletín Informativo 'Orgullo Suiza'", date: "Edición Mensual", size: "2.1 MB" }
        ]
      },
      enlaces: {
        description: "Accesos directos a portales gubernamentales y entidades aliadas relevantes para la comunidad educativa.",
        type: "link",
        items: [
          { title: "Portal del Ministerio de Educación (MINEDU)", date: "Gobierno del Perú", size: "Enlace externo" },
          { title: "Superintendencia Nacional de Educación Superior Universitaria (SUNEDU)", date: "Registro de Grados", size: "Enlace externo" },
          { title: "Gobierno Regional de Ucayali", date: "Institucional", size: "Enlace externo" }
        ]
      },
      bd: {
        description: "Bases de datos especializadas y software licenciado disponible para los laboratorios y programas académicos de la institución.",
        type: "link",
        items: [
          { title: "Acceso a Microsoft Azure Dev Tools for Teaching", date: "Programa Tecnologías de la Información", size: "Enlace Web" },
          { title: "Base de Datos EBSCO Host", date: "Convenio MINEDU", size: "Enlace Web" }
        ]
      }
    },`;

// Find the servicesMenu array and append the new content right after it
const servicesMenuMatch = content.indexOf('servicesMenu: [');
if (servicesMenuMatch !== -1) {
  const closeBracket = content.indexOf(']', servicesMenuMatch);
  if (closeBracket !== -1) {
    const splitPoint = content.indexOf(',', closeBracket) + 1;
    const firstPart = content.substring(0, splitPoint);
    const secondPart = content.substring(splitPoint);
    const finalContent = firstPart + newContent + secondPart;
    fs.writeFileSync(path, finalContent, 'utf8');
    console.log('Successfully injected content definitions.');
  } else {
    console.log('Failed to find closing bracket of servicesMenu');
  }
} else {
  console.log('Failed to find servicesMenu in translations.js');
}
