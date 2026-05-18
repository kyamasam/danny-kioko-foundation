import { BookOpen, Star, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { GhostCard } from "./GhostCard";

interface BooksGridProps {
  onAddClick: () => void;
}

export function BooksGrid({ onAddClick }: BooksGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

      <GhostCard type="book" onClick={onAddClick} delayIndex={5} />
    </div>
  );
}
