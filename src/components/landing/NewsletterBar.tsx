"use client";

import Link from "next/link";

export function NewsletterBar() {
  return (
    <div className="bg-[#3d9b82] text-white/90 text-xs py-2.5 text-center tracking-wide font-light">
      Subscribe to My Newsletter
      <span className="mx-2 opacity-40">,</span>
      <Link
        href="/newsletter"
        className="font-semibold underline underline-offset-2 hover:text-white transition-colors"
      >
        The Financier
      </Link>
    </div>
  );
}
