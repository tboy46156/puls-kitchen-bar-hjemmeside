type Category = {
  name: string;
  sub?: string;
  items: string[];
};

const left: Category[] = [
  {
    name: "Bagt",
    sub: "Bakery",
    items: [
      "Brødkurv med lys & mørkt samt smør",
      "Friskbagt smørcroissant",
      "Ovnbagte timiankartofler",
    ],
  },
  {
    name: "Kød & Fisk",
    sub: "Meat & Fish",
    items: [
      "Stegt bacon & grønt",
      "Ristede oksepølser med syltede rødløg & grøn mayo",
      "Hjemmelavet hønsesalat med asparges, svampe & purløg",
      "Laksemousse & urter",
    ],
  },
  {
    name: "Fry Me",
    items: [
      "Kyllingelår marineret med mandler, grønt & dip",
      "Grove fritter med aioli",
      "Sprøde forårsruller med grøntsager & sauce",
    ],
  },
];

const right: Category[] = [
  {
    name: "Frugt & Grønt",
    sub: "Fruit & Greens",
    items: [
      "Middelhavsoliven",
      "Klassisk græsk salat",
      "Avocado med sesam, ristede mandler & urter",
      "Årstidens frugt",
    ],
  },
  {
    name: "Æg",
    sub: "Eggs",
    items: [
      "Røræg & grønt",
    ],
  },
  {
    name: "Fra Mejeriet",
    sub: "Dairy",
    items: [
      "Skyr med skovbær, granola & sirup",
      "Brie, emmentaler & feta m. peberfrugt & kompot",
    ],
  },
  {
    name: "Den Søde Tand",
    sub: "Sweet",
    items: [
      "Pandekager med sirup & syltede skovbær",
      "Gammeldags æblekage med makroner, flødeskum & friske bær",
    ],
  },
];

function CategoryBlock({ cat }: { cat: Category }) {
  return (
    <div className="mb-8">
      <div className="border-t-2 border-sage pt-3 mb-3">
        <h3 className="font-bold text-2xl text-obsidian leading-tight">
          {cat.name}
          {cat.sub && (
            <span className="text-sm font-normal text-obsidian/55 ml-2 tracking-wide">{cat.sub}</span>
          )}
        </h3>
      </div>
      <div className="divide-y divide-obsidian/[0.07]">
        {cat.items.map((item) => (
          <p key={item} className="py-2.5 text-base text-obsidian/85">{item}</p>
        ))}
      </div>
    </div>
  );
}

export default function BrunchMenuContent() {
  return (
    <div>

      {/* Header info */}
      <div className="mb-8 pb-6 border-b border-obsidian/10">
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage font-semibold mb-1">Lørdag & Søndag · 10.00 – 14.00</p>
            <p className="font-bold text-3xl text-obsidian">195,- <span className="text-base font-normal text-obsidian/70">inkl. kaffe, juice & vand</span></p>
            <div className="mt-2 space-y-0.5 text-sm text-obsidian/70">
              <p>Børn under 12 — halvpris &nbsp;·&nbsp; Børn under 3 — gratis</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-obsidian/75 leading-relaxed border-l-2 border-sage/60 pl-4">
              Start med 5 retter — vælg herefter 1 ret af gangen
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-x-14">
        <div>
          {left.map((cat) => <CategoryBlock key={cat.name} cat={cat} />)}
        </div>
        <div>
          {right.map((cat) => <CategoryBlock key={cat.name} cat={cat} />)}
        </div>
      </div>

      <p className="mt-4 text-xs text-obsidian/55 border-t border-obsidian/10 pt-4">
        Spørgsmål vedr. allergener kan rettes til personalet
      </p>

    </div>
  );
}
