"use client";

import { createContext, useContext, ReactNode } from "react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface AudioPlayerContextType {
  playingId: number | null;
  isLoading: boolean;
  play: (podcastId: number, audioUrl: string) => void;
  stop: () => void;
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined,
);

export function ClientAudioProvider({ children }: { children: ReactNode }) {
  const audioPlayer = useAudioPlayer();

  return (
    <AudioPlayerContext.Provider value={audioPlayer}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useClientAudio() {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error("useClientAudio must be used within a ClientAudioProvider");
  }
  return context;
}
