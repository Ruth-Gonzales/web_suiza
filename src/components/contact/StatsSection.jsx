import { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, GraduationCap, Handshake } from 'lucide-react';

const statIcons = [Users, Award, Clock, GraduationCap, Handshake];

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection({ t }) {
  const data = t.contact?.stats || {};
  const stats = [
    { icon: statIcons[0], end: 2000, label: data.students, suffix: '+' },
    { icon: statIcons[1], end: 3500, label: data.graduates, suffix: '+' },
    { icon: statIcons[2], end: 49, label: data.years, suffix: '' },
    { icon: statIcons[3], end: 11, label: data.programs, suffix: '' },
    { icon: statIcons[4], end: 30, label: data.agreements, suffix: '+' },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-10 text-center">
        {data.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary dark:text-secondary" />
              </div>
              <div className="text-xl md:text-2xl font-extrabold text-primary dark:text-secondary">
                <Counter end={stat.end} />
                {stat.suffix}
              </div>
              <p className="text-[10px] md:text-xs text-slate-text/60 dark:text-dark-text/60 mt-1 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
