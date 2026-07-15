import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const cardData = (info) => [
  { icon: Phone, label: info.phone?.label, value: info.phone?.value, href: 'tel:+51061280665' },
  { icon: Mail, label: info.email?.label, value: info.email?.value, href: 'mailto:suiza@iestpsuiza.edu.pe' },
  { icon: Clock, label: info.hours?.label, value: info.hours?.value },
  { icon: MapPin, label: info.address?.label, value: info.address?.value },
];

export default function ContactCards({ t }) {
  const info = t.contact?.info || {};
  const cards = cardData(info);

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-8 text-center">
        {info.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const Wrapper = card.href ? 'a' : 'div';
          const wrapperProps = card.href ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {};

          return (
            <Wrapper
              key={idx}
              {...wrapperProps}
              className="group rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-dark-bg transition-all duration-300">
                <Icon className="w-5 h-5 text-primary dark:text-secondary group-hover:text-white dark:group-hover:text-dark-bg transition-colors" />
              </div>
              <p className="text-[10px] font-bold text-primary/60 dark:text-secondary/60 uppercase tracking-wider mb-1">
                {card.label}
              </p>
              <p className="text-sm font-semibold text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {card.value}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
