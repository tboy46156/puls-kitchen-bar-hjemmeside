import Link from "next/link";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="om" className="bg-ivory text-obsidian relative">
      <div className="container-max section-pad">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <p className="eyebrow !text-obsidian/60 [&::before]:bg-obsidian/40">
                Velkommen til PULS
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-9">
            <FadeIn delay={0.05}>
              <h2 className="display-section text-4xl md:text-6xl lg:text-7xl max-w-[22ch] text-obsidian">
                Sæsonens retter{" "}
                <span className="italic-display font-[400] normal-case !tracking-normal text-obsidian/80">
                  lavet med omhu
                </span>{" "}
                og de råvarer der faktisk er i sæson
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-10 max-w-2xl text-obsidian/65 leading-relaxed text-base md:text-lg">
                PULS er restaurant og bar i ét rum. Brunch om morgenen, god mad
                og cocktails til sent — vi er ikke kun det ene eller det andet.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/kontakt"
                className="mt-10 inline-flex items-center gap-2 border border-obsidian/25 px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Lær mere om PULS
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>

    </section>
  );
}
