import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const hours = [
  { day: "Mandag – Torsdag", time: "11.00 – 22.00", kitchen: "Køkken til 21.30" },
  { day: "Fredag", time: "11.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Lørdag", time: "10.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Søndag", time: "10.00 – 22.00", kitchen: "Køkken til 21.00" },
];

export const metadata = {
  title: "Kontakt — PULS Kitchen & Bar",
  description: "Adresse, åbningstider og kontaktinformation til PULS Kitchen & Bar i Ørestaden.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Vi ses i <span className="italic-display text-accent">Ørestaden</span>.
          </>
        }
        description="Du finder os på Arne Jacobsens Allé 9 — få minutter fra Royal Arena og Bella Center. Reservér bord, ring eller skriv direkte."
      />

      <section className="bg-cream text-ink2 section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow text-ink2/70 mb-6">Adresse</p>
            <address className="not-italic font-display text-3xl md:text-4xl leading-tight mb-8">
              Arne Jacobsens Allé 9<br />
              2300 København S<br />
              <span className="text-ink2/55">Danmark</span>
            </address>
            <div className="space-y-3 mb-10">
              <a
                href="tel:+4532626030"
                className="block hover:text-accent text-lg"
              >
                +45 3262 6030
              </a>
              <a
                href="mailto:info@pulskitchen.dk"
                className="block hover:text-accent text-lg"
              >
                info@pulskitchen.dk
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.pulskitchen.dk/booking"
                target="_blank"
                rel="noopener"
                className="btn-ink"
              >
                Book bord
              </Link>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S"
                target="_blank"
                rel="noopener"
                className="btn-outline text-ink2"
              >
                <span>Find vej ↗</span>
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-ink2/15">
              <p className="text-[10px] tracking-[0.28em] uppercase text-ink2/50 mb-4">Selskaber</p>
              <p className="text-ink2/70 leading-relaxed text-base">
                Ved selskaber over 8 personer bedes De venligst reservere bord
                på forhånd. Vi foretrækker ligeledes en forudbestilling af maden.
                Man kan endvidere booke vores selskabslokale op til 50 personer.
              </p>
              <p className="mt-4 text-ink2/70 leading-relaxed text-base">
                Vi glæder os til at byde Dem velkommen.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-ink2/15">
              <p className="text-[10px] tracking-[0.32em] uppercase text-ink2/55 mb-5">
                Følg os
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/pulskitchenbar/"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-accent"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/pulskitchenbar"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-accent"
                  >
                    Facebook ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://order.lifepeaks.dk/puls"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-accent"
                  >
                    Gavekort ↗
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.1}>
            <div className="relative aspect-[4/3] border border-ink2/15 overflow-hidden">
              <iframe
                title="PULS Kitchen & Bar på kort"
                src="https://www.google.com/maps?q=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink text-text section-pad">
        <div className="container-max">
          <FadeIn>
            <p className="eyebrow text-accent mb-6">Åbningstider</p>
            <h2 className="display-section text-4xl md:text-5xl mb-12 max-w-[18ch]">
              Brunch i morgen,{" "}
              <span className="italic-display text-accent">cocktails sent om aftenen</span>.
            </h2>
          </FadeIn>
          <ul className="divide-y divide-border border-y border-border">
            {hours.map((h) => (
              <FadeIn key={h.day} delay={0.05}>
                <li className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-6">
                  <span className="font-display text-2xl md:text-3xl uppercase">
                    {h.day}
                  </span>
                  <span className="font-display text-2xl text-accent sm:text-center">
                    {h.time}
                  </span>
                  <span className="text-muted text-sm sm:text-right self-center">
                    {h.kitchen}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
