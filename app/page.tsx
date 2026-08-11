import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import FaqAccordion from '@/components/FaqAccordion';
import LearningMotif, { type LearningMotifVariant } from '@/components/LearningMotif';
import PersistentSchoolSelector from '@/components/PersistentSchoolSelector';
import SchoolHeroCarousel from '@/components/SchoolHeroCarousel';
import Section from '@/components/Section';
import TestimonialStage from '@/components/TestimonialStage';
import VisualMedia from '@/components/VisualMedia';
import {
  getBenefits,
  getCurriculumFocus,
  getFaqs,
  getLearningStages,
  getSchoolDivisions,
  getTestimonials,
} from '@/lib/content';

const stageMotifs: LearningMotifVariant[] = [
  'early-years',
  'primary',
  'secondary',
  'growth',
];

const benefitMotifs: LearningMotifVariant[] = [
  'academics',
  'leadership',
  'early-years',
  'growth',
  'thinking',
  'community',
];

const curriculumMotifs: LearningMotifVariant[] = [
  'writing',
  'science',
  'art',
  'thinking',
];

const benefitLayouts = [
  'md:col-span-2 xl:col-span-7 violet-panel text-white',
  'md:col-span-2 xl:col-span-5 warm-panel text-primary-950',
  'xl:col-span-3 border border-primary-950/10 bg-white text-primary-950',
  'xl:col-span-3 border border-primary-950/10 bg-white text-primary-950',
  'xl:col-span-3 border border-primary-950/10 bg-white text-primary-950',
  'xl:col-span-3 border border-primary-950/10 bg-white text-primary-950',
];

