import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const cards = [
  {
    line1: "Brunch",
    line2: "menu",
    alt: "Brunch hos PULS Kitchen & Bar i Ørestad, København",
    description: "",
    image: "/images/brunch-dish.jpg",
    href: "/brunch",
  },
  {
    line1: "Frokost",
    line2: "menu",
    alt: "Frokostmenu hos PULS Kitchen & Bar i Ørestad, København",
    description: "Serveret til kl. 16",
    image: "/images/food.jpg",
    href: "/brunch",
  },
  {
    line1: "Aften",
    line2: "menu",
    alt: "Aftensmad og sæsonretter hos PULS Kitchen & Bar, Arne Jacobsens Allé 9",
    description: "",
    image: "/images/aften-dish.jpg",
    href: "/menu",
  },
  {
    line1: "Koncert",
    line2: "menu",
    alt: "Koncertmenu inden Royal Arena — PULS Kitchen & Bar, 5 minutters gang fra arenaen",
    description: "Få min. gang fra Royal Arena",
    image: "/images/royal-arena.jpg",
    href: "/koncertmenu",
  },
];

export default function DishesSection() {
  return (
    <section className="bg-sand py-8 md:py-12">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-6">
              <h2 className="display-section text-5xl md:text-6xl lg:text-7xl text-obsidian">
                Hvad vi{" "}
                tilbyder
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {cards.map((c, i) => (
              <FadeIn key={c.line1} delay={i * 0.08}>
                <Link href={c.href} className="group block relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/50 to-obsidian/10" />
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-7">
                    <h3 className="display-section text-xl md:text-4xl text-ivory leading-[0.92]">
                      {c.line1}
                      {c.line2 && <span className="block text-ivory/60">{c.line2}</span>}
                    </h3>
                    <p className="mt-2 text-ivory/70 text-[11px] md:text-xs leading-snug line-clamp-1 md:line-clamp-none min-h-[1rem]">
                      {c.description}
                    </p>
                    <span className="mt-2 md:mt-3 inline-block text-[10px] tracking-[0.28em] uppercase font-semibold text-gold">
                      Se mere
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-5 text-center">
              <Link href="/menu" className="btn-dark">Se hele menuen →</Link>
            </div>
          </FadeIn>
        </div>
    </section>
  );
}
