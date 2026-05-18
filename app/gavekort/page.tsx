import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Gavekort — PULS Kitchen & Bar",
  description: "Giv oplevelsen som gave. Køb gavekort til PULS Kitchen & Bar i Ørestaden.",
};

export default function GavekortPage() {
  return (
    <div className="bg-obsidian pt-24 md:pt-32 space-y-4 md:space-y-6 pb-4 md:pb-6">

      {/* Hero */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="container-max py-10 md:py-14 text-center">
            <FadeIn>
              <p className="eyebrow justify-center mb-5">Gavekort</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="display-section text-5xl md:text-7xl text-obsidian leading-[0.92] mx-auto max-w-[14ch]">
                Giv en{" "}
                <span className="italic-display text-gold font-[400] normal-case">oplevelse</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-obsidian/70 mx-auto max-w-lg leading-relaxed">
                Et gavekort til PULS Kitchen & Bar er en gave der huskes.
                Perfekt til fødselsdage, jubilæer — eller bare fordi.
              </p>
            </FadeIn>
          </div>
          <div className="relative aspect-[16/6] overflow-hidden">
            <Image
              src="/images/interior.jpeg"
              alt="PULS Kitchen & Bar"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Gavekort køb + features */}
      <section className="px-4 md:px-6">
        <div className="bg-bone rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="container-max py-10 md:py-14">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              <FadeIn className="lg:col-span-5">
                <div className="bg-charcoal text-ivory p-8 md:p-10 rounded-2xl">
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4">Køb gavekort</p>
                  <h2 className="display-section text-3xl md:text-4xl text-ivory mb-5">
                    Vælg selv beløbet
                  </h2>
                  <p className="text-ivory/80 leading-relaxed mb-8 text-sm">
                    Gavekortet købes online og sendes direkte til modtageren — eller til dig selv,
                    så du kan give det personligt. Gyldig til mad, drinks og oplevelser hos PULS.
                  </p>
                  <a
                    href="https://order.lifepeaks.dk/puls"
                    target="_blank"
                    rel="noopener"
                    className="btn-gold w-full justify-center"
                  >
                    Køb gavekort online →
                  </a>
                  <p className="mt-4 text-ivory/60 text-xs text-center">
                    Via vores partner Lifepeaks — sikker betaling
                  </p>
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-7" delay={0.08}>
                <div className="space-y-0">
                  {[
                    { title: "Mad & drikke", desc: "Gavekortet dækker alt på menuen — brunch, frokost, aftensmad, cocktails og vin." },
                    { title: "Valgfrit beløb", desc: "Du vælger selv beløbet. Ingen minimums- eller maksimumgrænse." },
                    { title: "Digital levering", desc: "Modtages straks på mail. Kan printes eller vises direkte fra telefonen." },
                    { title: "Ingen udløbsdato", desc: "Gavekortet udløber ikke — brug det når det passer." },
                  ].map((item, i) => (
                    <FadeIn key={item.title} delay={0.05 + i * 0.06}>
                      <div className="flex gap-5 py-5 border-b border-obsidian/10 last:border-0">
                        <span className="font-display font-bold text-2xl text-gold/50 w-8 shrink-0 mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-semibold text-obsidian mb-1">{item.title}</p>
                          <p className="text-obsidian/70 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <div className="mt-8 border border-obsidian/15 p-6 rounded-xl">
                  <p className="text-obsidian/70 text-sm leading-relaxed">
                    Spørgsmål? Skriv til{" "}
                    <a href="mailto:info@pulskitchen.dk" className="text-obsidian font-semibold hover:text-gold transition-colors">
                      info@pulskitchen.dk
                    </a>{" "}
                    eller ring på{" "}
                    <a href="tel:+4532626030" className="text-obsidian font-semibold hover:text-gold transition-colors">
                      +45 3262 6030
                    </a>.
                  </p>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6">
        <div className="bg-charcoal rounded-2xl md:rounded-3xl">
          <div className="container-max py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="display-section text-3xl md:text-4xl text-ivory">
                Eller book et bord{" "}
                <span className="italic-display text-gold font-[400] normal-case">direkte</span>
              </h2>
              <p className="mt-2 text-ivory/70 text-sm">Åbent alle ugens dage fra kl. 10–11.</p>
            </div>
            <Link href="https://www.pulskitchen.dk/booking" target="_blank" rel="noopener" className="btn-gold shrink-0">
              Book bord →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
