import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Kontakt & Om Os — PULS Kitchen & Bar",
  description: "Find os på Arne Jacobsens Allé 9 i Ørestaden. Åbningstider, kontakt og mere om PULS Kitchen & Bar.",
};

const hours = [
  { day: "Man – Tors", time: "11.00 – 22.00", kitchen: "Køkken til 21.30" },
  { day: "Fredag",     time: "11.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Lørdag",     time: "10.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Søndag",     time: "10.00 – 22.00", kitchen: "Køkken til 21.00" },
];

export default function KontaktPage() {
  return (
    <div className="bg-obsidian pt-24 md:pt-32 space-y-4 md:space-y-6 pb-4 md:pb-6">

      {/* Hero */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-10 md:py-14 text-center">
            <FadeIn>
              <p className="eyebrow justify-center mb-5">Kontakt & Om Os</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="display-section text-5xl md:text-7xl text-obsidian leading-[0.92] mx-auto max-w-[18ch]">
                The feeling of New Yorker rawness{" "}
                <span className="italic-display text-gold font-[400] normal-case">
                  and Parisian elegance
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-3 text-obsidian/70 mx-auto max-w-xl leading-relaxed">
                <p>
                  Vi serverer brunch, frokost og middag med fokus på friske råvarer
                  inspireret af det franske, italienske og nordiske køkken.
                </p>
                <p>
                  Plads til 140 gæster indendørs og 150 på terrassen. Uanset om du kommer
                  for brunch, en cocktail før Royal Arena eller en hyggelig aften — vi har dig.
                </p>
              </div>
              <Link
                href="https://www.pulskitchen.dk/booking"
                target="_blank"
                rel="noopener"
                className="btn-gold mt-8 inline-flex"
              >
                Book bord online →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info kort */}
      <section className="px-4 md:px-6">
        <div className="bg-charcoal rounded-2xl md:rounded-3xl">
          <div className="container-max py-10 md:py-12">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">

                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4">Adresse</p>
                  <address className="not-italic">
                    <p className="font-display font-bold text-2xl text-ivory leading-snug">
                      Arne Jacobsens Allé 9
                    </p>
                    <p className="mt-1 text-ivory/70 text-sm">2300 København S</p>
                  </address>
                  <div className="mt-5 space-y-2">
                    <a href="tel:+4532626030" className="flex items-center gap-3 hover:text-gold transition-colors">
                      <span className="text-xs tracking-[0.18em] uppercase text-stone w-12 shrink-0">Tlf.</span>
                      <span className="text-ivory font-semibold text-lg">+45 3262 6030</span>
                    </a>
                    <a href="mailto:info@pulskitchen.dk" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors text-sm">
                      <span className="text-xs tracking-[0.18em] uppercase text-stone w-12 shrink-0">Mail</span>
                      info@pulskitchen.dk
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4">Åbningstider</p>
                  <ul className="space-y-2">
                    {hours.map((h) => (
                      <li key={h.day} className="text-sm">
                        <span className="text-ivory/60 w-28 inline-block">{h.day}</span>
                        <span className="text-ivory font-semibold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4">Links</p>
                  <ul className="space-y-2 text-sm mb-6">
                    {[
                      ["Instagram", "https://www.instagram.com/pulskitchenbar/"],
                      ["Facebook",  "https://www.facebook.com/pulskitchenbar"],
                      ["TripAdvisor", "https://www.tripadvisor.dk/Restaurant_Review-g189541-d23380540-Reviews-Puls_Kitchen_Bar-Copenhagen_Zealand.html"],
                      ["Gavekort",  "https://order.lifepeaks.dk/puls"],
                    ].map(([label, href]) => (
                      <li key={label}>
                        <a href={href} target="_blank" rel="noopener" className="text-ivory/70 hover:text-gold transition-colors">
                          {label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2">
                    <Link href="https://www.pulskitchen.dk/booking" target="_blank" rel="noopener" className="btn-gold text-center">
                      Book bord →
                    </Link>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S"
                      target="_blank"
                      rel="noopener"
                      className="text-center border border-border-col px-4 py-2.5 text-xs tracking-[0.18em] uppercase font-semibold text-ivory/70 hover:text-gold hover:border-gold transition-colors rounded-lg"
                    >
                      Find vej ↗
                    </a>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Kort */}
      <section className="px-4 md:px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl md:rounded-3xl min-h-[380px]">
            <iframe
              title="PULS Kitchen & Bar på kort"
              src="https://www.google.com/maps?q=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full min-h-[380px]"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
