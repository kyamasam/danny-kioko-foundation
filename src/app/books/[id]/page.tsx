"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  ShoppingBag,
  ExternalLink,
  Calendar,
  Star,
  Users,
  TrendingUp,
  ChevronRight,
  Download,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Book {
  id: number;
  title: string;
  short_description: string;
  price: number;
  sale_price: number;
  cover_page_url: string;
  images: string[];
  sources: { name: string; url: string }[];
  created_at: string;
}

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/api/books/${params.id}`);
        const result = await response.json();

        if (!result.success) throw new Error(result.error);
        setBook(result.data);
        setSelectedImage(result.data.cover_page_url);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBook();
    }
  }, [params.id]);

  const formatPrice = (price?: number) => {
    if (!price || price === 0) return "Free";
    return `KSh ${price.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: book?.title,
          text: `Check out "${book?.title}" by A.J.K. Bett`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
          <p className="mt-4 text-stone-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border-2 border-stone-200">
            <BookOpen className="h-8 w-8 text-stone-400" />
          </div>
          <h2 className="text-xl font-bold text-stone-900">Book Not Found</h2>
          <p className="mt-2 text-stone-500">
            {error || "The book you're looking for doesn't exist."}
          </p>
          <Link href="/#books">
            <Button className="mt-6 rounded-none bg-stone-900 text-white hover:bg-stone-800">
              Browse Books
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const hasSale = book.sale_price && book.sale_price > 0 && book.sale_price < book.price;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
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
            <Link href="/#books" className="hover:text-stone-900 transition">
              Books
            </Link>
            <Link href="/#podcasts" className="hover:text-stone-900 transition">
              Podcasts
            </Link>
            <Link href="/#insights" className="hover:text-stone-900 transition">
              Insights
            </Link>
            <Link href="/#about" className="hover:text-stone-900 transition">
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

      {/* Book Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to books
        </button>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Book Cover */}
          <div className="space-y-4">
            <div className="relative overflow-hidden border-2 border-stone-200 bg-stone-50 shadow-lg">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[3/4] flex-col items-center justify-center">
                  <BookOpen className="h-16 w-16 text-stone-400" />
                  <p className="mt-4 text-sm text-stone-500">Cover Image</p>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {book.images && book.images.length > 0 && (
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedImage(book.cover_page_url)}
                  className={`relative h-20 w-16 overflow-hidden border-2 transition-all ${
                    selectedImage === book.cover_page_url
                      ? "border-amber-500"
                      : "border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <img
                    src={book.cover_page_url}
                    alt="Main cover"
                    className="h-full w-full object-cover"
                  />
                </button>
                {book.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 w-16 overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? "border-amber-500"
                        : "border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${book.title} - view ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Book Details */}
          <div className="space-y-6">
            {/* Title & Badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="rounded-none bg-amber-100 text-amber-700">
                  Bestseller
                </Badge>
                {hasSale && (
                  <Badge className="rounded-none bg-emerald-100 text-emerald-700">
                    Sale
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-stone-900 lg:text-5xl">
                {book.title}
              </h1>
            </div>

            {/* Price */}
            <div className="border-t border-stone-200 pt-4">
              {hasSale ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-emerald-600">
                    {formatPrice(book.sale_price)}
                  </span>
                  <span className="text-lg text-stone-400 line-through">
                    {formatPrice(book.price)}
                  </span>
                </div>
              ) : (
                <div className="text-3xl font-bold text-amber-600">
                  {formatPrice(book.price)}
                </div>
              )}
              <p className="mt-1 text-xs text-stone-500">Price includes VAT</p>
            </div>

            {/* Description */}
            {book.short_description && (
              <div className="border-t border-stone-200 pt-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-stone-400">
                  About This Book
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="leading-relaxed text-stone-600">
                    {book.short_description}
                  </p>
                </div>
              </div>
            )}

            {/* Where to Buy */}
            {book.sources && book.sources.length > 0 && (
              <div className="border-t border-stone-200 pt-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Where to Buy
                </h3>
                <div className="flex flex-wrap gap-3">
                  {book.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition-all hover:border-amber-500 hover:text-amber-600"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      {source.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata */}
            <div className="border-t border-stone-200 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Calendar className="h-4 w-4" />
                  <span>Published {formatDate(book.created_at)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <BookOpen className="h-4 w-4" />
                  <span>Paperback & Digital</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {book.sources && book.sources[0] && (
                <a
                  href={book.sources[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full rounded-none bg-amber-500 px-6 py-2.5 text-stone-900 hover:bg-amber-400">
                    Buy Now
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 rounded-none border border-stone-300 px-6 py-2.5 text-stone-600 transition-all hover:border-amber-500 hover:text-amber-600"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            {/* Author Note */}
            <div className="mt-6 border-l-4 border-amber-500 bg-stone-50 p-4">
              <p className="text-sm italic text-stone-600">
                "A practical guide drawn from decades of financial leadership experience in Kenya's top institutions."
              </p>
              <p className="mt-2 text-xs font-medium text-stone-500">
                — Aggrey Jonathan K. Bett
              </p>
            </div>
          </div>
        </div>

        {/* Related / Also Bought Section */}
        <div className="mt-16 border-t border-stone-200 pt-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-stone-900">You Might Also Like</h2>
              <div className="mt-1 h-px w-12 bg-amber-500" />
            </div>
            <Link href="/#books" className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900">
              View all books
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Placeholder for related books - you can fetch from API */}
          <div className="text-center text-stone-400 py-8">
            <p>More publications coming soon...</p>
          </div>
        </div>
      </div>

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