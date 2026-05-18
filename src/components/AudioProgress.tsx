"use client";

import { Play, Pause, Volume2 } from "lucide-react";

interface Props {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  isPlaying?: boolean;
  onPlayPause?: () => void;
}

export default function AudioProgress({
  currentTime,
  duration,
  onSeek,
  isPlaying,
  onPlayPause,
}: Props) {
  const percent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const format = (t: number) => {
    if (isNaN(t)) return "0:00";
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-full space-y-2">
      {/* Progress Bar */}
      <div className="relative group">
        <div
          className="relative h-1.5 w-full cursor-pointer rounded-full bg-stone-200"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const ratio = Math.max(0, Math.min(1, x / rect.width));
            onSeek(duration * ratio);
          }}
        >
          <div
            className="absolute left-0 top-0 h-1.5 rounded-full bg-amber-500 transition-all"
            style={{ width: `${percent}%` }}
          />
          <div
            className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-amber-600 opacity-0 transition-opacity group-hover:opacity-100"
            style={{ left: `calc(${percent}% - 6px)` }}
          />
        </div>
      </div>

      {/* Time Display */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-stone-500">{format(currentTime)}</span>
        <span className="font-mono text-stone-500">{format(duration)}</span>
      </div>
    </div>
  );
}
