import type { Metadata } from "next";
import { pageMetadata } from "./seo";

export const metadata: Metadata = pageMetadata({
  title: "Washington Nonprofit for Children, Families & Youth",
  description:
    "Danny Kioko Foundation restores hope through youth mentorship, child welfare, education support, faith-based outreach, and community programs in the USA and East Africa.",
  path: "/",
});

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
    <section className="relative isolate h-[calc(100vh-105px)] min-h-[500px] bg-[#15121c] max-[980px]:h-[calc(100vh-101px)] max-sm:h-[calc(100vh-94px)]"
                 aria-label="Featured music">
          <div className="absolute inset-0">
            <article
                     className="slide is-active absolute inset-0 grid place-items-center px-[70px] pb-[54px] pt-[58px] transition-[opacity,transform] duration-700 ease-out max-[980px]:px-[54px] max-[980px]:pb-[64px] max-[980px]:pt-[62px] max-sm:items-center max-sm:px-6 max-sm:pb-[76px] max-sm:pt-[58px]">
              <div
                   className="absolute inset-0 -z-20 bg-[url(/images/shosh.jpg)] bg-cover bg-center max-sm:bg-[position:53%_center]">
              </div>
              <div
                   className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.51),rgba(18,16,28,.51)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]">
              </div>
              <div className="mt-1.5 w-full max-w-[760px] text-center">
                <div
                     className="mb-[19px] inline-flex items-center justify-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal leading-tight text-white/95 before:h-[3px] before:w-[52px] before:bg-current before:opacity-80 after:h-[3px] after:w-[52px] after:bg-[#21d0c3] max-sm:mb-[18px] max-sm:gap-[9px] max-sm:text-sm max-sm:before:h-0.5 max-sm:before:w-7 max-sm:after:h-0.5 max-sm:after:w-7">
                  Nonprofit Organization
                </div>
                <h1
                    className="m-0 text-[clamp(40px,5.2vw,62px)] font-medium uppercase leading-none tracking-[.1em] text-white max-sm:text-[clamp(34px,12vw,48px)] max-sm:tracking-[.06em]">
                  DK Foundation
                </h1>
                <p
                   className="m-0 mt-[30px] text-[clamp(18px,2vw,22px)] font-medium uppercase leading-tight tracking-[.01em] text-white max-sm:mt-[31px] max-sm:text-[19px]">
                  Restoring Hope. Building Communities.
                </p>
                <a className="mt-11 inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[28px] text-[clamp(17px,1.8vw,20px)] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d] focus-visible:-translate-y-0.5 focus-visible:bg-[#ff642d] max-[980px]:mt-9 max-sm:mt-8 max-sm:h-[48px] max-sm:min-w-[154px] max-sm:text-[19px]"
                   href="https://dannykioko.org/give/">
                  Donate Now
                </a>
              </div>
            </article>
    
            <article
                     className="slide absolute inset-0 grid place-items-center px-[70px] pb-[54px] pt-[58px] transition-[opacity,transform] duration-700 ease-out max-[980px]:px-[54px] max-[980px]:pb-[64px] max-[980px]:pt-[62px] max-sm:items-center max-sm:px-6 max-sm:pb-[76px] max-sm:pt-[58px]">
              <div
                   className="absolute inset-0 -z-20 bg-[url(/images/youth_usa/danny_kioko_with_kids_mentoring.jpg)] bg-cover bg-center">
              </div>
              <div
                   className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.58),rgba(18,16,28,.58)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]">
              </div>
              <div className="mt-1.5 w-full max-w-[760px] text-center">
                <div
                     className="mb-[19px] inline-flex items-center justify-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal leading-tight text-white/95 before:h-[3px] before:w-[52px] before:bg-current before:opacity-80 after:h-[3px] after:w-[52px] after:bg-[#fac844] max-sm:mb-[18px] max-sm:gap-[9px] max-sm:text-sm max-sm:before:h-0.5 max-sm:before:w-7 max-sm:after:h-0.5 max-sm:after:w-7">
                  Youth Empowerment
                </div>
                <h1
                    className="m-0 text-[clamp(40px,5.2vw,62px)] font-medium uppercase leading-none tracking-[.1em] text-white max-sm:text-[clamp(34px,12vw,48px)] max-sm:tracking-[.06em]">
                  Mentorship Program
                </h1>
                <p
                   className="m-0 mt-[30px] text-[clamp(18px,2vw,22px)] font-medium uppercase leading-tight tracking-[.01em] text-white max-sm:mt-[31px] max-sm:text-[19px]">
                  Equipping the Next Generation.
                </p>
                <a className="mt-11 inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[28px] text-[clamp(17px,1.8vw,20px)] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d] focus-visible:-translate-y-0.5 focus-visible:bg-[#ff642d] max-[980px]:mt-9 max-sm:mt-8 max-sm:h-[48px] max-sm:min-w-[154px] max-sm:text-[19px]"
                   href="#">
                  Get Involved
                </a>
              </div>
            </article>
    
            <article
                     className="slide absolute inset-0 grid place-items-center px-[70px] pb-[54px] pt-[58px] transition-[opacity,transform] duration-700 ease-out max-[980px]:px-[54px] max-[980px]:pb-[64px] max-[980px]:pt-[62px] max-sm:items-center max-sm:px-6 max-sm:pb-[76px] max-sm:pt-[58px]">
              <div
                   className="absolute inset-0 -z-20 bg-[url(/images/youth_usa/danny_kioko_foundation_usa_meetup.jpg)] bg-cover bg-center">
              </div>
              <div
                   className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.58),rgba(18,16,28,.58)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]">
              </div>
              <div className="mt-1.5 w-full max-w-[760px] text-center">
                <div
                     className="mb-[19px] inline-flex items-center justify-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal leading-tight text-white/95 before:h-[3px] before:w-[52px] before:bg-current before:opacity-80 after:h-[3px] after:w-[52px] after:bg-[#21d0c3] max-sm:mb-[18px] max-sm:gap-[9px] max-sm:text-sm max-sm:before:h-0.5 max-sm:before:w-7 max-sm:after:h-0.5 max-sm:after:w-7">
                  Upcoming Event
                </div>
                <h1
                    className="m-0 text-[clamp(40px,5.2vw,62px)] font-medium uppercase leading-none tracking-[.1em] text-white max-sm:text-[clamp(34px,12vw,48px)] max-sm:tracking-[.06em]">
                  Safe Space Gala
                </h1>
                <p
                   className="m-0 mt-[30px] text-[clamp(18px,2vw,22px)] font-medium uppercase leading-tight tracking-[.01em] text-white max-sm:mt-[31px] max-sm:text-[19px]">
                  Uniting Communities. May 29, 2027.
                </p>
                <a className="mt-11 inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[28px] text-[clamp(17px,1.8vw,20px)] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d] focus-visible:-translate-y-0.5 focus-visible:bg-[#ff642d] max-[980px]:mt-9 max-sm:mt-8 max-sm:h-[48px] max-sm:min-w-[154px] max-sm:text-[19px]"
                   href="safe-space-gala.html">
                  Learn More
                </a>
              </div>
            </article>
          </div>
    
          <button className="slider-arrow prev absolute left-4 top-1/2 z-[5] -translate-y-1/2 inline-flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition hover:scale-[1.04] hover:bg-white/20 focus-visible:scale-[1.04] focus-visible:bg-white/20 max-sm:bottom-6 max-sm:left-[22px] max-sm:top-auto max-sm:translate-y-0 max-sm:h-11 max-sm:w-11"
                  type="button"
                  aria-label="Previous slide">
            <svg className="h-[25px] w-[25px] stroke-[1.7]"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
              <path d="M21 12H9" />
            </svg>
          </button>
    
          <button className="slider-arrow next absolute right-4 top-1/2 z-[5] -translate-y-1/2 inline-flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition hover:scale-[1.04] hover:bg-white/20 focus-visible:scale-[1.04] focus-visible:bg-white/20 max-sm:bottom-6 max-sm:right-[22px] max-sm:top-auto max-sm:translate-y-0 max-sm:h-11 max-sm:w-11"
                  type="button"
                  aria-label="Next slide">
            <svg className="h-[25px] w-[25px] stroke-[1.7]"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
              <path d="M3 12h12" />
            </svg>
          </button>
    
          <div className="slider-dots absolute bottom-[82px] left-1/2 z-[6] flex -translate-x-1/2 items-center justify-center gap-1 max-sm:bottom-[38px]"
               aria-label="Slide controls"></div>
          <div className="absolute bottom-0 right-0 z-[4] h-[3px] w-[321px] bg-release max-sm:w-[34vw]"
               aria-hidden="true"></div>
        </section>
    
        {/* ABOUT DANNY */}
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
                   href="about.html#mission-title">
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
              <img className="h-[520px] w-full rounded-[32px] object-cover object-[50%_42%] shadow-[0_1px_0_rgba(255,255,255,.4)] max-lg:h-[340px] max-sm:h-[440px] max-sm:rounded-[24px]"
                   src="/danny-potrait.png"
                   alt="Evangelist Danny Kioko — Founder of DK Foundation" />
              <div className="mt-3 text-center text-sm text-black/60 max-lg:text-left">
                <span className="font-semibold text-release">Evangelist Danny Kioko</span>
                <span className="mx-1">—</span>
                <span>Founder, DK Foundation</span>
              </div>
            </div>
          </div>
        </section>
        {/* END OF ABOUT DANNY */}
    
        {/* EVENTS */}
        <section className="bg-white px-8 pb-[40px] pt-4 text-black max-lg:px-6 max-sm:px-5"
                 aria-labelledby="recent-events">
          <div className="mx-auto max-w-[1120px]">
            <h2 id="recent-events"
                className="mb-[36px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-8">
              <span>Recent</span>
              <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">Events</span>
            </h2>
    
            <div
                 className="grid grid-cols-3 gap-x-8 gap-y-[48px] max-lg:grid-cols-2 max-lg:gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-10">
              {/* Event 1: Safe Space GALA 2027 */}
              <article className="event-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Safe Space GALA 2027
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/images/youth_usa/danny_kioko_foundation_usa_meetup.jpg"
                       alt="Safe Space GALA 2027 event" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                    <span className="text-xs font-bold text-midnight">May 29, 2027</span>
                  </div>
                </div>
                <div className="mt-[18px] flex flex-col gap-2">
                  <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                    Uniting Communities. Transforming Children&apos;s Lives.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                    <span>Washington State, USA</span>
                    <span>•</span>
                    <span>Tickets Soon</span>
                  </div>
                </div>
                <div className="mt-[14px] flex items-center justify-center gap-3">
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                     href="safe-space-gala.html">
                    Learn More
                  </a>
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                     href="https://dannykioko.org/give/">
                    Donate
                  </a>
                </div>
              </article>
    
              {/* Event 2: Children&apos;s Hope & Empowerment Center */}
              <article className="event-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Children&apos;s Hope Center
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/images/kids.jpg"
                       alt="Children&apos;s Hope and Empowerment Center" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                    <span className="text-xs font-bold text-midnight">Fundraising</span>
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
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                     href="about.html">
                    Learn More
                  </a>
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                     href="https://dannykioko.org/give/">
                    Donate Now
                  </a>
                </div>
              </article>
    
              {/* Event 3: Youth Mentorship & Leadership Training */}
              <article className="event-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Youth Mentorship Program
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/images/youth_usa/danny_kioko_with_kids_mentoring.jpg"
                       alt="Danny Kioko youth mentorship program" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                    <span className="text-xs font-bold text-midnight">Monthly</span>
                  </div>
                </div>
                <div className="mt-[18px] flex flex-col gap-2">
                  <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                    Empowering youth through mentorship, leadership training, and
                    life-skills development in Washington State.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                    <span>Washington State</span>
                    <span>•</span>
                    <span>Open to All</span>
                  </div>
                </div>
                <div className="mt-[14px] flex items-center justify-center gap-3">
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                     href="the-light.html">
                    Join Us
                  </a>
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                     href="#">
                    Volunteer
                  </a>
                </div>
              </article>
    
              {/* Event 4: Community Outreach - East Africa */}
              <article className="event-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  East Africa Outreach
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/images/shosh.jpg"
                       alt="East Africa community outreach" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] -translate-x-1/2 items-center justify-center rounded bg-white/90 px-4 text-black shadow-sm">
                    <span className="text-xs font-bold text-midnight">Ongoing</span>
                  </div>
                </div>
                <div className="mt-[18px] flex flex-col gap-2">
                  <p className="text-[13px] leading-[1.5] text-black/80 text-center">
                    Supporting vulnerable children and families with education,
                    nutrition, healthcare, and spiritual care across Kenya and
                    East Africa.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                    <span>Kenya &amp; East Africa</span>
                    <span>•</span>
                    <span>100+ Children Supported</span>
                  </div>
                </div>
                <div className="mt-[14px] flex items-center justify-center gap-3">
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                     href="about.html">
                    Learn More
                  </a>
                  <a className="inline-flex h-[34px] items-center justify-center rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                     href="#">
                    Sponsor a Child
                  </a>
                </div>
              </article>
            </div>
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
                 href="about.html">
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
