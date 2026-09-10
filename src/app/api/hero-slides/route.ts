import { createClient, createServiceClient } from "@/lib/supabase/server";
import { type NextRequest } from "next/server";

export async function GET() {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("hero_slides")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data ?? []);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const {
    label,
    label_accent_color,
    heading,
    subheading,
    image_url,
    image_position,
    button_label,
    button_url,
    sort_order,
    status,
  } = body;

  if (!label || !heading || !subheading || !image_url) {
    return Response.json(
      { error: "label, heading, subheading, and image_url are required" },
      { status: 400 }
    );
  }

  const serviceClient = createServiceClient();
  const { data, error } = await serviceClient
    .from("hero_slides")
    .insert({
      label,
      label_accent_color: label_accent_color ?? "#21d0c3",
      heading,
      subheading,
      image_url,
      image_position: image_position ?? "center",
      button_label: button_label ?? "Learn More",
      button_url: button_url ?? "#",
      sort_order: sort_order ?? 0,
      status: status ?? "draft",
    })
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data, { status: 201 });
}
