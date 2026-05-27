import { createClient } from "@/lib/supabase/server";
import { requireAuthenticatedSupabase } from "@/lib/supabase/auth";
import { getErrorMessage } from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("books")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("GET /api/books error:", error);
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

    // Validate required fields
    if (!body.title) {
      return NextResponse.json(
        { success: false, error: "Title is required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("books")
      .insert([
        {
          title: body.title,
          short_description: body.short_description || "",
          price: body.price || 0,
          sale_price: body.sale_price || 0,
          cover_page_url: body.cover_page_url || null,
          images: body.images || null,
          sources: body.sources || [],
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: unknown) {
    console.error("POST /api/books error:", error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}
