import { useState } from 'react';
import { Search, User, CheckCircle, XCircle, Clock, Award, Trophy, Filter } from 'lucide-react';

const careers = [
  'Desarrollo de Sistemas de Información',
  'Enfermería Técnica',
  'Mecatrónica Automotriz',
  'Producción Agropecuaria',
  'Manejo Forestal',
  'Contabilidad',
  'Administración de Empresas',
  'Construcción Civil',
  'Electricidad Industrial',
  'Administración de Operaciones Turísticas',
  'Asistencia Administrativa'
];

const mockResults = {
  '12345678': { nombre: 'Carlos Alejandro Ríos Paredes', carrera: 'Desarrollo de Sistemas de Información', estado: 'admitido', puntaje: 87, modalidad: 'Ingreso Ordinario' },
  '87654321': { nombre: 'María Esther Torres López', carrera: 'Enfermería Técnica', estado: 'pendiente', puntaje: null, modalidad: 'Ingreso Ordinario' },
  '45678912': { nombre: 'Pedro Antonio Huamán Silva', carrera: 'Mecatrónica Automotriz', estado: 'no_admitido', puntaje: 52, modalidad: 'Primeros Puestos' },
  '11111111': { nombre: 'Lucía Fernanda García Rojas', carrera: 'Desarrollo de Sistemas de Información', estado: 'admitido', puntaje: 94, modalidad: 'Ingreso Ordinario' },
  '22222222': { nombre: 'Jorge Luis Salazar Castro', carrera: 'Desarrollo de Sistemas de Información', estado: 'admitido', puntaje: 91, modalidad: 'Ingreso Ordinario' },
  '33333333': { nombre: 'Ana Patricia Quispe Huamán', carrera: 'Desarrollo de Sistemas de Información', estado: 'admitido', puntaje: 88, modalidad: 'Ingreso Ordinario' },
  '44444444': { nombre: 'Roberto Carlos Paredes Díaz', carrera: 'Desarrollo de Sistemas de Información', estado: 'no_admitido', puntaje: 48, modalidad: 'Ingreso Ordinario' },
  '55555555': { nombre: 'Carmen Elena Saldaña Pisco', carrera: 'Enfermería Técnica', estado: 'admitido', puntaje: 93, modalidad: 'Ingreso Ordinario' },
  '66666666': { nombre: 'María Eugenia Torres Vega', carrera: 'Enfermería Técnica', estado: 'admitido', puntaje: 90, modalidad: 'Ingreso Ordinario' },
  '77777777': { nombre: 'Diana Carolina López Mendoza', carrera: 'Enfermería Técnica', estado: 'admitido', puntaje: 86, modalidad: 'Ingreso Ordinario' },
  '88888888': { nombre: 'Rosa María Castro Sánchez', carrera: 'Enfermería Técnica', estado: 'no_admitido', puntaje: 45, modalidad: 'Ingreso Ordinario' },
  '99999999': { nombre: 'Raúl Andrés Vega Tello', carrera: 'Mecatrónica Automotriz', estado: 'admitido', puntaje: 91, modalidad: 'Ingreso Ordinario' },
  '10101010': { nombre: 'Miguel Ángel Torres Ríos', carrera: 'Mecatrónica Automotriz', estado: 'admitido', puntaje: 88, modalidad: 'Ingreso Ordinario' },
  '12121212': { nombre: 'Jhonatan Smith Paredes Ruiz', carrera: 'Mecatrónica Automotriz', estado: 'admitido', puntaje: 85, modalidad: 'Ingreso Ordinario' },
  '13131313': { nombre: 'Luis Enrique Ramírez Paucar', carrera: 'Producción Agropecuaria', estado: 'admitido', puntaje: 84, modalidad: 'Ingreso Ordinario' },
  '14141414': { nombre: 'María Isabel Quispe Nina', carrera: 'Producción Agropecuaria', estado: 'admitido', puntaje: 81, modalidad: 'Ingreso Ordinario' },
  '15151515': { nombre: 'Pedro Pablo Saavedra Martínez', carrera: 'Producción Agropecuaria', estado: 'no_admitido', puntaje: 39, modalidad: 'Ingreso Ordinario' },
  '16161616': { nombre: 'Rosa Elena Huamán Lazo', carrera: 'Manejo Forestal', estado: 'admitido', puntaje: 83, modalidad: 'Ingreso Ordinario' },
  '17171717': { nombre: 'Wilmer Augusto García Torres', carrera: 'Manejo Forestal', estado: 'admitido', puntaje: 80, modalidad: 'Ingreso Ordinario' },
  '18181818': { nombre: 'Diana Paola Salazar López', carrera: 'Contabilidad', estado: 'admitido', puntaje: 89, modalidad: 'Ingreso Ordinario' },
  '19191919': { nombre: 'Luis Alberto Ríos Pacheco', carrera: 'Contabilidad', estado: 'admitido', puntaje: 86, modalidad: 'Ingreso Ordinario' },
  '20202020': { nombre: 'Maritza Soledad Vega Castro', carrera: 'Contabilidad', estado: 'no_admitido', puntaje: 41, modalidad: 'Ingreso Ordinario' },
  '21212121': { nombre: 'Jorge Antonio Silva Morales', carrera: 'Administración de Empresas', estado: 'admitido', puntaje: 92, modalidad: 'Ingreso Ordinario' },
  '23232323': { nombre: 'Karla Patricia Mendoza Ríos', carrera: 'Administración de Empresas', estado: 'admitido', puntaje: 88, modalidad: 'Ingreso Ordinario' },
  '24242424': { nombre: 'Raúl Fernando Paredes Gómez', carrera: 'Construcción Civil', estado: 'admitido', puntaje: 95, modalidad: 'Ingreso Ordinario' },
  '25252525': { nombre: 'Óscar Augusto Torres Rengifo', carrera: 'Construcción Civil', estado: 'admitido', puntaje: 90, modalidad: 'Ingreso Ordinario' },
  '26262626': { nombre: 'Luis Miguel Castro Villanueva', carrera: 'Construcción Civil', estado: 'admitido', puntaje: 87, modalidad: 'Ingreso Ordinario' },
  '27272727': { nombre: 'José Daniel Ramírez García', carrera: 'Electricidad Industrial', estado: 'admitido', puntaje: 86, modalidad: 'Ingreso Ordinario' },
  '28282828': { nombre: 'Gabriel Alejandro Huertas López', carrera: 'Electricidad Industrial', estado: 'admitido', puntaje: 83, modalidad: 'Ingreso Ordinario' },
  '29292929': { nombre: 'Carmen Rosa Pisco Salazar', carrera: 'Administración de Operaciones Turísticas', estado: 'admitido', puntaje: 82, modalidad: 'Ingreso Ordinario' },
  '30303030': { nombre: 'María José García Torres', carrera: 'Administración de Operaciones Turísticas', estado: 'admitido', puntaje: 79, modalidad: 'Ingreso Ordinario' },
  '31313131': { nombre: 'Lucía Isabel Nina Quispe', carrera: 'Asistencia Administrativa', estado: 'admitido', puntaje: 85, modalidad: 'Ingreso Ordinario' },
  '32323232': { nombre: 'Pedro José Lazo Fernández', carrera: 'Asistencia Administrativa', estado: 'admitido', puntaje: 82, modalidad: 'Ingreso Ordinario' },
};

