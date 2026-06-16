import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="om" className="bg-bone px-4 md:px-6 pb-1.5 md:pb-2">
      <div className="bg-ivory rounded-2xl md:rounded-3xl">
      <div className="container-max py-6 md:py-8 px-8 md:px-16 lg:px-24 text-center">
        <FadeIn>
          <p className="eyebrow justify-center !text-obsidian/60 [&::before]:hidden mb-6">
            Velkommen til PULS
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="display-section text-4xl md:text-6xl lg:text-7xl text-obsidian mx-auto">
            Restaurant og bar i Ørestad med fransk, italiensk og nordisk mad
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-10 mx-auto max-w-2xl text-obsidian/65 leading-relaxed text-base md:text-lg">
            Vi laver mad af det der er i sæson og blander drinks vi selv
            gider drikke. Ingen gardin foran køkkenet, ingen lang liste af
            allergener på kridt. Bare et sted du har lyst til at sidde.
          </p>
        </FadeIn>
      </div>
      </div>
    </section>
  );
}
