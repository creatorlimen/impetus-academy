import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getSiteSettings } from '@/lib/content';

export const metadata = { title: 'Confirmation Needed' };

export default function ConfirmationNeededPage() {
  const settings = getSiteSettings();
  return (
    <>
      <PageHero eyebrow="Staging Checklist" title="Facts to confirm before final publication." subtitle="This page keeps details that still need review in one place so they are not accidentally treated as final." />
      <Section title="Open confirmation items." align="left">
        <div className="grid gap-4 md:grid-cols-2">
          {settings.uncertainFacts.map((fact) => (
            <article key={fact} className="surface-panel rounded-[1.75rem] p-5">
              <p className="font-label text-[0.62rem] uppercase tracking-[0.13em] text-school-rose">Confirmation needed</p>
              <p className="mt-3 text-base leading-relaxed text-muted">{fact}</p>
            </article>
          ))}
          <article className="dark-panel rounded-[1.75rem] p-5 text-white">
            <p className="font-label text-[0.62rem] uppercase tracking-[0.13em] text-accent-300">Admissions sensitive content</p>
            <p className="mt-3 text-base leading-relaxed text-white/72">Bank details, fee publication, application fee, boarding language, and document-upload/request handling require written approval before production use.</p>
          </article>
          <article className="dark-panel rounded-[1.75rem] p-5 text-white">
            <p className="font-label text-[0.62rem] uppercase tracking-[0.13em] text-accent-300">Images</p>
            <p className="mt-3 text-base leading-relaxed text-white/72">Logo, founder portrait, proprietor portrait, Primary hero image, Secondary hero image, gallery images, and consent/classification metadata are still required.</p>
          </article>
        </div>
      </Section>
    </>
  );
}



