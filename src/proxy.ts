import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/proxy-session";

const PROTECTED_API_PREFIXES = ["/api/books", "/api/podcasts", "/api/blogs"];
const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

function isProtectedApiMutation(request: NextRequest) {
  return (
    WRITE_METHODS.has(request.method) &&
    PROTECTED_API_PREFIXES.some((prefix) =>
      request.nextUrl.pathname.startsWith(prefix),
    )
  );
}

export async function proxy(request: NextRequest) {
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboardRoute || isProtectedApiMutation(request)) {
    return updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
