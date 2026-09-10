"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type CtaButton = {
  label: string;
  url: string;
};

export type Event = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  preview_images: string[];
  cta_buttons: CtaButton[];
  status: "draft" | "published";
  author_name: string;
  published_at: string | null;
  created_at: string;
};

function CoverImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="h-48 w-full bg-linear-to-br from-[#0c1a36] to-[#e84c2b]" />;
  }

  return (
    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function EventCard({ event, priority }: { event: Event; priority?: boolean }) {
  const date = event.published_at ?? event.created_at;
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md">
      {event.cover_image ? (
        <CoverImage src={event.cover_image} alt={event.title} priority={priority} />
      ) : (
        <div className="h-48 w-full bg-linear-to-br from-[#0c1a36] to-[#e84c2b]" />
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#e84c2b]">
          {formatted}
        </p>
        <h2 className="mb-2 text-lg font-semibold leading-snug text-[#111] group-hover:text-[#e84c2b]">
          {event.title}
        </h2>
        {event.excerpt && (
          <p className="line-clamp-3 text-sm text-gray-500">{event.excerpt}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={`/events/${event.slug}`}
            className="rounded-full bg-[#e84c2b] px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Learn More
          </Link>
          {event.cta_buttons?.map((btn, i) => (
            <a
              key={i}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#0c1a36] bg-[#0c1a36] px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
