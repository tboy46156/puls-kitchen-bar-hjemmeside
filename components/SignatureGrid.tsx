import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const dishes = [
  { name: "Garlic Butter Shrimp", price: "178 kr", img: "/images/gallery-3.jpeg" },
  { name: "BBQ Glazed Ribs",      price: "228 kr", img: "/images/hero-2.jpeg" },
  { name: "Truffle Pasta",        price: "168 kr", img: "/images/gallery-4.jpeg" },
  { name: "Crispy Duck Breast",   price: "248 kr", img: "/images/gallery-1.jpeg" },
];

export default function SignatureGrid() {
  return (
    <section className="bg-bone text-obsidian section-pad pb-[clamp(5rem,12vw,10rem)]">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <FadeIn>
              <p className="eyebrow !text-obsidian [&::before]:bg-obsidian mb-6">Signaturretter</p>
              <h2 className="display-section text-5xl md:text-6xl text-obsidian max-w-[14ch]">
                Det vi{" "}
                <span className="italic-display font-[400] normal-case text-obsidian/75">altid anbefaler</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-obsidian/60 leading-relaxed">
                De retter vi ved er gode. Lavet af råvarer der duer, serveret
                uden unødvendig overdrivelse på tallerkenen.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link href="/menu" className="mt-8 btn-dark">
                Se hele menuen
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-5 md:gap-7">
            {dishes.map((d, i) => (
              <FadeIn key={d.name} delay={i * 0.07}>
                <div className="group bg-charcoal overflow-hidden border border-border-col">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      sizes="(min-width:1024px) 28vw, 45vw"
                      className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3.5 md:px-5">
                    <h3 className="text-[11px] tracking-[0.14em] uppercase font-semibold text-ivory">
                      {d.name}
                    </h3>
                    <span className="font-editorial italic text-xl text-gold ml-2 shrink-0">
                      {d.price}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
