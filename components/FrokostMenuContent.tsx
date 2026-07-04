"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type MenuItem = {
  da: string;
  en?: string;
  desc: string;
  descEn?: string;
  price?: string;
  addon?: string;
  addonEn?: string;
};

type Category = {
  da: string;
  en?: string;
  note?: string;
  noteEn?: string;
  pricing?: string;
  pricingEn?: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    da: "Smørrebrød", en: "Open Sandwiches",
    note: "Frem til kl. 15.00", noteEn: "Until 15:00",
    pricing: "1 stk. 85,- · 2 stk. 160,-", pricingEn: "1 pc. 85,- · 2 pcs. 160,-",
    items: [
      { da: "Rødspætte", en: "Plaice Fillet", desc: "Grov remoulade, fennikel, friterede kapers, caviart, radiser, grønt, grillet citron", descEn: "Coarse remoulade, fennel, fried capers, caviar, radishes, greens, grilled lemon", addon: "+ Håndpillede fjordrejer 25,-", addonEn: "+ Hand-peeled fjord shrimp 25,-" },
      { da: "Avocado", desc: "Hytteost, radiser, soltørret tomat, sesamfrø, grønt", descEn: "Cottage cheese, radishes, sun-dried tomato, sesame seeds, greens", addon: "+ Håndpillede fjordrejer 25,-", addonEn: "+ Hand-peeled fjord shrimp 25,-" },
      { da: "Lakse Rilette", en: "Salmon", desc: "Varmrøget laks, creme fraiche, citron, dild", descEn: "Hot smoked salmon, crème fraîche, lemon, dill" },
      { da: "Hønsesalat", en: "Chicken Salad", desc: "Svampe, asparges, friterede kapers, bacon, grønt", descEn: "Mushrooms, asparagus, fried capers, bacon, greens" },
      { da: "Roast Beef", desc: "Salat, peberrod, syltede agurk, remoulade, friterede løg, svampe, grønt", descEn: "Lettuce, horseradish, pickled cucumber, remoulade, crispy onions, mushrooms, greens" },
      { da: "Kartoffelmad", en: "Potato", desc: "Nye kartofler, bacon, mayo, friterede løg, syltede løg, grønt", descEn: "New potatoes, bacon, mayo, crispy onions, pickled onions, greens" },
      { da: "Æg & Rejer", en: "Egg & Shrimp", desc: "Æg, håndpillede rejer, hjertesalat, caviart, mayo, grønt", descEn: "Egg, hand-peeled shrimp, romaine lettuce, caviar, mayo, greens" },
    ],
  },
  {
    da: "Klassikere", en: "Classics",
    items: [
      { da: "Ribeye", price: "275,-", desc: "Kornfodret kødkvæg fra Uruguay, sprøde fritter, bearnaise sauce", descEn: "Corn-fed beef from Uruguay, crispy fries, béarnaise sauce" },
      { da: "Ravioli", price: "155,-", desc: "Ravioli, ricotta, spinat, salvie, frisk parmesan", descEn: "Ravioli, ricotta, spinach, sage, fresh parmesan" },
      { da: "Club Sandwich", price: "145,-", desc: "Grillet kyllingebryst, spæd salat, tomat, rødløg, bacon, karry, ovnbagte timiankartofler, dijonnaise", descEn: "Grilled chicken breast, mixed leaves, tomato, red onion, bacon, curry, oven-baked thyme potatoes, Dijon mayo" },
      { da: "Pasta Trøffel", en: "Pasta Truffle", price: "135,-", desc: "Linguine, svampe, trøffel, cremet sauce", descEn: "Linguine, mushrooms, truffle, creamy sauce", addon: "+ Grillet kyllingebryst 30,-", addonEn: "+ Grilled chicken breast 30,-" },
      { da: "Snack Nachos", price: "95,-", desc: "Cheddarost, jalapeños, chimichurri, guacamole, creme fraiche", descEn: "Cheddar, jalapeños, chimichurri, guacamole, sour cream", addon: "+ Grillet kyllingebryst 30,-", addonEn: "+ Grilled chicken breast 30,-" },
    ],
  },
  {
    da: "Salater", en: "Salads",
    items: [
      { da: "Chèvre Chaud", price: "145,-", desc: "Gedeost, grillet brød, syltede græskar, salat, balsamico glace, honning ristede valnødder, blåbær", descEn: "Goat's cheese, grilled bread, pickled squash, salad, balsamic glaze, honey roasted walnuts, blueberries" },
      { da: "Cæsar", en: "Caesar", price: "145,-", desc: "Klassisk cæsar, grillet kyllingebryst, papadums", descEn: "Classic Caesar, grilled chicken breast, papadums" },
    ],
  },
  {
    da: "Burger",
    note: "Serveres med ovnbagte timiankartofler — grove fritter +10,-", noteEn: "Served with oven-baked thyme potatoes — chunky fries +10,-",
    items: [
      { da: "Puls Burger", price: "145,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, dijonnaise", descEn: "Flame-grilled beef, brioche bun, mixed leaves, cheddar, onion, tomato, cucumber, Dijon mayo", addon: "+ Bacon 15,-", addonEn: "+ Bacon 15,-" },
      { da: "Spicy Burger", price: "145,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, syltede jalapeños, spicy salsa, chilimayo", descEn: "Flame-grilled beef, brioche bun, mixed leaves, cheddar, pickled jalapeños, spicy salsa, chilli mayo", addon: "+ Bacon 15,-", addonEn: "+ Bacon 15,-" },
      { da: "Kylling Burger", en: "Chicken Burger", price: "145,-", desc: "Grillet kyllingebryst, brioche bolle, spæd salat, cheddar, løg, agurk, dijonnaise", descEn: "Grilled chicken breast, brioche bun, mixed leaves, cheddar, onion, cucumber, Dijon mayo", addon: "+ Bacon 15,-", addonEn: "+ Bacon 15,-" },
      { da: "Veggie Burger", price: "145,-", desc: "Kikærtebøf, brioche bolle, spæd salat, tomat, agurk, dijonnaise", descEn: "Chickpea patty, brioche bun, mixed leaves, tomato, cucumber, Dijon mayo" },
    ],
  },
  {
    da: "Fra Havet", en: "From the Sea",
    items: [
      { da: "Moules Frites", price: "155,-", desc: "Hvidvinsdampede blåmuslinger, cremet sauce, grove fritter, aioli", descEn: "White wine steamed mussels, creamy sauce, chunky fries, aioli" },
      { da: "Fish N' Chips", price: "155,-", desc: "Torsk, grove fritter, sauce tartar", descEn: "Cod, chunky fries, tartare sauce" },
      { da: "Calamari Fritti", price: "105,-", desc: "Blæksprutteringe, grillet citron, urt, aioli, sauce tatar", descEn: "Squid rings, grilled lemon, herbs, aioli, tartare sauce" },
    ],
  },
  {
    da: "Ekstra", en: "Extra",
    items: [
      { da: "Sprød Fritter", en: "Fries", price: "55,-", desc: "Med dip", descEn: "With dip" },
      { da: "Chicken Hotwings", price: "55,-", desc: "Med dip", descEn: "With dip" },
      { da: "Ovnbagte Timiankartofler", en: "Oven Baked Thyme Potatoes", price: "45,-", desc: "Med dip", descEn: "With dip" },
      { da: "Sides & Snacks", price: "35,-", desc: "Grøn salat, peber, saltede mandler, middelhavsolver", descEn: "Green salad, pepper, salted almonds, Mediterranean olives" },
      { da: "Dip & Sauce", price: "10,-", desc: "Ketchup, mayo, chili mayo, estragon mayo, dijonnaise, aioli, trøffelmayo, bearnaise, svampesauce", descEn: "Ketchup, mayo, chilli mayo, tarragon mayo, Dijon mayo, aioli, truffle mayo, béarnaise, mushroom sauce" },
    ],
  },
  {
    da: "Dessert",
    items: [
      { da: "Crepe Suzette", price: "95,-", desc: "Pandekager m. karamel, appelsinsauce, vaniljeis, ristede mandler", descEn: "Pancakes with caramel, orange sauce, vanilla ice cream, roasted almonds" },
      { da: "Crème Brûlée", price: "75,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær", descEn: "Silky vanilla custard, crisp caramelised sugar crust, fresh berries" },
      { da: "Hvid Chokolade", en: "White Chocolate", price: "75,-", desc: "Hvid chokolade, cream cheese, digestive, friske bær", descEn: "White chocolate, cream cheese, digestive biscuit, fresh berries" },
    ],
  },
];

