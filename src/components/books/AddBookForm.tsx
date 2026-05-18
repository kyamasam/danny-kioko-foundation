"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookMarked, X } from "lucide-react";
import { useBooks } from "@/hooks/useBooks";
import type { Book, CreateBookInput } from "./types";

interface AddBookFormProps {
  book?: Book;
  onClose: () => void;
  onSuccess?: () => void;
}

export function AddBookForm({ book, onClose, onSuccess }: AddBookFormProps) {
  const { addBook, updateBook } = useBooks();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<CreateBookInput>>({
    title: book?.title || "",
    author: book?.author || "",
    price: book?.price || 0,
    sale_price: book?.sale_price || 0,
    cover_page_url: book?.cover_page_url || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (book) {
        await updateBook(book.id, formData);
      } else {
        await addBook(formData as CreateBookInput);
      }
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Error saving book:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="gap-0 rounded-none border-stone-200 bg-stone-50 p-0 shadow-2xl sm:max-w-md">
        <div className="relative overflow-hidden bg-stone-900 px-6 py-5">
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-[radial-gradient(circle,_#d6d3d1_1px,_transparent_1px)] bg-[size:20px_20px] opacity-[0.15]" />
          <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-['Playfair_Display',serif] text-[6rem] leading-none text-white/[0.04]">
            📚
          </span>
          <DialogHeader className="relative z-10 space-y-1">
            <div className="mb-2 flex h-7 w-7 items-center justify-center border border-white/15">
              <BookMarked className="h-3.5 w-3.5 text-white/60" />
            </div>
            <DialogTitle className="font-['Playfair_Display',serif] text-[1.1rem] text-white/85">
              {book ? "Edit Book" : "Add a Book"}
            </DialogTitle>
            <p className="font-['Instrument_Sans',sans-serif] text-[0.65rem] text-white/35 uppercase tracking-[0.12em]">
              Fill in the details below
            </p>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          <div>
            <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Title *
            </Label>
            <Input
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="The Design of Everyday Things"
              className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
            />
          </div>

          <div>
            <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Author *
            </Label>
            <Input
              required
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              placeholder="Don Norman"
              className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
            />
          </div>



          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
                Price
              </Label>
              <Input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: parseFloat(e.target.value),
                  })
                }
                placeholder="0.00"
                className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
                Sale Price
              </Label>
              <Input
                type="number"
                step="0.01"
                value={formData.sale_price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sale_price: parseFloat(e.target.value),
                  })
                }
                placeholder="0.00"
                className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
              />
            </div>
          </div>

          <div>
            <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Cover Page URL
            </Label>
            <Input
              value={formData.cover_page_url}
              onChange={(e) =>
                setFormData({ ...formData, cover_page_url: e.target.value })
              }
              placeholder="https://example.com/cover.jpg"
              className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
            />
          </div>



          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="group relative h-8 flex-1 overflow-hidden rounded-none bg-stone-900 font-['Instrument_Sans',sans-serif] text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800 disabled:opacity-50"
            >
              {loading ? "Saving..." : book ? "Update" : "Save"}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="h-8 rounded-none border border-stone-200 font-['Instrument_Sans',sans-serif] text-[0.65rem] text-stone-400 hover:bg-stone-100 hover:text-stone-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
