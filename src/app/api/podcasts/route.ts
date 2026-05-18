import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : 10;

    let query = supabase
      .from("podcasts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("GET /api/podcasts error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
