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
  MessageCircle,
  ChevronRight,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    // You can implement API call to update likes count
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
          <p className="mt-4 text-stone-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border-2 border-stone-200">
            <span className="text-2xl">📄</span>
          </div>
          <h2 className="text-xl font-bold text-stone-900">
            Article Not Found
          </h2>
          <p className="mt-2 text-stone-500">
            {error || "The article you're looking for doesn't exist."}
          </p>
          <Link href="/#insights">
            <Button className="mt-6 rounded-none bg-stone-900 text-white hover:bg-stone-800">
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
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900">
                A.J.K. BETT
              </span>
              <span className="text-[10px] font-mono tracking-wider text-stone-500">
                AUTHOR · ECONOMIST · STRATEGIST
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link href="/#books" className="hover:text-stone-900 transition">
              Books
            </Link>
            <Link href="/#podcasts" className="hover:text-stone-900 transition">
              Podcasts
            </Link>
            <Link href="/#insights" className="hover:text-stone-900 transition">
              Insights
            </Link>
            <Link href="/#about" className="hover:text-stone-900 transition">
              About
            </Link>
          </nav>
          <Link href="/contact">
            <Button className="rounded-full bg-stone-900 px-6 text-white hover:bg-stone-800 transition-all">
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
          className="group mb-8 flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to insights
        </button>

        {/* Header */}
        <header className="mb-8">
          {/* Category & Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge className="rounded-none bg-amber-100 text-amber-700">
              {blog.category || "Insight"}
            </Badge>
            {!blog.is_free && (
              <Badge className="rounded-none bg-emerald-100 text-emerald-700">
                Premium
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-500">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{blog.author || "A.J.K. Bett"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{blog.read_time} min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-stone-300">•</span>
              <span>{blog.views?.toLocaleString() || 0} views</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {blog.cover_image_url && (
          <div className="mb-8 overflow-hidden border border-stone-200 bg-stone-100">
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-stone max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-stone-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:text-stone-600 [&_li]:mb-1 [&_strong]:text-stone-900 [&_a]:text-amber-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-stone-500"
          />
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-stone-200 pt-6">
            <Tag className="h-4 w-4 text-stone-400" />
            {blog.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blogs/tag/${tag.toLowerCase()}`}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Engagement Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-stone-200 py-4">
          <div className="flex gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors ${
                liked
                  ? "bg-red-50 text-red-600"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-red-600" : ""}`} />
              <span>{blog.likes + (liked ? 1 : 0)}</span>
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors ${
                saved
                  ? "bg-amber-50 text-amber-600"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Bookmark
                className={`h-4 w-4 ${saved ? "fill-amber-600" : ""}`}
              />
              <span>{saved ? "Saved" : "Save"}</span>
            </button>
          </div>

        </div>

        {/* Author Bio */}
        <div className="mt-8 border border-stone-200 bg-stone-50 p-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-amber-500 bg-stone-200">
              <img
                src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/landing/jona.jpg"
                alt="Author"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">
                Aggrey Jonathan K. Bett
              </h3>
              <p className="mt-1 text-sm text-stone-600">
                Financial Strategist, Former CBK Finance Director & Author
              </p>
              <p className="mt-2 text-sm text-stone-500">
                Drawing from over three decades of leadership across Kenya's top
                financial institutions, Jonathan shares insights on wealth
                generation, business strategy, and financial independence.
              </p>
              <Link
                href="/#about"
                className="mt-2 inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700"
              >
                Read full bio
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Comments Section Placeholder */}
        {/* <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-stone-900">
            Discussion
          </h3>
          <div className="border border-stone-200 bg-white p-8 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-stone-400" />
            <p className="mt-2 text-sm text-stone-500">Join the conversation</p>
            <Link href="/contact">
              <Button className="mt-3 rounded-none border-stone-300 bg-white text-stone-700 hover:bg-stone-50">
                Leave a comment
              </Button>
            </Link>
          </div>
        </div> */}

        {/* Navigation to Next/Previous */}
        <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Article
          </button>
          <Link href="/#insights">
            <button className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900">
              All Articles
              <ChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-stone-500 md:flex-row">
            <p>&copy; 2026 Aggrey Jonathan K. Bett. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-stone-900">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-stone-900">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-stone-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
