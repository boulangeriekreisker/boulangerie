import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, seoKeywords, siteUrl, weeklySchedule } from "@/lib/site-data";

import "./globals.css";

const youngSerif = localFont({
  src: "../assets/fonts/YoungSerif-Regular.ttf",
  display: "swap",
  variable: "--font-display",
  weight: "400",
});

const instrumentSans = localFont({
  src: [
    {
      path: "../assets/fonts/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/InstrumentSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  description: business.description,
  url: siteUrl,
  telephone: business.phoneDisplay,
  sameAs: [business.facebookUrl, business.tripadvisorUrl],
  slogan: business.tagline,
  hasMap: business.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLine,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressCountry: "FR",
  },
  openingHoursSpecification: weeklySchedule
    .filter((entry) => entry.intervals.length > 0)
    .flatMap((entry) =>
      entry.intervals.map((interval) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${entry.schemaDay}`,
        opens: interval.start,
        closes: interval.end,
      })),
    ),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Boulangerie artisanale à ${business.city} | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Boulangerie artisanale à Saint-Pol-de-Léon : pains du quotidien, viennoiseries maison, pause déjeuner, pâtisseries gourmandes et contact rapide.",
  alternates: {
    canonical: "/",
  },
  keywords: seoKeywords,
  openGraph: {
    title: `Boulangerie artisanale à ${business.city} | ${business.name}`,
    description:
      "Une vitrine locale et gourmande pour découvrir pains, viennoiseries, pâtisseries et créations sur commande à Saint-Pol-de-Léon.",
    url: siteUrl,
    siteName: business.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-kreisker.svg",
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${youngSerif.variable} ${instrumentSans.variable}`} lang="fr">
      <body>
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>

        <div className="site-shell">
          <Header />
          <main id="main-content">{children}</main>

          <div className="mobile-quick-actions" aria-label="Actions rapides">
            <a className="mobile-quick-actions__item" href={business.phoneHref}>
              Appeler
            </a>
            <a
              className="mobile-quick-actions__item"
              href={business.mapUrl}
              rel="noreferrer"
              target="_blank"
            >
              Itinéraire
            </a>
            <a className="mobile-quick-actions__item" href="#contact">
              Message
            </a>
          </div>

          <Footer />
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
