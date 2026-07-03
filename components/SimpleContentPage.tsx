import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { PageBrief } from '@/lib/api';

interface SimpleContentPageProps {
  brief: PageBrief;
  ctaLabel?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

export default function SimpleContentPage({ brief, ctaLabel = 'Contact the School', ctaHref = '/contact', children }: SimpleContentPageProps) {
  return (
    <>
      <PageHero eyebrow={brief.eyebrow} title={brief.title} subtitle={brief.summary} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      <Section align="left">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.44fr)]">
          <article className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <div className="space-y-5 text-base leading-[1.9] text-muted md:text-lg">
              {brief.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {children}
          </article>
          <aside className="dark-panel h-fit rounded-[2.2rem] p-6 text-white sm:p-7">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/48">Content status</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">No silent invention.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              This page uses supplied copy and marks uncertain details for confirmation before final publication.
            </p>
            {brief.confirmationNeeded && (
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
                {brief.confirmationNeeded.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            )}
            <Link href="/contact" className="button-secondary mt-6">
              Confirm details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}



