"use client";

import { useState, useEffect } from "react";
import { Plus, Search, X, Grid3x3, List, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BookCard } from "./BookCard";
import { AddBookForm } from "./AddBookForm";
import type { Book } from "./types";

interface BookGridProps {
  onAddClick?: () => void;
}

export function BookGrid({ onAddClick }: BookGridProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/books");
      const result = await response.json();

      if (!result.success) throw new Error(result.error);
      setBooks(result.data || []);
    } catch (err: any) {
      setError(err.message);
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this book?")) return;

    try {
      const response = await fetch(`/api/books/${id}`, { method: "DELETE" });
      const result = await response.json();

      if (!result.success) throw new Error(result.error);

      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err: any) {
      alert("Failed to delete book");
      console.error(err);
    }
  };

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setShowAddForm(true);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
    setEditingBook(null);
    fetchBooks();
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    fetchBooks();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="font-body text-red-500 mb-2">Error loading books</p>
        <p className="font-body text-sm text-stone-400">{error}</p>
        <Button
          onClick={fetchBooks}
          className="mt-4 rounded-none bg-stone-900 text-white hover:bg-stone-800"
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-stone-400" />
          <Input
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 rounded-none border-stone-200 focus:border-stone-800 focus:ring-0"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {/* Layout toggle */}
          <div className="flex border border-stone-200">
            <button
              onClick={() => setLayout("grid")}
              className={cn(
                "px-2 py-1 transition-colors",
                layout === "grid"
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-500 hover:bg-stone-100",
              )}
            >
              <Grid3x3 className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setLayout("list")}
              className={cn(
                "px-2 py-1 transition-colors",
                layout === "list"
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-500 hover:bg-stone-100",
              )}
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>

          <Button
            onClick={() => setShowAddForm(true)}
            className="h-9 gap-1.5 rounded-none bg-stone-900 px-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Book
          </Button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div
          className={cn(
            "gap-3",
            layout === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3"
              : "space-y-2",
          )}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="border border-stone-200 bg-white p-4 animate-pulse"
            >
              <div className="mb-3 h-32 w-full bg-stone-100" />
              <div className="h-4 w-3/4 bg-stone-100" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredBooks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center border border-stone-200 bg-stone-50">
            <BookOpen className="h-5 w-5 text-stone-400" />
          </div>
          <h3 className="font-display mb-1 text-lg text-stone-900">
            No books found
          </h3>
          <p className="font-body text-sm text-stone-400">
            {searchQuery
              ? "Try a different search term"
              : "Get started by adding your first book"}
          </p>
          {!searchQuery && (
            <Button
              onClick={() => setShowAddForm(true)}
              variant="outline"
              className="mt-4 rounded-none border-stone-300"
            >
              <Plus className="mr-2 h-3 w-3" />
              Add a book
            </Button>
          )}
        </div>
      )}

      {/* Book Grid/List */}
      {!loading && filteredBooks.length > 0 && (
        <div
          className={cn(
            "gap-3",
            layout === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
              : "space-y-2",
          )}
        >
          {filteredBooks.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEdit}
              onDelete={handleDelete}
              delay={(index % 4) + 1}
            />
          ))}
        </div>
      )}

      {/* Add/Edit Form Dialog */}
      {showAddForm && (
        <AddBookForm
          book={editingBook || undefined}
          onClose={handleFormClose}
          onSuccess={handleFormClose}
        />
      )}
    </div>
  );
}
