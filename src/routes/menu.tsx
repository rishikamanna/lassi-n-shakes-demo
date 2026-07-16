import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ZOMATO_URL } from "@/components/SiteChrome";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lassi n Shakes, Balasore" },
      { name: "description", content: "Full menu: mango lassi, rose lassi, Oreo shake, KitKat shake, cold coffee, waffles, sandwiches, mocktails and more at Lassi n Shakes Balasore." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: number; tag?: string };
type Category = { id: string; title: string; emoji: string; items: Item[] };

const MENU: Category[] = [
  {
    id: "lassi",
    title: "Signature Lassis",
    emoji: "🥭",
    items: [
      { name: "Sweet Lassi", desc: "The OG. Thick, creamy, chilled to perfection.", price: 79 },
      { name: "Salted Lassi", desc: "Roasted cumin, black salt, cool curd.", price: 79 },
      { name: "Mango Lassi", desc: "Alphonso pulp, hung curd, saffron.", price: 129, tag: "Bestseller" },
      { name: "Rose Lassi", desc: "Gulkand, rose syrup, crushed pistachios.", price: 119 },
      { name: "Strawberry Lassi", desc: "Fresh strawberry, honey, cream cheese swirl.", price: 129 },
      { name: "Kesar Pista Lassi", desc: "Saffron milk soaked, pista slivers, kewra.", price: 139, tag: "Chef's pick" },
    ],
  },
  {
    id: "shakes",
    title: "Loaded Milkshakes",
    emoji: "🍫",
    items: [
      { name: "Oreo Overload", desc: "Whole cookies, oreo crumbs, whipped cream.", price: 149, tag: "Bestseller" },
      { name: "KitKat Crunch", desc: "Two KitKat fingers, chocolate ganache.", price: 159 },
      { name: "Brownie Shake", desc: "Warm brownie chunks, hot fudge, vanilla.", price: 169 },
      { name: "Ferrero Rocher", desc: "Hazelnut, dark choc, gold flakes.", price: 199, tag: "New" },
      { name: "Nutella Blast", desc: "Loaded Nutella, banana, cocoa dust.", price: 169 },
      { name: "Cold Coffee Shake", desc: "Double espresso, ice cream, choc drizzle.", price: 139 },
    ],
  },
  {
    id: "waffles",
    title: "Fresh Waffles",
    emoji: "🧇",
    items: [
      { name: "Classic Chocolate", desc: "Belgian dark chocolate, powdered sugar.", price: 149 },
      { name: "Nutella Banana", desc: "Fresh bananas, Nutella river, hazelnut crumb.", price: 179 },
      { name: "Biscoff Dream", desc: "Biscoff spread, cookie crumbs, cream.", price: 189, tag: "Chef's pick" },
      { name: "Red Velvet", desc: "Red velvet batter, cream cheese, choc chips.", price: 199 },
    ],
  },
  {
    id: "cafe",
    title: "Cafe Classics",
    emoji: "☕",
    items: [
      { name: "Iced Cold Coffee", desc: "Slow-brewed, extra thick, chocolate rim.", price: 119 },
      { name: "Hazelnut Latte", desc: "Espresso, hazelnut, steamed milk foam.", price: 139 },
      { name: "Mint Mojito", desc: "Fresh mint, lime, soda, brown sugar.", price: 99 },
      { name: "Blue Lagoon", desc: "Blue curacao mocktail, lemon fizz.", price: 119 },
      { name: "Cheese Grill Sandwich", desc: "Triple cheese, garlic butter, fries side.", price: 149 },
      { name: "Peri Peri Fries", desc: "Crispy fries, peri masala, cheese dip.", price: 129 },
    ],
  },
];

function MenuPage() {
  const [active, setActive] = useState<string>(MENU[0].id);

  return (
    <PageShell>
      <section className="pt-14 pb-10 px-5 md:px-8 bg-crimson text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <span className="text-mustard font-bold uppercase tracking-widest text-sm">The Menu</span>
          <h1 className="mt-2 text-6xl md:text-8xl leading-[0.9] text-balance">
            Everything we <span className="italic text-mustard">blend</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85">
            Every price, every ingredient, right here. No PDFs, no scrolling through screenshots.
          </p>
        </div>
      </section>

      {/* Sticky category chips */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {MENU.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={() => setActive(c.id)}
              className={`shrink-0 inline-flex items-center gap-2 h-11 px-5 rounded-full border-2 font-bold text-sm transition-all ${
                active === c.id
                  ? "bg-ink text-cream border-ink"
                  : "bg-card text-ink border-border hover:border-ink"
              }`}
            >
              <span>{c.emoji}</span>
              {c.title}
            </a>
          ))}
        </div>
      </div>

      <section className="py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {MENU.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-40">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl">{cat.emoji}</span>
                <h2 className="text-4xl md:text-5xl text-ink">{cat.title}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {cat.items.map((it) => (
                  <div
                    key={it.name}
                    className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-crimson hover:shadow-card transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-display font-bold text-ink">{it.name}</h3>
                        {it.tag && (
                          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-mustard text-ink">
                            {it.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-black text-crimson">₹{it.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 bg-ink text-cream text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl">Order the whole menu.</h2>
          <p className="mt-3 text-cream/70">Delivered fresh in Balasore via Zomato.</p>
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 h-14 px-8 rounded-full bg-mustard text-ink font-black shadow-pop hover:scale-105 transition-transform"
          >
            Order on Zomato →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
