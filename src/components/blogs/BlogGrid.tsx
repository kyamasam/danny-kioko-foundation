"use client";

import { useState, useEffect } from "react";
import { Plus, Search, X, Grid3x3, List, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BlogCard } from "./BlogCard";
import { AddBlogForm } from "./AddBlogForm";
import type { Blog } from "./types";

export function BlogGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/blogs?all=true");
      const result = await response.json();

      if (!result.success) throw new Error(result.error);
      setBlogs(result.data || []);
    } catch (err: any) {
      setError(err.message);
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const response = await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
      const result = await response.json();

      if (!result.success) throw new Error(result.error);

      setBlogs((prev) => prev.filter((b) => b.slug !== slug));
    } catch (err: any) {
      alert("Failed to delete blog post");
      console.error(err);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setShowAddForm(true);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
    setEditingBlog(null);
    fetchBlogs();
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "published" && blog.is_published) ||
      (filter === "draft" && !blog.is_published);
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-red-500 mb-2">Error loading blog posts</p>
        <p className="text-sm text-stone-400">{error}</p>
        <Button
          onClick={fetchBlogs}
          className="mt-4 rounded-none bg-stone-900 text-white hover:bg-stone-800"
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toolbar */}
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

        <div className="flex gap-2 flex-wrap">
          {/* Status filter */}
          <div className="flex border border-stone-200 text-xs">
            {(["all", "published", "draft"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-3 py-1.5 capitalize transition-colors",
                  filter === f
                    ? "bg-stone-900 text-white"
                    : "bg-white text-stone-500 hover:bg-stone-100",
                )}
              >
                {f}
              </button>
            ))}
          </div>

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
            className="h-9 gap-1.5 rounded-none bg-stone-900 px-3 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800"
          >
            <Plus className="h-3.5 w-3.5" />
            New Post
          </Button>
        </div>
      </div>

      {/* Stats */}
      {!loading && blogs.length > 0 && (
        <div className="flex gap-4 text-xs text-stone-400">
          <span>{blogs.length} total</span>
          <span>{blogs.filter((b) => b.is_published).length} published</span>
          <span>{blogs.filter((b) => !b.is_published).length} drafts</span>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div
          className={cn(
            "gap-3",
            layout === "grid" ? "grid sm:grid-cols-2" : "space-y-2",
          )}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-stone-200 bg-white p-4 animate-pulse flex gap-3">
              <div className="w-28 h-36 bg-stone-100 shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 w-3/4 bg-stone-100" />
                <div className="h-3 w-full bg-stone-100" />
                <div className="h-3 w-1/2 bg-stone-100" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && filteredBlogs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center border border-stone-200 bg-stone-50">
            <FileText className="h-5 w-5 text-stone-400" />
          </div>
          <h3 className="mb-1 text-lg text-stone-900">No blog posts found</h3>
          <p className="text-sm text-stone-400">
            {searchQuery || filter !== "all"
              ? "Try adjusting your filters"
              : "Get started by creating your first blog post"}
          </p>
          {!searchQuery && filter === "all" && (
            <Button
              onClick={() => setShowAddForm(true)}
              variant="outline"
              className="mt-4 rounded-none border-stone-300"
            >
              <Plus className="mr-2 h-3 w-3" />
              New blog post
            </Button>
          )}
        </div>
      )}

      {/* Blog grid/list */}
      {!loading && filteredBlogs.length > 0 && (
        <div
          className={cn(
            "gap-3",
            layout === "grid"
              ? "grid sm:grid-cols-2 xl:grid-cols-2"
              : "space-y-2",
          )}
        >
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Add/Edit Form */}
      {showAddForm && (
        <AddBlogForm
          blog={editingBlog || undefined}
          onClose={handleFormClose}
          onSuccess={handleFormClose}
        />
      )}
    </div>
  );
}
