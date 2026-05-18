import { Mic2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { seedPodcasts } from "./DashboardLayout";
import { GhostCard } from "./GhostCard";

interface PodcastsGridProps {
  onAddClick: () => void;
}

export function PodcastsGrid({ onAddClick }: PodcastsGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {seedPodcasts.map((pod, i) => (
        <article
          key={pod.id}
          className={cn(
            "card-lift anim-up group relative flex flex-col border border-stone-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
            `d${i + 1}`,
          )}
        >
          <div className="absolute left-0 top-0 h-full w-0.5 bg-stone-200 transition-colors group-hover:bg-stone-800" />

          <div className="mb-3 flex h-9 w-9 items-center justify-center border border-stone-200 bg-stone-50">
            <Mic2 className="h-4 w-4 text-stone-400" />
          </div>

          <h2 className="font-display mb-0.5 text-[0.9rem] leading-snug text-stone-900">
            {pod.name}
          </h2>
          <p className="mb-3 font-body text-[0.72rem] text-stone-400">
            {pod.host}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <span className="rounded-none bg-stone-100 px-1.5 py-0.5 font-body text-[0.58rem] text-stone-500">
              {pod.tag}
            </span>
            <span className="font-body text-[0.62rem] text-stone-400">
              {pod.episodes} eps
            </span>
          </div>
        </article>
      ))}

      <GhostCard type="podcast" onClick={onAddClick} delayIndex={5} />
    </div>
  );
}
