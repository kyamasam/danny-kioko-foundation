import { createClient, createServiceClient } from "@/lib/supabase/server";
import { type NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return Response.json({ error: "Post not found" }, { status: 404 });
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
  const { title, excerpt, content, cover_image, status, author_name } = body;

  const updates: Record<string, unknown> = {};
  if (title !== undefined) updates.title = title;
  if (excerpt !== undefined) updates.excerpt = excerpt;
  if (content !== undefined) updates.content = content;
  if (cover_image !== undefined) updates.cover_image = cover_image;
  if (author_name !== undefined) updates.author_name = author_name;
  if (status !== undefined) {
    updates.status = status;
    if (status === "published") {
      updates.published_at = new Date().toISOString();
    }
  }

  const serviceClient = createServiceClient();

  const { data, error } = await serviceClient
    .from("blogs")
    .update(updates)
    .eq("slug", slug)
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
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
    .from("blogs")
    .delete()
    .eq("slug", slug);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return new Response(null, { status: 204 });
}
