"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Book {
  id: number;
  title: string;
  short_description: string;
  cover_page_url: string;
}

interface HeroCarouselProps {
  books: Book[];
}

export function HeroCarousel({ books }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const currentBook = books[activeIndex];

  const goToSlide = (index: number) => {
    if (isTransitioning || books.length === 0) return;
    setIsTransitioning(true);
    setActiveIndex((index + books.length) % books.length);
    setTimeout(() => setIsTransitioning(false), 200);
  };

  const nextSlide = () => goToSlide(activeIndex + 1);
  const prevSlide = () => goToSlide(activeIndex - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === 0) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(0);
  };

  useEffect(() => {
    if (books.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, books.length]);

  if (!currentBook || books.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden flex items-center min-h-[560px] md:min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/library_2.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e2e26]/95 via-[#143c30]/88 to-[#0a231c]/70 z-0"></div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      ></div>

      <div className="max-w-[1580px] mx-auto px-4 sm:px-8 md:px-16 w-full relative z-10">
        {/* Main Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 lg:gap-20 py-8 md:py-12">
          {/* Left Arrow - Desktop */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center hover:bg-white/25 transition-all backdrop-blur-sm hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Content Area */}
          <div
            className="flex-1 text-center md:text-left transition-opacity duration-200 px-2"
            style={{ opacity: isTransitioning ? 0 : 1 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 lg:mb-8 max-w-full md:max-w-[680px]">
              {currentBook.title}
            </h1>

            {/* Rich Text Description - Pure Tailwind */}
            <div
              className="text-white/90 leading-relaxed text-base sm:text-lg mb-6 md:mb-8 lg:mb-10 max-w-full md:max-w-[660px] [&_p]:mb-3 [&_p]:leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_a]:text-[#3d9b82] [&_a]:underline [&_h3]:text-white [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mt-4 [&_h3]:mb-2"
              dangerouslySetInnerHTML={{
                __html:
                  currentBook.short_description ||
                  "<p>A comprehensive guide to entrepreneurship and business success.</p>",
              }}
            />

            <Link
              href={`/books/${currentBook.id}`}
              className="inline-block bg-[#3d9b82] hover:bg-[#5ab39c] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded font-semibold text-base sm:text-lg tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get This Book
            </Link>
          </div>

          {/* Book Cover with 3D Animation - Pure Tailwind */}
          <div className="shrink-0 w-48 sm:w-64 md:w-72 lg:w-[360px] [perspective:1000px]">
            <div className="transition-all duration-500 ease-out hover:scale-[1.02] [transform:rotateY(-16deg)_rotateX(3deg)] [transform-origin:left_center] hover:[transform:rotateY(-6deg)_rotateX(1deg)] [filter:drop-shadow(0_32px_56px_rgba(0,0,0,0.6))] hover:[filter:drop-shadow(0_40px_64px_rgba(0,0,0,0.7))]">
              <img
                src={currentBook.cover_page_url || "/book-placeholder.png"}
                alt={currentBook.title}
                className="w-full object-contain transition-opacity duration-200"
                style={{ opacity: isTransitioning ? 0 : 1 }}
              />
            </div>
          </div>

          {/* Right Arrow - Desktop */}
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center hover:bg-white/25 transition-all backdrop-blur-sm hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-6 pb-4">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Slide Indicators - Mobile */}
          <div className="flex gap-2">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-6 h-2 bg-[#3d9b82]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators - Desktop */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-10">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-1.5 bg-[#3d9b82]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Hint - Desktop Only */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-40">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
