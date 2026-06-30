import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Selskabslokaler — PULS Kitchen & Bar i Ørestad",
  description: "Lej selskabslokale til 30 eller 50 gæster hos PULS Kitchen & Bar i Ørestad, København S. Perfekt til konfirmationer, fødselsdage, firmaarrangementer, barnedåb og mindehøjtider. Fuldt AV-udstyr inkluderet.",
};

const features = [
  { title: "Skræddersyet menu", body: "Fra tre retters middag til buffet — tilpasset jeres anledning og budget." },
  { title: "Fuldt AV-udstyr",   body: "Lyd, projektor og skærm inkluderet i begge lokaler. Klar til præsentationer og taler." },
  { title: "Dedikeret service",  body: "Eget serveringsteam der kun er jeres for aftenen." },
  { title: "Drikkevarer",        body: "Vin, fadøl, cocktails og alkoholfri — pakke eller løbende fra baren." },
  { title: "Fleksibel opsætning", body: "Bordopsætning tilpasses efter aftale — reception, teater, rundt bord." },
  { title: "Parkering",          body: "God parkeringsmulighed i Ørestad direkte ved restauranten." },
];

const lokaler = [
  {
    nr: "01",
    navn: "Lokale 1",
    kapacitet: "Op til 30 gæster",
    beskrivelse: "Et intimt og afskærmet lokale — ideelt til barnedåb, runde fødselsdage, mindehøjtider og mindre firmaarrangementer. Fuldt AV-udstyr og dedikeret personale.",
    image: "/images/selskaber.jpg",
  },
  {
    nr: "02",
    navn: "Lokale 2",
    kapacitet: "Op til 50 gæster",
    beskrivelse: "Vores næststørste lokale med plads til konfirmationer, firmafester og større private selskaber. Fleksibel indretning, fuldt AV-udstyr og eget serveringsteam.",
    image: "/images/selskaber.jpg",
  },
  {
    nr: "03",
    navn: "Hele restauranten",
    kapacitet: "Op til 150 gæster",
    beskrivelse: "Lej hele PULS eksklusivt til jeres arrangement. Perfekt til store firmafester, gallamiddage og jubilæer — fuldt AV-udstyr, dedikeret personale og skræddersyet menu.",
    image: "/images/selskaber.jpg",
  },
];

export default function SelskaberPage() {
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
          <p className="text-xs tracking-[0.28em] uppercase text-ivory/70 font-semibold mb-3">Selskaber & private arrangementer</p>
          <h1 className="display-section text-4xl md:text-6xl text-ivory leading-[0.95]">
            Selskabslokaler til<br />alle anledninger
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ivory">
        <div className="container-max py-12 md:py-16 max-w-4xl text-center">
          <FadeIn>
            <p className="text-forest/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Hos PULS Kitchen &amp; Bar i Ørestad finder du tre selskabslokaler — fra intime rum til 30 gæster til hele restauranten med plads til 150. Perfekte til konfirmationer, fødselsdage, firmaarrangementer og meget mere. Vi tager os af maden, drikkevarerne og servicen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Lokalerne */}
      <section className="bg-sand py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {lokaler.map((l, i) => (
            <FadeIn key={l.nr} delay={i * 0.08}>
              <div className="bg-ivory overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={l.image}
                    alt={`${l.navn} — selskabslokale hos PULS Kitchen & Bar i Ørestad`}
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
                      <p className="text-xs uppercase tracking-[0.18em] text-stone mb-1">Kapacitet</p>
                      <p className="font-semibold text-forest">{l.kapacitet}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-stone mb-1">Udstyr</p>
                      <p className="font-semibold text-forest">Fuldt AV-udstyr</p>
                    </div>
                  </div>
                  <a href="mailto:info@pulskitchen.dk" className="btn-sage-solid text-center">
                    Lej {l.navn}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Hvad er inkluderet */}
      <section className="bg-ivory">
        <div className="container-max py-12 md:py-16">
          <FadeIn>
            <div className="max-w-3xl mb-10">
              <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-4">Hvad er inkluderet</p>
              <h2 className="display-section text-3xl md:text-4xl text-forest">Alt er klar når I ankommer</h2>
              <p className="mt-4 text-forest/60 text-sm leading-relaxed">
                Vi sørger for at lokalet er sat op, teknikken virker og personalet er klar. Jeres eneste opgave er at møde op og fejre det, der skal fejres.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
              {features.map((f) => (
                <div key={f.title} className="border-t border-border-col pt-5">
                  <p className="font-semibold text-forest text-sm mb-1">{f.title}</p>
                  <p className="text-forest/55 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Event-typer */}
      <section className="bg-sand">
        <div className="container-max py-12 md:py-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-4">Vi har prøvet det mange gange</p>
                <h2 className="display-section text-3xl md:text-4xl text-forest mb-6">Fra konfirmation til firmafest</h2>
                <p className="text-forest/65 text-sm leading-relaxed mb-8">
                  Uanset anledning ved vi, hvad der skal til for at en aften lykkes. Vi har arrangeret selskaber for familier, vennegrupper og virksomheder — og vi behandler alle arrangementer med samme omhu og nærvær.
                </p>
                <a href="mailto:info@pulskitchen.dk" className="btn-sage-solid inline-flex">
                  Send en forespørgsel
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Konfirmationer","Fødselsdage","Firmaarrangementer","Barnedåb","Mindehøjtider","Julefrokost","Teambuilding","Private middage"].map((tag) => (
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
            <p className="text-xs tracking-[0.35em] uppercase text-ivory/50 mb-5">Klar til at booke?</p>
            <h2 className="display-section text-ivory text-4xl md:text-5xl lg:text-6xl max-w-[18ch] mx-auto leading-none mb-6">
              Lej PULS til jeres næste arrangement
            </h2>
            <p className="text-ivory/60 text-sm max-w-sm mx-auto leading-relaxed mb-10">
              Kontakt os med dato, antal gæster og anledning — så vender vi tilbage inden for 24 timer med et tilbud.
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
