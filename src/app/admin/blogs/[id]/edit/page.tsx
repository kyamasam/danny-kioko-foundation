import { BlogEditor } from "@/components/blog/BlogEditor";
import { createServiceClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Post | Admin" };

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServiceClient();

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-2xl font-bold text-[#0c1a36]">Edit post</h1>
      <BlogEditor
        mode="edit"
        initialData={{
          id: blog.id,
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt ?? "",
          content: blog.content,
          cover_image: blog.cover_image ?? "",
          status: blog.status,
          author_name: blog.author_name,
        }}
      />
    </div>
  );
}
