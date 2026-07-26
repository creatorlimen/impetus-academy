'use client';

import { useCallback, useEffect, useState } from 'react';
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
      className="relative -mt-24 min-h-[100dvh] overflow-hidden bg-[#FFF5E9] pt-24 text-primary-950 md:-mt-28 md:pt-28"
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
          <div className={`absolute inset-0 ${division.id === 'primary' ? 'bg-[radial-gradient(circle_at_24%_24%,rgba(232,117,18,0.16),transparent_32%),linear-gradient(135deg,#FFF5E9,#FFE9CF)]' : 'bg-[radial-gradient(circle_at_76%_18%,rgba(101,75,199,0.12),transparent_32%),linear-gradient(135deg,#FFF5E9,#FFE9CF)]'}`} />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%)]" />
          <div className="absolute inset-x-6 bottom-24 top-32 hidden rounded-[3rem] border border-white/8 bg-white/5 backdrop-blur-[2px] lg:block" />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl flex-col justify-center px-6 py-20 md:min-h-[calc(100dvh-7rem)] md:py-28">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] xl:items-end">
          <div className="max-w-4xl animate-fade-in">
            <span className="section-kicker border-white/10 bg-white/10 text-primary-950/74 before:bg-accent-500">
              Impetus Integrated Learning Academy
            </span>
            <h1 className="mt-6 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[4rem] lg:text-[5.4rem]">
              One Academy.
              <span className="font-display mt-1 block text-[0.94em] font-semibold text-accent-600">
                Two schools. One community.
              </span>
            </h1>
          </div>

          <div className="dark-panel rounded-[2.35rem] p-5 text-primary-950 sm:p-7 animate-slide-up">
            <p className="text-lg leading-relaxed text-primary-950/78 sm:text-xl">
              From Primary School foundations to Secondary School choices, Impetus helps students build knowledge, character, confidence, practical skills, and a healthy relationship with technology.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}



