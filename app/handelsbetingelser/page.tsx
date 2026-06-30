import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handelsbetingelser — PULS Kitchen & Bar",
  description:
    "Handelsbetingelser for bordbooking, selskaber og gavekort hos PULS Kitchen & Bar i Ørestad, København.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Virksomhedsoplysninger",
    content: (
      <div className="space-y-1">
        <p>PULS Kitchen & Bar</p>
        <p>CVR-nr.: 42276626</p>
        <p>Adresse: Arne Jacobsens Allé 9, 2300 København S</p>
        <p>
          E-mail:{" "}
          <a href="mailto:info@pulskitchen.dk" className="underline hover:text-gold transition-colors">
            info@pulskitchen.dk
          </a>
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:+4532626030" className="underline hover:text-gold transition-colors">
            +45 3262 6030
          </a>
        </p>
        <p className="pt-2 text-obsidian/60">
          Disse handelsbetingelser gælder for alle bookinger og køb i tilknytning til PULS Kitchen & Bar.
        </p>
      </div>
    ),
  },
  {
    title: "2. Bordbooking",
    content: (
      <div className="space-y-2">
        <p>
          Bordbooking foretages via vores bookingsystem (EasyTable). Når du gennemfører en booking,
          modtager du en bekræftelse pr. e-mail.
        </p>
        <p>
          Vi beder om, at du giver os besked senest 24 timer før din reservation, hvis du ønsker at
          ændre eller aflyse. Gentagne no-shows kan medføre, at vi ikke kan acceptere fremtidige
          reservationer.
        </p>
        <p>
          For grupper på mere end 8 personer anbefaler vi, at du kontakter os direkte for at aftale
          betingelserne for bookingen.
        </p>
      </div>
    ),
  },
  {
    title: "3. Selskaber & arrangementer",
    content: (
      <div className="space-y-2">
        <p>
          Ved booking af selskaber og private arrangementer indgås en separat aftale, der specificerer
          menyer, pris, depositum og aflysningstidspunkter.
        </p>
        <p>
          Et eventuelt depositum er ikke-refunderbart ved aflysning inden for den frist, der er aftalt
          i den individuelle kontrakt.
        </p>
        <p>
          Kontakt os på{" "}
          <a href="mailto:info@pulskitchen.dk" className="underline hover:text-gold transition-colors">
            info@pulskitchen.dk
          </a>{" "}
          eller{" "}
          <a href="tel:+4532626030" className="underline hover:text-gold transition-colors">
            +45 3262 6030
          </a>{" "}
          for at høre mere om vores muligheder.
        </p>
      </div>
    ),
  },
  {
    title: "4. Gavekort",
    content: (
      <div className="space-y-2">
        <p>
          Gavekort købes via vores gavekortpartner og er gyldige i 3 år fra udstedelsesdatoen.
          Gavekortet kan indløses ved besøg i restauranten og kan ikke ombyttes til kontanter.
        </p>
        <p>
          Hvis gavekortet er bortkommet eller mistet, er PULS Kitchen & Bar ikke ansvarlig for
          misbrug.
        </p>
      </div>
    ),
  },
  {
    title: "5. Priser",
    content: (
      <p>
        Alle priser på menukortet og hjemmesiden er angivet i danske kroner (DKK) og inkl. moms.
        Der tages forbehold for trykfejl og prisændringer. Det aktuelle menukort og de gældende
        priser fremgår af restauranten.
      </p>
    ),
  },
  {
    title: "6. Betaling",
    content: (
      <div className="space-y-2">
        <p>Betaling i restauranten kan ske med:</p>
        <ul className="list-disc list-inside space-y-1 text-obsidian/70">
          <li>Visa / Visa Electron</li>
          <li>Mastercard / Maestro</li>
          <li>MobilePay</li>
          <li>Kontanter</li>
        </ul>
        <p className="pt-1">
          PULS Kitchen & Bar forbeholder sig retten til at afvise betalingsmidler, der ikke
          er angivet ovenfor.
        </p>
      </div>
    ),
  },
  {
    title: "7. Fortrydelsesret",
    content: (
      <p>
        Da der er tale om tilberedning af fødevarer på bestilling, gælder der ingen fortrydelsesret
        jf. forbrugeraftalelovens § 18, stk. 2, nr. 4. Dette gælder ligeledes for forudbestilte
        selskabsmenyer og lignende ydelser.
      </p>
    ),
  },
  {
    title: "8. Reklamation",
    content: (
      <div className="space-y-2">
        <p>
          Oplever du fejl eller mangler ved din ordre eller dit besøg, bedes du kontakte os hurtigst
          muligt — og senest samme dag.
        </p>
        <p>
          Reklamation sker via e-mail:{" "}
          <a href="mailto:info@pulskitchen.dk" className="underline hover:text-gold transition-colors">
            info@pulskitchen.dk
          </a>{" "}
          eller telefon:{" "}
          <a href="tel:+4532626030" className="underline hover:text-gold transition-colors">
            +45 3262 6030
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "9. Persondata",
    content: (
      <p>
        PULS Kitchen & Bar behandler personoplysninger i overensstemmelse med gældende
        databeskyttelseslovgivning. Oplysninger anvendes udelukkende til håndtering af din booking
        eller henvendelse. Læs vores fulde{" "}
        <a href="/privatlivspolitik" className="underline hover:text-gold transition-colors">
          privatlivspolitik her
        </a>
        .
      </p>
    ),
  },
  {
    title: "10. Klageadgang",
    content: (
      <div className="space-y-2">
        <p>
          Opstår der en tvist, opfordrer vi dig til at kontakte os direkte, så vi kan finde en
          løsning. Kan vi ikke blive enige, kan du indgive klage til:
        </p>
        <address className="not-italic text-obsidian/70 space-y-0.5">
          <p className="font-semibold text-obsidian">Nævnenes Hus</p>
          <p>Toldboden 2, 8800 Viborg</p>
          <p>
            <a href="https://www.naevneneshus.dk" target="_blank" rel="noopener" className="underline hover:text-gold transition-colors">
              www.naevneneshus.dk
            </a>
          </p>
        </address>
        <p>
          EU-Kommissionens online klageportal:{" "}
          <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener" className="underline hover:text-gold transition-colors">
            ec.europa.eu/odr
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "11. Ændringer",
    content: (
      <p>
        PULS Kitchen & Bar forbeholder sig retten til at ændre disse handelsbetingelser uden
        forudgående varsel. De gældende betingelser er altid tilgængelige på hjemmesiden.
      </p>
    ),
  },
];

export default function HandelsbetingelserPage() {
  return (
    <div className="bg-bone pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="container-max max-w-3xl">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-obsidian/10">
          <p className="text-xs tracking-[0.24em] uppercase text-gold font-semibold mb-3">Juridisk</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-obsidian leading-tight mb-3">
            Handelsbetingelser
          </h1>
          <p className="text-obsidian/55 text-sm">
            Sidst opdateret:{" "}
            {new Date().toLocaleDateString("da-DK", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-obsidian/10 pt-8">
              <h2 className="font-semibold text-lg text-obsidian mb-4">{s.title}</h2>
              <div className="text-obsidian/70 leading-relaxed">{s.content}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
