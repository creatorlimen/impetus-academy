import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { DivisionContent } from '@/lib/content';

export default function PersistentSchoolSelector({ divisions }: { divisions: DivisionContent[] }) {
  return (
    <section className="px-6 py-8 md:py-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {divisions.map((division) => (
          <div key={division.id} className="surface-panel rounded-[2rem] p-5 sm:p-6">
            <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-primary-500">
              Direct entry
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.012em] text-card-foreground">
              {division.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {division.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={division.href} className="button-link">
                Explore {division.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={division.admissionsHref} className="button-link text-primary-500">
                Admissions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



