import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function EventsTeaserSection() {
  return (
    <section className="bg-bone px-4 md:px-6 pb-2 md:pb-3">
      <div className="bg-sand rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="container-max py-6 md:py-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

            {/* Left — casual dining */}
            <FadeIn>
              <div className="text-center lg:text-left">
                <h2 className="display-section text-3xl md:text-4xl text-obsidian max-w-[16ch] mx-auto lg:mx-0">
                  Casual dining fra kl. 17
                </h2>
                <p className="mt-4 text-obsidian/70 leading-relaxed text-sm max-w-sm mx-auto lg:mx-0">
                  Italian, French & Nordic fusion kitchen. Aftenkortet gælder
                  fra kl. 17.00 alle dage. Køkkenet lukker kl. 22.00 — søndag kl. 21.00.
                </p>
                <Link
                  href="/menu"
                  className="mt-6 inline-flex items-center gap-2 border border-obsidian/25 px-5 py-3 text-xs tracking-[0.18em] uppercase font-semibold text-obsidian hover:border-gold hover:text-gold transition-colors"
                >
                  Se aftenkortet →
                </Link>
              </div>
            </FadeIn>

            {/* Right — chef tasting image */}
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/tasting.jpg"
                  alt="Chef's Seasonal Tasting"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover object-[80%_top]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-2">Eksklusive aftener</p>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="display-section text-2xl md:text-3xl text-ivory">
                      Fem retter.{" "}
                      <span className="italic-display text-gold font-[400] normal-case">
                        Sæsonens menu.
                      </span>
                    </h3>
                    <div className="shrink-0 text-right">
                      <p className="font-display font-semibold text-2xl text-gold tracking-tight">695 kr</p>
                      <Link
                        href="https://www.pulskitchen.dk/booking"
                        target="_blank"
                        rel="noopener"
                        className="mt-2 btn-gold !py-2 !px-4 !text-xs inline-flex"
                      >
                        Reservér
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
