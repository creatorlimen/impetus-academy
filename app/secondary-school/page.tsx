import Link from 'next/link';
import { ArrowRight, Atom, BookOpen, BriefcaseBusiness, GraduationCap, Palette } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getCurriculumPage, getLearningStages, getSchoolDivisions } from '@/lib/content';

export const metadata = { title: 'Secondary School' };

export default function SecondarySchoolPage() {
  const division = getSchoolDivisions().find((item) => item.id === 'secondary')!;
  const stages = getLearningStages().filter((stage) => stage.division === 'secondary');
  const pathways = [
    { content: getCurriculumPage('science'), href: '/secondary-school/senior-secondary/science', icon: Atom },
    { content: getCurriculumPage('arts'), href: '/secondary-school/senior-secondary/arts', icon: Palette },
    { content: getCurriculumPage('commercial'), href: '/secondary-school/senior-secondary/commercial', icon: BriefcaseBusiness },
  ];

  return (
    <>
      <PageHero eyebrow={division.eyebrow} title={division.headline} subtitle={division.summary} ctaLabel="Begin Secondary Application" ctaHref="/secondary-school/admissions" variant="secondary" media={division.media} />
      <Section title="Learning through Junior and Senior Secondary." subtitle="Students broaden their knowledge in Junior Secondary and move into more focused Science, Arts, or Commercial study in Senior Secondary." align="left">
        <div className="grid gap-5 md:grid-cols-2">
          {stages.map((stage, index) => <FeatureCard key={stage.slug} title={stage.title} description={stage.summary} href={stage.href} ctaLabel="Explore this stage" icon={index === 0 ? BookOpen : GraduationCap} />)}
        </div>
      </Section>
      <Section title="Choose a Senior Secondary area of study." tone="warm" align="left">
        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map(({ content, href, icon }) => <FeatureCard key={content.slug} title={content.title} description={content.summary} href={href} ctaLabel="View curriculum" icon={icon} />)}
        </div>
        <Link href="/secondary-school/admissions" className="button-link mt-10">Secondary admissions <ArrowRight className="h-4 w-4" /></Link>
      </Section>
    </>
  );
}

