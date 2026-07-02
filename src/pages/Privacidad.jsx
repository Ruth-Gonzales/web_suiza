import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacidad() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Políticas de Privacidad
          </h1>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-3">
            Última actualización: Junio 2026
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">1. Datos que recopilamos</h2>
            <p>En IESTP Suiza Pucallpa, recopilamos información personal que nos proporcionas voluntariamente a través de nuestros formularios de contacto, preinscripción y suscripción al boletín informativo. Esto incluye nombres, apellidos, correo electrónico, número de teléfono y DNI.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">2. Uso de la información</h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Procesar solicitudes de información y preinscripción</li>
              <li>Enviar comunicaciones sobre admisión y eventos académicos</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">3. Cookies</h2>
            <p>Utilizamos cookies propias para garantizar el funcionamiento básico del sitio web. No utilizamos cookies de rastreo de terceros. Puedes configurar tu navegador para rechazar las cookies, aunque algunas funciones podrían verse afectadas.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">4. Protección de datos</h2>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, pérdida o destrucción. Sin embargo, ninguna transmisión por internet es 100% segura.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">5. Tus derechos</h2>
            <p>Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, contáctanos a través de <a href="mailto:privacidad@iestpsuiza.edu.pe" className="text-primary hover:underline">privacidad@iestpsuiza.edu.pe</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">6. Enlaces a terceros</h2>
            <p>Nuestro sitio puede contener enlaces a sitios externos. No nos responsabilizamos por las prácticas de privacidad de dichos sitios. Te recomendamos revisar sus políticas de privacidad.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-3">7. Contacto</h2>
            <p>Si tienes preguntas sobre esta política, contáctanos:</p>
            <p className="mt-2">
              <strong>IESTP Suiza Pucallpa</strong><br />
              Carretera Federico Basadre Km 5.700, Pucallpa<br />
              Correo: <a href="mailto:privacidad@iestpsuiza.edu.pe" className="text-primary hover:underline">privacidad@iestpsuiza.edu.pe</a><br />
              Teléfono: (061) 280665
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
