"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-col">
      {items.map((faq, i) => (
        <FadeIn key={faq.q} delay={i * 0.04}>
          <div>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 md:py-7 text-left group"
              aria-expanded={open === i}
            >
              <span className="font-display font-semibold text-base md:text-lg text-obsidian group-hover:text-sage transition-colors">
                {faq.q}
              </span>
              <span
                className="shrink-0 w-6 h-6 flex items-center justify-center border border-border-col rounded-full text-stone group-hover:border-sage group-hover:text-sage transition-all"
                aria-hidden
              >
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-300 ${open === i ? "rotate-180" : "rotate-0"}`}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-48 pb-6" : "max-h-0"}`}
            >
              <p className="font-sans text-obsidian/65 leading-relaxed text-sm md:text-base">
                {faq.a}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
