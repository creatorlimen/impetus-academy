import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getSourceCoverage } from '@/lib/content';

export const metadata = { title: 'Source Audit' };

const statusClass = {
  migrated: 'bg-emerald-500/14 text-emerald-700',
  'partially-migrated': 'bg-amber-500/14 text-amber-700',
  centralized: 'bg-blue-500/14 text-blue-700',
  'pending-assets': 'bg-school-sky/14 text-school-sky',
  'confirmation-needed': 'bg-school-rose/14 text-school-rose',
};

export default function SourceAuditPage() {
  const coverage = getSourceCoverage();

  return (
    <>
      <PageHero eyebrow="Migration Audit" title="Every source page has a tracked destination." subtitle="This staging page records what has been migrated, centralized, held for confirmation, or left pending because assets are missing." />
      <Section title="Source coverage matrix." align="left">
        <div className="grid gap-5">
          {coverage.map((item) => (
            <article key={item.sourcePage} className="surface-panel rounded-[2rem] p-6 sm:p-7">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary-500">{item.sourceUrl}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-card-foreground">{item.sourcePage}</h2>
                </div>
                <span className={`w-fit rounded-full px-3 py-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${statusClass[item.status]}`}>
                  {item.status.replaceAll('-', ' ')}
                </span>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">Source sections</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {item.sourceSections.map((section) => <li key={section}>- {section}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">Destinations</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {item.destinations.map((destination) => <li key={destination}>- {destination}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">Notes</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.notes}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

