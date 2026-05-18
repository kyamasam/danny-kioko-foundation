"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TopBar } from "./TopBar";
import { PageHeader } from "./PageHeader";
import { BooksGrid } from "@/components/books/BookGrid";
import { type Page } from "./types";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const getActivePageFromPath = (path: string): Page => {
    if (path.includes("/books")) return "books";
    if (path.includes("/podcasts")) return "podcasts";
    if (path.includes("/blogs")) return "blogs";
    return "books";
  };

  const [activePage, setActivePage] = useState<Page>(
    getActivePageFromPath(pathname),
  );

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    router.push(`/dashboard/${page}`);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-['Instrument_Sans',sans-serif]">
      <TopBar activePage={activePage} setActivePage={handlePageChange} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <PageHeader activePage={activePage} />

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
          {activePage === "books" && <BooksGrid />}
          {activePage === "podcasts" && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-stone-200 bg-stone-50">
                <Mic2 className="h-5 w-5 text-stone-400" />
              </div>
              <h3 className="font-display mb-1 text-lg text-stone-900">
                Podcasts Coming Soon
              </h3>
              <p className="font-body text-sm text-stone-400">
                This feature is under development
              </p>
            </div>
          )}
          {activePage === "blogs" && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-stone-200 bg-stone-50">
                <FileText className="h-5 w-5 text-stone-400" />
              </div>
              <h3 className="font-display mb-1 text-lg text-stone-900">
                Blogs Coming Soon
              </h3>
              <p className="font-body text-sm text-stone-400">
                This feature is under development
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 flex animate-in fade-in slide-in-from-bottom-3 items-center justify-center gap-1.5 text-stone-400 delay-300">
          <span className="block h-px w-4 bg-stone-300" />
          <span className="font-['Instrument_Sans',sans-serif] text-[0.58rem] uppercase tracking-[0.12em]">
            BrandFlow · Your creative library
          </span>
          <span className="block h-px w-4 bg-stone-300" />
        </div>
      </main>
    </div>
  );
}
