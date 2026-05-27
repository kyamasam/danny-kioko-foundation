import { NextResponse } from "next/server";
import { createClient } from "./server";

export async function requireAuthenticatedSupabase() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    return {
      response: NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      ),
    } as const;
  }

  return {
    supabase,
    user: data.claims,
  } as const;
}
