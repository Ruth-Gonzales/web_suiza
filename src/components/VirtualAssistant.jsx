import React, { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { X, Send, User, Bot, HelpCircle, PhoneCall, Calendar } from 'lucide-react';
=======
import { MessageSquare, X, Send, User, Bot, HelpCircle, PhoneCall, Calendar } from 'lucide-react';
import { translations } from '../translations';

const t = translations[localStorage.getItem('lang') || 'es'];
>>>>>>> web_suiza/clase2

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: t.assistant.welcome,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const streamTimerRef = useRef(null);

  // Cleanup stream timer on unmount
  useEffect(() => {
    return () => {
      if (streamTimerRef.current) {
        clearInterval(streamTimerRef.current);
      }
    };
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    const isStreaming = messages.some(m => m.isStreaming);
    chatEndRef.current?.scrollIntoView({ behavior: isStreaming ? 'auto' : 'smooth' });
  }, [messages, isTyping]);

  const checkHumanAvailability = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    
    // Schedule: Monday (1) to Friday (5) from 1:00 PM (13:00) to 7:00 PM (19:00)
    const isWeekday = day >= 1 && day <= 5;
    const isOfficeHours = hour >= 13 && hour < 19;
    
    return isWeekday && isOfficeHours;
  };

  const normalizeText = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // removes accents
      .replace(/[¿?¡!.,;]/g, ""); // removes punctuation
  };

  const getAIResponse = (input) => {
    const query = normalizeText(input);
    
    if (query.includes('hola') || query.includes('buenos dias') || query.includes('buenas tardes') || query.includes('saludos') || query.includes('buen dia')) {
      return t.assistant.greeting;
    }
    
    if (query.includes('costo') || query.includes('precio') || query.includes('pagar') || query.includes('pago') || query.includes('tasa') || query.includes('cuesta') || query.includes('postular')) {
      return t.assistant.costs;
    }
    
    if (query.includes('requisito') || query.includes('documento') || query.includes('papel') || query.includes('que necesito') || query.includes('carpeta')) {
      return t.assistant.requirements;
    }

    if (query.includes('requisitos fisicos') || query.includes('requisito fisico') || query.includes('salud') || query.includes('fisico') || query.includes('medico') || query.includes('aptitud')) {
      return t.assistant.physicalRequirements;
    }
    
    if (query.includes('carrera') || query.includes('especialidad') || query.includes('estudiar') || query.includes('programas') || query.includes('profesiones')) {
      return t.assistant.careers;
    }
    
    if (query.includes('fecha') || query.includes('cuando es') || query.includes('cronograma') || query.includes('calendario') || query.includes('dia del examen') || query.includes('cuando empieza')) {
      return t.assistant.calendar;
    }
    
    if (query.includes('donde queda') || query.includes('direccion') || query.includes('ubicacion') || query.includes('donde estan') || query.includes('campus') || query.includes('como llegar')) {
      return t.assistant.location;
    }
    
    if (query.includes('gratis') || query.includes('mensualidad') || query.includes('pension') || query.includes('pagar mes') || query.includes('cuota')) {
      return t.assistant.freeEducation;
    }

    if (query.includes('sistemas') || query.includes('computacion') || query.includes('informatica') || query.includes('desarrollo') || query.includes('software') || query.includes('programacion')) {
      return t.assistant.careerSystems;
    }

    if (query.includes('enfermeria') || query.includes('enfermeria') || query.includes('salud') || query.includes('clinica') || query.includes('medica')) {
      return t.assistant.careerNursing;
    }

    if (query.includes('seguridad') || query.includes('cerco') || query.includes('perimetro') || query.includes('invasion') || query.includes('invasiones') || query.includes('terrenos') || query.includes('protesta') || query.includes('defensa')) {
      return t.assistant.security;
    }

    if (query.includes('humano') || query.includes('asesor') || query.includes('persona') || query.includes('hablar con alguien') || query.includes('atencion') || query.includes('whatsapp') || query.includes('contacto') || query.includes('telefono') || query.includes('telefono')) {
      return "TRANSFER_HUMAN"; 
    }
    return t.assistant.fallback;
  };

  const getAIResponseFromAPI = async (inputText, chatHistory) => {
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const systemPrompt = `Eres SuizaAI, el asistente virtual oficial del IESTP Suiza (Instituto de Educación Superior Tecnológico Público Suiza) en Pucallpa, Ucayali, Perú.
Tu único objetivo es ayudar a los usuarios con dudas sobre el instituto: sus 11 carreras, requisitos de admisión, costos, ubicación, horarios, examen de admisión y noticias.

REGLAS CRÍTICAS DE COMPORTAMIENTO:
1. SOLO HABLA DEL INSTITUTO: Solo debes responder preguntas relacionadas directamente con el IESTP Suiza, sus carreras, admisión, trámites, infraestructura, noticias o el instituto en general.
2. DENEGACIÓN DE TEMAS AJENOS: Si el usuario te pregunta sobre cualquier tema que no sea del IESTP Suiza (por ejemplo: recetas de cocina, tareas de matemáticas generales, chistes generales, programación general no enfocada en resolver dudas del instituto, historia universal, consejos personales, etc.), debes responder de manera sumamente educada pero firme que solo estás capacitado para responder dudas sobre el IESTP Suiza y sus programas de estudio.
   Ejemplo de respuesta de rechazo: "Lo siento, como asistente virtual del IESTP Suiza, solo puedo ayudarte con información sobre nuestro instituto, carreras, admisión y trámites académicos. ¿Tienes alguna consulta sobre nuestros programas de estudio?"
3. DATOS OFICIALES DEL INSTITUTO (USA SOLO ESTOS DATOS):
   - Carreras (11): Desarrollo de Sistemas de Información, Enfermería Técnica, Mecatrónica Automotriz, Producción Agropecuaria, Manejo Forestal, Contabilidad, Administración de Empresas, Construcción Civil, Electricidad Industrial, Administración de Operaciones Turísticas y Asistencia Administrativa.
   - Costo de Admisión: Examen Ordinario S/ 180.00, Exonerados S/ 300.00, Convenios S/ 180.00.
   - Requisitos: Certificado de estudios de 1° a 5° original, Copia de DNI, Partida de nacimiento original, 4 fotos tamaño carnet a color con fondo blanco y recibo de pago de inscripción de Tesorería. También requisitos de aptitud médica (salud, aptitud física/mental, grupo sanguíneo RH y declaración jurada).
   - Calendario Admisión 2026-II: Inscripciones del 08 de Junio al 18 de Agosto de 2026. Examen simulacro el Domingo 23 de Agosto de 2026. Examen Ordinario el Domingo 30 de Agosto de 2026. Resultados el 31 de Agosto de 2026. Inicio de clases el 07 de Septiembre de 2026.
   - Ubicación: Carretera Federico Basadre Km 5.700, Callería, Pucallpa. Horario de atención: Lunes a Viernes de 8:00 AM a 4:30 PM.
   - Educación Gratuita: Al ser público, la enseñanza es 100% gratuita. Solo se paga el derecho de admisión y la matrícula semestral básica.
   - Infraestructura Real: Se está construyendo una nueva sede con una inversión histórica de más de S/ 201 millones, ejecutada por el Gobierno Regional de Ucayali. Tendrá 22 módulos modernos, piscigranja, biblioteca, losa deportiva y laboratorios especializados. Para continuar las clases durante la obra, se habilitaron 31 módulos de contingencia (aulas y talleres) al 99% en 2025.
   - Seguridad y Cerco Perimétrico: Históricamente, el instituto defendió sus terrenos forestales (plantaciones de cedro y copaiba de prácticas) de invasiones como la sucedida en 2011. Por ello, la nueva megaobra del GORE Ucayali incluye la construcción de un cerco perimétrico integral moderno para garantizar la seguridad de estudiantes y campos agrícolas.
4. HISTORIAL DE CHAT: Debes mantener una conversación fluida utilizando el historial de chat provisto.
5. TONO: Sé servicial, profesional, amable y estructurado. Usa emojis con moderación.`;

    // 1. Try Gemini if key is present
    if (geminiKey && geminiKey.trim() !== '') {
      try {
        const formattedHistory = chatHistory.map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        }));

        // Append current message
        formattedHistory.push({
          role: 'user',
          parts: [{ text: inputText }]
        });

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: formattedHistory,
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              generationConfig: {
                temperature: 0.15,
                maxOutputTokens: 800
              }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        }
      } catch (err) {
        console.error("Gemini API Error, falling back...", err);
      }
    }

    // 2. Try OpenAI if key is present
    if (openaiKey && openaiKey.trim() !== '' && !openaiKey.startsWith('YOUR_') && !openaiKey.startsWith('sk-gJElu3C65VwiINan2z')) {
      try {
        const messages = [
          { role: 'system', content: systemPrompt },
          ...chatHistory.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          })),
          { role: 'user', content: inputText }
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.15,
            max_tokens: 800
          })
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.choices?.[0]?.message?.content;
          if (text) return text;
        }
      } catch (err) {
        console.error("OpenAI API Error, falling back...", err);
      }
    }

    // 3. Fallback to local rule-based responses if APIs fail or aren't set
    return getAIResponse(inputText);
  };

  const streamAIResponse = (fullText, action = null) => {
    setIsTyping(false);
    
    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
    }
    
    const newMsgId = Date.now();
    const aiMsg = {
      id: newMsgId,
      sender: 'ai',
      text: '',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true
    };
    
    setMessages(prev => [...prev, aiMsg]);
    
    let currentText = '';
    let index = 0;
    const speed = 12; // ms per character
    
    streamTimerRef.current = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText.charAt(index);
        setMessages(prev => 
          prev.map(m => m.id === newMsgId ? { ...m, text: currentText } : m)
        );
        index++;
      } else {
        clearInterval(streamTimerRef.current);
        streamTimerRef.current = null;
        setMessages(prev => 
          prev.map(m => m.id === newMsgId ? { ...m, isStreaming: false, action } : m)
        );
      }
    }, speed);
  };

  const handleSend = async (textToSend = inputVal) => {
    if (!textToSend.trim()) return;

    const isCurrentlyStreaming = messages.some(m => m.isStreaming);
    if (isTyping || isCurrentlyStreaming) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const currentHistory = [...messages];

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    const startTime = Date.now();
    const minDelay = 1000; // 1s minimum delay to show typing dots

    try {
      const query = normalizeText(textToSend);
      if (query.includes('humano') || query.includes('asesor') || query.includes('persona') || query.includes('hablar con alguien') || query.includes('whatsapp') || query.includes('contacto') || query.includes('telefono')) {
        await new Promise(resolve => setTimeout(resolve, minDelay));
        triggerHumanTransfer();
        return;
      }

      // Call API
      const aiReplyText = await getAIResponseFromAPI(textToSend, currentHistory);
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minDelay) {
        await new Promise(resolve => setTimeout(resolve, minDelay - elapsedTime));
      }

      streamAIResponse(aiReplyText);
    } catch (err) {
      console.error(err);
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minDelay) {
        await new Promise(resolve => setTimeout(resolve, minDelay - elapsedTime));
      }
      
      const fallbackText = getAIResponse(textToSend);
      streamAIResponse(fallbackText);
    }
  };

  const triggerHumanTransfer = () => {
    const isAvailable = checkHumanAvailability();
    if (isAvailable) {
      const text = t.assistant.connectingHuman;
      const action = {
<<<<<<< HEAD
        label: "Iniciar Chat de WhatsApp",
        link: "https://wa.me/51988452394?text=Hola,%20necesito%20ayuda%20con%20el%20proceso%20de%20admisi%C3%B3n%20del%20IESTP%20Suiza"
=======
        label: t.assistant.startWhatsApp,
        link: "https://wa.me/51961280665?text=Hola,%20necesito%20ayuda%20con%20el%20proceso%20de%20admisi%C3%B3n%20del%20IESTP%20Suiza"
>>>>>>> web_suiza/clase2
      };
      streamAIResponse(text, action);
    } else {
      const text = t.assistant.offHours;
      streamAIResponse(text);
    }
  };

  const commonQuestions = [
    { text: t.assistant.q1, label: t.assistant.q1Label },
    { text: t.assistant.q2, label: t.assistant.q2Label },
    { text: t.assistant.q3, label: t.assistant.q3Label },
    { text: t.assistant.q4, label: t.assistant.q4Label }
  ];

  const isBotBusy = isTyping || messages.some(m => m.isStreaming);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      
      {/* 1. CHAT TOGGLE - ROBOT CHARACTER */}
      {!isOpen && (
<<<<<<< HEAD
        <div className="suiza-robot-scale" data-mood="happy">
          <div
            className="suiza-robot-wrapper"
            onClick={() => setIsOpen(true)}
            title="Asistente Virtual"
          >
            <div className="suiza-robot">
              <div className="robot-antenna">
                <span></span>
              </div>
              <div className="robot-head">
                <div className="robot-screen">
                  <div className="robot-eye left"></div>
                  <div className="robot-eye right"></div>
                  <div className="robot-mouth"></div>
                </div>
                <div className="robot-ear left"></div>
                <div className="robot-ear right"></div>
              </div>
              <div className="robot-neck"></div>
              <div className="robot-body">
                <div className="robot-chest">S</div>
              </div>
              <div className="robot-arm left">
                <div className="robot-hand"></div>
              </div>
              <div className="robot-arm right waving">
                <div className="robot-hand"></div>
              </div>
              <div className="robot-leg left"></div>
              <div className="robot-leg right"></div>
              <div className="robot-glow"></div>
            </div>
          </div>
        </div>
=======
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10"
          title={t.assistant.title}
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
        </button>
>>>>>>> web_suiza/clase2
      )}

      {/* 2. CHAT DRAWER PANEL */}
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] h-[480px] bg-white dark:bg-dark-card rounded-[2.2rem] shadow-2xl border border-slate-100 dark:border-dark-border/80 flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="bg-primary px-5 py-4.5 text-white flex justify-between items-center relative shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/25">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-sm leading-none">{t.assistant.name}</h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full absolute"></span>
                  <span className="text-[9px] text-white/75 font-semibold">{t.assistant.statusActive}</span>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/15 transition-all text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3.5 bg-slate-50/40 dark:bg-dark-bg/20">
            {messages.map((m, idx) => {
              const isUser = m.sender === 'user';
              return (
                <div key={idx} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[85%] ${isUser ? 'self-end' : 'self-start'}`}>
                  
                  {/* Sender name & time */}
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                    {isUser ? <User className="w-2.5 h-2.5" /> : <Bot className="w-2.5 h-2.5" />}
                    <span>{isUser ? t.assistant.you : t.assistant.name}</span>
                    <span>•</span>
                    <span>{m.time}</span>
                  </div>

                  {/* Message Bubble */}
                  <div className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed border shadow-sm whitespace-pre-wrap relative ${
                    isUser
                      ? 'bg-primary text-white border-primary rounded-tr-none'
                      : 'bg-white dark:bg-dark-card text-slate-700 dark:text-dark-text border-slate-100 dark:border-dark-border/40 rounded-tl-none text-left'
                  }`}>
                    <span>{m.text}</span>
                    {m.isStreaming && (
                      <span className="inline-flex items-center ml-1.5 gap-0.5 align-middle select-none">
                        <span className="w-1 h-1 bg-slate-400 dark:bg-dark-text/60 rounded-full animate-bounce" style={{ animationDelay: '0s', display: 'inline-block' }}></span>
                        <span className="w-1 h-1 bg-slate-400 dark:bg-dark-text/60 rounded-full animate-bounce" style={{ animationDelay: '0.15s', display: 'inline-block' }}></span>
                        <span className="w-1 h-1 bg-slate-400 dark:bg-dark-text/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s', display: 'inline-block' }}></span>
                      </span>
                    )}

                    {/* Render action button for human transfer link */}
                    {m.action && (
                      <div className="mt-3">
                        <a 
                          href={m.action.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-extrabold text-xs rounded-xl transition-all shadow-sm shadow-[#25D366]/15 hover:scale-[1.02] cursor-pointer"
                        >
                          <PhoneCall className="w-4 h-4" />
                          <span>{m.action.label}</span>
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}

            {/* AI Typing Indicator */}
            {isTyping && (
              <div className="flex flex-col items-start max-w-[85%] self-start animate-pulse">
                <div className="flex items-center gap-1.5 mb-1 px-1 text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                  <Bot className="w-2.5 h-2.5" />
                  <span>{t.assistant.responding}</span>
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick FAQ Suggestion chips */}
          <div className="px-3.5 py-2.5 bg-slate-50/20 dark:bg-dark-bg/10 border-t border-slate-100 dark:border-dark-border/30 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0 text-left">
            {commonQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => !isBotBusy && handleSend(q.text)}
                disabled={isBotBusy}
                className={`px-3 py-1.5 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-[9px] font-bold text-slate-500 dark:text-dark-text/75 transition-all whitespace-nowrap ${
                  isBotBusy 
                    ? 'opacity-45 cursor-not-allowed' 
                    : 'hover:border-primary hover:text-primary cursor-pointer hover:bg-slate-50/50'
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Bottom Message Input Box */}
          <div className="p-3 border-t border-slate-100 dark:border-dark-border/40 flex items-center gap-2 bg-white dark:bg-dark-card shrink-0">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isBotBusy}
              placeholder={isBotBusy ? t.assistant.respondingPlaceholder : t.assistant.inputPlaceholder}
              className={`flex-1 px-4 py-2.5 border border-slate-100 dark:border-dark-border/40 rounded-full text-xs md:text-sm bg-slate-50 dark:bg-dark-bg/20 text-[#1A202C] dark:text-white focus:outline-none focus:border-primary/50 focus:bg-white ${
                isBotBusy ? 'opacity-65 cursor-not-allowed' : ''
              }`}
            />
            <button
              onClick={() => handleSend()}
              disabled={isBotBusy}
              className={`w-9.5 h-9.5 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-all cursor-pointer shadow-md shadow-primary/15 shrink-0 ${
                isBotBusy ? 'opacity-50 cursor-not-allowed hover:bg-primary' : ''
              }`}
              aria-label={t.assistant.ariaSend}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
