"use client";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { PageHeader } from "./PageHeader";
import { BooksGrid } from "./BooksGrid";
import { PodcastsGrid } from "./PodcastsGrid";
import { BlogsList } from "./BlogsList";
import { QuickAddDialog } from "./QuickAddDialog";

export type Page = "books" | "podcasts" | "blogs";

// Seed data (moved here as source of truth)
export const seedBooks = [
  {
    id: 1,
    title: "The Creative Act",
    author: "Rick Rubin",
    genre: "Creativity",
    status: "Reading",
    rating: 5,
  },
  {
    id: 2,
    title: "How to See",
    author: "George Nelson",
    genre: "Design",
    status: "Finished",
    rating: 4,
  },
  {
    id: 3,
    title: "Invisible Cities",
    author: "Italo Calvino",
    genre: "Fiction",
    status: "Queued",
    rating: 0,
  },
  {
    id: 4,
    title: "Notes on Directing",
    author: "Frank Hauser",
    genre: "Theatre",
    status: "Reading",
    rating: 4,
  },
];

export const seedPodcasts = [
  {
    id: 1,
    name: "99% Invisible",
    host: "Roman Mars",
    episodes: 512,
    tag: "Design",
  },
  {
    id: 2,
    name: "Lex Fridman",
    host: "Lex Fridman",
    episodes: 408,
    tag: "Tech",
  },
  {
    id: 3,
    name: "How I Built This",
    host: "Guy Raz",
    episodes: 378,
    tag: "Business",
  },
  {
    id: 4,
    name: "The Tim Ferriss Show",
    host: "Tim Ferriss",
    episodes: 700,
    tag: "Growth",
  },
];

export const seedBlogs = [
  {
    id: 1,
    title: "The quiet power of negative space",
    status: "Published",
    date: "May 12",
    reads: 1240,
  },
  {
    id: 2,
    title: "Type that speaks before you read",
    status: "Draft",
    date: "May 15",
    reads: 0,
  },
  {
    id: 3,
    title: "On building with restraint",
    status: "Published",
    date: "Apr 28",
    reads: 870,
  },
  {
    id: 4,
    title: "What Nairobi taught me about color",
    status: "Draft",
    date: "May 17",
    reads: 0,
  },
];

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState<Page>("books");
  const [addOpen, setAddOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body    { font-family: 'Instrument Sans', sans-serif; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          from { background-position: -400px 0; }
          to   { background-position:  400px 0; }
        }
        .anim-down { animation: slideDown 0.4s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-up   { animation: fadeUp   0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.10s; }
        .d3 { animation-delay: 0.15s; }
        .d4 { animation-delay: 0.20s; }
        .d5 { animation-delay: 0.25s; }
      `}</style>

      <div className="font-body flex min-h-screen flex-col bg-stone-50">
        <TopBar
          activePage={activePage}
          setActivePage={setActivePage}
          // addOpen={addOpen}
          setAddOpen={setAddOpen}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          searchQ={searchQ}
          setSearchQ={setSearchQ}
        />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
          <PageHeader activePage={activePage} />

          {activePage === "books" && (
            <BooksGrid onAddClick={() => setAddOpen(true)} />
          )}
          {activePage === "podcasts" && (
            <PodcastsGrid onAddClick={() => setAddOpen(true)} />
          )}
          {activePage === "blogs" && (
            <BlogsList onAddClick={() => setAddOpen(true)} />
          )}

          <div className="anim-up d5 mt-12 flex items-center justify-center gap-1.5 text-stone-400">
            <span className="block h-px w-4 bg-stone-300" />
            <span className="font-body text-[0.58rem] uppercase tracking-[0.12em]">
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
    </>
  );
}
