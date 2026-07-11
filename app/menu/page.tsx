import type { Metadata } from "next";
import MenuPageClient from "./MenuPageClient";

export const metadata: Metadata = {
  title: { absolute: "Menukort — PULS Kitchen & Bar" },
  description:
    "Se hele menuen hos PULS Kitchen & Bar i Ørestad — brunch, frokost, aftensmad, drinks og koncertmenu. Moderne køkken med friske råvarer. Book bord online.",
  alternates: { canonical: "https://www.pulskitchen.dk/menu" },
  openGraph: {
    title: "Menukort — PULS Kitchen & Bar",
    description:
      "Brunch, frokost, aftensmad, drinks og koncertmenu hos PULS i Ørestad. Åbent alle dage. Book bord online.",
    url: "https://www.pulskitchen.dk/menu",
    images: [
      {
        url: "https://www.pulskitchen.dk/images/food.jpg",
        width: 1200,
        height: 630,
        alt: "Mad hos PULS Kitchen & Bar",
      },
    ],
  },
};

export default function MenuPage({ searchParams }: { searchParams: { tab?: string } }) {
  return <MenuPageClient initialTab={searchParams.tab} />;
}
