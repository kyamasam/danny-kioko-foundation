import {
  TrendingUp,
  Star,
  Clock,
  Headphones,
  FileText,
  PenLine,
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
  return (
    <div className="mb-8 flex animate-in fade-in slide-in-from-bottom-3 items-end justify-between duration-500 delay-75">
      <div>
        <p className="mb-1 flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-stone-400">
          <span className="block h-px w-4 bg-stone-300" />
          Your library
        </p>
        <h1 className="font-['Playfair_Display',serif] text-[2rem] leading-none tracking-[-0.02em] text-stone-900">
          {activePage === "books"
            ? "Reading list"
            : activePage === "podcasts"
              ? "Podcast shelf"
              : "Blog posts"}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {activePage === "books" && (
          <>
            <StatChip icon={TrendingUp} label="Reading" value="2" />
            <StatChip icon={Star} label="Finished" value="1" />
            <StatChip icon={Clock} label="Queued" value="1" />
          </>
        )}
        {activePage === "podcasts" && (
          <>
            <StatChip icon={Headphones} label="Shows" value="4" />
            <StatChip icon={TrendingUp} label="Episodes" value="2k+" />
          </>
        )}
        {activePage === "blogs" && (
          <>
            <StatChip icon={FileText} label="Published" value="2" />
            <StatChip icon={PenLine} label="Drafts" value="2" />
            <StatChip icon={TrendingUp} label="Reads" value="2.1k" />
          </>
        )}
      </div>
    </div>
  );
}
