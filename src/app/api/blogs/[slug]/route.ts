import { createClient } from "@/lib/supabase/server";
import { requireAuthenticatedSupabase } from "@/lib/supabase/auth";
import { getErrorMessage } from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const supabase = await createClient();

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Invalid blog slug" },
        { status: 400 },
      );
    }

    // Fetch blog by slug
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { success: false, error: "Blog post not found" },
          { status: 404 },
        );
      }
      throw error;
    }

    // Increment view count (optional - fire and forget)
    await supabase
      .from("blogs")
      .update({ views: (data.views || 0) + 1 })
      .eq("id", data.id);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("GET /api/blogs/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const auth = await requireAuthenticatedSupabase();
    if ("response" in auth) return auth.response;

    const { supabase } = auth;
    const body = await request.json();

    const { data, error } = await supabase
      .from("blogs")
      .update({
        title: body.title,
        excerpt: body.excerpt || "",
        content: body.content || "",
        cover_image_url: body.cover_image_url || null,
        read_time: body.read_time || 5,
        is_free: body.is_free ?? true,
        is_published: body.is_published ?? false,
      })
      .eq("slug", slug)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("PUT /api/blogs/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const auth = await requireAuthenticatedSupabase();
    if ("response" in auth) return auth.response;

    const { supabase } = auth;

    const { error } = await supabase.from("blogs").delete().eq("slug", slug);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("DELETE /api/blogs/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}
