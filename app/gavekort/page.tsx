import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Gavekort — PULS Kitchen & Bar",
  description: "Giv oplevelsen som gave. Køb gavekort til PULS Kitchen & Bar i Ørestaden — perfekt til alle lejligheder.",
};

export default function GavekortPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian text-ivory pt-32 md:pt-40 pb-0">
        <div className="container-max">
          <FadeIn>
            <p className="eyebrow mb-6">Gavekort</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="display-section text-5xl md:text-7xl lg:text-8xl max-w-[16ch] text-ivory leading-[0.92]">
              Giv en{" "}
              <span className="italic-display text-gold font-[400] normal-case">
                oplevelse
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-ivory/60 max-w-xl leading-relaxed text-base md:text-lg">
              Et gavekort til PULS Kitchen & Bar er en gave der huskes.
              Perfekt til fødselsdage, jubilæer, mor, far — eller bare fordi.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-14 relative aspect-[16/6] overflow-hidden">
            <Image
              src="/images/interior.jpeg"
              alt="PULS Kitchen & Bar"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
          </div>
        </FadeIn>
      </section>

      {/* Gavekort indhold */}
      <section className="bg-ivory text-obsidian section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12 lg:gap-20">

          <FadeIn className="lg:col-span-5">
            <div className="bg-charcoal text-ivory p-10 md:p-12 rounded-2xl">
              <p className="text-[9px] tracking-[0.38em] uppercase text-gold mb-6">Køb gavekort</p>
              <h2 className="display-section text-3xl md:text-4xl text-ivory mb-6">
                Vælg selv{" "}
                <span className="italic-display text-gold font-[400] normal-case">beløbet</span>
              </h2>
              <p className="text-ivory/60 leading-relaxed mb-8">
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
              <p className="mt-5 text-ivory/35 text-xs text-center">
                Via vores partner Lifepeaks — sikker betaling
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.08}>
            <h2 className="display-section text-3xl md:text-4xl text-obsidian mb-8">
              Hvad er inkluderet?
            </h2>
            <div className="space-y-0">
              {[
                { title: "Mad & drikke", desc: "Gavekortet dækker alt på menuen — brunch, frokost, aftensmad, cocktails og vin." },
                { title: "Valgfrit beløb", desc: "Du vælger selv beløbet. Ingen minimums- eller maksimumgrænse." },
                { title: "Digital levering", desc: "Modtages straks på mail. Kan printes eller vises direkte fra telefonen." },
                { title: "Ingen udløbsdato", desc: "Gavekortet udløber ikke — brug det når det passer." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-6 py-6 border-b border-obsidian/10 last:border-0">
                  <span className="font-display font-bold text-2xl text-gold/40 w-8 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-obsidian mb-1">{item.title}</p>
                    <p className="text-obsidian/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-bone p-8 rounded-xl">
              <p className="text-obsidian/60 text-sm leading-relaxed">
                Spørgsmål til gavekortet? Skriv til os på{" "}
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
      </section>

      {/* CTA strip */}
      <section className="bg-obsidian text-ivory py-16 border-t border-border-col">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="display-section text-3xl md:text-4xl text-ivory">
              Eller book et bord{" "}
              <span className="italic-display text-gold font-[400] normal-case">direkte</span>
            </p>
            <p className="mt-3 text-ivory/50 text-sm">Åbent alle ugens dage fra kl. 10–11.</p>
          </div>
          <Link
            href="https://www.pulskitchen.dk/booking"
            target="_blank"
            rel="noopener"
            className="btn-gold shrink-0"
          >
            Book bord →
          </Link>
        </div>
      </section>
    </>
  );
}
