interface SectionProps {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
  tone?: 'default' | 'warm' | 'violet';
}

const toneClasses = {
  default: '',
  warm: 'bg-surface/70',
  violet: 'bg-primary-950 text-white',
};

export default function Section({
  title,
  eyebrow,
  subtitle,
  children,
  className = '',
  align = 'center',
  tone = 'default',
}: SectionProps) {
  const centered = align === 'center';
  const dark = tone === 'violet';
  const headerClass = centered ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl';
  const titleClass = centered ? 'text-center' : 'text-left';
  const subtitleClass = centered ? 'mx-auto text-center' : 'text-left';

  return (
    <section className={['relative overflow-hidden px-6 py-20 md:py-24', toneClasses[tone], className].join(' ')}>
      {dark && (
        <>
          <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-primary-500/18 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-500/12 blur-3xl" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl animate-fade-in">
        {title && (
          <div className={['mb-12', headerClass].join(' ')}>
            {eyebrow && (
              <span
                className={
                  dark
                    ? 'section-kicker border-white/14 bg-white/10 text-accent-200 before:bg-accent-400'
                    : 'section-kicker'
                }
              >
                {eyebrow}
              </span>
            )}
            <h2
              className={[
                'mt-6 text-4xl font-semibold tracking-[-0.015em] md:text-[3.1rem]',
                dark ? 'text-white' : 'text-card-foreground',
                titleClass,
              ].join(' ')}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={[
                  'mt-5 max-w-2xl text-lg leading-relaxed md:text-xl',
                  dark ? 'text-white/72' : 'text-muted',
                  subtitleClass,
                ].join(' ')}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}