"use client";

import { useRouter } from "next/navigation";
import {
  BookOpen,
  Mic2,
  FileText,
  Plus,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { type Page, seedBooks, seedPodcasts, seedBlogs } from "./types";

interface TopBarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  setAddOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQ: string;
  setSearchQ: (q: string) => void;
}

export function TopBar({
  activePage,
  setActivePage,
  setAddOpen,
  searchOpen,
  setSearchOpen,
  searchQ,
  setSearchQ,
}: TopBarProps) {
  const router = useRouter();

  const navItems: {
    id: Page;
    label: string;
    icon: React.ElementType;
    count: number;
  }[] = [
    { id: "books", label: "Books", icon: BookOpen, count: seedBooks.length },
    {
      id: "podcasts",
      label: "Podcasts",
      icon: Mic2,
      count: seedPodcasts.length,
    },
    { id: "blogs", label: "Blogs", icon: FileText, count: seedBlogs.length },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm animate-in slide-in-from-top duration-500">
      <div className="mx-auto flex max-w-6xl items-center gap-0 px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2.5 border-r border-stone-200 pr-6 py-3">
          <div className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-[2.5px] border border-stone-300 p-[5px]">
            <div className="rounded-[1px] bg-stone-700" />
            <div className="rounded-[1px] bg-stone-700" />
            <div className="rounded-[1px] bg-stone-700" />
            <div className="rounded-[1px] bg-stone-300" />
          </div>
          <span className="font-['Playfair_Display',serif] text-[0.95rem] tracking-wide text-stone-800">
            BrandFlow
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 items-end gap-6 pl-6 pt-3">
          {navItems.map(({ id, label, icon: Icon, count }) => (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={cn(
                "group relative inline-flex items-center gap-[5px] border-none bg-transparent px-0 pb-2.5 font-['Instrument_Sans',sans-serif] text-[0.72rem] font-medium uppercase tracking-[0.12em] transition-all",
                activePage === id
                  ? "text-stone-800"
                  : "text-stone-400 hover:text-stone-600",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-stone-800 after:transition-all after:duration-300",
                activePage === id && "after:w-full",
              )}
            >
              <Icon className="h-3 w-3" />
              {label}
              <span
                className={cn(
                  "ml-0.5 rounded-full px-1.5 py-px text-[0.55rem] font-medium tabular-nums transition-all",
                  activePage === id
                    ? "bg-stone-900 text-white"
                    : "bg-stone-200 text-stone-500 group-hover:bg-stone-300",
                )}
              >
                {count}
              </span>
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-1 border-l border-stone-200 py-3 pl-6 ml-6">
          <Button
            size="sm"
            onClick={() => setAddOpen(true)}
            className="relative h-7 gap-1.5 overflow-hidden rounded-none bg-stone-900 px-3 font-['Instrument_Sans',sans-serif] text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800 group"
          >
            <Plus className="h-3 w-3" />
            Add{" "}
            {activePage === "books"
              ? "Book"
              : activePage === "podcasts"
                ? "Podcast"
                : "Post"}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 rounded-none p-0 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-3.5 w-3.5" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="relative h-7 w-7 rounded-none p-0 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
          >
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 gap-1 rounded-none px-2 font-['Instrument_Sans',sans-serif] text-[0.65rem] text-stone-500 hover:bg-stone-100 hover:text-stone-800"
              >
                <div className="flex h-5 w-5 items-center justify-center border border-stone-300 font-['Playfair_Display',serif] text-[0.55rem] text-stone-600">
                  CD
                </div>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-44 rounded-none border-stone-200 bg-stone-50 p-1 shadow-lg"
            >
              <DropdownMenuItem className="gap-2 rounded-none font-['Instrument_Sans',sans-serif] text-xs text-stone-600 focus:bg-stone-100">
                <User className="h-3 w-3" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-none font-['Instrument_Sans',sans-serif] text-xs text-stone-600 focus:bg-stone-100">
                <Settings className="h-3 w-3" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-stone-200" />
              <DropdownMenuItem
                className="gap-2 rounded-none font-['Instrument_Sans',sans-serif] text-xs text-red-500 focus:bg-red-50 focus:text-red-600"
                onClick={() => router.push("/login")}
              >
                <LogOut className="h-3 w-3" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="animate-in slide-in-from-top-2 duration-300 border-t border-stone-200 bg-white px-6 py-2">
          <div className="relative mx-auto max-w-6xl">
            <Search className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-stone-400" />
            <Input
              autoFocus
              placeholder={`Search ${activePage}…`}
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              className="border-none border-b border-stone-300 bg-transparent pl-7 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
            />
            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchQ("");
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
