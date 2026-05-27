import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: "Use Supabase Auth from the login form.",
    },
    { status: 410 },
  );
}
