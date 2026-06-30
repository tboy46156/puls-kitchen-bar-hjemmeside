// ─── DRIKKE ────────────────────────────────────────────────────────────────

const cocktails = [
  {
    sub: "Spritz",
    items: [
      { name: "Aperol Spritz",      desc: "Aperol – prosecco – danskvand – appelsin",    price: "95,-" },
      { name: "Limoncello Spritz",  desc: "Limoncello – prosecco – danskvand – citron",  price: "95,-" },
    ],
  },
  {
    sub: "Gin",
    items: [
      { name: "French 75",     desc: "Gin – citron – sukker – prosecco",   price: "115,-" },
      { name: "Gin & Tonic",   desc: "Gin – fevertree tonic – agurk",      price: "115,-" },
      { name: "Gin Selection", desc: "Hendricks 125,- · Monkey 47 135,-",  price: "" },
    ],
  },
  {
    sub: "Rom",
    items: [
      { name: "Mojito", desc: "Lys rom – rørsukker – mynte – lime", price: "115,-" },
    ],
  },
];

const beer = [
  { name: "Royal Classic 4,6%",           prices: "45,- · 65,- · 175,-" },
  { name: "Royal Pilsner 4,8%",           prices: "45,- · 65,- · 175,-" },
  { name: "Royal Blanche 4,6%",           prices: "45,- · 65,- · 175,-" },
  { name: "Royal IPA 4,8%",               prices: "45,- · 65,- · 175,-" },
  { name: "Birra Moretti 4,6%",           prices: "45,- · 65,- · 175,-" },
  { name: "Anarkist Bloody Weizen 5,2%",  prices: "49,- · 69,- · 185,-" },
  { name: "Schiøtz Mørk Mumme 6,5%",     prices: "49,- · 69,- · 185,-" },
  { name: "Heineken 0,0% (flaske)",       prices: "45,-" },
];

const softdrinks = [
  { name: "Sodavand 33/50 cl.",         desc: "Pepsi, Pepsi Max, Faxe Kondi, Mirinda, Redbull", price: "42,- / 55,-" },
  { name: "Saft Øko",                   desc: "Organic juice flaske · Hyldeblomst, æblemost eller hindbær", price: "42,-" },
  { name: "Danskvand",                  desc: "Sparkling Water",                                 price: "gl. 40,- / kande 55,-" },
  { name: "Isvand",                     desc: "Ice Water",                                       price: "gl. 25,- / kande 45,-" },
];

const juice = [
  { name: "Orange Juice",       desc: "Friskpresset · Freshly made",                   price: "55,-" },
  { name: "Pineapple Express",  desc: "Ananas, mynte, lime, æble",                     price: "55,-" },
  { name: "Mango Mama",         desc: "Mango, hindbær, appelsin, æble",                price: "55,-" },
  { name: "Ginger/Orange",      desc: "Appelsin, ingefær, citron, æble",               price: "55,-" },
];

const shakes = [
  { name: "Choko",           desc: "m. chokolade & vanilje",                          price: "55,-" },
  { name: "Espresso",        desc: "m. kaffebønner & vanilje",                        price: "55,-" },
  { name: "Strawbana",       desc: "m. jordbær, banan & vanilje",                     price: "55,-" },
  { name: "Passion Fashion", desc: "m. passion, mango, hyldeblomst & vanilje",        price: "55,-" },
];

const hotdrinks = [
  { name: "Americano",       price: "40,-" },
  { name: "Caffé Latte",     price: "45/50,-" },
  { name: "Cappuccino",      price: "42/48,-" },
  { name: "Espresso",        price: "30/35,-" },
  { name: "Macchiato",       price: "30/35,-" },
  { name: "Cortado",         price: "35/40,-" },
  { name: "Chai Latte",      price: "45,-" },
  { name: "Varm Chokolade",  price: "45,-" },
  { name: "Te",              price: "35,-" },
  { name: "Iskaffe",         price: "55,-" },
  { name: "Irish Coffee",    price: "95,-" },
];

// ─── VIN ───────────────────────────────────────────────────────────────────

