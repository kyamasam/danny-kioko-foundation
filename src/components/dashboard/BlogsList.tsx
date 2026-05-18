import { TrendingUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogsListProps {
  onAddClick: () => void;
}

export function BlogsList({ onAddClick }: BlogsListProps) {
  return (
    <div className="space-y-2">


      <button
        onClick={onAddClick}
        className="anim-up d5 flex w-full items-center justify-center gap-2 border border-dashed border-stone-300 bg-transparent py-4 text-stone-400 transition-all hover:border-stone-500 hover:bg-stone-50 hover:text-stone-600"
      >
        <Plus className="h-4 w-4" />
        <span className="font-body text-[0.65rem] uppercase tracking-[0.14em]">
          New post
        </span>
      </button>
    </div>
  );
}
