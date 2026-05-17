import Image from "next/image";
import FadeIn from "./FadeIn";

export default function BarSection() {
  return (
    <section id="bar" className="relative overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <Image
          src="/images/interior.jpeg"
          alt="PULS bar — kobber og elegance"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
      </div>

      <div className="relative container-max section-pad">
        <div className="max-w-xl">
          <FadeIn>
            <p className="eyebrow mb-6">Cocktailbaren</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="display-section text-4xl md:text-6xl lg:text-7xl text-ivory">
              En bar du husker.{" "}
              <span className="italic-display text-gold font-[400] normal-case">
                Cocktails du ikke glemmer.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-8 text-ivory/70 leading-[1.75] max-w-md text-base">
              Vores bar manager har sat kortet selv. Klassikerne er med og
              de virker, men det er husets egne drinks folk kommer igen for.
              Fadøl, flaske og vinkort med fokus på Frankrig og Italien.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 grid grid-cols-3 gap-0 border-t border-gold/25 pt-10 max-w-sm">
              {[
                ["Åbent", "11–22"],
                ["Cocktails", "∞"],
                ["Vinkort", "FR · IT"],
              ].map(([lbl, val]) => (
                <div key={lbl} className="pr-6">
                  <p className="text-[9px] tracking-[0.32em] uppercase text-stone">{lbl}</p>
                  <p className="font-editorial italic text-2xl text-gold mt-2">{val}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
