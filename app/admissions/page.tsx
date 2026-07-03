import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getAdmissionsSteps, getSiteSettings } from '@/lib/api';

export const metadata = { title: 'Admissions' };

export default function AdmissionsPage() {
  const steps = getAdmissionsSteps();
  const settings = getSiteSettings();

  return (
    <>
      <PageHero eyebrow="Admissions" title="Begin with the right school division." subtitle="Admissions is presented as an enquiry pathway for Primary and Secondary families. It does not imply automatic admission, payment, or final placement." />
      <Section title="Admissions process from supplied source copy." subtitle="The original ten-step process has been cleaned into a scannable sequence. Sensitive or uncertain items are visibly marked." align="left">
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className={`rounded-[2rem] p-6 sm:p-7 ${step.publicationStatus === 'hidden-pending-approval' ? 'dark-panel text-white' : 'surface-panel'}`}>
              <p className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] ${step.publicationStatus === 'hidden-pending-approval' ? 'text-accent-300' : 'text-primary-500'}`}>Step {index + 1}</p>
              <h2 className={`mt-4 text-2xl font-semibold tracking-[-0.04em] ${step.publicationStatus === 'hidden-pending-approval' ? 'text-white' : 'text-card-foreground'}`}>{step.title}</h2>
              <p className={`mt-3 text-sm leading-relaxed sm:text-base ${step.publicationStatus === 'hidden-pending-approval' ? 'text-white/72' : 'text-muted'}`}>{step.description}</p>
              {step.publicationStatus && step.publicationStatus !== 'safe' && (
                <p className={`mt-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] ${step.publicationStatus === 'hidden-pending-approval' ? 'text-white/48' : 'text-school-rose'}`}>{step.publicationStatus.replaceAll('-', ' ')}</p>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Confirmation checklist before final admissions publication." className="bg-surface/65" align="left">
        <div className="dark-panel rounded-[2.5rem] p-6 text-white sm:p-8 lg:p-10">
          <p className="max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">The source contains fee, boarding, document, and bank-account references. These are retained in the migration model as confirmation items but should not become public instructions without written approval.</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {settings.uncertainFacts.map((fact) => (
              <div key={fact} className="rounded-[1.35rem] border border-white/10 bg-white/7 px-4 py-3 text-sm leading-relaxed text-white/72">{fact}</div>
            ))}
          </div>
        </div>
      </Section>

      <ContactSection eyebrow={null} />
    </>
  );
}


