import { BlogCard, type Blog } from "@/components/blog/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Danny Kioko Foundation",
  description: "Stories, updates, and insights from the Danny Kioko Foundation.",
};

async function getBlogs(): Promise<Blog[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blogs`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-[#f5f2ec]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#e84c2b]">
            From the Foundation
          </p>
          <h1 className="font-script text-4xl text-[#0c1a36] sm:text-5xl">Our Blog</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Stories, updates, and insights from the Danny Kioko Foundation.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center text-gray-400">
            <span className="text-5xl">✍️</span>
            <p className="text-lg font-medium">No posts yet</p>
            <p className="text-sm">Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} priority={i === 0} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
