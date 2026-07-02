import { useState, useEffect, useRef, useCallback } from 'react';
import {
  X, Send, User, PhoneCall, Volume2, VolumeX, Sparkles, Zap,
  MessageCircle, ExternalLink, Smile, Cpu, Copy, Trash2, ChevronDown,
} from 'lucide-react';
import { sanitizeInput } from '../utils/sanitize';
import { detectIntent, detectNavigationActions, getSuggestedFollowUps, quickReplies } from '../utils/intentMatcher';
import knowledgeBase from '../data/knowledgeBase';

const RobotAvatar = ({ isListening, isSpeaking, mood = 'neutral' }) => {
  const blinkRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const scheduleBlink = () => {
      blinkRef.current = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
        scheduleBlink();
      }, 2000 + Math.random() * 4000);
    };
    scheduleBlink();
    return () => { if (blinkRef.current) clearTimeout(blinkRef.current); };
  }, []);

  const eyeOpen = isBlinking ? 1 : 7;
  const headTilt = mood === 'happy' ? 3 : 0;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B7AF4" /><stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="48" r="28" fill="#4B7AF4" opacity={isListening ? 0.25 : 0.1}>
        {isListening && <animate attributeName="opacity" values="0.1;0.3;0.1" dur="1.2s" repeatCount="indefinite" />}
      </circle>
      <g style={{ transformOrigin: '50px 20px' }}>
        <line x1="50" y1="15" x2="50" y2="28" stroke="#4B7AF4" strokeWidth="2.5" strokeLinecap="round">
          {isListening && <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite" />}
        </line>
        <circle cx="50" cy="13" r="3.5" fill="#4B7AF4">
          {isListening && <animate attributeName="r" values="3;5;3" dur="0.5s" repeatCount="indefinite" />}
        </circle>
      </g>
      <g style={{ transform: `rotate(${headTilt}deg)`, transformOrigin: '50px 50px' }}>
        <rect x="23" y="26" width="54" height="42" rx="12" fill={isSpeaking ? "url(#bg)" : "#4B7AF4"} stroke="#6C63FF" strokeWidth="1.5">
          {isSpeaking && <animate attributeName="fill" values="#4B7AF4;#7C6FFF;#4B7AF4" dur="0.8s" repeatCount="indefinite" />}
        </rect>
        <ellipse cx="38" cy="48" rx="7" ry={eyeOpen} fill="white" />
        <ellipse cx="62" cy="48" rx="7" ry={eyeOpen} fill="white" />
        {!isBlinking && (
          <>
            <circle cx="38" cy="48" r="4" fill="#1A202C" />
            <circle cx="62" cy="48" r="4" fill="#1A202C" />
            <circle cx="36" cy="46" r="1.8" fill="white" />
            <circle cx="60" cy="46" r="1.8" fill="white" />
          </>
        )}
        <circle cx="30" cy="56" r="4" fill="#6C63FF" opacity={mood === 'happy' ? 0.4 : 0.15} />
        <circle cx="70" cy="56" r="4" fill="#6C63FF" opacity={mood === 'happy' ? 0.4 : 0.15} />
        <rect x="40" y="58" width="20" height="4" rx="2" fill="white" opacity="0.95">
          {isSpeaking && <animate attributeName="height" values="4;2;7;3;4" dur="0.4s" repeatCount="indefinite" />}
        </rect>
        <rect x="18" y="40" width="6" height="16" rx="3" fill="#6C63FF" />
        <rect x="76" y="40" width="6" height="16" rx="3" fill="#6C63FF" />
      </g>
      <rect x="32" y="70" width="36" height="18" rx="6" fill="#6C63FF" opacity="0.45" />
      <circle cx="50" cy="79" r="4" fill="#4B7AF4" opacity="0.4">
        {isListening && <animate attributeName="opacity" values="0.2;0.7;0.2" dur="0.6s" repeatCount="indefinite" />}
      </circle>
      <g style={{ transformOrigin: '22px 72px', animation: 'wave 2s ease-in-out infinite' }}>
        <rect x="18" y="70" width="6" height="14" rx="3" fill="#6C63FF" opacity="0.4" />
      </g>
    </svg>
  );
};

const TypingPhrases = [
  'Analizando tu consulta...', 'Buscando información...', 'Consultando base de datos...',
  'Preparando respuesta...', 'Sintetizando datos...', 'Revisando archivos institucionales...',
];

const baseFollowUps = [
  { label: '📚 Carreras', text: '¿Qué carreras tienen?' },
  { label: '📝 Admisión', text: '¿Cómo me inscribo?' },
  { label: '📍 Ubicación', text: '¿Dónde están ubicados?' },
  { label: '📞 Contacto', text: 'Quiero hablar con un asesor' },
];

