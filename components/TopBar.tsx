"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const ease = [0.2, 0.65, 0.2, 1] as const;

export default function TopBar() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[60] bg-[#1e2a1b] border-b border-white/10 hidden lg:block"
      animate={{ y: visible ? 0 : -40 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="container-max h-10 flex items-center gap-5 text-[11px] text-ivory/70">
        <a
          href="https://maps.apple.com/?q=Arne+Jacobsens+Allé+9,+2300+København+S"
          target="_blank"
          rel="noopener"
          className="hover:text-ivory transition-colors"
        >
          Arne Jacobsens Allé 9, 2300 København S
        </a>
        <span className="text-ivory/25">·</span>
        <a href="tel:+4532626030" className="hover:text-ivory transition-colors">
          +45 3262 6030
        </a>
        <span className="text-ivory/25">·</span>
        <a href="/kontakt" className="hover:text-ivory transition-colors">
          {t.topbar.hours}
        </a>
      </div>
    </motion.div>
  );
}
