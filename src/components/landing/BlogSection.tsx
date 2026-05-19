"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  cover_image_url: string;
  read_time: number;
  is_free: boolean;
  slug: string;
}

interface BlogSectionProps {
  initialBlogs: Blog[];
}

export function BlogSection({ initialBlogs }: BlogSectionProps) {
  const blogs = initialBlogs;
  const loading = false; // No loading state needed since data comes from server

  return (
    <section id="thoughts" className="bg-white py-16 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-9 max-w-2xl">
          <div className="w-11 h-[3px] bg-gradient-to-r from-[#1A5E4E] to-[#C9913A] rounded-sm mb-3"></div>
          <h2 className="text-3xl font-bold mb-3 text-[#1A1A1A]">Blogs</h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Notes on business, personal finance, leadership, and the practical
            decisions that shape long-term security.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {loading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[460px] animate-pulse border border-stone-200 bg-white"
                />
              ))
            : blogs.slice(0, 3).map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col min-h-full border border-[#e7efec] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#cfe2dc] hover:shadow-[0_18px_42px_rgba(22,55,45,0.09)]"
                >
                  {/* Blog Image - Fixed height */}
                  <div className="relative w-full h-[190px] overflow-hidden border-b border-[#e7efec] bg-stone-100">
                    <img
                      src={blog.cover_image_url || "/library.png"}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {!blog.is_free && (
                      <div className="absolute top-3 right-3 bg-stone-900/80 text-white text-[10px] font-medium px-2 py-1 rounded">
                        Premium
                      </div>
                    )}
                  </div>

                  {/* Blog Content */}
                  <div className="flex flex-col flex-1 p-7">
                    {/* Category Meta */}
                    <p className="text-[#1A5E4E] text-xs font-bold tracking-[0.08em] uppercase mb-4">
                      Insights
                    </p>

                    {/* Title */}
                    <h3 className="text-xl font-bold leading-snug mb-3 text-[#1A1A1A] transition-colors duration-200 group-hover:text-[#1A5E4E] line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5E4E] transition-all duration-200 hover:gap-2 mt-auto">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
