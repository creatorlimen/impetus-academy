'use client';

import { useCallback, useEffect, useState } from 'react';
import VisualMedia from '@/components/VisualMedia';
import type { DivisionContent } from '@/lib/content';

interface SchoolHeroCarouselProps {
  divisions: DivisionContent[];
  interval?: number;
}

export default function SchoolHeroCarousel({
  divisions,
  interval = 3000,
}: SchoolHeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeDivision = divisions[current];

  const next = useCallback(() => {
    setCurrent((previousIndex) => (previousIndex + 1) % divisions.length);
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
          className={[
            'absolute inset-0 transition-opacity duration-700 ease-out',
            index === current ? 'z-10 opacity-100' : 'z-0 opacity-0',
          ].join(' ')}
        >
          <div
            className={
              division.id === 'primary'
                ? 'absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(232,117,18,0.22),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(101,75,199,0.14),transparent_26%),linear-gradient(135deg,#FFF5E9,#FFD9AE)]'
                : 'absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(101,75,199,0.3),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(232,117,18,0.16),transparent_28%),linear-gradient(135deg,#FFF5E9,#EDE9FF)]'
            }
          />
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgba(23,16,68,0.24)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl items-center px-6 py-16 md:min-h-[calc(100dvh-7rem)] md:py-24">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center xl:gap-16">
          <div className="min-w-0 max-w-4xl animate-fade-in">
            <span className="section-kicker border-white/30 bg-white/72 text-primary-950/76 before:bg-accent-500">
              Impetus Integrated Learning Academy
            </span>
            <h1 className="mt-6 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[4rem] lg:text-[5.15rem]">
              One Academy.
              <span className="font-display mt-1 block text-[0.94em] font-semibold text-accent-600">
                Two schools. One community.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-950/76 sm:text-xl">
              From Primary School foundations to Secondary School choices, Impetus helps students build knowledge, character, confidence, practical skills, and a healthy relationship with technology.
            </p>
            <div className="mt-8 flex items-center gap-3" aria-hidden="true">
              {divisions.map((division, index) => (
                <span
                  key={division.id}
                  className={[
                    'h-2.5 rounded-full transition-all duration-300',
                    index === current ? 'w-10 bg-primary-950' : 'w-2.5 bg-primary-950/24',
                  ].join(' ')}
                />
              ))}
              <span className="ml-2 font-label text-[0.62rem] uppercase tracking-[0.14em] text-primary-950/58">
                {activeDivision.label}
              </span>
            </div>
          </div>

          <div key={activeDivision.id} className="min-w-0 animate-scale-in">
            <VisualMedia
              variant={activeDivision.id}
              eyebrow={activeDivision.label}
              title={activeDivision.headline}
              image={activeDivision.media}
              aspectClassName="aspect-[4/3] sm:min-h-[390px] lg:min-h-[520px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}