import type { Metadata } from "next";
import { Header } from "@/components/foundation/Header";
import { Footer } from "@/components/foundation/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Danny Kioko Foundation",
    template: "%s",
  },
  description:
    "Danny Kioko Foundation restores hope, supports children and families, and empowers youth through mentorship, outreach, and community programs.",
  openGraph: {
    title: "Danny Kioko Foundation",
    description:
      "Restoring hope, building communities, and empowering young people.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
