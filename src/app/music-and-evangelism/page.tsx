import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Music & Evangelism",
  description:
    "Explore Danny Kioko's gospel music and evangelism ministry supporting DK Foundation outreach, youth mentorship, worship, and community impact in the USA and East Africa.",
  path: "/music-and-evangelism",
  image: [
    {
      url: "/images/home/danny_kioko_passport_portrait.jpg",
      width: 864,
      height: 1296,
      alt: "Danny Kioko gospel artist and founder of Danny Kioko Foundation",
    },
  ],
});

export const dynamic = "force-dynamic";

export default function MusicAndEvangelismPage() {
  return (
    <main className="min-h-screen overflow-hidden  border-x-2 max-sm:border-x-0">
    <section className="relative isolate overflow-hidden bg-[#f8f7f4] px-8 pb-12 pt-14 text-ink max-lg:px-6 max-sm:px-5 max-sm:pb-10 max-sm:pt-10"
                 aria-labelledby="music-evangelism-hero">
          <div className="vertical-dots absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-8 max-md:hidden"
               aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
    
          <div className="relative z-10 mx-auto max-w-[1160px] text-center">
            <p
               className="mx-auto mb-5 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[.22em] text-release">
              <span className="h-[3px] w-[42px] bg-release"
                    aria-hidden="true"></span>
              Gospel music, worship, crusades, mentorship
            </p>
            <h1 id="music-evangelism-hero"
                className="mx-auto max-w-[940px] text-[clamp(44px,7vw,92px)] font-extrabold uppercase leading-[.9] tracking-normal">
              Music &amp; Evangelism
            </h1>
            <p className="mx-auto mt-5 max-w-[670px] text-[17px] leading-[1.65] text-black/70 max-sm:text-[15px]">
              A ministry using gospel songs, preaching, worship experiences,
              mentorship, and outreach to awaken faith, restore hope, and point
              people to Christ.
            </p>
    
            <div className="relative mx-auto mt-10 h-[330px] max-w-[950px] max-lg:h-[290px] max-md:h-[560px] max-sm:h-[510px]"
                 aria-label="Featured Danny Kioko music covers">
              <figure className="hero-cover left-[2%] top-[54px] h-[202px] w-[245px] -rotate-[12deg] max-lg:w-[210px] max-md:left-[4%] max-md:top-[310px] max-sm:h-[150px] max-sm:w-[168px]"
                      style={{ "--tilt": "-12deg" } as CSSProperties}>
                <img src="/its-possible.png"
                     alt="It&apos;s Possible cover art" />
              </figure>
              <figure className="hero-cover left-[18%] top-[10px] z-[2] h-[222px] w-[258px] rotate-[8deg] max-lg:left-[15%] max-lg:w-[220px] max-md:left-[2%] max-md:top-[96px] max-sm:h-[155px] max-sm:w-[176px]"
                      style={{ "--tilt": "8deg" } as CSSProperties}>
                <img src="/muvango.png"
                     alt="Muvango cover art" />
              </figure>
              <figure className="hero-cover left-1/2 top-0 z-[5] h-[258px] w-[300px] -translate-x-1/2 rotate-[-2deg] max-lg:w-[250px] max-md:top-[10px] max-sm:h-[180px] max-sm:w-[205px]"
                      style={{ "--tilt": "-2deg" } as CSSProperties}>
                <img src="/amenikumbuka.png"
                     alt="Amenikumbuka cover art" />
              </figure>
              <figure className="hero-cover right-[17%] top-[34px] z-[3] h-[220px] w-[254px] rotate-[11deg] max-lg:right-[13%] max-lg:w-[218px] max-md:right-[2%] max-md:top-[118px] max-sm:h-[155px] max-sm:w-[176px]"
                      style={{ "--tilt": "11deg" } as CSSProperties}>
                <img src="/ni-wewe.avif"
                     alt="Ni Wewe cover art" />
              </figure>
              <figure className="hero-cover right-[2%] top-[76px] h-[198px] w-[238px] -rotate-[9deg] max-lg:w-[205px] max-md:right-[6%] max-md:top-[318px] max-sm:h-[150px] max-sm:w-[168px]"
                      style={{ "--tilt": "-9deg" } as CSSProperties}>
                <img src="/ngai-munene.avif"
                     alt="Ngai Munene cover art" />
              </figure>
            </div>
    
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <a className="inline-flex h-[48px] min-w-[156px] items-center justify-center rounded-full bg-release px-7 text-[16px] font-semibold text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d]"
                 href="#all-music">
                Explore Songs
              </a>
              <a className="inline-flex h-[48px] min-w-[182px] items-center justify-center rounded-full border border-black/15 bg-white px-7 text-[16px] font-semibold text-ink transition hover:-translate-y-0.5"
                 href="#evangelism">
                Ministry Vision
              </a>
            </div>
          </div>
        </section>
    
        <section id="evangelism"
                 className="relative isolate overflow-hidden bg-white px-8 py-[76px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
                 aria-labelledby="evangelism-title">
          <div className="pointer-events-none absolute -right-[120px] top-[72px] h-[210px] w-[300px] rotate-[-10deg] rounded-[22px] bg-[#fac844]"
               aria-hidden="true"></div>
          <div className="pointer-events-none absolute -left-[110px] bottom-[30px] h-[240px] w-[240px] rounded-full border-[34px] border-release/80"
               aria-hidden="true"></div>
    
          <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-[.85fr_1.15fr] gap-14 max-lg:grid-cols-1">
            <div>
              <p className="mb-4 text-[15px] font-bold uppercase tracking-[.18em] text-release">
                The mission
              </p>
              <h2 id="evangelism-title"
                  className="text-[clamp(38px,5.2vw,68px)] font-normal leading-[.98]">
                More than music. A call to restoration.
              </h2>
              <div className="mt-8 overflow-hidden rounded-[18px] bg-black shadow-[0_22px_48px_rgba(0,0,0,.18)]">
                <img className="h-[300px] w-full object-cover object-center max-sm:h-[220px]"
                     src="/images/home/danny_music_microphone.jpg"
                     alt="Evangelist Danny Kioko portrait" />
              </div>
            </div>
    
            <div className="grid content-start gap-7">
              <p className="text-[18px] leading-[1.75] text-black/75 max-sm:text-[15px]">
                Danny Kioko uses gospel music not only as entertainment, but as a
                tool for evangelism, healing, discipleship, and community
                transformation. Worship opens the room, preaching anchors the
                message, and outreach carries that message into families and
                communities.
              </p>
    
              <div className="grid gap-6">
                <div className="mission-lane">
                  <p className="font-mono text-[34px] font-extrabold leading-none text-release">
                    01
                  </p>
                  <div>
                    <h3 className="text-[22px] font-bold leading-tight text-midnight">
                      Worship that invites faith
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-black/68">
                      Songs like Muvango and It’s Possible encourage
                      believers with hope, perseverance, and confidence in
                      God’s power.
                    </p>
                  </div>
                </div>
    
                <div className="mission-lane">
                  <p className="font-mono text-[34px] font-extrabold leading-none text-[#d7a400]">
                    02
                  </p>
                  <div>
                    <h3 className="text-[22px] font-bold leading-tight text-midnight">
                      Crusades and worship experiences
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-black/68">
                      Through concerts, international ministry, and evangelistic
                      gatherings, the message centers on Christ, hope, and
                      restoration.
                    </p>
                  </div>
                </div>
    
                <div className="mission-lane">
                  <p className="font-mono text-[34px] font-extrabold leading-none text-[#20d461]">
                    03
                  </p>
                  <div>
                    <h3 className="text-[22px] font-bold leading-tight text-midnight">
                      Youth mentorship and purpose
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-black/68">
                      Faith-based mentorship helps young people discover purpose,
                      grow spiritually, and develop leadership for their
                      generation.
                    </p>
                  </div>
                </div>
    
                <div className="mission-lane">
                  <p className="font-mono text-[34px] font-extrabold leading-none text-release">
                    04
                  </p>
                  <div>
                    <h3 className="text-[22px] font-bold leading-tight text-midnight">
                      Compassion in action
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-black/68">
                      Through DKF, ministry becomes practical care: education,
                      food assistance, shelter support, mentorship, and spiritual
                      guidance for underprivileged children.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <section className="relative overflow-hidden bg-[#f7f7f7] px-8 pb-[40px] pt-[36px] text-black max-lg:px-6 max-sm:px-5 max-sm:pb-10 max-sm:pt-8"
                 aria-labelledby="my-music">
          <div className="mx-auto max-w-[1160px]">
            <h2 id="my-music"
                className="mb-[24px] text-center text-[clamp(24px,2.8vw,30px)] font-normal leading-none tracking-normal max-sm:mb-6">
              <span>My</span>
              <span className="ml-4 inline-block border-b border-release pb-[14px] text-release max-sm:ml-2">Music</span>
            </h2>
    
            <div
                 className="grid grid-cols-[minmax(0,420px)_minmax(0,560px)] items-center justify-between gap-[36px] max-lg:grid-cols-1 max-lg:gap-8">
              <div className="pt-0">
                <p
                   className="mb-[14px] flex items-center gap-3 text-[14px] font-normal uppercase leading-none tracking-[.02em] text-release">
                  <span className="h-px w-[24px] bg-release"
                        aria-hidden="true"></span>
                  Latest Release
                </p>
    
                <h3
                    className="mb-[28px] text-[clamp(30px,3.5vw,38px)] font-normal leading-none tracking-normal max-lg:mb-8 max-sm:text-[34px]">
                  Muvango
                </h3>
    
                <p className="mb-2 text-[15px] font-normal leading-tight tracking-[.01em]">
                  A Song of hope and Encouragement
                </p>
                <p className="mb-[24px] text-[15px] font-normal leading-tight tracking-[.01em] max-sm:mb-6">
                  To all Believers
                </p>
    
                <div className="mb-[16px] flex items-center gap-5 max-sm:gap-4">
                  <img className="h-[44px] w-[44px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[22px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
    
                <p className="mb-[14px] text-[16px] font-normal uppercase leading-none tracking-[.02em]">
                  Listen On
                </p>
    
                <div className="flex flex-wrap items-center gap-5 max-sm:gap-3">
                  <a className="inline-flex h-[40px] items-center justify-center gap-1.5 rounded-full border border-[#ead8df] bg-white px-5 text-[17px] font-bold text-[#111] shadow-sm transition hover:-translate-y-0.5 max-sm:h-11 max-sm:px-4"
                     href="#"
                     aria-label="Listen on YouTube">
                    <span
                          className="inline-flex h-[19px] w-[27px] items-center justify-center rounded-[5px] bg-[#ff0000] text-white">
                      <svg className="h-3 w-3.5"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg>
                    </span>
                    <span>YouTube</span>
                  </a>
    
                  {/* <a className="inline-flex h-[40px] items-center justify-center gap-1.5 rounded-full border border-[#ead8df] bg-white px-5 text-[17px] font-bold text-[#16c65f] shadow-sm transition hover:-translate-y-0.5 max-sm:h-11 max-sm:px-4"
                     href="#"
                     aria-label="Listen on Spotify">
                    <span
                          className="inline-flex h-[23px] w-[23px] items-center justify-center rounded-full bg-[#1ed760] text-white">
                      <svg className="h-[15px] w-[15px]"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg>
                    </span>
                    <span>Spotify</span>
                  </a> */}
    
                  {/* <a className="inline-flex h-[40px] items-center justify-center gap-1.5 rounded-full border border-[#ead8df] bg-white px-6 text-[20px] font-normal text-black shadow-sm transition hover:-translate-y-0.5 max-sm:h-11 max-sm:px-5 max-sm:text-lg"
                     href="#"
                     aria-label="Listen on Apple Music">
                    <svg className="h-[24px] w-[20px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg>
                    <span>Apple</span>
                  </a> */}
                </div>
              </div>
    
              <div className="relative">
                <div className="overflow-hidden rounded-[17px] bg-[#d9d1ff]">
                  <img className="h-[290px] w-full object-cover object-center max-lg:h-[260px] max-sm:h-[200px]"
                       src="/muvango.png"
                       alt="Danny Kioko performing Muvango on stage" />
                </div>
    
                <div
                     className="absolute bottom-4 left-1/2 flex h-[88px] w-[92%] -translate-x-1/2 items-center gap-5 rounded-[4px] bg-white px-6 shadow-[0_10px_28px_rgba(0,0,0,.12)] max-sm:h-auto max-sm:flex-wrap max-sm:gap-3 max-sm:px-4 max-sm:py-4">
                  <div className="flex items-center gap-4 text-black max-sm:gap-3">
                    <button className="text-[19px] leading-none"
                            type="button"
                            aria-label="Previous track">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Muvango">
                      <span className="ml-0.5 text-[15px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-[19px] leading-none"
                            type="button"
                            aria-label="Next track">
                      &#9658;&#9658;
                    </button>
                  </div>
    
                  <div className="min-w-0 flex-1">
                    <div
                         className="mb-2 grid grid-cols-[1fr_auto_auto] items-center gap-8 text-[11px] text-black max-sm:grid-cols-1 max-sm:gap-1">
                      <span></span>
                      <span>Muvango</span>
                      <span className="text-right">EV Danny Kioko<br />1:4 / 4.52</span>
                    </div>
                    <div className="h-1 w-full bg-[#ddd]">
                      <div className="h-full w-[43%] bg-release"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <section className="bg-white px-8 pb-[40px] pt-4 text-black max-lg:px-6 max-sm:px-5"
                 aria-labelledby="all-music">
          <div className="mx-auto max-w-[1120px]">
            <h2 id="all-music"
                className="mb-[36px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-8">
              <span>All</span>
              <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">Music</span>
            </h2>
    
            <div
                 className="grid grid-cols-3 gap-x-10 gap-y-[48px] max-lg:grid-cols-2 max-lg:gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-10">
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  It’s Possible
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/its-possible.png"
                       alt="Danny Kioko performing It&apos;s Possible" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous It&apos;s Possible">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play It&apos;s Possible">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next It&apos;s Possible">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/dhA4KuXPEmw?si=KIENU_AGgXkarYQn"
                     target="_blank"
                     aria-label="Listen to It&apos;s Possible on YouTube">
                    <span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span>
                    <span>YouTube</span>
                  </a>
                  <a className="music-pill font-bold text-[#16c65f]"
                     href="#"
                     aria-label="Listen to It&apos;s Possible on Spotify">
                    <span className="spotify-icon"><svg className="h-3 w-3"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg></span>
                    <span>Spotify</span>
                  </a>
                  <a className="music-pill text-black"
                     href="#"
                     aria-label="Listen to It&apos;s Possible on Apple Music">
                    <svg className="h-[20px] w-[17px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg>
                    <span>Apple</span>
                  </a>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-8">
                  <img className="h-[43px] w-[43px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[25px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Muvango
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/muvango.png"
                       alt="Danny Kioko performing Muvango" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Muvango">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Muvango">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Muvango">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://www.youtube.com/watch?v=WoxG_B2urR8&list=RDWoxG_B2urR8&start_radio=1&pp=ygUSbXV2YW5nbyBkYW5ueSBraWtvoAcB"
                     target="_blank"
                     aria-label="Listen to Muvango on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                  <a className="music-pill font-bold text-[#16c65f]"
                     href="#"
                     aria-label="Listen to Muvango on Spotify"><span className="spotify-icon"><svg className="h-3 w-3"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg></span><span>Spotify</span></a>
                  <a className="music-pill text-black"
                     href="#"
                     aria-label="Listen to Muvango on Apple Music"><svg className="h-[20px] w-[17px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg><span>Apple</span></a>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-8">
                  <img className="h-[30px] w-[30px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[17px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Ni Wewe
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/ni-wewe.avif"
                       alt="Danny Kioko Ni Wewe music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Ni Wewe">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Ni Wewe">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Ni Wewe">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/jQqswqD4ebc?si=zfIfu_Z5qMHONTKM"
                     target="_blank"
                     aria-label="Listen to Ni Wewe on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                  <a className="music-pill font-bold text-[#16c65f]"
                     href="#"
                     aria-label="Listen to Ni Wewe on Spotify"><span className="spotify-icon"><svg className="h-3 w-3"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg></span><span>Spotify</span></a>
                  <a className="music-pill text-black"
                     href="#"
                     aria-label="Listen to Ni Wewe on Apple Music"><svg className="h-[20px] w-[17px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg><span>Apple</span></a>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-8">
                  <img className="h-[30px] w-[30px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[17px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Uinuliwe
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/uinuliwe.png"
                       alt="Danny Kioko performing Uinuliwe" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Uinuliwe">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Uinuliwe">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Uinuliwe">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/AeGJRz4O0Zc?si=VJiSUDwuSSBkmHfI"
                     target="_blank"
                     aria-label="Listen to Uinuliwe on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                  <a className="music-pill font-bold text-[#16c65f]"
                     href="#"
                     aria-label="Listen to Uinuliwe on Spotify"><span className="spotify-icon"><svg className="h-3 w-3"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg></span><span>Spotify</span></a>
                  <a className="music-pill text-black"
                     href="#"
                     aria-label="Listen to Uinuliwe on Apple Music"><svg className="h-[20px] w-[17px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg><span>Apple</span></a>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-8">
                  <img className="h-[30px] w-[30px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[17px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Neema
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/neema.avif"
                       alt="Danny Kioko Neema music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Neema">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Neema">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Neema">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/2gokIHAKeD8?si=x_2BO876wWqrzTXz"
                     target="_blank"
                     aria-label="Listen to Neema on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                  <a className="music-pill font-bold text-[#16c65f]"
                     href="#"
                     aria-label="Listen to Neema on Spotify"><span className="spotify-icon"><svg className="h-3 w-3"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg></span><span>Spotify</span></a>
                  <a className="music-pill text-black"
                     href="#"
                     aria-label="Listen to Neema on Apple Music"><svg className="h-[20px] w-[17px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg><span>Apple</span></a>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-8">
                  <img className="h-[30px] w-[30px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[17px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Ithoka
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/ithoka.avif"
                       alt="Danny Kioko Ithoka music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Ithoka">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Ithoka">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Ithoka">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/70xJOZGrPgQ?si=NlZy2qRjvY_-uye-"
                     target="_blank"
                     aria-label="Listen to Ithoka on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                  <a className="music-pill font-bold text-[#16c65f]"
                     href="#"
                     aria-label="Listen to Ithoka on Spotify"><span className="spotify-icon"><svg className="h-3 w-3"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeWidth="2"
                           aria-hidden="true">
                        <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                        <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                        <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
                      </svg></span><span>Spotify</span></a>
                  <a className="music-pill text-black"
                     href="#"
                     aria-label="Listen to Ithoka on Apple Music"><svg className="h-[20px] w-[17px]"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true">
                      <path
                            d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
                    </svg><span>Apple</span></a>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-8">
                  <img className="h-[30px] w-[30px] object-contain"
                       src="/skizalogo.png"
                       alt="Skiza logo" />
                  <p className="text-[17px] font-extrabold leading-none tracking-[.04em] text-midnight">
                    *240*34#
                  </p>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Amenikumbuka
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/amenikumbuka.png"
                       alt="Danny Kioko Amenikumbuka music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Amenikumbuka">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Amenikumbuka">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Amenikumbuka">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/v7lofAciKe4?si=XcyEoRiEsCyV8ooq"
                     target="_blank"
                     aria-label="Listen to Amenikumbuka on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Ngai Munene
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/ngai-munene.avif"
                       alt="Danny Kioko Ngai Munene music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Ngai Munene">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Ngai Munene">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Ngai Munene">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/AlDZDKFFCuI?si=tGWAYvDctv8GBJ17"
                     target="_blank"
                     aria-label="Listen to Ngai Munene on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Nina Yesu
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/nina-yesu.avif"
                       alt="Danny Kioko Nina Yesu music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Nina Yesu">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Nina Yesu">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Nina Yesu">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/efRYbKnokvw?si=sVgIoe6fzA0ZwLDZ"
                     target="_blank"
                     aria-label="Listen to Nina Yesu on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                </div>
              </article>
    
              <article className="music-card">
                <h3 className="mb-4 text-center text-[16px] font-normal leading-none tracking-[.01em] text-midnight">
                  Merry Christmas
                </h3>
                <div className="relative overflow-hidden rounded-[16px]">
                  <img className="h-[170px] w-full object-cover object-center"
                       src="/merry-christmass.avif"
                       alt="Danny Kioko Merry Christmas music video" />
                  <div
                       className="absolute bottom-2 left-1/2 flex h-[45px] w-[94px] -translate-x-1/2 items-center justify-center gap-3 rounded bg-white/90 text-black shadow-sm">
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Previous Merry Christmas">
                      &#9668;&#9668;
                    </button>
                    <button className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
                            type="button"
                            aria-label="Play Merry Christmas">
                      <span className="ml-px text-[9px] leading-none">&#9658;</span>
                    </button>
                    <button className="text-xs leading-none"
                            type="button"
                            aria-label="Next Merry Christmas">
                      &#9658;&#9658;
                    </button>
                  </div>
                </div>
                <div className="mt-[18px] flex items-center justify-center gap-3">
                  <a className="music-pill text-[#111]"
                     href="https://youtu.be/68QjvfpwQh8?si=Ppih7em4vDpaKrdr"
                     target="_blank"
                     aria-label="Listen to Merry Christmas on YouTube"><span className="youtube-icon"><svg className="h-2.5 w-3"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           aria-hidden="true">
                        <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                      </svg></span><span>YouTube</span></a>
                </div>
              </article>
            </div>
          </div>
        </section>
    
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
