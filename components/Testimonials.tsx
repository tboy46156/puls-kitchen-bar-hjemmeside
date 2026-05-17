import Image from "next/image";
import FadeIn from "./FadeIn";

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

export default function Testimonials() {
  return (
    <section className="relative bg-obsidian overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-1.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative container-max section-pad">
        <FadeIn>
          <p className="eyebrow mb-5">Gæster om os</p>
          <h2 className="display-section text-5xl md:text-6xl lg:text-7xl max-w-[18ch] text-ivory mb-14">
            Hvorfor gæsterne{" "}
            <span className="italic-display text-gold font-[400] normal-case">
              kommer igen
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={0.07 + i * 0.07}>
              <article className={`h-full p-8 md:p-10 border border-border-col ${r.dark ? "bg-charcoal text-ivory" : "bg-bone text-obsidian"}`}>
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="font-editorial italic text-xl md:text-2xl leading-snug mb-6">
                  &ldquo;{r.body}&rdquo;
                </p>
                <div className={`flex items-center gap-3 pt-5 border-t ${r.dark ? "border-ivory/10" : "border-obsidian/12"}`}>
                  <div className={`h-9 w-9 grid place-items-center font-display font-bold text-sm ${r.dark ? "bg-ivory/10" : "bg-obsidian/10"}`}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className={`text-xs ${r.dark ? "text-ivory/50" : "text-obsidian/50"}`}>{r.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
