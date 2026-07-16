import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ZOMATO_URL, MAP_URL } from "@/components/SiteChrome";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import heroLassi from "@/assets/hero-lassi.png";
import shakesSpread from "@/assets/shakes-spread.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lassi n Shakes — Balasore's most-loved shakes & lassis" },
      { name: "description", content: "Order thick milkshakes, creamy lassis, waffles, sandwiches and more in Balasore, Odisha. Dine-in or order online on Zomato." },
    ],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  { emoji: "🥭", title: "Mango Season", desc: "Alphonso & Kesar lassis, all summer." },
  { emoji: "🍫", title: "Loaded Shakes", desc: "Oreo, KitKat, Brownie, Ferrero." },
  { emoji: "🧇", title: "Fresh Waffles", desc: "Nutella, Biscoff, dark choc." },
  { emoji: "☕", title: "Cafe Classics", desc: "Cold coffee, mojitos, sandwiches." },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-20 min-h-screen overflow-hidden bg-hero-gradient text-primary-foreground">
        {/* Marquee tape */}
        <div className="absolute top-24 inset-x-0 overflow-hidden py-3 bg-mustard text-ink font-display text-xl md:text-2xl rotate-[-2deg] z-10 border-y-2 border-ink/20">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-8 pr-8">
                {["BLENDED FRESH", "SERVED COLD", "BALASORE'S BEST", "SINCE 2014", "SIP • SLURP • REPEAT"].map((s, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span>{s}</span>
                    <span className="text-crimson">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-48 md:pt-52 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-mustard animate-pulse" />
              Open now · 11 AM – 11 PM
            </div>
            <h1 className="mt-6 text-6xl md:text-8xl font-black leading-[0.9] text-balance">
              Thick.<br />
              <span className="text-mustard">Cold.</span><br />
              Unforgettable.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-md text-cream/85">
              Balasore's favourite milkshake and lassi bar since 2014. Blended fresh every single sip.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ZOMATO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-mustard text-ink font-bold text-lg shadow-pop hover:scale-105 hover:-rotate-1 transition-transform"
              >
                Order on Zomato →
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors"
              >
                See the menu
              </Link>
            </div>
            <div className="mt-10 flex gap-8">
              <Stat n="50K+" l="Shakes blended" />
              <Stat n="10+" l="Years in Balasore" />
              <Stat n="4.6★" l="Zomato rated" />
            </div>
          </div>

          {/* 3D popping shake */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] md:h-[560px] md:w-[560px] rounded-full bg-mustard/25 blur-3xl animate-float-slow" />
            </div>
            <div className="absolute h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute h-[380px] w-[380px] md:h-[520px] md:w-[520px] rounded-full border border-white/5" />
            <img
              src={heroLassi}
              alt="Mango lassi with pistachios splashing out of the glass"
              width={600}
              height={720}
              className="relative z-10 w-[320px] md:w-[520px] h-auto drop-shadow-2xl animate-pop-in"
              style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.5))" }}
            />
            <div className="absolute top-6 right-2 md:right-8 z-20 rotate-[10deg] animate-float-slow">
              <div className="bg-mustard text-ink px-4 py-2 rounded-2xl font-display font-black text-lg shadow-pop">
                ₹99 only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-crimson font-bold uppercase tracking-widest text-sm">What we do</span>
              <h2 className="mt-2 text-5xl md:text-6xl text-ink text-balance">Made cold. Served bold.</h2>
            </div>
            <Link to="/menu" className="text-crimson font-bold hover:underline underline-offset-4">
              Full menu →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border p-8 shadow-card hover:-translate-y-2 hover:shadow-pop transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500">{h.emoji}</div>
                <h3 className="text-2xl text-ink">{h.title}</h3>
                <p className="mt-2 text-muted-foreground">{h.desc}</p>
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-crimson/5 group-hover:bg-crimson/15 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG PROMO BAND */}
      <section className="relative overflow-hidden bg-crimson text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.82 0.16 82) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.82 0.16 82) 0, transparent 40%)" }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={shakesSpread}
            alt="A colourful flat lay of milkshakes and lassis at Lassi n Shakes"
            width={800}
            height={450}
            loading="lazy"
            className="rounded-3xl shadow-pop rotate-[-2deg] hover:rotate-0 transition-transform duration-700"
          />
          <div>
            <h2 className="text-5xl md:text-6xl leading-[0.95] text-balance">
              Craving hits<br /><span className="text-mustard italic">different</span> here.
            </h2>
            <p className="mt-5 text-lg text-cream/85 max-w-md">
              40+ shakes. 20+ lassis. Waffles, sandwiches, mocktails and desi favourites — all under one roof at F.M Golai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-cream text-ink font-bold shadow-button hover:scale-105 transition-transform">
                Browse the menu
              </Link>
              <a href={MAP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-14 px-8 rounded-full border-2 border-white/40 font-bold hover:bg-white/10">
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-crimson font-bold uppercase tracking-widest text-sm">Word on the street</span>
            <h2 className="mt-2 text-5xl md:text-6xl text-ink text-balance">
              Loved by Balasore, <span className="italic text-crimson">forever</span>.
            </h2>
          </div>
          <ReviewsCarousel />
          <div className="mt-8 text-center">
            <Link to="/reviews" className="text-crimson font-bold hover:underline underline-offset-4">
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-5 md:px-8 bg-ink text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl text-balance">Hungry yet?</h2>
          <p className="mt-4 text-lg text-cream/70">Tap once. We'll do the blending.</p>
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 h-16 px-10 rounded-full bg-mustard text-ink font-black text-xl shadow-pop hover:scale-105 hover:-rotate-2 transition-transform animate-pulse-glow"
          >
            Order on Zomato →
          </a>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-display font-black text-mustard">{n}</div>
      <div className="text-xs uppercase tracking-widest text-cream/70">{l}</div>
    </div>
  );
}
