"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/components/ui/use-scroll";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu",      href: "/menu" },
  { label: "Selskaber", href: "/selskaber" },
  { label: "Gavekort",  href: "/gavekort" },
  { label: "Kontakt",   href: "/kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(60);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Desktop ──────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center pointer-events-none">
        <motion.div
          animate={scrolled ? "island" : "full"}
          variants={{
            full: {
              width: "100%",
              marginTop: 0,
              borderRadius: 0,
              borderWidth: 0,
              boxShadow: "none",
              backgroundColor: isHome ? "rgba(245,247,242,0)" : "rgba(245,247,242,0.97)",
              backdropFilter: isHome ? "blur(0px)" : "blur(20px)",
            },
            island: {
              width: "700px",
              marginTop: 16,
              borderRadius: 10,
              borderWidth: 1,
              boxShadow: "0 8px 32px rgba(42,53,37,0.12)",
              backgroundColor: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(20px)",
            },
          }}
          transition={{ type: "spring", stiffness: 320, damping: 38 }}
          className="border border-transparent overflow-hidden pointer-events-auto"
          style={{ borderColor: scrolled ? "rgba(216,221,209,0.8)" : "transparent" }}
        >
          <motion.nav
            animate={{ height: scrolled ? 52 : 88 }}
            transition={{ type: "spring", stiffness: 320, damping: 38 }}
            className="flex items-center px-8 gap-0"
          >
            {/* Logo */}
            <Link href="/" className="group flex-shrink-0">
              <motion.span
                animate={{ fontSize: scrolled ? "20px" : "28px" }}
                transition={{ type: "spring", stiffness: 320, damping: 38 }}
                className={`font-brand font-bold tracking-[0.1em] transition-colors duration-300 block leading-none group-hover:text-gold ${scrolled || !isHome ? "text-forest" : "text-ivory"}`}
              >
                PULS
              </motion.span>
            </Link>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Nav links — centered */}
            <div className="flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`text-[11px] font-medium tracking-[0.2em] uppercase hover:text-gold transition-colors whitespace-nowrap ${scrolled || !isHome ? "text-forest/70" : "text-ivory/70"}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* CTA */}
            <Link
              href="https://www.pulskitchen.dk/booking"
              target="_blank"
              rel="noopener"
              className={cn(
                "flex-shrink-0 btn-gold transition-all",
                scrolled ? "!py-2 !px-5 !text-[10px]" : "!py-2.5 !px-6 !text-[11px]"
              )}
            >
              Book bord
            </Link>
          </motion.nav>
        </motion.div>
      </div>

      {/* ── Mobile header ────────────────────────────────────────── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-500",
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-xl border-b border-border-col shadow-[0_4px_20px_rgba(42,53,37,0.08)]"
            : "bg-transparent"
        )}
      >
        <div className="container-max flex items-center justify-between h-[68px]">
          <Link href="/">
            <span className={`font-brand font-bold text-[24px] tracking-[0.1em] hover:text-gold transition-colors ${scrolled || !isHome ? "text-forest" : "text-ivory"}`}>
              PULS
            </span>
          </Link>
          <button
            aria-label={open ? "Luk menu" : "Åbn menu"}
            onClick={() => setOpen((v) => !v)}
            className={`h-10 w-10 grid place-items-center border border-border-col hover:text-gold hover:border-gold transition-colors rounded-sm ${scrolled || !isHome ? "text-forest" : "text-ivory"}`}
          >
            <MenuToggleIcon open={open} className="size-5" duration={350} />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ───────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.2, 1] }}
            className="fixed inset-0 top-[68px] z-40 bg-white backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <div className="container-max py-12 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 border-b border-border-col font-editorial italic text-4xl text-forest hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                className="mt-10 flex flex-col gap-3"
              >
                <Link href="https://www.pulskitchen.dk/booking" target="_blank" onClick={() => setOpen(false)} className="btn-gold w-full">
                  Reservér dit bord →
                </Link>
                <Link href="https://www.pulskitchen.dk/takeaway" target="_blank" onClick={() => setOpen(false)} className="btn-ghost w-full">
                  Take-away
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
