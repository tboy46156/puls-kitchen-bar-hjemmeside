type MenuItem = {
  da: string;
  en?: string;
  desc?: string;
  price?: string;
};

const drinks: MenuItem[] = [
  { da: "Gin & Tonic Hendricks", price: "125,-" },
  { da: "Limoncello",            price: "95,-"  },
  { da: "Gin & Tonic",          price: "115,-" },
  { da: "Aperol Spritz",        price: "95,-"  },
  { da: "Dark N' Stormy",       price: "115,-" },
  { da: "Doriac Rosé",          price: "95,-"  },
  { da: "French 75",            price: "115,-" },
  { da: "Prosecco",             price: "75,-"  },
];

const mainDishes: MenuItem[] = [
  { da: "Ribeye Steak",       price: "325,-", desc: "Ribeye 300g, sprøde fritter, bearnaise" },
  { da: "Pasta Trøffel",      price: "195,-", desc: "Linguine, grillet kylling, svampe, trøffel, cremet sauce" },
  { da: "Puls Burger",        price: "180,-", desc: "Flammegrillet oksekød, bacon, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, fritter, dijonnaise" },
  { da: "Fish N' Chips",      price: "175,-", desc: "Torsk, grove fritter, sauce tartar" },
  { da: "Chèvre Chaud Salat", price: "155,-", desc: "Gedeost, grillet brød, syltede græskar, spæd salat, balsamico glace, honning ristede valnødder, friske bær" },
];

const desserts: MenuItem[] = [
  { da: "Crème Brûlée", price: "75,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær" },
];

export default function KoncertMenuContent() {
  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">

      {/* Venstre: drinks + hovedretter */}
      <div>

        {/* Drinks */}
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Start Aftenen med et Glas</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Start the Evening with a Glass of</p>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            {drinks.map((d) => (
              <div key={d.da} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-2">
                <span className="font-semibold text-obsidian text-base">{d.da}</span>
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{d.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hovedretter */}
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Retter</h3>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {mainDishes.map((item) => (
              <div key={item.da} className="py-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-obsidian text-base">{item.da}</span>
                  <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
                </div>
                {item.desc && (
                  <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Højre: Kokken anbefaler + dessert + ekstra */}
      <div>

        {/* Kokken anbefaler — fremhævet */}
        <div className="mb-10">
          <div className="border-t-2 border-gold pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Kokken Anbefaler</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-gold/80 mt-0.5">Chef's Choice</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            <div className="py-3.5">
              <span className="font-semibold text-obsidian text-base">Ribeye Steak</span>
              <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">Ribeye 300g, sprøde fritter, bearnaise · + Side salat 35,-</p>
            </div>
            <div className="py-3.5">
              <span className="font-semibold text-obsidian text-base">Crème Brûlée</span>
              <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-obsidian/10 flex items-baseline justify-between">
            <span className="text-xs tracking-[0.18em] uppercase text-obsidian/50">Samlet pris</span>
            <span className="font-bold text-2xl text-forest tabular-nums">375,-</span>
          </div>
        </div>

        {/* Dessert */}
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Desserter</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Desserts</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {desserts.map((item) => (
              <div key={item.da} className="py-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-obsidian text-base">{item.da}</span>
                  <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
                </div>
                {item.desc && (
                  <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ekstra */}
        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">Ekstra</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Extra</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            <div className="py-3.5">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <span className="font-semibold text-obsidian text-base">Sprøde Fritter m. Dip</span>
                  <span className="text-obsidian/35 text-[11px] font-normal ml-1.5">Fries with Dip</span>
                </div>
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">55,-</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-[11px] text-obsidian/35">Allergener — spørg venligst personalet</p>
        </div>

      </div>
    </div>
  );
}
