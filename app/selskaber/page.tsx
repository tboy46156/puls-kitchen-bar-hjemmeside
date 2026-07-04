"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const lokalerImages = [
  "/images/selskaber.jpg",
  "/images/selskaber.jpg",
  "/images/selskaber.jpg",
];

export default function SelskaberPage() {
  const { lang } = useLanguage();
  const t = translations[lang].selskaber;
  const [heroLine1, heroLine2] = t.heroHeading.split("\n");

  return (
    <div>

      {/* Video hero */}
      <section className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: 400 }}>
        <video
          src="/Videos/selskaber-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/20 to-obsidian/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-6">
          <p className="text-xs tracking-[0.28em] uppercase text-ivory/70 font-semibold mb-3">{t.eyebrow}</p>
          <h1 className="display-section text-4xl md:text-6xl text-ivory leading-[0.95]">
            {heroLine1}<br />{heroLine2}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ivory">
        <div className="container-max py-12 md:py-16 max-w-4xl text-center">
          <FadeIn>
            <p className="text-forest/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-sand py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {t.lokaler.map((l, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-ivory overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={lokalerImages[i]}
                    alt={`${l.navn} — PULS Kitchen & Bar`}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-3">{l.kapacitet}</p>
                  <h2 className="display-section text-3xl md:text-4xl text-forest mb-4">{l.navn}</h2>
                  <p className="text-forest/65 text-sm leading-relaxed mb-8 flex-1">{l.beskrivelse}</p>
                  <div className="grid grid-cols-2 gap-3 border-t border-border-col pt-6 mb-8 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-stone mb-1">{t.capacity}</p>
                      <p className="font-semibold text-forest">{l.kapacitet}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-stone mb-1">{t.equipment}</p>
                      <p className="font-semibold text-forest">{t.equipmentValue}</p>
                    </div>
                  </div>
                  <a href="mailto:info@pulskitchen.dk" className="btn-sage-solid text-center">
                    {l.btn}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-ivory">
        <div className="container-max py-12 md:py-16">
          <FadeIn>
            <div className="max-w-3xl mb-10">
              <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-4">{t.included.eyebrow}</p>
              <h2 className="display-section text-3xl md:text-4xl text-forest">{t.included.heading}</h2>
              <p className="mt-4 text-forest/60 text-sm leading-relaxed">{t.included.body}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
              {t.features.map((f) => (
                <div key={f.title} className="border-t border-border-col pt-5">
                  <p className="font-semibold text-forest text-sm mb-1">{f.title}</p>
                  <p className="text-forest/55 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-sand">
        <div className="container-max py-12 md:py-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-4">{t.events.eyebrow}</p>
                <h2 className="display-section text-3xl md:text-4xl text-forest mb-6">{t.events.heading}</h2>
                <p className="text-forest/65 text-sm leading-relaxed mb-8">{t.events.body}</p>
                <a href="mailto:info@pulskitchen.dk" className="btn-sage-solid inline-flex">
                  {t.events.enquiry}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.events.tags.map((tag) => (
                  <div key={tag} className="bg-ivory px-4 py-4">
                    <p className="font-semibold text-forest text-sm">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest">
        <div className="container-max py-16 md:py-24 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-ivory/50 mb-5">{t.cta.eyebrow}</p>
            <h2 className="display-section text-ivory text-4xl md:text-5xl lg:text-6xl max-w-[18ch] mx-auto leading-none mb-6">
              {t.cta.heading}
            </h2>
            <p className="text-ivory/60 text-sm max-w-sm mx-auto leading-relaxed mb-10">
              {t.cta.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:info@pulskitchen.dk" className="btn-gold">info@pulskitchen.dk</a>
              <a href="tel:+4532626030" className="btn-ghost">+45 3262 6030</a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
