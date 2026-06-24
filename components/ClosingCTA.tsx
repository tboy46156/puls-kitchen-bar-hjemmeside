"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-obsidian" style={{ minHeight: "70vh" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/interior.jpeg"
          alt="PULS Kitchen & Bar"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/60" />
        <div className="absolute inset-0 bg-obsidian/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-[clamp(1.25rem,4vw,3rem)] py-32 md:py-44">
        {/* Gold rule top */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="block w-12 h-px bg-gold mb-10 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[9px] tracking-[0.5em] uppercase text-gold mb-8"
        >
          Reservér dit bord
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="display-section text-ivory text-5xl md:text-7xl lg:text-[7rem] leading-[0.93] max-w-[14ch]"
        >
          Kom forbi. Vi er der.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.9, delay: 0.38 }}
          className="mt-7 max-w-sm text-ivory/55 text-base leading-[1.75]"
        >
          Book et bord eller stik bare hovedet ind.
        </motion.p>

        {/* Gold ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 my-10"
        >
          <span className="h-px w-16 bg-gold/30" />
          <span className="font-brand font-bold text-gold/40 tracking-[0.2em] text-sm">PULS</span>
          <span className="h-px w-16 bg-gold/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="https://book.easytable.com/book/?id=1214a&lang=auto"
            target="_blank"
            rel="noopener"
            className="btn-gold"
          >
            Reservér dit bord →
          </Link>
          <Link href="/menu" className="btn-ghost">
            Udforsk menuen
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
