"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Mic2,
  FileText,
  ChevronRight,
  Play,
  Clock,
  Lock,
  ArrowUpRight,
  ExternalLink,
  Star,
  Headphones,
  Newspaper,
  User,
  Briefcase,
  Target,
  TrendingUp,
  BookOpenIcon,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Types matching functional backend
interface Book {
  id: number;
  title: string;
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
  duration: string;
  is_free: boolean;
  episode_number: number;
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

export default function LandingPage() {
  const [recentBooks, setRecentBooks] = useState<Book[]>([]);
  const [recentPodcasts, setRecentPodcasts] = useState<Podcast[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState({
    books: true,
    podcasts: true,
    blogs: true,
  });

  useEffect(() => {
    const fetchRecentBooks = async () => {
      try {
        const response = await fetch("/api/books?limit=4");
        const result = await response.json();
        if (result.success) setRecentBooks(result.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading((prev) => ({ ...prev, books: false }));
      }
    };

    const fetchRecentPodcasts = async () => {
      try {
        const response = await fetch("/api/podcasts?limit=3");
        const result = await response.json();
        if (result.success) setRecentPodcasts(result.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setLoading((prev) => ({ ...prev, podcasts: false }));
      }
    };

    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch("/api/blogs?limit=3");
        const result = await response.json();
        if (result.success) setRecentBlogs(result.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading((prev) => ({ ...prev, blogs: false }));
      }
    };

    fetchRecentBooks();
    fetchRecentPodcasts();
    fetchRecentBlogs();
  }, []);

  const formatPrice = (price?: number) => {
    if (!price || price === 0) return "Free";
    return `KSh ${(price).toLocaleString()}`; // Convert to KSh roughly
  };

  const latestFeaturedBlog = recentBlogs[0];

  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased">
      {/* Navigation - Clean but with personality */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900">
                A.J.K. BETT
              </span>
              <span className="text-[10px] font-mono tracking-wider text-stone-500">
                AUTHOR · ECONOMIST · STRATEGIST
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link href="#books" className="hover:text-stone-900 transition">
              Books
            </Link>
            <Link href="#podcasts" className="hover:text-stone-900 transition">
              Podcasts
            </Link>
            <Link href="#insights" className="hover:text-stone-900 transition">
              Insights
            </Link>
            <Link href="#about" className="hover:text-stone-900 transition">
              About
            </Link>
          </nav>
          <Link href="/contact">
            <Button className="rounded-full bg-stone-900 px-6 text-white hover:bg-stone-800 transition-all">
              Talk to us
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Featured Content */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          {/* Clean, Modular Grid without unnecessary spacing */}
          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Center Column: Solid Typographic Headline (No Gradients) */}
            <div className="lg:col-span-8  border-stone-200  flex flex-col justify-center bg-white">
              <h1 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl lg:text-5xl uppercase leading-none">
                Practical Blueprints for Wealth Generation
              </h1>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-stone-600 font-medium">
                Drawing from over three decades of definitive executive command
                across Kenya's cornerstone financial institutions, I formulate
                strategic risk mitigation and asset growth frameworks for
                builders and professional investors.
              </p>

              {/* Flat Box Action Containers */}
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="#books">
                  <Button className="rounded-none bg-emerald-700 px-4 py-5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-800 transition-colors shadow-none">
                    Browse Books
                  </Button>
                </Link>
                <Link href="#podcasts">
                  <Button
                    variant="outline"
                    className="rounded-none border-stone-300 bg-white px-4 py-5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-stone-50 transition-colors shadow-none"
                  >
                    Audio Catalog
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Inventory Cards */}
            <div className="lg:col-span-3 border border-stone-200 p-6 flex flex-col justify-between bg-stone-50/50">
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block font-bold mb-4">
                  Featured Library
                </span>

                <div className="space-y-3">
                  {recentBooks.slice(0, 2).map((book) => (
                    <Link key={book.id} href={`/dashboard/books/${book.id}`}>
                      <div className="group flex cursor-pointer items-center gap-3 border border-stone-200 bg-white p-2.5 transition-colors hover:border-emerald-700">
                        {/* Book Mock Block */}
                        <div className="h-12 w-9 shrink-0 bg-stone-100 border border-stone-200 overflow-hidden relative">
                          {book.cover_page_url ? (
                            <img
                              src={book.cover_page_url}
                              alt={book.title}
                              className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-stone-300">
                              <BookOpen className="h-3 w-3 stroke-[1.5]" />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold text-stone-900 line-clamp-2 tracking-tight transition-colors group-hover:text-emerald-700">
                            {book.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#books"
                className="mt-6 block text-center text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 hover:text-orange-600 transition-colors bg-white border border-stone-200 py-2"
              >
                View All Manifests
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Section - With Images */}
      {/* Books Section - Magazine Spread */}
      <section id="books" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero Book - Feature Treatment */}
          {recentBooks[0] && (
            <Link href={`/dashboard/books/${recentBooks[0].id}`}>
              <div className="group mb-12 grid cursor-pointer grid-cols-2 overflow-hidden  bg-white">
                {/* Large Feature Image */}
                <div className="relative bg-stone-100">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: recentBooks[0]?.cover_page_url
                        ? `url(${recentBooks[0].cover_page_url})`
                        : "none",
                    }}
                  />

                  {/* Dark gradient overlay for text contrast (optional) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" />

                  {/* Fallback for no image */}
                  {!recentBooks[0]?.cover_page_url && (
                    <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
                      <BookOpen className="h-16 w-16 text-amber-500" />
                    </div>
                  )}
                </div>

                {/* Feature Content */}
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-px w-8 bg-amber-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                      Book I
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold leading-tight text-stone-900 group-hover:text-amber-600 transition-colors">
                    {recentBooks[0].title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    A comprehensive manual for aspiring business owners. From
                    creating a vision to executing key operational systems that
                    drive sustainable growth in today's competitive market.
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">
                        {formatPrice(
                          recentBooks[0].sale_price || recentBooks[0].price,
                        )}
                      </div>
                      <div className="text-xs text-stone-500">
                        Paperback & Digital
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-stone-900 group-hover:text-amber-600">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Two Column Secondary Books */}
          <div className="grid gap-6 md:grid-cols-2">
            {recentBooks.slice(1, 3).map((book, idx) => (
              <Link key={book.id} href={`/dashboard/books/${book.id}`}>
                <div className="group flex cursor-pointer items-start gap-5  bg-white p-5 transition-all hover:border-amber-500">
                  <div className="h-28 w-20 shrink-0 overflow-hidden border border-stone-200 bg-stone-50">
                    {book.cover_page_url ? (
                      <img
                        src={book.cover_page_url}
                        alt={book.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-amber-50">
                        <BookOpen className="h-5 w-5 text-amber-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-amber-600">
                        Book {idx + 2}
                      </span>
                      <div className="h-px flex-1 bg-stone-200" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight text-stone-900 group-hover:text-amber-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-500 line-clamp-2">
                      {idx === 0
                        ? "Strategic frameworks for asset protection and retirement planning."
                        : "Essential strategies for financial independence and wealth building."}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-bold text-amber-600">
                        {formatPrice(book.sale_price || book.price)}
                      </span>
                      <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights Section - With Images */}
      <section id="insights" className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge className="py-3 px-4">
                <Pencil className="mr-1 h-6 w-6" />
                <span className="text-xs text-gray-50 font-semibold">
                  Written Content
                </span>
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Latest Insights
              </h2>
              <p className="mt-2 text-stone-600">
                Articles on management, finance, and strategy
              </p>
            </div>
            <Link
              href="/dashboard/blogs"
              className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              Read all articles
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading.blogs
              ? [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-64 animate-pulse border border-stone-200 bg-white"
                  />
                ))
              : recentBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/dashboard/blogs/${blog.slug}`}
                    className="group overflow-hidden border border-stone-200 bg-white transition-all hover:shadow-md"
                  >
                    <div className="relative h-48 overflow-hidden bg-stone-100">
                      {blog.cover_image_url ? (
                        <img
                          src={blog.cover_image_url}
                          alt={blog.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center bg-emerald-50">
                          <FileText className="h-8 w-8 text-emerald-400" />
                        </div>
                      )}
                      {!blog.is_free && (
                        <div className="absolute right-3 top-3 rounded bg-stone-900/80 px-2 py-1 text-[10px] font-medium text-white">
                          Premium
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-3 text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {blog.read_time} min read
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900 line-clamp-2 group-hover:text-amber-600">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-stone-600 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                        Read more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-2 border-amber-300" />
              <div className="relative overflow-hidden border-2 border-stone-200 bg-stone-100">
                <img
                  src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/landing/jona.jpg"
                  alt="Author portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-2 border-emerald-300" />
            </div>

            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit rounded-full bg-stone-100 text-stone-700">
                <User className="mr-1 h-3 w-3" />
                The Author
              </Badge>
              <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
                Aggrey Jonathan K. Bett
              </h2>
              <p className="mt-2 text-lg text-stone-600">
                Financial Strategist & Author
              </p>
              <div className="mt-6 space-y-4 text-stone-600">
                <p>
                  With over three decades of leadership across Kenya's top
                  financial institutions—including Finance Director at the
                  Central Bank of Kenya and CEO of the Kenya Deposit Insurance
                  Corporation—Jonathan brings unparalleled expertise to business
                  strategy and personal finance.
                </p>
                <p className="italic border-l-4 border-amber-500 pl-4 text-stone-500">
                  "I wrote these books to lower the operational risk trajectory
                  for entrepreneurs and help individuals build sustainable
                  wealth."
                </p>
                <p>
                  Jonathan currently resides in Kenya with his wife, Abigael,
                  and daughter, Claire, continuing to advise and mentor the next
                  generation of business leaders.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="rounded-full bg-stone-900 px-8 text-white hover:bg-stone-800">
                    Contact Author
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-stone-500 md:flex-row">
            <p>&copy; 2026 Aggrey Jonathan K. Bett. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-stone-900">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-stone-900">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-stone-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
