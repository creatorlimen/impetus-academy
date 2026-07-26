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
        eyebrow="Welcome to Impetus"
        title="A place to learn, question, create, and grow."
        subtitle="At Impetus Academy, Primary and Secondary students learn in a supportive community where strong teaching, character, creativity, and practical skills belong together."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-5 text-base leading-[1.9] text-muted md:text-lg">
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

          <div className="dark-panel rounded-[2.5rem] p-6 text-white sm:p-8">
            <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-white/48">Vision and Mission</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.015em]">Technology in service of learning.</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/72 sm:text-base">
              Our vision is to use technology in a balanced way, helping students understand ideas deeply, ask meaningful questions, and develop skills they can carry into new situations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-base">
              Mission: To help learners build the skills, values, and confidence they need for school, life, and the future.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="From Primary to Secondary"
        title="Learning that grows with every stage."
        subtitle="Children begin with strong foundations, meet a broader range of subjects as they grow, and move towards deeper Senior Secondary study."
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
        title="Find the right school for your child."
        subtitle="Explore the learning stages, curriculum, and admissions information for Primary or Secondary School."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {divisions.map((division) => (
            <article key={division.id} className="dark-panel rounded-[2.5rem] p-6 text-white sm:p-8">
              <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-white/48">{division.eyebrow}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">{division.label}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/72">{division.summary}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={division.href} className="button-primary">Discover {division.label}</Link>
                <Link href={division.admissionsHref} className="button-secondary">Admissions</Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {division.stages.map((stage) => (
                  <span key={stage} className="rounded-full border border-white/10 bg-white/8 px-4 py-3 font-label text-[0.62rem] uppercase tracking-[0.12em] text-white/70">
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
        title="What learning looks like at Impetus."
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
        title="Strong foundations, deeper study."
        subtitle="Reading, writing, mathematics, science, creativity, and critical thinking develop with greater depth as students progress through school."
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8">
            <h3 className="text-3xl font-semibold tracking-[-0.015em] text-card-foreground">Skills that grow over time.</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Primary students build essential knowledge and learning habits. Secondary students deepen that foundation through Junior Secondary subjects and Science, Arts, or Commercial study at Senior Secondary level.
            </p>
            <div className="mt-7 grid gap-3">
              <Link href="/academics" className="button-link">View academics overview <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/secondary-school/senior-secondary" className="button-link">Explore Senior Secondary <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {curriculum.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.8rem] p-5">
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="A message from our founder."
        subtitle="A reflection on the school’s beginning, its growth, and the community that continues to shape Impetus."
        className="bg-surface/65"
        align="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="dark-panel flex min-h-[320px] items-end rounded-[2.5rem] p-6 text-white sm:p-8">
            <div>
              <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-white/48">Founder</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.015em]">Mashood Tajudeen Olaide Adetela</h3>
            </div>
          </div>
          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <p className="text-lg leading-[1.9] text-muted">
              I am deeply grateful for how Impetus has grown. We began in 2018 with three students and a dedicated team of educators. Today, we are a thriving community of learners, still guided by our commitment to excellent teaching, good character, and fresh ideas.
            </p>
            <Link href="/about/founder" className="button-link mt-8">
              Meet our founder
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
              <p className="mt-6 font-label text-[0.62rem] uppercase tracking-[0.13em] text-primary-500">{testimonial.attribution}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="px-6 py-20 md:py-24">
        <div className="dark-panel mx-auto max-w-7xl rounded-[2.75rem] p-6 text-white sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-label text-[0.68rem] uppercase tracking-[0.14em] text-white/48">Admissions</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.015em] sm:text-4xl lg:text-[3rem]">
                Talk with us about your child.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                Tell the admissions team whether you are considering Primary or Secondary School. We will share the current application form, assessment dates, requirements, and next steps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/primary-school/admissions" className="button-primary">Begin Primary Application</Link>
              <Link href="/secondary-school/admissions" className="button-secondary">Begin Secondary Application</Link>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Questions families often ask." subtitle="Find out more about learning, school life, family involvement, and applying to Impetus Academy." className="bg-surface/70" align="left">
        <FaqAccordion faqs={faqs} />
      </Section>

      <ContactSection eyebrow={null} className="pt-2 md:pt-4" />
    </>
  );
}




