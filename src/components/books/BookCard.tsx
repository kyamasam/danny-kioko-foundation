import { BookOpen, Star, Trash2, Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Book } from "./types";

interface BookCardProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (id: number) => void;
  delay?: number;
}

export function BookCard({ book, onEdit, onDelete, delay = 1 }: BookCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Reading":
        return "bg-amber-100 text-amber-800";
      case "Finished":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-stone-100 text-stone-600";
    }
  };

  const formatPrice = (price?: number) => {
    if (!price || price === 0) return "Free";
    return `$${price.toFixed(2)}`;
  };

  return (
    <article
      className={cn(
        "card-lift group relative flex flex-col border border-stone-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
        `animate-in fade-in slide-in-from-bottom-3 duration-500 delay-${delay * 50}`,
      )}
    >
      {/* Spine accent */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-stone-200 transition-colors group-hover:bg-stone-800" />

      {/* Cover image or placeholder */}
      <div className="mb-3 flex items-start justify-between gap-2">
        {book.cover_page_url ? (
          <img
            src={book.cover_page_url}
            alt={book.title}
            className="h-9 w-9 rounded object-cover border border-stone-200"
          />
        ) : (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-stone-200 bg-stone-50">
            <BookOpen className="h-4 w-4 text-stone-400" />
          </div>
        )}

        <div className="flex gap-1">
          <span
            className={cn(
              "rounded-none px-1.5 py-0.5 font-body text-[0.58rem] font-medium uppercase tracking-[0.1em]",
              getStatusColor(book.status),
            )}
          >
            {book.status}
          </span>
        </div>
      </div>

      {/* Book details */}
      <h2 className="font-display mb-0.5 text-[0.9rem] leading-snug text-stone-900 line-clamp-2">
        {book.title}
      </h2>
      <p className="mb-2 font-body text-[0.72rem] text-stone-400">
        {book.author}
      </p>

      {/* Price */}
      <div className="mb-3 flex items-center gap-2">
        {book.sale_price &&
        book.sale_price > 0 &&
        book.sale_price < (book.price || 0) ? (
          <>
            <span className="font-body text-[0.7rem] text-stone-400 line-through">
              {formatPrice(book.price)}
            </span>
            <span className="font-body text-[0.75rem] font-semibold text-emerald-600">
              {formatPrice(book.sale_price)}
            </span>
          </>
        ) : (
          <span className="font-body text-[0.75rem] text-stone-700">
            {formatPrice(book.price)}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <span className="rounded-none bg-stone-100 px-1.5 py-0.5 font-body text-[0.58rem] text-stone-500">
          {book.genre}
        </span>

        <div className="flex items-center gap-2">
          {book.rating > 0 && (
            <div className="flex gap-0.5">
              {Array.from({ length: book.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="h-2.5 w-2.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            {onEdit && (
              <button
                onClick={() => onEdit(book)}
                className="p-1 text-stone-400 hover:text-stone-600 transition-colors"
                aria-label="Edit book"
              >
                <Edit2 className="h-3 w-3" />
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(book.id)}
                className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                aria-label="Delete book"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
