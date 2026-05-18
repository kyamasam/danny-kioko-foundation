import { BookOpen, Star, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { seedBooks } from "./DashboardLayout";
import { GhostCard } from "./GhostCard";

interface BooksGridProps {
  onAddClick: () => void;
}

export function BooksGrid({ onAddClick }: BooksGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {seedBooks.map((book, i) => (
        <article
          key={book.id}
          className={cn(
            "card-lift anim-up group relative flex flex-col border border-stone-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
            `d${i + 1}`,
          )}
        >
          <div className="absolute left-0 top-0 h-full w-0.5 bg-stone-200 transition-colors group-hover:bg-stone-800" />

          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-stone-200 bg-stone-50">
              <BookOpen className="h-4 w-4 text-stone-400" />
            </div>
            <span
              className={cn(
                "rounded-none px-1.5 py-0.5 font-body text-[0.58rem] font-medium uppercase tracking-[0.1em]",
                book.status === "Reading" && "bg-amber-100 text-amber-800",
                book.status === "Finished" && "bg-emerald-100 text-emerald-800",
                book.status === "Queued" && "bg-stone-100 text-stone-600",
              )}
            >
              {book.status}
            </span>
          </div>

          <h2 className="font-display mb-0.5 text-[0.9rem] leading-snug text-stone-900">
            {book.title}
          </h2>
          <p className="mb-3 font-body text-[0.72rem] text-stone-400">
            {book.author}
          </p>


        </article>
      ))}

      <GhostCard type="book" onClick={onAddClick} delayIndex={5} />
    </div>
  );
}
