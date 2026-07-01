"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function BarSection() {
  return (
    <section className="bg-obsidian overflow-hidden">
      <div className="grid md:grid-cols-2">

        {/* Billede */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px]">
          <Image
            src="/images/drinks.jpg"
            alt="PULS Bar — cocktails og drinks i Ørestad"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/20" />
        </div>

        {/* Tekst */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-14 md:py-20">
          <FadeIn>
            <p className="text-xs tracking-[0.28em] uppercase text-gold font-semibold mb-5">
              PULS Bar
            </p>
            <h2 className="display-section text-4xl md:text-5xl text-ivory leading-[0.95]">
              Signature cocktails.<br />Klassiske drinks.
            </h2>
            <p className="mt-6 text-ivory/70 text-base leading-relaxed max-w-sm">
              Vores bar byder på håndlavede cocktails, et bredt udvalg af vine og kolde øl — nydt ved baren eller ved bordet.
            </p>
            <p className="mt-4 text-ivory/70 text-base leading-relaxed max-w-sm">
              Med få minutters gang til Royal Arena er PULS det naturlige stopover — kom tidligt og nyd stemningen inden showet.
            </p>
            <p className="mt-5 text-sm text-gold/80">
              Happy hour tors. kl. 17–20
            </p>
            <Link
              href="/menu?tab=drinks"
              className="mt-8 btn-gold self-start"
            >
              Se drikkekortet
            </Link>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