const leftCols = categories.slice(0, 3);
const rightCols = categories.slice(3);

function CategoryBlock({ cat, lang }: { cat: Category; lang: "da" | "en" }) {
  return (
    <div className="mb-10">
      <div className="border-t-2 border-sage pt-3 mb-4">
        <h3 className="font-bold text-2xl text-obsidian leading-tight">
          {lang === "en" && cat.en ? cat.en : cat.da}
        </h3>
        {lang === "da" && cat.en && (
          <p className="text-[11px] tracking-[0.18em] uppercase text-sage mt-0.5">{cat.en}</p>
        )}
        {cat.pricing && (
          <p className="text-sm text-obsidian/75 font-medium mt-1.5">{lang === "en" && cat.pricingEn ? cat.pricingEn : cat.pricing}</p>
        )}
        {cat.note && (
          <p className="text-sm text-obsidian/60 mt-1">{lang === "en" && cat.noteEn ? cat.noteEn : cat.note}</p>
        )}
      </div>

      <div className="divide-y divide-obsidian/[0.07]">
        {cat.items.map((item) => (
          <div key={item.da} className="py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <span className="font-semibold text-obsidian text-base">
                  {lang === "en" && item.en ? item.en : item.da}
                </span>
                {lang === "da" && item.en && (
                  <span className="text-obsidian/50 text-xs font-normal ml-1.5">{item.en}</span>
                )}
              </div>
              {item.price && (
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
              )}
            </div>
            <p className="text-sm text-obsidian/65 mt-1 leading-relaxed">
              {lang === "en" && item.descEn ? item.descEn : item.desc}
            </p>
            {item.addon && (
              <p className="text-xs text-gold mt-1">
                {lang === "en" && item.addonEn ? item.addonEn : item.addon}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FrokostMenuContent() {
  const { lang } = useLanguage();
  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">
      <div>{leftCols.map((cat) => <CategoryBlock key={cat.da} cat={cat} lang={lang} />)}</div>
      <div>{rightCols.map((cat) => <CategoryBlock key={cat.da} cat={cat} lang={lang} />)}</div>
    </div>
  );
}
