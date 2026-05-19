// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import {
  NewsletterBar,
  Navigation,
  HeroCarousel,
  BioSection,
  PortfolioSection,
  BookFeature,
  PodcastSection,
  BlogSection,
  SocialBar,
  Footer,
} from "@/components/landing";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface Book {
  id: number;
  title: string;
  short_description: string;
  description?: string;
  price: number;
  sale_price: number;
  cover_page_url: string;
  created_at: string;
}

interface Podcast {
  id: number;
  title: string;
  host: string;
  cover_image_url: string;
  audio_url: string;
  duration: string;
  is_free: boolean;
  episode_number: number;
  description?: string;
}

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  cover_image_url: string;
  read_time: number;
  is_free: boolean;
  slug: string;
}

export default function LandingPage() {
  const [recentBooks, setRecentBooks] = useState<Book[]>([]);
  const [recentPodcasts, setRecentPodcasts] = useState<Podcast[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState({
    books: true,
    podcasts: true,
    blogs: true,
  });

  const { playingId, isLoading, play, stop, currentTime, duration, seek } =
    useAudioPlayer();

  useEffect(() => {
    const fetchRecentBooks = async () => {
      try {
        const response = await fetch("/api/books?limit=4");
        const result = await response.json();
        if (result.success) setRecentBooks(result.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading((prev) => ({ ...prev, books: false }));
      }
    };

    const fetchRecentPodcasts = async () => {
      try {
        const response = await fetch("/api/podcasts?limit=5");
        const result = await response.json();
        if (result.success) setRecentPodcasts(result.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setLoading((prev) => ({ ...prev, podcasts: false }));
      }
    };

    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch("/api/blogs?limit=3");
        const result = await response.json();
        if (result.success) setRecentBlogs(result.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading((prev) => ({ ...prev, blogs: false }));
      }
    };

    fetchRecentBooks();
    fetchRecentPodcasts();
    fetchRecentBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <NewsletterBar />
      <Navigation />

      <main>
        <HeroCarousel books={recentBooks} />
        <BioSection />
        <PortfolioSection />

        {/* Books Section */}
        <div className="max-w-7xl mx-auto px-8 pt-10 ">
          <div className="w-11 h-[3px] bg-gradient-to-r from-[#1A5E4E] to-[#C9913A] rounded-sm mb-3"></div>
          <h2 className="text-3xl font-bold text-[#1A1A1A]">Books</h2>
        </div>

        {recentBooks.slice(0, recentBooks.length).map((book, index) => (
          <BookFeature key={book.id} book={book} index={index} />
        ))}

        <PodcastSection
          podcasts={recentPodcasts}
          loading={loading.podcasts}
          playingId={playingId}
          isLoading={isLoading}
          onPlay={play}
          onStop={stop}
          currentTime={currentTime}
          duration={duration}
          onSeek={seek}
        />

        <BlogSection blogs={recentBlogs} loading={loading.blogs} />
        <SocialBar />
      </main>

      <Footer />
    </div>
  );
}
