'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import LearningMotif from '@/components/LearningMotif';
import type { Testimonial } from '@/lib/content';

export default function TestimonialStage({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <div className="violet-panel relative overflow-hidden rounded-[3rem] p-6 sm:p-8 lg:p-12">
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[38px] border-white/5" />
      <div className="relative grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-center">
        <div className="relative min-h-56 overflow-hidden rounded-[2.25rem] bg-white/8 text-accent-200">
          <LearningMotif variant="community" className="absolute inset-0 h-full w-full p-5 opacity-80" />
          <Quote className="absolute bottom-6 left-6 h-12 w-12 text-accent-300" strokeWidth={1.5} />
        </div>

        <div>
          <p className="font-label text-[0.66rem] uppercase tracking-[0.16em] text-accent-200">
            Family voice {currentIndex + 1} of {testimonials.length}
          </p>
          <blockquote
            key={currentTestimonial.quote}
            className="mt-6 max-w-4xl animate-fade-in font-display text-2xl font-semibold leading-[1.35] text-white sm:text-3xl lg:text-[2.35rem]"
            aria-live="polite"
          >
            “{currentTestimonial.quote}”
          </blockquote>
          <p className="mt-7 font-label text-[0.65rem] uppercase tracking-[0.14em] text-white/58">
            {currentTestimonial.attribution}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white hover:bg-white/16"
              aria-label="Show previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white hover:bg-white/16"
              aria-label="Show next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="ml-2 flex items-center gap-2" role="group" aria-label="Choose testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.quote}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={[
                    'h-2.5 rounded-full transition-all',
                    index === currentIndex ? 'w-8 bg-accent-300' : 'w-2.5 bg-white/30 hover:bg-white/55',
                  ].join(' ')}
                  aria-label={'Show testimonial ' + (index + 1)}
                  aria-pressed={index === currentIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}