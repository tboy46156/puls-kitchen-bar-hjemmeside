type MenuItem = {
  da: string;
  en?: string;
  desc?: string;
  price?: string;
  addon?: string;
};

type Category = {
  da: string;
  en?: string;
  note?: string;
  items: MenuItem[];
  drinkGrid?: boolean;
};

const categories: Category[] = [
  {
    da: "Små Retter", en: "Small Dishes",
    items: [
      { da: "Carpaccio", price: "135,-", desc: "Tyndskåret kalveinderlår, olivenolie, rucola, pinjekerner, parmesan" },
      { da: "Charcuterie", price: "125,-", desc: "Lufttørret skinke, chorizo, ost, kompot, brød" },
      { da: "Burrata", price: "125,-", desc: "Cherrytomater, rucola, pesto, balsamico, basilikum" },
      { da: "Rejecocktail", en: "Shrimp Cocktail", price: "125,-", desc: "Spæd salat, håndpillede rejer, avocado, caviart, thousand island dressing, citron, dild" },
      { da: "Snack Nachos", price: "95,-", desc: "Cheddarost, jalapeños, chimichurri, guacamole, creme fraiche", addon: "+ Grillet kyllingebryst 30,-" },
      { da: "Bruschetta Al Pomodoro", price: "85,-", desc: "Rustikt brød, tomat, hvidløg, basilikum, olivenolie", addon: "+ Håndpillede rejer 25,-" },
      { da: "Gratineret Gedeost", en: "Gratinated Goat Cheese", price: "75,-", desc: "Valnød, honning, ristet brød chips" },
    ],
  },
  {
    da: "Kød & Fisk", en: "Meat & Fish",
    items: [
      { da: "Ribeye", price: "325,-", desc: "Kornfodret kødkvæg fra Uruguay, sprøde fritter, bearnaise sauce" },
      { da: "Braiseret Okse", price: "235,-", desc: "Langtidsbraiseret oksetykkam, knuste kartofler med trøffel, sauterede svampe, perleløg, demi glace, hakkede mandler" },
      { da: "Fish N' Chips", price: "175,-", desc: "Torsk, grove fritter, sauce tartar" },
      { da: "Moules Frites", price: "175,-", desc: "Hvidvinsdampende blåmuslinger, cremet sauce, grove fritter, aioli" },
    ],
  },
  {
    da: "Pasta",
    items: [
      { da: "Pasta Trøffel", en: "Pasta Truffle", price: "165,-", desc: "Linguine, svampe, cremet sauce med trøffel", addon: "+ Grillet kyllingebryst 30,-" },
      { da: "Ravioli", price: "165,-", desc: "Ravioli, ricotta, spinat, salvie, frisk parmesan" },
    ],
  },
  {
    da: "Pizza",
    items: [
      { da: "Prosciutto", price: "145,-", desc: "Tomat, frisk mozzarella, lufttørret skinke, rucola, pesto" },
      { da: "Piccante", price: "135,-", desc: "Tomat, frisk mozzarella, ventricina (stærk krydret pølse)" },
      { da: "Vitello", price: "135,-", desc: "Tomat, frisk mozzarella, kalvekød, blue cheese, tuncreme, kapers" },
      { da: "Pepperoni", price: "135,-", desc: "Tomat, frisk mozzarella, pepperoni" },
      { da: "Bianca", price: "135,-", desc: "Frisk mozzarella, kartoffel, rosmarin, hvidløg, trøffelolie" },
      { da: "Rucola", price: "135,-", desc: "Tomat, frisk mozzarella, rucola, cherrytomat, parmesan" },
      { da: "Margherita", price: "125,-", desc: "Tomat, frisk mozzarella, basilikum" },
    ],
  },
  {
    da: "Salater", en: "Salads",
    items: [
      { da: "Chèvre Chaud", price: "155,-", desc: "Gedeost, grillet brød, syltede græskar, salat, balsamico glace, honning ristede valnødder, blåbær" },
      { da: "Cæsar", en: "Caesar", price: "155,-", desc: "Klassisk cæsar, grillet kyllingebryst, papadums" },
    ],
  },
  {
    da: "Burger",
    note: "Serveres med ovnbagte timiankartofler — grove fritter +10,-",
    items: [
      { da: "Puls Burger", price: "155,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, dijonnaise", addon: "+ Bacon 15,-" },
      { da: "Spicy Burger", price: "155,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, syltede jalapeños, spicy salsa, chilimayo", addon: "+ Bacon 15,-" },
      { da: "Kylling Burger", en: "Chicken Burger", price: "155,-", desc: "Grillet kyllingebryst, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, dijonnaise", addon: "+ Bacon 15,-" },
      { da: "Veggie Burger", price: "155,-", desc: "Kikærtebøf, brioche bolle, spæd salat, tomat, agurk, dijonnaise" },
    ],
  },
  {
    da: "Ekstra", en: "Extra",
    items: [
      { da: "Sprøde Fritter", en: "Fries", price: "55,-", desc: "Med dip" },
      { da: "Chicken Hotwings", price: "55,-", desc: "Med dip" },
      { da: "Ovnbagte Timiankartofler", en: "Oven Baked Thyme Potatoes", price: "45,-", desc: "Med dip" },
      { da: "Sides & Snacks", price: "35,-", desc: "Grøn salat, peber, saltede mandler, middelhavsolver" },
      { da: "Dip & Sauce", price: "10,-", desc: "Ketchup, mayo, chili mayo, estragon mayo, aioli, trøffelmayo, bearnaise, svampesauce" },
    ],
  },
  {
    da: "Dessert",
    items: [
      { da: "Crème Brûlée", price: "75,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær" },
      { da: "Hvid Chokolade", en: "White Chocolate", price: "75,-", desc: "Hvid chokolade, cream cheese, digestive, friske bær" },
      { da: "Crepe Suzette", price: "75,-", desc: "Pandekager m. karamel, appelsinsauce, vaniljeis, ristede mandler" },
    ],
  },
  {
    da: "Start Aftenen med et Glas", en: "Start the Evening with a Glass of",
    drinkGrid: true,
    items: [
      { da: "Gin & Tonic Hendricks", price: "125,-" },
      { da: "Aperol Spritz", price: "95,-" },
      { da: "Gin & Tonic", price: "115,-" },
      { da: "Limoncello", price: "95,-" },
      { da: "Dark N' Stormy", price: "115,-" },
      { da: "Doriac Rosé", price: "95,-" },
      { da: "French 75", price: "115,-" },
      { da: "Prosecco", price: "75,-" },
    ],
  },
];

