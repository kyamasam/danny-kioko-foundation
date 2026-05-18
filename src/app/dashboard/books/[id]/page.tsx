"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Edit2,
  Trash2,
  BookOpen,
  DollarSign,
  Tag,
  Link as LinkIcon,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AddBookForm } from "@/components/books/AddBookForm";
import type { Book, BookSource } from "@/components/books/types";
import DOMPurify from "dompurify";

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const fetchBook = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/books/${params.id}`);
      const result = await response.json();

      if (!result.success) throw new Error(result.error);
      setBook(result.data);
    } catch (err: any) {
      setError(err.message);
      console.error("Error fetching book:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this book?")) return;

    try {
      const response = await fetch(`/api/books/${params.id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (!result.success) throw new Error(result.error);

      router.push("/dashboard/books");
    } catch (err: any) {
      alert("Failed to delete book");
      console.error(err);
    }
  };

  const formatPrice = (price?: number) => {
    if (!price || price === 0) return "Free";
    return `$${price.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    if (params.id) {
      fetchBook();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          {/* Skeleton Loading */}
          <div className="animate-pulse">
            <div className="mb-6 h-8 w-32 bg-stone-200" />
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="aspect-[3/4] w-full bg-stone-200" />
              <div className="space-y-4">
                <div className="h-10 w-3/4 bg-stone-200" />
                <div className="h-24 w-full bg-stone-200" />
                <div className="h-12 w-32 bg-stone-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 font-body text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center border border-stone-200 bg-stone-50">
              <BookOpen className="h-8 w-8 text-stone-400" />
            </div>
            <h2 className="font-display mb-2 text-xl text-stone-900">
              Book not found
            </h2>
            <p className="font-body text-sm text-stone-400">
              {error || "The book you're looking for doesn't exist."}
            </p>
            <Button
              onClick={() => router.push("/dashboard/books")}
              className="mt-4 rounded-none bg-stone-900 text-white hover:bg-stone-800"
            >
              Browse all books
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="group mb-6 flex items-center gap-2 font-body text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to library
          </button>

          {/* Book Content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Cover Image */}
            <div className="animate-in fade-in slide-in-from-left-5 duration-500">
              <div className="sticky top-24">
                {book.cover_page_url ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden border border-stone-200 bg-white shadow-lg">
                    <img
                      src={book.cover_page_url}
                      alt={book.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-4 border border-stone-200 bg-stone-50">
                    <BookOpen className="h-16 w-16 text-stone-300" />
                    <span className="font-body text-sm text-stone-400">
                      No cover image
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500 delay-100">
              {/* Title and Actions */}
              <div className="border-b border-stone-200 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="font-display text-3xl leading-tight text-stone-900 lg:text-4xl">
                    {book.title}
                  </h1>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowEditForm(true)}
                      className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                      aria-label="Edit book"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                      aria-label="Delete book"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-2">
                  {book.sale_price &&
                  book.sale_price > 0 &&
                  book.sale_price < (book.price || 0) ? (
                    <>
                      <span className="font-body text-2xl text-emerald-600">
                        {formatPrice(book.sale_price)}
                      </span>
                      <span className="font-body text-sm text-stone-400 line-through">
                        {formatPrice(book.price)}
                      </span>
                    </>
                  ) : (
                    <span className="font-body text-2xl text-stone-900">
                      {formatPrice(book.price)}
                    </span>
                  )}
                </div>
                {book.sale_price && book.sale_price > 0 && (
                  <Badge className="rounded-none bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    Sale
                  </Badge>
                )}
              </div>

              {/* Description */}
              {book.short_description && (
                <div className="prose prose-stone max-w-none">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(book.short_description),
                    }}
                    className="font-body text-stone-600 [&_p]:mb-2 [&_strong]:font-semibold [&_strong]:text-stone-800 [&_code]:rounded [&_code]:bg-stone-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs"
                  />
                </div>
              )}

              {/* Sources / Where to Buy */}
              {book.sources && book.sources.length > 0 && (
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                    <LinkIcon className="h-3.5 w-3.5" />
                    Where to Buy
                  </h3>
                  <div className="space-y-2">
                    {book.sources.map((source: BookSource, idx: number) => (
                      <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border border-stone-200 bg-white p-3 transition-all hover:border-stone-300 hover:shadow-sm"
                      >
                        <span className="font-body text-sm text-stone-700">
                          {source.name}
                        </span>
                        <ExternalLink className="h-4 w-4 text-stone-400 transition-colors group-hover:text-stone-600" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Metadata */}
              <div className="space-y-2 border-t border-stone-200 pt-4">
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <Calendar className="h-3.5 w-3.5" />
                  Added on {formatDate(book.created_at)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form Dialog */}
      {showEditForm && (
        <AddBookForm
          book={book}
          onClose={() => {
            setShowEditForm(false);
            fetchBook(); // Refresh data after edit
          }}
          onSuccess={() => {
            setShowEditForm(false);
            fetchBook();
          }}
        />
      )}
    </>
  );
}
