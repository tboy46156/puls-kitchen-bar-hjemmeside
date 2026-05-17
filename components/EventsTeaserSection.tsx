import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function EventsTeaserSection() {
  return (
    <section className="bg-obsidian">
      <div className="grid lg:grid-cols-2 border-t border-border-col">
        {/* Left — warm bone panel */}
        <FadeIn>
          <div className="bg-bone text-obsidian p-10 md:p-16 lg:p-20 flex flex-col justify-between min-h-[480px]">
            <div>
              <p className="eyebrow !text-obsidian/50 [&::before]:bg-obsidian/40 mb-8">
                Events & sæsonmenuer
              </p>
              <h2 className="display-section text-4xl md:text-5xl lg:text-6xl max-w-[16ch]">
                Oplevelser du{" "}
                <span className="italic-display font-[400] normal-case">
                  ikke vil gå glip af
                </span>
              </h2>
              <p className="mt-6 text-obsidian/65 max-w-md leading-relaxed">
                Vi holder løbende aftener med temaer, sæsonmenuer og tasting
                events. Følg med på Instagram for at se hvad der er på vej.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <div className="relative w-24 h-28 shrink-0 overflow-hidden">
                <Image
                  src="/images/gallery-3.jpeg"
                  alt="Sæsonens menu"
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
              <Link
                href="/selskaber"
                className="inline-flex items-center gap-2 border border-obsidian/25 px-5 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Se alle events →
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Right — chef tasting */}
        <FadeIn delay={0.1}>
          <div className="relative min-h-[480px] flex flex-col justify-end p-10 md:p-14 text-ivory overflow-hidden">
            <Image
              src="/images/tasting.jpg"
              alt="Chef's Seasonal Tasting"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover object-[80%_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/10" />
            <div className="relative">
              <p className="text-[9px] tracking-[0.38em] uppercase text-gold/80">
                Eksklusive aftener
              </p>
              <h3 className="display-section text-3xl md:text-4xl lg:text-5xl mt-4 max-w-[14ch]">
                Chef&apos;s Seasonal{" "}
                <span className="italic-display text-gold font-[400] normal-case">
                  Tasting
                </span>
              </h3>
              <p className="mt-4 max-w-sm text-ivory/75 leading-relaxed">
                Fem retter bygget på sæsonens bedste råvarer. Menuen ændres
                løbende — ingen ret er der for at blive.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div>
                  <p className="text-[9px] tracking-[0.32em] uppercase text-stone">Pris</p>
                  <p className="font-editorial italic text-4xl text-gold mt-1">695 kr</p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-stone">Per gæst</p>
                </div>
                <Link
                  href="https://www.pulskitchen.dk/booking"
                  target="_blank"
                  rel="noopener"
                  className="btn-gold ml-auto"
                >
                  Reservér plads
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
