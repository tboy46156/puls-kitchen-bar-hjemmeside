"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu",         href: "/menu" },
  { label: "Koncertmenu",  href: "/koncertmenu" },
  { label: "Selskaber",    href: "/selskaber" },
  { label: "Gavekort",     href: "/gavekort" },
  { label: "Kontakt",      href: "/kontakt" },
];

const ease = [0.2, 0.65, 0.2, 1] as const;
const navTransition = { duration: 0.4, ease };

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [atTop, setAtTop] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setAtTop(window.scrollY < 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Desktop ──────────────────────────────────────────────── */}
      <motion.header
        className="fixed inset-x-0 z-50 hidden lg:block"
        animate={scrolled
          ? { paddingTop: 12, paddingLeft: 120, paddingRight: 120, top: 0 }
          : { paddingTop: 0,  paddingLeft: 0,   paddingRight: 0,   top: atTop ? 40 : 0 }}
        transition={navTransition}
      >
        <motion.div
          className="border border-border-col backdrop-blur-md overflow-hidden"
          animate={scrolled ? {
            borderRadius: 14,
            backgroundColor: "rgba(245,247,242,0.97)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          } : {
            borderRadius: 0,
            backgroundColor: "rgba(245,247,242,0.80)",
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={navTransition}
        >
          <nav className="container-max relative flex items-center h-[72px]">

            {/* Left — nav links */}
            <div className="flex items-center gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[12px] font-semibold tracking-[0.18em] uppercase text-obsidian hover:text-gold transition-colors whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Center — Logo (absolutely centered) */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex-shrink-0">
              <Image
                src="/images/PULS_logo_nav.svg"
                alt="PULS Kitchen & Bar"
                width={80}
                height={49}
                className="h-10 w-auto object-contain"
                unoptimized
                priority
              />
            </Link>

            {/* Right — Book bord far right */}
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="ml-auto flex-shrink-0 btn-sage-solid !py-2 !px-6 !text-[12px]"
            >
              Book bord
            </Link>

          </nav>
        </motion.div>
      </motion.header>

      {/* ── Mobile header ────────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50 lg:hidden"
        animate={scrolled
          ? { paddingTop: 10, paddingLeft: 24, paddingRight: 24 }
          : { paddingTop: 0,  paddingLeft: 0,  paddingRight: 0  }}
        transition={navTransition}
      >
        <motion.div
          className="border border-border-col backdrop-blur-md overflow-hidden"
          animate={scrolled ? {
            borderRadius: 12,
            backgroundColor: "rgba(245,247,242,0.97)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          } : {
            borderRadius: 0,
            backgroundColor: "rgba(245,247,242,0.80)",
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={navTransition}
        >
          <div className="px-4 flex items-center justify-between h-[64px]">
            <Link href="/">
              <Image
                src="/images/PULS_logo_nav.svg"
                alt="PULS Kitchen & Bar"
                width={64}
                height={39}
                className="h-8 w-auto object-contain"
                unoptimized
                priority
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://book.easytable.com/book/?id=1214a&lang=auto"
                target="_blank"
                rel="noopener"
                className="text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2 bg-sage text-white border border-sage transition-colors hover:bg-forest hover:border-forest"
              >
                Book bord
              </Link>
              <button
                aria-label={open ? "Luk menu" : "Åbn menu"}
                onClick={() => setOpen((v) => !v)}
                className="h-10 w-10 grid place-items-center border border-border-col text-forest hover:text-gold hover:border-gold transition-colors rounded-sm"
              >
                <MenuToggleIcon open={open} className="size-5" duration={350} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Mobile overlay ───────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
            style={{ top: scrolled ? 84 : 64 }}
          >
            <div className="px-6 py-12 flex flex-col">
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
                    className="block py-5 border-b border-border-col font-sans text-4xl text-forest hover:text-gold transition-colors"
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
                <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" onClick={() => setOpen(false)} className="btn-sage-solid w-full text-center">
                  Reservér dit bord →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
