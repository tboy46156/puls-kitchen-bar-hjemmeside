import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function EventsTeaserSection() {
  return (
    <section className="bg-obsidian border-t border-border-col">
      <div className="container-max py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left — aften info */}
          <FadeIn className="lg:col-span-4">
            <div className="bg-bone text-obsidian p-8 md:p-10 rounded-2xl">
              <p className="eyebrow !text-obsidian/50 [&::before]:bg-obsidian/40 mb-6">
                Aften / Evening
              </p>
              <h2 className="display-section text-3xl md:text-4xl max-w-[16ch]">
                Casual dining{" "}
                <span className="italic-display font-[400] normal-case">
                  fra kl. 17
                </span>
              </h2>
              <p className="mt-5 text-obsidian/65 leading-relaxed text-sm">
                Italian, French & Nordic fusion kitchen. Aftenkortet gælder
                fra kl. 17.00 alle dage. Køkkenet lukker kl. 22.00 — søndag kl. 21.00.
              </p>
              <Link
                href="/menu"
                className="mt-7 inline-flex items-center gap-2 border border-obsidian/25 px-5 py-3 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Se aftenkortet →
              </Link>
            </div>
          </FadeIn>

          {/* Middle — chef tasting */}
          <FadeIn className="lg:col-span-4" delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/tasting.jpg"
                alt="Chef's Seasonal Tasting"
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover object-[80%_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/5" />
              <div className="absolute bottom-0 inset-x-0 p-7">
                <p className="text-[9px] tracking-[0.38em] uppercase text-gold/80 mb-3">Eksklusive aftener</p>
                <h3 className="display-section text-2xl md:text-3xl text-ivory max-w-[14ch]">
                  Fem retter.{" "}
                  <span className="italic-display text-gold font-[400] normal-case">
                    Sæsonens menu.
                  </span>
                </h3>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <p className="font-display font-semibold text-3xl text-gold tracking-tight">695 kr</p>
                  <Link
                    href="https://www.pulskitchen.dk/booking"
                    target="_blank"
                    rel="noopener"
                    className="btn-gold !py-2.5 !text-[10px]"
                  >
                    Reservér
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Instagram */}
          <FadeIn className="lg:col-span-4" delay={0.15}>
            <div className="bg-charcoal p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <p className="text-[9px] tracking-[0.38em] uppercase text-gold mb-6">Følg os</p>
                <h3 className="display-section text-2xl md:text-3xl text-ivory max-w-[14ch]">
                  Se hvad der{" "}
                  <span className="italic-display text-gold font-[400] normal-case">
                    sker
                  </span>
                </h3>
                <p className="mt-5 text-ivory/60 leading-relaxed text-sm">
                  Sæsonmenuer, events og hverdagsbilleder fra køkkenet og baren.
                  Vi annoncerer alt på Instagram.
                </p>
              </div>
              <a
                href="https://www.instagram.com/pulskitchenbar/"
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-3 border border-gold/30 px-5 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold text-gold hover:bg-gold hover:text-obsidian transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @pulskitchenbar →
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
