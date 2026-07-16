import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/logo.png";

const ZOMATO_URL = "https://www.zomato.com/balasore/lassi-n-shake-balasore-locality/order";
const PHONE = "+917008291745";
const PHONE_DISPLAY = "+91 70082 91745";
const WHATSAPP = "https://wa.me/917008291745?text=Hi%20Lassi%20N%20Shakes%2C%20I%27d%20like%20to%20place%20an%20order.";
const MAP_URL = "https://www.google.com/maps/place/Lassi+N+Shakes/@21.4870969,86.9171678,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1cf5a58100144f:0xfcc19e77bb645448!8m2!3d21.4870969!4d86.9171678!16s%2Fg%2F11ryslx_dt";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Visit Us" },
] as const;

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Lassi n Shakes logo"
            width={160}
            height={70}
            className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-semibold text-ink/80 hover:text-crimson transition-colors"
              activeProps={{ className: "text-crimson" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-crimson rounded-full origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            aria-label="Call Lassi n Shakes"
            className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-crimson/20 text-crimson hover:bg-crimson hover:text-primary-foreground transition-all"
          >
            <PhoneIcon />
          </a>
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-crimson text-primary-foreground font-bold text-sm shadow-button hover:scale-105 transition-transform"
          >
            Order Now
            <ArrowRight />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-cream border border-border"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-border animate-fade-up">
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-3 text-lg font-semibold rounded-lg hover:bg-muted"
                activeProps={{ className: "text-crimson bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center h-12 rounded-full bg-crimson text-primary-foreground font-bold shadow-button"
            >
              Order on Zomato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function StickyOrderBar() {
  return (
    <div className="fixed bottom-4 inset-x-4 md:bottom-6 md:right-6 md:left-auto z-50 flex justify-center md:justify-end pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-ink/95 backdrop-blur-xl shadow-pop border border-white/10">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call"
          className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-cream text-ink hover:scale-110 transition-transform"
        >
          <PhoneIcon />
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp order"
          className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[oklch(0.72_0.18_150)] text-white hover:scale-110 transition-transform"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={ZOMATO_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 h-12 px-5 rounded-full bg-crimson text-primary-foreground font-bold text-sm animate-pulse-glow"
        >
          Order Now
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/90 mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Lassi n Shakes" width={200} height={90} className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-sm text-cream/70">
            Balasore's most-loved milkshake and lassi bar since 2014. Blended fresh, served cold, made to be remembered.
          </p>
        </div>
        <div>
          <h4 className="text-cream text-lg mb-4">Visit</h4>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="block text-cream/70 hover:text-cream transition-colors"
          >
            Room no-6, DIC Market Complex,<br />
            OT Road, Balasore, Odisha 756001
          </a>
          <a href={`tel:${PHONE}`} className="block mt-3 text-cream/70 hover:text-cream transition-colors">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-3 text-cream/70">Open 11 AM – 11 PM</p>
        </div>
        <div>
          <h4 className="text-cream text-lg mb-4">Explore</h4>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-cream/70 hover:text-cream transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row justify-between gap-2 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Lassi n Shakes, Balasore. Blended with love.</p>
          <p>Made cold. Served bold.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <main className="pt-20">{children}</main>
      <SiteFooter />
      <StickyOrderBar />
    </>
  );
}

export { ZOMATO_URL, PHONE, PHONE_DISPLAY, WHATSAPP, MAP_URL };

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48c0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.9.54 3.68 1.47 5.19L2 22l4.94-1.44A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
