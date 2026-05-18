import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Kontakt & Om Os — PULS Kitchen & Bar",
  description: "Find os på Arne Jacobsens Allé 9 i Ørestaden. Åbningstider, kontakt, selskaber og mere om PULS Kitchen & Bar.",
};

const hours = [
  { day: "Man – Tors", time: "11.00 – 22.00", kitchen: "Køkken til 21.30" },
  { day: "Fredag",     time: "11.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Lørdag",     time: "10.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Søndag",     time: "10.00 – 22.00", kitchen: "Køkken til 21.00" },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian text-ivory pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-max">
          <FadeIn>
            <p className="eyebrow mb-6">Kontakt & Om Os</p>
          </FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            <FadeIn className="lg:col-span-7" delay={0.05}>
              <h1 className="display-section text-5xl md:text-7xl text-ivory leading-[0.92]">
                The feeling of New Yorker rawness{" "}
                <span className="italic-display text-gold font-[400] normal-case">
                  and Parisian elegance
                </span>
              </h1>
              <p className="mt-5 text-ivory/50 text-sm tracking-[0.18em] uppercase font-semibold">
                Restaurant i Ørestad med fransk, italiensk og nordisk mad
              </p>
            </FadeIn>
            <FadeIn className="lg:col-span-5" delay={0.1}>
              <div className="space-y-5 text-ivory/65 leading-relaxed">
                <p>
                  Oplev følelsen af New Yorker råhed og pariser-elegance hos PULS Kitchen & Bar.
                  Vi serverer brunch, frokost og middag med fokus på friske råvarer og enkle smage
                  inspireret af det franske, italienske og nordiske køkken.
                </p>
                <p>
                  Du finder os ved vandet — med plads til 140 gæster indendørs og 150 på vores
                  store træterrasse. Uanset om du kommer for brunch, en cocktail før Royal Arena
                  eller en hyggelig aften, sørger vi for at du føler dig hjemme.
                </p>
              </div>
              <Link
                href="https://www.pulskitchen.dk/booking"
                target="_blank"
                rel="noopener"
                className="btn-gold mt-8"
              >
                Book bord online →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="bg-charcoal text-ivory border-y border-border-col py-10">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Indendørs", value: "140 gæster" },
              { label: "Terrasse",  value: "150 gæster" },
              { label: "Selskabslokale", value: "Op til 50" },
              { label: "Royal Arena", value: "Få min. gang" },
            ].map((f) => (
              <div key={f.label} className="border-t border-border-col pt-5">
                <p className="font-display font-bold text-2xl text-ivory tracking-tight">{f.value}</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-stone mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adresse + kort */}
      <section className="bg-ivory text-obsidian section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-4">
            <p className="eyebrow !text-obsidian/55 [&::before]:bg-obsidian/30 mb-8">Find os</p>
            <address className="not-italic">
              <p className="display-section text-3xl md:text-4xl text-obsidian leading-tight">
                Arne Jacobsens<br />
                <span className="italic-display font-[400] normal-case text-gold">Allé 9</span>
              </p>
              <p className="mt-4 text-obsidian/55 tracking-wide">2300 København S</p>
            </address>

            <div className="mt-8 space-y-3 border-t border-obsidian/12 pt-8">
              <a href="tel:+4532626030" className="flex items-center gap-3 text-obsidian/70 hover:text-gold transition-colors">
                <span className="text-[9px] tracking-[0.28em] uppercase text-stone w-10 shrink-0">Tlf.</span>
                +45 3262 6030
              </a>
              <a href="mailto:info@pulskitchen.dk" className="flex items-center gap-3 text-obsidian/70 hover:text-gold transition-colors">
                <span className="text-[9px] tracking-[0.28em] uppercase text-stone w-10 shrink-0">Mail</span>
                info@pulskitchen.dk
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="https://www.pulskitchen.dk/booking" target="_blank" rel="noopener" className="btn-dark">
                Book bord
              </Link>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-obsidian/25 px-6 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Find vej ↗
              </a>
            </div>

            {/* Selskaber */}
            <div className="mt-10 pt-10 border-t border-obsidian/12">
              <p className="text-[10px] tracking-[0.28em] uppercase text-obsidian/50 mb-4">Selskaber</p>
              <p className="text-obsidian/65 leading-relaxed text-sm">
                Ved selskaber over 8 personer bedes De venligst reservere bord på forhånd.
                Vi foretrækker ligeledes en forudbestilling af maden. Man kan endvidere booke
                vores selskabslokale op til 50 personer.
              </p>
              <p className="mt-4 text-obsidian/65 leading-relaxed text-sm">
                Vi glæder os til at byde Dem velkommen.
              </p>
            </div>

            {/* Sociale medier */}
            <div className="mt-10 pt-10 border-t border-obsidian/12">
              <p className="text-[10px] tracking-[0.28em] uppercase text-obsidian/50 mb-5">Følg os</p>
              <ul className="space-y-2 text-sm">
                {[
                  ["Instagram", "https://www.instagram.com/pulskitchenbar/"],
                  ["Facebook",  "https://www.facebook.com/pulskitchenbar"],
                  ["TripAdvisor", "https://www.tripadvisor.dk/Restaurant_Review-g189541-d23380540-Reviews-Puls_Kitchen_Bar-Copenhagen_Zealand.html"],
                  ["Gavekort",  "https://order.lifepeaks.dk/puls"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener" className="text-obsidian/60 hover:text-gold transition-colors">
                      {label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Kort */}
          <FadeIn className="lg:col-span-8" delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-obsidian/12 h-full min-h-[500px]">
              <iframe
                title="PULS Kitchen & Bar på kort"
                src="https://www.google.com/maps?q=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[500px]"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Åbningstider */}
      <section className="bg-charcoal text-ivory section-pad">
        <div className="container-max">
          <FadeIn>
            <p className="eyebrow mb-10">Åbningstider</p>
          </FadeIn>
          <ul className="space-y-0">
            {hours.map((h) => (
              <FadeIn key={h.day}>
                <li className="grid grid-cols-[1fr_1fr_auto] items-center gap-6 py-5 border-b border-border-col first:border-t first:border-border-col">
                  <span className="text-base md:text-lg font-semibold text-ivory">{h.day}</span>
                  <span className="font-display font-semibold text-2xl md:text-3xl text-ivory tracking-tight">{h.time}</span>
                  <span className="text-sm text-ivory/50 text-right">{h.kitchen}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
