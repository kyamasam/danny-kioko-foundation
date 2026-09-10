import { tiptapToHtml } from "@/lib/tiptap-to-html";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";

type CtaButton = { label: string; url: string };

type Event = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: object;
  cover_image: string | null;
  preview_images: string[];
  cta_buttons: CtaButton[];
  status: string;
  author_name: string;
  published_at: string | null;
  created_at: string;
};

async function getEvent(slug: string): Promise<Event | null> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/events/${slug}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event not found" };

  return {
    title: `${event.title} | Danny Kioko Foundation`,
    description: event.excerpt ?? undefined,
    openGraph: event.cover_image ? { images: [event.cover_image] } : undefined,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event || event.status !== "published") {
    notFound();
  }

  const html = tiptapToHtml(event.content);

  const date = event.published_at ?? event.created_at;
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#f5f2ec]">
      {event.cover_image && (
        <div className="relative h-64 w-full sm:h-80 md:h-[420px]">
          <Image
            src={event.cover_image}
            alt={event.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          href="/events"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#e84c2b] hover:underline"
        >
          ← All events
        </Link>

        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#e84c2b]">
          {formatted} · {event.author_name}
        </p>

        <h1 className="mb-6 text-3xl font-bold leading-tight text-[#0c1a36] sm:text-4xl">
          {event.title}
        </h1>

        {(event.cta_buttons?.length > 0) && (
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="rounded-full bg-[#e84c2b] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Learn More
            </Link>
            {event.cta_buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#0c1a36] bg-[#0c1a36] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}

        {event.preview_images?.length > 0 && (
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {event.preview_images.map((src, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={src} alt={`Preview ${i + 1}`} fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        )}

        <article
          className="prose prose-lg max-w-none prose-headings:text-[#0c1a36] prose-a:text-[#e84c2b]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
