"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type Category = {
  name: string;
  sub?: string;
  items: { da: string; en: string }[];
};

const left: Category[] = [
  {
    name: "Bakt",
    sub: "Bakery",
    items: [
      { da: "Brødkurv med lys & mørkt samt smør", en: "Bread basket with light & dark bread and butter" },
      { da: "Friskbagt smørcroissant", en: "Freshly baked butter croissant" },
      { da: "Ovnbagte timiankartofler", en: "Oven-baked thyme potatoes" },
    ],
  },
  {
    name: "Kød & Fisk",
    sub: "Meat & Fish",
    items: [
      { da: "Stegt bacon & grønt", en: "Crispy bacon & greens" },
      { da: "Ristede oksepølser med syltede rødløg & grøn mayo", en: "Grilled beef sausages with pickled red onions & green mayo" },
      { da: "Hjemmelavet hønsesalat med asparges, svampe & purløg", en: "Homemade chicken salad with asparagus, mushrooms & chives" },
      { da: "Laksemousse & urter", en: "Salmon mousse & herbs" },
    ],
  },
  {
    name: "Fry Me",
    items: [
      { da: "Kyllingelår marineret med mandler, grønt & dip", en: "Marinated chicken legs with almonds, greens & dip" },
      { da: "Grove fritter med aioli", en: "Chunky fries with aioli" },
      { da: "Sprøde forårsruller med grøntsager & sauce", en: "Crispy spring rolls with vegetables & sauce" },
    ],
  },
];

const right: Category[] = [
  {
    name: "Frugt & Grønt",
    sub: "Fruit & Greens",
    items: [
      { da: "Middelhavsoliven", en: "Mediterranean olives" },
      { da: "Klassisk græsk salat", en: "Classic Greek salad" },
      { da: "Avocado med sesam, ristede mandler & urter", en: "Avocado with sesame, roasted almonds & herbs" },
      { da: "Årstidens frugt", en: "Seasonal fruit" },
    ],
  },
  {
    name: "Æg",
    sub: "Eggs",
    items: [
      { da: "Røræg & grønt", en: "Scrambled eggs & greens" },
    ],
  },
  {
    name: "Fra Mejeriet",
    sub: "Dairy",
    items: [
      { da: "Skyr med skovbær, granola & sirup", en: "Skyr with wild berries, granola & syrup" },
      { da: "Brie, emmentaler & feta m. peberfrugt & kompot", en: "Brie, emmental & feta with peppers & compote" },
    ],
  },
  {
    name: "Den Søde Tand",
    sub: "Sweet",
    items: [
      { da: "Pandekager med sirup & syltede skovbær", en: "Pancakes with syrup & pickled wild berries" },
      { da: "Gammeldags æblekage med makroner, flødeskum & friske bær", en: "Old-fashioned apple cake with macaroons, whipped cream & fresh berries" },
    ],
  },
];

function CategoryBlock({ cat, lang }: { cat: Category; lang: "da" | "en" }) {
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
          <p key={item.da} className="py-2.5 text-base text-obsidian/85">{lang === "en" ? item.en : item.da}</p>
        ))}
      </div>
    </div>
  );
}

export default function BrunchMenuContent() {
  const { lang } = useLanguage();
  const t = translations[lang].brunch;

  return (
    <div>
      <div className="mb-8 pb-6 border-b border-obsidian/10">
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-sage font-semibold mb-1">{t.dayTime}</p>
            <p className="font-bold text-3xl text-obsidian">{t.price} <span className="text-base font-normal text-obsidian/70">{t.priceNote}</span></p>
            <div className="mt-2 space-y-0.5 text-sm text-obsidian/70">
              <p>{t.childrenNote}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-obsidian/75 leading-relaxed border-l-2 border-sage/60 pl-4">
              {t.howItWorks}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-14">
        <div>{left.map((cat) => <CategoryBlock key={cat.name} cat={cat} lang={lang} />)}</div>
        <div>{right.map((cat) => <CategoryBlock key={cat.name} cat={cat} lang={lang} />)}</div>
      </div>

      <p className="mt-4 text-xs text-obsidian/55 border-t border-obsidian/10 pt-4">
        {t.allergenNote}
      </p>
    </div>
  );
}
