import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import cafeInterior from "@/assets/cafe-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Lassi n Shakes, Balasore" },
      { name: "description", content: "How Lassi n Shakes started with a single blender in Balasore and became the city's most-loved milkshake and lassi bar." },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "2014", title: "One blender, one dream.", body: "Rajeev Agarwal, back home in Balasore after years in Delhi, missed the thick lassis of his grandmother's kitchen. He set up a tiny 100 sq ft counter near F.M Golai with a single blender, four glasses, and a hand-painted board that read Lassi n Shakes." },
  { year: "2016", title: "The queue that never left.", body: "Word spread across Balasore's colleges. On weekends, the queue snaked past the paan shop and around the corner. We knocked down a wall, added five tables and hired our first three team members." },
  { year: "2019", title: "The menu grew up.", body: "Loaded shakes, Belgian waffles, cold coffees, sandwiches. What began as a lassi counter turned into the after-college hangout every Balasore kid promised to meet at." },
  { year: "2020", title: "We didn't stop.", body: "Through the pandemic, we shifted to delivery and kept our whole team on payroll. Our regulars ordered every week just to keep the lights on. We'll never forget that." },
  { year: "2023", title: "40+ recipes. Same soul.", body: "New waffle machines, a bigger cold room, our own signature glassware. But the recipe for the sweet lassi? Untouched since day one. Grandma would be proud." },
  { year: "Today", title: "Your third place.", body: "First dates. Post-exam celebrations. Random Tuesday cravings. We're honoured to be that spot in Balasore. Come blend a memory with us." },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="pt-14 pb-24 px-5 md:px-8 bg-crimson text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <span className="text-mustard font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="mt-2 text-6xl md:text-8xl leading-[0.9] text-balance">
            One blender. <span className="italic text-mustard">A whole town</span>. A decade of memories.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85">
            Lassi n Shakes didn't start as a business plan. It started as a homesickness — for a taste, a place, and a feeling. This is how a tiny counter in Balasore became a city landmark.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src={cafeInterior}
            alt="Inside Lassi n Shakes, Balasore"
            width={800}
            height={520}
            loading="lazy"
            className="rounded-3xl shadow-pop rotate-[-1.5deg] hover:rotate-0 transition-transform duration-700"
          />
          <div>
            <h2 className="text-4xl md:text-5xl text-ink text-balance">A small idea that refused to stay small.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              In the summer of 2014, Rajeev came back from Delhi with a suitcase, a battered blender, and a stubborn craving for his grandmother's sweet lassi — the one where the malai floats on top like a cloud. He couldn't find that lassi in any cafe in Balasore. So he started making it.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              A rented shopfront near F.M Golai. Four steel glasses. A chalkboard menu. On day one, we sold eleven lassis to friends and cousins. On day thirty, we ran out of curd by 4 pm. Ten years later, we still make every single lassi by hand.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-crimson font-bold uppercase tracking-widest text-sm">The Journey</span>
            <h2 className="mt-2 text-5xl md:text-6xl text-ink">Ten years, one glass at a time.</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-crimson/20 md:-translate-x-1/2" />
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-14 ${
                  i % 2 === 0 ? "md:text-right" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className={i % 2 === 0 ? "" : "md:col-start-2"}>
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 h-8 w-8 rounded-full bg-crimson text-primary-foreground flex items-center justify-center text-xs font-black shadow-button">
                    ✦
                  </div>
                  <div className="inline-block bg-mustard text-ink font-display font-black px-4 py-1 rounded-full text-sm">
                    {t.year}
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl text-ink">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-ink text-cream text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-balance">Come write the next chapter with us.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="inline-flex h-14 px-8 items-center rounded-full bg-mustard text-ink font-black shadow-pop hover:scale-105 transition-transform">
              Explore the menu
            </Link>
            <Link to="/contact" className="inline-flex h-14 px-8 items-center rounded-full border-2 border-cream/40 font-bold hover:bg-white/10">
              Visit us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
