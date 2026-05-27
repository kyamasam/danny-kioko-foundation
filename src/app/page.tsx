// app/page.tsx
import { Metadata } from "next";
import {
  NewsletterBar,
  Navigation,
  HeroCarousel,
  BioSection,
  PortfolioSection,
  BookFeature,
  PodcastSection,
  BlogSection,
  SocialBar,
  Footer,
} from "@/components/landing";
import { ClientAudioProvider } from "@/components/landing/ClientAudioProvider";

interface Book {
  id: number;
  title: string;
  short_description: string;
  description?: string;
  price: number;
  sale_price: number;
  cover_page_url: string;
  created_at: string;
}

interface Podcast {
  id: number;
  title: string;
  host: string;
  cover_image_url: string;
  audio_url: string;
  duration: string;
  is_free: boolean;
  episode_number: number;
  description?: string;
}

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  cover_image_url: string;
  read_time: number;
  is_free: boolean;
  slug: string;
}

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Jonathan Aggrey Bett | Personal Financial & Retirement Planning | Business Books",
  description:
    "Discover transformative books on personal financial planning, retirement strategies, and entrepreneurship by Jonathan Aggrey Bett. Learn how to start and run your own business and secure your financial future.",
  keywords: [
    "personal financial planning",
    "retirement planning",
    "how to start a business",
    "run your own business",
    "financial freedom",
    "wealth management",
    "entrepreneurship books",
    "personal growth",
    "Jonathan Aggrey Bett",
    "finance books",
    "business strategy",
    "financial literacy",
  ].join(", "),
  authors: [{ name: "Jonathan Aggrey Bett" }],
  creator: "Jonathan Aggrey Bett",
  publisher: "Jonathan Aggrey Bett",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Jonathan Aggrey Bett | Personal Financial & Retirement Planning Books",
    description:
      "Master your finances with 'Personal Financial and Retirement Planning' and learn entrepreneurship with 'How To Start And Run Your Own Business' by Jonathan Aggrey Bett.",
    url: "https://jbett.netlify.app",
    siteName: "Jonathan Aggrey Bett - Author",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jonathan Aggrey Bett - Finance & Business Books",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Aggrey Bett | Finance & Business Books",
    description:
      "Personal Financial Planning, Retirement Strategies, and Entrepreneurship Guides",
    images: ["/twitter-image.jpg"],
    creator: "@jonathanbett",
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
  alternates: {
    canonical: "https://jbett.netlify.app",
  },
  category: "books",
};

async function fetchRecentBooks(): Promise<Book[]> {
  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("books")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4);
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

async function fetchRecentPodcasts(): Promise<Podcast[]> {
  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("podcasts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return [];
  }
}

async function fetchRecentBlogs(): Promise<Blog[]> {
  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, excerpt, cover_image_url, read_time, is_free, slug")
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .limit(3);
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function LandingPage() {
  // Fetch all data in parallel on the server
  const [recentBooks, recentPodcasts, recentBlogs] = await Promise.all([
    fetchRecentBooks(),
    fetchRecentPodcasts(),
    fetchRecentBlogs(),
  ]);

  // Find the specific books for structured data
  const financialBook = recentBooks.find(
    (book) =>
      book.title.includes("Personal Financial") ||
      book.title.includes("Retirement"),
  );
  const businessBook = recentBooks.find(
    (book) => book.title.includes("Business") || book.title.includes("Start"),
  );

  return (
    <>
      {/* JSON-LD Structured Data for Books */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jonathan Aggrey Bett",
            description:
              "Author of books on personal financial planning, retirement strategies, and entrepreneurship.",
            url: "https://jbett.netlify.app",
            sameAs: [
              "https://twitter.com/jonathanbett",
              "https://linkedin.com/in/jonathanbett",
              // Add other social profiles
            ],
            worksFor: {
              "@type": "Organization",
              name: "Jonathan Aggrey Bett Books",
            },
            knowsAbout: [
              "Personal Finance",
              "Retirement Planning",
              "Entrepreneurship",
              "Business Management",
              "Wealth Building",
            ],
          }),
        }}
      />

      {/* JSON-LD for Books */}
      {financialBook && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: financialBook.title,
              description: financialBook.short_description,
              author: {
                "@type": "Person",
                name: "Jonathan Aggrey Bett",
              },
              image: financialBook.cover_page_url,
              offers: {
                "@type": "Offer",
                price: financialBook.sale_price || financialBook.price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              bookFormat: "https://schema.org/Paperback",
              keywords:
                "personal finance, retirement planning, financial freedom",
            }),
          }}
        />
      )}

      {businessBook && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: businessBook.title,
              description: businessBook.short_description,
              author: {
                "@type": "Person",
                name: "Jonathan Aggrey Bett",
              },
              image: businessBook.cover_page_url,
              offers: {
                "@type": "Offer",
                price: businessBook.sale_price || businessBook.price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              bookFormat: "https://schema.org/Paperback",
              keywords:
                "entrepreneurship, start business, small business management",
            }),
          }}
        />
      )}

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Jonathan Aggrey Bett - Author",
            url: "https://jbett.netlify.app",
            description:
              "Official website of Jonathan Aggrey Bett, author of books on personal financial planning, retirement strategies, and how to start and run your own business.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://jbett.netlify.app/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <ClientAudioProvider>
        <div className="min-h-screen bg-white font-sans antialiased">
          <NewsletterBar />
          <Navigation />

          <main>
            <HeroCarousel books={recentBooks} />

            {/* Author Bio with hidden SEO text */}
            <BioSection />

            <PortfolioSection />

            {/* Books Section */}
            <div className="max-w-7xl mx-auto px-8 pt-10 ">
              <div className="w-11 h-[3px] bg-gradient-to-r from-[#1A5E4E] to-[#C9913A] rounded-sm mb-3"></div>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">Books</h2>
            </div>

            {recentBooks.slice(0, recentBooks.length).map((book, index) => (
              <BookFeature key={book.id} book={book} index={index} />
            ))}

            <PodcastSection initialPodcasts={recentPodcasts} />

            <BlogSection initialBlogs={recentBlogs} />

            <SocialBar />
          </main>

          <Footer />
        </div>
      </ClientAudioProvider>
    </>
  );
}
