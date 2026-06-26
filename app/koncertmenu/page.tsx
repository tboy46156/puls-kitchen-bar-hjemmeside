import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import KoncertMenuContent from "@/components/KoncertMenuContent";

export const metadata: Metadata = {
  title: "Koncertmenu — PULS Kitchen & Bar",
  description: "Spis inden koncerten i Royal Arena — PULS Kitchen & Bar ligger få minutters gang fra arenaen. Se menuen og book dit bord.",
};

const faqs = [
  {
    q: "Hvornår skal jeg møde op?",
    a: "Vi anbefaler at du ankommer senest 1,5–2 timer inden koncertstart, så du kan spise i ro og nå frem til arenaen i god tid.",
  },
  {
    q: "Hvad er gåafstanden til Royal Arena?",
    a: "Fra PULS Kitchen & Bar til Royal Arena er der ca. 15 minutters gang — god tid til at fordøje maden inden showet starter.",
  },
  {
    q: "Er der vegetarmuligheder?",
    a: "Ja. Vi tilbyder altid vegetariske alternativer. Fortæl os gerne om eventuelle allergier ved booking.",
  },
  {
    q: "Kan jeg booke for en gruppe?",
    a: "Selvfølgelig. Vi tager gerne imod grupper til koncertaftener. Skriv til os på info@pulskitchen.dk, så finder vi plads til jer.",
  },
  {
    q: "Skal jeg booke bord på forhånd?",
    a: "Vi anbefaler altid at booke på forhånd på koncertaftener — der er mange der har samme idé som dig, og vi vil nødigt sende dig videre.",
  },
  {
    q: "Kan jeg bestille ekstra drikkevarer?",
    a: "Ja. Vores fulde bar- og vinkort er tilgængeligt hele aftenen — cocktails, naturvin, fadøl og sodavand.",
  },
  {
    q: "Er der parkering i nærheden?",
    a: "Ja, der er parkeringsmuligheder i Ørestad tæt på restauranten. Vi anbefaler dog metroen — Ørestad Station er kun få minutters gang fra os.",
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
    <div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen">
        <Image
          src="/images/royal-arena.jpg"
          alt="Royal Arena — PULS Kitchen & Bar ligger 5 minutters gang fra arenaen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end text-center min-h-screen pb-16 md:pb-24 px-[clamp(1.25rem,4vw,3rem)]">
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
              Vi ligger få minutters gang fra Royal Arena. Kom og spis i ro, og start koncerten med høj PULS.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-sage-solid mt-8"
            >
              Book bord →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Menuen direkte */}
      <section className="bg-ivory">
        <div className="container-max py-14 md:py-20">
          <FadeIn>
            <div className="mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-stone mb-2">Koncert- & Konferencemenu</p>
              <h2 className="display-section text-4xl md:text-5xl text-obsidian">Menukort</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <KoncertMenuContent />
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="mt-12 pt-8 border-t border-border-col flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-obsidian/50">Allergener — spørg venligst personalet</p>
              <Link
                href="https://book.easytable.com/book/?id=1214a&lang=auto"
                target="_blank"
                rel="noopener"
                className="btn-sage-solid"
              >
                Book bord →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem / solution */}
      <section className="bg-sand">
        <div className="max-w-5xl mx-auto py-10 md:py-14 px-6 md:px-12">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-center">
            <FadeIn>
              <h2 className="display-section text-4xl md:text-5xl text-obsidian">
                Restauranter er fyldte på koncertaftener
              </h2>
              <p className="mt-6 font-sans text-obsidian/65 leading-relaxed">
                Alle ved det. Køerne er lange, bordene er optaget og stemningen stresset. Hos PULS har vi altid plads — og vi ved, at du skal nå noget. Vores personale sørger for et godt måltid i det tempo, der passer dig.
              </p>
              <p className="mt-4 font-sans text-obsidian/65 leading-relaxed">
                Book din plads i god tid. Kom, spis og gå stille og roligt til arenaen.
              </p>
              <Link
                href="https://book.easytable.com/book/?id=1214a&lang=auto"
                target="_blank"
                rel="noopener"
                className="btn-sage-solid mt-8 inline-flex"
              >
                Reservér bord →
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden">
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
      </section>

      {/* FAQ */}
      <section className="bg-ivory">
        <div className="container-max py-14 md:py-20 max-w-3xl">
          <FadeIn>
            <h2 className="display-section text-4xl md:text-5xl text-obsidian mb-10">Ofte stillede spørgsmål</h2>
          </FadeIn>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest py-24 md:py-36 text-center px-[clamp(1.25rem,4vw,3rem)]">
        <FadeIn>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-ivory/50 mb-6">Klar til en god aften?</p>
          <h2 className="display-section text-ivory text-5xl md:text-6xl lg:text-7xl max-w-[14ch] mx-auto leading-none">
            Book bord og nyd maden inden showet
          </h2>
          <p className="mt-6 font-sans text-ivory/65 max-w-sm mx-auto leading-relaxed">
            Vi holder åbent alle dage. Ring eller book online.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-sage-solid"
            >
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
