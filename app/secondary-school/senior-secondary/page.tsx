import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getSeniorSecondaryPathways } from '@/lib/content';

export const metadata = { title: 'Senior Secondary' };

export default function SeniorSecondaryPage() {
  const pathways = getSeniorSecondaryPathways();
  return (
    <>
      <PageHero eyebrow="Secondary School" title="Senior Secondary" subtitle="Students choose Science, Arts, or Commercial subjects while continuing to grow in character, confidence, and independent thought." ctaLabel="Begin Secondary Application" ctaHref="/secondary-school/admissions" />
      <Section title="Choose an area of study." align="left">
        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map((pathway) => <FeatureCard key={pathway.href} {...pathway} ctaLabel="Explore subjects" />)}
        </div>
      </Section>
    </>
  );
}




