import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Selskaber & Events — PULS Kitchen & Bar",
  description:
    "To selskabslokaler op til 50 og 30 personer. Firmafest, julefrokost, konfirmation, team-building og mere.",
};

const types = [
  "Firmafest",
  "Julefrokost",
  "Konfirmation",
  "Team-building",
  "Dagsmøde",
  "Fødselsdag",
  "Barnedåb",
  "Bryllup",
];

export default function SelskaberPage() {
  return (
    <>
      <PageHero
        eyebrow="Selskaber & Events"
        title={
          <>
            Plads til at <span className="italic-display text-accent">fejre</span>.
          </>
        }
        description="To separate lokaler op til 50 og 30 personer. AV-udstyr inkluderet. Lokalerne kan lejes helt eller delvis — vi skræddersyer menuen til netop jeres arrangement."
      />

      <section className="bg-cream text-ink2 section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden border border-ink2/15">
              <Image
                src="/images/gallery-4.jpeg"
                alt="Selskabslokale på PULS Kitchen & Bar"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="eyebrow text-ink2/70 mb-6">Vi arrangerer</p>
            <h2 className="display-section text-4xl md:text-5xl mb-8">
              Fra <span className="italic-display">10 til 80</span> gæster.
            </h2>
            <p className="text-ink2/70 leading-relaxed mb-6">
              Vores to lokaler kan rumme op til 80 personer tilsammen, eller
              bookes hver for sig. Vi tager os af menu, drikkevarer,
              AV-opsætning og service — I tager jer af at nyde aftenen.
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 mt-6">
              {types.map((t) => (
                <li key={t} className="flex items-center gap-3 py-1">
                  <span className="h-px w-5 bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink text-text section-pad">
        <div className="container-max">
          <FadeIn>
            <p className="eyebrow text-accent mb-6">Lokalerne</p>
            <h2 className="display-section text-4xl md:text-5xl mb-12 max-w-[16ch]">
              To rum med hver sit{" "}
              <span className="italic-display text-accent">temperament</span>.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                cap: "50",
                title: "Det store lokale",
                desc: "Til de større lejligheder — firmafest, julefrokost, runde fødselsdage. Plads til scene, taler og dansegulv.",
              },
              {
                cap: "30",
                title: "Det intime lokale",
                desc: "Mindre selskaber, men ingen kompromisser på maden. Konfirmation, barnedåb, dagsmøde eller en helt særlig fødselsdag.",
              },
            ].map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.1}>
                <div className="border border-border bg-surface p-10 md:p-12 h-full hover:border-accent transition-colors">
                  <span className="block font-display text-7xl md:text-8xl text-accent leading-none">
                    {r.cap}
                  </span>
                  <p className="text-[10px] tracking-[0.32em] uppercase text-text/60 mt-2">
                    Personer
                  </p>
                  <h3 className="display-section text-3xl mt-8">{r.title}</h3>
                  <p className="text-text/80 leading-relaxed mt-3">{r.desc}</p>
                  <ul className="mt-6 space-y-1 text-sm text-text/60">
                    <li>— AV-udstyr</li>
                    <li>— Skræddersyet menu</li>
                    <li>— Fuld eller delvis leje</li>
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 bg-accent text-ink2 p-10 md:p-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-ink2/70 mb-3">
                    Forespørgsel
                  </p>
                  <h3 className="display-section text-3xl md:text-4xl mb-3">
                    Send os en mail med dato, antal gæster og ønsker.
                  </h3>
                  <p className="text-ink2/80">
                    Vi vender hurtigt tilbage med et oplæg, der passer til jeres
                    arrangement.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a href="mailto:info@pulskitchen.dk" className="btn-ink">
                    info@pulskitchen.dk
                  </a>
                  <a href="tel:+4532626030" className="btn-outline text-ink2">
                    <span>+45 3262 6030</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
