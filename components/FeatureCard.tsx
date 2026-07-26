import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  icon?: LucideIcon;
  dark?: boolean;
}

export default function FeatureCard({ title, description, href, ctaLabel = 'Read more', icon: Icon, dark = false }: FeatureCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {Icon && (
          <div className={`flex h-14 w-14 items-center justify-center rounded-[1.4rem] ${dark ? 'bg-white/10 text-accent-400' : 'bg-primary-100/70 text-primary-700'}`}>
            <Icon className="h-6 w-6" strokeWidth={1.55} />
          </div>
        )}
      </div>
      <h3 className={`mt-8 text-2xl font-semibold tracking-[-0.012em] ${dark ? 'text-white' : 'text-card-foreground'}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-relaxed sm:text-base ${dark ? 'text-white/70' : 'text-muted'}`}>{description}</p>
      {href && (
        <span className={`button-link mt-6 ${dark ? 'text-accent-400 hover:text-white' : ''}`}>
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${dark ? 'dark-panel' : 'surface-panel'} group block rounded-[2rem] p-6 sm:p-7`}>
        {content}
      </Link>
    );
  }

  return <article className={`${dark ? 'dark-panel' : 'surface-panel'} rounded-[2rem] p-6 sm:p-7`}>{content}</article>;
}



