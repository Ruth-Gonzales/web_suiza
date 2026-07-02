import { useState } from 'react';
import { Calendar, X, Send, CheckCircle2 } from 'lucide-react';

export default function VisitSection({ t }) {
  const data = t.contact?.visit || {};
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.date) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  const reset = () => {
    setOpen(false);
    setSent(false);
    setForm({ name: '', phone: '', email: '', date: '' });
  };

  return (
    <>
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-dark dark:from-primary/80 dark:to-dark-card p-8 md:p-10 shadow-lg text-center">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl dark:bg-white/[0.03]" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-white/10 rounded-full blur-3xl dark:bg-white/[0.03]" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/15 dark:bg-white/[0.05] flex items-center justify-center mx-auto mb-5">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {data.title || '¿Quieres conocer nuestras instalaciones?'}
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">
              {data.subtitle}
            </p>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-dark-surface text-primary dark:text-white font-bold text-sm hover:bg-white/90 dark:hover:bg-dark-card transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              {data.cta || 'Agendar visita'}
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={reset}>
          <div
            className="w-full max-w-md rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-slate-text dark:text-white">
                {data.modalTitle || 'Solicitar visita'}
              </h3>
              <button onClick={reset} className="p-1.5 rounded-lg hover:bg-slate-light dark:hover:bg-dark-border/50 text-slate-text/50 dark:text-dark-text/50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {sent ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <p className="text-sm text-slate-text/80 dark:text-dark-text/80">{data.success}</p>
                <button onClick={reset} className="mt-4 text-xs text-primary hover:underline">Cerrar</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1">{data.nameLabel || 'Nombre Completo'}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary outline-none text-sm transition-all text-slate-text dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1">{data.phoneLabel || 'Teléfono'}</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary outline-none text-sm transition-all text-slate-text dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1">{data.emailLabel || 'Correo Electrónico'}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary outline-none text-sm transition-all text-slate-text dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1">{data.dateLabel || 'Fecha de visita'}</label>
                  <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-white/8 focus:border-primary outline-none text-sm transition-all text-slate-text dark:text-white" />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {data.sendButton || 'Enviar solicitud'}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
