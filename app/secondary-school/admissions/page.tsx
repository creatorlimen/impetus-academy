import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getAdmissionsSteps } from '@/lib/content';

export const metadata = { title: 'Secondary Admissions' };

export default function SecondaryAdmissionsPage() {
  const steps = getAdmissionsSteps();
  return (
    <>
      <PageHero
        eyebrow="Secondary Admissions"
        title="Begin a Secondary School enquiry."
        subtitle="Tell us whether you are considering Junior or Senior Secondary entry. Our team will share the current application requirements, assessment dates, and next steps."
        variant="secondary"
      />
      <Section title="Secondary School application steps." align="left">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="surface-panel rounded-[1.75rem] p-5">
              <h2 className="text-xl font-semibold tracking-[-0.01em] text-card-foreground">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <ContactSection eyebrow={null} title="Secondary admissions enquiry" subtitle="Call or email the school to request the current Secondary School application information." />
    </>
  );
}
