"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteEventButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Delete this event? This cannot be undone.")) return;
    setLoading(true);

    await fetch(`/api/events/${slug}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-gray-400 hover:text-red-500 disabled:opacity-50"
    >
      {loading ? "…" : "Delete"}
    </button>
  );
}
