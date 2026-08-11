import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LearningMotif, { type LearningMotifVariant } from '@/components/LearningMotif';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { CurriculumPageContent, CurriculumSlug } from '@/lib/content';

const curriculumMotifs: Record<CurriculumSlug, LearningMotifVariant> = {
  kindergarten: 'early-years',
  elementary: 'primary',
  'junior-secondary': 'secondary',
  science: 'science',
  arts: 'art',
  commercial: 'thinking',
};

export default function CurriculumDetailPage({
  content,
}: {
  content: CurriculumPageContent;
}) {
  const admissionsHref =
    content.division === 'primary'
      ? '/primary-school/admissions'
      : '/secondary-school/admissions';

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.summary}
        ctaLabel="Begin Admissions Enquiry"
        ctaHref={admissionsHref}
        variant={content.division}
        media={content.media}
        visualTitle={content.aside?.title}
      />
      <Section title="What students learn." align="left">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,0.4fr)]">
          <div className="grid gap-5">
            {content.sections.map((section, index) => (
              <article
                key={section.title}
                className={[
                  'relative overflow-hidden rounded-[2.35rem] border p-6 sm:p-8',
                  index % 2 === 0
                    ? 'border-primary-950/10 bg-white shadow-[0_16px_48px_rgba(23,16,68,0.06)]'
                    : 'border-accent-500/16 bg-accent-50',
                ].join(' ')}
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 font-label text-xs text-accent-700">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.012em] text-card-foreground">
                      {section.title}
                    </h2>
                    {section.body && (
                      <p className="mt-4 text-base leading-[1.85] text-muted">
                        {section.body}
                      </p>
                    )}
                  </div>
                </div>
                {section.items && (
                  <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.25rem] border border-primary-950/8 bg-white/76 px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="violet-panel relative h-fit overflow-hidden rounded-[2.5rem] p-6 sm:p-8 lg:sticky lg:top-32">
            <LearningMotif
              variant={curriculumMotifs[content.slug]}
              className="absolute -right-10 -top-8 h-52 w-52 text-primary-200 opacity-18"
            />
            <div className="relative pt-28">
              <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-accent-200">
                {content.aside?.eyebrow ?? 'Learning at Impetus'}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em] text-white">
                {content.aside?.title ?? 'Learning that grows with every stage.'}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {content.aside?.body ??
                  'Lessons combine subject knowledge, regular practice, practical activities, and feedback to help students make steady progress.'}
              </p>
              <Link href="/academics" className="button-on-dark mt-6">
                Academics overview
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}