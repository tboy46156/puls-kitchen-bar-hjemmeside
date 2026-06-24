type MenuItem = {
  da: string;
  en?: string;
  desc: string;
  price?: string;
  addon?: string;
};

type Category = {
  da: string;
  en?: string;
  note?: string;
  pricing?: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    da: "Smørrebrød", en: "Open Sandwiches",
    note: "Frem til kl. 15.00",
    pricing: "1 stk. 85,- · 2 stk. 160,-",
    items: [
      { da: "Rødspætte", en: "Plaice Fillet", desc: "Grov remoulade, fennikel, friterede kapers, caviart, radiser, grønt, grillet citron", addon: "+ Håndpillede fjordrejer 25,-" },
      { da: "Avocado", desc: "Hytteost, radiser, soltørret tomat, sesamfrø, grønt", addon: "+ Håndpillede fjordrejer 25,-" },
      { da: "Lakse Rilette", en: "Salmon", desc: "Varmrøget laks, creme fraiche, citron, dild" },
      { da: "Hønsesalat", en: "Chicken Salad", desc: "Svampe, asparges, friterede kapers, bacon, grønt" },
      { da: "Roast Beef", desc: "Salat, peberrod, syltede agurk, remoulade, friterede løg, svampe, grønt" },
      { da: "Kartoffelmad", en: "Potato", desc: "Nye kartofler, bacon, mayo, friterede løg, syltede løg, grønt" },
      { da: "Æg & Rejer", en: "Egg & Shrimp", desc: "Æg, håndpillede rejer, hjertesalat, caviart, mayo, grønt" },
    ],
  },
  {
    da: "Klassikere", en: "Classics",
    items: [
      { da: "Ribeye", price: "275,-", desc: "Kornfodret kødkvæg fra Uruguay, sprøde fritter, bearnaise sauce" },
      { da: "Ravioli", price: "155,-", desc: "Ravioli, ricotta, spinat, salvie, frisk parmesan" },
      { da: "Club Sandwich", price: "145,-", desc: "Grillet kyllingebryst, spæd salat, tomat, rødløg, bacon, karry, ovnbagte timiankartofler, dijonnaise" },
      { da: "Pasta Trøffel", en: "Pasta Truffle", price: "135,-", desc: "Linguine, svampe, trøffel, cremet sauce", addon: "+ Grillet kyllingebryst 30,-" },
      { da: "Snack Nachos", price: "95,-", desc: "Cheddarost, jalapeños, chimichurri, guacamole, creme fraiche", addon: "+ Grillet kyllingebryst 30,-" },
    ],
  },
  {
    da: "Salater", en: "Salads",
    items: [
      { da: "Chèvre Chaud", price: "145,-", desc: "Gedeost, grillet brød, syltede græskar, salat, balsamico glace, honning ristede valnødder, blåbær" },
      { da: "Cæsar", en: "Caesar", price: "145,-", desc: "Klassisk cæsar, grillet kyllingebryst, papadums" },
    ],
  },
  {
    da: "Burger",
    note: "Serveres med ovnbagte timiankartofler — grove fritter +10,-",
    items: [
      { da: "Puls Burger", price: "145,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, dijonnaise", addon: "+ Bacon 15,-" },
      { da: "Spicy Burger", price: "145,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, syltede jalapeños, spicy salsa, chilimayo", addon: "+ Bacon 15,-" },
      { da: "Kylling Burger", en: "Chicken Burger", price: "145,-", desc: "Grillet kyllingebryst, brioche bolle, spæd salat, cheddar, løg, agurk, dijonnaise", addon: "+ Bacon 15,-" },
      { da: "Veggie Burger", price: "145,-", desc: "Kikærtebøf, brioche bolle, spæd salat, tomat, agurk, dijonnaise" },
    ],
  },
  {
    da: "Fra Havet", en: "From the Sea",
    items: [
      { da: "Moules Frites", price: "155,-", desc: "Hvidvinsdampede blåmuslinger, cremet sauce, grove fritter, aioli" },
      { da: "Fish N' Chips", price: "155,-", desc: "Torsk, grove fritter, sauce tartar" },
      { da: "Calamari Fritti", price: "105,-", desc: "Blæksprutteringe, grillet citron, urt, aioli, sauce tatar" },
    ],
  },
  {
    da: "Ekstra", en: "Extra",
    items: [
      { da: "Sprød Fritter", en: "Fries", price: "55,-", desc: "Med dip" },
      { da: "Chicken Hotwings", price: "55,-", desc: "Med dip" },
      { da: "Ovnbagte Timiankartofler", en: "Oven Baked Thyme Potatoes", price: "45,-", desc: "Med dip" },
      { da: "Sides & Snacks", price: "35,-", desc: "Grøn salat, peber, saltede mandler, middelhavsolver" },
      { da: "Dip & Sauce", price: "10,-", desc: "Ketchup, mayo, chili mayo, estragon mayo, dijonnaise, aioli, trøffelmayo, bearnaise, svampesauce" },
    ],
  },
  {
    da: "Dessert",
    items: [
      { da: "Crepe Suzette", price: "95,-", desc: "Pandekager m. karamel, appelsinsauce, vaniljeis, ristede mandler" },
      { da: "Crème Brûlée", price: "75,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær" },
      { da: "Hvid Chokolade", en: "White Chocolate", price: "75,-", desc: "Hvid chokolade, cream cheese, digestive, friske bær" },
    ],
  },
];

const leftCols = categories.slice(0, 3);   // Smørrebrød, Klassikere, Salater
const rightCols = categories.slice(3);     // Burger, Fra Havet, Ekstra, Dessert

function CategoryBlock({ cat }: { cat: Category }) {
  return (
    <div className="mb-10">
      {/* Kategori-header */}
      <div className="border-t-2 border-sage pt-3 mb-4">
        <h3 className="font-bold text-xl text-obsidian leading-tight">
          {cat.da}
        </h3>
        {cat.en && (
          <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">{cat.en}</p>
        )}
        {cat.pricing && (
          <p className="text-xs text-obsidian/55 font-medium mt-1.5">{cat.pricing}</p>
        )}
        {cat.note && (
          <p className="text-xs text-obsidian/40 mt-0.5">{cat.note}</p>
        )}
      </div>

      {/* Retter */}
      <div className="divide-y divide-obsidian/[0.07]">
        {cat.items.map((item) => (
          <div key={item.da} className="py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <span className="font-semibold text-obsidian text-sm">{item.da}</span>
                {item.en && (
                  <span className="text-obsidian/35 text-[11px] font-normal ml-1.5">{item.en}</span>
                )}
              </div>
              {item.price && (
                <span className="font-semibold text-forest text-sm shrink-0 tabular-nums">
                  {item.price}
                </span>
              )}
            </div>
            <p className="text-[11px] text-obsidian/45 mt-1 leading-relaxed">{item.desc}</p>
            {item.addon && (
              <p className="text-[11px] text-gold mt-1">{item.addon}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FrokostMenuContent() {
  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">
      <div>
        {leftCols.map((cat) => <CategoryBlock key={cat.da} cat={cat} />)}
      </div>
      <div>
        {rightCols.map((cat) => <CategoryBlock key={cat.da} cat={cat} />)}
      </div>
    </div>
  );
}
