const fs = require('fs');

let content = fs.readFileSync('src/translations.js', 'utf-8');

// Update nav
content = content.replace(
  /nav:\s*\{[\s\S]*?\},/,
  `nav: {
      home: "Inicio",
      careers: "Programas de Estudio",
      admission: "Admisión y Matrícula",
      about: "Nosotros",
      transparency: "Transparencia",
      procedures: "Trámites",
      services: "Servicios"
    },`
);

// We need to add transparency, procedures, and services to translations.js
const additionalMenus = `
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
`;

content = content.replace(/aboutMenu:\s*\{/, additionalMenus + '\n    aboutMenu: {');

// The items array under careers needs to be the 11 ones.
// I will just replace the items: [ ... ] until } of careers with a new string.
const newCareersItems = `items: [
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
      ]`;

content = content.replace(/items:\s*\[[\s\S]*?\]\s*\}\s*,\s*faq:/, newCareersItems + '\n    },\n    faq:');

fs.writeFileSync('src/translations.js', content, 'utf-8');
console.log("Translations updated!");