const leftCols  = categories.slice(0, 4);  // Små Retter, Kød & Fisk, Pasta, Pizza
const rightCols = categories.slice(4);     // Salater, Burger, Ekstra, Dessert, Drinks

function CategoryBlock({ cat }: { cat: Category }) {
  return (
    <div className="mb-10">
      <div className="border-t-2 border-sage pt-3 mb-4">
        <h3 className="font-bold text-2xl text-obsidian leading-tight">{cat.da}</h3>
        {cat.en && (
          <p className="text-[11px] tracking-[0.18em] uppercase text-sage/80 mt-0.5">{cat.en}</p>
        )}
        {cat.note && (
          <p className="text-xs text-obsidian/40 mt-0.5">{cat.note}</p>
        )}
      </div>

      {cat.drinkGrid ? (
        <div className="grid grid-cols-2 gap-x-6">
          {cat.items.map((item) => (
            <div key={item.da} className="py-2.5 border-b border-obsidian/[0.07] flex items-baseline justify-between gap-2">
              <span className="font-semibold text-obsidian text-base">{item.da}</span>
              {item.price && (
                <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-obsidian/[0.07]">
          {cat.items.map((item) => (
            <div key={item.da} className="py-3.5">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <span className="font-semibold text-obsidian text-base">{item.da}</span>
                  {item.en && (
                    <span className="text-obsidian/35 text-xs font-normal ml-1.5">{item.en}</span>
                  )}
                </div>
                {item.price && (
                  <span className="font-semibold text-forest text-base shrink-0 tabular-nums">{item.price}</span>
                )}
              </div>
              {item.desc && (
                <p className="text-xs text-obsidian/45 mt-1 leading-relaxed">{item.desc}</p>
              )}
              {item.addon && (
                <p className="text-xs text-gold mt-1">{item.addon}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AftenMenuContent() {
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
