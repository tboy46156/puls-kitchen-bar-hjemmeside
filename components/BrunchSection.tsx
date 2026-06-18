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
    <section id="brunch" className="bg-bone px-4 md:px-6 pb-1.5 md:pb-2">
      <div className="bg-ivory text-obsidian rounded-2xl md:rounded-3xl py-6 md:py-8">
      <div className="container-max">
        <div className="text-center mb-8">
          <FadeIn>
            <p className="eyebrow justify-center !text-obsidian/55 [&::before]:hidden mb-5">Brunch</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="display-section text-5xl md:text-6xl lg:text-7xl text-obsidian mx-auto max-w-[14ch]">
              Weekendens{" "}
              <span className="italic-display font-[400] normal-case text-obsidian/80">slow start</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-obsidian/65 mx-auto max-w-xl leading-[1.75] text-lg">
              To formater: byg din egen fra tre til fem retter på hverdage,
              eller spis ad libitum i weekenden med fri kaffe, juice og hjemmelavet lemonade.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <article className={`relative h-full p-8 md:p-11 border text-center ${
                c.dark
                  ? "bg-forest text-ivory border-white/10"
                  : "bg-bone text-obsidian border-obsidian/10"
              }`}>
                {c.badge && (
                  <span className="absolute top-6 right-6 text-xs tracking-[0.22em] uppercase text-gold">
                    {c.badge}
                  </span>
                )}
                <p className={`text-xs tracking-[0.25em] uppercase ${c.dark ? "text-ivory/60" : "text-obsidian/55"}`}>
                  {c.tag}
                </p>
                <h3 className="display-section text-3xl md:text-4xl mt-3">{c.title}</h3>
                <p className={`mt-3 text-sm tracking-[0.12em] ${c.dark ? "text-gold" : "text-stone"}`}>
                  {c.hours}
                </p>
                <p className={`mt-5 leading-[1.7] text-base ${c.dark ? "text-ivory/75" : "text-obsidian/65"}`}>
                  {c.description}
                </p>

                <ul className={`mt-8 pt-6 space-y-4 border-t ${c.dark ? "border-ivory/10" : "border-obsidian/10"}`}>
                  {c.prices.map(([k, v]) => (
                    <li key={k} className="flex items-baseline gap-3">
                      <span className={`text-xs tracking-[0.22em] uppercase w-20 shrink-0 text-left ${c.dark ? "text-ivory/60" : "text-obsidian/55"}`}>
                        {k}
                      </span>
                      <span className="h-px flex-1 bg-current opacity-[0.08]" />
                      <span className="font-display font-bold text-xl text-gold leading-none">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/brunch"
                  className={`mt-9 inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-semibold ${
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
      </div>
    </section>
  );
}
