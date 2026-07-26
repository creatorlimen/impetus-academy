import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getAdmissionsSteps } from '@/lib/content';

export const metadata = { title: 'Admissions' };

export default function AdmissionsPage() {
  const steps = getAdmissionsSteps();

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Let’s talk about the right place for your child."
        subtitle="Whether you are considering Primary or Secondary School, our admissions team will help you understand the application, assessment, and resumption process."
      />
      <Section
        title="How to apply."
        subtitle="Begin with a conversation. We will share the current requirements for your child’s class and guide your family through each step."
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="surface-panel rounded-[2rem] p-6 sm:p-7">
              <p className="font-label text-[0.62rem] uppercase tracking-[0.13em] text-accent-700">Step {index + 1}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.012em] text-card-foreground">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Current requirements for your child." className="bg-surface/65" align="left">
        <div className="dark-panel rounded-[2.5rem] p-6 text-primary-950 sm:p-8 lg:p-10">
          <p className="max-w-3xl text-base leading-relaxed text-primary-950/76 md:text-lg">
            Application documents, assessment dates, fees, and resumption requirements may vary by class and entry stage. Contact the admissions team for the current information before making payment or submitting documents.
          </p>
        </div>
      </Section>
      <ContactSection eyebrow={null} title="Speak with the admissions team." />
    </>
  );
}
