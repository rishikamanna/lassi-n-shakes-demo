import { useEffect, useState } from "react";

const REVIEWS = [
  {
    name: "Ritika Sahoo",
    location: "Balasore",
    stars: 5,
    text: "The Oreo Kitkat shake is criminally good. Thick, cold, and the portion is huge. Been coming here since college — nothing has changed except now there's always a queue!",
  },
  {
    name: "Debashish Panda",
    location: "Bhubaneswar",
    stars: 5,
    text: "Stopped by on a road trip. Ordered the mango lassi and a cold coffee. Both hit different. The staff was super friendly and the vibe is unreal for a small-town cafe.",
  },
  {
    name: "Ayushi Mohanty",
    location: "Balasore",
    stars: 5,
    text: "This is THE spot. Every date night, every hangout, every 'I need something sweet at 10pm' moment — Lassi n Shakes never misses. Try the Rose Falooda, thank me later.",
  },
  {
    name: "Sourav Behera",
    location: "Cuttack",
    stars: 4,
    text: "Delivery via Zomato was quick and the shakes came perfectly chilled. Ordered chocolate brownie shake and Nutella waffles. Both bang for buck.",
  },
  {
    name: "Priyanka Das",
    location: "Balasore",
    stars: 5,
    text: "Grew up on their sweet lassi. Now I bring my daughter here. Same taste, same warmth. Some places just get it right and keep getting it right.",
  },
  {
    name: "Aman Kejriwal",
    location: "Kolkata",
    stars: 5,
    text: "Better than most cafes in metro cities honestly. Clean, fast, and the menu is wild. The KitKat crunch shake deserves its own fan club.",
  },
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const r = REVIEWS[index];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl bg-card shadow-card border border-border p-8 md:p-14 min-h-[280px]">
        <div className="absolute -top-6 -left-2 text-[180px] leading-none font-display text-crimson/10 select-none">
          "
        </div>
        <div key={index} className="relative animate-fade-up">
          <div className="flex gap-0.5 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < r.stars} />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-display text-ink leading-snug text-balance">
            "{r.text}"
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-warm-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
              {r.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-ink">{r.name}</div>
              <div className="text-sm text-muted-foreground">{r.location}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-crimson" : "w-2 bg-ink/20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="h-11 w-11 rounded-full border border-border bg-card hover:bg-crimson hover:text-primary-foreground hover:border-crimson transition-all"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="h-11 w-11 rounded-full border border-border bg-card hover:bg-crimson hover:text-primary-foreground hover:border-crimson transition-all"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "oklch(0.72 0.18 60)" : "none"} stroke={filled ? "oklch(0.72 0.18 60)" : "oklch(0.7 0.02 60)"} strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
