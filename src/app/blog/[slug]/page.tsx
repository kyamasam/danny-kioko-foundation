import { tiptapToHtml } from "@/lib/tiptap-to-html";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { createServiceClient } from "@/lib/supabase/server";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: object;
  cover_image: string | null;
  status: string;
  author_name: string;
  published_at: string | null;
  created_at: string;
};

async function getBlog(slug: string): Promise<Blog | null> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("id, title, slug, excerpt, content, cover_image, status, author_name, published_at, created_at")
    .eq("slug", slug)
    .single();
  if (error || !data) return null;
  return data;
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return { title: "Post not found" };

  return {
    title: `${blog.title} | Danny Kioko Foundation`,
    description: blog.excerpt ?? undefined,
    openGraph: blog.cover_image ? { images: [blog.cover_image] } : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog || blog.status !== "published") {
    notFound();
  }

  const html = tiptapToHtml(blog.content);

  const date = blog.published_at ?? blog.created_at;
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#f5f2ec]">
      {blog.cover_image && (
        <div className="relative h-64 w-full sm:h-80 md:h-[420px]">
          <Image
            src={blog.cover_image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#e84c2b] hover:underline"
        >
          ← All posts
        </Link>

        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#e84c2b]">
          {formatted} · {blog.author_name}
        </p>

        <h1 className="mb-8 text-3xl font-bold leading-tight text-[#0c1a36] sm:text-4xl">
          {blog.title}
        </h1>

        <article
          className="prose prose-lg max-w-none prose-headings:text-[#0c1a36] prose-a:text-[#e84c2b]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
