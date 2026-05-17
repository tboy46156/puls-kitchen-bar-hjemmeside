import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const cards = [
  {
    label: "Spisekort",
    description: "Sæsonretter, brunch og signaturanretninger fra vores køkken.",
    image: "/images/food.jpg",
    href: "/menu",
  },
  {
    label: "Drikkekort",
    description: "Cocktails, naturvin og fadøl sammensat af vores bar manager.",
    image: "/images/drinks.jpg",
    href: "/menu",
  },
];

export default function DishesSection() {
  return (
    <section className="bg-obsidian section-pad">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="eyebrow justify-center mb-5">Vores menu</p>
            <h2 className="display-section text-5xl md:text-6xl lg:text-7xl text-ivory">
              Retter der{" "}
              <span className="italic-display text-gold font-[400] normal-case">
                bringer dig tilbage
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {cards.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08}>
              <Link href={c.href} className="group block relative overflow-hidden" style={{ aspectRatio: "9/7" }}>
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/50 to-obsidian/20" />
                <div className="absolute bottom-0 inset-x-0 p-7 md:p-10">
                  <h3 className="display-section text-3xl md:text-4xl lg:text-5xl text-ivory leading-none">
                    {c.label}
                  </h3>
                  <p className="mt-3 text-ivory/70 text-sm leading-relaxed max-w-xs">
                    {c.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-semibold text-gold">
                    Se mere <span>→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 text-center">
            <Link href="/menu" className="btn-ghost">Se hele menuen →</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
