interface SectionProps {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
}

export default function Section({
  title,
  eyebrow,
  subtitle,
  children,
  className = '',
  align = 'center',
}: SectionProps) {
  const headerClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl';
  const titleClass = align === 'center' ? 'text-center' : 'text-left';
  const subtitleClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <section className={`px-6 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl animate-fade-in">
        {title && (
          <div className={`mb-12 ${headerClass}`}>
            {eyebrow && <span className="section-kicker">{eyebrow}</span>}
            <h2 className={`mt-6 text-4xl font-semibold tracking-[-0.015em] text-card-foreground md:text-[3.1rem] ${titleClass}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl ${subtitleClass}`}>
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



