"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { ImageUpload } from "./ImageUpload";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BlogEditorProps = {
  mode: "create" | "edit";
  initialData?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: object;
    cover_image: string;
    status: "draft" | "published";
    author_name: string;
  };
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function Toolbar({ editor }: { editor: ReturnType<typeof useEditor> }) {
  if (!editor) return null;

  const btn = (label: string, action: () => void, active?: boolean) => (
    <button
      type="button"
      onClick={action}
      className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
        active
          ? "bg-[#e84c2b] text-white"
          : "bg-white text-[#111] hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-wrap gap-1 border-b border-[#ececec] bg-[#fafafa] px-3 py-2">
      {btn("B", () => editor.chain().focus().toggleBold().run(), editor.isActive("bold"))}
      {btn("I", () => editor.chain().focus().toggleItalic().run(), editor.isActive("italic"))}
      {btn("S", () => editor.chain().focus().toggleStrike().run(), editor.isActive("strike"))}
      {btn("H1", () => editor.chain().focus().toggleHeading({ level: 1 }).run(), editor.isActive("heading", { level: 1 }))}
      {btn("H2", () => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive("heading", { level: 2 }))}
      {btn("H3", () => editor.chain().focus().toggleHeading({ level: 3 }).run(), editor.isActive("heading", { level: 3 }))}
      {btn("• List", () => editor.chain().focus().toggleBulletList().run(), editor.isActive("bulletList"))}
      {btn("1. List", () => editor.chain().focus().toggleOrderedList().run(), editor.isActive("orderedList"))}
      {btn('" "', () => editor.chain().focus().toggleBlockquote().run(), editor.isActive("blockquote"))}
      {btn("—", () => editor.chain().focus().setHorizontalRule().run())}
    </div>
  );
}

export function BlogEditor({ mode, initialData }: BlogEditorProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [coverImage, setCoverImage] = useState(initialData?.cover_image ?? "");
  const [authorName, setAuthorName] = useState(initialData?.author_name ?? "DK Foundation");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Write your story…" }),
    ],
    content: initialData?.content ?? "",
    editorProps: {
      attributes: {
        class:
          "prose max-w-none min-h-[280px] px-5 py-4 focus:outline-none text-[#111]",
      },
    },
  });

  function handleTitleChange(value: string) {
    setTitle(value);
    if (mode === "create") {
      setSlug(slugify(value));
    }
  }

  async function save(status: "draft" | "published") {
    if (!editor) return;
    setError(null);
    setSaving(true);

    const content = editor.getJSON();
    const url = mode === "create" ? "/api/blogs" : `/api/blogs/${initialData?.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    const body = { title, slug, excerpt, content, cover_image: coverImage, status, author_name: authorName };

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error ?? "Failed to save");
      setSaving(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Post title"
          className="w-full rounded-lg border border-[#ddd] px-3.5 py-2.5 text-xl font-semibold text-[#111] outline-none focus:border-[#e84c2b] focus:ring-2 focus:ring-[#e84c2b]/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">
          Slug <span className="font-normal text-gray-400">(URL path)</span>
        </label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(slugify(e.target.value))}
          placeholder="post-url-slug"
          className="w-full rounded-lg border border-[#ddd] px-3.5 py-2.5 font-mono text-sm text-[#111] outline-none focus:border-[#e84c2b] focus:ring-2 focus:ring-[#e84c2b]/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Short summary shown in blog listing…"
          rows={3}
          className="w-full resize-none rounded-lg border border-[#ddd] px-3.5 py-2.5 text-sm text-[#111] outline-none focus:border-[#e84c2b] focus:ring-2 focus:ring-[#e84c2b]/20"
        />
      </div>

      <ImageUpload value={coverImage} onChange={setCoverImage} />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">Author</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full rounded-lg border border-[#ddd] px-3.5 py-2.5 text-sm text-[#111] outline-none focus:border-[#e84c2b] focus:ring-2 focus:ring-[#e84c2b]/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">Content</label>
        <div className="overflow-hidden rounded-lg border border-[#ddd]">
          <Toolbar editor={editor} />
          <EditorContent editor={editor} />
        </div>
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => save("draft")}
          disabled={saving}
          className="rounded-lg border border-[#ddd] bg-white px-5 py-2.5 text-sm font-medium text-[#111] hover:bg-gray-50 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save draft"}
        </button>
        <button
          type="button"
          onClick={() => save("published")}
          disabled={saving}
          className="rounded-lg bg-[#e84c2b] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
        >
          {saving ? "Publishing…" : "Publish"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="ml-auto text-sm text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
