"use client";

import { useState } from "react";
import { Plus, Search, Filter, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BookCard } from "./BookCard";
import { AddBookForm } from "./AddBookForm";
import { useBooks } from "@/hooks/useBooks";
import type { Book } from "./types";

interface BookGridProps {
  onAddClick?: () => void;
}

export function BookGrid({ onAddClick }: BookGridProps) {
  const { books, loading, error, deleteBook, updateBook } = useBooks();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  // Filter books
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || book.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this book?")) {
      await deleteBook(id);
    }
  };

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setShowAddForm(true);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
    setEditingBook(null);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="font-body text-red-500 mb-2">Error loading books</p>
        <p className="font-body text-sm text-stone-400">{error}</p>
        <Button
          onClick={() => window.location.reload()}
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
            placeholder="Search by title or author..."
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
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 rounded-none border border-stone-200 bg-white px-3 font-body text-sm text-stone-600 focus:border-stone-800 focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="Reading">Reading</option>
            <option value="Finished">Finished</option>
            <option value="Queued">Queued</option>
          </select>

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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-stone-200 bg-white p-4">
              <div className="mb-3 h-9 w-9 animate-pulse bg-stone-100" />
              <div className="mb-2 h-4 w-3/4 animate-pulse bg-stone-100" />
              <div className="mb-3 h-3 w-1/2 animate-pulse bg-stone-100" />
              <div className="mt-auto h-6 w-full animate-pulse bg-stone-100" />
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
            {searchQuery || statusFilter !== "all"
              ? "Try adjusting your filters"
              : "Get started by adding your first book"}
          </p>
          {!searchQuery && statusFilter === "all" && (
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

      {/* Book Grid */}
      {!loading && filteredBooks.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
