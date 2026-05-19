"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
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
  duration_seconds?: number;
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

        // Set page title dynamically
        if (result.data?.title) {
          document.title = `${result.data.title} | The Psychology of Color in Marketing`;
        }
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const formatDateForSchema = (dateString: string) => {
    return new Date(dateString).toISOString();
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

  // Generate JSON-LD structured data for SEO
  const generateStructuredData = () => {
    if (!podcast) return null;

    return {
      "@context": "https://schema.org",
      "@type": "PodcastEpisode",
      name: podcast.title,
      episodeNumber: podcast.episode_number,
      description: podcast.short_description,
      duration: podcast.duration_seconds
        ? `PT${podcast.duration_seconds}S`
        : podcast.duration,
      datePublished: formatDateForSchema(podcast.created_at),
      image: podcast.cover_image_url || "/default-podcast-cover.jpg",
      audio: {
        "@type": "AudioObject",
        contentUrl: podcast.audio_url,
        encodingFormat: "audio/mpeg",
      },
      partOfSeries: {
        "@type": "PodcastSeries",
        name: "The Psychology of Color in Marketing",
        url: "https://jbett.netlify.app/podcasts",
      },
      author: {
        "@type": "Person",
        name: podcast.host,
      },
    };
  };

  const structuredData = generateStructuredData();

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading Episode | The Psychology of Color in Marketing</title>
          <meta name="robots" content="noindex, follow" />
        </Head>
        <div className="flex min-h-screen items-center justify-center bg-stone-50">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
            <p className="mt-4 text-stone-600">Loading episode...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !podcast) {
    return (
      <>
        <Head>
          <title>
            Episode Not Found | The Psychology of Color in Marketing
          </title>
          <meta name="robots" content="noindex, follow" />
        </Head>
        <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border-2 border-stone-200 bg-white">
              <Mic2 className="h-8 w-8 text-stone-400" />
            </div>
            <h1 className="text-xl font-bold text-stone-900">
              Episode Not Found
            </h1>
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
      </>
    );
  }

  const percentComplete = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{`${podcast.title} | The Psychology of Color in Marketing`}</title>
        <meta
          name="title"
          content={`${podcast.title} | The Psychology of Color in Marketing`}
        />
        <meta
          name="description"
          content={podcast.short_description.slice(0, 160)}
        />
        <meta
          name="keywords"
          content={`psychology of color, marketing psychology, color theory, ${podcast.category || ""}, ${podcast.tags?.join(", ") || ""}`}
        />
        <meta name="author" content={podcast.host} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Crawler Directives */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href={`https://jbett.netlify.app/podcasts/${podcast.id}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://jbett.netlify.app/podcasts/${podcast.id}`}
        />
        <meta property="og:title" content={podcast.title} />
        <meta
          property="og:description"
          content={podcast.short_description.slice(0, 160)}
        />
        <meta
          property="og:image"
          content={podcast.cover_image_url || "/default-podcast-cover.jpg"}
        />
        <meta
          property="og:image:alt"
          content={`Cover art for ${podcast.title}`}
        />
        <meta
          property="og:site_name"
          content="The Psychology of Color in Marketing"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://jbett.netlify.app/podcasts/${podcast.id}`}
        />
        <meta name="twitter:title" content={podcast.title} />
        <meta
          name="twitter:description"
          content={podcast.short_description.slice(0, 160)}
        />
        <meta
          name="twitter:image"
          content={podcast.cover_image_url || "/default-podcast-cover.jpg"}
        />

        {/* Additional SEO Tags */}
        <meta
          name="apple-mobile-web-app-title"
          content="Color Psychology Podcast"
        />
        <meta name="application-name" content="Color Psychology Podcast" />
        <meta name="theme-color" content="#f5f5f4" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-stone-50">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-white px-4 py-2 z-50"
        >
          Skip to main content
        </a>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={podcast.audio_url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          preload="metadata"
        />

        <div className="mx-auto max-w-6xl px-6 py-8">
          {/* Breadcrumb Navigation for SEO */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-stone-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
                <Link
                  href="/podcasts"
                  className="hover:text-stone-900 transition-colors"
                >
                  Podcasts
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
                <span className="text-stone-900" aria-current="page">
                  {podcast.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="group mb-8 flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to episodes
          </button>

          <div className="grid gap-8 lg:grid-cols-3" id="main-content">
            {/* Left Column - Cover Art */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-square overflow-hidden border-2 border-stone-200 bg-white shadow-lg">
                  {podcast.cover_image_url ? (
                    <img
                      src={podcast.cover_image_url}
                      alt={`Cover art for ${podcast.title}`}
                      className="h-full w-full object-cover"
                      loading="eager"
                      width={800}
                      height={800}
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-amber-50">
                      <Mic2
                        className="h-16 w-16 text-amber-500"
                        aria-hidden="true"
                      />
                      <p className="mt-4 text-sm text-amber-700">
                        Episode Cover
                      </p>
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
                      <Lock className="mr-1 h-3 w-3" aria-hidden="true" />
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
                    <User className="h-4 w-4" aria-hidden="true" />
                    Hosted by{" "}
                    <span className="font-medium text-stone-700">
                      {podcast.host}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={`PT${podcast.duration}`}>
                      {podcast.duration}
                    </time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={formatDateForSchema(podcast.created_at)}>
                      {formatDate(podcast.created_at)}
                    </time>
                  </span>
                </div>
              </div>

              {/* Audio Player */}
              <div className="mt-6 border-2 border-stone-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-2 w-2" aria-hidden="true">
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
                      title="Download episode"
                      aria-label="Download episode"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      onClick={handleShare}
                      className="rounded p-1 text-stone-400 transition-colors hover:text-stone-600"
                      title="Share episode"
                      aria-label="Share episode"
                    >
                      <Share2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Play Button & Progress */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="flex h-14 w-14 items-center justify-center bg-amber-500 text-white transition-all hover:bg-amber-600 hover:scale-105"
                    aria-label={isPlaying ? "Pause episode" : "Play episode"}
                  >
                    {isPlaying ? (
                      <Pause
                        className="h-6 w-6 fill-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <Play className="h-6 w-6 fill-white" aria-hidden="true" />
                    )}
                  </button>

                  <div className="flex-1">
                    {/* Progress Bar */}
                    <div
                      className="relative h-1.5 cursor-pointer bg-stone-200"
                      onClick={handleSeek}
                      role="slider"
                      aria-label="Seek progress"
                      aria-valuemin={0}
                      aria-valuemax={duration}
                      aria-valuenow={currentTime}
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
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Volume2 className="h-4 w-4" aria-hidden="true" />
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
                      aria-label="Volume control"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              {podcast.short_description && (
                <div className="mt-6">
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                    About This Episode
                  </h2>
                  <div className="prose prose-stone max-w-none">
                    <p className="leading-relaxed text-stone-600">
                      {podcast.short_description}
                    </p>
                    {podcast.long_description && (
                      <p className="leading-relaxed text-stone-600 mt-4">
                        {podcast.long_description}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Category & Tags */}
              {(podcast.category ||
                (podcast.tags && podcast.tags.length > 0)) && (
                <div className="mt-6 border-t border-stone-200 pt-6">
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                    Topics
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {podcast.category && (
                      <Badge
                        variant="outline"
                        className="rounded-none border-stone-300 bg-white"
                      >
                        <Tag className="mr-1 h-3 w-3" aria-hidden="true" />
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
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-400">
                    Listen On
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {podcast.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 rounded-none border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 transition-all hover:border-amber-500 hover:text-amber-600"
                      >
                        <Headphones
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {source.name}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation to Next/Previous */}
              <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
                <button
                  onClick={() => router.push(`/podcasts/${podcast.id - 1}`)}
                  className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors disabled:opacity-50"
                  disabled={podcast.id === 1}
                  aria-label="Previous episode"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Previous Episode
                </button>
                <button
                  onClick={() => router.push(`/podcasts/${podcast.id + 1}`)}
                  className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Next episode"
                >
                  Next Episode
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