const bubbles = [
  { name: "Prosecco, Corte Delle Calli", country: "Frankrig (Øko)", desc: "Frisk og blød med fine frugtige noter", price: "gl. 75,- / 295,-" },
];

const rose = [
  { name: "Palm, Château L'Escarelle", country: "Provence, Frankrig", desc: "Tør, frisk, mineralsk og økologisk rosé", price: "450,-" },
  { name: "Doriac, D'OC",              country: "Frankrig",           desc: "Klassisk, tør, lys, sydfransk rosé",      price: "gl. 95,- / 375,-" },
  { name: "Cinsault, Louis Eschenauer, D'OC", country: "Frankrig",   desc: "Halvtør rosé med fine bløde frugtige noter", price: "gl. 85,- / 295,-" },
];

const whitewine = [
  { name: "Riesling, Paul Schneider, Alsace", country: "Frankrig",     desc: "Halvtør Riesling fra lille familievingård",              price: "gl. 100,- / 395,-" },
  { name: "Pinot Grigio, Bertoldi, Garda",    country: "Italien",      desc: "Frisk halvtør italiensk klassiker",                     price: "gl. 85,- / 295,-" },
  { name: "Sauvignon Blanc, Inviniti",        country: "New Zealand",  desc: "Frisk med karakterfuld toner af hyldeblomst",           price: "gl. 95,- / 375,-" },
  { name: "Chardonnay, Bogle, Clarksburg",    country: "USA",          desc: "Stor, cremet og fyldig fadlagret hvidvin",              price: "gl. 120,- / 450,-" },
];

const redwine = [
  { name: "Pinot Noir, La Cour Des Grands, D'OC",              country: "Frankrig", desc: "Saftig og charmerende Pinot Noir med let fadlagring",         price: "350,-" },
  { name: "Rosso Rossetti, Toscana",                            country: "Italien",  desc: "Charmerende saftig med friske frugtige toner",               price: "gl. 85,- / 295,-" },
  { name: "Ripasso Superiore Semprebon, Valpolicella Classico", country: "Italien",  desc: "Charmerende blød og saftig med god smag",                    price: "gl. 100,- / 395,-" },
  { name: "Ardal, Ribera Del Duero",                            country: "Spanien",  desc: "Kraftig, blød og saftig rødvin med let krydrede toner",      price: "gl. 100,- / 395,-" },
  { name: "Pinot Noir Bogle, California",                       country: "USA",      desc: "Silkeblød, saftig og fyldig Pinot Noir",                     price: "gl. 120,- / 450,-" },
];

const dessertwine = [
  { name: "Sauternes, Louis Eschenauer, Bordeaux", country: "Frankrig", desc: "Klassisk frisk lys dessertvin", price: "gl. 80,-" },
  { name: "Ruby Port, Quinta Do Estanho",          country: "Portugal",  desc: "Klassisk blød og sødmefuld portvin", price: "gl. 70,-" },
];

// ─── COMPONENTS ────────────────────────────────────────────────────────────

function SectionHeader({ da, en }: { da: string; en?: string }) {
  return (
    <div className="border-t-2 border-sage pt-3 mb-4">
      <h3 className="font-bold text-2xl text-obsidian leading-tight">
        {da}
        {en && <span className="text-[11px] tracking-[0.18em] uppercase text-sage ml-2 font-normal align-middle">{en}</span>}
      </h3>
    </div>
  );
}

function Row({ name, right, desc }: { name: string; right?: string; desc?: string }) {
  return (
    <div className="py-3 border-b border-obsidian/[0.07]">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-semibold text-base text-obsidian">{name}</span>
        {right && <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{right}</span>}
      </div>
      {desc && <p className="text-sm text-obsidian/65 mt-0.5 leading-relaxed">{desc}</p>}
    </div>
  );
}

