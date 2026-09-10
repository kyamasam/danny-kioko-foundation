import { createClient, createServiceClient } from "@/lib/supabase/server";
import { sendNewEventEmail } from "@/lib/mailer";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = Number(searchParams.get("limit") ?? 20);
  const offset = Number(searchParams.get("offset") ?? 0);
  const status = searchParams.get("status");

  const supabase = createServiceClient();

  let query = supabase
    .from("events")
    .select("id, title, slug, excerpt, cover_image, preview_images, cta_buttons, status, author_name, published_at, created_at")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (status !== "all") {
    query = query.eq("status", "published");
  }

  const { data, error } = await query;

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, slug, excerpt, content, cover_image, preview_images, cta_buttons, status, author_name } = body;

  if (!title || !slug || !content) {
    return Response.json({ error: "title, slug, and content are required" }, { status: 400 });
  }

  const serviceClient = createServiceClient();

  const { data, error } = await serviceClient
    .from("events")
    .insert({
      title,
      slug,
      excerpt: excerpt ?? null,
      content,
      cover_image: cover_image ?? null,
      preview_images: preview_images ?? [],
      cta_buttons: cta_buttons ?? [],
      status: status ?? "draft",
      author_name: author_name ?? "DK Foundation",
      published_at: status === "published" ? new Date().toISOString() : null,
    })
    .select()
    .single();

  if (error) {
    if (error.code === "23505") {
      return Response.json({ error: "An event with this slug already exists" }, { status: 409 });
    }
    return Response.json({ error: error.message }, { status: 500 });
  }

  // Notify subscribers when an event is published
  if (status === "published") {
    const { data: subs } = await serviceClient
      .from("subscribers")
      .select("email");

    if (subs && subs.length > 0) {
      const emails = subs.map((s: { email: string }) => s.email);
      sendNewEventEmail(emails, { title, slug, excerpt }).catch((err) =>
        console.error("Failed to send event subscriber emails:", err)
      );
    }
  }

  return Response.json(data, { status: 201 });
}
