import { TrendingUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { seedBlogs } from "./DashboardLayout";

interface BlogsListProps {
  onAddClick: () => void;
}

export function BlogsList({ onAddClick }: BlogsListProps) {
  return (
    <div className="space-y-2">
      {seedBlogs.map((post, i) => (
        <article
          key={post.id}
          className={cn(
            "card-lift anim-up group flex items-center gap-4 border border-stone-200 bg-white px-5 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md",
            `d${i + 1}`,
          )}
        >
          <div
            className={cn(
              "h-7 w-0.5 shrink-0 rounded-full transition-colors",
              post.status === "Published" ? "bg-emerald-400" : "bg-stone-300",
            )}
          />

          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
            <h2 className="font-display truncate text-[0.9rem] text-stone-900">
              {post.title}
            </h2>
            <p className="font-body text-[0.65rem] text-stone-400">
              {post.date}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            {post.reads > 0 && (
              <span className="flex items-center gap-1 font-body text-[0.65rem] text-stone-400">
                <TrendingUp className="h-3 w-3" />
                {post.reads.toLocaleString()}
              </span>
            )}
            <span
              className={cn(
                "rounded-none px-1.5 py-0.5 font-body text-[0.58rem] font-medium uppercase tracking-[0.1em]",
                post.status === "Published"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-stone-100 text-stone-600",
              )}
            >
              {post.status}
            </span>
          </div>
        </article>
      ))}

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
