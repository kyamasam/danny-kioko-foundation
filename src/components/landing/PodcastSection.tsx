"use client";

import Link from "next/link";
import { Play, Pause, Clock, Mic2, Headphones, ArrowRight } from "lucide-react";
import AudioProgress from "@/components/AudioProgress";

interface Podcast {
  id: number;
  title: string;
  host: string;
  cover_image_url: string;
  audio_url: string;
  duration: string;
  is_free: boolean;
  episode_number: number;
}

interface PodcastSectionProps {
  podcasts: Podcast[];
  loading: boolean;
  playingId: number | null;
  isLoading: boolean;
  onPlay: (id: number, url: string) => void;
  onStop: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export function PodcastSection({
  podcasts,
  loading,
  playingId,
  isLoading,
  onPlay,
  onStop,
  currentTime,
  duration,
  onSeek,
}: PodcastSectionProps) {
  const featuredPodcast = podcasts[0];
  const otherPodcasts = podcasts.slice(1, 5);

  if (loading && podcasts.length === 0) {
    return (
      <section className="bg-white py-16 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-48 bg-stone-200" />
            <div className="h-64 bg-stone-100" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-24 bg-stone-100" />
              <div className="h-24 bg-stone-100" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!featuredPodcast) return null;

  return (
    <section className="bg-white py-16 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-9 max-w-2xl">
          <div className="w-11 h-[3px] bg-gradient-to-r from-[#1A5E4E] to-[#C9913A] rounded-sm mb-3"></div>
          <div className="flex items-center gap-2 mb-2">
            <Headphones className="h-5 w-5 text-[#1A5E4E]" />
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Podcasts</h2>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed">
            In-depth conversations on finance, business strategy, and wealth
            building.
          </p>
        </div>

        {/* Featured Episode - Card Style matching Blog cards */}
        <div className="mb-12">
          <div className="group overflow-hidden border border-[#e7efec] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#cfe2dc] hover:shadow-[0_18px_42px_rgba(22,55,45,0.09)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Cover Image */}
              <Link
                href={`/podcasts/${featuredPodcast.id}`}
                className="md:col-span-4 lg:col-span-3 overflow-hidden"
              >
                <div className="relative aspect-square w-full bg-[#eaf4f0]">
                  {featuredPodcast.cover_image_url ? (
                    <img
                      src={featuredPodcast.cover_image_url}
                      alt={featuredPodcast.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Mic2 className="h-12 w-12 text-[#1A5E4E]/30" />
                    </div>
                  )}
                  {!featuredPodcast.is_free && (
                    <div className="absolute top-3 right-3 bg-stone-900/80 text-white text-[10px] font-medium px-2 py-1 rounded">
                      Premium
                    </div>
                  )}
                </div>
              </Link>

              {/* Content */}
              <div className="md:col-span-8 lg:col-span-7 p-6 md:p-0 md:py-6 md:pr-6">
                <div className="flex flex-col h-full">
                  {/* Featured Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C9913A] text-xs font-bold tracking-[0.08em] uppercase">
                      Featured Episode
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#C9913A]/30 to-transparent" />
                  </div>

                  {/* Title */}
                  <Link href={`/podcasts/${featuredPodcast.id}`}>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 text-[#1A1A1A] transition-colors duration-200 hover:text-[#1A5E4E]">
                      {featuredPodcast.title}
                    </h3>
                  </Link>

                  {/* Host */}
                  <p className="text-stone-500 text-sm mb-3">
                    with {featuredPodcast.host}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPodcast.duration}
                    </span>
                    <span>•</span>
                    <span>Episode {featuredPodcast.episode_number}</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/podcasts/${featuredPodcast.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A5E4E] hover:text-[#124034] transition-all duration-200 hover:gap-3 w-fit"
                  >
                    Listen Now
                    <Play className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Episodes Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {otherPodcasts.map((podcast) => {
            const isPlayable = podcast.audio_url?.includes(
              "storage/v1/object/public/library/podcasts/",
            );
            const isCurrentlyPlaying = playingId === podcast.id;

            return (
              <div
                key={podcast.id}
                className={`group border border-[#e7efec] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#cfe2dc] hover:shadow-[0_12px_24px_rgba(22,55,45,0.08)] ${
                  isCurrentlyPlaying ? "border-[#C9913A] bg-[#fef8ee]" : ""
                }`}
              >
                <div className="flex items-start gap-4 p-4">
                  {/* Cover Image */}
                  <Link
                    href={`/podcasts/${podcast.id}`}
                    className="relative h-16 w-16 shrink-0 overflow-hidden bg-[#eaf4f0] transition-opacity hover:opacity-80"
                  >
                    {podcast.cover_image_url ? (
                      <img
                        src={podcast.cover_image_url}
                        alt={podcast.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Mic2 className="h-6 w-6 text-[#1A5E4E]/30" />
                      </div>
                    )}
                    {!podcast.is_free && (
                      <div className="absolute top-1 right-1 bg-stone-900/80 text-white text-[8px] font-medium px-1 py-0.5 rounded">
                        Premium
                      </div>
                    )}
                  </Link>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#C9913A] text-[11px] font-bold tracking-wide">
                        EP {podcast.episode_number}
                      </span>
                    </div>
                    <Link href={`/podcasts/${podcast.id}`}>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] line-clamp-2 mb-1 transition-colors duration-200 hover:text-[#1A5E4E]">
                        {podcast.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-stone-500">{podcast.host}</p>

                    {/* Duration */}
                    <div className="flex items-center gap-1 mt-2 text-xs text-stone-400">
                      <Clock className="h-3 w-3" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>

                  {/* Play/Pause Button */}
                  <div className="shrink-0">
                    {isPlayable ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (isCurrentlyPlaying) {
                            onStop();
                          } else {
                            onPlay(podcast.id, podcast.audio_url);
                          }
                        }}
                        disabled={isLoading && !isCurrentlyPlaying}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A5E4E] text-white transition-all duration-200 hover:bg-[#124034] hover:scale-105 disabled:opacity-50"
                      >
                        {isLoading && !isCurrentlyPlaying ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : isCurrentlyPlaying ? (
                          <Pause className="h-4 w-4 fill-white" />
                        ) : (
                          <Play className="h-4 w-4 fill-white ml-0.5" />
                        )}
                      </button>
                    ) : (
                      <Link href={`/podcasts/${podcast.id}`}>
                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-400 transition-all duration-200 hover:border-[#1A5E4E] hover:text-[#1A5E4E]">
                          <Play className="h-4 w-4 ml-0.5" />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Audio Player Section */}
                {isPlayable && isCurrentlyPlaying && (
                  <div className="animate-in fade-in duration-300 border-t border-[#e7efec] bg-[#fef8ee] px-4 pb-4 pt-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-2 w-2">
                        <div className="absolute h-2 w-2 animate-ping rounded-full bg-[#C9913A] opacity-75" />
                        <div className="relative h-2 w-2 rounded-full bg-[#C9913A]" />
                      </div>
                      <span className="text-xs font-medium text-[#C9913A]">
                        Now Playing
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#C9913A]/30 to-transparent" />
                    </div>
                    <AudioProgress
                      currentTime={currentTime}
                      duration={duration}
                      onSeek={onSeek}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        {podcasts.length > 4 && (
          <div className="text-center mt-10">
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A5E4E] hover:text-[#124034] transition-all duration-200 hover:gap-3"
            >
              View All Episodes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
