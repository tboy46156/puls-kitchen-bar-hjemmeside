import FadeIn from "./FadeIn";
import Link from "next/link";

const hours = [
  { day: "Mandag – Torsdag", time: "11.00 – 22.00", kitchen: "Køkken til 21.30" },
  { day: "Fredag",           time: "11.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Lørdag",           time: "10.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Søndag",           time: "10.00 – 22.00", kitchen: "Køkken til 21.00" },
];

export default function HoursSection() {
  return (
    <section id="hours" className="bg-charcoal text-ivory section-pad">
      <div className="container-max grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <FadeIn><p className="eyebrow mb-6">Find os</p></FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="display-section text-4xl md:text-6xl mb-10">
              Arne Jacobsens{" "}
              <span className="italic-display text-gold font-[400] normal-case">
                Allé 9
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <address className="not-italic text-ivory/75 leading-relaxed mb-6">
              2300 København S
            </address>
            <div className="space-y-1.5">
              <a href="tel:+4532626030" className="block text-ivory/80 hover:text-gold transition-colors">
                +45 3262 6030
              </a>
              <a href="mailto:info@pulskitchen.dk" className="block text-ivory/80 hover:text-gold transition-colors">
                info@pulskitchen.dk
              </a>
            </div>
            <Link
              href="https://www.pulskitchen.dk/booking"
              target="_blank"
              rel="noopener"
              className="btn-gold mt-10"
            >
              Book bord
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="lg:col-span-8" delay={0.15}>
          <p className="text-[9px] tracking-[0.38em] uppercase text-gold mb-8">Åbningstider</p>
          <ul className="divide-y divide-border-col border-y border-border-col">
            {hours.map((h) => (
              <li key={h.day} className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-6">
                <span className="font-display font-bold text-xl md:text-2xl uppercase tracking-[0.02em]">
                  {h.day}
                </span>
                <span className="font-display font-semibold text-2xl md:text-3xl text-gold sm:text-center tracking-tight">
                  {h.time}
                </span>
                <span className="text-stone text-sm sm:text-right self-center">
                  {h.kitchen}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
