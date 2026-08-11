import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import VisualMedia from '@/components/VisualMedia';
import type { MediaAsset, VisualVariant } from '@/lib/content';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: VisualVariant;
  media?: MediaAsset;
  visualTitle?: string;
}

const heroBackgrounds: Record<VisualVariant, string> = {
  primary: 'bg-[radial-gradient(circle_at_16%_18%,rgba(232,117,18,0.24),transparent_28%),linear-gradient(135deg,#FFF5E9,#FFD9AE)]',
  secondary: 'bg-[radial-gradient(circle_at_82%_22%,rgba(101,75,199,0.28),transparent_30%),linear-gradient(135deg,#FFF5E9,#EDE9FF)]',
  community: 'bg-[radial-gradient(circle_at_16%_18%,rgba(232,117,18,0.18),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(101,75,199,0.16),transparent_28%),linear-gradient(135deg,#FFF5E9,#FFE5C7)]',
  academics: 'bg-[radial-gradient(circle_at_84%_18%,rgba(232,117,18,0.2),transparent_26%),linear-gradient(135deg,#171044,#2A1C68)]',
  leadership: 'bg-[radial-gradient(circle_at_16%_82%,rgba(139,114,232,0.32),transparent_30%),linear-gradient(135deg,#171044,#392781)]',
  admissions: 'bg-[radial-gradient(circle_at_84%_20%,rgba(255,255,255,0.46),transparent_24%),linear-gradient(135deg,#FFD394,#FFF0DC)]',
};

const visualTitles: Record<VisualVariant, string> = {
  primary: 'Strong foundations for growing minds.',
  secondary: 'Ideas deepen. Confidence grows.',
  community: 'Learning, belonging, and possibility.',
  academics: 'Question. Practise. Discover.',
  leadership: 'Leadership shaped by care.',
  admissions: 'The next step starts with a conversation.',
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  variant = 'community',
  media,
  visualTitle,
}: PageHeroProps) {
  const dark = variant === 'academics' || variant === 'leadership';

  return (
    <section
      className={[
        'relative -mt-24 overflow-hidden pt-24 md:-mt-28 md:pt-28',
        heroBackgrounds[variant],
        dark ? 'text-white' : 'text-primary-950',
      ].join(' ')}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.42)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-20 md:pb-24 md:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="min-w-0 animate-fade-in">
          <span
            className={
              dark
                ? 'section-kicker border-white/14 bg-white/10 text-accent-200 before:bg-accent-400'
                : 'section-kicker'
            }
          >
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[4.45rem]">
            {title}
          </h1>
          {subtitle && (
            <p className={['mt-6 max-w-2xl text-lg leading-relaxed md:text-xl', dark ? 'text-white/72' : 'text-primary-950/68'].join(' ')}>
              {subtitle}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="button-primary mt-8">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="min-w-0 animate-scale-in">
          <VisualMedia
            variant={variant}
            eyebrow={eyebrow}
            title={visualTitle ?? visualTitles[variant]}
            image={media}
            aspectClassName="aspect-[5/4] sm:min-h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}