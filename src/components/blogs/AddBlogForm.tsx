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
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Upload, X } from "lucide-react";
import { RichTextEditor } from "@/components/books/RichTextEditor";
import { createClient } from "@/lib/supabase/client";
import type { Blog } from "./types";

interface AddBlogFormProps {
  blog?: Blog;
  onClose: () => void;
  onSuccess?: () => void;
}

export function AddBlogForm({ blog, onClose, onSuccess }: AddBlogFormProps) {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    excerpt: blog?.excerpt || "",
    content: blog?.content || "",
    cover_image_url: blog?.cover_image_url || "",
    read_time: blog?.read_time || 5,
    is_free: blog?.is_free ?? true,
    is_published: blog?.is_published ?? false,
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>(
    blog?.cover_image_url || "",
  );
  const supabase = createClient();

  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      setUploading(true);
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `blog-covers/${fileName}`;

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
    setCoverPreview(URL.createObjectURL(file));
  };

  const removeCover = () => {
    setCoverFile(null);
    setCoverPreview("");
    setFormData({ ...formData, cover_image_url: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    setLoading(true);

    try {
      let coverImageUrl = formData.cover_image_url;

      if (coverFile) {
        const uploadedUrl = await uploadFile(coverFile);
        if (uploadedUrl) {
          coverImageUrl = uploadedUrl;
        } else {
          throw new Error("Failed to upload cover image");
        }
      }

      const submitData = {
        title: formData.title.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content,
        cover_image_url: coverImageUrl || null,
        read_time: formData.read_time || 5,
        is_free: formData.is_free,
        is_published: formData.is_published,
      };

      let response;
      if (blog?.slug) {
        response = await fetch(`/api/blogs/${blog.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitData),
        });
      } else {
        response = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitData),
        });
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to save blog");
      }

      onSuccess?.();
      onClose();
    } catch (error: any) {
      console.error("Error saving blog:", error);
      alert(error.message || "Failed to save blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="gap-0 rounded-none border-stone-200 bg-stone-50 p-0 shadow-2xl sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative overflow-hidden bg-stone-900 px-6 py-5 sticky top-0 z-10">
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-[radial-gradient(circle,_#d6d3d1_1px,_transparent_1px)] bg-[size:20px_20px] opacity-[0.15]" />
          <DialogHeader className="relative z-10 space-y-1">
            <div className="mb-2 flex h-7 w-7 items-center justify-center border border-white/15">
              <FileText className="h-3.5 w-3.5 text-white/60" />
            </div>
            <DialogTitle className="text-[1.1rem] text-white/85">
              {blog?.slug ? "Edit Blog Post" : "New Blog Post"}
            </DialogTitle>
            <p className="text-[0.65rem] text-white/35 uppercase tracking-[0.12em]">
              Fill in the details below
            </p>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          {/* Title */}
          <div>
            <Label className="mb-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Title *
            </Label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="How to Build a Retirement Plan"
              className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
            />
          </div>

          {/* Excerpt */}
          <div>
            <Label className="mb-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Excerpt
            </Label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="A short summary of the blog post..."
              rows={3}
              className="rounded-none border-stone-200 bg-white text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0 resize-none"
            />
          </div>

          {/* Content */}
          <div>
            <Label className="mb-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Content
            </Label>
            <RichTextEditor
              value={formData.content}
              onChange={(value) => setFormData({ ...formData, content: value })}
              placeholder="Write the full blog post content..."
            />
          </div>

          {/* Read Time */}
          <div className="w-40">
            <Label className="mb-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Read Time (minutes)
            </Label>
            <Input
              type="number"
              min={1}
              value={formData.read_time}
              onChange={(e) =>
                setFormData({ ...formData, read_time: parseInt(e.target.value) || 5 })
              }
              className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
            />
          </div>

          {/* Cover Image */}
          <div>
            <Label className="mb-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
              Cover Image
            </Label>
            {coverPreview ? (
              <div className="relative mt-2 inline-block">
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="h-32 w-48 object-cover border border-stone-200"
                />
                <button
                  type="button"
                  onClick={removeCover}
                  className="absolute -right-2 -top-2 rounded-full bg-stone-900 p-1 text-white hover:bg-stone-700"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <label className="mt-2 flex cursor-pointer flex-col items-center justify-center border border-dashed border-stone-300 bg-stone-50 p-4 transition-colors hover:border-stone-500 hover:bg-stone-100">
                <Upload className="mb-2 h-6 w-6 text-stone-400" />
                <span className="text-xs text-stone-500">Click to upload cover image</span>
                <span className="mt-1 text-[0.6rem] text-stone-400">PNG, JPG up to 5MB</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            )}
            {uploading && (
              <p className="mt-1 text-xs text-stone-500">Uploading...</p>
            )}
          </div>

          {/* Toggles */}
          <div className="flex gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-stone-700">
              <Checkbox
                checked={formData.is_free}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, is_free: !!checked })
                }
              />
              Free to read
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-stone-700">
              <Checkbox
                checked={formData.is_published}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, is_published: !!checked })
                }
              />
              Published
            </label>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              disabled={loading || uploading}
              className="group relative h-8 flex-1 overflow-hidden rounded-none bg-stone-900 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800 disabled:opacity-50"
            >
              {loading || uploading ? "Saving..." : blog?.slug ? "Update" : "Save"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="h-8 rounded-none border border-stone-200 text-[0.65rem] text-stone-400 hover:bg-stone-100 hover:text-stone-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
