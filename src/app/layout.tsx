import type { Metadata } from "next";
import { Header } from "@/components/foundation/Header";
import { Footer } from "@/components/foundation/Footer";
import { defaultDescription, defaultOgImage, siteName, siteUrl } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default:
      "Danny Kioko Foundation | Washington Nonprofit for Children & Youth",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Danny Kioko Foundation",
    "Washington State nonprofit",
    "children nonprofit",
    "youth mentorship nonprofit",
    "faith based nonprofit",
    "East Africa charity",
    "Kenya children charity",
    "NGO in Washington State",
    "Safe Space youth mentorship",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Danny Kioko Foundation",
    description: defaultDescription,
    url: "/",
    siteName,
    images: [defaultOgImage],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny Kioko Foundation",
    description: defaultDescription,
    images: [defaultOgImage.url],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteName,
    alternateName: "DK Foundation",
    url: siteUrl,
    description: defaultDescription,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
    areaServed: ["United States", "Kenya", "East Africa"],
    knowsAbout: [
      "Youth mentorship",
      "Child welfare",
      "Education support",
      "Community outreach",
      "Faith-based programs",
    ],
    sameAs: ["https://www.youtube.com/@DannyKioko"],
    potentialAction: {
      "@type": "DonateAction",
      target: `${siteUrl}/donate`,
      recipient: {
        "@type": "NGO",
        name: siteName,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-US",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
