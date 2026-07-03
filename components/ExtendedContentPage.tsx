import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import type { PageSectionSet } from '@/lib/api';

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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)]">
          <div className="grid gap-5">
            {content.sections.map((section) => (
              <article key={section.title} className="surface-panel rounded-[2rem] p-6 sm:p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-card-foreground">{section.title}</h2>
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

          <aside className="dark-panel h-fit rounded-[2rem] p-6 text-white sm:p-7">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/48">Migration note</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Source-backed staging copy.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              This page is built from supplied Impetus copy and conservative editorial cleanup. Uncertain details remain visible for review.
            </p>
            {content.confirmationNeeded && (
              <div className="mt-6 rounded-[1.35rem] border border-accent-300/20 bg-accent-300/10 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent-200">Confirmation needed</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/72">
                  {content.confirmationNeeded.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}

