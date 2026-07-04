"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function BarSection() {
  const { lang } = useLanguage();
  const t = translations[lang].bar;
  const [line1, line2] = t.heading.split("\n");

  return (
    <section className="bg-forest">
      <div className="container-max py-12 md:py-16">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-3xl md:text-4xl tracking-[0.28em] uppercase text-ivory/50 font-semibold mb-5">
              {t.eyebrow}
            </p>
            <h2 className="display-section text-4xl md:text-5xl text-ivory leading-[0.95]">
              {line1}<br />{line2}
            </h2>
            <p className="mt-6 text-ivory/70 text-base leading-relaxed">
              {t.p1}
            </p>
            <p className="mt-4 text-ivory/70 text-base leading-relaxed">
              {t.p2}
            </p>
            <p className="mt-5 text-sm text-ivory/40">
              {t.happyHour}
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/menu?tab=drinks" className="btn-sage-solid inline-flex">
                {t.cta}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
