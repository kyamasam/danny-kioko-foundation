import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("books")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("GET /api/books/[id] error:", error);
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

    // Validate id
    if (!id || id === "undefined") {
      return NextResponse.json(
        { success: false, error: "Invalid book ID" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("books")
      .update({
        title: body.title,
        short_description: body.short_description,
        price: body.price || 0,
        sale_price: body.sale_price || 0,
        cover_page_url: body.cover_page_url || null,
        images: body.images || [],
        sources: body.sources || [],
      })
      .eq("id", parseInt(id))
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("PUT /api/books/[id] error:", error);
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
        { success: false, error: "Invalid book ID" },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("books")
      .delete()
      .eq("id", parseInt(id));

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE /api/books/[id] error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