function WineRow({ name, country, desc, price }: { name: string; country: string; desc: string; price: string }) {
  return (
    <div className="py-3 border-b border-obsidian/[0.07]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-base text-obsidian">{name}</p>
          <p className="text-[11px] tracking-[0.14em] uppercase text-sage font-semibold mt-0.5">{country}</p>
        </div>
        <span className="font-semibold text-forest text-sm shrink-0 tabular-nums text-right">{price}</span>
      </div>
      <p className="text-sm text-obsidian/65 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function DrinksMenuContent() {
  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">

      {/* ── VENSTRE: DRIKKE ─────────────────────────────── */}
      <div>

        {/* Pitcher */}
        <div className="mb-10">
          <SectionHeader da="Pitcher 1,5L" />
          <Row name="Mojito · Gin & Tonic · Passion Martini" right="345,-" />
        </div>

        {/* Cocktails */}
        <div className="mb-10">
          <SectionHeader da="Cocktails" />
          <p className="text-sm text-obsidian/60 mb-4">Happy Hour tors. kl. 17–20</p>
          {cocktails.map((group) => (
            <div key={group.sub} className="mb-5">
              <p className="text-xs tracking-[0.18em] uppercase text-obsidian/50 font-semibold mb-2">{group.sub}</p>
              {group.items.map((item) => (
                <Row key={item.name} name={item.name} right={item.price || undefined} desc={item.desc} />
              ))}
            </div>
          ))}
        </div>

        {/* Øl */}
        <div className="mb-10">
          <SectionHeader da="Øl" en="Beer" />
          <p className="text-sm text-obsidian/60 mb-3">0,33L · 0,5L · 1,5L</p>
          {beer.map((item) => (
            <div key={item.name} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-3">
              <span className="font-semibold text-base text-obsidian">{item.name}</span>
              <span className="font-semibold text-forest text-sm shrink-0 tabular-nums">{item.prices}</span>
            </div>
          ))}
        </div>

        {/* Sodavand */}
        <div className="mb-10">
          <SectionHeader da="Sodavand & Saft" en="Soda & Juice" />
          {softdrinks.map((item) => (
            <Row key={item.name} name={item.name} right={item.price} desc={item.desc} />
          ))}
        </div>

        {/* Juice */}
        <div className="mb-10">
          <SectionHeader da="Friskpresset Juice" en="Fresh Juice" />
          {juice.map((item) => (
            <Row key={item.name} name={item.name} right={item.price} desc={item.desc} />
          ))}
        </div>

        {/* Shakes */}
        <div className="mb-10">
          <SectionHeader da="Shakes" />
          {shakes.map((item) => (
            <Row key={item.name} name={item.name} right={item.price} desc={item.desc} />
          ))}
        </div>

        {/* Varme drikke */}
        <div className="mb-10">
          <SectionHeader da="Varme Drikke" en="Hot Beverages · Lavazza" />
          {hotdrinks.map((item) => (
            <div key={item.name} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-3">
              <span className="font-semibold text-base text-obsidian">{item.name}</span>
              <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── HØJRE: VIN ──────────────────────────────────── */}
      <div>

        {/* Bobler */}
        <div className="mb-10">
          <SectionHeader da="Bobler" en="Bubbles" />
          {bubbles.map((w) => (
            <WineRow key={w.name} {...w} />
          ))}
        </div>

        {/* Rosé */}
        <div className="mb-10">
          <SectionHeader da="Rosé" />
          {rose.map((w) => (
            <WineRow key={w.name} {...w} />
          ))}
        </div>

        {/* Hvidvin */}
        <div className="mb-10">
          <SectionHeader da="Hvidvin" en="White Wine" />
          {whitewine.map((w) => (
            <WineRow key={w.name} {...w} />
          ))}
        </div>

        {/* Rødvin */}
        <div className="mb-10">
          <SectionHeader da="Rødvin" en="Red Wine" />
          {redwine.map((w) => (
            <WineRow key={w.name} {...w} />
          ))}
        </div>

        {/* Dessertvin */}
        <div className="mb-10">
          <SectionHeader da="Dessertvin" en="Dessert Wine" />
          {dessertwine.map((w) => (
            <WineRow key={w.name} {...w} />
          ))}
        </div>

        <p className="text-sm text-obsidian/55 border-t border-obsidian/10 pt-4">
          For fuld vinliste — spørg venligst din tjener
        </p>

      </div>
    </div>
  );
}
