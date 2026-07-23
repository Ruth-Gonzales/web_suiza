import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import FooterBubbles from './FooterParticles';
import './Footer.css';

export default function Footer({ t }) {
  return (
    <footer className="footer-wrapper">
      {/* Top shape — diagonal cuts (visual only, does not touch the Shipibo pattern) */}
      <div className="footer-shape" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="footer-shape-svg"
        >
          <defs>
            <linearGradient id="footerShapeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#061A3A" />
              <stop offset="100%" stopColor="#0B2A66" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L110,0 Q130,40 150,60 L1290,60 Q1310,40 1330,0 L1440,0 L1440,80 L0,80 Z"
            fill="url(#footerShapeGrad)"
          />
        </svg>
      </div>

      {/* Main blue body */}
      <div className="footer-body">
        <FooterBubbles />
        <div className="footer-inner">
          <div className="footer-grid">

            {/* ── Column 1: Brand ── */}
            <div className="footer-col-brand">
              <div className="footer-logo-row">
                <div className="footer-logo-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-logo-icon">
                    <path d="M22 10l-10-5L2 10l10 5 10-5z" />
                    <path d="M6 12v5c0 0 2.5 3 6 3s6-3 6-3v-5" />
                    <line x1="22" y1="10" x2="22" y2="16" />
                  </svg>
                </div>
                <div className="footer-brand-text">
                  <span className="footer-brand-name">IESTP SUIZA</span>
                  <span className="footer-brand-sub">EXCELENCIA ACADÉMICA</span>
                </div>
              </div>

              <p className="footer-desc">{t.hero.subtitle}</p>

              <div className="footer-social">
                <a
                  href="https://facebook.com/iestpsuizaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@iestpsuiza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.163c-.272-.98-1.071-1.762-2.075-2.02C19.57 3.545 12 3.545 12 3.545s-7.57 0-9.423.598c-1.004.258-1.803 1.04-2.075 2.02C0 7.978 0 12.01 0 12.01s0 4.032.502 6.008c.272.98 1.071 1.762 2.075 2.02 1.853.598 9.423.598 9.423.598s7.57 0 9.423-.598c1.004-.258 1.803-1.04 2.075-2.02.502-1.976.502-6.008.502-6.008s0-4.032-.502-6.008zM9.545 15.568V8.452L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/iestpsuiza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="mailto:suiza@iestpsuiza.edu.pe"
                  className="footer-social-btn"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ── Column 2: Institución ── */}
            <div className="footer-col">
              <h3 className="footer-heading">Institución</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/about" className="footer-link">Nosotros</Link>
                </li>
                <li>
                  <Link to="/about/vision-mision" className="footer-link">Misión y Visión</Link>
                </li>
                <li>
                  <Link to="/about/organigrama" className="footer-link">Autoridades</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">Normativa</Link>
                </li>
              </ul>
            </div>

            {/* ── Column 3: Programas de Estudio ── */}
            <div className="footer-col">
              <h3 className="footer-heading">Programas de Estudio</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/careers" className="footer-link">Desarrollo de Sistemas</Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-link">Enfermería Técnica</Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-link">Mecatrónica Automotriz</Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-link">Manejo Forestal</Link>
                </li>
              </ul>
            </div>

            {/* ── Column 4: Enlaces Rápidos ── */}
            <div className="footer-col">
              <h3 className="footer-heading">Enlaces Rápidos</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/admission" className="footer-link">Admisión y Matrícula</Link>
                </li>
                <li>
                  <Link to="/procedures" className="footer-link">Trámites</Link>
                </li>
                <li>
                  <Link to="/transparency" className="footer-link">Transparencia</Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">Bolsa de Trabajo</Link>
                </li>
              </ul>
            </div>

            {/* ── Column 5: Contacto ── */}
            <div className="footer-col">
              <h3 className="footer-heading">Contacto</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>Carretera Federico Basadre Km 5.700, Callería, Pucallpa, Ucayali, Perú</span>
                </div>
                <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <a href="tel:+5161280665" className="footer-link">061-280665</a>
                </div>
                <div className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <a href="mailto:suiza@iestpsuiza.edu.pe" className="footer-link">suiza@iestpsuiza.edu.pe</a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} IESTP Suiza Pucallpa. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <Link to="/contact" className="footer-bottom-link">Política de Privacidad</Link>
              <Link to="/transparency" className="footer-bottom-link">Transparencia Pública</Link>
              <Link to="/services" className="footer-bottom-link">Aula Virtual</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
