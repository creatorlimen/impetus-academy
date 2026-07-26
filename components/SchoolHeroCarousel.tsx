'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
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

      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl flex-col justify-center px-6 py-20 md:min-h-[calc(100dvh-7rem)] md:py-28">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] xl:items-end">
          <div className="max-w-4xl animate-fade-in">
            <span className="section-kicker border-white/10 bg-white/10 text-white/74 before:bg-accent-300">
              Impetus Integrated Learning Academy
            </span>
            <h1 className="mt-6 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[4rem] lg:text-[5.4rem]">
              One Academy.
              <span className="font-display mt-1 block text-[0.94em] font-semibold text-accent-300">
                Two schools. One community.
              </span>
            </h1>
          </div>

          <div className="dark-panel rounded-[2.35rem] p-5 text-white sm:p-7 animate-slide-up">
            <p className="text-lg leading-relaxed text-white/78 sm:text-xl">
              From Primary School foundations to Secondary School choices, Impetus helps students build knowledge, character, confidence, practical skills, and a healthy relationship with technology.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2 sm:gap-3">
              {divisions.map((division) => (
                <Link key={division.id} href={division.href} className="button-primary whitespace-nowrap px-2.5 text-[0.7rem] sm:px-4 sm:text-sm">
                  Explore {division.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}



