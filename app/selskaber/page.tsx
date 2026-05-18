import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Selskaber — PULS Kitchen & Bar",
  description: "Book selskabslokale til op til 50 personer hos PULS Kitchen & Bar i Ørestad. Firmafest, fødselsdag, konfirmation og private arrangementer.",
};

export default function SelskaberPage() {
  return (
    <div className="bg-obsidian pt-24 md:pt-32 space-y-4 md:space-y-6 pb-4 md:pb-6">

      {/* Hero */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-10 md:py-14 text-center">
            <FadeIn>
              <p className="eyebrow justify-center mb-5">Selskaber</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="display-section text-5xl md:text-7xl text-obsidian leading-[0.92] mx-auto max-w-[14ch]">
                Plads til at{" "}
                <span className="italic-display text-gold font-[400] normal-case">fejre det</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-obsidian/70 mx-auto max-w-xl leading-relaxed">
                Vi tager os af maden, drikkevarerne og servicen. I tager jer af at nyde aftenen.
                Op til 50 personer i selskabslokalet — eller hele restauranten til større fejringer.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link href="https://www.pulskitchen.dk/booking" target="_blank" rel="noopener" className="btn-gold">
                  Book selskab →
                </Link>
                <a href="mailto:info@pulskitchen.dk" className="btn-ghost">
                  Send forespørgsel
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Billede + al information */}
      <section className="px-4 md:px-6">
        <div className="bg-bone rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="container-max py-10 md:py-12">
            <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-start">

              {/* Billede */}
              <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/selskaber.jpg"
                    alt="Selskab ved bardisken hos PULS Kitchen & Bar"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>

              {/* Al tekst */}
              <FadeIn delay={0.08}>
                <div className="text-center md:text-left">
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4">Om lokalet</p>
                  <h2 className="display-section text-3xl md:text-4xl text-obsidian mb-6 leading-tight">
                    Jeres aften,{" "}
                    <span className="italic-display text-gold font-[400] normal-case">jeres regler</span>
                  </h2>

                  {/* Kapacitet tal */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-7 border-y border-obsidian/10 py-5">
                    {[
                      { tal: "50",  label: "Gæster i selskabslokalet" },
                      { tal: "140", label: "Gæster indendørs i alt" },
                      { tal: "150", label: "Pladser på terrassen" },
                      { tal: "8+",  label: "Reservér altid på forhånd" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-baseline gap-3">
                        <p className="font-display font-bold text-2xl md:text-3xl text-obsidian leading-none shrink-0">{s.tal}</p>
                        <p className="text-xs text-obsidian/60 leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Lokale info */}
                  <div className="space-y-4 mb-7">
                    {[
                      { titel: "Kun jeres selskab", tekst: "Lokalet er reserveret til jer. Dedikeret service, ingen deling med resten af restauranten." },
                      { titel: "Op til 50 personer", tekst: "Indret lokalet som det passer jer — formelt middagsselskab, reception eller uformel fest." },
                      { titel: "Hele restauranten", tekst: "Større fejring? Vi har 140 indendørs og 150 på terrassen i sommersæsonen." },
                    ].map((item) => (
                      <div key={item.titel}>
                        <p className="font-semibold text-obsidian mb-1">{item.titel}</p>
                        <p className="text-obsidian/70 text-sm leading-relaxed">{item.tekst}</p>
                      </div>
                    ))}
                  </div>

                  {/* Hvad er inkluderet */}
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4">Inkluderet</p>
                  <div className="space-y-0">
                    {[
                      { nr: "01", titel: "Skræddersyet menu", tekst: "Fra tre retters middag til buffet — vi sammensætter efter jeres ønsker og budget." },
                      { nr: "02", titel: "Drikkevarer", tekst: "Vin, fadøl, cocktails og alkoholfri alternativer. Pakke eller løbende bestilling." },
                      { nr: "03", titel: "Lyd og AV", tekst: "Musikanlæg og mulighed for præsentationer og taler." },
                      { nr: "04", titel: "Dedikeret service", tekst: "Eget serveringsteam der kender jeres program og sørger for at aftenen kører." },
                    ].map((item) => (
                      <div key={item.nr} className="flex gap-4 py-4 border-b border-obsidian/10 last:border-0">
                        <span className="font-display font-bold text-lg text-gold/60 w-8 shrink-0">{item.nr}</span>
                        <div>
                          <p className="font-semibold text-obsidian text-sm mb-0.5">{item.titel}</p>
                          <p className="text-obsidian/60 text-sm leading-relaxed">{item.tekst}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Hvem passer det til */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-10 md:py-12 text-center">
            <FadeIn>
              <p className="eyebrow justify-center !text-obsidian/60 [&::before]:hidden mb-6">Hvem passer det til</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Firmafest", "Julefrokost", "Fødselsdag", "Konfirmation", "Barnedåb", "Teambuilding", "Dagsmøde med frokost", "Royal Arena-aften"].map((tag) => (
                  <span key={tag} className="border border-obsidian/25 text-obsidian px-4 py-2 text-sm tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-obsidian/70 leading-relaxed mx-auto max-w-xl text-sm">
                Ligger I tæt på Royal Arena? Vi er et naturligt samlingspunkt før og efter events.
                Mange grupper starter med middag hos os og fortsætter til showet — eller omvendt.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6">
        <div className="bg-bone rounded-2xl md:rounded-3xl">
          <div className="container-max py-10 md:py-12 text-center">
            <FadeIn>
              <h2 className="display-section text-3xl md:text-4xl text-obsidian leading-tight mb-4">
                Fortæl os hvad I{" "}
                <span className="italic-display text-gold font-[400] normal-case">fejrer</span>
              </h2>
              <p className="text-obsidian/70 text-sm leading-relaxed mx-auto max-w-lg mb-8">
                Dato, antal gæster og ønsker til maden — vi vender tilbage med et forslag inden for 24 timer.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
                <Link
                  href="https://www.pulskitchen.dk/booking"
                  target="_blank"
                  rel="noopener"
                  className="btn-gold w-full text-center"
                >
                  Book selskab online →
                </Link>
                <a
                  href="mailto:info@pulskitchen.dk"
                  className="text-center border border-obsidian/25 px-4 py-2.5 text-xs tracking-[0.18em] uppercase font-semibold text-obsidian/70 hover:text-gold hover:border-gold transition-colors w-full"
                >
                  info@pulskitchen.dk
                </a>
                <a href="tel:+4532626030" className="flex items-center justify-center gap-2 hover:text-gold transition-colors pt-1">
                  <span className="text-xs tracking-[0.18em] uppercase text-stone">Tlf.</span>
                  <span className="text-obsidian font-semibold text-lg">+45 3262 6030</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
