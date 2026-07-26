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
    <section className="relative -mt-24 overflow-hidden bg-[#FFF5E9] pt-24 text-primary-950 md:-mt-28 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,117,18,0.13),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(101,75,199,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.82)_0%,transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 animate-fade-in md:pb-24 md:pt-28">
        <span className="section-kicker">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[4.7rem]">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{subtitle}</p>}
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



