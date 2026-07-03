import Link from 'next/link';
import { ArrowRight, Atom, BookOpen, BriefcaseBusiness, GraduationCap, Palette } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getCurriculumPage, getLearningStages, getSchoolDivisions } from '@/lib/api';

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
      <PageHero eyebrow={division.eyebrow} title={division.headline} subtitle={division.summary} ctaLabel="Begin Secondary Application" ctaHref="/secondary-school/admissions" />
      <Section title="Secondary School pathways." subtitle="Junior Secondary and Senior Secondary are visible immediately, with Science, Arts, and Commercial pathways treated as real choices." align="left">
        <div className="grid gap-5 md:grid-cols-2">
          {stages.map((stage, index) => <FeatureCard key={stage.slug} title={stage.title} description={stage.summary} href={stage.href} ctaLabel="View pathway" icon={index === 0 ? BookOpen : GraduationCap} />)}
        </div>
      </Section>
      <Section title="Senior Secondary options." className="bg-surface/65" align="left">
        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map(({ content, href, icon }) => <FeatureCard key={content.slug} title={content.title} description={content.summary} href={href} ctaLabel="View curriculum" icon={icon} />)}
        </div>
        <Link href="/secondary-school/admissions" className="button-link mt-10">Secondary admissions <ArrowRight className="h-4 w-4" /></Link>
      </Section>
    </>
  );
}

