import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">Looks like this shake spilled. Let's get you home.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-crimson px-6 py-3 text-sm font-bold text-primary-foreground">
          Back to home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something spilled.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head back home.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-crimson px-5 py-2 text-sm font-bold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border px-5 py-2 text-sm font-bold">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lassi n Shakes — Balasore's most-loved shakes & lassis" },
      { name: "description", content: "Thick shakes, creamy lassis and cafe classics in the heart of Balasore, Odisha. Dine-in, takeaway, or order on Zomato." },
      { name: "theme-color", content: "#C8102E" },
      { property: "og:title", content: "Lassi n Shakes — Balasore" },
      { property: "og:description", content: "Blended fresh, served cold. Balasore's favourite milkshake & lassi bar since 2014." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Lassi N Shakes",
          image: "/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Room no-6, DIC Market Complex, OT Road",
            addressLocality: "Balasore",
            addressRegion: "Odisha",
            postalCode: "756001",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 21.4870969, longitude: 86.9171678 },
          telephone: "+91-70082-91745",
          servesCuisine: ["Shakes", "Lassi", "Cafe", "Waffles"],
          priceRange: "₹₹",
          openingHours: "Mo-Su 11:00-23:00",
          hasMap: "https://www.google.com/maps/place/Lassi+N+Shakes/@21.4870969,86.9171678,17z",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", reviewCount: "94" },
          url: "/",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
