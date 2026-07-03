import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata = { title: 'Senior Secondary' };

export default function SeniorSecondaryPage() {
  const pathways = [
    { title: 'Science Pathway', href: '/secondary-school/senior-secondary/science', description: 'A senior pathway for learners focusing on science and related subjects.' },
    { title: 'Arts Pathway', href: '/secondary-school/senior-secondary/arts', description: 'A senior pathway for learners focusing on arts, languages, humanities, and creative subjects.' },
    { title: 'Commercial Pathway', href: '/secondary-school/senior-secondary/commercial', description: 'A senior pathway for learners focusing on business, commerce, accounting, and financial literacy.' },
  ];
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




