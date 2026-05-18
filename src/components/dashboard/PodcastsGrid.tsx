import { Mic2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { GhostCard } from "./GhostCard";

interface PodcastsGridProps {
  onAddClick: () => void;
}

export function PodcastsGrid({ onAddClick }: PodcastsGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">


      <GhostCard type="podcast" onClick={onAddClick} delayIndex={5} />
    </div>
  );
}
