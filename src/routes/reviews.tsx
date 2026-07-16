import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Lassi n Shakes, Balasore" },
      { name: "description", content: "What Balasore says about Lassi n Shakes. Real love from locals, travellers and regulars." },
    ],
  }),
  component: ReviewsPage,
});

const WALL = [
  { name: "Snehal J.", text: "Have tried almost every shake here. The Ferrero Rocher is on another level.", stars: 5 },
  { name: "Arpit K.", text: "Waffles were warm, gooey, generous with the Nutella. Cold coffee too good.", stars: 5 },
  { name: "Nisha M.", text: "Clean seating, quick service and the sweet lassi is exactly like home.", stars: 5 },
  { name: "Rohan D.", text: "Ordered late night on Zomato — packaging was solid, shakes still cold.", stars: 4 },
  { name: "Tanvi R.", text: "The KitKat crunch shake is basically dessert in a glass. Zero regrets.", stars: 5 },
  { name: "Manish P.", text: "Been going here for 6 years. Consistency of taste is unreal.", stars: 5 },
];

function ReviewsPage() {
  return (
    <PageShell>
      <section className="pt-14 pb-20 px-5 md:px-8 bg-crimson text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-mustard font-bold uppercase tracking-widest text-sm">Word on the street</span>
          <h1 className="mt-2 text-6xl md:text-8xl leading-[0.9]">
            <span className="italic text-mustard">4.1★</span> across 94 Google reviews.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-cream/85">
            A decade of thick shakes, cold lassis and even warmer regulars. Here's what Balasore has to say.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ReviewsCarousel />
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-ink text-center mb-12">The wall of love.</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {WALL.map((w) => (
              <div
                key={w.name}
                className="break-inside-avoid mb-5 p-6 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="flex gap-0.5 mb-3 text-mustard">
                  {"★".repeat(w.stars)}
                  <span className="text-ink/20">{"★".repeat(5 - w.stars)}</span>
                </div>
                <p className="text-ink font-display text-lg leading-snug">"{w.text}"</p>
                <p className="mt-4 text-sm font-bold text-crimson">— {w.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