const WelcomeMessage = {
  id: 'welcome',
  sender: 'ai',
  text: `Hola 👋\n\nSoy **SuizaBot**, el asistente virtual oficial del **${knowledgeBase.institution.fullName}**.\n\nPuedo ayudarte con:\n\n📚 **Carreras**\n📝 **Admisión**\n💰 **Costos**\n📍 **Ubicación**\n📅 **Eventos**\n\nEscribe tu pregunta o selecciona una opción.`,
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  actions: null,
  followUps: baseFollowUps,
};

const renderMarkdown = (text) => {
  if (!text) return '';
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\n/g, '<br />');
  return html;
};

const MessageBubble = ({ message, isUser, isNew, onCopy, onFollowUp }) => {
  const [showCopy, setShowCopy] = useState(false);

  return (
    <div
      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[88%] md:max-w-[80%] ${isUser ? 'self-end' : 'self-start'} ${isNew ? 'animate-fade-up' : ''} relative`}
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      <div
        className={`flex items-center gap-1.5 mb-1 px-1 ${
          isUser ? 'flex-row-reverse' : ''
        }`}
      >
        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-[9px] font-bold ${
          isUser ? 'bg-primary/30' : 'bg-primary/20'
        }`}>
          {isUser ? (
            <User className="w-3 h-3 text-primary/60" />
          ) : (
            <Cpu className="w-3 h-3 text-primary/60" />
          )}
        </span>
        <span className="text-[10px] font-semibold text-slate-400 dark:text-dark-text/50">
          {isUser ? 'Tú' : 'SuizaBot'}
        </span>
        <span className="text-[8px] text-slate-300 dark:text-dark-text/30">•</span>
        <span className="text-[9px] text-slate-400 dark:text-dark-text/40">{message.time}</span>
      </div>

      <div className={`relative p-3.5 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm transition-shadow duration-250 ${
        isUser
          ? 'bg-gradient-to-br from-primary to-blue-600 text-white rounded-br-[4px] shadow-primary/15'
          : 'bg-white dark:bg-dark-bg/80 text-slate-700 dark:text-dark-text border border-slate-100 dark:border-dark-border/20 rounded-bl-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]'
      }`}>
        {!isUser && (
          <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-100 dark:border-dark-border/10">
            <span className="w-4 h-4 inline-block opacity-50">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="25" y="28" width="50" height="40" rx="8" fill="#4B7AF4" opacity="0.2" />
                <circle cx="40" cy="48" r="4" fill="#4B7AF4" opacity="0.4" />
                <circle cx="60" cy="48" r="4" fill="#4B7AF4" opacity="0.4" />
              </svg>
            </span>
            <span className="text-[9px] font-semibold text-primary/50 uppercase tracking-wider">SuizaBot</span>
          </div>
        )}

        <span dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }} />

        {message.isStreaming && (
          <span className="inline-flex items-center ml-1 gap-0.5 align-middle select-none">
            {[0, 0.15, 0.3].map((d, i) => (
              <span key={i} className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${d}s`, display: 'inline-block' }} />
            ))}
          </span>
        )}

        {!isUser && !message.isStreaming && showCopy && (
          <button
            onClick={() => onCopy(message.text)}
            className="absolute -top-2 -right-2 p-1.5 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-sm hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer"
            aria-label="Copiar respuesta"
            title="Copiar respuesta"
          >
            <Copy className="w-3 h-3" />
          </button>
        )}
      </div>

      {message.actions && !message.isStreaming && (
        <div className="mt-2.5 flex flex-wrap gap-2">
          {message.actions.map((a, ai) =>
            a.type === 'external' ? (
              <a
                key={ai}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-[10px] transition-all duration-250 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                <PhoneCall className="w-3 h-3" />
                <span>{a.label}</span>
              </a>
            ) : (
              <button
                key={ai}
                onClick={() => window.open(a.route, '_self')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-[10px] transition-all duration-250 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <ExternalLink className="w-3 h-3" />
                <span>{a.label}</span>
              </button>
            )
          )}
        </div>
      )}

      {message.followUps && !message.isStreaming && !isUser && (
        <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-dark-border/10 w-full">
          <p className="text-[9px] text-slate-400 dark:text-dark-text/40 font-semibold uppercase tracking-wider mb-2">¿Te puedo ayudar con algo más?</p>
          <div className="flex flex-wrap gap-1.5">
            {message.followUps.map((f, fi) => (
              <button
                key={fi}
                onClick={() => onFollowUp(f.text)}
                className="px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-dark-border/30 hover:bg-primary/10 hover:text-primary dark:hover:text-primary border border-transparent hover:border-primary/20 text-[10px] font-medium text-slate-600 dark:text-dark-text/80 transition-all duration-250 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TypingIndicator = ({ phrase }) => (
  <div className="flex flex-col items-start max-w-[88%] self-start animate-fade-up">
    <div className="flex items-center gap-1.5 mb-1.5 px-1">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
        <Cpu className="w-3 h-3 text-primary/60" />
      </span>
      <span className="text-[10px] font-semibold text-slate-400 dark:text-dark-text/50">SuizaBot</span>
      <span className="text-[8px] text-slate-300 dark:text-dark-text/30">•</span>
      <span className="text-[9px] text-slate-400 dark:text-dark-text/40">escribiendo</span>
    </div>
    <div className="px-4 py-3 rounded-2xl bg-white dark:bg-dark-bg/80 border border-slate-100 dark:border-dark-border/20 rounded-bl-[4px] flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex gap-1">
        {[0, 0.15, 0.3].map((d, i) => (
          <span key={i} className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
      <Zap className="w-3 h-3 text-primary/25 animate-pulse" />
      <span className="text-[10px] text-slate-400 dark:text-dark-text/40 font-medium">{phrase}</span>
    </div>
  </div>
);

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WelcomeMessage]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [robotMood, setRobotMood] = useState('neutral');
  const [typingPhrase, setTypingPhrase] = useState('');
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [recentIntents, setRecentIntents] = useState([]);

  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const streamTimerRef = useRef(null);
  const speechSynthRef = useRef(null);
  const typingPhraseRef = useRef(null);
  const latestMsgIdRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    speechSynthRef.current = window.speechSynthesis;
    return () => {
      if (streamTimerRef.current) clearInterval(streamTimerRef.current);
      if (typingPhraseRef.current) clearInterval(typingPhraseRef.current);
      if (speechSynthRef.current) speechSynthRef.current.cancel();
    };
  }, []);

  useEffect(() => {
    const el = chatContainerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
      setShowScrollBtn(dist > 150);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      setTypingPhrase(TypingPhrases[0]);
      typingPhraseRef.current = setInterval(() => {
        i = (i + 1) % TypingPhrases.length;
        setTypingPhrase(TypingPhrases[i]);
      }, 2500);
      setRobotMood('thinking');
    } else {
      if (typingPhraseRef.current) clearInterval(typingPhraseRef.current);
      if (!isSpeaking) setRobotMood('neutral');
    }
    return () => { if (typingPhraseRef.current) clearInterval(typingPhraseRef.current); };
  }, [isTyping, isSpeaking]);

  useEffect(() => {
    if (isSpeaking) setRobotMood('happy');
    else if (!isTyping) setRobotMood('neutral');
  }, [isSpeaking, isTyping]);

  const speakText = useCallback((text) => {
    if (isMuted) return;
    const synth = speechSynthRef.current;
    if (!synth) return;
    synth.cancel();
    const clean = text.replace(/\*\*/g, '').replace(/#/g, '');
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'es-ES';
    utterance.rate = 1.1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synth.speak(utterance);
  }, [isMuted]);

  const cancelSpeech = useCallback(() => {
    if (speechSynthRef.current) {
      speechSynthRef.current.cancel();
      setIsSpeaking(false);
      setRobotMood('neutral');
    }
  }, []);

  const handleToggleOpen = useCallback(() => {
    setIsOpen(prev => {
      if (prev) cancelSpeech();
      return !prev;
    });
  }, [cancelSpeech]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  const generateAIResponse = async (inputText, chatHistory) => {
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const basePrompt = `Eres SuizaBot, asistente virtual oficial del IESTP Suiza, Pucallpa, Perú.
Personalidad: profesional, amable, claro y preciso.
Responde SOLO sobre el instituto.
Usa **negritas** para énfasis y listas con • cuando sea necesario.
Sé servicial, responde en español estructurado.

DATOS OFICIALES:
- 11 carreras: Desarrollo de Sistemas Información, Enfermería Técnica, Mecatrónica Automotriz, Producción Agropecuaria, Manejo Forestal, Contabilidad, Administración de Empresas, Construcción Civil, Electricidad Industrial, Administración Turística, Asistencia Administrativa
- Costos admisión: Ordinario S/180, Exonerados S/300, Convenios S/180
- Ubicación: Carretera Federico Basadre Km 5.700, Pucallpa
- Educación 100% gratuita (sin mensualidades)
- Nueva sede: inversión S/201 millones del GORE Ucayali
- Teléfono: ${knowledgeBase.institution.phone}
- Email: ${knowledgeBase.institution.email}`;

    if (geminiKey && geminiKey.trim()) {
      try {
        const history = chatHistory.map(m => ({ role: m.sender === 'user' ? 'user' : 'model', parts: [{ text: m.text }] }));
        history.push({ role: 'user', parts: [{ text: inputText }] });
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: history, systemInstruction: { parts: [{ text: basePrompt }] }, generationConfig: { temperature: 0.1, maxOutputTokens: 600 } }),
        });
        if (res.ok) {
          const d = await res.json();
          const t = d.candidates?.[0]?.content?.parts?.[0]?.text;
          if (t) return t;
        }
      } catch {}
    }

    if (openaiKey && openaiKey.trim() && !openaiKey.startsWith('YOUR_')) {
      try {
        const msgs = [
          { role: 'system', content: basePrompt },
          ...chatHistory.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
          { role: 'user', content: inputText },
        ];
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${openaiKey}` },
          body: JSON.stringify({ model: 'gpt-4o-mini', messages: msgs, temperature: 0.1, max_tokens: 600 }),
        });
        if (res.ok) {
          const d = await res.json();
          const t = d.choices?.[0]?.message?.content;
          if (t) return t;
        }
      } catch {}
    }

    return null;
  };

  const getLocalResponse = (intent, input) => {
    switch (intent) {
      case 'greeting':
        return { text: `¡Hola! Soy **SuizaBot** 🤖\n\nEstoy listo para resolver todas tus dudas sobre el **${knowledgeBase.institution.fullName}**.\n\n¿Qué deseas saber hoy?` };

      case 'careers': {
        const r = buildCareersFallback();
        return { text: r };
      }

      case 'admission':
        return { text: buildAdmissionFallback() };

      case 'costs':
        return { text: buildCostsFallback() };

      case 'requirements':
        return { text: buildRequirementsFallback() };

      case 'free':
        return { text: buildFreeFallback() };

      case 'location':
        return { text: buildLocationFallback() };

      case 'contact':
        return { text: buildContactFallback() };

      case 'schedule':
        return { text: buildScheduleFallback() };

      case 'infrastructure':
        return { text: buildInfrastructureFallback() };

      case 'agreements':
        return { text: buildAgreementsFallback() };

      case 'history':
        return { text: buildHistoryFallback() };

      case 'events':
        return { text: buildEventsFallback() };

      case 'library':
        return { text: buildLibraryFallback() };

      case 'graduate':
        return { text: buildGraduateFallback() };

      case 'results':
        return { text: buildResultsFallback() };

      case 'thanks':
        return { text: '😊 ¡De nada! Me alegra mucho poder ayudarte.\n\nRecuerda que puedes consultarme cuando lo necesites. ¡Mucho éxito en tu camino profesional! 🎓' };

      case 'farewell':
        return { text: `👋 ¡Ha sido un placer ayudarte!\n\nSi en el futuro tienes más preguntas, aquí estoy para apoyarte.\n\n📧 ${knowledgeBase.institution.email}\n📞 ${knowledgeBase.institution.phone}\n\n¡Mucho éxito! 🎓✨` };

      default: {
        const text = input.toLowerCase();
        if (/humano|asesor|persona|hablar|whatsapp/i.test(text)) {
          return null;
        }
        return {
          text: `Agradezco tu consulta, pero no tengo información específica sobre ese tema.\n\n¿Podrías intentar con alguna de estas opciones?\n\n📚 **Ver carreras** — Nuestros 11 programas\n📝 **Admisión** — Proceso y costos\n💰 **Costos** — Tasas de admisión\n📍 **Ubicación** — Cómo llegar\n📞 **Contacto** — Hablar con un asesor`,
        };
      }
    }
  };

  const streamResponse = (fullText, actions = null, followUps = null) => {
    setIsTyping(false);
    if (streamTimerRef.current) clearInterval(streamTimerRef.current);
    const id = Date.now();
    latestMsgIdRef.current = id;
    setMessages(prev => [...prev, {
      id,
      sender: 'ai',
      text: '',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true,
      played: false,
      actions: actions || null,
      followUps: followUps || null,
    }]);
    let curr = '', idx = 0;
    const chars = [...fullText];
    streamTimerRef.current = setInterval(() => {
      if (idx < chars.length) {
        curr += chars[idx];
        setMessages(prev => prev.map(m => m.id === id ? { ...m, text: curr } : m));
        idx++;
      } else {
        clearInterval(streamTimerRef.current);
        streamTimerRef.current = null;
        setMessages(prev => prev.map(m => m.id === id ? { ...m, isStreaming: false } : m));
        speakText(fullText);
      }
    }, 12);
  };

  const handleCopyResponse = (text) => {
    navigator.clipboard?.writeText(text.replace(/\*\*/g, '')).catch(() => {});
  };

  const handleClearChat = () => {
    cancelSpeech();
    if (streamTimerRef.current) clearInterval(streamTimerRef.current);
    setMessages([WelcomeMessage]);
    setRecentIntents([]);
    setIsTyping(false);
  };

  const handleSend = async (textToSend = inputVal) => {
    const clean = sanitizeInput(textToSend);
    if (!clean || isTyping || messages.some(m => m.isStreaming)) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: clean,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const history = [...messages];
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);
    setRobotMood('thinking');

    const start = Date.now();
    const minDelay = 600;

    try {
      const intent = detectIntent(clean);
      setRecentIntents(prev => [intent, ...prev.filter(i => i !== intent)].slice(0, 3));

      if (intent === 'contact' || /humano|asesor|persona|hablar|whatsapp|contacto|telefono/i.test(clean.toLowerCase())) {
        await new Promise(r => setTimeout(r, minDelay));
        const now = new Date();
        const isAvailable = now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= 13 && now.getHours() < 19;
        if (isAvailable) {
          const actions = [{ label: '💬 WhatsApp', link: `https://wa.me/${knowledgeBase.institution.whatsapp}?text=${encodeURIComponent('Hola, necesito ayuda con la admisión del IESTP Suiza')}`, type: 'external' }];
          streamResponse('👤 **Transferencia a asesor humano**\n\n¡Por supuesto! Te conectamos con un asesor ahora mismo.\n\nPor favor, escribe tu consulta y te atenderán a la brevedad.', actions, getSuggestedFollowUps('contact'));
        } else {
          const actions = [{ label: '📧 Enviar email', route: '/contact', type: 'route' }];
          streamResponse(`⏰ **Fuera de horario de atención**\n\nActualmente no hay asesores disponibles.\n\n📧 Escríbenos a **${knowledgeBase.contact.admissions}** y te responderemos a la brevedad.\n\n⏱️ **Horario de atención:** ${knowledgeBase.contact.schedule}`, actions, getSuggestedFollowUps('contact'));
        }
        return;
      }

      let reply = null;
      const aiResponse = await generateAIResponse(clean, history);
      if (aiResponse) reply = { text: aiResponse };

      if (!reply) {
        reply = getLocalResponse(intent, clean);
      }

      if (!reply) {
        const now = new Date();
        const isAvailable = now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= 13 && now.getHours() < 19;
        if (isAvailable) {
          const actions = [{ label: '💬 WhatsApp', link: `https://wa.me/${knowledgeBase.institution.whatsapp}?text=${encodeURIComponent('Hola, necesito ayuda con la admisión del IESTP Suiza')}`, type: 'external' }];
          streamResponse('👤 **Transferencia a asesor humano**\n\n¡Por supuesto! Te conectamos con un asesor ahora mismo.', actions, getSuggestedFollowUps('contact'));
        } else {
          streamResponse(`⏰ **Fuera de horario de atención**\n\n📧 Escríbenos a **${knowledgeBase.contact.admissions}**\n\n⏱️ **Horario:** ${knowledgeBase.contact.schedule}`, [{ label: '📧 Enviar email', route: '/contact', type: 'route' }], getSuggestedFollowUps('contact'));
        }
        return;
      }

      const elapsed = Date.now() - start;
      if (elapsed < minDelay) await new Promise(r => setTimeout(r, minDelay - elapsed));

      const actions = detectNavigationActions(clean);
      const followUps = getSuggestedFollowUps(intent);
      streamResponse(reply.text, reply.actions || actions, followUps);
    } catch {
      const elapsed = Date.now() - start;
      if (elapsed < minDelay) await new Promise(r => setTimeout(r, minDelay - elapsed));
      streamResponse('Ocurrió un error al procesar tu consulta. Por favor, intenta de nuevo.', null, getSuggestedFollowUps('unknown'));
    }
  };

  const isBusy = isTyping || messages.some(m => m.isStreaming);

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        <button
          onClick={handleToggleOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer border-[3px] border-white/25 hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 active:scale-95 animate-float-bot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
          title="Abrir SuizaBot"
          aria-label="Abrir asistente virtual"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 animate-ping opacity-40" />
          <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 animate-ping opacity-20" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }} />
          <span className={`absolute inset-1 rounded-full bg-gradient-to-tr from-white/15 to-transparent ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
          <div className="w-10 h-10 md:w-12 md:h-12 relative">
            <RobotAvatar mood={robotMood} />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 bg-emerald-400 rounded-full animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 bg-emerald-400 rounded-full border-[3px] border-white dark:border-dark-card" />
          <span className="absolute -bottom-1 -left-1 px-1.5 py-0.5 md:px-2 md:py-0.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[7px] md:text-[8px] font-black rounded-full shadow-lg animate-pulse border border-white/30 leading-none">
            NUEVO
          </span>
        </button>

        {isHovered && (
          <div className="absolute -top-14 right-0 bg-white dark:bg-dark-card text-slate-text dark:text-dark-text text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg whitespace-nowrap animate-fade-in pointer-events-none border border-primary/10 dark:border-dark-border/40">
            <div className="flex items-center gap-2">
              <span className="text-base">👋</span>
              <span>¡Hablemos! Soy SuizaBot</span>
            </div>
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white dark:bg-dark-card rotate-45 border-r border-b border-primary/10 dark:border-dark-border/40" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        className="w-[380px] sm:w-[420px] h-[600px] bg-white dark:bg-dark-card rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.3)] border border-slate-200/60 dark:border-dark-border/60 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300 relative"
        role="dialog"
        aria-modal="true"
        aria-label="Asistente virtual SuizaBot"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary via-blue-600 to-indigo-700 px-4 py-3 text-white flex items-center justify-between shrink-0 shadow-[0_4px_20px_rgba(75,122,244,0.25)]">
          <div className="flex items-center gap-3 relative z-10">
            <div className={`w-[38px] h-[38px] rounded-xl bg-white/15 flex items-center justify-center border border-white/20 transition-all duration-500 ${isSpeaking ? 'scale-110' : ''}`}>
              <RobotAvatar isListening={isSpeaking} isSpeaking={isSpeaking} mood={robotMood} />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-sm leading-none tracking-tight">SuizaBot</h4>
                <Sparkles className="w-3 h-3 text-amber-300/80" />
                <span className="px-1.5 py-[2px] bg-white/12 rounded text-[6px] font-bold tracking-wider border border-white/15 leading-none">v3.0</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="relative flex items-center">
                  <span className={`w-[6px] h-[6px] rounded-full ${
                    isTyping ? 'bg-amber-400' : isSpeaking ? 'bg-green-400' : 'bg-emerald-400'
                  } ${isTyping || isSpeaking ? 'animate-pulse' : 'animate-ping'} absolute`} />
                  <span className={`w-[6px] h-[6px] rounded-full ${
                    isTyping ? 'bg-amber-400' : isSpeaking ? 'bg-green-400' : 'bg-emerald-400'
                  } relative shadow-[0_0_6px_rgba(52,211,153,0.5)]`} />
                </span>
                <span className="text-[8px] text-white/70 font-semibold tracking-wide">
                  {isTyping ? 'Procesando...' : isSpeaking ? 'Hablando...' : 'En línea'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-0.5 relative z-10">
            <button
              onClick={handleClearChat}
              className="p-1.5 rounded-lg hover:bg-white/12 active:bg-white/20 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              title="Limpiar conversación"
              aria-label="Limpiar conversación"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { if (!isMuted) cancelSpeech(); setIsMuted(!isMuted); }}
              className={`p-1.5 rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${isMuted ? 'bg-white/15' : 'hover:bg-white/12 active:bg-white/20'}`}
              title={isMuted ? 'Activar voz' : 'Silenciar voz'}
              aria-label={isMuted ? 'Activar voz' : 'Silenciar voz'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-pulse' : ''}`} />}
            </button>
            <button
              onClick={handleToggleOpen}
              className="p-1.5 rounded-lg hover:bg-white/12 active:bg-white/20 transition-all duration-200 cursor-pointer hover:rotate-90 duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Cerrar asistente"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Speaking indicator */}
        {isSpeaking && (
          <div className="bg-gradient-to-r from-primary/8 via-purple-500/8 to-primary/8 px-4 py-1.5 flex items-center gap-2 border-b border-primary/8 dark:border-dark-border/20 shrink-0">
            <div className="flex gap-0.5 items-center h-3">
              {[0, 0.15, 0.3, 0.45].map((d, i) => (
                <span key={i} className="w-0.5 bg-primary rounded-full animate-bounce" style={{ height: `${6 + i * 2}px`, animationDelay: `${d}s` }} />
              ))}
            </div>
            <span className="text-[10px] font-semibold text-primary/60">Reproduciendo respuesta...</span>
            <button
              onClick={cancelSpeech}
              className="ml-auto px-2.5 py-1 text-[9px] font-bold text-primary/50 bg-primary/5 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer active:scale-90 border border-primary/10 hover:border-red-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              ⏹ Detener
            </button>
          </div>
        )}

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 bg-gradient-to-b from-slate-50/60 via-white to-white/80 dark:from-dark-bg/30 dark:via-dark-card/50 dark:to-dark-card/40 relative"
          role="log"
          aria-live="polite"
          aria-label="Mensajes del chat"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {messages.map((m, idx) => (
            <MessageBubble
              key={m.id || idx}
              message={m}
              isUser={m.sender === 'user'}
              isNew={idx === messages.length - 1 && m.sender === 'ai' && !m.isStreaming}
              onCopy={handleCopyResponse}
              onFollowUp={handleSend}
            />
          ))}

          {isTyping && <TypingIndicator phrase={typingPhrase} />}
          <div ref={chatEndRef} />
        </div>

        {/* Quick replies */}
        <div className="px-3 py-2.5 bg-gradient-to-r from-slate-50/40 via-white to-slate-50/40 dark:from-dark-bg/10 dark:via-dark-card/40 dark:to-dark-bg/10 border-t border-slate-100 dark:border-dark-border/10 shrink-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {quickReplies.slice(0, 6).map((q, i) => (
              <button
                key={i}
                onClick={() => !isBusy && handleSend(q.text)}
                disabled={isBusy}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-[9px] whitespace-nowrap shrink-0 transition-all duration-250 shadow-sm ${
                  isBusy
                    ? 'opacity-40 cursor-not-allowed bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 text-slate-400 dark:text-dark-text/40'
                    : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 text-slate-600 dark:text-dark-text/80 cursor-pointer hover:border-primary/40 hover:text-primary hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
                }`}
              >
                <span className="text-xs leading-none">{q.label.split(' ')[0]}</span>
                <span>{q.label.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="px-3 pb-3 pt-2 border-t border-slate-100 dark:border-dark-border/10 flex items-center gap-2 bg-white dark:bg-dark-card shrink-0">
          <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-dark-border/40 bg-slate-50 dark:bg-dark-bg/30 transition-all duration-250 shadow-sm has-[input:focus]:border-primary/50 has-[input:focus]:ring-2 has-[input:focus]:ring-primary/15 has-[input:focus]:shadow-md has-[input:focus]:bg-white dark:has-[input:focus]:bg-dark-card">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isBusy}
              placeholder={isBusy ? 'SuizaBot está respondiendo...' : 'Escribe tu mensaje...'}
              className="flex-1 bg-transparent text-xs md:text-sm text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-dark-text/40 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Escribe tu mensaje"
            />
            <button
              onClick={() => handleSend()}
              disabled={isBusy || !inputVal.trim()}
              className={`w-8 h-8 rounded-full bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white flex items-center justify-center transition-all duration-250 shadow-md shrink-0 ${
                isBusy || !inputVal.trim() ? 'opacity-30 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
              }`}
              aria-label="Enviar mensaje"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scroll to bottom button */}
        {showScrollBtn && (
          <button
            onClick={scrollToBottom}
            className="absolute bottom-20 right-4 p-2 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-lg hover:shadow-xl hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-250 cursor-pointer animate-fade-in z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="Ir al último mensaje"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function buildCareersFallback() {
  const cats = {};
  knowledgeBase.careers.forEach(c => {
    if (!cats[c.category]) cats[c.category] = [];
    cats[c.category].push(c);
  });
  let text = `🎓 **${knowledgeBase.careers.length} Carreras Profesionales**\n\n`;
  text += `Duración: **3 años (6 semestres)**\n\n`;
  const icons = { Tecnología: '💻', Salud: '🏥', Gestión: '💼', Ingeniería: '🚜' };
  for (const [cat, items] of Object.entries(cats)) {
    text += `${icons[cat] || '📌'} **${cat}**\n`;
    items.forEach(c => { text += `• ${c.name} — ${c.employability}% empleabilidad\n`; });
    text += '\n';
  }
  return text;
}

function buildAdmissionFallback() {
  let text = `📝 **Admisión ${knowledgeBase.admission.year}**\n\n📅 **Cronograma:**\n`;
  text += `• Inscripciones: ${knowledgeBase.admission.inscriptionPeriod}\n`;
  text += `• Simulacro: ${knowledgeBase.admission.simulacrumDate}\n`;
  text += `• Examen: ${knowledgeBase.admission.examDate}\n`;
  text += `• Resultados: ${knowledgeBase.admission.resultsDate}\n`;
  text += `• Inicio clases: ${knowledgeBase.admission.classesStart}\n\n`;
  text += `💵 **Costos:**\n`;
  knowledgeBase.admission.costs.forEach(c => { text += `• ${c.concept}: **${c.amount}**\n`; });
  return text;
}

function buildCostsFallback() {
  let text = `💰 **Costos de Admisión ${knowledgeBase.admission.year}**\n\n`;
  knowledgeBase.admission.costs.forEach(c => { text += `• ${c.concept}: **${c.amount}**\n`; });
  text += `\n💳 Pagos en **Tesorería del campus**.\n\n`;
  text += `✨ **${knowledgeBase.admission.freeDescription}**`;
  return text;
}

function buildRequirementsFallback() {
  let text = `📋 **Requisitos de Postulación ${knowledgeBase.admission.year}**\n\nDocumentos necesarios:\n\n`;
  knowledgeBase.admission.requirements.forEach((r, i) => { text += `${i + 1}. ${r}\n`; });
  return text;
}

function buildFreeFallback() {
  let text = `✨ **Educación 100% Gratuita**\n\n`;
  text += `Al ser un **instituto público licenciado por MINEDU**:\n\n`;
  text += `✅ **Sin mensualidades**\n✅ **Sin pensiones**\n`;
  text += `✅ Solo derecho de admisión y matrícula básica\n`;
  text += `✅ Título oficial a **nombre de la Nación**\n\n`;
  text += `💵 **Inversión única:**\n`;
  knowledgeBase.admission.costs.forEach(c => { text += `• ${c.concept}: **${c.amount}**\n`; });
  return text;
}

function buildLocationFallback() {
  let text = `📍 **Ubicación**\n\n`;
  text += `${knowledgeBase.institution.location}\n\n`;
  text += `⏰ **Horario:** ${knowledgeBase.institution.schedule}\n`;
  text += `📞 **Tel:** ${knowledgeBase.institution.phone}\n`;
  text += `✉️ **Email:** ${knowledgeBase.institution.email}`;
  return text;
}

function buildContactFallback() {
  let text = `📞 **Contacto IESTP Suiza**\n\n`;
  text += `📍 ${knowledgeBase.institution.location}\n`;
  text += `📞 ${knowledgeBase.institution.phone}\n`;
  text += `✉️ ${knowledgeBase.institution.email}\n\n`;
  text += `📧 **Específicos:**\n`;
  text += `• Admisión: ${knowledgeBase.contact.admissions}\n`;
  text += `• Bolsa trabajo: ${knowledgeBase.contact.jobs}\n`;
  text += `• Bienestar: ${knowledgeBase.contact.welfare}\n`;
  text += `• Secretaría: ${knowledgeBase.contact.secretary}\n\n`;
  text += `⏰ **Atención:** ${knowledgeBase.contact.schedule}`;
  return text;
}

function buildScheduleFallback() {
  let text = `📅 **Calendario Académico ${knowledgeBase.admission.year}**\n\n`;
  knowledgeBase.events.forEach(e => { text += `• **${e.name}:** ${e.date}\n`; });
  text += `\n⏰ **Horario general:** ${knowledgeBase.institution.schedule}`;
  return text;
}

function buildInfrastructureFallback() {
  let text = `🏗️ **Nueva Mega Sede**\n\n`;
  text += `${knowledgeBase.infrastructure.megaProject}\n\n`;
  text += `🔬 **Laboratorios:**\n${knowledgeBase.infrastructure.laboratories}`;
  return text;
}

function buildAgreementsFallback() {
  let text = `🤝 **Convenios Institucionales**\n\n`;
  knowledgeBase.agreements.forEach(a => { text += `• ${a}\n`; });
  text += `\nPermiten **prácticas pre-profesionales** y **bolsa de trabajo**.`;
  return text;
}

function buildHistoryFallback() {
  const inst = knowledgeBase.institution;
  let text = `🏛️ **Historia**\n\n${inst.history}\n\n`;
  text += `🌟 **Visión:** ${inst.vision}\n\n`;
  text += `🎯 **Misión:** ${inst.mission}`;
  return text;
}

function buildEventsFallback() {
  let text = `🎉 **Próximos Eventos**\n\n`;
  knowledgeBase.events.forEach(e => { text += `• **${e.name}:** ${e.date}\n`; });
  return text;
}

function buildLibraryFallback() {
  let text = `📖 **Biblioteca IESTP Suiza**\n\n`;
  text += `La biblioteca institucional ofrece:\n\n`;
  text += `• 📚 Material bibliográfico especializado por carrera\n`;
  text += `• 💻 Acceso a recursos digitales y bases de datos\n`;
  text += `• 🖨️ Servicio de fotocopiado e impresión\n`;
  text += `• 📍 Sala de estudio individual y grupal\n\n`;
  text += `⏰ **Horario:** Lun - Vie, en horario de clases`;
  return text;
}

function buildGraduateFallback() {
  let text = `🎓 **Perfil del Egresado**\n\n`;
  text += `Nuestros egresados están preparados para:\n\n`;
  text += `• 💼 Insertarse al mercado laboral con **alta empleabilidad**\n`;
  text += `• 🚀 Emprender sus propios negocios o startups\n`;
  text += `• 📈 Continuar estudios de especialización o universitarios\n`;
  text += `• 🌍 Contribuir al desarrollo sostenible de la región\n\n`;
  text += `Contamos con una **bolsa de trabajo activa** y **convenios empresariales** para facilitar tu inserción laboral.`;
  return text;
}

function buildResultsFallback() {
  let text = `🏆 **Resultados de Admisión ${knowledgeBase.admission.year}**\n\n`;
  text += `Los resultados del examen de admisión se publican en:\n\n`;
  text += `• 📍 **Dirección:** ${knowledgeBase.institution.location}\n`;
  text += `• 🌐 **Portal web:** Sección de Resultados\n`;
  text += `• 📞 **Consultas:** ${knowledgeBase.institution.phone}\n\n`;
  text += `¿Tienes tu DNI a mano? Puedes consultar tu resultado individual.`;
  return text;
}
