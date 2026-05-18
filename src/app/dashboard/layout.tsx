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
    <div className="min-h-screen bg-stone-50 font-['Instrument_Sans',sans-serif]">
      {/* Font imports via next/font or link tags - add these to your root layout */}
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

        <div className="mt-12 flex animate-in fade-in slide-in-from-bottom-3 items-center justify-center gap-1.5 text-stone-400 delay-300">
          <span className="block h-px w-4 bg-stone-300" />
          <span className="font-['Instrument_Sans',sans-serif] text-[0.58rem] uppercase tracking-[0.12em]">
            BrandFlow · Your creative library
          </span>
          <span className="block h-px w-4 bg-stone-300" />
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
