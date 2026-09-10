import { EventEditor } from "@/components/events/EventEditor";
import { createServiceClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Event | Admin" };

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServiceClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !event) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-2xl font-bold text-[#0c1a36]">Edit event</h1>
      <EventEditor
        mode="edit"
        initialData={{
          id: event.id,
          title: event.title,
          slug: event.slug,
          excerpt: event.excerpt ?? "",
          content: event.content,
          cover_image: event.cover_image ?? "",
          preview_images: event.preview_images ?? [],
          cta_buttons: event.cta_buttons ?? [],
          status: event.status,
          author_name: event.author_name,
        }}
      />
    </div>
  );
}
