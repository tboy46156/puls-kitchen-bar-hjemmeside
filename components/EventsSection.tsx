import Link from "next/link";
import FadeIn from "./FadeIn";

const rooms = [
  {
    capacity: "50",
    title: "Det store lokale",
    description: "Plads til 50 gæster. Firmafester, julefrokoster og runde fødselsdage har alle holdt til her.",
  },
  {
    capacity: "30",
    title: "Det intime lokale",
    description: "Op til 30 personer. Passer godt til konfirmationer, barnedåb og dagsmøder.",
  },
];

export default function EventsSection() {
  return (
    <section id="selskaber" className="bg-ivory text-obsidian section-pad">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 mb-14 items-end">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow !text-obsidian/55 [&::before]:bg-obsidian/35 mb-5">Selskaber</p>
            <h2 className="display-section text-5xl md:text-6xl lg:text-7xl max-w-[14ch]">
              Skal vi stå for{" "}
              <span className="italic-display font-[400] normal-case text-obsidian/75">
                jeres næste fest?
              </span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-obsidian/65 leading-[1.75] text-base">
              AV-udstyr inkluderet. Fra firmafest og julefrokost til
              konfirmation, barnedåb og team-building — vi ordner resten.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {rooms.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.1}>
              <article className="relative h-full p-10 md:p-12 border border-obsidian/12 bg-bone group hover:bg-forest hover:text-ivory transition-colors duration-500">
                <span className="block font-editorial italic text-7xl md:text-8xl text-gold leading-none">
                  {r.capacity}
                </span>
                <p className="text-[9px] tracking-[0.38em] uppercase opacity-50 mt-2">Personer</p>
                <h3 className="display-section text-3xl mt-8">{r.title}</h3>
                <p className="leading-[1.7] mt-4 max-w-md opacity-70 text-base">{r.description}</p>
                <ul className="mt-6 space-y-1.5 text-sm opacity-60">
                  <li>— AV-udstyr inkluderet</li>
                  <li>— Skræddersyet menu</li>
                  <li>— Fuld eller delvis leje</li>
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 bg-forest text-ivory p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-[9px] tracking-[0.38em] uppercase text-gold mb-3">Forespørgsel</p>
              <h3 className="display-section text-3xl md:text-4xl mb-2">Selskab med 10+ gæster?</h3>
              <p className="text-ivory/60">Send os en mail — vi vender hurtigt tilbage.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@pulskitchen.dk" className="btn-gold">
                info@pulskitchen.dk
              </a>
              <Link href="/selskaber" className="btn-ghost">
                Læs mere
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
