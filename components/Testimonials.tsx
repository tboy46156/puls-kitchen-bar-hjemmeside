"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { useRef, useEffect } from "react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Food blogger",
    body: "Hver ret var frisk, smagfuld og smukt anrettet. En af de bedste spiseoplevelser, jeg har haft i København.",
    dark: false,
  },
  {
    name: "Lasse K.",
    role: "Returning guest",
    body: "Absolut fantastisk mad og en vidunderlig atmosfære — fra det øjeblik vi trådte ind, til den sidste bid.",
    dark: true,
  },
  {
    name: "Mette H.",
    role: "TripAdvisor",
    body: "Vi kom for en arbejdsfrokost og endte med at bestille dessert to gange. Personalet er opmærksomme og servicen er i top.",
    dark: false,
  },
  {
    name: "Thomas R.",
    role: "Google anmeldelse",
    body: "Brunchretten på lørdag var simpelthen sublim. Kvaliteten matcher fuldt ud atmosfæren — virkelig et cut above.",
    dark: true,
  },
  {
    name: "Camilla B.",
    role: "Stamgæst",
    body: "Vi fejrer altid vores mærkedage her. PULS formår at gøre enhver aften særlig — maden, stemningen, personalet.",
    dark: false,
  },
  {
    name: "Jonas W.",
    role: "TripAdvisor",
    body: "Cocktailkortet er imponerende og bartenderen vidste præcis hvad han lavede. Vil anbefale det til alle.",
    dark: true,
  },
];

const videos = [
  "/Videos/AQNH5iVB9e3yZFxD73z3Q6LiNfP-6rk64fHXinBMI_cbvL2u5hBH-HwIWzE_P0u3lxNPiUUd5V2msXug6XGRaiAmj_iQ5Tb7HhH1OH6VAQ.mp4",
  "/Videos/AQNMfGtrIHRyMWGRRHbdAx6Znu8Od4GvbhESHT_BjP6xsePSIM7GB_X44Oxs2mnGCMj4ZgTyifS0S71SwyHbezujRb2P_pTf-bQ2cRw.mp4",
  "/Videos/AQNTk0Nf_35PAWmaz_q6sDTr8OJ0no8S14uUSap2rXhUilMWkAcPvMOYr9W1biH1Gp4AzwZ6KR8ZTFRIxue2eRha85qSIn6ETDJN78k.mp4",
  "/Videos/AQNqF96-kd-twLTXeieXA-UBdv-HLpupeWtjq-Ofo9YM9fdmA4ytI-yBn3aUErF5EcGQobfTFhQGMg77A_YBc5_M.mp4",
  "/Videos/AQOGUSM-5etVkDa6dDXEahcz0Dn_T4J-4ibsm7aHSZ6vXL0k4DPrZc25RghgxjGWJ0g8p1sokIEmoUbHhWdnlLnQhvAYNNl-xGyKIE8.mp4",
  "/Videos/AQOWPkPE_XJ5h_ijlaF2PKJe929CZPBFFUhHGzXQN7tnSYoioHNqUXeG7rnbPdhlPcbGcuuHZq6__YFeG5_phBR2.mp4",
  "/Videos/AQP0gPoS1ADKNIjgqm1gSwXQtGdgCikfXSU1YDmZhWbZ1IPc7L9rbiCjCLHDhirdfv2010rTFeCEeurGRq65Wz6q.mp4",
  "/Videos/AQPS2AbRS0gWQVNSOTgoFOtmO-rztOPqlhLjOToPdNddKZDDaQtEBAB42DGdhiYqU6ZP71MQh0zbksAlrvsRspb1emXUz-jzVqhawlneulLl6Q (1).mp4",
  "/Videos/AQOIfyuagYyuY7nTC05h0JTcWnMaWXXNxl6_D175z6Fa29mwEiCD_FIBSjHSE9z1fHzwbsxOxjYEV8YttuhHsqpe2KZ3o39N3E4.mp4",
  "/Videos/AQMhCEWVrrAexQw6KM0v_GCf-Sr1LJEO9redmRUp1Y5MVW0257bhIU2n0ytBUyahikswdnoZUnO3CfzEgOndKni_.mp4",
];

const doubled = [...videos, ...videos];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const velocityRef = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.8;

    const clamp = (pos: number) => {
      const half = track.scrollWidth / 2;
      let p = pos % half;
      if (p < 0) p += half;
      return p;
    };

    const tick = () => {
      if (!isDragging.current) {
        if (Math.abs(velocityRef.current) > 0.1) {
          posRef.current = clamp(posRef.current + velocityRef.current);
          velocityRef.current *= 0.92;
        } else {
          velocityRef.current = 0;
          posRef.current = clamp(posRef.current + speed);
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    lastX.current = e.clientX;
    lastT.current = performance.now();
    velocityRef.current = 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastX.current;
    const dt = performance.now() - lastT.current;
    velocityRef.current = dt > 0 ? -dx / (dt * 0.5) : 0;
    lastX.current = e.clientX;
    lastT.current = performance.now();
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    let p = dragStartPos.current - (e.clientX - dragStartX.current);
    p = ((p % half) + half) % half;
    posRef.current = p;
    track.style.transform = `translateX(-${p}px)`;
  };

  const onMouseUp = () => { isDragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartPos.current = posRef.current;
    lastX.current = e.touches[0].clientX;
    lastT.current = performance.now();
    velocityRef.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastX.current;
    const dt = performance.now() - lastT.current;
    velocityRef.current = dt > 0 ? -dx / (dt * 0.5) : 0;
    lastX.current = e.touches[0].clientX;
    lastT.current = performance.now();
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    let p = dragStartPos.current - (e.touches[0].clientX - dragStartX.current);
    p = ((p % half) + half) % half;
    posRef.current = p;
    track.style.transform = `translateX(-${p}px)`;
  };

  const onTouchEnd = () => { isDragging.current = false; };

  return (
    <section className="bg-bone py-12 md:py-16 overflow-hidden">
      <div>

        {/* Title */}
        <FadeIn>
          <div className="text-center mb-10 md:mb-12 px-6">
            <h2 className="font-display font-bold text-4xl md:text-6xl text-obsidian tracking-tight leading-tight">
              Hvad vores gæster siger
            </h2>
            <div className="flex justify-center gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold text-base">★</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Review cards */}
        <div className="px-4 md:px-6 grid md:grid-cols-3 gap-3 mb-10 md:mb-14">
          {reviews.slice(0, 3).map((r, i) => (
            <FadeIn key={r.name} delay={0.06 + i * 0.06}>
              <article className={`p-5 rounded-xl border border-obsidian/10 ${r.dark ? "bg-sand text-obsidian" : "bg-ivory text-obsidian"}`}>
                <p className="text-sm leading-relaxed mb-4">
                  &ldquo;{r.body}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-obsidian/10">
                  <div className="h-7 w-7 rounded-full grid place-items-center font-display font-bold text-xs shrink-0 bg-obsidian/10">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-xs">{r.name}</p>
                    <p className="text-xs text-obsidian/60">{r.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Video carousel */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ width: "max-content" }}
          >
            {doubled.map((src, i) => (
              <div
                key={i}
                className="shrink-0 px-2.5 md:px-3"
                style={{ width: "clamp(180px, 42vw, 240px)" }}
              >
                <div className="overflow-hidden rounded-xl md:rounded-2xl border border-obsidian/15 relative aspect-[9/16]">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    draggable={false}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ objectFit: "cover", transform: "scale(1.18)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
