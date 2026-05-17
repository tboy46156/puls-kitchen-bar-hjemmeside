import FadeIn from "./FadeIn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  bg?: "obsidian" | "ivory" | "bone";
};

export default function PageHero({ eyebrow, title, description, bg = "ivory" }: Props) {
  const bgClass = { obsidian: "bg-obsidian text-ivory", ivory: "bg-ivory text-obsidian", bone: "bg-bone text-obsidian" }[bg];
  const eyebrowClass = bg === "obsidian" ? "" : "!text-obsidian/55 [&::before]:bg-obsidian/35";
  const descClass = bg === "obsidian" ? "text-ivory/65" : "text-obsidian/60";

  return (
    <section className={`pt-44 md:pt-56 pb-16 md:pb-24 ${bgClass} relative overflow-hidden`}>
      <div className="container-max">
        <FadeIn><p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p></FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="display-hero mt-6 text-6xl md:text-8xl lg:text-9xl max-w-[16ch]">{title}</h1>
        </FadeIn>
        {description && (
          <FadeIn delay={0.1}>
            <p className={`mt-8 text-lg max-w-2xl leading-relaxed ${descClass}`}>{description}</p>
          </FadeIn>
        )}
      </div>
      <div className={`mt-20 h-px w-full ${bg === "obsidian" ? "bg-border-col" : "bg-obsidian/10"}`} />
    </section>
  );
}
