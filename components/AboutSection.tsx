import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="om" className="bg-ivory pt-24 md:pt-28">
      <div className="container-max py-8 md:py-10">
        <FadeIn>
          <div className="text-center mb-6">
            <p className="eyebrow !text-obsidian/60 [&::before]:hidden">
              Velkommen til PULS
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="display-section text-4xl md:text-6xl lg:text-7xl text-obsidian text-center">
            I hjertet af Ørestad
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-10 mx-auto max-w-4xl text-obsidian leading-relaxed text-base md:text-lg">
            PULS Kitchen & Bar er Ørestads moderne bistro, det sted du vender tilbage til, hvad enten det er brunch om lørdagen, frokost på en travl hverdag eller aftensmad inden en koncert i Royal Arena.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="mt-5 mx-auto max-w-4xl text-obsidian leading-relaxed text-base md:text-lg">
            Du finder os ved vandet - med plads til 140 gæster indendørs og 150 på vores store træterrasse. Uanset om du kommer for en byg-selv brunch i weekenden, en cocktail eller middag før koncerten i Royal Arena, eller en hyggelig aften med venner, sørger vi for at du føler dig hjemme.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <p className="mt-5 mx-auto max-w-4xl text-obsidian leading-relaxed text-base md:text-lg">
            Vi ligger på Arne Jacobsens Allé 9 i Ørestad, København S — gåafstand fra Royal Arena, Fields og Cabinn Metro Hotel, og 5 minutter fra Metro Ørestad.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
