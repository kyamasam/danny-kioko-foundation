import { createServiceClient } from "@/lib/supabase/server";
import Link from "next/link";
import { DeletePostButton } from "./DeletePostButton";
import { TestEmailButton } from "./TestEmailButton";

type Blog = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  author_name: string;
  created_at: string;
  published_at: string | null;
};

export default async function AdminPage() {
  const supabase = createServiceClient();
  const { data: blogs } = await supabase
    .from("blogs")
    .select("id, title, slug, status, author_name, created_at, published_at")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0c1a36]">Blog posts</h1>
        <div className="flex items-center gap-3">
          <TestEmailButton />
          <Link
            href="/admin/blogs/new"
            className="rounded-lg bg-[#e84c2b] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            + New post
          </Link>
        </div>
      </div>

      {!blogs || blogs.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[#ececec] bg-white py-20 text-center text-gray-400">
          <span className="text-4xl">✍️</span>
          <p>No posts yet.</p>
          <Link href="/admin/blogs/new" className="text-sm text-[#e84c2b] underline">
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#ececec] bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-[#ececec] bg-[#fafafa] text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-5 py-3 text-left">Title</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ececec]">
              {(blogs as Blog[]).map((blog) => {
                const date = new Date(blog.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <tr key={blog.id} className="hover:bg-[#fafafa]">
                    <td className="px-5 py-3.5 font-medium text-[#111]">{blog.title}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400">{date}</td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="text-gray-400 hover:text-[#111]"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/blogs/${blog.id}/edit`}
                          className="text-[#e84c2b] hover:underline"
                        >
                          Edit
                        </Link>
                        <DeletePostButton slug={blog.slug} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
