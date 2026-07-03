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
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/48">Page note</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Careful with the details.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              This page stays close to confirmed school information. Details still being checked are listed separately.
            </p>
            {brief.confirmationNeeded && (
              <p className="mt-5 text-sm leading-relaxed text-white/70">A few details are still being checked with the school team before final publication.</p>
            )}
            <Link href="/contact" className="button-secondary mt-6">
              Ask a question
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
