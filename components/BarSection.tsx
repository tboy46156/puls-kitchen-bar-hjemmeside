import Image from "next/image";
import FadeIn from "./FadeIn";

export default function BarSection() {
  return (
    <section id="bar" className="relative overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <Image
          src="/images/interior.jpeg"
          alt="PULS bar"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/75" />
      </div>

      <div className="relative container-max section-pad">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="eyebrow justify-center mb-6">Bar & Cocktails</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="display-section text-4xl md:text-6xl lg:text-7xl text-ivory">
              Baren er åben{" "}
              <span className="italic-display text-gold font-[400] normal-case">
                til vi lukker
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-8 text-ivory/70 leading-[1.75] text-base mx-auto max-w-lg">
              Vores cocktailmenu er personligt udarbejdet af vores bar manager.
              Vi serverer kolde øl — både fadøl og på flaske — og har et
              omfattende vinkort fra Frankrig, Italien og oversøisk.
              Baren er åben fra kl. 11.00 til 22.00.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex justify-center gap-12 border-t border-gold/25 pt-10">
              {[
                ["Åbent", "11–22"],
                ["Fadøl & flaske", "Øl"],
                ["Vinkort", "FR · IT"],
              ].map(([lbl, val]) => (
                <div key={lbl} className="text-center">
                  <p className="text-[9px] tracking-[0.32em] uppercase text-stone">{lbl}</p>
                  <p className="font-display font-semibold text-2xl text-gold mt-2 tracking-tight">{val}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
