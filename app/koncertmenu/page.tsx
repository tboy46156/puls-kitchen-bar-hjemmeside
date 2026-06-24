import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Koncertmenu",
  description: "Spis inden koncerten i Royal Arena — PULS Kitchen & Bar ligger få minutters gang fra arenaen. Book din plads og nyd et godt måltid uden stress.",
};

const menu = {
  starter: {
    title: "Forret",
    dish: "Husets brød med smør, tarteletter med hummer og dild",
  },
  main: {
    title: "Hovedret",
    dish: "Stegt kyllingebryst med bagte rodfrugter, sauce vierge og sprød kartoffel",
    alt: "Vegetar: Risotto med svampe, parmesan og frisk timian",
  },
  dessert: {
    title: "Dessert",
    dish: "Chokolademousse med karamel og flagesalt",
  },
};

const faqs = [
  {
    q: "Hvornår skal jeg møde op?",
    a: "Vi anbefaler at du ankommer senest 2 timer inden koncertstart, så du kan spise i ro og nå frem til arenaen i god tid.",
  },
  {
    q: "Hvad er gåafstanden til Royal Arena?",
    a: "Fra PULS Kitchen & Bar til Royal Arena er der under 5 minutters gang — du kan nemt nå det selv i heels.",
  },
  {
    q: "Er der vegetarmuligheder?",
    a: "Ja. Vi tilbyder altid et vegetarisk alternativ til hovedretten. Fortæl os gerne om eventuelle allergier ved booking.",
  },
  {
    q: "Kan jeg booke for en gruppe?",
    a: "Selvfølgelig. Vi tager gerne imod grupper. Kontakt os på info@pulskitchen.dk, så finder vi en løsning.",
  },
  {
    q: "Hvad er inkluderet i prisen?",
    a: "3 retter samt vand og kaffe/te til maden. Øvrige drikkevarer kan tilkøbes fra vores bar- og vinkort.",
  },
  {
    q: "Kan jeg bestille ekstra drikkevarer?",
    a: "Ja. Vores fulde drikkekort er tilgængeligt — cocktails, naturvin, fadøl og sodavand.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function KoncertmenuPage() {
  return (
    <div className="bg-bone">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
        <Image
          src="/images/royal-arena.jpg"
          alt="Royal Arena — PULS Kitchen & Bar ligger 5 minutters gang fra arenaen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end text-center h-full pb-16 md:pb-24 px-[clamp(1.25rem,4vw,3rem)]" style={{ minHeight: "60vh" }}>
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-ivory/70 mb-4">
              Tæt på Royal Arena
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="display-section text-ivory text-5xl md:text-7xl lg:text-8xl leading-none max-w-[16ch] mx-auto">
              Spis inden koncerten
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 font-sans text-ivory/80 max-w-lg mx-auto leading-relaxed text-base md:text-lg">
              Nyd et godt måltid uden stress. Vi ligger få minutters gang fra Royal Arena — og vi sørger for, at du er mæt og tilfreds inden tæppet går op.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" rel="noopener" className="btn-gold mt-8">
              Book bord →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-forest text-ivory py-10 md:py-14">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "3 retter", label: "Forret, hovedret & dessert" },
              { value: "< 5 min", label: "Gåafstand til Royal Arena" },
              { value: "395 kr", label: "Per person" },
            ].map((s) => (
              <div key={s.value}>
                <p className="font-display font-bold text-4xl md:text-5xl text-ivory leading-none">{s.value}</p>
                <p className="mt-2 font-sans text-sm text-ivory/65 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="px-4 md:px-6 py-1.5 md:py-2">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-14 md:py-20">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-stone mb-3">Menuen</p>
                <h2 className="display-section text-4xl md:text-5xl text-obsidian">3 retter</h2>
                <p className="mt-4 font-sans text-obsidian/60 max-w-md mx-auto text-sm leading-relaxed">
                  Menuen skifter efter sæson. Alle retter laves fra bunden på råvarer vi selv ville spise.
                </p>
              </div>
            </FadeIn>

            <div className="max-w-2xl mx-auto space-y-0 divide-y divide-border-col">
              {([menu.starter, menu.main, menu.dessert] as { title: string; dish: string; alt?: string }[]).map((course, i) => (
                <FadeIn key={course.title} delay={i * 0.08}>
                  <div className="py-8 md:py-10 grid md:grid-cols-4 gap-4 md:gap-8 items-start">
                    <p className="font-sans text-xs tracking-[0.25em] uppercase text-stone">{course.title}</p>
                    <div className="md:col-span-3">
                      <p className="font-display font-semibold text-lg md:text-xl text-obsidian leading-snug">{course.dish}</p>
                      {course.alt && (
                        <p className="mt-2 font-sans text-sm text-obsidian/55">{course.alt}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-12 pt-8 border-t border-border-col flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-display font-bold text-3xl text-obsidian">395 kr <span className="font-sans font-normal text-base text-obsidian/50">/ person</span></p>
                <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" rel="noopener" className="btn-gold">
                  Book bord →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem / solution */}
      <section className="px-6 md:px-16 lg:px-24 py-1.5 md:py-2">
        <div className="bg-sand rounded-2xl md:rounded-3xl">
          <div className="max-w-5xl mx-auto py-14 md:py-20 px-6 md:px-12">
            <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-center">
              <FadeIn>
                <h2 className="display-section text-4xl md:text-5xl text-obsidian">
                  Restauranter er fyldte på koncertaftener
                </h2>
                <p className="mt-6 font-sans text-obsidian/65 leading-relaxed">
                  Alle ved det. Køerne er lange, bordene er optaget og stemningen stresset. Hos PULS har vi altid plads — og vi ved, at du skal nå noget. Vores personale er trænet i at servere et godt måltid i det tempo, der passer dig.
                </p>
                <p className="mt-4 font-sans text-obsidian/65 leading-relaxed">
                  Book din plads i god tid. Kom, spis og gå stille og roligt til arenaen.
                </p>
                <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" rel="noopener" className="btn-gold mt-8 inline-flex">
                  Reservér bord →
                </Link>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl">
                  <Image
                    src="/images/tasting.jpg"
                    alt="Mad hos PULS"
                    fill
                    sizes="(min-width:768px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-6 py-1.5 md:py-2 mb-2">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-14 md:py-20 max-w-3xl">
            <FadeIn>
              <h2 className="display-section text-4xl md:text-5xl text-obsidian mb-10">Ofte stillede spørgsmål</h2>
            </FadeIn>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-forest py-24 md:py-36 text-center px-[clamp(1.25rem,4vw,3rem)]">
        <FadeIn>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-ivory/50 mb-6">Klar til en god aften?</p>
          <h2 className="display-section text-ivory text-5xl md:text-6xl lg:text-7xl max-w-[14ch] mx-auto leading-none">
            Book bord og nyd maden inden showet
          </h2>
          <p className="mt-6 font-sans text-ivory/65 max-w-sm mx-auto leading-relaxed">
            Vi holder åbent alle dage. Ring eller book online.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" rel="noopener" className="btn-gold">
              Book bord →
            </Link>
            <a href="tel:+4532626030" className="btn-ghost">
              +45 3262 6030
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
