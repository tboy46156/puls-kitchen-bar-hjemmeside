import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function EventsTeaserSection() {
  return (
    <section className="bg-bone px-4 md:px-6 pb-1.5 md:pb-2">
      <div className="grid md:grid-cols-2 gap-4 md:gap-5">

        {/* Bar & Cocktails */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/interior.jpeg"
              alt="PULS bar"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-obsidian/80" />
            <div className="relative h-full flex flex-col justify-end p-7 md:p-8">
              <p className="text-xs tracking-[0.22em] uppercase text-gold mb-3">Bar & Cocktails</p>
              <h2 className="display-section text-2xl md:text-3xl text-ivory mb-3">
                Baren er åben{" "}
                <span className="italic-display text-gold font-[400] normal-case">til vi lukker</span>
              </h2>
              <p className="text-ivory/70 text-sm leading-relaxed mb-5">
                Cocktails udvalgt af vores bar manager. Fadøl, flaske og et omfattende vinkort fra Frankrig, Italien og oversøisk.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 border border-ivory/25 px-5 py-3 text-xs tracking-[0.18em] uppercase font-semibold text-ivory hover:border-gold hover:text-gold transition-colors self-start"
              >
                Se drikkekort →
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Fem retter */}
        <FadeIn delay={0.08}>
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/tasting.jpg"
              alt="Sæsonens smagsmenu"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover object-[80%_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7 md:p-8">
              <p className="text-xs tracking-[0.22em] uppercase text-gold mb-3">Eksklusive aftener</p>
              <h2 className="display-section text-2xl md:text-3xl text-ivory mb-3">
                Fem retter.{" "}
                <span className="italic-display text-gold font-[400] normal-case">Sæsonens menu.</span>
              </h2>
              <p className="text-ivory/70 text-sm leading-relaxed mb-5">
                Udvalgte råvarer fra sæsonen — serveret som en samlet smagsoplevelse.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="https://book.easytable.com/book/?id=1214a&lang=auto"
                  target="_blank"
                  rel="noopener"
                  className="btn-gold !py-2.5"
                >
                  Reservér bord →
                </Link>
                <p className="font-display font-bold text-2xl text-gold">695 kr</p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
