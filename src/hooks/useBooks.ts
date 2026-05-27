import { useState, useEffect, useCallback } from "react";
import type {
  Book,
  CreateBookInput,
  UpdateBookInput,
} from "@/components/books/types";
import { getErrorMessage } from "@/lib/error";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/books");
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to fetch books");
      }

      setBooks(result.data || []);
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      setError(message);
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addBook = useCallback(
    async (book: CreateBookInput) => {
      try {
        setError(null);

        const response = await fetch("/api/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(book),
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Failed to add book");
        }

        setBooks((prev) => [result.data, ...prev]);
        return { success: true, data: result.data };
      } catch (err: unknown) {
        const message = getErrorMessage(err);
        setError(message);
        console.error("Error adding book:", err);
        return { success: false, error: message };
      }
    },
    [],
  );

  const updateBook = useCallback(
    async (id: number, updates: UpdateBookInput) => {
      try {
        setError(null);

        const response = await fetch(`/api/books/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates),
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Failed to update book");
        }

        setBooks((prev) =>
          prev.map((book) => (book.id === id ? result.data : book)),
        );
        return { success: true, data: result.data };
      } catch (err: unknown) {
        const message = getErrorMessage(err);
        setError(message);
        console.error("Error updating book:", err);
        return { success: false, error: message };
      }
    },
    [],
  );

  const deleteBook = useCallback(
    async (id: number) => {
      try {
        setError(null);

        const response = await fetch(`/api/books/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Failed to delete book");
        }

        setBooks((prev) => prev.filter((book) => book.id !== id));
        return { success: true };
      } catch (err: unknown) {
        const message = getErrorMessage(err);
        setError(message);
        console.error("Error deleting book:", err);
        return { success: false, error: message };
      }
    },
    [],
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void fetchBooks();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [fetchBooks]);

  return {
    books,
    loading,
    error,
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
  };
}
