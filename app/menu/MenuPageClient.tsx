"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Moon, Wine, GlassWater } from "lucide-react";
import { MenuTabs, IMenuTab } from "@/components/ui/tabs-1";
import FadeIn from "@/components/FadeIn";

const tabs: IMenuTab[] = [
  { label: "Frokost", value: "frokost", icon: Utensils },
  { label: "Aften",   value: "aften",   icon: Moon },
  { label: "Drinks",  value: "drinks",  icon: GlassWater },
  { label: "Vin",     value: "vin",     icon: Wine },
];

const menuContent: Record<string, { images: { src: string; title: string }[]; info: string }> = {
  frokost: {
    info: "Serveres man–fre fra 11.00, lør–søn fra 10.00 — alle dage til 16.00.",
    images: [
      { src: "/images/menu-1.png", title: "Frokostmenu" },
      { src: "/images/menu-2.png", title: "Frokostmenu — fortsat" },
    ],
  },
  aften: {
    info: "Aftenkortet gælder fra 17.00 alle dage. Køkkenet lukker 22.00 (søn 21.00).",
    images: [
      { src: "/images/menu-5.png", title: "Aftensmenu" },
      { src: "/images/menu-3.png", title: "Aftensmenu — fortsat" },
    ],
  },
  drinks: {
    info: "Klassiske cocktails og signaturdrinks — bar åben 11.00–22.00.",
    images: [{ src: "/images/menu-4.png", title: "Drinks & cocktails" }],
  },
  vin: {
    info: "Omfangsrigt vinkort fra Frankrig, Italien og oversøisk.",
    images: [{ src: "/images/menu-6.png", title: "Vinkort" }],
  },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.65, 0.2, 1] } },
  exit:    { opacity: 0, y: -14, transition: { duration: 0.28 } },
};

export default function MenuPageClient() {
  const [selected, setSelected] = useState("frokost");
  const content = menuContent[selected];

  return (
    <>
      <section className="pt-44 md:pt-56 pb-0 bg-obsidian text-ivory">
        <div className="container-max">
          <FadeIn><p className="eyebrow">Menukort</p></FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="display-hero mt-6 text-6xl md:text-8xl lg:text-9xl max-w-[16ch] text-ivory">
              Hvad du kan{" "}
              <span className="italic-display font-[400] normal-case text-gold">
                forvente
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg text-ivory/60 max-w-2xl leading-relaxed">
              Menuen skifter med sæsonen — herunder finder du aktuelle frokost-,
              aften-, drinks- og vinkort. Klik på et billede for fuld størrelse.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="mt-14 border-b border-ivory/12">
              <MenuTabs tabs={tabs} selected={selected} setSelected={setSelected} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory text-obsidian pt-12 pb-24 md:pb-32">
        <div className="container-max">
          <AnimatePresence mode="wait">
            <motion.div key={selected} variants={stagger} initial="hidden" animate="visible" exit="exit">
              <motion.div
                variants={item}
                className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-obsidian/10 pb-8"
              >
                <p className="text-obsidian/55 text-sm tracking-wide">{content.info}</p>
                <Link
                  href="https://www.pulskitchen.dk/booking"
                  target="_blank"
                  rel="noopener"
                  className="btn-dark shrink-0 !py-2.5"
                >
                  Book bord
                </Link>
              </motion.div>

              <div className={`grid gap-5 ${content.images.length === 1 ? "max-w-2xl" : "md:grid-cols-2"}`}>
                {content.images.map((m) => (
                  <motion.figure key={m.src} variants={item} className="group">
                    <a
                      href={m.src}
                      target="_blank"
                      rel="noopener"
                      className="relative block aspect-[3/4] border border-obsidian/12 overflow-hidden bg-bone"
                    >
                      <Image
                        src={m.src}
                        alt={m.title}
                        fill
                        sizes="(min-width:768px) 50vw, 100vw"
                        className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-gold text-obsidian text-[10px] tracking-[0.22em] uppercase font-semibold px-4 py-2">
                          Åbn i fuld størrelse ↗
                        </span>
                      </div>
                    </a>
                    <figcaption className="mt-4 flex items-center justify-between">
                      <span className="font-editorial italic text-xl text-obsidian">{m.title}</span>
                      <span className="text-obsidian/35 text-[10px] tracking-[0.25em] uppercase">Klik</span>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>

              <motion.div
                variants={item}
                className="mt-16 bg-charcoal text-ivory p-10 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <p className="text-[9px] tracking-[0.38em] uppercase text-gold mb-2">Klar til at smage?</p>
                  <h3 className="display-section text-3xl md:text-4xl">
                    Book bord eller bestil take-away.
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://www.pulskitchen.dk/booking" target="_blank" rel="noopener" className="btn-gold">
                    Book bord
                  </Link>
                  <Link href="https://www.pulskitchen.dk/takeaway" target="_blank" rel="noopener" className="btn-ghost">
                    Take-away
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
