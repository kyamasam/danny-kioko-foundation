"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image_url: string;
  author: string;
  read_time: number;
  is_free: boolean;
  is_published: boolean;
  price: number;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.slug}`);
        const result = await response.json();

        if (!result.success) throw new Error(result.error);
        setBlog(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleLike = async () => {
    if (!blog) return;
    setLiked(!liked);
    // Implement API call to update likes count
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#1A5E4E] border-t-transparent" />
          <p className="mt-4 text-stone-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="text-center max-w-md px-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border-2 border-stone-200">
            <span className="text-3xl">📄</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
            Article Not Found
          </h2>
          <p className="text-stone-500">
            {error ||
              "The article you're looking for doesn't exist or has been moved."}
          </p>
          <Link href="/#thoughts">
            <Button className="mt-6 bg-[#1A5E4E] text-white hover:bg-[#124034] transition-all duration-200 px-6 py-2 rounded-none">
              Browse Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e7efec]">
        <div className="mx-auto max-w-7xl flex h-20 items-center justify-between px-8">
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                A.J.K. BETT
              </span>
              <span className="text-[10px] font-mono tracking-wider text-stone-500">
                AUTHOR · ECONOMIST · STRATEGIST
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link
              href="/#books"
              className="nav-link hover:text-[#1A1A1A] transition-colors"
            >
              Books
            </Link>
            <Link
              href="/#podcasts"
              className="nav-link hover:text-[#1A1A1A] transition-colors"
            >
              Podcasts
            </Link>
            <Link
              href="/#thoughts"
              className="nav-link hover:text-[#1A1A1A] transition-colors"
            >
              Thoughts
            </Link>
            <Link
              href="/#about"
              className="nav-link hover:text-[#1A1A1A] transition-colors"
            >
              About
            </Link>
          </nav>
          <Link href="/contact">
            <Button className="bg-[#1A5E4E] text-white hover:bg-[#124034] transition-all duration-200 px-6 py-2 rounded-full text-sm">
              Talk to us
            </Button>
          </Link>
        </div>
      </header>

      {/* Blog Content */}
      <article className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-sm text-stone-500 hover:text-[#1A5E4E] transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to insights
        </button>

        {/* Header */}
        <header className="mb-8">
          {/* Category & Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-[#C9913A] text-xs font-bold tracking-[0.08em] uppercase">
              {blog.category || "Insight"}
            </span>
            {!blog.is_free && (
              <span className="text-[10px] font-medium text-[#1A5E4E] bg-[#eaf4f0] px-2 py-1">
                Premium
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{blog.read_time} min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {blog.cover_image_url && (
          <div className="mb-8 overflow-hidden border border-[#e7efec] bg-stone-100">
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Rich Text Content */}
        <div
          className="
            prose prose-stone max-w-none
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#1A1A1A] [&_h2]:mt-8 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#1A1A1A] [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:text-stone-600 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
            [&_li]:text-stone-600 [&_li]:mb-1
            [&_strong]:text-[#1A1A1A] [&_strong]:font-semibold
            [&_a]:text-[#1A5E4E] [&_a]:underline [&_a]:transition-colors [&_a:hover]:text-[#124034]
            [&_blockquote]:border-l-4 [&_blockquote]:border-[#C9913A] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-stone-500 [&_blockquote]:my-4
            [&_img]:w-full [&_img]:h-auto [&_img]:my-6 [&_img]:border [&_img]:border-[#e7efec]
            [&_hr]:my-8 [&_hr]:border-[#e7efec]
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />


        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-[#e7efec] pt-6">
            <Tag className="h-4 w-4 text-stone-400" />
            {blog.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blogs/tag/${tag.toLowerCase()}`}
                className="rounded-sm bg-stone-100 px-3 py-1 text-xs text-stone-600 transition-colors hover:bg-stone-200 hover:text-[#1A5E4E]"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Engagement Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#e7efec] py-4">
          <div className="flex gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm transition-all duration-200 ${
                liked ? "text-red-600" : "text-stone-600 hover:text-red-600"
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-red-600" : ""}`} />
              <span>{blog.likes + (liked ? 1 : 0)}</span>
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm transition-all duration-200 ${
                saved ? "text-[#C9913A]" : "text-stone-600 hover:text-[#C9913A]"
              }`}
            >
              <Bookmark
                className={`h-4 w-4 ${saved ? "fill-[#C9913A]" : ""}`}
              />
              <span>{saved ? "Saved" : "Save"}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-stone-600 transition-all duration-200 hover:text-[#1A5E4E]"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 border border-[#e7efec] bg-[#fafdfb] p-6 transition-all duration-200 hover:border-[#cfe2dc]">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="h-16 w-16 shrink-0 overflow-hidden border-2 border-[#C9913A] bg-stone-200">
              <img
                src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/landing/jona.jpg"
                alt="Author"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1A1A1A]">
                Aggrey Jonathan K. Bett
              </h3>
              <p className="mt-1 text-sm text-stone-600">
                Financial Strategist & Author
              </p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                Drawing from over three decades of leadership across Kenya's top
                financial institutions, Jonathan shares insights on wealth
                generation, business strategy, and financial independence.
              </p>
              <Link
                href="/#about"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#1A5E4E] hover:text-[#124034] transition-colors hover:gap-2"
              >
                Read full bio
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation to All Articles */}
        <div className="mt-8 flex items-center justify-between border-t border-[#e7efec] pt-6">
          <Link
            href="/#thoughts"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-[#1A5E4E] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>
          <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-[#e7efec] to-transparent" />
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#1A5E4E] py-10 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/jkbLogoTransparent.png"
                alt="JKB"
                className="h-8 w-auto object-contain brightness-0 invert opacity-70"
              />
              <span className="text-white/70 text-sm font-light">
                Jonathan K Bett
              </span>
            </div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/45 text-xs font-light hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-white/45 text-xs font-light hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="text-white/45 text-xs font-light hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
            <p className="text-white/60 text-xs font-light">
              &copy; 2026 Jonathan Bett
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
