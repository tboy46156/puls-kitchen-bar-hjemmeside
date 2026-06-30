import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik & Cookiepolitik — PULS Kitchen & Bar",
  description:
    "Læs om hvordan PULS Kitchen & Bar behandler dine personoplysninger og bruger cookies på vores hjemmeside.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Dataansvarlig",
    content: (
      <>
        <p>PULS Kitchen & Bar</p>
        <p>CVR-nr.: 42276626</p>
        <p>Adresse: Arne Jacobsens Allé 9, 2300 København S</p>
        <p>
          E-mail:{" "}
          <a href="mailto:info@pulskitchen.dk" className="underline hover:text-gold transition-colors">
            info@pulskitchen.dk
          </a>
        </p>
      </>
    ),
  },
  {
    title: "2. Hvilke personoplysninger vi indsamler",
    content: (
      <>
        <p className="mb-3">Når du kontakter os eller booker bord, kan vi indsamle:</p>
        <ul className="space-y-1.5 list-disc list-inside text-obsidian/70">
          <li>Navn</li>
          <li>Telefonnummer</li>
          <li>E-mailadresse</li>
          <li>Reservationsoplysninger</li>
          <li>IP-adresse og tekniske oplysninger om brug af hjemmesiden</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Formål med behandling",
    content: (
      <>
        <p className="mb-3">Vi behandler dine oplysninger til følgende formål:</p>
        <ul className="space-y-1.5 list-disc list-inside text-obsidian/70">
          <li>Håndtering af bordbooking og henvendelser</li>
          <li>Kundeservice og support</li>
          <li>Opfyldelse af lovkrav (bogføring mv.)</li>
          <li>Forbedring af hjemmesidens indhold og brugeroplevelse</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Retsgrundlag",
    content: (
      <>
        <p className="mb-3">Behandlingen sker på baggrund af:</p>
        <ul className="space-y-1.5 list-disc list-inside text-obsidian/70">
          <li>Opfyldelse af en aftale (din booking)</li>
          <li>Retlig forpligtelse (fx bogføringsloven)</li>
          <li>Legitim interesse i drift og forbedring af hjemmesiden</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Opbevaring af oplysninger",
    content: (
      <p>
        Vi opbevarer dine oplysninger så længe det er nødvendigt for formålet og i henhold til gældende lovgivning.
        Bogføringsmateriale opbevares i op til 5 år.
      </p>
    ),
  },
  {
    title: "6. Videregivelse af oplysninger",
    content: (
      <>
        <p className="mb-3">
          Vi videregiver kun oplysninger til samarbejdspartnere, når det er nødvendigt, fx:
        </p>
        <ul className="space-y-1.5 list-disc list-inside text-obsidian/70">
          <li>Bookingsystem (EasyTable)</li>
          <li>Hosting- og IT-leverandører</li>
          <li>Analyseredskaber (Google Analytics)</li>
        </ul>
        <p className="mt-3">Disse parter må kun behandle oplysninger efter vores instrukser.</p>
      </>
    ),
  },
  {
    title: "7. Dine rettigheder",
    content: (
      <>
        <p className="mb-3">Du har ret til at:</p>
        <ul className="space-y-1.5 list-disc list-inside text-obsidian/70">
          <li>Få indsigt i dine oplysninger</li>
          <li>Få rettet eller slettet oplysninger</li>
          <li>Begrænse behandlingen</li>
          <li>Gøre indsigelse mod behandlingen</li>
          <li>Få udleveret dine data (dataportabilitet)</li>
        </ul>
        <p className="mt-3">
          Henvendelser sendes til:{" "}
          <a href="mailto:info@pulskitchen.dk" className="underline hover:text-gold transition-colors">
            info@pulskitchen.dk
          </a>
        </p>
      </>
    ),
  },
  {
    title: "8. Klage",
    content: (
      <p>
        Hvis du ønsker at klage over vores behandling af dine oplysninger, kan du kontakte Datatilsynet på{" "}
        <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener" className="underline hover:text-gold transition-colors">
          www.datatilsynet.dk
        </a>
        .
      </p>
    ),
  },
];

const cookieSections = [
  {
    title: "Nødvendige cookies",
    desc: "Kræves for at hjemmesiden kan fungere korrekt. Kan ikke deaktiveres.",
  },
  {
    title: "Statistikcookies",
    desc: "Bruges til at analysere, hvordan besøgende bruger hjemmesiden, så vi kan forbedre oplevelsen (Google Analytics).",
  },
  {
    title: "Marketingcookies",
    desc: "Bruges til at vise relevante annoncer og måle effekten af markedsføring.",
  },
];

export default function PrivatlivspolitikPage() {
  return (
    <div className="bg-bone pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="container-max max-w-3xl">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-obsidian/10">
          <p className="text-xs tracking-[0.24em] uppercase text-gold font-semibold mb-3">Juridisk</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-obsidian leading-tight mb-3">
            Privatlivspolitik
          </h1>
          <p className="text-obsidian/55 text-sm">
            Sidst opdateret: {new Date().toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <p className="text-obsidian/70 leading-relaxed mb-12">
          Hos PULS Kitchen & Bar tager vi beskyttelsen af dine personoplysninger alvorligt. Denne privatlivspolitik
          forklarer, hvilke oplysninger vi indsamler, hvordan vi bruger dem, og hvilke rettigheder du har.
        </p>

        {/* Privacy sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-obsidian/10 pt-8">
              <h2 className="font-semibold text-lg text-obsidian mb-4">{s.title}</h2>
              <div className="text-obsidian/70 leading-relaxed space-y-2">{s.content}</div>
            </div>
          ))}
        </div>

        {/* Cookie policy */}
        <div className="mt-20 pt-12 border-t-2 border-obsidian/10">
          <p className="text-xs tracking-[0.24em] uppercase text-gold font-semibold mb-3">Cookiepolitik</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-obsidian mb-6">
            Cookies
          </h2>
          <p className="text-obsidian/70 leading-relaxed mb-10">
            Cookies er små tekstfiler, der gemmes på din enhed, når du besøger en hjemmeside. De bruges til at
            sikre at hjemmesiden fungerer optimalt samt til statistik.
          </p>

          <div className="space-y-6">
            {cookieSections.map((c) => (
              <div key={c.title} className="bg-ivory rounded-xl p-6 border border-obsidian/8">
                <h3 className="font-semibold text-obsidian mb-2">{c.title}</h3>
                <p className="text-sm text-obsidian/65 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-sand rounded-xl p-6 border border-obsidian/8">
            <h3 className="font-semibold text-obsidian mb-2">Samtykke & indstillinger</h3>
            <p className="text-sm text-obsidian/65 leading-relaxed">
              Når du besøger hjemmesiden første gang, bliver du bedt om at give samtykke til brug af cookies.
              Du kan til enhver tid ændre eller trække dit samtykke tilbage via cookie-banneret. Du kan også slette
              eller blokere cookies i din browsers indstillinger.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
