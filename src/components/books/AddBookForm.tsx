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
import { BookMarked, Upload, X, Plus } from "lucide-react";
import { RichTextEditor } from "./RichTextEditor";
import { createClient } from "@/lib/supabase/client";
import type { Book, BookSource } from "./types";

interface AddBookFormProps {
  book?: Book;
  onClose: () => void;
  onSuccess?: () => void;
}

export function AddBookForm({ book, onClose, onSuccess }: AddBookFormProps) {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: book?.title || "",
    short_description: book?.short_description || "",
    price: book?.price || 0,
    sale_price: book?.sale_price || 0,
    cover_page_url: book?.cover_page_url || "",
    images: book?.images || [],
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>(
    book?.cover_page_url || "",
  );
  const [sources, setSources] = useState<BookSource[]>(
    book?.sources?.length ? book.sources : [{ name: "", url: "" }],
  );
  const supabase = createClient();

  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      setUploading(true);
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `covers/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("library")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("library").getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    setCoverFile(file);
    const previewUrl = URL.createObjectURL(file);
    setCoverPreview(previewUrl);
  };

  const addSource = () => {
    setSources([...sources, { name: "", url: "" }]);
  };

  const removeSource = (index: number) => {
    setSources(sources.filter((_, i) => i !== index));
  };

  const updateSource = (
    index: number,
    field: keyof BookSource,
    value: string,
  ) => {
    const updated = [...sources];
    updated[index][field] = value;
    setSources(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate title
    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    setLoading(true);

    try {
      let coverPageUrl = formData.cover_page_url;

      if (coverFile) {
        const uploadedUrl = await uploadFile(coverFile);
        if (uploadedUrl) {
          coverPageUrl = uploadedUrl;
        } else {
          throw new Error("Failed to upload cover image");
        }
      }

      const validSources = sources.filter((s) => s.name.trim() && s.url.trim());

      const submitData = {
        title: formData.title.trim(),
        short_description: formData.short_description || "",
        price: parseFloat(formData.price as any) || 0,
        sale_price: parseFloat(formData.sale_price as any) || 0,
        cover_page_url: coverPageUrl || null,
        images: formData.images || [],
        sources: validSources,
      };

      let response;
      if (book && book.id) {
        // Update existing book
        response = await fetch(`/api/books/${book.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitData),
        });
      } else {
        // Create new book
        response = await fetch("/api/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitData),
        });
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to save book");
      }

      onSuccess?.();
      onClose();
    } catch (error: any) {
      console.error("Error saving book:", error);
      alert(error.message || "Failed to save book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const removeCover = () => {
    setCoverFile(null);
    setCoverPreview("");
    setFormData({ ...formData, cover_page_url: "" });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="gap-0 rounded-none border-stone-200 bg-stone-50 p-0 shadow-2xl sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative overflow-hidden bg-stone-900 px-6 py-5 sticky top-0 z-10">
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-[radial-gradient(circle,_#d6d3d1_1px,_transparent_1px)] bg-[size:20px_20px] opacity-[0.15]" />
          <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-['Playfair_Display',serif] text-[6rem] leading-none text-white/[0.04]">
            📚
          </span>
          <DialogHeader className="relative z-10 space-y-1">
            <div className="mb-2 flex h-7 w-7 items-center justify-center border border-white/15">
              <BookMarked className="h-3.5 w-3.5 text-white/60" />
            </div>
            <DialogTitle className="font-['Playfair_Display',serif] text-[1.1rem] text-white/85">
              {book && book.id ? "Edit Book" : "Add a Book"}
            </DialogTitle>
            <p className="font-['Instrument_Sans',sans-serif] text-[0.65rem] text-white/35 uppercase tracking-[0.12em]">
              Fill in the details below
            </p>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          {/* Title */}
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

          {/* Short Description (Rich Text) */}
          <div>
            <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Description
            </Label>
            <RichTextEditor
              value={formData.short_description}
              onChange={(value) =>
                setFormData({ ...formData, short_description: value })
              }
              placeholder="Write a short description..."
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
                    price: parseFloat(e.target.value) || 0,
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
                    sale_price: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="0.00"
                className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
              />
            </div>
          </div>

          {/* Cover Image Upload */}
          <div>
            <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Cover Image
            </Label>

            {coverPreview ? (
              <div className="relative mt-2">
                <div className="relative inline-block">
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    className="h-32 w-24 object-cover border border-stone-200"
                  />
                  <button
                    type="button"
                    onClick={removeCover}
                    className="absolute -right-2 -top-2 rounded-full bg-stone-900 p-1 text-white hover:bg-stone-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-2">
                <label className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-stone-300 bg-stone-50 p-4 transition-colors hover:border-stone-500 hover:bg-stone-100">
                  <Upload className="mb-2 h-6 w-6 text-stone-400" />
                  <span className="font-['Instrument_Sans',sans-serif] text-xs text-stone-500">
                    Click to upload cover image
                  </span>
                  <span className="mt-1 font-['Instrument_Sans',sans-serif] text-[0.6rem] text-stone-400">
                    PNG, JPG, GIF up to 5MB
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
              </div>
            )}
            {uploading && (
              <p className="mt-1 font-['Instrument_Sans',sans-serif] text-xs text-stone-500">
                Uploading...
              </p>
            )}
          </div>

          {/* Sources Section */}
          <div>
            <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Where to Buy
            </Label>

            {sources.map((source, index) => (
              <div key={index} className="mb-3 flex gap-2 items-start">
                <div className="flex-1">
                  <Input
                    placeholder="Store name (e.g., Amazon)"
                    value={source.name}
                    onChange={(e) =>
                      updateSource(index, "name", e.target.value)
                    }
                    className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
                  />
                </div>
                <div className="flex-[2]">
                  <Input
                    placeholder="URL"
                    value={source.url}
                    onChange={(e) => updateSource(index, "url", e.target.value)}
                    className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSource(index)}
                  className="mt-1 text-stone-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addSource}
              className="mt-2 flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 transition-colors"
            >
              <Plus className="h-3 w-3" />
              Add another store
            </button>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              disabled={loading || uploading}
              className="group relative h-8 flex-1 overflow-hidden rounded-none bg-stone-900 font-['Instrument_Sans',sans-serif] text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800 disabled:opacity-50"
            >
              {loading || uploading
                ? "Saving..."
                : book && book.id
                  ? "Update"
                  : "Save"}
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
