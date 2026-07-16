import LocationSection from '../components/contact/LocationSection';
import WhyChooseUs from '../components/contact/WhyChooseUs';
import StatsSection from '../components/contact/StatsSection';
import TestimonialsCarousel from '../components/contact/TestimonialsCarousel';
import VisitSection from '../components/contact/VisitSection';
import ContactForm from '../components/contact/ContactForm';
import WhatsAppHighlight from '../components/contact/WhatsAppHighlight';
import SocialLinks from '../components/contact/SocialLinks';
import WhatsAppButton from '../components/contact/WhatsAppButton';
import useInstitutionalTexture from '../hooks/useInstitutionalTexture';

export default function ContactPage({ t }) {
  useInstitutionalTexture();
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
      <LocationSection t={t} />
      <WhyChooseUs t={t} />
      <StatsSection t={t} />
      <TestimonialsCarousel t={t} />
      <VisitSection t={t} />
      <ContactForm t={t} />
      <WhatsAppHighlight t={t} />
      <SocialLinks t={t} />
      <WhatsAppButton t={t} />
    </div>
  );
}
