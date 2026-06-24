import Link from "next/link";
import { SocialCard } from "./ui/social-card";

const hours = [
  ["Man – Tor", "11.00 – 22.00"],
  ["Fredag",    "11.00 – 24.00"],
  ["Lørdag",    "10.00 – 24.00"],
  ["Søndag",    "10.00 – 22.00"],
];

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory border-t border-white/10">
      <div className="container-max py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="mt-2 mb-6 leading-none">
              <span className="font-display font-bold text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] text-ivory block">
                PULS
              </span>
              <span className="font-display italic text-xl md:text-2xl text-ivory/70 font-light tracking-wide">
                Kitchen & Bar
              </span>
            </h2>
            <p className="text-stone max-w-xs leading-relaxed text-sm">
              The feeling of New Yorker rawness and Parisian elegance — en
              moderne gastrobar i Ørestad, København.
            </p>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-gold mt-8"
            >
              Book bord →
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.22em] uppercase text-gold mb-5">Find os</p>
            <address className="not-italic text-ivory/80 leading-relaxed text-sm">
              Arne Jacobsens Allé 9<br />
              2300 København S
            </address>
            <div className="mt-5 space-y-1 text-sm">
              <a href="tel:+4532626030" className="block text-ivory/80 hover:text-gold">+45 3262 6030</a>
              <a href="mailto:info@pulskitchen.dk" className="block text-ivory/80 hover:text-gold">info@pulskitchen.dk</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.22em] uppercase text-gold mb-5">Åbent</p>
            <ul className="space-y-2 text-sm">
              {hours.map(([d, t]) => (
                <li key={d}>
                  <span className="text-ivory/80">{d}</span>
                  <br />
                  <span className="text-stone">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.22em] uppercase text-gold mb-5">Følg os</p>
            <SocialCard />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone">
          <p>© {new Date().getFullYear()} PULS Kitchen & Bar. All rights reserved.</p>
          <div className="flex gap-6">
            {[["Menu","/menu"],["Gavekort","/gavekort"],["Kontakt","/kontakt"]].map(([l,h]) => (
              <Link key={h} href={h} className="hover:text-gold">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
