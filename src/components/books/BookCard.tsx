"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  ExternalLink,
  Trash2,
  Edit2,
  ChevronRight,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Book } from "./types";

interface BookCardProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (id: number) => void;
  delay?: number;
}

export function BookCard({ book, onEdit, onDelete, delay = 1 }: BookCardProps) {
  const router = useRouter();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price?: number) => {
    if (!price || price === 0) return "Free";
    return `$${price.toFixed(2)}`;
  };

  // Strip HTML tags for preview
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const plainTextDesc = stripHtml(book.short_description || "");
  const shouldTruncate = plainTextDesc.length > 80;
  const displayDesc =
    shouldTruncate && !showFullDesc
      ? plainTextDesc.slice(0, 80) + "..."
      : plainTextDesc;

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;
    router.push(`/dashboard/books/${book.id}`);
  };

  // Get a random subtle gradient for books without cover
  const gradients = [
    "from-amber-50 to-stone-100",
    "from-rose-50 to-stone-100",
    "from-emerald-50 to-stone-100",
    "from-blue-50 to-stone-100",
    "from-purple-50 to-stone-100",
  ];
  const gradientIndex = (book.id || 0) % gradients.length;

  return (
    <article
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex cursor-pointer border border-stone-200 bg-white transition-all duration-300",
        "hover:border-stone-300 hover:shadow-md",
        `animate-in fade-in slide-in-from-bottom-3 duration-500 delay-${delay * 50}`,
      )}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-stone-200 transition-colors group-hover:bg-stone-800" />

      {/* Cover Image Section - Smaller, left aligned */}
      <div className="relative w-24 shrink-0 overflow-hidden border-r border-stone-100 sm:w-28 md:w-32">
        {book.cover_page_url ? (
          <div className="relative h-full w-full">
            <img
              src={book.cover_page_url}
              alt={book.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ) : (
          <div
            className={cn(
              "flex h-full min-h-[140px] flex-col items-center justify-center gap-2 bg-gradient-to-br",
              gradients[gradientIndex],
            )}
          >
            <BookOpen className="h-6 w-6 text-stone-400" />
            <span className="font-body text-[0.6rem] text-stone-400">
              No cover
            </span>
          </div>
        )}
      </div>

      {/* Content Section - Left aligned text */}
      <div className="flex flex-1 flex-col p-4">
        {/* Title Row */}
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="flex-1 font-display text-base font-medium leading-tight text-stone-900 line-clamp-2">
            {book.title}
          </h3>

          {/* Price Tag */}
          <div className="shrink-0 text-right">
            {book.sale_price &&
            book.sale_price > 0 &&
            book.sale_price < (book.price || 0) ? (
              <div className="flex flex-col items-end">
                <span className="font-body text-xs text-emerald-600 font-semibold">
                  {formatPrice(book.sale_price)}
                </span>
                <span className="font-body text-[0.6rem] text-stone-400 line-through">
                  {formatPrice(book.price)}
                </span>
              </div>
            ) : (
              <span className="font-body text-sm font-medium text-stone-700">
                {formatPrice(book.price)}
              </span>
            )}
          </div>
        </div>

        {/* Description - Left aligned */}
        {book.short_description && (
          <div className="mb-2">
            <p className="font-body text-xs text-stone-500 leading-relaxed text-left">
              {displayDesc}
            </p>
            {shouldTruncate && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullDesc(!showFullDesc);
                }}
                className="mt-1 font-body text-[0.55rem] text-stone-400 hover:text-stone-600 uppercase tracking-wider transition-colors"
              >
                {showFullDesc ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}

        {/* Sources Section - Compact chips */}
        {book.sources && book.sources.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            <span className="font-body text-[0.55rem] uppercase text-stone-400 tracking-wider">
              Buy:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {book.sources.slice(0, 3).map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group/link inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 font-body text-[0.6rem] text-stone-600 transition-all hover:bg-stone-200 hover:text-stone-900"
                >
                  {source.name}
                  <ExternalLink className="h-2.5 w-2.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              ))}
              {book.sources.length > 3 && (
                <span className="inline-flex items-center rounded-full bg-stone-50 px-2 py-0.5 font-body text-[0.55rem] text-stone-400">
                  +{book.sources.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons - Bottom right */}
        <div className="mt-auto flex items-center justify-end gap-1 border-t border-stone-100 pt-2">
          <div className="flex gap-1 transition-all duration-200">
            {onEdit && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(book);
                }}
                className="rounded p-1 text-stone-400 transition-all hover:bg-stone-100 hover:text-stone-600"
                aria-label="Edit book"
              >
                <Edit2 className="h-3 w-3" />
              </button>
            )}
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(book.id);
                }}
                className="rounded p-1 text-stone-400 transition-all hover:bg-red-50 hover:text-red-500"
                aria-label="Delete book"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/dashboard/books/${book.id}`);
              }}
              className="rounded p-1 text-stone-400 transition-all hover:bg-stone-100 hover:text-stone-600"
              aria-label="View details"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Hover effect overlay indicator */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none border-2 border-stone-800 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        style={{ borderWidth: "1px" }}
      />
    </article>
  );
}
