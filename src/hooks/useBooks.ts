import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type {
  Book,
  CreateBookInput,
  UpdateBookInput,
} from "@/components/books/types";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  // Fetch all books
  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("books")
        .select("*")
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      setBooks(data || []);
    } catch (err: any) {
      setError(err.message);
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Add a new book
  const addBook = useCallback(
    async (book: CreateBookInput) => {
      try {
        setError(null);

        const { data, error: insertError } = await supabase
          .from("books")
          .insert([
            {
              title: book.title,
              author: book.author,
              price: book.price || 0,
              sale_price: book.sale_price || 0,
              cover_page_url: book.cover_page_url || null,
              images: book.images || null,
            },
          ])
          .select()
          .single();

        if (insertError) throw insertError;

        setBooks((prev) => [data, ...prev]);
        return { success: true, data };
      } catch (err: any) {
        setError(err.message);
        console.error("Error adding book:", err);
        return { success: false, error: err.message };
      }
    },
    [supabase],
  );

  // Update a book
  const updateBook = useCallback(
    async (id: number, updates: UpdateBookInput) => {
      try {
        setError(null);

        const { data, error: updateError } = await supabase
          .from("books")
          .update(updates)
          .eq("id", id)
          .select()
          .single();

        if (updateError) throw updateError;

        setBooks((prev) => prev.map((book) => (book.id === id ? data : book)));
        return { success: true, data };
      } catch (err: any) {
        setError(err.message);
        console.error("Error updating book:", err);
        return { success: false, error: err.message };
      }
    },
    [supabase],
  );

  // Delete a book
  const deleteBook = useCallback(
    async (id: number) => {
      try {
        setError(null);

        const { error: deleteError } = await supabase
          .from("books")
          .delete()
          .eq("id", id);

        if (deleteError) throw deleteError;

        setBooks((prev) => prev.filter((book) => book.id !== id));
        return { success: true };
      } catch (err: any) {
        setError(err.message);
        console.error("Error deleting book:", err);
        return { success: false, error: err.message };
      }
    },
    [supabase],
  );

  // Get book by ID
  const getBookById = useCallback(
    async (id: number) => {
      try {
        const { data, error: fetchError } = await supabase
          .from("books")
          .select("*")
          .eq("id", id)
          .single();

        if (fetchError) throw fetchError;
        return { success: true, data };
      } catch (err: any) {
        console.error("Error fetching book:", err);
        return { success: false, error: err.message };
      }
    },
    [supabase],
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return {
    books,
    loading,
    error,
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
    getBookById,
  };
}
