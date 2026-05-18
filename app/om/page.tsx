import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Om Os — PULS Kitchen & Bar",
  description: "Oplev følelsen af New Yorker råhed og pariser-elegance hos PULS Kitchen & Bar i Ørestaden. Restaurant med fransk, italiensk og nordisk mad.",
};

const facts = [
  { label: "Indendørs", value: "140", unit: "gæster" },
  { label: "Terrasse", value: "150", unit: "gæster" },
  { label: "Åbent", value: "7", unit: "dage" },
];

export default function OmPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian text-ivory pt-32 md:pt-40 pb-0">
        <div className="container-max">
          <FadeIn>
            <p className="eyebrow mb-6">Om Os</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="display-section text-5xl md:text-7xl lg:text-8xl max-w-[18ch] text-ivory leading-[0.92]">
              The feeling of New Yorker rawness{" "}
              <span className="italic-display text-gold font-[400] normal-case">
                and Parisian elegance
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-ivory/55 text-sm tracking-[0.18em] uppercase font-semibold">
              Restaurant i Ørestad med fransk, italiensk og nordisk mad
            </p>
          </FadeIn>
        </div>

        {/* Full-width image */}
        <FadeIn delay={0.15}>
          <div className="mt-14 relative aspect-[16/7] overflow-hidden">
            <Image
              src="/images/interior.jpeg"
              alt="PULS Kitchen & Bar interiør"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>
        </FadeIn>
      </section>

      {/* Intro tekst */}
      <section className="bg-ivory text-obsidian section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-8">
                {facts.map((f) => (
                  <div key={f.label} className="border-t border-obsidian/15 pt-6">
                    <p className="font-display font-bold text-4xl md:text-5xl text-obsidian tracking-tight">{f.value}</p>
                    <p className="text-[10px] tracking-[0.28em] uppercase text-stone mt-1">{f.unit}</p>
                    <p className="text-sm font-semibold text-obsidian/60 mt-1">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-8" delay={0.08}>
            <div className="space-y-7 text-obsidian/70 leading-relaxed text-base md:text-lg max-w-2xl">
              <p>
                Oplev følelsen af New Yorker råhed og pariser-elegance hos PULS Kitchen & Bar —
                din moderne restaurant i Ørestaden. Her serverer vi brunch, frokost og middag
                med fokus på friske råvarer, god stemning og enkle smage inspireret af det
                franske, italienske og nordiske køkken.
              </p>
              <p>
                Du finder os ved vandet — med plads til 140 gæster indendørs og 150 på vores
                store træterrasse. Uanset om du kommer for en byg-selv brunch i weekenden,
                en cocktail eller middag før koncerten i Royal Arena eller en hyggelig aften
                med venner, sørger vi for at du føler dig hjemme.
              </p>
              <p className="text-obsidian font-medium">
                Book bord online — og oplev Ørestads mest indbydende restaurant.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="https://www.pulskitchen.dk/booking"
                target="_blank"
                rel="noopener"
                className="btn-dark"
              >
                Book bord →
              </Link>
              <Link href="/menu" className="btn-outline text-obsidian border-obsidian/25 hover:bg-obsidian hover:text-ivory">
                Se menuen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Facts strip */}
      <section className="bg-obsidian text-ivory py-14 border-t border-border-col">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Åbent alle ugens dage", sub: "Fra kl. 10–11" },
              { label: "140 + 150 pladser", sub: "Inde og på terrassen" },
              { label: "Selskaber op til 50", sub: "Book lokale på forhånd" },
              { label: "Royal Arena", sub: "Få minutters gang" },
            ].map((f) => (
              <div key={f.label} className="border-t border-border-col pt-6">
                <p className="font-semibold text-ivory text-base">{f.label}</p>
                <p className="text-stone text-sm mt-1">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selskaber info */}
      <section className="bg-bone text-obsidian section-pad">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <p className="eyebrow !text-obsidian/50 [&::before]:bg-obsidian/30 mb-8">Selskaber & store grupper</p>
            <div className="space-y-5 text-obsidian/70 leading-relaxed text-base md:text-lg">
              <p>
                Ved selskaber over 8 personer bedes De venligst reservere bord på forhånd.
                Vi foretrækker ligeledes en forudbestilling af maden.
                Man kan endvidere booke vores selskabslokale op til 50 personer.
              </p>
              <p className="text-obsidian font-medium">
                Vi glæder os til at byde Dem velkommen.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:info@pulskitchen.dk" className="btn-dark">
                info@pulskitchen.dk
              </a>
              <a href="tel:+4532626030" className="inline-flex items-center gap-2 border border-obsidian/25 px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-obsidian hover:text-ivory transition-colors">
                +45 3262 6030
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
