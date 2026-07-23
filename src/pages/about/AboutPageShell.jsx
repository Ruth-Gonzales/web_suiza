import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import useInstitutionalTexture from '../../hooks/useInstitutionalTexture';

export default function AboutPageShell({
  t,
  title,
  breadcrumb,
  image,
  children,

  // Configuración opcional del banner moderno
  variant = 'default',
  eyebrow = 'Bienvenidos a',
  accentTitle,
  description,
  features = [],
  ctaText,
  ctaHref = '#contenido-principal',

  // Estas opciones siguen activadas en las demás páginas
  showBreadcrumb = true,
  showBackButton = true,
}) {
  useInstitutionalTexture();
  const isAcademic = variant === 'academic';

  return (
    <div className="relative overflow-x-clip">
      {/* =====================================================
          BANNER MODERNO DE GESTIÓN ACADÉMICA
          Es ancho y solo aparece una vez
      ====================================================== */}
      {isAcademic && (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#020d30] min-h-[520px] md:min-h-0 md:h-[420px]">
          {/* Imagen de fondo */}
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A41] via-primary to-[#0a3d91]" />
          )}

          {/* Gradiente oscuro a los lados, azul difuminado al centro */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020d30]/80 via-primary/50 to-[#020d30]/80" />

          {/* Gradiente inferior suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020d30]/60 via-transparent to-[#020d30]/30" />

          {/* Esfera azul difuminada al centro */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[100px]" />

          <div className="absolute left-8 top-10 hidden grid-cols-5 gap-3 opacity-20 md:grid">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="h-1 w-1 rounded-full bg-white"
              />
            ))}
          </div>

          {/* Contenido del banner */}
          <div className="relative z-20 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-5 py-10 md:min-h-0 md:h-full md:px-8 md:py-12">
            {/* Lado izquierdo */}
            <div className="flex max-w-2xl flex-col justify-center">
              <div className="mb-5 inline-flex items-center gap-3 self-start">
                <span className="h-[3px] w-8 rounded-full bg-yellow-400" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                  {eyebrow}
                </span>
              </div>

              <h1 className="text-4xl font-black leading-[1.05] text-white drop-shadow-lg sm:text-5xl lg:text-[46px]">
                {title}
              </h1>

              {accentTitle && (
                <p className="mt-2 text-3xl font-black leading-tight text-[#3197ff] sm:text-4xl lg:text-[37px]">
                  {accentTitle}
                </p>
              )}

              <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-blue-100/85 md:text-[15px]">
                {description ||
                  t?.aboutPage?.location ||
                  'IESTP Suiza — Pucallpa, Ucayali'}
              </p>

              {ctaText && (
                <a
                  href={ctaHref}
                  className="mt-5 inline-flex self-start items-center gap-2 rounded-lg bg-[#087cf0] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl"
                >
                  {ctaText}

                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          CONTENEDOR GENERAL
      ====================================================== */}
      <div
        className={`relative mx-auto max-w-7xl px-4 md:px-8 ${
          isAcademic ? 'py-0' : 'py-6'
        }`}
      >
        {/* Banner tradicional de las demás páginas */}
        {!isAcademic && (
          <div className="relative mb-8 h-48 w-full overflow-hidden rounded-[2rem] bg-primary shadow-lg md:h-64">
            {image ? (
              <>
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001A41]/95 via-primary/90 to-transparent" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001A41]/95 to-primary/80 dark:from-dark-bg/90 dark:to-dark-bg/60" />

                <div className="absolute -right-10 -top-10 z-10 h-48 w-48 rounded-full bg-secondary/30 blur-3xl" />

                <div className="absolute -bottom-10 -left-10 z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              </>
            )}

            <div className="relative z-20 flex h-full flex-col justify-center px-8 md:px-12">
              <h1 className="text-3xl font-extrabold text-white drop-shadow-lg md:text-5xl">
                {title}
              </h1>

              <p className="mt-2 max-w-2xl text-sm font-medium text-white/80 md:text-base">
                {t?.aboutPage?.location ||
                  'IESTP Suiza — Pucallpa, Ucayali'}
              </p>
            </div>
          </div>
        )}

        {/* Breadcrumb opcional */}
        {showBreadcrumb && (
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-slate-text/60 dark:text-dark-text/60 md:text-sm">
            <Link
              to="/"
              className="flex items-center gap-1 transition-colors hover:text-primary dark:hover:text-secondary"
            >
              <Home className="h-3.5 w-3.5" />

              <span className="hidden sm:inline">
                {t?.aboutPage?.breadcrumb?.home || 'Inicio'}
              </span>
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <Link
              to="/about"
              className="transition-colors hover:text-primary dark:hover:text-secondary"
            >
              {t?.aboutPage?.breadcrumb?.about || 'Nosotros'}
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="font-semibold text-primary dark:text-secondary">
              {breadcrumb}
            </span>
          </nav>
        )}

        {/* Contenido */}
        <div id="contenido-principal" className="relative">
          {children}
        </div>

        {/* Botón regresar opcional */}
        {showBackButton && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 dark:bg-primary/20 dark:text-secondary dark:hover:bg-secondary dark:hover:text-dark-bg"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

              {t?.aboutPage?.breadcrumb?.backToAbout ||
                'Volver a Nosotros'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}