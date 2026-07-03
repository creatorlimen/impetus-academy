'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/api';

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="surface-panel rounded-[1.5rem] p-1">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 text-left font-semibold text-card-foreground hover:bg-white/70"
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="font-mono text-primary-500">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}



