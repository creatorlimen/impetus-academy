import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getAdmissionsSteps } from '@/lib/content';

export const metadata = { title: 'Secondary Admissions' };

export default function SecondaryAdmissionsPage() {
  const visibleSteps = getAdmissionsSteps().filter((step) => step.publicationStatus !== 'hidden-pending-approval').slice(0, 6);
  return (
    <>
      <PageHero eyebrow="Secondary Admissions" title="Begin a Secondary School enquiry." subtitle="This route keeps Secondary admissions visible as its own first-class journey while reusing the central admissions process." />
      <Section title="Secondary admissions path." align="left">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleSteps.map((step) => <article key={step.title} className="surface-panel rounded-[1.75rem] p-5"><h2 className="text-xl font-semibold tracking-[-0.035em] text-card-foreground">{step.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p></article>)}
        </div>
      </Section>
      <ContactSection eyebrow={null} title="Secondary admissions enquiry" />
    </>
  );
}


