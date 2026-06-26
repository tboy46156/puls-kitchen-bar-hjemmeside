const brunchItems = [
  "Croissanter",
  "Røræg og bacon",
  "Laksemousse",
  "Udvalgte oste",
  "Avocado",
  "Frisk frugt",
  "Pandekager",
];

export default function BrunchMenuContent() {
  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">

      {/* Venstre: de to pakker */}
      <div>
        {/* Hverdage */}
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Byg-Selv-Brunch</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Hverdage</p>
            <p className="text-xs text-obsidian/40 mt-0.5">Man – Fre · 11.00 – 14.00</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {[
              { label: "3 retter", price: "95,-" },
              { label: "5 retter", price: "145,-" },
              { label: "Ekstra ret", price: "35,-" },
            ].map((row) => (
              <div key={row.label} className="py-3.5 flex items-baseline justify-between gap-3">
                <span className="font-semibold text-obsidian text-base">{row.label}</span>
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{row.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend */}
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Byg-Selv AD LIBITUM</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Weekend · Mest populær</p>
            <p className="text-xs text-obsidian/40 mt-0.5">Lør – Søn · 10.00 – 14.00 · Inkl. kaffe, te, juice & lemonade</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {[
              { label: "Per person", price: "195,-" },
              { label: "Børn under 12", price: "½ pris" },
              { label: "Børn under 3", price: "gratis" },
            ].map((row) => (
              <div key={row.label} className="py-3.5 flex items-baseline justify-between gap-3">
                <span className="font-semibold text-obsidian text-base">{row.label}</span>
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Højre: hvad der er på bordet */}
      <div>
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">På brunchbordet</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Klassikere & friske råvarer</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {brunchItems.map((item) => (
              <div key={item} className="py-3.5">
                <span className="font-semibold text-obsidian text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
