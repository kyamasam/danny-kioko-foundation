import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export const metadata = { title: "Admin | Danny Kioko Foundation" };

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="fixed inset-0 z-50 flex bg-[#f5f2ec] overflow-hidden">
      <aside className="flex w-56 flex-col border-r border-[#ececec] bg-white px-4 py-6 shadow-sm">
        <Link href="/" className="mb-8 font-script text-xl text-[#111] leading-none">
          DK Foundation
        </Link>

        <nav className="flex flex-1 flex-col gap-1 text-sm">
          <Link
            href="/admin"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/blogs/new"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            New post
          </Link>
          <Link
            href="/admin/hero-slides"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            Hero Slides
          </Link>
          <Link
            href="/admin/events"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            Events
          </Link>
          <Link
            href="/admin/events/new"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            New event
          </Link>
          <Link
            href="/admin/subscribers"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            Subscribers
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            View blog
          </Link>
          <Link
            href="/events"
            className="rounded-lg px-3 py-2 font-medium text-[#111] hover:bg-[#f5f2ec]"
          >
            View events
          </Link>
        </nav>

        <div className="border-t border-[#ececec] pt-4">
          <p className="mb-2 truncate text-xs text-gray-400">{user.email}</p>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto px-6 py-8">{children}</main>
    </div>
  );
}
