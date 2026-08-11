import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LearningMotif from '@/components/LearningMotif';
import type { DivisionContent } from '@/lib/content';

export default function PersistentSchoolSelector({
  divisions,
}: {
  divisions: DivisionContent[];
}) {
  return (
    <section className="relative z-20 -mt-8 px-6 pb-8 md:-mt-12 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {divisions.map((division, index) => {
          const dark = division.id === 'secondary';

          return (
            <article
              key={division.id}
              className={[
                'group relative min-h-72 overflow-hidden rounded-[2.5rem] border p-6 shadow-[0_20px_60px_rgba(23,16,68,0.13)] sm:p-7',
                dark
                  ? 'border-white/12 bg-primary-950 text-white'
                  : 'border-accent-500/15 bg-white text-primary-950',
              ].join(' ')}
            >
              <LearningMotif
                variant={division.id}
                className={[
                  'absolute -right-7 -top-4 h-48 w-48 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105',
                  dark ? 'text-primary-300 opacity-24' : 'text-accent-500 opacity-20',
                ].join(' ')}
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      'flex h-10 w-10 items-center justify-center rounded-full font-label text-xs',
                      dark ? 'bg-white/10 text-accent-200' : 'bg-accent-100 text-accent-700',
                    ].join(' ')}
                  >
                    0{index + 1}
                  </span>
                  <p
                    className={[
                      'font-label text-[0.62rem] font-semibold uppercase tracking-[0.14em]',
                      dark ? 'text-white/62' : 'text-accent-700',
                    ].join(' ')}
                  >
                    Explore our schools
                  </p>
                </div>

                <h2 className="mt-8 max-w-sm text-3xl font-semibold tracking-[-0.012em]">
                  {division.label}
                </h2>
                <p className={['mt-3 max-w-lg text-sm leading-relaxed sm:text-base', dark ? 'text-white/68' : 'text-muted'].join(' ')}>
                  {division.summary}
                </p>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-7">
                  <Link
                    href={division.href}
                    className={['button-link', dark ? 'text-accent-200 hover:text-white' : ''].join(' ')}
                  >
                    Explore {division.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={division.admissionsHref}
                    className={['button-link', dark ? 'text-white/72 hover:text-white' : 'text-primary-700'].join(' ')}
                  >
                    Admissions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}