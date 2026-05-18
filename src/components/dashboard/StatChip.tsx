import React from "react";

interface StatChipProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

export function StatChip({ icon: Icon, label, value }: StatChipProps) {
  return (
    <div className="flex items-center gap-1.5 border border-stone-200 bg-white px-2 py-1">
      <Icon className="h-2.5 w-2.5 text-stone-400" />
      <span className="font-body text-[0.6rem] text-stone-400 uppercase tracking-[0.1em]">
        {label}
      </span>
      <span className="font-display text-[0.78rem] text-stone-700">
        {value}
      </span>
    </div>
  );
}
