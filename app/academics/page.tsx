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
      <PageHero
        eyebrow="Academics"
        title="Learning that deepens as students grow."
        subtitle="From early foundations to Senior Secondary study, the curriculum develops knowledge, communication, creativity, practical ability, and independent thinking."
      />
      <Section
        title="Learning from Kindergarten to Senior Secondary."
        subtitle="Each stage builds on what came before while introducing new subjects, responsibilities, and ways of thinking."
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage) => <FeatureCard key={stage.href} title={stage.title} description={stage.summary} href={stage.href} ctaLabel="Explore this stage" />)}
        </div>
      </Section>
      <Section
        title="Senior Secondary choices."
        subtitle="Students can develop their strengths through Science, Arts, or Commercial study."
        className="bg-surface/65"
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {pathwayPages.map((page) => <FeatureCard key={page.slug} title={page.title} description={page.summary} href={page.href} ctaLabel="Explore this pathway" />)}
        </div>
      </Section>
      <Section
        title="Skills that matter across the curriculum."
        subtitle="These areas support learning in every school division and become more demanding as students progress."
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {focus.map((item) => <FeatureCard key={item.title} title={item.title} description={item.description} />)}
        </div>
      </Section>
    </>
  );
}
