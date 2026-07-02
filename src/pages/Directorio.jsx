import { Phone, Mail, MapPin, Users, Building2 } from 'lucide-react';

const areas = [
  {
    name: 'Dirección General',
    head: 'Dr. Carlos Mendoza López',
    email: 'direccion@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 101',
    icon: Building2,
  },
  {
    name: 'Secretaría Académica',
    head: 'Lic. María García Ríos',
    email: 'secretaria@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 102',
    icon: Building2,
  },
  {
    name: 'Unidad Académica',
    head: 'Mg. Juan Torres Pinedo',
    email: 'academico@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 103',
    icon: Building2,
  },
  {
    name: 'Administración',
    head: 'CPC. Rosa Silva Vargas',
    email: 'administracion@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 104',
    icon: Building2,
  },
  {
    name: 'Bienestar Estudiantil',
    head: 'Psic. Ana Chuquival Vela',
    email: 'bienestar@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 105',
    icon: Users,
  },
  {
    name: 'Investigación',
    head: 'Dr. Pedro Huamán Ríos',
    email: 'investigacion@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 106',
    icon: Building2,
  },
  {
    name: 'Biblioteca',
    head: 'Lic. Sandra López Mori',
    email: 'biblioteca@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 107',
    icon: Building2,
  },
  {
    name: 'Secretaría de Admisión',
    head: 'Téc. Luis Flores Tuesta',
    email: 'admision@iestpsuiza.edu.pe',
    phone: '(061) 280665 Anexo 108',
    icon: Building2,
  },
];

export default function Directorio() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Users className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Directorio Institucional
          </h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">
            Conoce a nuestros directivos y jefes de área. Estamos para servirte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.name}
                className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-text dark:text-white">{area.name}</h3>
                    <p className="text-xs text-slate-text/70 dark:text-dark-text/70 mt-0.5">{area.head}</p>
                    <div className="flex flex-col gap-1 mt-3 text-xs">
                      <a
                        href={`mailto:${area.email}`}
                        className="flex items-center gap-1.5 text-primary hover:text-primary-dark transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        {area.email}
                      </a>
                      <span className="flex items-center gap-1.5 text-slate-text/60 dark:text-dark-text/60">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        {area.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-text dark:text-white">Atención al Público</h3>
              <p className="text-xs text-slate-text/70 dark:text-dark-text/70 mt-0.5">
                Carretera Federico Basadre Km 5.700, Pucallpa<br />
                Lun - Vie: 8:00 AM - 4:00 PM | Sáb: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
