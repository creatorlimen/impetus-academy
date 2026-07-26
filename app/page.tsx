import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, GraduationCap, Handshake, Lightbulb, Palette, School, Sparkles, Users } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import FaqAccordion from '@/components/FaqAccordion';
import FeatureCard from '@/components/FeatureCard';
import PersistentSchoolSelector from '@/components/PersistentSchoolSelector';
import SchoolHeroCarousel from '@/components/SchoolHeroCarousel';
import Section from '@/components/Section';
import { getBenefits, getCurriculumFocus, getFaqs, getLearningStages, getSchoolDivisions, getTestimonials } from '@/lib/content';

const stageIcons = [Sparkles, School, BookOpen, GraduationCap];
const benefitIcons = [Lightbulb, Users, Brain, Handshake, BookOpen, Palette];

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
        eyebrow="Academy Introduction"
        title="Learning with purpose at every stage."
        subtitle="Impetus Integrated Learning Academy provides a supportive learning environment built on integrity, academic excellence, character, practical skills, and thoughtful use of technology."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-5 text-base leading-[1.9] text-muted md:text-lg">
              <p>
                At Impetus, technology supports good teaching rather than replacing it. Lessons are designed to help children see ideas clearly, practise with confidence, and connect classroom learning with everyday life.
              </p>
              <p>
                Across Primary and Secondary School, learners are guided to read well, reason carefully, communicate clearly, create boldly, and grow in character.
              </p>
            </div>
            <Link href="/about/our-story" className="button-link mt-8">
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="dark-panel rounded-[2.5rem] p-6 text-white sm:p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/48">Vision and Mission</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.045em]">Technology with balance, character with purpose.</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/72 sm:text-base">
              Vision: To promote a balanced use of technology to motivate scholars to develop deeper conceptual understanding, ask meaningful questions, and cultivate transferable skills.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-base">
              Mission: To help learners build the skills, values, and confidence they need for school, life, and the future.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Learning Journey"
        title="Four linked stages, one academy standard."
        subtitle="Each stage has its own rhythm, curriculum focus, and next step, while staying connected to one academy standard."
        className="bg-surface/65"
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => {
            const Icon = stageIcons[index] || BookOpen;
            return (
              <FeatureCard
                key={stage.slug}
                title={stage.title}
                description={stage.summary}
                href={stage.href}
                ctaLabel="View stage"
                icon={Icon}
              />
            );
          })}
        </div>
      </Section>

      <Section
        title="Primary and Secondary hold equal weight."
        subtitle="Each school journey has its own entry point, admissions path, and curriculum links, while staying part of one academy identity."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {divisions.map((division) => (
            <article key={division.id} className="dark-panel rounded-[2.5rem] p-6 text-white sm:p-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/48">{division.eyebrow}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{division.label}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/72">{division.summary}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={division.href} className="button-primary">Discover {division.label}</Link>
                <Link href={division.admissionsHref} className="button-secondary">Admissions</Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {division.stages.map((stage) => (
                  <span key={stage} className="rounded-full border border-white/10 bg-white/8 px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/70">
                    {stage}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Families Choose Impetus"
        title="A school culture built around attention, practice, and future readiness."
        className="bg-surface/70"
        align="left"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] || Lightbulb;
            return <FeatureCard key={benefit.title} title={benefit.title} description={benefit.description} icon={Icon} />;
          })}
        </div>
      </Section>

      <Section
        eyebrow="Academics"
        title="Curriculum focus that cuts across the academy."
        subtitle="Core skills are introduced early, strengthened steadily, and revisited with greater depth as learners move through the academy."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8">
            <h3 className="text-3xl font-semibold tracking-[-0.045em] text-card-foreground">Balanced curriculum access.</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Primary pages focus on Kindergarten and Elementary/Primary. Secondary pages expose Junior Secondary, Senior Secondary, and the Science, Arts, and Commercial pathways.
            </p>
            <div className="mt-7 grid gap-3">
              <Link href="/academics" className="button-link">View academics overview <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/secondary-school/senior-secondary" className="button-link">Explore senior pathways <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {curriculum.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.8rem] p-5">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="From the founder's message."
        subtitle="A short reflection on the school journey, its beginning, and its commitment to purposeful learning."
        className="bg-surface/65"
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="dark-panel flex min-h-[320px] items-end rounded-[2.5rem] p-6 text-white sm:p-8">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/48">Confirmation needed</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em]">Founder portrait and public title.</h3>
            </div>
          </div>
          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <p className="text-lg leading-[1.9] text-muted">
              As I reflect on our journey at Impetus Integrated Learning Academy, I am filled with deep gratitude and excitement for the future of education. What began in 2018 with just three students and a dedicated team of educators has blossomed into a thriving community of learners, united by our commitment to excellence and innovation.
            </p>
            <Link href="/about/founder" className="button-link mt-8">
              Read the founder page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="What families are saying." align="left">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.quote} className="surface-panel rounded-[2rem] p-6 sm:p-7">
              <p className="text-base leading-relaxed text-muted">“{testimonial.quote}”</p>
              <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary-500">{testimonial.attribution}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="px-6 py-20 md:py-24">
        <div className="dark-panel mx-auto max-w-7xl rounded-[2.75rem] p-6 text-white sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/48">Admissions</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[3rem]">
                Start with an enquiry, then confirm the right next step.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                The admissions flow is presented as an enquiry pathway. It does not imply automatic admission, payment, or final placement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/primary-school/admissions" className="button-primary">Begin Primary Application</Link>
              <Link href="/secondary-school/admissions" className="button-secondary">Begin Secondary Application</Link>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Common questions, held in one place." subtitle="Clear answers to the questions families most often ask while considering Impetus Academy." className="bg-surface/70" align="left">
        <FaqAccordion faqs={faqs} />
      </Section>

      <ContactSection eyebrow={null} className="pt-2 md:pt-4" />
    </>
  );
}




