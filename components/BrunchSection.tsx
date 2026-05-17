import Link from "next/link";
import FadeIn from "./FadeIn";

const cards = [
  {
    tag: "Hverdage",
    title: "Byg-Selv-Brunch",
    hours: "Man – Fre · 11.00 – 14.00",
    description: "Komponér din egen brunch fra et bord af croissanter, æg, bacon, laksemousse, oste, avocado, frugt og pandekager.",
    prices: [["3 retter", "95 kr"], ["5 retter", "145 kr"], ["Ekstra ret", "35 kr"]],
    dark: false,
  },
  {
    tag: "Weekend",
    title: "Byg-Selv AD LIBITUM",
    hours: "Lør – Søn · 10.00 – 14.00",
    description: "Spis så meget du kan — inkl. kaffe, te, juice & hjemmelavet lemonade. Børn under 12: halv pris · Under 3: gratis.",
    prices: [["Per person", "195 kr"], ["Børn u. 12", "½ pris"], ["Børn u. 3", "gratis"]],
    dark: true,
    badge: "Mest populær",
  },
];

export default function BrunchSection() {
  return (
    <section id="brunch" className="bg-ivory text-obsidian section-pad">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="eyebrow !text-obsidian/55 [&::before]:bg-obsidian/35 mb-5">Brunch</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="display-section text-5xl md:text-6xl lg:text-7xl text-obsidian max-w-[14ch]">
                Weekendens{" "}
                <span className="italic-display font-[400] normal-case text-obsidian/80">slow start</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn className="lg:col-span-7 lg:pt-12" delay={0.1}>
            <p className="text-obsidian/65 max-w-xl leading-[1.75] text-lg">
              To formater: byg din egen fra tre til fem retter på hverdage,
              eller spis ad libitum i weekenden med fri kaffe, juice og hjemmelavet lemonade.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <article className={`relative h-full p-8 md:p-11 border ${
                c.dark
                  ? "bg-charcoal text-ivory border-border-col"
                  : "bg-bone text-obsidian border-obsidian/10"
              }`}>
                {c.badge && (
                  <span className="absolute top-6 right-6 text-[9px] tracking-[0.34em] uppercase text-gold">
                    {c.badge}
                  </span>
                )}
                <p className={`text-[9px] tracking-[0.38em] uppercase ${c.dark ? "text-ivory/50" : "text-obsidian/45"}`}>
                  {c.tag}
                </p>
                <h3 className="display-section text-3xl md:text-4xl mt-3">{c.title}</h3>
                <p className={`mt-3 text-[11px] tracking-[0.12em] ${c.dark ? "text-gold" : "text-stone"}`}>
                  {c.hours}
                </p>
                <p className={`mt-5 leading-[1.7] text-base ${c.dark ? "text-ivory/75" : "text-obsidian/65"}`}>
                  {c.description}
                </p>

                {/* Prices — integrated as editorial type, part of the card rhythm */}
                <ul className={`mt-8 pt-6 space-y-4 border-t ${c.dark ? "border-ivory/8" : "border-obsidian/8"}`}>
                  {c.prices.map(([k, v]) => (
                    <li key={k} className="flex items-baseline gap-3">
                      <span className={`text-[9px] tracking-[0.32em] uppercase w-20 shrink-0 ${c.dark ? "text-ivory/45" : "text-obsidian/40"}`}>
                        {k}
                      </span>
                      <span className="h-px flex-1 bg-current opacity-[0.08]" />
                      <span className="font-editorial italic text-2xl text-gold leading-none">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/brunch"
                  className={`mt-9 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-semibold ${
                    c.dark ? "text-ivory hover:text-gold" : "text-obsidian hover:text-gold"
                  } transition-colors`}
                >
                  Læs mere <span className="text-gold">→</span>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
