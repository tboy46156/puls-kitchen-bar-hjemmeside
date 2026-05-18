import Image from "next/image";
import FadeIn from "./FadeIn";

export default function BarSection() {
  return (
    <section id="bar" className="relative overflow-hidden bg-[#1a1208]">
      <div className="absolute inset-0">
        <Image
          src="/images/interior.jpeg"
          alt="PULS bar"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a08]/80 via-[#1a1208]/90 to-obsidian/95" />
        <div className="absolute inset-0 border-y border-gold/15" />
      </div>

      <div className="relative container-max py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <p className="eyebrow justify-center mb-6">Bar & Cocktails</p>
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
            <p className="mt-6 text-ivory/70 leading-[1.75] text-base mx-auto max-w-md">
              Vores cocktailmenu er personligt udarbejdet af vores bar manager.
              Vi serverer kolde øl — både fadøl og på flaske — og har et
              omfattende vinkort fra Frankrig, Italien og oversøisk.
              Baren er åben fra kl. 11.00 til 22.00.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
