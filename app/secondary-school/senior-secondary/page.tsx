import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getSeniorSecondaryPathways } from '@/lib/content';

export const metadata = { title: 'Senior Secondary' };

export default function SeniorSecondaryPage() {
  const pathways = getSeniorSecondaryPathways();
  return (
    <>
      <PageHero eyebrow="Secondary School" title="Senior Secondary" subtitle="Senior learning is organised around Science, Arts, and Commercial pathways." ctaLabel="Begin Secondary Application" ctaHref="/secondary-school/admissions" />
      <Section title="Choose a senior pathway." align="left">
        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map((pathway) => <FeatureCard key={pathway.href} {...pathway} ctaLabel="View pathway" />)}
        </div>
      </Section>
    </>
  );
}




