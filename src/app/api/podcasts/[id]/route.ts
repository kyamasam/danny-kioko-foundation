import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    // Validate id
    if (!id || id === "undefined") {
      return NextResponse.json(
        { success: false, error: "Invalid podcast ID" },
        { status: 400 },
      );
    }

    // Fetch single podcast by ID
    const { data, error } = await supabase
      .from("podcasts")
      .select("*")
      .eq("id", parseInt(id))
      .single();

    if (error) {
      // Handle not found error
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { success: false, error: "Podcast not found" },
          { status: 404 },
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("GET /api/podcasts/[id] error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const body = await request.json();

    if (!id || id === "undefined") {
      return NextResponse.json(
        { success: false, error: "Invalid podcast ID" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("podcasts")
      .update({
        title: body.title,
        short_description: body.short_description,
        host: body.host,
        cover_image_url: body.cover_image_url,
        audio_url: body.audio_url,
        duration: body.duration,
        episode_number: body.episode_number,
        is_free: body.is_free,
        price: body.price,
        category: body.category,
        tags: body.tags,
        sources: body.sources,
      })
      .eq("id", parseInt(id))
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("PUT /api/podcasts/[id] error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    if (!id || id === "undefined") {
      return NextResponse.json(
        { success: false, error: "Invalid podcast ID" },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("podcasts")
      .delete()
      .eq("id", parseInt(id));

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE /api/podcasts/[id] error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
