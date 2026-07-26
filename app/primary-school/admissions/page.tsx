import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getAdmissionsSteps } from '@/lib/content';

export const metadata = { title: 'Primary Admissions' };

export default function PrimaryAdmissionsPage() {
  const steps = getAdmissionsSteps();
  return (
    <>
      <PageHero
        eyebrow="Primary Admissions"
        title="Begin a Primary School enquiry."
        subtitle="Tell us about your child and the class you are considering. Our team will guide you through the current Primary School application and assessment process."
      />
      <Section title="Primary School application steps." align="left">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="surface-panel rounded-[1.75rem] p-5">
              <h2 className="text-xl font-semibold tracking-[-0.01em] text-card-foreground">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <ContactSection eyebrow={null} title="Primary admissions enquiry" subtitle="Call or email the school to request the current Primary School application information." />
    </>
  );
}
