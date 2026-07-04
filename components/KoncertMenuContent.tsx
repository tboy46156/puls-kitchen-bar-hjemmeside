"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const drinks = [
  { name: "Gin & Tonic Hendricks", price: "125,-" },
  { name: "Limoncello",            price: "95,-"  },
  { name: "Gin & Tonic",          price: "115,-" },
  { name: "Aperol Spritz",        price: "95,-"  },
  { name: "Dark N' Stormy",       price: "115,-" },
  { name: "Doriac Rosé",          price: "95,-"  },
  { name: "French 75",            price: "115,-" },
  { name: "Prosecco",             price: "75,-"  },
];

const mainDishes = [
  { da: "Ribeye Steak",       price: "325,-", desc: "Ribeye 300g, sprøde fritter, bearnaise", descEn: "Ribeye 300g, crispy fries, béarnaise" },
  { da: "Pasta Trøffel",      price: "195,-", desc: "Linguine, grillet kylling, svampe, trøffel, cremet sauce", descEn: "Linguine, grilled chicken, mushrooms, truffle, creamy sauce" },
  { da: "Puls Burger",        price: "180,-", desc: "Flammegrillet oksekød, bacon, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, fritter, dijonnaise", descEn: "Flame-grilled beef, bacon, brioche bun, mixed leaves, cheddar, onion, tomato, cucumber, fries, Dijon mayo" },
  { da: "Fish N' Chips",      price: "175,-", desc: "Torsk, grove fritter, sauce tartar", descEn: "Cod, chunky fries, tartare sauce" },
  { da: "Chèvre Chaud Salat", price: "155,-", desc: "Gedeost, grillet brød, syltede græskar, spæd salat, balsamico glace, honning ristede valnødder, friske bær", descEn: "Goat's cheese, grilled bread, pickled squash, mixed leaves, balsamic glaze, honey roasted walnuts, fresh berries" },
];

const desserts = [
  { da: "Crème Brûlée", price: "75,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær", descEn: "Silky vanilla custard, crisp caramelised sugar crust, fresh berries" },
];

export default function KoncertMenuContent() {
  const { lang } = useLanguage();
  const t = translations[lang].menuNotes;

  const dishesLabel = lang === "en" ? "Dishes" : "Retter";
  const dessertsLabel = lang === "en" ? "Desserts" : "Desserter";
  const chefChoiceLabel = lang === "en" ? "Chef's Choice" : "Kokken Anbefaler";
  const extraLabel = lang === "en" ? "Extra" : "Ekstra";
  const startLabel = lang === "en" ? "Start the Evening with a Glass of" : "Start Aftenen med et Glas";
  const startSub = lang === "en" ? "" : "Start the Evening with a Glass of";

  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">

      {/* Left: drinks + main dishes */}
      <div>

        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">{startLabel}</h3>
            {startSub && <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">{startSub}</p>}
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            {drinks.map((d) => (
              <div key={d.name} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-2">
                <span className="font-semibold text-obsidian text-base">{d.name}</span>
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{d.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">{dishesLabel}</h3>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {mainDishes.map((item) => (
              <div key={item.da} className="py-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-obsidian text-base">{item.da}</span>
                  <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
                </div>
                <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">
                  {lang === "en" ? item.descEn : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right: chef's choice + dessert + extra */}
      <div>

        <div className="mb-10">
          <div className="border-t-2 border-gold pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">{chefChoiceLabel}</h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-gold/80 mt-0.5">Chef's Choice</p>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            <div className="py-3.5">
              <span className="font-semibold text-obsidian text-base">Ribeye Steak</span>
              <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">
                {lang === "en" ? "Ribeye 300g, crispy fries, béarnaise · + Side salad 35,-" : "Ribeye 300g, sprøde fritter, bearnaise · + Side salat 35,-"}
              </p>
            </div>
            <div className="py-3.5">
              <span className="font-semibold text-obsidian text-base">Crème Brûlée</span>
              <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">
                {lang === "en" ? "Silky vanilla custard, crisp caramelised sugar crust, fresh berries" : "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær"}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-obsidian/10 flex items-baseline justify-between">
            <span className="text-xs tracking-[0.18em] uppercase text-obsidian/50">{t.totalPrice}</span>
            <span className="font-bold text-2xl text-forest tabular-nums">375,-</span>
          </div>
        </div>

        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">{dessertsLabel}</h3>
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            {desserts.map((item) => (
              <div key={item.da} className="py-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-obsidian text-base">{item.da}</span>
                  <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
                </div>
                <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">
                  {lang === "en" ? item.descEn : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="border-t-2 border-sage pt-3 mb-4">
            <h3 className="font-bold text-2xl text-obsidian leading-tight">{extraLabel}</h3>
            {lang === "da" && <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">Extra</p>}
          </div>
          <div className="divide-y divide-obsidian/[0.07]">
            <div className="py-3.5">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <span className="font-semibold text-obsidian text-base">
                    {lang === "en" ? "Fries with Dip" : "Sprøde Fritter m. Dip"}
                  </span>
                  {lang === "da" && <span className="text-obsidian/35 text-[11px] font-normal ml-1.5">Fries with Dip</span>}
                </div>
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">55,-</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-[11px] text-obsidian/35">{t.koncertAllergens}</p>
        </div>

      </div>
    </div>
  );
}
