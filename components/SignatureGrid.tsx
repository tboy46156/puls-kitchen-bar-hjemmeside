import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const dishes = [
  { name: "Garlic Butter Shrimp", price: "178 kr", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=90" },
  { name: "BBQ Glazed Ribs",      price: "228 kr", img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=90" },
  { name: "Truffle Pasta",        price: "168 kr", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=90" },
  { name: "Crispy Duck Breast",   price: "248 kr", img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=90" },
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
                Dem vi{" "}
                <span className="italic-display font-[400] normal-case text-obsidian/75">altid laver</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-obsidian/60 leading-relaxed">
                Ikke på kortet fordi de er nemme. På kortet fordi vi ikke
                gider tage dem af.
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
                <div className="group bg-white overflow-hidden border border-border-col">
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
                    <h3 className="text-[11px] tracking-[0.14em] uppercase font-semibold text-forest">
                      {d.name}
                    </h3>
                    <span className="font-display font-semibold text-lg text-gold ml-2 shrink-0 tracking-tight">
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
