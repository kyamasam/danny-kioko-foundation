"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TopBar } from "@/components/dashboard/TopBar";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { QuickAddDialog } from "@/components/dashboard/QuickAddDialog";
import { type Page } from "@/components/dashboard/types";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine active page based on route
  const getActivePageFromPath = (path: string): Page => {
    if (path.includes("/books")) return "books";
    if (path.includes("/podcasts")) return "podcasts";
    if (path.includes("/blogs")) return "blogs";
    return "books";
  };

  const [activePage, setActivePage] = useState<Page>(
    getActivePageFromPath(pathname),
  );
  const [addOpen, setAddOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  // Handle page change with navigation
  const handlePageChange = (page: Page) => {
    setActivePage(page);
    router.push(`/dashboard/${page}`);
  };

  return (
    <div className="min-h-screen bg-stone-50 ">
      <TopBar
        activePage={activePage}
        setActivePage={handlePageChange}
        setAddOpen={setAddOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQ={searchQ}
        setSearchQ={setSearchQ}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <PageHeader activePage={activePage} />

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
          {children}
        </div>

        {/* Dashboard Footer - Matches landing page aesthetic */}
        <div className="mt-12 flex animate-in fade-in slide-in-from-bottom-3 flex-col items-center justify-center gap-3 border-t border-stone-200 pt-8 delay-300">
          {/* Decorative line inspired by landing page */}
          <div className="flex items-center gap-2">
            <span className="block h-px w-8 bg-gradient-to-r from-transparent to-stone-300" />
            <div className="w-3 h-[2px] bg-gradient-to-r from-[#1A5E4E] to-[#C9913A] rounded-sm"></div>
            <span className="block h-px w-8 bg-gradient-to-l from-transparent to-stone-300" />
          </div>

          <span className=" text-[0.65rem] uppercase tracking-[0.15em] text-stone-400">
            Jonathan Aggrey Bett · Creative Library
          </span>

          <div className="flex items-center gap-4 text-[0.65rem] text-stone-300">
            <span>Personal Financial & Retirement Planning</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>How To Start And Run Your Own Business</span>
          </div>
        </div>
      </main>

      <QuickAddDialog
        open={addOpen}
        onOpenChange={setAddOpen}
        activePage={activePage}
      />
    </div>
  );
}
