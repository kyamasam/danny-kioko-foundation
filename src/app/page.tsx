// src/app/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "DK Foundation",
      subtitle: "Restoring Hope. Building Communities.",
      tag: "Nonprofit Organization",
      image: "/images/danny.jpg",
      cta: "Donate Now",
      ctaLink: "/donate",
    },
    {
      id: 2,
      title: "Safe Space",
      subtitle: "Empowering Youth Through Mentorship & Leadership",
      tag: "International Youth Project",
      image: "/images/safe.jpg",
      cta: "Learn More",
      ctaLink: "/safe-space",
    },
    {
      id: 3,
      title: "Danny Kioko Foundation",
      subtitle: "Restoring Hope for Vulnerable Children & Families",
      tag: "Transforming Lives in Africa",
      image: "/images/kids.jpg",
      cta: "Support Our Work",
      ctaLink: "/donate",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* ============================================================ */}
      {/* HERO SLIDES                                                  */}
      {/* ============================================================ */}

      <section
        className="relative h-screen w-full overflow-hidden"
        aria-label="DK Foundation hero slides"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute inset-0 grid place-items-center px-[70px] pb-[54px] pt-[58px] transition-[opacity,transform] duration-700 ease-out max-[980px]:px-[54px] max-[980px]:pb-[64px] max-[980px]:pt-[62px] max-sm:items-center max-sm:px-6 max-sm:pb-[76px] max-sm:pt-[58px] ${
              index === currentSlide ? "is-active" : ""
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 -z-20 bg-cover bg-center max-sm:bg-[position:53%_center]"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.51),rgba(18,16,28,.51)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]" />

            <div className="mt-1.5 w-full max-w-[760px] text-center">
              <div className="mb-[19px] inline-flex items-center justify-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal leading-tight text-white/95 before:h-[3px] before:w-[52px] before:bg-current before:opacity-80 after:h-[3px] after:w-[52px] after:bg-[#21d0c3] max-sm:mb-[18px] max-sm:gap-[9px] max-sm:text-sm max-sm:before:h-0.5 max-sm:before:w-7 max-sm:after:h-0.5 max-sm:after:w-7">
                {slide.tag}
              </div>

              <h1 className="m-0 text-[clamp(40px,5.2vw,62px)] font-medium uppercase leading-none tracking-[.1em] text-white max-sm:text-[clamp(34px,12vw,48px)] max-sm:tracking-[.06em]">
                {slide.title}
              </h1>

              <p className="m-0 mt-[30px] text-[clamp(18px,2vw,22px)] font-medium uppercase leading-tight tracking-[.01em] text-white max-sm:mt-[31px] max-sm:text-[19px]">
                {slide.subtitle}
              </p>

              <Link
                className="mt-11 inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[28px] text-[clamp(17px,1.8vw,20px)] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d] focus-visible:-translate-y-0.5 focus-visible:bg-[#ff642d] max-[980px]:mt-9 max-sm:mt-8 max-sm:h-[48px] max-sm:min-w-[154px] max-sm:text-[19px]"
                href={slide.ctaLink}
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}

        {/* Slide Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition hover:bg-white/90 ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}: ${slides[index].title}`}
            />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT / FOUNDER SECTION                                      */}
      {/* ============================================================ */}

      <section
        className="relative isolate overflow-hidden bg-[#f7f7f7] px-8 pb-[52px] pt-[36px] text-[#050505] max-lg:px-6 max-sm:px-5 max-sm:pb-10 max-sm:pt-8"
        aria-labelledby="about-foundation"
      >
        {/* Decorative Shapes */}
        <div className="pointer-events-none absolute -right-[96px] -top-[128px] z-0 h-[338px] w-[388px] rounded-[52%_0_0_57%/50%_0_0_56%] bg-release max-lg:-right-[150px] max-lg:-top-[150px] max-sm:-right-[190px] max-sm:-top-[180px]" />
        <div className="pointer-events-none absolute right-[16px] top-[64px] z-0 h-[212px] w-[278px] rotate-[-17deg] rounded-[55%_45%_58%_42%/48%_52%_48%_52%] bg-release max-lg:right-[-72px] max-sm:right-[-140px] max-sm:top-[86px]" />
        <div className="pointer-events-none absolute -bottom-[73px] -left-[5px] z-0 h-[154px] w-[182px] rounded-tl-none bg-[#fac844] max-sm:-bottom-[88px] max-sm:w-[142px]">
          <div className="absolute -bottom-8 -left-8 h-[108px] w-[166px] rounded-[50%] bg-[#f7f7f7]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-[1fr_420px] items-center gap-[36px] max-lg:grid-cols-1 max-lg:gap-8">
          <div className="max-w-[560px] max-lg:max-w-3xl">
            <h2
              id="about-foundation"
              className="mb-[28px] flex flex-wrap items-end gap-x-[20px] gap-y-2 text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6 max-sm:text-[28px]"
            >
              <span>About</span>
              <span className="border-b border-release pb-2 text-release">
                DK Foundation
              </span>
            </h2>

            <p className="max-w-[560px] text-[15px] font-normal leading-[1.68] tracking-[.01em] text-black max-lg:text-[15px] max-sm:text-[15px] max-sm:leading-[1.65]">
              <strong>DK Foundation</strong> is a nonprofit organization
              established in Washington State, USA. We exist to mobilize
              resources, build strategic partnerships, and implement sustainable
              programs that improve lives and create lasting positive impact in
              communities across the United States and East Africa.
            </p>

            <p className="mt-3 max-w-[560px] text-[15px] font-normal leading-[1.68] tracking-[.01em] text-black max-lg:text-[15px] max-sm:text-[15px] max-sm:leading-[1.65]">
              Our work focuses on supporting vulnerable children and families,
              empowering youth through mentorship and leadership development,
              promoting community outreach through faith-based initiatives, and
              developing sustainable community resources such as children's
              centers, schools, and resource hubs.
            </p>

            {/* Core Work Cards */}
            <div className="mt-[22px] grid grid-cols-3 gap-3 max-w-[560px] max-sm:grid-cols-1 max-sm:max-w-full">
              <div className="rounded-[10px] bg-white border border-black/10 p-4 shadow-[0_6px_18px_rgba(20,18,14,.07)]">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-release/10 text-release">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold text-ink leading-tight mb-1">
                  Support Children &amp; Families
                </h3>
                <p className="text-[12px] leading-[1.6] text-black/60">
                  Providing education, healthcare, nutrition, shelter, and
                  essential support services.
                </p>
              </div>

              <div className="rounded-[10px] bg-white border border-black/10 p-4 shadow-[0_6px_18px_rgba(20,18,14,.07)]">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-harvest/30 text-[#a06800]">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold text-ink leading-tight mb-1">
                  Empower Youth
                </h3>
                <p className="text-[12px] leading-[1.6] text-black/60">
                  Equipping young people with life skills, leadership training,
                  and mentorship.
                </p>
              </div>

              <div className="rounded-[10px] bg-white border border-black/10 p-4 shadow-[0_6px_18px_rgba(20,18,14,.07)]">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-midnight/10 text-midnight">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold text-ink leading-tight mb-1">
                  Community Outreach
                </h3>
                <p className="text-[12px] leading-[1.6] text-black/60">
                  Strengthening communities through faith-based initiatives and
                  service.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-[18px] flex max-w-[280px] flex-col gap-[14px] max-sm:max-w-full">
              <Link
                className="group inline-flex h-[42px] items-center justify-between rounded-full bg-release px-[32px] text-[15px] font-normal text-white transition hover:bg-[#ff642d] focus-visible:bg-[#ff642d] max-sm:h-12 max-sm:px-7 max-sm:text-[16px]"
                href="/about"
              >
                <span>Our Mission</span>
                <span
                  className="text-[24px] leading-none transition group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>

              <Link
                className="group inline-flex h-[42px] items-center justify-between rounded-full bg-midnight px-[32px] text-[15px] font-normal text-white transition hover:bg-[#173770] focus-visible:bg-[#173770] max-sm:h-12 max-sm:px-7 max-sm:text-[16px]"
                href="/donate"
              >
                <span>Get Involved</span>
                <span
                  className="text-[24px] leading-none transition group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative max-lg:mx-auto max-lg:w-full max-lg:max-w-[560px]">
            <Image
              className="h-[360px] w-full rounded-[32px] object-cover object-[50%_42%] shadow-[0_1px_0_rgba(255,255,255,.4)] max-lg:h-[340px] max-sm:h-[260px] max-sm:rounded-[24px]"
              src="/images/danny.jpg"
              alt="Evangelist Danny Kioko — Founder of DK Foundation"
              width={420}
              height={360}
              priority
            />
            <div className="mt-3 text-center text-sm text-black/60 max-lg:text-left">
              <span className="font-semibold text-release">
                Evangelist Danny Kioko
              </span>
              <span className="mx-1">&mdash;</span>
              <span>Founder, DK Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RECENT EVENTS SECTION                                        */}
      {/* ============================================================ */}

      <section
        className="bg-white px-8 pb-[40px] pt-4 text-black max-lg:px-6 max-sm:px-5"
        aria-labelledby="recent-events"
        id="events"
      >
        <div className="mx-auto max-w-[1120px]">
          <h2
            id="recent-events"
            className="mb-[36px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-8"
          >
            <span>Recent</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Events
            </span>
          </h2>

          <div className="grid grid-cols-4 gap-x-8 gap-y-[48px] max-lg:grid-cols-2 max-lg:gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-10">
            {/* Event 1: Safe Space GALA 2027 */}
            <article className="event-card">
              <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                Safe Space GALA 2027
              </h3>
              <div className="relative overflow-hidden rounded-[16px]">
                <Image
                  className="h-[170px] w-full object-cover object-center"
                  src="/images/safe.jpg"
                  alt="Safe Space GALA 2027 event"
                  width={400}
                  height={170}
                />
                <div className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                  <span className="text-xs font-bold text-midnight">
                    May 29, 2027
                  </span>
                </div>
              </div>
              <div className="mt-[18px] flex flex-col gap-2">
                <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                  Uniting Communities. Transforming Children's Lives.
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                  <span>Washington State, USA</span>
                  <span>•</span>
                  <span>Tickets Soon</span>
                </div>
              </div>
              <div className="mt-[14px] flex items-center justify-center gap-3">
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                  href="/safe-space-gala"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                  href="/donate"
                >
                  Donate
                </Link>
              </div>
            </article>

            {/* Event 2: Children's Hope Center */}
            <article className="event-card">
              <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                Children's Hope Center
              </h3>
              <div className="relative overflow-hidden rounded-[16px]">
                <Image
                  className="h-[170px] w-full object-cover object-center"
                  src="/images/kids.jpg"
                  alt="Children's Hope and Empowerment Center"
                  width={400}
                  height={170}
                />
                <div className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                  <span className="text-xs font-bold text-midnight">
                    Fundraising
                  </span>
                </div>
              </div>
              <div className="mt-[18px] flex flex-col gap-2">
                <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                  $3M project in Karen, Nairobi — safe home, education,
                  healthcare, and mentorship.
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                  <span>Nairobi, Kenya</span>
                  <span>•</span>
                  <span>Goal: $3M</span>
                </div>
              </div>
              <div className="mt-[14px] flex items-center justify-center gap-3">
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                  href="/safe-space-gala"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                  href="/donate"
                >
                  Donate Now
                </Link>
              </div>
            </article>

            {/* Event 3: Youth Mentorship Program */}
            <article className="event-card">
              <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                Youth Mentorship Program
              </h3>
              <div className="relative overflow-hidden rounded-[16px]">
                <Image
                  className="h-[170px] w-full object-cover object-center"
                  src="/images/danny.jpg"
                  alt="Danny Kioko youth mentorship program"
                  width={400}
                  height={170}
                />
                <div className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                  <span className="text-xs font-bold text-midnight">
                    Monthly
                  </span>
                </div>
              </div>
              <div className="mt-[18px] flex flex-col gap-2">
                <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                  Empowering youth through mentorship, leadership training, and
                  life-skills development.
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                  <span>Washington State</span>
                  <span>•</span>
                  <span>Open to All</span>
                </div>
              </div>
              <div className="mt-[14px] flex items-center justify-center gap-3">
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                  href="/safe-space"
                >
                  Join Us
                </Link>
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                  href="/donate"
                >
                  Volunteer
                </Link>
              </div>
            </article>

            {/* Event 4: East Africa Outreach */}
            <article className="event-card">
              <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                East Africa Outreach
              </h3>
              <div className="relative overflow-hidden rounded-[16px]">
                <Image
                  className="h-[170px] w-full object-cover object-center"
                  src="/images/shosh.jpg"
                  alt="East Africa community outreach"
                  width={400}
                  height={170}
                />
                <div className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                  <span className="text-xs font-bold text-midnight">
                    Ongoing
                  </span>
                </div>
              </div>
              <div className="mt-[18px] flex flex-col gap-2">
                <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                  Supporting vulnerable children and families with education,
                  nutrition, healthcare, and spiritual care.
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                  <span>Kenya &amp; East Africa</span>
                  <span>•</span>
                  <span>100+ Children Supported</span>
                </div>
              </div>
              <div className="mt-[14px] flex items-center justify-center gap-3">
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                  href="/about"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                  href="/donate"
                >
                  Sponsor a Child
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DONATE / CTA SECTION                                         */}
      {/* ============================================================ */}

      <section
        className="bg-midnight px-8 py-[60px] text-white max-lg:px-6 max-sm:px-5 max-sm:py-12"
        id="donate"
      >
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(28px,3.2vw,38px)] font-medium uppercase leading-none tracking-[.06em]">
            Partner With Us
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-white/80 max-sm:text-[15px]">
            Together, we can break the cycle of poverty by giving vulnerable
            children hope, protection, education, and the opportunity to build a
            better future.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[32px] text-[17px] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d]"
              href="/donate"
            >
              Donate Now
            </Link>
            <Link
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] border border-white/30 px-[32px] text-[17px] font-medium text-white transition hover:bg-white/10"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-6 flex flex-col items-center gap-1 text-sm text-white/60">
            <span>Every gift transforms a life.</span>
            <span>DK Foundation &mdash; 501(c)(3) Nonprofit Organization</span>
          </div>
        </div>
      </section>
    </>
  );
}
