import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookMarked, Headphones, PenLine } from "lucide-react";
import { type Page } from "./types";

interface QuickAddDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activePage: Page;
}

const addConfig = {
  books: {
    title: "Add a book",
    icon: BookMarked,
    fields: [
      {
        id: "title",
        label: "Title",
        placeholder: "The Design of Everyday Things",
      },
      { id: "author", label: "Author", placeholder: "Don Norman" },
      { id: "genre", label: "Genre", placeholder: "Design, Non-fiction" },
    ],
  },
  podcasts: {
    title: "Add a podcast",
    icon: Headphones,
    fields: [
      { id: "name", label: "Show name", placeholder: "99% Invisible" },
      { id: "host", label: "Host", placeholder: "Roman Mars" },
      {
        id: "url",
        label: "RSS / URL",
        placeholder: "https://feeds.example.com/rss",
      },
    ],
  },
  blogs: {
    title: "New blog post",
    icon: PenLine,
    fields: [
      {
        id: "title",
        label: "Title",
        placeholder: "Why good design is invisible",
      },
      {
        id: "slug",
        label: "Slug",
        placeholder: "why-good-design-is-invisible",
      },
      { id: "tags", label: "Tags", placeholder: "design, ux, culture" },
    ],
  },
};

export function QuickAddDialog({
  open,
  onOpenChange,
  activePage,
}: QuickAddDialogProps) {
  const cfg = addConfig[activePage];
  const AddIcon = cfg.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 rounded-none border-stone-200 bg-stone-50 p-0 shadow-2xl sm:max-w-sm">
        <div className="relative overflow-hidden bg-stone-900 px-6 py-5">
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-[radial-gradient(circle,_#d6d3d1_1px,_transparent_1px)] bg-[size:20px_20px] opacity-[0.15]" />
          <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-['Playfair_Display',serif] text-[6rem] leading-none text-white/[0.04]">
            {activePage === "books"
              ? "B"
              : activePage === "podcasts"
                ? "P"
                : "W"}
          </span>
          <DialogHeader className="relative z-10 space-y-1">
            <div className="mb-2 flex h-7 w-7 items-center justify-center border border-white/15">
              <AddIcon className="h-3.5 w-3.5 text-white/60" />
            </div>
            <DialogTitle className="font-['Playfair_Display',serif] text-[1.1rem] text-white/85">
              {cfg.title}
            </DialogTitle>
            <p className="font-['Instrument_Sans',sans-serif] text-[0.65rem] text-white/35 uppercase tracking-[0.12em]">
              Fill in the details below
            </p>
          </DialogHeader>
        </div>

        <div className="space-y-5 px-6 py-6">
          {cfg.fields.map((field) => (
            <div key={field.id}>
              <Label className="mb-1.5 block font-['Instrument_Sans',sans-serif] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-400">
                {field.label}
              </Label>
              <Input
                placeholder={field.placeholder}
                className="rounded-none border-none border-b border-stone-300 bg-transparent px-0 font-['Instrument_Sans',sans-serif] text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:ring-0"
              />
            </div>
          ))}

          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              onClick={() => onOpenChange(false)}
              className="group relative h-8 flex-1 overflow-hidden rounded-none bg-stone-900 font-['Instrument_Sans',sans-serif] text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white hover:bg-stone-800"
            >
              Save
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="h-8 rounded-none border border-stone-200 font-['Instrument_Sans',sans-serif] text-[0.65rem] text-stone-400 hover:bg-stone-100 hover:text-stone-700"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
