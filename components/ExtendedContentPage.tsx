import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { PageSectionSet } from '@/lib/content';

interface ExtendedContentPageProps {
  content: PageSectionSet;
  ctaLabel?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

export default function ExtendedContentPage({ content, ctaLabel, ctaHref, children }: ExtendedContentPageProps) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.heroTitle}
        subtitle={content.summary}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />
      <Section align="left">
        <div className={content.aside ? 'grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)]' : 'grid gap-6'}>
          <div className="grid gap-5">
            {content.sections.map((section) => (
              <article key={section.title} className="surface-panel rounded-[2rem] p-6 sm:p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.012em] text-card-foreground">{section.title}</h2>
                {section.body && <p className="mt-4 text-base leading-[1.85] text-muted">{section.body}</p>}
                {section.items && (
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    {section.items.map((item) => (
                      <li key={item} className="rounded-[1.2rem] border border-primary-100/70 bg-white/62 px-4 py-3">
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
            <aside className="dark-panel h-fit rounded-[2rem] p-6 text-white sm:p-7">
              {content.aside.eyebrow && (
                <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-white/48">
                  {content.aside.eyebrow}
                </p>
              )}
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em]">{content.aside.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/72">{content.aside.body}</p>
              {content.aside.ctaLabel && content.aside.ctaHref && (
                <Link href={content.aside.ctaHref} className="button-secondary mt-6">
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
