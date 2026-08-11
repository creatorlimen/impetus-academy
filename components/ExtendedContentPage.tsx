import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { PageSectionSet, VisualVariant } from '@/lib/content';

interface ExtendedContentPageProps {
  content: PageSectionSet;
  ctaLabel?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

function resolveVisualVariant(content: PageSectionSet): VisualVariant {
  if (content.visualVariant) return content.visualVariant;

  const context = (content.eyebrow + ' ' + content.heroTitle).toLowerCase();

  if (context.includes('primary')) return 'primary';
  if (context.includes('secondary')) return 'secondary';
  if (context.includes('admission')) return 'admissions';
  if (context.includes('academic') || context.includes('curriculum')) return 'academics';
  if (context.includes('founder') || context.includes('proprietor')) return 'leadership';

  return 'community';
}

export default function ExtendedContentPage({
  content,
  ctaLabel,
  ctaHref,
  children,
}: ExtendedContentPageProps) {
  const variant = resolveVisualVariant(content);

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.heroTitle}
        subtitle={content.summary}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        variant={variant}
        media={content.media}
      />
      <Section align="left">
        <div
          className={
            content.aside
              ? 'grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)]'
              : 'grid gap-6'
          }
        >
          <div className="grid gap-5">
            {content.sections.map((section, index) => (
              <article
                key={section.title}
                className={[
                  'relative overflow-hidden rounded-[2.35rem] border p-6 sm:p-8',
                  index % 3 === 1
                    ? 'border-accent-500/16 bg-accent-50'
                    : 'border-primary-950/10 bg-white shadow-[0_16px_48px_rgba(23,16,68,0.06)]',
                ].join(' ')}
              >
                <span className="font-label text-[0.62rem] uppercase tracking-[0.15em] text-accent-700">
                  0{index + 1}
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em] text-card-foreground">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="mt-4 text-base leading-[1.85] text-muted">
                    {section.body}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.25rem] border border-primary-950/8 bg-white/74 px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
            {children}
          </div>

          {content.aside && (
            <aside className="violet-panel h-fit rounded-[2.35rem] p-6 sm:p-8 lg:sticky lg:top-32">
              {content.aside.eyebrow && (
                <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-accent-200">
                  {content.aside.eyebrow}
                </p>
              )}
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em] text-white">
                {content.aside.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {content.aside.body}
              </p>
              {content.aside.ctaLabel && content.aside.ctaHref && (
                <Link href={content.aside.ctaHref} className="button-on-dark mt-6">
                  {content.aside.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </aside>
          )}
        </div>
      </Section>
    </>
  );
}