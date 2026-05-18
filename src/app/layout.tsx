import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "A.J.K. Bett - Financial Strategist & Author",
  description:
    "Practical blueprints for wealth generation from Kenya's leading financial strategist. Books, podcasts, and insights for entrepreneurs and investors.",
  keywords:
    "financial planning, wealth generation, business books, Kenya finance, retirement planning",
  authors: [{ name: "Aggrey Jonathan K. Bett" }],
  openGraph: {
    title: "A.J.K. Bett - Financial Strategist & Author",
    description:
      "Practical blueprints for wealth generation from Kenya's leading financial strategist",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-['Jost',sans-serif]">
        {children}
      </body>
    </html>
  );
}
