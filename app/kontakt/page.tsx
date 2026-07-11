import type { Metadata } from "next";
import KontaktPageClient from "./KontaktPageClient";

export const metadata: Metadata = {
  title: { absolute: "Kontakt & Åbningstider — PULS Kitchen & Bar" },
  description:
    "Besøg PULS Kitchen & Bar på Arne Jacobsens Allé 9 i Ørestad. Åbningstider, telefon og vejviser. Åbent alle ugens dage fra kl. 10. Book bord online.",
  alternates: { canonical: "https://www.pulskitchen.dk/kontakt" },
  openGraph: {
    title: "Kontakt & Åbningstider — PULS Kitchen & Bar",
    description:
      "Find PULS Kitchen & Bar på Arne Jacobsens Allé 9, Ørestad. Se åbningstider og kontakt os på +45 3262 6030.",
    url: "https://www.pulskitchen.dk/kontakt",
    images: [
      {
        url: "https://www.pulskitchen.dk/images/interior.jpeg",
        width: 1200,
        height: 630,
        alt: "PULS Kitchen & Bar — interiør",
      },
    ],
  },
};

export default function KontaktPage() {
  return <KontaktPageClient />;
}
