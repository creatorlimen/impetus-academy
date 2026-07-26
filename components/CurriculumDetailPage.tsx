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
      <Section title="What students learn." align="left">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.4fr)]">
          <div className="grid gap-5">
            {content.sections.map((section) => (
              <article key={section.title} className="surface-panel rounded-[2rem] p-6 sm:p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.012em] text-card-foreground">{section.title}</h2>
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
            <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-white/48">
              {content.aside?.eyebrow ?? 'Learning at Impetus'}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em]">
              {content.aside?.title ?? 'Learning that grows with every stage.'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              {content.aside?.body ?? 'Lessons combine subject knowledge, regular practice, practical activities, and feedback to help students make steady progress.'}
            </p>
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
