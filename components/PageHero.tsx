import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({ eyebrow, title, subtitle, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative -mt-24 overflow-hidden bg-primary-950 pt-24 text-white md:-mt-28 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,160,82,0.2),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(29,107,86,0.18),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 animate-fade-in md:pb-24 md:pt-28">
        <span className="section-kicker border-white/10 bg-white/10 text-white/72 before:bg-accent-300">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-[4.7rem]">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-100/84 md:text-xl">{subtitle}</p>}
        {ctaLabel && ctaHref && (
          <Link href={ctaHref} className="button-primary mt-8">
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}



