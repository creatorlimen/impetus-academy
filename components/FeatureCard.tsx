import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  icon?: LucideIcon;
  visual?: React.ReactNode;
  dark?: boolean;
}

export default function FeatureCard({
  title,
  description,
  href,
  ctaLabel = 'Read more',
  icon: Icon,
  visual,
  dark = false,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[22px] border-accent-300/12 transition-transform duration-500 group-hover:scale-110" />
      <div className="relative">
        {visual ? (
          <div className="mb-7 overflow-hidden rounded-[1.75rem]">{visual}</div>
        ) : Icon ? (
          <div
            className={[
              'flex h-14 w-14 items-center justify-center rounded-[1.4rem]',
              dark ? 'bg-white/10 text-accent-200' : 'bg-accent-50 text-accent-700',
            ].join(' ')}
          >
            <Icon className="h-6 w-6" strokeWidth={1.55} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className={['h-3 w-9 rounded-full', dark ? 'bg-accent-300' : 'bg-accent-400'].join(' ')} />
            <span className={['h-3 w-3 rounded-full', dark ? 'bg-primary-300' : 'bg-primary-300'].join(' ')} />
          </div>
        )}

        <h3 className={['mt-8 text-2xl font-semibold tracking-[-0.012em]', dark ? 'text-white' : 'text-card-foreground'].join(' ')}>
          {title}
        </h3>
        <p className={['mt-3 text-sm leading-relaxed sm:text-base', dark ? 'text-white/68' : 'text-muted'].join(' ')}>
          {description}
        </p>
        {href && (
          <span className={['button-link mt-6', dark ? 'text-accent-200 hover:text-white' : ''].join(' ')}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </>
  );

  const cardClass = [
    dark ? 'violet-panel' : 'surface-panel',
    'group relative block overflow-hidden rounded-[2.25rem] p-6 transition-transform hover:-translate-y-1 sm:p-7',
  ].join(' ');

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <article className={cardClass}>{content}</article>;
}