"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const VIDEO_SRC = "/Videos/AQNTk0Nf_35PAWmaz_q6sDTr8OJ0no8S14uUSap2rXhUilMWkAcPvMOYr9W1biH1Gp4AzwZ6KR8ZTFRIxue2eRha85qSIn6ETDJN78k.mp4";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "15%"]);

  return (
    <div ref={ref} className="bg-bone">

      {/* Video — 65vh, no text */}
      <div className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      {/* Floating card — overlaps video by 80px */}
      <div className="px-4 md:px-6 -mt-20 relative z-10 pb-4 md:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.65, 0.2, 1], delay: 0.2 }}
          className="max-w-[860px] mx-auto bg-white rounded-[32px] shadow-[0_8px_56px_rgba(42,53,37,0.10)] px-8 md:px-16 py-12 md:py-16 text-center"
        >
          <h1 className="flex justify-center">
            <Image
              src="/images/PULS_logo.png"
              alt="PULS Kitchen & Bar"
              width={260}
              height={180}
              className="w-[180px] md:w-[240px] h-auto object-contain"
              priority
            />
          </h1>

          <p
            className="mt-6 font-sans text-forest/60 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}
          >
            New Yorker råhed. Pariser-elegance. Midt i Ørestad — få minutter fra Royal Arena.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="btn-sage-solid w-[196px] justify-center whitespace-nowrap">
              Se menukort
            </Link>
            <Link href="/koncertmenu" className="btn-sage-solid w-[196px] justify-center whitespace-nowrap">
              Se koncertmenu
            </Link>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-dark w-[196px] justify-center whitespace-nowrap"
            >
              Bestil bord
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
