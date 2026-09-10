"use client";

import React, { useState, useEffect, useCallback } from "react";

type HeroSlide = {
  id: string;
  label: string;
  label_accent_color: string;
  heading: string;
  subheading: string;
  image_url: string;
  image_position: string;
  button_label: string;
  button_url: string;
  sort_order: number;
};

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, slides.length]);

  if (slides.length === 0) return null;

  return (
    <section
      className="relative isolate h-[calc(100vh-105px)] min-h-[500px] bg-[#15121c] max-[980px]:h-[calc(100vh-101px)] max-sm:h-[calc(100vh-94px)]"
      aria-label="Featured slides"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className={`slide${index === active ? " is-active" : ""} absolute inset-0 grid place-items-center px-[70px] pb-[54px] pt-[58px] transition-[opacity,transform] duration-700 ease-out max-[980px]:px-[54px] max-[980px]:pb-[64px] max-[980px]:pt-[62px] max-sm:items-center max-sm:px-6 max-sm:pb-[76px] max-sm:pt-[58px]`}
            style={{ opacity: index === active ? 1 : 0, pointerEvents: index === active ? "auto" : "none" }}
            aria-hidden={index !== active}
          >
            <div
              className="absolute inset-0 -z-20 bg-cover"
              style={{
                backgroundImage: `url(${slide.image_url})`,
                backgroundPosition: slide.image_position,
              }}
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.55),rgba(18,16,28,.55)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]" />
            <div className="mt-1.5 w-full max-w-[760px] text-center">
              <div className="mb-[19px] inline-flex items-center justify-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal leading-tight text-white/95 max-sm:mb-[18px] max-sm:gap-[9px] max-sm:text-sm">
                <span
                  className="inline-block h-[3px] w-[52px] bg-white/80 max-sm:h-0.5 max-sm:w-7"
                  aria-hidden="true"
                />
                {slide.label}
                <span
                  className="inline-block h-[3px] w-[52px] max-sm:h-0.5 max-sm:w-7"
                  style={{ backgroundColor: slide.label_accent_color }}
                  aria-hidden="true"
                />
              </div>
              <h1 className="m-0 text-[clamp(40px,5.2vw,62px)] font-medium uppercase leading-none tracking-[.1em] text-white max-sm:text-[clamp(34px,12vw,48px)] max-sm:tracking-[.06em]">
                {slide.heading}
              </h1>
              <p className="m-0 mt-[30px] text-[clamp(18px,2vw,22px)] font-medium uppercase leading-tight tracking-[.01em] text-white max-sm:mt-[31px] max-sm:text-[19px]">
                {slide.subheading}
              </p>
              <a
                className="mt-11 inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[28px] text-[clamp(17px,1.8vw,20px)] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d] focus-visible:-translate-y-0.5 focus-visible:bg-[#ff642d] max-[980px]:mt-9 max-sm:mt-8 max-sm:h-[48px] max-sm:min-w-[154px] max-sm:text-[19px]"
                href={slide.button_url}
              >
                {slide.button_label}
              </a>
            </div>
          </article>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            className="slider-arrow prev absolute left-4 top-1/2 z-[5] -translate-y-1/2 inline-flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition hover:scale-[1.04] hover:bg-white/20 focus-visible:scale-[1.04] focus-visible:bg-white/20 max-sm:bottom-6 max-sm:left-[22px] max-sm:top-auto max-sm:translate-y-0 max-sm:h-11 max-sm:w-11"
            type="button"
            aria-label="Previous slide"
            onClick={prev}
          >
            <svg className="h-[25px] w-[25px] stroke-[1.7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
              <path d="M21 12H9" />
            </svg>
          </button>

          <button
            className="slider-arrow next absolute right-4 top-1/2 z-[5] -translate-y-1/2 inline-flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition hover:scale-[1.04] hover:bg-white/20 focus-visible:scale-[1.04] focus-visible:bg-white/20 max-sm:bottom-6 max-sm:right-[22px] max-sm:top-auto max-sm:translate-y-0 max-sm:h-11 max-sm:w-11"
            type="button"
            aria-label="Next slide"
            onClick={next}
          >
            <svg className="h-[25px] w-[25px] stroke-[1.7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
              <path d="M3 12h12" />
            </svg>
          </button>

          <div
            className="slider-dots absolute bottom-[82px] left-1/2 z-[6] flex -translate-x-1/2 items-center justify-center gap-1 max-sm:bottom-[38px]"
            aria-label="Slide controls"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </>
      )}

      <div
        className="absolute bottom-0 right-0 z-[4] h-[3px] w-[321px] bg-release max-sm:w-[34vw]"
        aria-hidden="true"
      />
    </section>
  );
}
