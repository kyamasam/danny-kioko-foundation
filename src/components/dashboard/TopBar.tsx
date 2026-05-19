"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { type Page } from "./types";
import { AddBookForm } from "@/components/books/AddBookForm";

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
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const navItems: {
    id: Page;
    label: string;
    icon: React.ElementType;
  }[] = [
    { id: "books", label: "Books", icon: BookOpen },
    { id: "podcasts", label: "Podcasts", icon: Mic2 },
    { id: "blogs", label: "Blogs", icon: FileText },
  ];

  const handleAddClick = () => {
    if (activePage === "books") {
      setShowAddBookForm(true);
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQ.trim()) {
      console.log("Searching for:", searchQ);
      setSearchOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between py-2">
          {/* Logo - Exact match to HTML design */}
          <a href="/dashboard" className="flex items-center gap-3">
            <img
              src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/jkbLogo.png"
              alt="JKB"
              className="h-11 w-auto object-contain"
            />
            <span className="font-light text-base tracking-wide text-stone-600">
              Jonathan K Bett
            </span>
          </a>

          {/* Navigation - Exact match to HTML nav-link style */}
          <div className="flex items-center gap-10">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActivePage(id)}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  activePage === id
                    ? "text-ink"
                    : "text-stone-600 hover:text-ink",
                  "relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  activePage === id && "after:w-full",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right actions - Keep functional but styled minimally */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              onClick={handleAddClick}
              className="h-9 px-4 bg-teal hover:bg-teal-light text-white text-sm font-medium rounded-none transition-colors"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add{" "}
              {activePage === "books"
                ? "Book"
                : activePage === "podcasts"
                  ? "Podcast"
                  : "Post"}
            </Button>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-stone-400 hover:text-stone-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            <button className="relative text-stone-400 hover:text-stone-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-gold" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-ink transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center border border-stone-200 rounded-full bg-primary-pale">
                    <span className="text-primary text-sm font-semibold">
                      JB
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => router.push("/login")}
                  className="text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-stone-100 bg-white px-8 py-3">
            <div className="relative max-w-7xl mx-auto">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <Input
                autoFocus
                placeholder={`Search ${activePage}...`}
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
                onKeyDown={handleSearch}
                className="pl-8 border-0 border-b border-stone-200 rounded-none focus:border-primary focus:ring-0"
              />
            </div>
          </div>
        )}
      </header>

      {/* Quick Add Forms */}
      {showAddBookForm && (
        <AddBookForm
          onClose={() => setShowAddBookForm(false)}
          onSuccess={() => setShowAddBookForm(false)}
        />
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1a5e4e;
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
