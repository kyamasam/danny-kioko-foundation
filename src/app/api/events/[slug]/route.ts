import { createClient, createServiceClient } from "@/lib/supabase/server";
import { sendNewEventEmail } from "@/lib/mailer";
import { type NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return Response.json({ error: "Event not found" }, { status: 404 });
  }

  return Response.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const body = await request.json();
  const { title, excerpt, content, cover_image, preview_images, cta_buttons, status, author_name } = body;

  const serviceClient = createServiceClient();

  // Fetch current status to detect draft → published transition
  const { data: existing } = await serviceClient
    .from("events")
    .select("status, title, slug, excerpt")
    .eq("slug", slug)
    .single();

  const updates: Record<string, unknown> = {};
  if (title !== undefined) updates.title = title;
  if (excerpt !== undefined) updates.excerpt = excerpt;
  if (content !== undefined) updates.content = content;
  if (cover_image !== undefined) updates.cover_image = cover_image;
  if (preview_images !== undefined) updates.preview_images = preview_images;
  if (cta_buttons !== undefined) updates.cta_buttons = cta_buttons;
  if (author_name !== undefined) updates.author_name = author_name;
  if (status !== undefined) {
    updates.status = status;
    if (status === "published") {
      updates.published_at = new Date().toISOString();
    }
  }

  const { data, error } = await serviceClient
    .from("events")
    .update(updates)
    .eq("slug", slug)
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  // Notify subscribers when an event is published for the first time
  if (status === "published" && existing?.status !== "published") {
    const { data: subs } = await serviceClient
      .from("subscribers")
      .select("email");

    if (subs && subs.length > 0) {
      const emails = subs.map((s: { email: string }) => s.email);
      const eventTitle = title ?? existing?.title;
      const eventSlug = data.slug;
      const eventExcerpt = excerpt ?? existing?.excerpt;
      sendNewEventEmail(emails, { title: eventTitle, slug: eventSlug, excerpt: eventExcerpt }).catch((err) =>
        console.error("Failed to send event subscriber emails:", err)
      );
    }
  }

  return Response.json(data);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const serviceClient = createServiceClient();

  const { error } = await serviceClient
    .from("events")
    .delete()
    .eq("slug", slug);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return new Response(null, { status: 204 });
}
