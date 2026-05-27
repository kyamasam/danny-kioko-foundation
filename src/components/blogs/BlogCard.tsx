"use client";

import { useState } from "react";
import { FileText, Edit2, Trash2, ChevronRight, Eye, Clock, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Blog } from "./types";

interface BlogCardProps {
  blog: Blog;
  onEdit?: (blog: Blog) => void;
  onDelete?: (slug: string) => void;
}

export function BlogCard({ blog, onEdit, onDelete }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const stripHtml = (html: string) => {
    if (typeof document === "undefined") return html;
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const plainExcerpt = stripHtml(blog.excerpt || "");
  const displayExcerpt =
    plainExcerpt.length > 100 ? plainExcerpt.slice(0, 100) + "..." : plainExcerpt;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex border border-stone-200 bg-white transition-all duration-300",
        "hover:border-stone-300 hover:shadow-md",
      )}
    >
      <div className="absolute left-0 top-0 h-full w-0.5 bg-stone-200 transition-colors group-hover:bg-stone-800" />

      {/* Cover Image */}
      <div className="relative w-28 shrink-0 overflow-hidden border-r border-stone-100 sm:w-32">
        {blog.cover_image_url ? (
          <div className="relative h-full w-full">
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ) : (
          <div className="flex h-full min-h-[140px] flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-50 to-stone-100">
            <FileText className="h-6 w-6 text-stone-300" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 flex items-start justify-between gap-3">
          <h3 className="flex-1 text-base font-medium leading-tight text-stone-900 line-clamp-2">
            {blog.title}
          </h3>
          <span
            className={cn(
              "shrink-0 rounded px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide",
              blog.is_published
                ? "bg-emerald-50 text-emerald-600"
                : "bg-stone-100 text-stone-500",
            )}
          >
            {blog.is_published ? "Published" : "Draft"}
          </span>
        </div>

        {displayExcerpt && (
          <p className="mb-2 text-xs text-stone-500 leading-relaxed line-clamp-2">
            {displayExcerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-2">
          <div className="flex items-center gap-3 text-[0.65rem] text-stone-400">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {blog.read_time} min
            </span>
            {blog.views !== undefined && (
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {blog.views}
              </span>
            )}
            <span className="flex items-center gap-1">
              {blog.is_free ? (
                <Unlock className="h-3 w-3" />
              ) : (
                <Lock className="h-3 w-3" />
              )}
              {blog.is_free ? "Free" : "Paid"}
            </span>
            <span>{formatDate(blog.created_at)}</span>
          </div>

          <div className="flex gap-1">
            {onEdit && (
              <button
                onClick={() => onEdit(blog)}
                className="rounded p-1 text-stone-400 transition-all hover:bg-stone-100 hover:text-stone-600"
                aria-label="Edit blog"
              >
                <Edit2 className="h-3 w-3" />
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(blog.slug)}
                className="rounded p-1 text-stone-400 transition-all hover:bg-red-50 hover:text-red-500"
                aria-label="Delete blog"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}
            <button
              className="rounded p-1 text-stone-400 transition-all hover:bg-stone-100 hover:text-stone-600"
              aria-label="View details"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 border border-stone-800 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      />
    </article>
  );
}
