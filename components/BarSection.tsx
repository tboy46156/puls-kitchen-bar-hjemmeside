import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function BarSection() {
  return (
    <section className="bg-forest">
      <div className="container-max py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Billede — mindre, med runde hjørner */}
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden max-w-md mx-auto md:mx-0">
              <Image
                src="/images/drinks.jpg"
                alt="PULS Bar — cocktails og drinks i Ørestad"
                fill
                sizes="(min-width:768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Tekst */}
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.28em] uppercase text-ivory/50 font-semibold mb-5">
              PULS Bar
            </p>
            <h2 className="display-section text-4xl md:text-5xl text-ivory leading-[0.95]">
              Signature cocktails.<br />Klassiske drinks.
            </h2>
            <p className="mt-6 text-ivory/70 text-base leading-relaxed max-w-sm">
              Vores bar byder på håndlavede cocktails, et bredt udvalg af vine og kolde øl — nydt ved baren eller ved bordet.
            </p>
            <p className="mt-4 text-ivory/70 text-base leading-relaxed max-w-sm">
              Med få minutters gang til Royal Arena er PULS det naturlige stopover — kom tidligt og nyd stemningen inden showet.
            </p>
            <p className="mt-5 text-sm text-ivory/40">
              Happy hour tors. kl. 17–20
            </p>
            <Link
              href="/menu?tab=drinks"
              className="mt-8 btn-sage-solid self-start inline-flex"
            >
              Se drikkekortet
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
