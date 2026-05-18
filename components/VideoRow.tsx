"use client";

import { useRef, useEffect } from "react";

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

export default function VideoRow() {
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
        // Decay drag velocity
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

  // Mouse drag
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

  // Touch drag
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
    <section className="bg-ivory pt-4 pb-0">
      <div className="bg-obsidian rounded-t-[2rem] md:rounded-t-[3rem] pt-8 md:pt-10 pb-10 md:pb-14">
        <div className="container-max">
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
                  <div className="overflow-hidden rounded-xl md:rounded-2xl border border-border-col">
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      draggable={false}
                      className="w-full object-cover aspect-[9/16] pointer-events-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
