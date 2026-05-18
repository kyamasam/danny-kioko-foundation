import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface GhostCardProps {
  type: "book" | "podcast";
  onClick: () => void;
  delayIndex?: number;
}

export function GhostCard({ type, onClick, delayIndex = 5 }: GhostCardProps) {
  const label = type === "book" ? "Add book" : "Add podcast";

  return (
    <button
      onClick={onClick}
      className={cn(
        "anim-up flex flex-col items-center justify-center gap-2 border border-dashed border-stone-300 bg-transparent py-10 text-stone-400 transition-all hover:border-stone-500 hover:bg-stone-50 hover:text-stone-600",
        `d${delayIndex}`,
      )}
    >
      <Plus className="h-5 w-5" />
      <span className="font-body text-[0.65rem] uppercase tracking-[0.14em]">
        {label}
      </span>
    </button>
  );
}
