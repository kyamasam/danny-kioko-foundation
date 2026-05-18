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
    return `KSh ${(price * 128).toLocaleString()}`; // Convert to KSh roughly
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
          <Link href="/dashboard">
            <Button className="rounded-full bg-stone-900 px-6 text-white hover:bg-stone-800 transition-all">
              Member Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Featured Content */}
      <section className="relative border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Hero Text */}
            <div className="flex flex-col justify-center">
              {latestFeaturedBlog && (
                <Link
                  href={`/dashboard/blogs/${latestFeaturedBlog.slug}`}
                  className="group mb-6 inline-flex w-fit items-center gap-3 border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm hover:border-stone-400 transition"
                >
                  <span className="bg-stone-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    New
                  </span>
                  <span className="text-stone-600 line-clamp-1">
                    {latestFeaturedBlog.title}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-stone-900" />
                </Link>
              )}
              <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Practical Blueprints for{" "}
                <span className="border-b-4 border-amber-500">
                  Wealth Generation
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Drawing from 30+ years of financial leadership at Kenya's top
                institutions, I provide actionable frameworks for entrepreneurs,
                investors, and career professionals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#books">
                  <Button className="rounded-full bg-amber-500 px-8 text-stone-900 hover:bg-amber-400">
                    Explore Books
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button
                    variant="outline"
                    className="rounded-full border-stone-300"
                  >
                    Meet the Author
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap gap-6 border-t border-stone-100 pt-8">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-amber-600" />
                  <span className="text-xs text-stone-500">
                    Former CBK Finance Director
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-amber-600" />
                  <span className="text-xs text-stone-500">Ex-KDIC CEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-amber-600" />
                  <span className="text-xs text-stone-500">30+ Years Exp</span>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Image or Book Cover */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden border-2 border-stone-200 bg-stone-100 shadow-xl">
                {recentBooks[0]?.cover_page_url ? (
                  <img
                    src={recentBooks[0].cover_page_url}
                    alt={recentBooks[0].title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <BookOpen className="mb-4 h-12 w-12 text-stone-400" />
                    <p className="text-sm text-stone-500">
                      Featured Publication
                    </p>
                    <p className="mt-2 text-xs text-stone-400">
                      How To Start and Run Your Own Business
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section - With Real Cover Images */}
      <section id="books" className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge className="mb-3 rounded-full bg-amber-100 text-amber-700">
                Publications
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Featured Books
              </h2>
              <p className="mt-2 text-stone-600">
                Essential reads for entrepreneurs and financial planners
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900"
              >
                Amazon <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://nuriabooks.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900"
              >
                Nuria Bookstore <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Primary Feature Books */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Business Book Card */}
            <div className="group overflow-hidden border border-stone-200 bg-white transition-all hover:shadow-md">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  {recentBooks[0]?.cover_page_url ? (
                    <img
                      src={recentBooks[0].cover_page_url}
                      alt={recentBooks[0].title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-amber-50 p-4 text-center">
                      <BookOpen className="mb-2 h-8 w-8 text-amber-600" />
                      <span className="text-xs font-medium text-amber-700">
                        Cover Art
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-6">
                  <Badge className="mb-3 w-fit rounded-full bg-amber-100 text-amber-700">
                    Volume I
                  </Badge>
                  <h3 className="mb-2 text-xl font-bold text-stone-900">
                    How To Start and Run Your Own Business
                  </h3>
                  <p className="mb-4 text-sm text-stone-600 line-clamp-4">
                    A comprehensive manual for aspiring business owners. From
                    creating a vision to executing key operational systems.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <Link href="/dashboard/books">
                      <span className="text-sm font-medium text-amber-600 hover:text-amber-700">
                        Learn More →
                      </span>
                    </Link>
                    <span className="text-xs text-stone-500">
                      Paperback & Digital
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance Book Card */}
            <div className="group overflow-hidden border border-stone-200 bg-white transition-all hover:shadow-md">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  {recentBooks[1]?.cover_page_url ? (
                    <img
                      src={recentBooks[1].cover_page_url}
                      alt={recentBooks[1].title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-emerald-50 p-4 text-center">
                      <TrendingUp className="mb-2 h-8 w-8 text-emerald-600" />
                      <span className="text-xs font-medium text-emerald-700">
                        Cover Art
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-6">
                  <Badge className="mb-3 w-fit rounded-full bg-emerald-100 text-emerald-700">
                    Volume II
                  </Badge>
                  <h3 className="mb-2 text-xl font-bold text-stone-900">
                    Personal Financial and Retirement Planning
                  </h3>
                  <p className="mb-4 text-sm text-stone-600 line-clamp-4">
                    Strategic frameworks for asset protection and passive wealth
                    acquisition.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <Link href="/dashboard/books">
                      <span className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
                        Learn More →
                      </span>
                    </Link>
                    <span className="text-xs text-stone-500">
                      Paperback & Digital
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Books Grid */}
          {recentBooks.length > 2 && (
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-stone-500">
                More Publications
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recentBooks.slice(2).map((book) => (
                  <Link key={book.id} href={`/dashboard/books/${book.id}`}>
                    <div className="group flex cursor-pointer items-center gap-4 border border-stone-200 bg-white p-4 transition-all hover:border-stone-400 hover:shadow-sm">
                      <div className="h-16 w-12 shrink-0 overflow-hidden bg-stone-100">
                        {book.cover_page_url ? (
                          <img
                            src={book.cover_page_url}
                            alt={book.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-stone-100">
                            <BookOpen className="h-5 w-5 text-stone-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-stone-900 line-clamp-1">
                          {book.title}
                        </h4>
                        <p className="text-xs text-stone-500">
                          {formatPrice(book.sale_price || book.price)}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-stone-400 opacity-0 transition group-hover:opacity-100" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Podcasts Section - With Images */}
      <section id="podcasts" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge className="mb-3 rounded-full bg-blue-100 text-blue-700">
                <Headphones className="mr-1 h-3 w-3" />
                Audio Content
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Podcasts & Panels
              </h2>
              <p className="mt-2 text-stone-600">
                Listen to in-depth conversations on finance and business
              </p>
            </div>
            <Link
              href="/dashboard/podcasts"
              className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              View all episodes
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading.podcasts
              ? [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-32 animate-pulse border border-stone-200 bg-stone-50"
                  />
                ))
              : recentPodcasts.map((podcast) => (
                  <Link
                    key={podcast.id}
                    href={`/dashboard/podcasts/${podcast.id}`}
                  >
                    <div className="group flex cursor-pointer items-center gap-4 border border-stone-200 bg-white p-4 transition-all hover:border-stone-400 hover:shadow-md">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-stone-100">
                        {podcast.cover_image_url ? (
                          <img
                            src={podcast.cover_image_url}
                            alt={podcast.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-blue-50">
                            <Mic2 className="h-6 w-6 text-blue-500" />
                          </div>
                        )}
                        {!podcast.is_free && (
                          <div className="absolute right-0 top-0 bg-stone-900/80 p-0.5">
                            <Lock className="h-2.5 w-2.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-stone-400">
                            EP {podcast.episode_number}
                          </span>
                          {!podcast.is_free && (
                            <span className="text-[10px] font-medium text-emerald-600">
                              Premium
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-sm font-semibold text-stone-900 line-clamp-1 group-hover:text-amber-600">
                          {podcast.title}
                        </h3>
                        <p className="text-xs text-stone-500">
                          with {podcast.host}
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-stone-400">
                          <Clock className="h-3 w-3" />
                          {podcast.duration}
                        </div>
                      </div>
                      <Play className="h-4 w-4 text-stone-400 group-hover:text-amber-500" />
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
              <Badge className="mb-3 rounded-full bg-emerald-100 text-emerald-700">
                <Newspaper className="mr-1 h-3 w-3" />
                Written Content
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
                <Link href="/dashboard">
                  <Button className="rounded-full bg-stone-900 px-8 text-white hover:bg-stone-800">
                    Member Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="rounded-full border-stone-300"
                >
                  Contact for Speaking
                </Button>
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
