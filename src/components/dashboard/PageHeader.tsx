import {
  TrendingUp,
  Star,
  Clock,
  Headphones,
  FileText,
  PenLine,
  BookOpen,
  Mic2,
  Sparkles,
} from "lucide-react";
import { type Page } from "./types";

interface PageHeaderProps {
  activePage: Page;
}

function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-1.5 border border-stone-200 bg-white px-2 py-1">
      <Icon className="h-2.5 w-2.5 text-stone-400" />
      <span className="font-['Instrument_Sans',sans-serif] text-[0.6rem] text-stone-400 uppercase tracking-[0.1em]">
        {label}
      </span>
      <span className="font-['Playfair_Display',serif] text-[0.78rem] text-stone-700">
        {value}
      </span>
    </div>
  );
}

export function PageHeader({ activePage }: PageHeaderProps) {
  // Dynamic content based on active page
  const getHeaderContent = () => {
    switch (activePage) {
      case "books":
        return {
          title: "Reading List",
          description: "Personal Financial & Retirement Planning",
          icon: <BookOpen className="h-4 w-4 text-[#1A5E4E]" />,
          statLabel: "Books in library",
          statValue: "Collection",
        };
      case "podcasts":
        return {
          title: "Podcast Shelf",
          description: "Conversations on finance & growth",
          icon: <Mic2 className="h-4 w-4 text-[#C9913A]" />,
          statLabel: "Latest episode",
          statValue: "Weekly",
        };
      case "blogs":
        return {
          title: "Blog Posts",
          description: "Notes on wealth & entrepreneurship",
          icon: <PenLine className="h-4 w-4 text-[#1A5E4E]" />,
          statLabel: "Recent insights",
          statValue: "New",
        };
      default:
        return {
          title: "Reading List",
          description: "Personal Financial & Retirement Planning",
          icon: <BookOpen className="h-4 w-4 text-[#1A5E4E]" />,
          statLabel: "Library",
          statValue: "Collection",
        };
    }
  };

  const content = getHeaderContent();

  return (
    <div className="mb-8 flex animate-in fade-in slide-in-from-bottom-3 flex-col gap-4 duration-500 delay-75 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {/* Author Brand Line */}
        <div className="mb-3 flex items-center gap-2">
          <div className="w-6 h-[2px] bg-gradient-to-r from-[#1A5E4E] to-[#C9913A] rounded-sm"></div>
          <p className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-stone-400">
            Jonathan Aggrey Bett
          </p>
          <div className="w-6 h-[2px] bg-gradient-to-l from-[#1A5E4E] to-[#C9913A] rounded-sm"></div>
        </div>

        {/* Main Title with Icon */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border border-stone-200 bg-white">
            {content.icon}
          </div>
          <h1 className="font-['Playfair_Display',serif] text-[2rem] leading-none tracking-[-0.02em] text-stone-900">
            {content.title}
          </h1>
        </div>

        {/* Description */}
        <p className="mt-2 max-w-md text-[0.7rem] text-stone-400 tracking-wide">
          {content.description}
        </p>
      </div>

      {/* Right side - Stats / Book Promotion */}
      <div className="flex items-center gap-2">
        <StatChip
          icon={Sparkles}
          label={content.statLabel}
          value={content.statValue}
        />

        {/* Book Divider */}
        <div className="hidden h-4 w-px bg-stone-200 sm:block" />

        {/* Featured Book Mention */}
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="text-[0.58rem] font-medium uppercase tracking-[0.1em] text-stone-300">
            Featured
          </span>
          <span className="font-['Playfair_Display',serif] text-[0.7rem] text-[#1A5E4E]">
            Personal Financial & Retirement Planning
          </span>
        </div>
      </div>
    </div>
  );
}
