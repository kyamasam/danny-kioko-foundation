import { BlogEditor } from "@/components/blog/BlogEditor";

export const metadata = { title: "New Post | Admin" };

export default function NewPostPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-2xl font-bold text-[#0c1a36]">New post</h1>
      <BlogEditor mode="create" />
    </div>
  );
}
