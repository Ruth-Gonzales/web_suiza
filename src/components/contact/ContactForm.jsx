import { useState } from 'react';
import { Send, CheckCircle2, User, Mail, MessageSquare, Tag } from 'lucide-react';

export default function ContactForm({ t }) {
  const form = t.contact?.form || {};
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="form" className="mb-12">
        <div className="max-w-xl mx-auto rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-10 shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-2">{form.success || '¡Mensaje enviado!'}</h3>
          <p className="text-sm text-slate-text/60 dark:text-dark-text/60 mb-6">Te responderemos a la brevedad.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-semibold text-sm hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="mb-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
          {form.title || 'Envíanos un mensaje'}
        </h2>
        <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-8">
          {form.subtitle}
        </p>

        <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3 h-3 text-primary" />
                  {form.nameLabel || 'Nombre Completo'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={form.placeholderName || 'Ej: Juan Pérez'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-primary" />
                  {form.emailLabel || 'Correo Electrónico'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={form.placeholderEmail || 'Ej: juan@example.com'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-primary" />
                {form.subjectLabel || 'Asunto'}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={form.subjectPlaceholder || 'Ej: Información sobre admisión'}
                className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-primary" />
                {form.messageLabel || 'Tu Mensaje'}
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={form.placeholderMsg || 'Escribe tu consulta aquí...'}
                className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold text-sm tracking-widest shadow-lg shadow-primary/25 hover:shadow-primary-dark/30 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{form.sendButton || 'ENVIAR MENSAJE'}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
