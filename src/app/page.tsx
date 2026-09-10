import type { Event } from "@/components/events/EventCard";
import { HeroSlider } from "@/components/hero/HeroSlider";
import type { Metadata } from "next";
import { pageMetadata } from "./seo";

export const metadata: Metadata = pageMetadata({
  title: "Washington Nonprofit for Children, Families & Youth",
  description:
    "Danny Kioko Foundation restores hope through youth mentorship, child welfare, education support, faith-based outreach, and community programs in the USA and East Africa.",
  path: "/",
});

export const dynamic = "force-dynamic";

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

async function getHeroSlides(): Promise<HeroSlide[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/hero-slides`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function getHomeEvents(): Promise<Event[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/events?limit=4`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const [slides, events] = await Promise.all([getHeroSlides(), getHomeEvents()]);
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSlider slides={slides} />

      {/* ABOUT DANNY KIOKO - PERSON */}
      <section className="relative isolate overflow-hidden bg-midnight px-8 pb-[60px] pt-[52px] text-white max-lg:px-6 max-sm:px-5 max-sm:pb-10 max-sm:pt-10"
        aria-labelledby="about-danny-kioko">
        <div className="pointer-events-none absolute -left-[80px] -top-[100px] z-0 h-[300px] w-[340px] rounded-[52%_0_0_57%/50%_0_0_56%] bg-release/20 max-sm:-left-[160px]"
          aria-hidden="true"></div>
        <div className="pointer-events-none absolute -bottom-[60px] -right-[20px] z-0 h-[200px] w-[240px] rotate-[12deg] rounded-[55%_45%_58%_42%/48%_52%_48%_52%] bg-release/10"
          aria-hidden="true"></div>

        <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-[380px_1fr] items-center gap-[48px] max-lg:grid-cols-1 max-lg:gap-8">
          <div className="relative max-lg:mx-auto max-lg:w-full max-lg:max-w-[400px]">
            <img className="h-[480px] w-full rounded-[32px] object-cover object-[50%_15%] shadow-[0_24px_48px_rgba(0,0,0,.45)] max-lg:h-[360px] max-sm:h-[400px] max-sm:rounded-[24px]"
              src="/danny-potrait.png"
              alt="Danny Kioko — Performing Artist, Youth Mentor &amp; Founder" />
            <div className="mt-3 text-center text-sm text-white/60">
              <span className="font-semibold text-release">Danny Kioko</span>
              <span className="mx-1">—</span>
              <span>Artist · Mentor · Founder</span>
            </div>
          </div>

          <div className="max-w-[580px] max-lg:max-w-3xl">
            <h2 id="about-danny-kioko"
              className="mb-[28px] flex flex-wrap items-end gap-x-[20px] gap-y-2 text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6 max-sm:text-[28px]">
              <span>About</span>
              <span className="border-b border-release pb-2 text-release">Danny Kioko</span>
            </h2>

            <p className="max-w-[560px] text-[15px] font-normal leading-[1.75] tracking-[.01em] text-white/85 max-sm:text-[15px] max-sm:leading-[1.65]">
              Danny Kioko is a passionate performing artist whose journey through music gave birth to a broader mission of inspiring and empowering the community. Through music, he became a dedicated youth mentor and founded <strong className="text-white">Safe Space Inc.</strong>, a youth mentorship program.
            </p>

            <p className="mt-4 max-w-[560px] text-[15px] font-normal leading-[1.75] tracking-[.01em] text-white/85 max-sm:text-[15px] max-sm:leading-[1.65]">
              His vision further grew through the founding of <strong className="text-white">DK Foundation Kenya (DKF Kenya)</strong>, which supports needy children by providing essential basic needs, and <strong className="text-white">DK Foundation USA</strong>, extending his commitment to creating opportunities and transforming lives.
            </p>

            <div className="mt-[28px] flex flex-wrap gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-release/20 text-release">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white leading-tight">Performing Artist</p>
                  <p className="text-[12px] text-white/55 leading-snug mt-[2px]">Music as a vehicle for community transformation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harvest/20 text-harvest">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white leading-tight">Youth Mentor</p>
                  <p className="text-[12px] text-white/55 leading-snug mt-[2px]">Founder of Safe Space Inc. mentorship program</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white leading-tight">Nonprofit Founder</p>
                  <p className="text-[12px] text-white/55 leading-snug mt-[2px]">DKF Kenya &amp; DK Foundation USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF ABOUT DANNY KIOKO */}

      {/* ABOUT DK FOUNDATION */}
      <section className="relative isolate overflow-hidden bg-[#f7f7f7] px-8 pb-[52px] pt-[36px] text-[#050505] max-lg:px-6 max-sm:px-5 max-sm:pb-10 max-sm:pt-8"
        aria-labelledby="about-foundation">
        <div className="pointer-events-none absolute -right-[96px] -top-[128px] z-0 h-[338px] w-[388px] rounded-[52%_0_0_57%/50%_0_0_56%] bg-release max-lg:-right-[150px] max-lg:-top-[150px] max-sm:-right-[190px] max-sm:-top-[180px]"
          aria-hidden="true"></div>
        <div className="pointer-events-none absolute right-[16px] top-[64px] z-0 h-[212px] w-[278px] rotate-[-17deg] rounded-[55%_45%_58%_42%/48%_52%_48%_52%] bg-release max-lg:right-[-72px] max-sm:right-[-140px] max-sm:top-[86px]"
          aria-hidden="true"></div>
        <div className="pointer-events-none absolute -bottom-[73px] -left-[5px] z-0 h-[154px] w-[182px] rounded-tl-none bg-[#fac844] max-sm:-bottom-[88px] max-sm:w-[142px]"
          aria-hidden="true">
          <div className="absolute -bottom-8 -left-8 h-[108px] w-[166px] rounded-[50%] bg-[#f7f7f7]"></div>
        </div>

        <div
          className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-[1fr_420px] items-center gap-[36px] max-lg:grid-cols-1 max-lg:gap-8">
          <div className="max-w-[560px] max-lg:max-w-3xl">
            <h2 id="about-foundation"
              className="mb-[28px] flex flex-wrap items-end gap-x-[20px] gap-y-2 text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6 max-sm:text-[28px]">
              <span>About</span>
              <span className="border-b border-release pb-2 text-release">DK Foundation</span>
            </h2>

            <p
              className="max-w-[560px] text-[15px] font-normal leading-[1.68] tracking-[.01em] text-black max-lg:text-[15px] max-sm:text-[15px] max-sm:leading-[1.65]">
              <strong>DK Foundation</strong> is a nonprofit organization
              established in Washington State, USA. We exist to mobilize
              resources, build strategic partnerships, and implement sustainable
              programs that improve lives and create lasting positive impact in
              communities across the United States and East Africa.
            </p>

            <p
              className="mt-3 max-w-[560px] text-[15px] font-normal leading-[1.68] tracking-[.01em] text-black max-lg:text-[15px] max-sm:text-[15px] max-sm:leading-[1.65]">
              Our work focuses on supporting vulnerable children and families,
              empowering youth through mentorship and leadership development,
              promoting community outreach through faith-based initiatives, and
              developing sustainable community resources such as children&apos;s
              centers, schools, and resource hubs.
            </p>

            <div className="mt-[22px] grid grid-cols-3 gap-3 max-w-[560px] max-sm:grid-cols-1 max-sm:max-w-full">
              <div className="rounded-[10px] bg-white border border-black/10 p-4 shadow-[0_6px_18px_rgba(20,18,14,.07)]">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-release/10 text-release">
                  <svg className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold text-ink leading-tight mb-1">
                  Support Children &amp; Families
                </h3>
                <p className="text-[12px] leading-[1.6] text-black/60">
                  Providing education, healthcare, nutrition, shelter, and
                  essential support services to disadvantaged children and
                  families.
                </p>
              </div>

              <div className="rounded-[10px] bg-white border border-black/10 p-4 shadow-[0_6px_18px_rgba(20,18,14,.07)]">
                <div
                  className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-harvest/30 text-[#a06800]">
                  <svg className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold text-ink leading-tight mb-1">
                  Empower Youth
                </h3>
                <p className="text-[12px] leading-[1.6] text-black/60">
                  Equipping young people with life skills, leadership training,
                  mentorship, and opportunities to reach their full potential.
                </p>
              </div>

              <div className="rounded-[10px] bg-white border border-black/10 p-4 shadow-[0_6px_18px_rgba(20,18,14,.07)]">
                <div
                  className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-midnight/10 text-midnight">
                  <svg className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold text-ink leading-tight mb-1">
                  Community Outreach
                </h3>
                <p className="text-[12px] leading-[1.6] text-black/60">
                  Strengthening communities through outreach programs, concerts,
                  Christian discipleship, counseling, and faith-based
                  initiatives.
                </p>
              </div>
            </div>

            <div className="mt-[18px] flex max-w-[280px] flex-col gap-[14px] max-sm:max-w-full">
              <a className="group inline-flex h-[42px] items-center justify-between rounded-full bg-release px-[32px] text-[15px] font-normal text-white transition hover:bg-[#ff642d] focus-visible:bg-[#ff642d] max-sm:h-12 max-sm:px-7 max-sm:text-[16px]"
                href="/dkf-africa/#our-mission">
                <span>Our Mission</span>
                <span className="text-[24px] leading-none transition group-hover:translate-x-1"
                  aria-hidden="true">→</span>
              </a>

              <a className="group inline-flex h-[42px] items-center justify-between rounded-full bg-midnight px-[32px] text-[15px] font-normal text-white transition hover:bg-[#173770] focus-visible:bg-[#173770] max-sm:h-12 max-sm:px-7 max-sm:text-[16px]"
                href="#">
                <span>Get Involved</span>
                <span className="text-[24px] leading-none transition group-hover:translate-x-1"
                  aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative max-lg:mx-auto max-lg:w-full max-lg:max-w-[560px]">
            <img className="h-[520px] w-full rounded-[32px] object-cover object-center shadow-[0_1px_0_rgba(255,255,255,.4)] max-lg:h-[340px] max-sm:h-[440px] max-sm:rounded-[24px]"
              src="/images/dkf_kenya/danny_kioko_foundation_happy_kids_with_danny.jpg"
              alt="DK Foundation — Danny Kioko with children in Kenya" />
            <div className="mt-3 text-center text-sm text-black/60 max-lg:text-left">
              <span className="font-semibold text-release">DK Foundation Kenya</span>
              <span className="mx-1">—</span>
              <span>Transforming lives, one child at a time</span>
            </div>
          </div>
        </div>
      </section>
      {/* END OF ABOUT DK FOUNDATION */}

      {/* EVENTS */}
      <section className="bg-white px-8 pb-[40px] pt-4 text-black max-lg:px-6 max-sm:px-5"
        aria-labelledby="recent-events">
        <div className="mx-auto max-w-[1120px]">
          <h2 id="recent-events"
            className="mb-[36px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-8">
            <span>Recent</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">Events</span>
          </h2>

          {events.length === 0 ? (
            <p className="col-span-3 py-10 text-center text-sm text-black/50">
              No events yet — check back soon.
            </p>
          ) : (
            <div
              className="grid grid-cols-3 gap-x-8 gap-y-[48px] max-lg:grid-cols-2 max-lg:gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-10">
              {events.map((event) => {
                const badge = event.published_at
                  ? new Date(event.published_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                  : "Upcoming";

                return (
                  <article key={event.id} className="event-card">
                    <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                      {event.title}
                    </h3>
                    <div className="relative overflow-hidden rounded-[16px]">
                      {event.cover_image ? (
                        <img
                          className="h-[170px] w-full object-cover object-center"
                          src={event.cover_image}
                          alt={event.title}
                        />
                      ) : (
                        <div className="h-[170px] w-full bg-gradient-to-br from-midnight to-release" />
                      )}
                      <div className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                        <span className="text-xs font-bold text-midnight">{badge}</span>
                      </div>
                    </div>
                    {event.excerpt && (
                      <div className="mt-[18px] flex flex-col gap-2">
                        <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                          {event.excerpt}
                        </p>
                      </div>
                    )}
                    <div className="mt-[14px] flex items-center justify-center gap-3">
                      <a
                        className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                        href={`/events/${event.slug}`}
                      >
                        Learn More
                      </a>
                      {event.cta_buttons?.map((btn, i) => (
                        <a
                          key={i}
                          className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                          href={btn.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {btn.label}
                        </a>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
      {/* EVENTS */}

      <section className="relative isolate overflow-hidden bg-[#f7f7f7] px-8 pb-10 pt-8 text-black max-lg:px-6 max-sm:px-5"
        aria-labelledby="dkf-title">
        <div className="pointer-events-none absolute -left-[70px] -top-[150px] h-[250px] w-[190px] rounded-[0_0_90px_90px] bg-[#fac844] max-sm:-left-[110px]"
          aria-hidden="true"></div>
        <div className="pointer-events-none absolute -left-[54px] top-[76px] h-[170px] w-[132px] rounded-full bg-[#fac844] max-sm:-left-[92px]"
          aria-hidden="true"></div>
        <div className="pointer-events-none absolute left-1/2 top-[-290px] -z-0 h-[980px] w-[1060px] -translate-x-1/2 rounded-[48%] border border-[#fac844]/80"
          aria-hidden="true"></div>

        <div className="relative z-10 mx-auto max-w-[980px] text-center">
          <h2 id="dkf-title"
            className="mb-6 text-[clamp(24px,2.8vw,34px)] font-normal leading-none tracking-normal">
            <span>Danny Kioko</span>
            <span
              className="ml-3 inline-block border-b border-release pb-3 text-release max-sm:ml-0 max-sm:mt-2">Foundation</span>
          </h2>

          <p className="mx-auto max-w-[850px] text-[15px] font-normal leading-[1.62] tracking-[.01em] max-sm:text-[14px]">
            The Danny Kioko Foundation (DKF) is a non-profit organization
            dedicated to improving the quality of life for underprivileged
            children and vulnerable communities in Kenya and beyond. The
            foundation was born out of the many cases of need that Danny
            encountered during his evangelism missions across Kenya and East
            Africa.
          </p>

          <div className="mt-[24px] grid grid-cols-3 gap-[32px] max-lg:gap-4 max-md:grid-cols-1">
            <div className="rounded-[12px] bg-[#fac844] px-6 py-4 text-white">
              <p className="font-mono text-[40px] leading-none tracking-[-.04em] max-lg:text-[34px]">
                1,000
              </p>
              <p className="mt-3 text-[14px] font-bold leading-none">
                Children Reached
              </p>
            </div>
            <div className="rounded-[12px] bg-midnight px-6 py-4 text-white">
              <p className="font-mono text-[40px] leading-none tracking-[-.04em] max-lg:text-[34px]">
                $ 50k
              </p>
              <p className="mt-3 text-[14px] font-bold leading-none">Raised</p>
            </div>
            <div className="rounded-[12px] bg-[#20d461] px-6 py-4 text-white">
              <p className="font-mono text-[40px] leading-none tracking-[-.04em] max-lg:text-[34px]">
                $ 50k
              </p>
              <p className="mt-3 text-[14px] font-bold leading-none">Raised</p>
            </div>
          </div>

          <div className="mt-[24px] flex items-end justify-between gap-6 text-left max-md:flex-col max-md:items-stretch">
            <div>
              <p className="mb-3 text-[17px] font-normal leading-none">
                Support Us Via:
              </p>
              <div className="flex flex-wrap gap-5">
                <a className="inline-flex h-[44px] min-w-[132px] items-center justify-center rounded-full border border-[#ead8df] bg-white px-6 text-[20px] font-extrabold text-[#34b557]"
                  href="#"
                  aria-label="Support via M-PESA">
                  <img className="h-[25px] w-auto object-contain"
                    src="/m-pesa-logo.png"
                    alt="M-PESA" />
                </a>
                <a className="inline-flex h-[44px] min-w-[132px] items-center justify-center gap-2 rounded-full border border-[#ead8df] bg-white px-6 text-[15px] font-extrabold text-[#1d4f99]"
                  href="#"
                  aria-label="Support via PayPal">
                  <img className="h-[22px] w-auto object-contain"
                    src="/paypal-logo.png"
                    alt="PayPal" />
                </a>
              </div>
            </div>

            <a className="inline-flex h-[42px] min-w-[220px] items-center justify-center gap-4 rounded-full bg-midnight px-8 text-[16px] font-normal text-white transition hover:bg-[#173770] max-sm:min-w-0 max-sm:w-full"
              href="/dkf-africa">
              More About DKF
              <span className="text-[22px]"
                aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
