'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { DivisionContent } from '@/lib/content';

interface SchoolHeroCarouselProps {
  divisions: DivisionContent[];
  interval?: number;
}

export default function SchoolHeroCarousel({ divisions, interval = 3000 }: SchoolHeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % divisions.length);
  }, [divisions.length]);

  const previous = useCallback(() => {
    setCurrent((prev) => (prev - 1 + divisions.length) % divisions.length);
  }, [divisions.length]);

  useEffect(() => {
    if (paused) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;
    const timer = window.setInterval(next, interval);
    return () => window.clearInterval(timer);
  }, [interval, next, paused]);

  return (
    <section
      className="relative -mt-24 min-h-[100dvh] overflow-hidden bg-primary-950 pt-24 text-white md:-mt-28 md:pt-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {divisions.map((division, index) => (
        <div
          key={division.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === current ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
        >
          <div className={`absolute inset-0 ${division.id === 'primary' ? 'bg-[radial-gradient(circle_at_24%_24%,rgba(29,107,86,0.55),transparent_31%),linear-gradient(135deg,rgba(4,13,21,0.96),rgba(11,33,48,0.82))]' : 'bg-[radial-gradient(circle_at_74%_18%,rgba(47,111,159,0.55),transparent_31%),linear-gradient(135deg,rgba(4,13,21,0.96),rgba(11,33,48,0.82))]'}`} />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%)]" />
          <div className="absolute inset-x-6 bottom-24 top-32 hidden rounded-[3rem] border border-white/8 bg-white/5 backdrop-blur-[2px] lg:block" />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl flex-col justify-end px-6 pb-28 pt-20 md:min-h-[calc(100dvh-7rem)] md:pb-32 md:pt-28 lg:pb-28">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] xl:items-end">
          <div className="max-w-4xl animate-fade-in">
            <span className="section-kicker border-white/10 bg-white/10 text-white/74 before:bg-accent-300">
              Impetus Integrated Learning Academy
            </span>
            <h1 className="mt-6 text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[4rem] lg:text-[5.4rem]">
              One Academy.
              <span className="font-display mt-1 block text-[0.94em] font-medium italic text-accent-300">
                Two learning journeys.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-100/84 sm:text-lg md:text-xl">
              From strong foundations in the Primary School to purposeful preparation in the Secondary School, Impetus combines academic excellence, character development, practical skills, and technology-enabled learning.
            </p>
          </div>

          <div className="dark-panel rounded-[2.35rem] p-5 text-white sm:p-7 animate-slide-up">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/50">
              {divisions[current].eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              {divisions[current].headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/72">
              {divisions[current].summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={divisions[current].href} className="button-primary">
                Explore {divisions[current].label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={divisions[current].admissionsHref} className="button-secondary">
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-30 px-6 md:bottom-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-2 gap-3 sm:flex">
            {divisions.map((division, index) => (
              <button
                key={division.id}
                type="button"
                onClick={() => setCurrent(index)}
                className={`rounded-full border px-4 py-3 text-left font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm ${index === current ? 'border-accent-300 bg-accent-300 text-primary-950' : 'border-white/12 bg-white/10 text-white hover:bg-white/18'}`}
              >
                {division.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 sm:justify-end">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous school division"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next school division"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



