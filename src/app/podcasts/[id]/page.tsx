"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Mic2,
  Clock,
  User,
  Calendar,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Share2,
  ChevronRight,
  Headphones,
  Tag,
  Lock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Podcast {
  id: number;
  title: string;
  host: string;
  cover_image_url: string;
  audio_url: string;
  duration: string;
  is_free: boolean;
  episode_number: number;
  short_description: string;
  long_description?: string;
  category?: string;
  tags?: string[];
  sources?: { name: string; url: string }[];
  created_at: string;
}

export default function PodcastDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await fetch(`/api/podcasts/${params.id}`);
        const result = await response.json();

        if (!result.success) throw new Error(result.error);
        setPodcast(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPodcast();
    }
  }, [params.id]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = ratio * duration;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDownload = () => {
    if (podcast?.audio_url) {
      const link = document.createElement("a");
      link.href = podcast.audio_url;
      link.download = `${podcast.title.replace(/\s+/g, "_")}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: podcast?.title,
          text: `Listen to "${podcast?.title}" with ${podcast?.host}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
          <p className="mt-4 text-stone-600">Loading episode...</p>
        </div>
      </div>
    );
  }

  if (error || !podcast) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border-2 border-stone-200 bg-white">
            <Mic2 className="h-8 w-8 text-stone-400" />
          </div>
          <h2 className="text-xl font-bold text-stone-900">
            Episode Not Found
          </h2>
          <p className="mt-2 text-stone-500">
            {error || "The episode you're looking for doesn't exist."}
          </p>
          <Button
            onClick={() => router.push("/dashboard/podcasts")}
            className="mt-6 rounded-none bg-stone-900 text-white hover:bg-stone-800"
          >
            Back to Podcasts
          </Button>
        </div>
      </div>
    );
  }

  const percentComplete = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={podcast.audio_url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to episodes
        </button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Cover Art */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-square overflow-hidden border-2 border-stone-200 bg-white shadow-lg">
                {podcast.cover_image_url ? (
                  <img
                    src={podcast.cover_image_url}
                    alt={podcast.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-amber-50">
                    <Mic2 className="h-16 w-16 text-amber-500" />
                    <p className="mt-4 text-sm text-amber-700">Episode Cover</p>
                  </div>
                )}
              </div>

              {/* Episode Badge */}
              <div className="mt-4 flex items-center justify-between">
                <Badge className="rounded-none bg-amber-100 text-amber-700">
                  Episode {podcast.episode_number}
                </Badge>
                {!podcast.is_free && (
                  <Badge className="rounded-none bg-emerald-100 text-emerald-700">
                    <Lock className="mr-1 h-3 w-3" />
                    Premium
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Episode Details */}
          <div className="lg:col-span-2">
            {/* Title & Host */}
            <div className="border-b border-stone-200 pb-6">
              <h1 className="text-3xl font-bold leading-tight text-stone-900 lg:text-4xl">
                {podcast.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-stone-500">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Hosted by {podcast.host}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {podcast.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(podcast.created_at)}
                </span>
              </div>
            </div>

            {/* Audio Player */}
            <div className="mt-6 border-2 border-stone-200 bg-white p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-2 w-2">
                    <div
                      className={`absolute h-2 w-2 animate-ping rounded-full bg-amber-500 ${
                        isPlaying ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div className="relative h-2 w-2 rounded-full bg-amber-500" />
                  </div>
                  <span className="text-sm font-medium text-amber-600">
                    {isPlaying ? "Now Playing" : "Ready to Play"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="rounded p-1 text-stone-400 transition-colors hover:text-stone-600"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="rounded p-1 text-stone-400 transition-colors hover:text-stone-600"
                    title="Share"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Play Button & Progress */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  className="flex h-14 w-14 items-center justify-center bg-amber-500 text-white transition-all hover:bg-amber-600 hover:scale-105"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6 fill-white" />
                  ) : (
                    <Play className="h-6 w-6 fill-white" />
                  )}
                </button>

                <div className="flex-1">
                  {/* Progress Bar */}
                  <div
                    className="relative h-1.5 cursor-pointer bg-stone-200"
                    onClick={handleSeek}
                  >
                    <div
                      className="absolute left-0 top-0 h-1.5 bg-amber-500 transition-all"
                      style={{ width: `${percentComplete}%` }}
                    />
                    <div
                      className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-amber-600 opacity-0 transition-opacity hover:opacity-100"
                      style={{ left: `calc(${percentComplete}% - 6px)` }}
                    />
                  </div>

                  {/* Time Labels */}
                  <div className="mt-2 flex justify-between text-xs text-stone-500">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="text-stone-400 hover:text-stone-600"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="h-1 w-20 cursor-pointer appearance-none bg-stone-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            {podcast.short_description && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                  About This Episode
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="leading-relaxed text-stone-600">
                    {podcast.short_description}
                  </p>
                </div>
              </div>
            )}

            {/* Category & Tags */}
            {(podcast.category ||
              (podcast.tags && podcast.tags.length > 0)) && (
              <div className="mt-6 border-t border-stone-200 pt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {podcast.category && (
                    <Badge
                      variant="outline"
                      className="rounded-none border-stone-300 bg-white"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {podcast.category}
                    </Badge>
                  )}
                  {podcast.tags?.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-none border-stone-300 bg-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Where to Listen */}
            {podcast.sources && podcast.sources.length > 0 && (
              <div className="mt-6 border-t border-stone-200 pt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Listen On
                </h3>
                <div className="flex flex-wrap gap-3">
                  {podcast.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-none border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 transition-all hover:border-amber-500 hover:text-amber-600"
                    >
                      <Headphones className="h-3.5 w-3.5" />
                      {source.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation to Next/Previous */}
            <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
              <button
                onClick={() =>
                  router.push(`/podcasts/${podcast.id - 1}`)
                }
                className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors disabled:opacity-50"
                disabled={podcast.id === 1}
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Episode
              </button>
              <button
                onClick={() =>
                  router.push(`/podcasts/${podcast.id + 1}`)
                }
                className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Next Episode
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
