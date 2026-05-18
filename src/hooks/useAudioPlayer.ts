import { useCallback, useEffect, useRef, useState } from "react";

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingIdRef = useRef<number | null>(null);

  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // progress state
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* ---------------------------------- */
  /* Helpers                            */
  /* ---------------------------------- */

  const cleanup = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.src = "";
    audioRef.current = null;

    playingIdRef.current = null;
    setPlayingId(null);
    setIsLoading(false);
    setCurrentTime(0);
    setDuration(0);
  };

  /* ---------------------------------- */
  /* Play                               */
  /* ---------------------------------- */

  const play = useCallback((id: number, url: string) => {
    // toggle same track
    if (playingIdRef.current === id) {
      cleanup();
      return;
    }

    // stop previous
    cleanup();

    setIsLoading(true);

    const audio = new Audio(url);
    audioRef.current = audio;

    /* ---------- Events ---------- */

    audio.onloadedmetadata = () => {
      setDuration(audio.duration || 0);
    };

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.onended = cleanup;

    audio.onerror = () => {
      console.error("Audio error");
      cleanup();
    };

    /* ---------- Play ---------- */

    audio
      .play()
      .then(() => {
        playingIdRef.current = id;
        setPlayingId(id);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Playback blocked:", err);
        cleanup();
      });
  }, []);

  /* ---------------------------------- */
  /* Stop                               */
  /* ---------------------------------- */

  const stop = useCallback(() => {
    cleanup();
  }, []);

  /* ---------------------------------- */
  /* Seek (progress click support)      */
  /* ---------------------------------- */

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  /* ---------------------------------- */
  /* Cleanup on unmount                 */
  /* ---------------------------------- */

  useEffect(() => {
    return () => cleanup();
  }, []);

  /* ---------------------------------- */

  return {
    playingId,
    isLoading,
    play,
    stop,

    // progress data
    currentTime,
    duration,
    seek,
  };
}
