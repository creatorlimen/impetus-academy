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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)]">
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

          <aside className="dark-panel h-fit rounded-[2rem] p-6 text-white sm:p-7">
            <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-white/48">Page note</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em]">Built with care.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              This page keeps the school story clear while separating details that still need final confirmation.
            </p>
            {content.confirmationNeeded && (
              <div className="mt-6 rounded-[1.35rem] border border-accent-300/20 bg-accent-300/10 p-4">
                <p className="font-label text-[0.62rem] uppercase tracking-[0.12em] text-accent-200">Details being checked</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72">A few details are still being confirmed with the school team before final publication.</p>
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
