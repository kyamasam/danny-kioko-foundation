import type { Metadata } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://dannykioko.org"
).replace(/\/$/, "");

export const siteName = "Danny Kioko Foundation";

export const defaultDescription =
  "Danny Kioko Foundation is a Washington State nonprofit supporting vulnerable children, families, and youth through mentorship, education, outreach, and faith-centered community programs in the USA and East Africa.";

export const defaultOgImage = {
  url: "/dkf/dkf-kids-2.png",
  width: 960,
  height: 720,
  alt: "Children supported by Danny Kioko Foundation outreach programs",
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: NonNullable<Metadata["openGraph"]>["images"];
};

export function pageMetadata({
  title,
  description,
  path,
  image = [defaultOgImage],
}: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      images: image,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [defaultOgImage.url],
    },
  };
}