export default function Home() {
  const divisions = getSchoolDivisions();
  const stages = getLearningStages();
  const benefits = getBenefits();
  const curriculum = getCurriculumFocus();
  const faqs = getFaqs('general').slice(0, 6);
  const testimonials = getTestimonials();

  return (
    <>
      <SchoolHeroCarousel divisions={divisions} interval={3000} />
      <PersistentSchoolSelector divisions={divisions} />

      <Section
        eyebrow="Welcome to Impetus"
        title="A place to learn, question, create, and grow."
        subtitle="At Impetus Academy, Primary and Secondary students learn in a supportive community where strong teaching, character, creativity, and practical skills belong together."
        align="left"
      >
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <div className="editorial-rule" />
            <div className="mt-7 space-y-5 text-base leading-[1.9] text-muted md:text-lg">
              <p>
                At Impetus, technology supports good teaching rather than replacing it. Lessons are designed to help children see ideas clearly, practise with confidence, and connect classroom learning with everyday life.
              </p>
              <p>
                From the early years through Senior Secondary, students are encouraged to read widely, reason carefully, communicate confidently, create with imagination, and take responsibility for their growth.
              </p>
            </div>
            <Link href="/about/our-story" className="button-link mt-8">
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="warm-panel relative overflow-hidden rounded-[3rem] p-6 sm:p-8 lg:p-10">
            <LearningMotif
              variant="community"
              className="absolute -right-8 -top-8 h-64 w-64 text-accent-600 opacity-16"
            />
            <div className="relative max-w-2xl">
              <p className="font-label text-[0.68rem] uppercase tracking-[0.15em] text-accent-700">
                Vision and mission
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">
                Technology in service of learning.
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/70 bg-white/70 p-5 backdrop-blur-sm">
                  <p className="font-label text-[0.62rem] uppercase tracking-[0.14em] text-accent-700">
                    Our vision
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-950/72 sm:text-base">
                    Use technology in a balanced way so students understand ideas deeply, ask meaningful questions, and carry their skills into new situations.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/70 bg-white/70 p-5 backdrop-blur-sm">
                  <p className="font-label text-[0.62rem] uppercase tracking-[0.14em] text-primary-700">
                    Our mission
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-950/72 sm:text-base">
                    Help learners build the skills, values, and confidence they need for school, life, and the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="From Primary to Secondary"
        title="Learning that grows with every stage."
        subtitle="Children begin with strong foundations, meet a broader range of subjects as they grow, and move towards deeper Senior Secondary study."
        tone="warm"
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => {
            const secondary = stage.division === 'secondary';

            return (
              <Link
                key={stage.slug}
                href={stage.href}
                className="group overflow-hidden rounded-[2.35rem] border border-primary-950/10 bg-white shadow-[0_16px_48px_rgba(23,16,68,0.08)] transition-transform hover:-translate-y-1"
              >
                <div
                  className={[
                    'relative h-44 overflow-hidden p-4',
                    secondary
                      ? 'bg-gradient-to-br from-primary-800 to-primary-500 text-primary-100'
                      : 'bg-gradient-to-br from-accent-200 to-accent-50 text-accent-700',
                  ].join(' ')}
                >
                  <span className="absolute left-5 top-5 font-label text-[0.62rem] uppercase tracking-[0.14em] opacity-65">
                    0{index + 1}
                  </span>
                  <LearningMotif
                    variant={stageMotifs[index]}
                    className="absolute -bottom-5 right-0 h-44 w-44 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="font-label text-[0.6rem] uppercase tracking-[0.14em] text-accent-700">
                    {stage.division} school
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.012em] text-card-foreground">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {stage.summary}
                  </p>
                  <span className="button-link mt-6">
                    View stage
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        title="Find the right school for your child."
        subtitle="Explore the learning stages, curriculum, and admissions information for Primary or Secondary School."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {divisions.map((division) => (
            <article
              key={division.id}
              className="surface-panel overflow-hidden rounded-[3rem] p-3"
            >
              <VisualMedia
                variant={division.id}
                eyebrow={division.eyebrow}
                title={division.headline}
                image={division.media}
                aspectClassName="aspect-[16/10]"
                className="rounded-[2.35rem]"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-3xl font-semibold tracking-[-0.015em] text-card-foreground">
                  {division.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {division.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={division.href} className="button-primary">
                    Discover {division.label}
                  </Link>
                  <Link href={division.admissionsHref} className="button-secondary">
                    Admissions
                  </Link>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {division.stages.map((stage) => (
                    <span
                      key={stage}
                      className="rounded-full border border-primary-950/10 bg-surface px-4 py-2 font-label text-[0.6rem] uppercase tracking-[0.12em] text-primary-950/66"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Families Choose Impetus"
        title="What learning looks like at Impetus."
        tone="warm"
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {benefits.map((benefit, index) => {
            const featured = index < 2;
            const dark = index === 0;

            return (
              <article
                key={benefit.title}
                className={[
                  'group relative min-h-72 overflow-hidden rounded-[2.5rem] p-6 sm:p-7',
                  benefitLayouts[index],
                ].join(' ')}
              >
                <span
                  className={[
                    'font-label text-[0.62rem] uppercase tracking-[0.14em]',
                    dark ? 'text-accent-200' : 'text-accent-700',
                  ].join(' ')}
                >
                  0{index + 1}
                </span>
                <LearningMotif
                  variant={benefitMotifs[index]}
                  className={[
                    'absolute -right-8 -top-8 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105',
                    featured ? 'h-60 w-60' : 'h-44 w-44',
                    dark ? 'text-primary-300 opacity-18' : 'text-accent-500 opacity-14',
                  ].join(' ')}
                />
                <div className="relative mt-20 max-w-xl">
                  <h3 className="text-2xl font-semibold tracking-[-0.012em]">
                    {benefit.title}
                  </h3>
                  <p className={['mt-4 text-sm leading-relaxed sm:text-base', dark ? 'text-white/68' : 'text-muted'].join(' ')}>
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Academics"
        title="Strong foundations, deeper study."
        subtitle="Reading, writing, mathematics, science, creativity, and critical thinking develop with greater depth as students progress through school."
        tone="violet"
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.75rem] border border-white/12 bg-white/8 p-6 sm:p-8">
            <LearningMotif
              variant="academics"
              className="absolute -right-6 -top-2 h-72 w-72 text-primary-200 opacity-58"
            />
            <div className="relative flex h-full flex-col justify-end">
              <h3 className="max-w-sm text-3xl font-semibold tracking-[-0.015em] text-white">
                Skills that grow over time.
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/68">
                Primary students build essential knowledge and learning habits. Secondary students deepen that foundation through Junior Secondary subjects and Science, Arts, or Commercial study.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/academics" className="button-primary">
                  Academics overview
                </Link>
                <Link href="/secondary-school/senior-secondary" className="button-on-dark">
                  Senior Secondary
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {curriculum.map((item, index) => (
              <article
                key={item.title}
                className="group relative min-h-64 overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/8 p-6"
              >
                <LearningMotif
                  variant={curriculumMotifs[index]}
                  className="absolute -right-5 -top-6 h-40 w-40 text-accent-200 opacity-28 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105"
                />
                <div className="relative pt-20">
                  <h3 className="text-2xl font-semibold tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/66">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="A message from our founder."
        subtitle="A reflection on the school’s beginning, its growth, and the community that continues to shape Impetus."
        tone="warm"
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <VisualMedia
            variant="leadership"
            eyebrow="Founder"
            title="Mashood Tajudeen Olaide Adetela"
            aspectClassName="min-h-[420px] lg:min-h-[520px]"
          />
          <div className="flex flex-col justify-between rounded-[3rem] border border-primary-950/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,16,68,0.08)] sm:p-8 lg:p-10">
            <div>
              <span className="font-display text-7xl leading-none text-accent-300">“</span>
              <p className="-mt-3 text-xl leading-[1.75] text-primary-950/76 sm:text-2xl">
                I am deeply grateful for how Impetus has grown. We began in 2018 with three students and a dedicated team of educators. Today, we are a thriving community of learners, still guided by our commitment to excellent teaching, good character, and fresh ideas.
              </p>
            </div>
            <Link href="/about/founder" className="button-link mt-8">
              Meet our founder
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="What families are saying."
        subtitle="Family voices offer a glimpse of the confidence, care, and curiosity that the school works to nurture."
        align="left"
      >
        <TestimonialStage testimonials={testimonials} />
      </Section>

      <section className="px-6 py-20 md:py-24">
        <div className="warm-panel relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[3rem] p-6 sm:p-8 lg:grid-cols-[1fr_0.46fr] lg:items-end lg:p-12">
          <LearningMotif
            variant="admissions"
            className="absolute -right-6 -top-8 h-72 w-72 text-accent-700 opacity-18"
          />
          <div className="relative max-w-3xl">
            <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-accent-700">
              Admissions
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.015em] sm:text-4xl lg:text-[3rem]">
              Talk with us about your child.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-950/72 md:text-lg">
              Tell the admissions team whether you are considering Primary or Secondary School. We will share the current application form, assessment dates, requirements, and next steps.
            </p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/primary-school/admissions" className="button-primary">
              Begin Primary Application
            </Link>
            <Link href="/secondary-school/admissions" className="button-secondary">
              Begin Secondary Application
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-accent-100 px-6 py-20 md:py-24">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/55" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.52fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="section-kicker">FAQ</span>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.015em] text-primary-950 md:text-[3.1rem]">
              Questions families often ask.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-950/66">
              Find out more about learning, school life, family involvement, and applying to Impetus Academy.
            </p>
            <div className="mt-8 h-52 overflow-hidden rounded-[2.5rem] bg-white/58 text-accent-700">
              <LearningMotif variant="thinking" className="h-full w-full p-3" />
            </div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <ContactSection eyebrow={null} className="pt-2 md:pt-4" />
    </>
  );
}