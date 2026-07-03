import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata = { title: 'Senior Secondary' };

export default function SeniorSecondaryPage() {
  const pathways = [
    { title: 'Science Pathway', href: '/secondary-school/senior-secondary/science', description: 'Science stream curriculum drawn from supplied SSS Science copy.' },
    { title: 'Arts Pathway', href: '/secondary-school/senior-secondary/arts', description: 'Arts stream curriculum. Source page uses Art; public label is standardized to Arts pending confirmation.' },
    { title: 'Commercial Pathway', href: '/secondary-school/senior-secondary/commercial', description: 'Commercial stream curriculum covering business and financial literacy themes from supplied copy.' },
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



