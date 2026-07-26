import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getCurriculumFocus, getCurriculumPage, getLearningStages } from '@/lib/content';

export const metadata = { title: 'Academics' };

export default function AcademicsPage() {
  const stages = getLearningStages();
  const focus = getCurriculumFocus();
  const pathwayPages = (['science', 'arts', 'commercial'] as const).map((slug) => getCurriculumPage(slug));

  return (
    <>
      <PageHero eyebrow="Academics" title="A balanced index of stages, skills, and pathways." subtitle="Academics gives Primary and Secondary curriculum routes equal visibility, with stage and pathway information gathered in one clear place." />
      <Section title="Learning stages." subtitle="Parents can reach every stage without digging through a generic Academic menu." align="left">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage) => <FeatureCard key={stage.href} title={stage.title} description={stage.summary} href={stage.href} ctaLabel="View page" />)}
        </div>
      </Section>
      <Section title="Senior pathway index." className="bg-surface/65" align="left">
        <div className="grid gap-5 md:grid-cols-3">
          {pathwayPages.map((page) => <FeatureCard key={page.slug} title={page.title} description={page.summary} href={`/secondary-school/senior-secondary/${page.slug}`} ctaLabel="View pathway" />)}
        </div>
      </Section>
      <Section title="Academy-wide curriculum focus." align="left">
        <div className="grid gap-5 md:grid-cols-2">
          {focus.map((item) => <FeatureCard key={item.title} title={item.title} description={item.description} />)}
        </div>
      </Section>
    </>
  );
}


