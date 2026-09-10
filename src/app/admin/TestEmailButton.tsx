"use client";

import { useState } from "react";

export function TestEmailButton() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleClick() {
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/email/test", { method: "POST" });
      const json = await res.json();
      if (!res.ok) {
        setState("error");
        setMessage(json.error ?? "Failed to send");
      } else {
        setState("ok");
        setMessage("Test email sent to your account.");
      }
    } catch {
      setState("error");
      setMessage("Network error");
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleClick}
        disabled={state === "loading"}
        className="rounded-lg border border-[#ececec] bg-white px-4 py-2 text-sm font-semibold text-[#0c1a36] hover:bg-[#fafafa] disabled:opacity-50"
      >
        {state === "loading" ? "Sending…" : "Send test email"}
      </button>
      {message && (
        <span className={`text-sm ${state === "ok" ? "text-green-600" : "text-red-500"}`}>
          {message}
        </span>
      )}
    </div>
  );
}
