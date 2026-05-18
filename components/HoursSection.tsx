import FadeIn from "./FadeIn";

const hours = [
  { day: "Man – Tors", time: "11.00 – 22.00", kitchen: "Køkken til 21.30" },
  { day: "Fredag",     time: "11.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Lørdag",     time: "10.00 – 24.00", kitchen: "Køkken til 22.00" },
  { day: "Søndag",     time: "10.00 – 22.00", kitchen: "Køkken til 21.00" },
];

export default function HoursSection() {
  return (
    <section id="hours" className="bg-obsidian text-ivory section-pad">
      <div className="container-max">

        {/* Top label */}
        <FadeIn>
          <div className="mb-14 border-b border-border-col pb-8">
            <p className="eyebrow">Åbningstider & find os</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Hours table */}
          <FadeIn className="lg:col-span-7" delay={0.08}>
            <ul className="space-y-0">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_auto] items-center gap-x-6 gap-y-1 py-5 border-b border-border-col first:border-t first:border-border-col"
                >
                  <span className="text-base md:text-lg font-semibold text-ivory">
                    {h.day}
                  </span>
                  <span className="font-display font-semibold text-2xl md:text-3xl text-ivory tracking-tight">
                    {h.time}
                  </span>
                  <span className="col-span-2 sm:col-span-1 text-sm md:text-base text-ivory/70 sm:text-right">
                    {h.kitchen}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Address + contact */}
          <FadeIn className="lg:col-span-5" delay={0.15}>
            <div className="bg-charcoal p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-[9px] tracking-[0.38em] uppercase text-gold mb-6">Adresse</p>
                <address className="not-italic">
                  <p className="display-section text-3xl md:text-4xl text-ivory leading-tight">
                    Arne Jacobsens<br />
                    <span className="italic-display font-[400] normal-case text-gold">Allé 9</span>
                  </p>
                  <p className="mt-4 text-ivory/55 text-sm tracking-wide">2300 København S</p>
                </address>

                <div className="mt-8 space-y-3 border-t border-border-col pt-8">
                  <a
                    href="tel:+4532626030"
                    className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors text-sm"
                  >
                    <span className="text-[9px] tracking-[0.28em] uppercase text-stone w-10 shrink-0">Tlf.</span>
                    +45 3262 6030
                  </a>
                  <a
                    href="mailto:info@pulskitchen.dk"
                    className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors text-sm"
                  >
                    <span className="text-[9px] tracking-[0.28em] uppercase text-stone w-10 shrink-0">Mail</span>
                    info@pulskitchen.dk
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Google Maps */}
        <FadeIn delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.9!2d12.5779!3d55.6303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652535c2be74a25%3A0x3b0e7c2e0e4e4e4e!2sArne%20Jacobsens%20All%C3%A9%209%2C%202300%20K%C3%B8benhavn%20S!5e0!3m2!1sda!2sdk!4v1700000000000!5m2!1sda!2sdk"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PULS Kitchen & Bar — Arne Jacobsens Allé 9"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
