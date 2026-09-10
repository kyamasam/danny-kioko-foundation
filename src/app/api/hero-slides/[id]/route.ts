import { createClient, createServiceClient } from "@/lib/supabase/server";
import { type NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();

  const allowed = [
    "label",
    "label_accent_color",
    "heading",
    "subheading",
    "image_url",
    "image_position",
    "button_label",
    "button_url",
    "sort_order",
    "status",
  ] as const;

  const updates: Record<string, unknown> = {};
  for (const key of allowed) {
    if (body[key] !== undefined) updates[key] = body[key];
  }

  const serviceClient = createServiceClient();
  const { data, error } = await serviceClient
    .from("hero_slides")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const serviceClient = createServiceClient();
  const { error } = await serviceClient
    .from("hero_slides")
    .delete()
    .eq("id", id);

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return new Response(null, { status: 204 });
}
