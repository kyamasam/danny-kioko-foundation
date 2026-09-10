"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  status: "draft" | "published";
  author_name: string;
  published_at: string | null;
  created_at: string;
};

function CoverImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="h-48 w-full bg-linear-to-br from-[#0c1a36] to-[#e84c2b]" />;
  }

  return (
    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function BlogCard({ blog, priority }: { blog: Blog; priority?: boolean }) {
  const date = blog.published_at ?? blog.created_at;
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {blog.cover_image ? (
        <CoverImage src={blog.cover_image} alt={blog.title} priority={priority} />
      ) : (
        <div className="h-48 w-full bg-linear-to-br from-[#0c1a36] to-[#e84c2b]" />
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#e84c2b]">
          {formatted}
        </p>
        <h2 className="mb-2 text-lg font-semibold leading-snug text-[#111] group-hover:text-[#e84c2b]">
          {blog.title}
        </h2>
        {blog.excerpt && (
          <p className="mt-auto line-clamp-3 text-sm text-gray-500">{blog.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
