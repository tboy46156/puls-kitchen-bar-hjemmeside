import type { Metadata } from "next";
import SelskaberPageClient from "./SelskaberPageClient";

export const metadata: Metadata = {
  title: { absolute: "Selskaber & Events — PULS Kitchen & Bar" },
  description:
    "Planlæg dit selskab hos PULS Kitchen & Bar i Ørestad. Lokaler til op til 290 gæster, AV-udstyr og skræddersyet menu. Kontakt os for et uforpligtende tilbud.",
  alternates: { canonical: "https://www.pulskitchen.dk/selskaber" },
  openGraph: {
    title: "Selskaber & Events — PULS Kitchen & Bar",
    description:
      "Planlæg dit selskab i Ørestad, København. Lokaler til op til 290 gæster med AV-udstyr og menu tilpasset jeres aften.",
    url: "https://www.pulskitchen.dk/selskaber",
    images: [
      {
        url: "https://www.pulskitchen.dk/images/selskaber.jpg",
        width: 1200,
        height: 630,
        alt: "Selskabslokale hos PULS Kitchen & Bar",
      },
    ],
  },
};

export default function SelskaberPage() {
  return <SelskaberPageClient />;
}
