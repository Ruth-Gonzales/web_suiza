import knowledgeBase from '../data/knowledgeBase';

export const buildGreeting = () => knowledgeBase.institution.fullName;

export const buildCareersResponse = () => {
  const tech = knowledgeBase.careers.filter(c => c.category === 'Tecnología');
  const health = knowledgeBase.careers.filter(c => c.category === 'Salud');
  const management = knowledgeBase.careers.filter(c => c.category === 'Gestión');
  const engineering = knowledgeBase.careers.filter(c => c.category === 'Ingeniería');

  let text = `🎓 **${knowledgeBase.careers.length} Carreras Profesionales**\n\n`;
  text += `Duración: **3 años (6 semestres)**\n\n`;

  if (tech.length) {
    text += `💻 **Tecnología**\n`;
    tech.forEach(c => { text += `• ${c.name} — ${c.employability}% empleabilidad\n`; });
    text += '\n';
  }
  if (health.length) {
    text += `🏥 **Salud**\n`;
    health.forEach(c => { text += `• ${c.name} — ${c.employability}% empleabilidad\n`; });
    text += '\n';
  }
  if (management.length) {
    text += `💼 **Gestión y Servicios**\n`;
    management.forEach(c => { text += `• ${c.name} — ${c.employability}% empleabilidad\n`; });
    text += '\n';
  }
  if (engineering.length) {
    text += `🚜 **Ingeniería y Campo**\n`;
    engineering.forEach(c => { text += `• ${c.name} — ${c.employability}% empleabilidad\n`; });
  }

  return { text };
};

export const buildAdmissionResponse = () => {
  let text = `📝 **Admisión ${knowledgeBase.admission.year}**\n\n`;
  text += `📅 **Cronograma:**\n`;
  text += `• Inscripciones: ${knowledgeBase.admission.inscriptionPeriod}\n`;
  text += `• Simulacro: ${knowledgeBase.admission.simulacrumDate}\n`;
  text += `• Examen: ${knowledgeBase.admission.examDate}\n`;
  text += `• Resultados: ${knowledgeBase.admission.resultsDate}\n`;
  text += `• Inicio clases: ${knowledgeBase.admission.classesStart}\n\n`;
  text += `💵 **Costos:**\n`;
  knowledgeBase.admission.costs.forEach(c => {
    text += `• ${c.concept}: **${c.amount}**\n`;
  });
  return { text };
};

export const buildCostsResponse = () => {
  let text = `💰 **Costos de Admisión ${knowledgeBase.admission.year}**\n\n`;
  knowledgeBase.admission.costs.forEach(c => {
    text += `• ${c.concept}: **${c.amount}**\n`;
  });
  text += `\n💳 Los pagos se realizan en **Tesorería del campus**.\n\n`;
  if (knowledgeBase.admission.isFree) {
    text += `✨ **${knowledgeBase.admission.freeDescription}**`;
  }
  return { text };
};

export const buildRequirementsResponse = () => {
  let text = `📋 **Requisitos de Postulación ${knowledgeBase.admission.year}**\n\n`;
  text += `Documentos necesarios:\n\n`;
  knowledgeBase.admission.requirements.forEach((req, i) => {
    text += `${i + 1}. ${req}\n`;
  });
  return { text };
};

export const buildFreeResponse = () => {
  let text = `✨ **Educación 100% Gratuita**\n\n`;
  text += `Al ser un **instituto público licenciado por MINEDU**:\n\n`;
  text += `✅ **Sin mensualidades**\n`;
  text += `✅ **Sin pensiones**\n`;
  text += `✅ Solo derecho de admisión y matrícula básica\n`;
  text += `✅ Título oficial a **nombre de la Nación**\n\n`;
  text += `💵 **Inversión única:**\n`;
  knowledgeBase.admission.costs.forEach(c => {
    text += `• ${c.concept}: **${c.amount}**\n`;
  });
  return { text };
};

export const buildLocationResponse = () => {
  let text = `📍 **Ubicación**\n\n`;
  text += `${knowledgeBase.institution.location}\n\n`;
  text += `⏰ **Horario de atención:** ${knowledgeBase.institution.schedule}\n\n`;
  text += `📞 **Teléfono:** ${knowledgeBase.institution.phone}\n`;
  text += `✉️ **Email:** ${knowledgeBase.institution.email}`;
  return { text };
};

