import { createClient } from "@/lib/supabase/server";
import { requireAuthenticatedSupabase } from "@/lib/supabase/auth";
import { getErrorMessage } from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : 10;
    const all = searchParams.get("all") === "true";

    let query = supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!all) {
      query = query.eq("is_published", true).limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAuthenticatedSupabase();
    if ("response" in auth) return auth.response;

    const { supabase } = auth;
    const body = await request.json();

    if (!body.title) {
      return NextResponse.json(
        { success: false, error: "Title is required" },
        { status: 400 },
      );
    }

    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const { data, error } = await supabase
      .from("blogs")
      .insert([
        {
          title: body.title,
          excerpt: body.excerpt || "",
          content: body.content || "",
          cover_image_url: body.cover_image_url || null,
          read_time: body.read_time || 5,
          is_free: body.is_free ?? true,
          is_published: body.is_published ?? false,
          slug,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: unknown) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}
