import type { Metadata } from "next";
import { Albert_Sans, Fraunces } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business, seoKeywords, siteUrl, weeklySchedule } from "@/lib/site-data";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
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
    default: `${business.name} | Boulangerie à ${business.city}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  alternates: {
    canonical: "/",
  },
  keywords: seoKeywords,
  openGraph: {
    title: `${business.name} | Boulangerie à ${business.city}`,
    description: business.description,
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
    <html className={`${fraunces.variable} ${albertSans.variable}`} lang="fr">
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
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
