"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const cocktails = [
  {
    sub: "Spritz",
    items: [
      { name: "Aperol Spritz",      desc: "Aperol – prosecco – danskvand – appelsin",    descEn: "Aperol – prosecco – sparkling water – orange",   price: "95,-" },
      { name: "Limoncello Spritz",  desc: "Limoncello – prosecco – danskvand – citron",  descEn: "Limoncello – prosecco – sparkling water – lemon", price: "95,-" },
    ],
  },
  {
    sub: "Gin",
    items: [
      { name: "French 75",     desc: "Gin – citron – sukker – prosecco",   descEn: "Gin – lemon – sugar – prosecco",       price: "115,-" },
      { name: "Gin & Tonic",   desc: "Gin – fevertree tonic – agurk",      descEn: "Gin – fevertree tonic – cucumber",     price: "115,-" },
      { name: "Gin Selection", desc: "Hendricks 125,- · Monkey 47 135,-",  descEn: "Hendricks 125,- · Monkey 47 135,-",    price: "" },
    ],
  },
  {
    sub: "Rom",
    items: [
      { name: "Mojito", desc: "Lys rom – rørsukker – mynte – lime", descEn: "White rum – cane sugar – mint – lime", price: "115,-" },
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
  { name: "Sodavand 33/50 cl.",  nameEn: "Soft Drinks 33/50 cl.", desc: "Pepsi, Pepsi Max, Faxe Kondi, Mirinda, Redbull",                        descEn: "Pepsi, Pepsi Max, Faxe Kondi, Mirinda, Red Bull",     price: "42,- / 55,-" },
  { name: "Saft Øko",            nameEn: "Organic Cordial",       desc: "Organic juice flaske · Hyldeblomst, æblemost eller hindbær",            descEn: "Organic juice bottle · Elderflower, apple or raspberry", price: "42,-" },
  { name: "Danskvand",           nameEn: "Sparkling Water",       desc: "Sparkling Water",                                                        descEn: "Sparkling Water",                                     price: "gl. 40,- / kande 55,-" },
  { name: "Isvand",              nameEn: "Still Water",           desc: "Ice Water",                                                              descEn: "Still Water",                                         price: "gl. 25,- / kande 45,-" },
];

const juice = [
  { name: "Orange Juice",       desc: "Friskpresset · Freshly made",              descEn: "Freshly squeezed",                          price: "55,-" },
  { name: "Pineapple Express",  desc: "Ananas, mynte, lime, æble",                descEn: "Pineapple, mint, lime, apple",              price: "55,-" },
  { name: "Mango Mama",         desc: "Mango, hindbær, appelsin, æble",           descEn: "Mango, raspberry, orange, apple",           price: "55,-" },
  { name: "Ginger/Orange",      desc: "Appelsin, ingefær, citron, æble",          descEn: "Orange, ginger, lemon, apple",              price: "55,-" },
];

const shakes = [
  { name: "Choko",           desc: "m. chokolade & vanilje",                      descEn: "with chocolate & vanilla",                  price: "55,-" },
  { name: "Espresso",        desc: "m. kaffebønner & vanilje",                    descEn: "with coffee beans & vanilla",               price: "55,-" },
  { name: "Strawbana",       desc: "m. jordbær, banan & vanilje",                 descEn: "with strawberry, banana & vanilla",         price: "55,-" },
  { name: "Passion Fashion", desc: "m. passion, mango, hyldeblomst & vanilje",    descEn: "with passion fruit, mango, elderflower & vanilla", price: "55,-" },
];

const hotdrinks = [
  { name: "Americano",       nameEn: "Americano",        price: "40,-" },
  { name: "Caffé Latte",     nameEn: "Caffé Latte",      price: "45/50,-" },
  { name: "Cappuccino",      nameEn: "Cappuccino",        price: "42/48,-" },
  { name: "Espresso",        nameEn: "Espresso",          price: "30/35,-" },
  { name: "Macchiato",       nameEn: "Macchiato",         price: "30/35,-" },
  { name: "Cortado",         nameEn: "Cortado",           price: "35/40,-" },
  { name: "Chai Latte",      nameEn: "Chai Latte",        price: "45,-" },
  { name: "Varm Chokolade",  nameEn: "Hot Chocolate",     price: "45,-" },
  { name: "Te",              nameEn: "Tea",               price: "35,-" },
  { name: "Iskaffe",         nameEn: "Iced Coffee",       price: "55,-" },
  { name: "Irish Coffee",    nameEn: "Irish Coffee",      price: "95,-" },
];

const bubbles = [
  { name: "Prosecco, Corte Delle Calli", country: "Frankrig (Øko)", countryEn: "France (Organic)", desc: "Frisk og blød med fine frugtige noter", descEn: "Fresh and smooth with fine fruity notes", price: "gl. 75,- / 295,-" },
];

const rose = [
  { name: "Palm, Château L'Escarelle", country: "Provence, Frankrig", countryEn: "Provence, France", desc: "Tør, frisk, mineralsk og økologisk rosé", descEn: "Dry, fresh, mineral and organic rosé", price: "450,-" },
  { name: "Doriac, D'OC",              country: "Frankrig",           countryEn: "France",           desc: "Klassisk, tør, lys, sydfransk rosé",      descEn: "Classic, dry, light southern French rosé",      price: "gl. 95,- / 375,-" },
  { name: "Cinsault, Louis Eschenauer, D'OC", country: "Frankrig",   countryEn: "France",           desc: "Halvtør rosé med fine bløde frugtige noter", descEn: "Semi-dry rosé with delicate soft fruity notes", price: "gl. 85,- / 295,-" },
];

const whitewine = [
  { name: "Riesling, Paul Schneider, Alsace", country: "Frankrig",    countryEn: "France",       desc: "Halvtør Riesling fra lille familievingård",             descEn: "Semi-dry Riesling from a small family vineyard",    price: "gl. 100,- / 395,-" },
  { name: "Pinot Grigio, Bertoldi, Garda",    country: "Italien",     countryEn: "Italy",        desc: "Frisk halvtør italiensk klassiker",                     descEn: "Fresh semi-dry Italian classic",                    price: "gl. 85,- / 295,-" },
  { name: "Sauvignon Blanc, Inviniti",        country: "New Zealand", countryEn: "New Zealand",  desc: "Frisk med karakterfuld toner af hyldeblomst",           descEn: "Fresh with distinctive elderflower notes",          price: "gl. 95,- / 375,-" },
  { name: "Chardonnay, Bogle, Clarksburg",    country: "USA",         countryEn: "USA",          desc: "Stor, cremet og fyldig fadlagret hvidvin",              descEn: "Full-bodied, creamy, oak-aged white wine",          price: "gl. 120,- / 450,-" },
];

const redwine = [
  { name: "Pinot Noir, La Cour Des Grands, D'OC",              country: "Frankrig", countryEn: "France",  desc: "Saftig og charmerende Pinot Noir med let fadlagring",      descEn: "Juicy and charming Pinot Noir with light oak ageing",        price: "350,-" },
  { name: "Rosso Rossetti, Toscana",                            country: "Italien",  countryEn: "Italy",   desc: "Charmerende saftig med friske frugtige toner",             descEn: "Charming and juicy with fresh fruity notes",                 price: "gl. 85,- / 295,-" },
  { name: "Ripasso Superiore Semprebon, Valpolicella Classico", country: "Italien",  countryEn: "Italy",   desc: "Charmerende blød og saftig med god smag",                  descEn: "Charming, smooth and juicy with great depth",                price: "gl. 100,- / 395,-" },
  { name: "Ardal, Ribera Del Duero",                            country: "Spanien",  countryEn: "Spain",   desc: "Kraftig, blød og saftig rødvin med let krydrede toner",    descEn: "Full-bodied, smooth and juicy red wine with light spiced notes", price: "gl. 100,- / 395,-" },
  { name: "Pinot Noir Bogle, California",                       country: "USA",      countryEn: "USA",     desc: "Silkeblød, saftig og fyldig Pinot Noir",                   descEn: "Silky smooth, juicy and full-bodied Pinot Noir",             price: "gl. 120,- / 450,-" },
];

const dessertwine = [
  { name: "Sauternes, Louis Eschenauer, Bordeaux", country: "Frankrig", countryEn: "France",   desc: "Klassisk frisk lys dessertvin",            descEn: "Classic fresh light dessert wine",   price: "gl. 80,-" },
  { name: "Ruby Port, Quinta Do Estanho",          country: "Portugal",  countryEn: "Portugal", desc: "Klassisk blød og sødmefuld portvin",        descEn: "Classic smooth and velvety port wine", price: "gl. 70,-" },
];

function SectionHeader({ da, en, lang }: { da: string; en?: string; lang: "da" | "en" }) {
  const display = lang === "en" && en ? en : da;
  const sub = lang === "da" && en ? en : undefined;
  return (
    <div className="border-t-2 border-sage pt-3 mb-4">
      <h3 className="font-bold text-2xl text-obsidian leading-tight">
        {display}
        {sub && <span className="text-[11px] tracking-[0.18em] uppercase text-sage ml-2 font-normal align-middle">{sub}</span>}
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
  const { lang } = useLanguage();
  const t = translations[lang].menuNotes;

  return (
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-0">

      {/* Left: drinks */}
      <div>

        <div className="mb-10">
          <SectionHeader da="Pitcher 1,5L" lang={lang} />
          <Row name="Mojito · Gin & Tonic · Passion Martini" right="345,-" />
        </div>

        <div className="mb-10">
          <SectionHeader da="Cocktails" lang={lang} />
          <p className="text-sm text-obsidian/60 mb-4">{t.happyHour}</p>
          {cocktails.map((group) => (
            <div key={group.sub} className="mb-5">
              <p className="text-xs tracking-[0.18em] uppercase text-obsidian/50 font-semibold mb-2">{group.sub}</p>
              {group.items.map((item) => (
                <Row key={item.name} name={item.name} right={item.price || undefined} desc={lang === "en" ? item.descEn : item.desc} />
              ))}
            </div>
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Øl" en="Beer" lang={lang} />
          <div className="flex items-baseline justify-between gap-3 mb-1">
            <span />
            <span className="text-xs text-obsidian/50 tabular-nums shrink-0">0,33L · 0,5L · 1,5L</span>
          </div>
          {beer.map((item) => (
            <div key={item.name} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-3">
              <span className="font-semibold text-base text-obsidian">{item.name}</span>
              <span className="font-semibold text-forest text-sm shrink-0 tabular-nums">{item.prices}</span>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Sodavand & Saft" en="Soft Drinks" lang={lang} />
          {softdrinks.map((item) => (
            <Row key={item.name} name={lang === "en" ? item.nameEn : item.name} right={item.price} desc={lang === "en" ? item.descEn : item.desc} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Friskpresset Juice" en="Fresh Juice" lang={lang} />
          {juice.map((item) => (
            <Row key={item.name} name={item.name} right={item.price} desc={lang === "en" ? item.descEn : item.desc} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Shakes" lang={lang} />
          {shakes.map((item) => (
            <Row key={item.name} name={item.name} right={item.price} desc={lang === "en" ? item.descEn : item.desc} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Varme Drikke" en="Hot Beverages · Lavazza" lang={lang} />
          {hotdrinks.map((item) => (
            <div key={item.name} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-3">
              <span className="font-semibold text-base text-obsidian">{lang === "en" ? item.nameEn : item.name}</span>
              <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Right: wine */}
      <div>

        <div className="mb-10">
          <SectionHeader da="Bobler" en="Bubbles" lang={lang} />
          {bubbles.map((w) => (
            <WineRow key={w.name} name={w.name} country={lang === "en" ? w.countryEn : w.country} desc={lang === "en" ? w.descEn : w.desc} price={w.price} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Rosé" lang={lang} />
          {rose.map((w) => (
            <WineRow key={w.name} name={w.name} country={lang === "en" ? w.countryEn : w.country} desc={lang === "en" ? w.descEn : w.desc} price={w.price} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Hvidvin" en="White Wine" lang={lang} />
          {whitewine.map((w) => (
            <WineRow key={w.name} name={w.name} country={lang === "en" ? w.countryEn : w.country} desc={lang === "en" ? w.descEn : w.desc} price={w.price} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Rødvin" en="Red Wine" lang={lang} />
          {redwine.map((w) => (
            <WineRow key={w.name} name={w.name} country={lang === "en" ? w.countryEn : w.country} desc={lang === "en" ? w.descEn : w.desc} price={w.price} />
          ))}
        </div>

        <div className="mb-10">
          <SectionHeader da="Dessertvin" en="Dessert Wine" lang={lang} />
          {dessertwine.map((w) => (
            <WineRow key={w.name} name={w.name} country={lang === "en" ? w.countryEn : w.country} desc={lang === "en" ? w.descEn : w.desc} price={w.price} />
          ))}
        </div>

        <p className="text-sm text-obsidian/55 border-t border-obsidian/10 pt-4">
          {t.fullWineList}
        </p>

      </div>
    </div>
  );
}
