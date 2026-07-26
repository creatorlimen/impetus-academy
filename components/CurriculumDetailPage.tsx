import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { CurriculumPageContent } from '@/lib/content';

export default function CurriculumDetailPage({ content }: { content: CurriculumPageContent }) {
  const admissionsHref = content.division === 'primary' ? '/primary-school/admissions' : '/secondary-school/admissions';

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.summary} ctaLabel="Begin Admissions Enquiry" ctaHref={admissionsHref} />
      <Section title="A clear look at the curriculum framework." align="left">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.4fr)]">
          <div className="grid gap-5">
            {content.sections.map((section) => (
              <article key={section.title} className="surface-panel rounded-[2rem] p-6 sm:p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-card-foreground">{section.title}</h2>
                {section.body && <p className="mt-4 text-base leading-[1.85] text-muted">{section.body}</p>}
                {section.items && (
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    {section.items.map((item) => <li key={item} className="rounded-[1.2rem] border border-primary-100/70 bg-white/62 px-4 py-3">{item}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="dark-panel h-fit rounded-[2rem] p-6 text-white sm:p-7">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/48">Curriculum note</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Clear, structured, and careful.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">This overview organizes the curriculum into clear groups without adding unconfirmed age ranges, facilities, results, or promises.</p>
            {content.confirmationNeeded && (
              <div className="mt-6 rounded-[1.35rem] border border-accent-300/20 bg-accent-300/10 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent-200">Details being checked</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72">Some curriculum labels or stage details are still being confirmed with the school team before final publication.</p>
              </div>
            )}
            <Link href="/academics" className="button-secondary mt-6">
              Academics overview
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
