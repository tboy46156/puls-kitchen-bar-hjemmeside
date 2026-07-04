"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, GlassWater, Coffee, Music } from "lucide-react";
import { MenuTabs, IMenuTab } from "@/components/ui/tabs-1";
import FadeIn from "@/components/FadeIn";
import FrokostMenuContent from "@/components/FrokostMenuContent";
import AftenMenuContent from "@/components/AftenMenuContent";
import BrunchMenuContent from "@/components/BrunchMenuContent";
import KoncertMenuContent from "@/components/KoncertMenuContent";
import DrinksMenuContent from "@/components/DrinksMenuContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.65, 0.2, 1] } },
  exit:    { opacity: 0, y: -14, transition: { duration: 0.28 } },
};

const validTabs = ["brunch", "frokost", "aften", "koncert", "drinks"];

export default function MenuPageClient({ initialTab }: { initialTab?: string }) {
  const { lang } = useLanguage();
  const t = translations[lang].menuPage;

  const [selected, setSelected] = useState(
    validTabs.includes(initialTab ?? "") ? initialTab! : "brunch"
  );

  useEffect(() => {
    if (initialTab && validTabs.includes(initialTab)) {
      const el = document.getElementById("menu-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [initialTab]);

  const tabs: IMenuTab[] = [
    { label: t.tabs.brunch,  value: "brunch",  icon: Coffee },
    { label: t.tabs.frokost, value: "frokost", icon: Utensils },
    { label: t.tabs.aften,   value: "aften",   icon: Utensils },
    { label: t.tabs.koncert, value: "koncert", icon: Music },
    { label: t.tabs.drinks,  value: "drinks",  icon: GlassWater },
  ];

  const infoMap: Record<string, string> = {
    brunch:  t.info.brunch,
    frokost: t.info.frokost,
    aften:   t.info.aften,
    koncert: t.info.koncert,
    drinks:  t.info.drinks,
  };

  return (
    <div className="pt-20 md:pt-28">

      {/* Header */}
      <section id="menu-section" className="bg-ivory">
        <div className="container-max py-5 md:py-10">
            <FadeIn>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="display-section text-3xl md:text-4xl text-obsidian">{t.heading}</h1>
                <MenuTabs tabs={tabs} selected={selected} setSelected={setSelected} />
              </div>
            </FadeIn>
        </div>
      </section>

      {/* Menu content */}
      <section className="bg-sand">
          <div className="container-max py-10 md:py-12">
            <AnimatePresence mode="wait">
              <motion.div key={selected} variants={stagger} initial="hidden" animate="visible" exit="exit">
                {selected === "koncert" && (
                  <motion.div variants={fadeItem} className="mb-6 px-5 py-4 border-l-4 border-gold bg-gold/8 rounded-sm">
                    <p className="font-bold text-sm text-obsidian leading-snug">{t.koncertDisclaimer}</p>
                  </motion.div>
                )}
                <motion.div
                  variants={fadeItem}
                  className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-obsidian/10 pb-6"
                >
                  <p className="text-obsidian text-base font-medium">{infoMap[selected]}</p>
                  <Link
                    href="https://book.easytable.com/book/?id=1214a&lang=auto"
                    target="_blank"
                    rel="noopener"
                    className="btn-dark shrink-0 !py-2.5"
                  >
                    {t.bookTable}
                  </Link>
                </motion.div>

                {selected === "brunch" ? (
                  <motion.div variants={fadeItem}><BrunchMenuContent /></motion.div>
                ) : selected === "frokost" ? (
                  <motion.div variants={fadeItem}><FrokostMenuContent /></motion.div>
                ) : selected === "aften" ? (
                  <motion.div variants={fadeItem}><AftenMenuContent /></motion.div>
                ) : selected === "koncert" ? (
                  <motion.div variants={fadeItem}><KoncertMenuContent /></motion.div>
                ) : selected === "drinks" ? (
                  <motion.div variants={fadeItem}><DrinksMenuContent /></motion.div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
          <div className="container-max py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-gold mb-2">{t.cta.eyebrow}</p>
              <h3 className="display-section text-3xl md:text-4xl text-ivory">
                {t.cta.heading}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" rel="noopener" className="btn-gold">
                {t.cta.bookTable}
              </Link>
              <Link href="https://www.pulskitchen.dk/takeaway" target="_blank" rel="noopener" className="btn-ghost">
                {t.cta.takeaway}
              </Link>
            </div>
          </div>
      </section>

    </div>
  );
}