export const buildContactResponse = () => {
  let text = `📞 **Contacto IESTP Suiza**\n\n`;
  text += `📍 **Dirección:** ${knowledgeBase.institution.location}\n`;
  text += `📞 **Teléfono:** ${knowledgeBase.institution.phone}\n`;
  text += `✉️ **General:** ${knowledgeBase.institution.email}\n\n`;
  text += `📧 **Contactos específicos:**\n`;
  text += `• Admisión: ${knowledgeBase.contact.admissions}\n`;
  text += `• Bolsa de trabajo: ${knowledgeBase.contact.jobs}\n`;
  text += `• Bienestar: ${knowledgeBase.contact.welfare}\n`;
  text += `• Secretaría: ${knowledgeBase.contact.secretary}\n\n`;
  text += `⏰ **Atención:** ${knowledgeBase.contact.schedule}`;
  return { text };
};

export const buildScheduleResponse = () => {
  let text = `📅 **Calendario Académico ${knowledgeBase.admission.year}**\n\n`;
  knowledgeBase.events.forEach(e => {
    text += `• **${e.name}:** ${e.date}\n`;
  });
  text += `\n⏰ **Horario general:** ${knowledgeBase.institution.schedule}`;
  return { text };
};

export const buildInfrastructureResponse = () => {
  let text = `🏗️ **Nueva Mega Sede**\n\n`;
  text += `${knowledgeBase.infrastructure.megaProject}\n\n`;
  text += `🔬 **Laboratorios y talleres:**\n`;
  text += `${knowledgeBase.infrastructure.laboratories}`;
  return { text };
};

export const buildAgreementsResponse = () => {
  let text = `🤝 **Convenios Institucionales**\n\n`;
  text += `El IESTP Suiza cuenta con convenios con:\n\n`;
  knowledgeBase.agreements.forEach(a => {
    text += `• ${a}\n`;
  });
  text += `\nEstos convenios permiten realizar **prácticas pre-profesionales** y acceder a la **bolsa de trabajo**.`;
  return { text };
};

export const buildHistoryResponse = () => {
  let text = `🏛️ **Historia Institucional**\n\n`;
  text += `${knowledgeBase.institution.history}\n\n`;
  text += `🌟 **Visión:** ${knowledgeBase.institution.vision}\n\n`;
  text += `🎯 **Misión:** ${knowledgeBase.institution.mission}`;
  return { text };
};

export const buildEventsResponse = () => {
  let text = `🎉 **Próximos Eventos**\n\n`;
  knowledgeBase.events.forEach(e => {
    text += `• **${e.name}:** ${e.date}\n`;
  });
  return { text };
};

export const buildFAQResponse = () => {
  let text = `❓ **Preguntas Frecuentes**\n\n`;
  knowledgeBase.faq.forEach((item, i) => {
    text += `${i + 1}. **${item.q}**\n   ${item.a}\n\n`;
  });
  text += `¿Tienes otra pregunta? Escríbeme y te ayudaré.`;
  return { text };
};

export const buildThanksResponse = () => {
  return {
    text: `😊 ¡De nada! Me alegra haber sido de ayuda.\n\nRecuerda que puedes consultarme cuando lo necesites. ¡Mucho éxito en tu camino profesional! 🎓✨`,
  };
};

export const buildFarewellResponse = () => {
  return {
    text: `👋 ¡Ha sido un placer ayudarte!\n\nSi en el futuro tienes más preguntas, aquí estoy para apoyarte.\n\n📧 **Contacto:** ${knowledgeBase.institution.email}\n📞 **Teléfono:** ${knowledgeBase.institution.phone}\n\n¡Mucho éxito! 🎓`,
  };
};

export const buildHumanTransferResponse = () => {
  const now = new Date();
  const isAvailable = now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= 13 && now.getHours() < 19;

  if (isAvailable) {
    return {
      text: `👤 **Transferencia a asesor humano**\n\n¡Por supuesto! Te conectamos con un asesor ahora mismo.\n\nPor favor, escribe tu consulta y te atenderán a la brevedad.`,
      actions: [{ label: '💬 WhatsApp', link: `https://wa.me/${knowledgeBase.institution.whatsapp}?text=Hola,%20necesito%20ayuda%20con%20la%20admisi%C3%B3n%20del%20IESTP%20Suiza`, type: 'external' }],
    };
  }

  return {
    text: `⏰ **Fuera de horario de atención**\n\nActualmente no hay asesores disponibles.\n\n📧 Escríbenos a **${knowledgeBase.contact.admissions}** y te responderemos a la brevedad.\n\n⏱️ **Horario de atención:** ${knowledgeBase.contact.schedule}`,
  };
};
