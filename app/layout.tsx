import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PULS Kitchen & Bar — Gastrobar i Ørestad, København",
    template: "%s | PULS Kitchen & Bar",
  },
  description:
    "Moderne gastrobar i hjertet af Ørestad. Oplev vores brunch, frokost, aftensmad og cocktails i elegante omgivelser. Åben alle ugens dage. Book bord online.",
  metadataBase: new URL("https://www.pulskitchen.dk"),
  alternates: {
    canonical: "https://www.pulskitchen.dk",
  },
  keywords: [
    "gastrobar København",
    "restaurant Ørestad",
    "brunch København",
    "PULS Kitchen Bar",
    "middag København S",
    "cocktailbar København",
  ],
  authors: [{ name: "PULS Kitchen & Bar" }],
  openGraph: {
    title: "PULS Kitchen & Bar — Gastrobar i Ørestad, København",
    description:
      "The feeling of New Yorker rawness and Parisian elegance. Brunch, frokost, aftensmad og cocktails — Arne Jacobsens Allé 9, 2300 København S.",
    type: "website",
    url: "https://www.pulskitchen.dk",
    siteName: "PULS Kitchen & Bar",
    locale: "da_DK",
    images: [
      {
        url: "/images/interior.jpeg",
        width: 1200,
        height: 630,
        alt: "PULS Kitchen & Bar — interiør",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PULS Kitchen & Bar — Gastrobar i Ørestad",
    description:
      "Moderne gastrobar i hjertet af Ørestad. Brunch, frokost, aftensmad & cocktails.",
    images: ["/images/interior.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "PULS Kitchen & Bar",
  url: "https://www.pulskitchen.dk",
  telephone: "+4532626030",
  email: "info@pulskitchen.dk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arne Jacobsens Allé 9",
    postalCode: "2300",
    addressLocality: "København S",
    addressCountry: "DK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.6303,
    longitude: 12.5779,
  },
  servesCuisine: ["International", "Modern European", "Gastrobar"],
  priceRange: "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "22:00" },
  ],
  sameAs: [
    "https://www.instagram.com/pulskitchenbar/",
    "https://www.facebook.com/pulskitchenbar",
    "https://www.tripadvisor.dk/Restaurant_Review-g189541-d23380540-Reviews-Puls_Kitchen_Bar-Copenhagen_Zealand.html",
  ],
  image: "https://www.pulskitchen.dk/images/interior.jpeg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="da"
      className={font.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-sans bg-bone text-forest">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
