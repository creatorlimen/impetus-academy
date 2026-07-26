import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { LeadershipPageContent } from '@/lib/content';

export default function LeadershipDetailPage({ content }: { content: LeadershipPageContent }) {
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.summary} ctaLabel="Contact the School" ctaHref="/contact" />
      <Section align="left">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="dark-panel flex min-h-[360px] items-end rounded-[2.5rem] p-6 text-primary-950 sm:p-8">
            <div>
              <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-accent-700">{content.role}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.015em]">{content.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-950/72">
                Serving the Impetus community through educational leadership, care, and a commitment to every learner’s growth.
              </p>
            </div>
          </aside>

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
        </div>
      </Section>
    </>
  );
}
