import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Safe Space Gala 2027",
  description:
    "Join Danny Kioko Foundation's Safe Space Gala on May 29, 2027 in Washington State to support a children's center, youth mentorship, and community transformation.",
  path: "/safe-space-gala",
  image: [
    {
      url: "/images/youth_usa/danny_kioko_young_people_meetup.jpg",
      width: 2048,
      height: 1536,
      alt: "Safe Space Gala community gathering for Danny Kioko Foundation",
    },
  ],
});

export const dynamic = "force-dynamic";

export default function SafeSpaceGalaPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[80vh] min-h-[500px] w-full overflow-hidden"
        aria-label="Safe Space GALA 2027 hero"
      >
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/youth_usa/danny_kioko_young_people_meetup.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.65),rgba(18,16,28,.65)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]" />

        <div className="flex h-full items-center justify-center px-8 max-sm:px-5">
          <div className="w-full max-w-[860px] text-center">
            <div className="mb-5 inline-flex items-center justify-center gap-3 text-[clamp(14px,1.5vw,18px)] font-normal leading-tight text-white/90 before:h-[3px] before:w-[40px] before:bg-current before:opacity-60 after:h-[3px] after:w-[40px] after:bg-[#21d0c3] max-sm:before:w-6 max-sm:after:w-6">
              May 29, 2027 • Washington State, USA
            </div>
            <h1 className="m-0 text-[clamp(36px,5.5vw,68px)] font-medium uppercase leading-[1.05] tracking-[.06em] text-white max-sm:text-[clamp(30px,10vw,42px)]">
              Safe Space GALA 2027
            </h1>
            <p className="m-0 mt-4 text-[clamp(18px,2vw,24px)] font-light uppercase tracking-[.08em] text-white/80 max-sm:mt-3 max-sm:text-[16px]">
              Uniting Communities. Transforming Children&apos;s Lives.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[32px] text-[17px] font-medium text-white shadow-[0_8px_24px_rgba(232,76,43,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff642d]"
                href="#tickets"
              >
                Get Tickets
              </a>
              <a
                className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] border border-white/30 px-[32px] text-[17px] font-medium text-white transition hover:bg-white/10"
                href="#about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="bg-white px-8 py-[44px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-8">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
            <div className="rounded-[12px] bg-[#f7f7f7] p-6 text-center">
              <span className="text-[28px]">📅</span>
              <h4 className="mt-2 text-[15px] font-bold text-midnight">Date</h4>
              <p className="text-[14px] text-black/70">May 29, 2027</p>
            </div>
            <div className="rounded-[12px] bg-[#f7f7f7] p-6 text-center">
              <span className="text-[28px]">📍</span>
              <h4 className="mt-2 text-[15px] font-bold text-midnight">Venue</h4>
              <p className="text-[14px] text-black/70">Washington State, USA (TBD)</p>
            </div>
            <div className="rounded-[12px] bg-[#f7f7f7] p-6 text-center">
              <span className="text-[28px]">🎯</span>
              <h4 className="mt-2 text-[15px] font-bold text-midnight">Goal</h4>
              <p className="text-[14px] text-black/70">$3 Million Children&apos;s Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section
        className="bg-[#f7f7f7] px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10"
        id="about"
      >
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>Vision &amp;</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Mission
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <div className="rounded-[16px] bg-white p-8 shadow-[0_6px_18px_rgba(20,18,14,.06)]">
              <h3 className="text-[18px] font-bold text-release uppercase tracking-[.04em]">
                Vision
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/80">
                Uniting Generations, Transforming Children&apos;s Lives
              </p>
            </div>

            <div className="rounded-[16px] bg-white p-8 shadow-[0_6px_18px_rgba(20,18,14,.06)]">
              <h3 className="text-[18px] font-bold text-midnight uppercase tracking-[.04em]">
                Mission
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/80">
                To unite diverse partners in support of sustainable solutions that improve the lives
                of vulnerable children through education, healthcare, protection, and community
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE GALA */}
      <section className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[860px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>About</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              The Gala
            </span>
          </h2>

          <p className="text-[16px] leading-[1.8] text-black/85 max-sm:text-[15px]">
            The <strong>&quot;Safe Space&quot; GALA 2027</strong> is a faith-centered community
            event designed to bring together people of all ages, cultures, and backgrounds. The gala
            provides a safe and welcoming environment where youth and elders can connect, share
            experiences, strengthen relationships, and grow together in faith.
          </p>

          <p className="mt-4 text-[16px] leading-[1.8] text-black/85 max-sm:text-[15px]">
            At a time when many young people are becoming disconnected from their cultural heritage,
            family values, and spiritual foundations, the event seeks to bridge generational gaps by
            creating opportunities for meaningful interaction, mentorship, and mutual understanding.
          </p>

          <p className="mt-4 text-[16px] leading-[1.8] text-black/85 max-sm:text-[15px]">
            Through inspirational praise and worship, the gala celebrates the richness of diverse
            cultures while promoting unity, hope, and spiritual growth. The event recognizes that
            both generations have valuable contributions to make: elders offer wisdom, guidance, and
            life experience, while young people bring creativity, energy, innovation, and vision.
            Together, they create stronger families, healthier communities, and a brighter future.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="rounded-[12px] bg-[#f7f7f7] p-5 text-center">
              <span className="text-2xl">👴</span>
              <h4 className="mt-2 text-[14px] font-bold text-midnight">Elders Offer</h4>
              <p className="text-[13px] text-black/60">Wisdom, Guidance, Life Experience</p>
            </div>
            <div className="rounded-[12px] bg-[#f7f7f7] p-5 text-center">
              <span className="text-2xl">🧑‍🎤</span>
              <h4 className="mt-2 text-[14px] font-bold text-midnight">Youth Bring</h4>
              <p className="text-[13px] text-black/60">Creativity, Energy, Innovation, Vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHILDREN'S CENTER PROJECT */}
      <section className="bg-midnight px-8 py-[52px] text-white max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal">
            <span>Children&apos;s Hope &amp;</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Empowerment Center
            </span>
          </h2>

          <div className="mt-6 rounded-[16px] border border-white/10 bg-white/5 p-6">
            <p className="text-[16px] leading-[1.8] text-white/85 max-sm:text-[15px]">
              The gala serves as a major fundraising platform to support the foundation&apos;s
              vision of establishing a{" "}
              <strong>Children&apos;s Hope and Empowerment Center</strong> in{" "}
              <strong>Karen, Nairobi, Kenya</strong> — a transformational project estimated at{" "}
              <strong>USD $3 million</strong>.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            <div className="rounded-[12px] border border-white/5 bg-white/5 p-4">
              <span className="text-2xl">🏠</span>
              <h4 className="mt-2 text-[14px] font-bold text-white/90">Safe Home</h4>
              <p className="text-[12px] text-white/60">
                Protection and care for vulnerable children
              </p>
            </div>
            <div className="rounded-[12px] border border-white/5 bg-white/5 p-4">
              <span className="text-2xl">📚</span>
              <h4 className="mt-2 text-[14px] font-bold text-white/90">Education &amp; Healthcare</h4>
              <p className="text-[12px] text-white/60">Schooling, nutrition, and medical care</p>
            </div>
            <div className="rounded-[12px] border border-white/5 bg-white/5 p-4">
              <span className="text-2xl">🙏</span>
              <h4 className="mt-2 text-[14px] font-bold text-white/90">
                Mentorship &amp; Spiritual Care
              </h4>
              <p className="text-[12px] text-white/60">
                Counseling, vocational training, and discipleship
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[16px] border border-release/30 bg-release/20 p-6">
            <p className="text-[15px] leading-[1.7] text-white/90 max-sm:text-[14px]">
              <strong>Goal:</strong> Mobilize individuals, churches, businesses, community leaders,
              and philanthropic partners to invest in this life-changing initiative.
            </p>
          </div>
        </div>
      </section>

      {/* MORE THAN AN EVENING */}
      <section className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal">
            <span>More Than</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              An Evening
            </span>
          </h2>

          <p className="mt-6 text-[16px] leading-[1.8] text-black/85 max-sm:text-[15px]">
            The <strong>Safe Space Praise Gala</strong> is more than an evening of music — it is a
            movement of worship, unity, cultural preservation, mentorship, compassion, and social
            impact.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            <div className="rounded-[12px] bg-[#f7f7f7] p-5">
              <span className="text-2xl">🙌</span>
              <h4 className="mt-2 text-[14px] font-bold text-midnight">Worship</h4>
              <p className="text-[12px] text-black/60">Glorifying God through praise</p>
            </div>
            <div className="rounded-[12px] bg-[#f7f7f7] p-5">
              <span className="text-2xl">🤝</span>
              <h4 className="mt-2 text-[14px] font-bold text-midnight">Unity</h4>
              <p className="text-[12px] text-black/60">Strengthening communities</p>
            </div>
            <div className="rounded-[12px] bg-[#f7f7f7] p-5">
              <span className="text-2xl">🌟</span>
              <h4 className="mt-2 text-[14px] font-bold text-midnight">Light</h4>
              <p className="text-[12px] text-black/60">Shining God&apos;s love through service</p>
            </div>
          </div>

          <blockquote className="mt-8 border-l-4 border-release pl-6 text-left max-sm:pl-4">
            <p className="text-[17px] italic leading-[1.7] text-black/80 max-sm:text-[15px]">
              &quot;We are called to be the light of the world, shining God&apos;s love through
              worship, service, generosity, and care for those in need.&quot;
            </p>
          </blockquote>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-[#f7f7f7] px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[860px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>About</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              The Founder
            </span>
          </h2>

          <div className="flex items-start gap-8 max-sm:flex-col max-sm:items-center">
            <Image
              className="h-[200px] w-[200px] shrink-0 rounded-full object-cover object-center max-sm:h-[160px] max-sm:w-[160px]"
              src="/images/danny.jpg"
              alt="Evangelist Danny Kioko"
              width={200}
              height={200}
            />
            <div>
              <h3 className="text-[22px] font-bold text-midnight">Evangelist Danny Kioko</h3>
              <p className="text-[15px] text-black/60">
                Gospel Artist, Evangelist, Mentor, Philanthropist &amp; Community Leader
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/80 max-sm:text-[14px]">
                Based in Seattle, Washington, Danny Kioko is the Founder of DK Foundation. Through
                his music ministry, youth mentorship initiatives, and charitable work, he has
                inspired individuals and communities both in the United States and East Africa.
              </p>
              <p className="mt-2 text-[15px] leading-[1.7] text-black/80 max-sm:text-[14px]">
                His passion is to use worship, service, and community outreach to transform lives,
                restore hope, and create lasting opportunities for future generations.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/watch?v=WoxG_B2urR8&list=RDWoxG_B2urR8&start_radio=1&pp=ygUSbXV2YW5nbyBkYW5ueSBraWtvoAcB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center gap-2 rounded-full bg-midnight px-5 text-[13px] font-medium text-white transition hover:bg-[#173770]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 15l5-3-5-3v6z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  About DK Foundation
                </a>
                <a
                  href="https://www.youtube.com/watch?v=WoxG_B2urR8&list=RDWoxG_B2urR8&start_radio=1&pp=ygUSbXV2YW5nbyBkYW5ueSBraWtvoAcB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center gap-2 rounded-full bg-release px-5 text-[13px] font-medium text-white transition hover:bg-[#ff642d]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
                  </svg>
                  Danny&apos;s Music
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section
        className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10"
        id="tickets"
      >
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(28px,3.2vw,38px)] font-medium uppercase leading-none tracking-[.06em] text-midnight">
            Get Your Tickets
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-black/70 max-sm:text-[15px]">
            Tickets will be on sale soon! Stay tuned for updates.
          </p>

          <div className="mt-6 rounded-[16px] border border-black/5 bg-[#f7f7f7] p-6">
            <p className="text-[14px] text-black/60">
              <strong>Date:</strong> May 29, 2027 &nbsp;•&nbsp;{" "}
              <strong>Venue:</strong> Washington State, USA (TBD)
            </p>
            <p className="mt-2 text-[14px] text-black/60">
              <strong>Contact us for more details</strong>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[32px] text-[17px] font-medium text-white shadow-[0_8px_24px_rgba(232,76,43,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff642d]"
              href="#"
            >
              Notify Me
            </a>
            <a
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] border border-midnight/20 px-[32px] text-[17px] font-medium text-midnight transition hover:bg-midnight/5"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section
        className="bg-midnight px-8 py-[52px] text-white max-lg:px-6 max-sm:px-5 max-sm:py-10"
        id="donate"
      >
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal">
            <span>Support the</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Children&apos;s Center
            </span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-white/80 max-sm:text-[15px]">
            Every gift transforms a life. Partner with us to build a future of hope, dignity, and
            opportunity for vulnerable children in Kenya and East Africa.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[32px] text-[17px] font-medium text-white shadow-[0_8px_24px_rgba(232,76,43,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff642d]"
              href="https://dannykioko.org/give/"
            >
              Donate Now
            </a>
            <a
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] border border-white/30 px-[32px] text-[17px] font-medium text-white transition hover:bg-white/10"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
