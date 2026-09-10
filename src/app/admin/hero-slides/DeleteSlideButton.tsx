"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteSlideButton({ id }: { id: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    await fetch(`/api/hero-slides/${id}`, { method: "DELETE" });
    router.refresh();
  }

  if (confirming) {
    return (
      <span className="flex items-center gap-2">
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-red-600 hover:underline disabled:opacity-60"
        >
          {deleting ? "Deleting…" : "Confirm"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-red-500 hover:underline"
    >
      Delete
    </button>
  );
}
