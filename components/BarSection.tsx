import Image from "next/image";
import FadeIn from "./FadeIn";

export default function BarSection() {
  return (
    <section id="bar" className="bg-bone px-4 md:px-6 pb-2 md:pb-3">
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src="/images/interior.jpeg"
            alt="PULS bar"
            fill
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-obsidian/80" />
        </div>

        <div className="relative container-max py-8 md:py-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-4xl mx-auto">

            <div className="text-center">
              <FadeIn>
                <p className="eyebrow justify-center mb-5">Bar & Cocktails</p>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="display-section text-3xl md:text-5xl text-ivory">
                  Baren er åben{" "}
                  <span className="italic-display text-gold font-[400] normal-case">
                    til vi lukker
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-5 text-ivory/80 leading-[1.75] text-base mx-auto max-w-md">
                  Vores cocktailmenu er personligt udarbejdet af vores bar manager.
                  Vi serverer kolde øl — både fadøl og på flaske — og har et
                  omfattende vinkort fra Frankrig, Italien og oversøisk.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.18}>
              <div className="mx-auto overflow-hidden rounded-2xl md:rounded-3xl border border-gold/20 shadow-[0_8px_48px_rgba(0,0,0,0.6)]"
                style={{ maxWidth: "300px" }}
              >
                <video
                  src="/Videos/AQPg_2M_qSaGiw_wRMAgeUtlRYa11KjvH8Z9iSXnSO2h1Tr45aKDQ5TySAU3HqMwNoku5NxokJmfC6W6JebljkJNGxuMDASRBn529ZI.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full object-cover aspect-[9/16]"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
