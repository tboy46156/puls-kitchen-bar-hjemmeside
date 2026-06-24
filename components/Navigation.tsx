"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu",      href: "/menu" },
  { label: "Selskaber", href: "/selskaber" },
  { label: "Gavekort",  href: "/gavekort" },
  { label: "Kontakt",   href: "/kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Desktop ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden lg:block bg-white border-b border-border-col">
        <nav className="container-max flex items-center h-[72px] gap-0">
          {/* Spacer */}
          <div className="flex-1" />

          {/* Logo + Nav links centered together */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/PULS_logo.png"
                alt="PULS Kitchen & Bar"
                width={80}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-forest hover:text-gold transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA */}
          <Link
            href="https://book.easytable.com/book/?id=1214a&lang=auto"
            target="_blank"
            rel="noopener"
            className="flex-shrink-0 btn-sage-solid !py-2 !px-6 !text-[11px]"
          >
            Book bord
          </Link>
        </nav>
      </header>

      {/* ── Mobile header ────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white border-b border-border-col">
        <div className="container-max flex items-center justify-between h-[64px]">
          <Link href="/">
            <Image
              src="/images/PULS_logo.png"
              alt="PULS Kitchen & Bar"
              width={64}
              height={44}
              className="h-11 w-auto object-contain"
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
      </header>

      {/* ── Mobile overlay ───────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.2, 1] }}
            className="fixed inset-0 top-[64px] z-40 bg-white lg:hidden overflow-y-auto"
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
