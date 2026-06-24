import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const cards = [
  {
    tag: "Hverdage 11.00 – 16.00 · Weekend 10.00 – 16.00",
    title: "Frokost",
    body:
      "Friske retter til den lyse del af dagen. Fra hjemmelavet pasta til signaturburgeren — serveret indtil 16.00.",
    image: "/images/gallery-3.jpeg",
  },
  {
    tag: "Alle dage fra 17.00",
    title: "Aften",
    body:
      "Aftenkortet rummer det bedste fra fransk, italiensk og nordisk køkken. Køkkenet er åbent til 22.00 (søn til 21.00).",
    image: "/images/gallery-4.jpeg",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="section-pad bg-bg relative">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow mb-5">Køkkenet</p>
            <h2 className="display-section text-5xl md:text-6xl lg:text-7xl max-w-[16ch]">
              Fransk præcision møder <span className="italic-display text-accent">nordisk ro</span>.
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5 lg:pt-10" delay={0.1}>
            <p className="text-muted leading-relaxed">
              Vores køkkenchefer arbejder på tværs af tre traditioner, men inden for
              samme filosofi — friske råvarer, ærlig håndværk, og en plate der ser
              ud som den smager.
            </p>
            <Link href="/menu" className="btn-outline mt-8">
              Se hele menukortet
            </Link>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <Link href="/menu" className="group block relative aspect-[4/5] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                    {c.tag}
                  </p>
                  <h3 className="display-section text-5xl md:text-6xl mb-4">
                    {c.title}
                  </h3>
                  <p className="max-w-md text-text/85 leading-relaxed">{c.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-text group-hover:text-accent">
                    Se menu <span className="text-accent">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 border border-border p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface">
            <div>
              <p className="text-[10px] tracking-[0.32em] uppercase text-accent mb-2">
                Koncert- & konferencemenu
              </p>
              <h3 className="display-section text-3xl md:text-4xl">
                Til travle aftener i Royal Arena & Bella Center
              </h3>
              <p className="text-muted mt-3 max-w-2xl">
                Særlig menu serveret 16.00 – 20.00 ved store arrangementer i nabolaget.
              </p>
            </div>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-accent shrink-0"
            >
              Book bord
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
