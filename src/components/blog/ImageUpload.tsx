"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export function ImageUpload({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Upload failed");
      onChange(json.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#111]">Cover image</label>

      {value ? (
        <div className="relative h-48 w-full overflow-hidden rounded-lg border border-[#ececec]">
          <Image src={value} alt="Cover" fill className="object-cover" unoptimized />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
          >
            Remove
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className="flex h-36 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#ddd] bg-[#fafafa] text-sm text-gray-400 transition-colors hover:border-[#e84c2b] hover:text-[#e84c2b]"
        >
          {uploading ? (
            <span>Uploading…</span>
          ) : (
            <>
              <span className="text-2xl">↑</span>
              <span>Click or drag to upload</span>
              <span className="mt-1 text-xs">JPEG, PNG, WebP — max 5MB</span>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
