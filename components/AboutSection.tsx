"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="om" className="bg-ivory pt-24 md:pt-28">
      <div className="container-max py-8 md:py-10">
        <FadeIn>
          <div className="text-center mb-6">
            <p className="eyebrow !text-obsidian/60 [&::before]:hidden">
              {t.eyebrow}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="display-section text-4xl md:text-6xl lg:text-7xl text-obsidian text-center">
            {t.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-10 mx-auto max-w-4xl text-obsidian leading-relaxed text-base md:text-lg">
            {t.p1}
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="mt-5 mx-auto max-w-4xl text-obsidian leading-relaxed text-base md:text-lg">
            {t.p2}
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <p className="mt-5 mx-auto max-w-4xl text-obsidian leading-relaxed text-base md:text-lg">
            {t.p3}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
