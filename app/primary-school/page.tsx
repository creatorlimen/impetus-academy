import Link from 'next/link';
import { ArrowRight, BookOpen, HeartHandshake, School, Sparkles } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBenefits, getLearningStages, getSchoolDivisions } from '@/lib/api';

export const metadata = { title: 'Primary School' };

export default function PrimarySchoolPage() {
  const division = getSchoolDivisions().find((item) => item.id === 'primary')!;
  const stages = getLearningStages().filter((stage) => stage.division === 'primary');
  const primaryBenefits = getBenefits().slice(0, 4);

  return (
    <>
      <PageHero eyebrow={division.eyebrow} title={division.headline} subtitle={division.summary} ctaLabel="Begin Primary Application" ctaHref="/primary-school/admissions" />
      <Section title="A full Primary journey inside one academy." subtitle="The Primary School is treated as an equal route, with Kindergarten and Elementary/Primary visible from the first page." align="left">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="dark-panel rounded-[2.5rem] p-6 text-white sm:p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/48">Primary purpose</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em]">Foundations with confidence, curiosity, and character.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/72">The primary arm was established in September 2023 to provide well-rounded primary education, nurture future leaders, and support academic excellence and character development.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {stages.map((stage, index) => <FeatureCard key={stage.slug} title={stage.title} description={stage.summary} href={stage.href} ctaLabel="View curriculum" icon={index === 0 ? Sparkles : School} />)}
          </div>
        </div>
      </Section>
      <Section title="Primary learning emphasis." className="bg-surface/65" align="left">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {primaryBenefits.map((benefit, index) => <FeatureCard key={benefit.title} title={benefit.title} description={benefit.description} icon={[BookOpen, HeartHandshake, Sparkles, School][index]} />)}
        </div>
        <Link href="/primary-school/admissions" className="button-link mt-10">Primary admissions <ArrowRight className="h-4 w-4" /></Link>
      </Section>
    </>
  );
}


