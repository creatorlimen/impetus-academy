import LearningMotif from '@/components/LearningMotif';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { LeadershipPageContent } from '@/lib/content';

export default function LeadershipDetailPage({
  content,
}: {
  content: LeadershipPageContent;
}) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.summary}
        ctaLabel="Contact the School"
        ctaHref="/contact"
        variant="leadership"
        media={content.portrait}
        visualTitle={content.name}
      />
      <Section align="left">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr]">
          <aside className="violet-panel relative h-fit overflow-hidden rounded-[2.5rem] p-6 sm:p-8 lg:sticky lg:top-32">
            <LearningMotif
              variant="leadership"
              className="absolute -right-10 -top-10 h-56 w-56 text-primary-200 opacity-18"
            />
            <div className="relative pt-32">
              <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-accent-200">
                {content.role}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.015em] text-white">
                {content.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Serving the Impetus community through educational leadership, care, and a commitment to every learner’s growth.
              </p>
            </div>
          </aside>

          <div className="grid gap-5">
            {content.sections.map((section, index) => (
              <article
                key={section.title}
                className={[
                  'rounded-[2.35rem] border p-6 sm:p-8',
                  index % 2 === 0
                    ? 'border-primary-950/10 bg-white shadow-[0_16px_48px_rgba(23,16,68,0.06)]'
                    : 'border-accent-500/16 bg-accent-50',
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
        </div>
      </Section>
    </>
  );
}