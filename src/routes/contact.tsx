import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PHONE, PHONE_DISPLAY, MAP_URL, WHATSAPP, ZOMATO_URL } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Lassi n Shakes, Balasore" },
      { name: "description", content: "Find Lassi N Shakes at Room no-6, DIC Market Complex, OT Road, Balasore, Odisha 756001. Tap to call +91 70082 91745 or open Google Maps." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="pt-14 pb-20 px-5 md:px-8 bg-crimson text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <span className="text-mustard font-bold uppercase tracking-widest text-sm">Come Say Hi</span>
          <h1 className="mt-2 text-6xl md:text-8xl leading-[0.9] text-balance">
            Find us on <span className="italic text-mustard">OT Road</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            DIC Market Complex, right in the heart of Balasore. Tap any card below to call, message, or navigate — we've made it one thumb-tap.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-3">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-pop transition-all"
          >
            <div className="h-14 w-14 rounded-2xl bg-crimson text-primary-foreground flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform">📍</div>
            <h3 className="mt-5 text-2xl text-ink">Directions</h3>
            <p className="mt-2 text-muted-foreground">Room no-6, DIC Market Complex, OT Road, Balasore, Odisha 756001</p>
            <span className="mt-4 inline-block text-crimson font-bold group-hover:underline underline-offset-4">Open in Google Maps →</span>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="group p-8 rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-pop transition-all"
          >
            <div className="h-14 w-14 rounded-2xl bg-crimson text-primary-foreground flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform">📞</div>
            <h3 className="mt-5 text-2xl text-ink">Call us</h3>
            <p className="mt-2 text-muted-foreground">Reservations, catering, quick questions.</p>
            <span className="mt-4 inline-block text-crimson font-bold group-hover:underline underline-offset-4">{PHONE_DISPLAY}</span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-pop transition-all"
          >
            <div className="h-14 w-14 rounded-2xl bg-[oklch(0.72_0.18_150)] text-white flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform">💬</div>
            <h3 className="mt-5 text-2xl text-ink">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground">Order on WhatsApp, we'll confirm in minutes.</p>
            <span className="mt-4 inline-block text-crimson font-bold group-hover:underline underline-offset-4">Message us →</span>
          </a>
        </div>
      </section>

      <section className="py-8 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border aspect-[4/3]">
            <iframe
              title="Lassi n Shakes location on Google Maps"
              src="https://www.google.com/maps?q=Lassi+N+Shakes+DIC+Market+Complex+Balasore&ll=21.4870969,86.9171678&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl text-ink">Hours</h2>
              <div className="mt-5 space-y-2">
                {[
                  ["Monday – Thursday", "11:00 AM – 11:00 PM"],
                  ["Friday – Sunday", "11:00 AM – 12:00 AM"],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between py-3 border-b border-border">
                    <span className="font-bold text-ink">{d}</span>
                    <span className="text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-mustard/30 border border-mustard">
              <h3 className="text-2xl text-ink">Prefer to order in?</h3>
              <p className="mt-2 text-ink/80">Get every shake delivered fresh across Balasore via Zomato.</p>
              <a
                href={ZOMATO_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-12 px-6 items-center rounded-full bg-crimson text-primary-foreground font-bold shadow-button hover:scale-105 transition-transform"
              >
                Order on Zomato →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