export default function Resultados() {
  const [dniInput, setDniInput] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState('');
  const [filterCareer, setFilterCareer] = useState('Todas');

  const admitted = Object.values(mockResults).filter(r => r.estado === 'admitido');
  const filteredAdmitted = filterCareer === 'Todas'
    ? admitted
    : admitted.filter(r => r.carrera === filterCareer);

  const handleSearch = (e) => {
    e.preventDefault();
    const dni = dniInput.trim();
    if (!dni || dni.length < 8) {
      setTrackingError('Ingresa un DNI válido (8 dígitos)');
      setTrackingResult(null);
      return;
    }
    setTrackingLoading(true);
    setTrackingError('');
    setTrackingResult(null);
    setTimeout(() => {
      const result = mockResults[dni];
      if (result) {
        setTrackingResult(result);
      } else {
        setTrackingError('No se encontraron resultados para este DNI. Verifica el número ingresado.');
      }
      setTrackingLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Resultados de Admisión</h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-3">Ingresantes al semestre 2026-II del IESTP Suiza.</p>
      </div>

      {/* Búsqueda por DNI */}
      <div className="mb-12 bg-white dark:bg-dark-card rounded-2xl border border-primary/10 dark:border-dark-border/40 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Search className="w-6 h-6" />
            <h3 className="text-xl font-bold">Consulta tu resultado por DNI</h3>
          </div>
          <p className="text-sm text-white/80">Ingresa tu número de DNI para saber si fuiste admitido.</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-text/40 dark:text-dark-text/40" />
              <input
                type="text"
                value={dniInput}
                onChange={(e) => { setDniInput(e.target.value.replace(/\D/g, '').slice(0, 8)); setTrackingError(''); }}
                placeholder="Ingresa tu DNI (8 dígitos)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/10 dark:border-dark-border/40 bg-slate-light/50 dark:bg-dark-border/20 text-slate-text dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={trackingLoading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 justify-center cursor-pointer"
            >
              {trackingLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Consultando...
                </span>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Consultar
                </>
              )}
            </button>
          </form>

          {trackingError && (
            <div className="mt-4 p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-2">
              <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{trackingError}</span>
            </div>
          )}

          {trackingResult && (
            <div className="mt-4 space-y-4 animate-fadeInUp">
              <div className={`p-5 rounded-xl border ${
                trackingResult.estado === 'admitido'
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30'
                  : trackingResult.estado === 'pendiente'
                  ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30'
                  : 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  {trackingResult.estado === 'admitido' ? <CheckCircle className="w-7 h-7 text-emerald-500" />
                    : trackingResult.estado === 'pendiente' ? <Clock className="w-7 h-7 text-amber-500" />
                    : <XCircle className="w-7 h-7 text-rose-500" />}
                  <div>
                    <p className="text-lg font-extrabold text-slate-text dark:text-white">{trackingResult.nombre}</p>
                    <span className={`text-sm font-bold ${
                      trackingResult.estado === 'admitido' ? 'text-emerald-500'
                        : trackingResult.estado === 'pendiente' ? 'text-amber-500'
                        : 'text-rose-500'
                    }`}>
                      {trackingResult.estado === 'admitido' ? '✓ ADMITIDO'
                        : trackingResult.estado === 'pendiente' ? '⏳ PENDIENTE'
                        : '✗ NO ADMITIDO'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-white/60 dark:bg-dark-bg/30">
                    <span className="text-[10px] font-semibold text-slate-text/50 uppercase">Carrera</span>
                    <p className="font-bold text-slate-text dark:text-white mt-0.5">{trackingResult.carrera}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/60 dark:bg-dark-bg/30">
                    <span className="text-[10px] font-semibold text-slate-text/50 uppercase">Modalidad</span>
                    <p className="font-bold text-slate-text dark:text-white mt-0.5">{trackingResult.modalidad}</p>
                  </div>
                  {trackingResult.puntaje != null && (
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-dark-bg/30">
                      <span className="text-[10px] font-semibold text-slate-text/50 uppercase">Puntaje</span>
                      <p className={`font-bold mt-0.5 ${trackingResult.puntaje >= 70 ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {trackingResult.puntaje}/100
                      </p>
                    </div>
                  )}
                </div>
                {trackingResult.estado === 'admitido' && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold">¡Felicidades! Acércate a formalizar tu matrícula.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filtro por carrera */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Filter className="w-4 h-4 text-slate-text/50 dark:text-dark-text/50" />
        <span className="text-xs font-semibold text-slate-text/60 dark:text-dark-text/60 mr-1">Filtrar por carrera:</span>
        <button
          onClick={() => setFilterCareer('Todas')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            filterCareer === 'Todas'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-slate-light dark:bg-dark-border/50 text-slate-text dark:text-dark-text hover:bg-primary/10 hover:text-primary'
          }`}
        >
          Todas
        </button>
        {careers.map(c => (
          <button
            key={c}
            onClick={() => setFilterCareer(c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterCareer === c
                ? 'bg-primary text-white shadow-sm'
                : 'bg-slate-light dark:bg-dark-border/50 text-slate-text dark:text-dark-text hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Lista de ingresantes */}
      <div className="space-y-4">
        {filteredAdmitted.length > 0 ? (
          filteredAdmitted.map((r, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shrink-0">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-text dark:text-white truncate">{r.nombre}</h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 truncate">{r.carrera}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-extrabold text-emerald-500">{r.puntaje}</div>
                <div className="text-[10px] text-slate-text/40 dark:text-dark-text/40">puntos</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-text/50 dark:text-dark-text/50 text-sm">
            No hay ingresantes registrados para esta carrera.
          </div>
        )}
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 text-center">
        <p className="text-xs text-slate-text/60 dark:text-dark-text/60">
          Resultados oficiales del semestre 2026-II. Para consultas, acércate a nuestras instalaciones.
        </p>
      </div>
    </div>
  );
}
