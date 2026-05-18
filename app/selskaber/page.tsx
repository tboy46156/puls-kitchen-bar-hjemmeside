import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Selskaber — PULS Kitchen & Bar",
  description: "Book selskabslokale til op til 50 personer hos PULS Kitchen & Bar i Ørestad. Firmafest, fødselsdag, konfirmation og private arrangementer.",
};

export default function SelskaberPage() {
  return (
    <div className="bg-bone pt-24 md:pt-28 space-y-4 md:space-y-5 pb-4 md:pb-5">

      {/* Hero + billede + alt indhold i ét kort */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="container-max py-8 md:py-10">
            <FadeIn>
              <div className="grid md:grid-cols-[5fr_6fr] gap-8 md:gap-12 items-start">

                {/* Billede */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/selskaber.jpg"
                    alt="Selskab ved bardisken hos PULS Kitchen & Bar"
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Al tekst */}
                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-3">Selskaber</p>
                  <h1 className="display-section text-4xl md:text-5xl text-obsidian leading-[0.95] mb-4">
                    Plads til at{" "}
                    <span className="italic-display text-gold font-[400] normal-case">fejre det</span>
                  </h1>
                  <p className="text-obsidian/70 text-sm leading-relaxed mb-6">
                    Vi tager os af maden, drikkevarerne og servicen.<br />I nyder aftenen.
                  </p>

                  {/* Kapacitet */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-y border-obsidian/10 py-5 mb-6">
                    {[
                      { tal: "50",  label: "Gæster i selskabslokalet" },
                      { tal: "140", label: "Gæster indendørs i alt" },
                      { tal: "150", label: "Pladser på terrassen" },
                      { tal: "8+",  label: "Reservér altid på forhånd" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-baseline gap-2">
                        <p className="font-display font-bold text-2xl text-obsidian leading-none shrink-0">{s.tal}</p>
                        <p className="text-xs text-obsidian/60 leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Inkluderet */}
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-3">Inkluderet</p>
                  <div className="mb-6">
                    {[
                      { titel: "Skræddersyet menu", tekst: "Fra tre retters middag til buffet — efter jeres ønsker og budget." },
                      { titel: "Drikkevarer", tekst: "Vin, fadøl, cocktails og alkoholfri. Pakke eller løbende." },
                      { titel: "Lyd & AV", tekst: "Musikanlæg og mulighed for præsentationer og taler." },
                      { titel: "Dedikeret service", tekst: "Eget serveringsteam der kun er jeres for aftenen." },
                    ].map((item) => (
                      <div key={item.titel} className="flex gap-3 py-3 border-b border-obsidian/10 last:border-0">
                        <span className="text-gold mt-0.5 shrink-0">✓</span>
                        <div>
                          <p className="font-semibold text-obsidian text-sm">{item.titel}</p>
                          <p className="text-obsidian/60 text-sm">{item.tekst}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.pulskitchen.dk/booking" target="_blank" rel="noopener" className="btn-gold text-center">
                      Book selskab online →
                    </Link>
                    <a href="mailto:info@pulskitchen.dk" className="text-center border border-obsidian/20 px-4 py-2.5 text-xs tracking-[0.18em] uppercase font-semibold text-obsidian/70 hover:text-gold hover:border-gold transition-colors rounded-lg">
                      Send forespørgsel
                    </a>
                    <a href="tel:+4532626030" className="flex items-center justify-center gap-2 hover:text-gold transition-colors pt-1 group">
                      <span className="text-xs tracking-[0.18em] uppercase text-stone">Tlf.</span>
                      <span className="font-display font-bold text-xl text-obsidian group-hover:text-gold transition-colors">+45 3262 6030</span>
                    </a>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hvem passer det til */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-7 md:py-8">
            <FadeIn>
              <p className="text-xs tracking-[0.22em] uppercase text-gold mb-5">Passer til</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Firmafest", icon: "🏢" },
                  { label: "Julefrokost", icon: "🎄" },
                  { label: "Fødselsdag", icon: "🎂" },
                  { label: "Konfirmation", icon: "🎓" },
                  { label: "Barnedåb", icon: "🌸" },
                  { label: "Teambuilding", icon: "🤝" },
                  { label: "Dagsmøde", icon: "☕" },
                  { label: "Royal Arena-aften", icon: "🎵" },
                ].map((tag) => (
                  <div key={tag.label} className="bg-bone rounded-xl px-4 py-4 text-center">
                    <p className="text-xl mb-1">{tag.icon}</p>
                    <p className="font-semibold text-obsidian text-sm">{tag.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
