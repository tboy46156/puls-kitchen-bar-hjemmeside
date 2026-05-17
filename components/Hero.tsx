"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

const EYEBROW = "Velkommen til";

function TypewriterEyebrow() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -60px 0px" });

  return (
    <p
      ref={ref}
      className="text-[15px] tracking-[0.4em] uppercase text-gold mb-8 flex items-center gap-4 font-medium"
      style={{ textShadow: "0 2px 20px rgba(0,0,0,0.95)" }}
    >
      <span className="flex">
        {EYEBROW.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.06, delay: inView ? i * 0.055 : 0 }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>
    </p>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.16]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-obsidian">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/interior.jpeg"
          alt="PULS — interiør"
          fill priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,9,8,0.55)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40" />
      </motion.div>

      {/* Content — never starts invisible; scroll-fade applied as overlay only */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 md:pb-36 px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px] mx-auto text-center">
        {/* Scroll-fade overlay (separate from content so text is always rendered) */}
        <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none" />

        {/* Eyebrow */}
        <TypewriterEyebrow />

        {/* Brand wordmark */}
        <h1
          className="font-brand font-bold text-ivory leading-[0.88] tracking-[0.04em] animate-fadein"
          style={{ fontSize: "clamp(6rem,22vw,18rem)" }}
        >
          PULS
        </h1>

        {/* Tagline */}
        <p
          className="mt-4 font-editorial italic text-gold font-light tracking-wide animate-fadein"
          style={{ fontSize: "clamp(1.4rem,3.5vw,3rem)", animationDelay: "0.3s" }}
        >
          Smag på pulsen
        </p>

        {/* Description */}
        <p
          className="mt-7 max-w-sm md:max-w-md text-ivory/80 leading-[1.75] text-base mx-auto animate-fadein"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8)", animationDelay: "0.55s" }}
        >
          Køkken og bar i ét rum. Retter der mærkes og drinks der giver
          anledning til at blive siddende lidt længere.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fadein" style={{ animationDelay: "0.75s" }}>
          <Link
            href="https://www.pulskitchen.dk/booking"
            target="_blank" rel="noopener"
            className="btn-gold"
          >
            Reservér dit bord
          </Link>
        </div>
      </div>

      {/* Vertical scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-14 bg-gradient-to-b from-gold/70 to-transparent origin-top"
        />
        <span className="text-[8px] tracking-[0.5em] uppercase text-stone rotate-180 [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
