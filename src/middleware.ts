import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Check if the request is for dashboard routes
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  // Only protect dashboard routes
  if (isDashboardRoute) {
    return updateSession(request);
  }

  // Allow all other routes (landing page, auth, etc.)
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|).*)"],
};
