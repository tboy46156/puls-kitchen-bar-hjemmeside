import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Brunch — PULS Kitchen & Bar",
  description:
    "Byg-Selv-Brunch i hverdage og ad libitum-brunch i weekenden. Inkl. kaffe, te, juice og hjemmelavet lemonade.",
};

const items = [
  "Croissanter",
  "Røræg og bacon",
  "Laksemousse",
  "Udvalgte oste",
  "Avocado",
  "Frisk frugt",
  "Pandekager",
];

export default function BrunchPage() {
  return (
    <>
      <PageHero
        eyebrow="Brunch"
        title={
          <>
            Komponér din egen{" "}
            <span className="italic-display text-accent">brunch</span>.
          </>
        }
        description="Hos PULS bestemmer du selv. Vælg dine retter fra vores brunchbord — fra en hurtig morgen i ugen til en lang ad libitum-weekend."
      />

      <section className="bg-cream text-ink2 section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-6">
          <FadeIn className="lg:col-span-6">
            <article className="h-full p-8 md:p-12 border border-ink2/15 bg-cream-soft">
              <p className="text-[10px] tracking-[0.32em] uppercase text-ink2/55">
                Hverdage
              </p>
              <h2 className="display-section text-4xl md:text-5xl mt-3">
                Byg-Selv-Brunch
              </h2>
              <p className="mt-3 text-sm tracking-[0.1em] text-ink2/70">
                Man – Fre · 11.00 – 14.00
              </p>
              <p className="text-ink2/75 leading-relaxed mt-6">
                Sammensæt din egen brunch fra et bord med klassikere og friske
                råvarer.
              </p>

              <dl className="mt-8 pt-6 border-t border-ink2/15 space-y-3">
                {[
                  ["3 retter", "95 kr"],
                  ["5 retter", "145 kr"],
                  ["Ekstra ret", "35 kr"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between">
                    <dt>{k}</dt>
                    <span className="flex-1 border-b border-dashed border-ink2/20 mx-3 translate-y-[-3px]" />
                    <dd className="font-display text-2xl text-accent">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </FadeIn>

          <FadeIn className="lg:col-span-6" delay={0.1}>
            <article className="h-full p-8 md:p-12 bg-ink2 text-cream border border-ink2 relative">
              <span className="absolute top-6 right-6 text-[10px] tracking-[0.3em] uppercase text-accent">
                Mest populær
              </span>
              <p className="text-[10px] tracking-[0.32em] uppercase text-cream/55">
                Weekend
              </p>
              <h2 className="display-section text-4xl md:text-5xl mt-3">
                Byg-Selv AD LIBITUM
              </h2>
              <p className="text-accent mt-3 text-sm tracking-[0.1em]">
                Lør – Søn · 10.00 – 14.00
              </p>
              <p className="text-cream/80 leading-relaxed mt-6">
                Spis så meget du kan — inklusive kaffe, te, juice og hjemmelavet
                lemonade.
              </p>

              <dl className="mt-8 pt-6 border-t border-cream/15 space-y-3">
                {[
                  ["Per person", "195 kr"],
                  ["Børn under 12", "½ pris"],
                  ["Børn under 3", "gratis"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between">
                    <dt>{k}</dt>
                    <span className="flex-1 border-b border-dashed border-cream/20 mx-3 translate-y-[-3px]" />
                    <dd className="font-display text-2xl text-accent">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink text-text section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-6">
            <p className="eyebrow text-accent mb-6">På brunchbordet</p>
            <h2 className="display-section text-4xl md:text-5xl mb-8">
              Klassikere og{" "}
              <span className="italic-display text-accent">friske råvarer</span>.
            </h2>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-text/85">
                  <span className="h-px w-6 bg-accent" />
                  {it}
                </li>
              ))}
            </ul>
            <Link
              href="https://www.pulskitchen.dk/booking"
              target="_blank"
              rel="noopener"
              className="btn-accent mt-10"
            >
              Book brunch
            </Link>
          </FadeIn>

          <FadeIn className="lg:col-span-6" delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <Image
                src="/images/gallery-3.jpeg"
                alt="Brunch på PULS"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
