import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Danny Kioko | Safe Space",
};

export const dynamic = "force-dynamic";

const galleryImages = [
  { src: "/images/youth_usa/danny_kioko_foundation_usa_meetup.jpg", alt: "DKF USA Meetup" },
  { src: "/images/youth_usa/danny_kioko_in_donation_drive.jpg", alt: "Donation Drive" },
  { src: "/images/youth_usa/danny_kioko_in_meeting_restaurant.jpg", alt: "Meeting" },
  { src: "/images/youth_usa/danny_kioko_meetup_usa_young_people.jpg", alt: "Young People Meetup" },
  { src: "/images/youth_usa/danny_kioko_mentorship_meetup_usa.jpg", alt: "Mentorship Meetup" },
  { src: "/images/youth_usa/danny_kioko_usa_mentorship_meetup_young_people.jpg", alt: "USA Mentorship Meetup" },
  { src: "/images/youth_usa/danny_kioko_usa_metorhip_session.jpg", alt: "Mentorship Session" },
  { src: "/images/youth_usa/danny_kioko_with_kids_mentoring.jpg", alt: "Mentoring Kids" },
  { src: "/images/youth_usa/danny_kioko_young_people_meetup.jpg", alt: "Youth Meetup" },
];

const objectives = [
  "Provide mentorship and positive role models for youth.",
  "Equip youth with leadership, life, and career skills.",
  "Promote faith, integrity, education, entrepreneurship, and community service.",
  "Create safe spaces where young people can connect, grow, and inspire one another.",
];

const activities = [
  { emoji: "🎤", text: "International youth mentorship conferences and leadership seminars." },
  { emoji: "🙏", text: "Christian discipleship, counseling, worship, and prayer." },
  { emoji: "📚", text: "Leadership, communication, and personal development workshops." },
  { emoji: "💼", text: "Mental health awareness, career readiness, and entrepreneurship training." },
  { emoji: "🤝", text: "Community outreach, charity initiatives, and volunteer service." },
];

const currentActivities = [
  { emoji: "📅", iconBg: "bg-release/10", iconColor: "text-release", title: "Monthly Youth Meet-ups", desc: "Regular gatherings for connection and growth." },
  { emoji: "☀️", iconBg: "bg-harvest/20", iconColor: "text-[#a06800]", title: "Summer Youth Retreats", desc: "Transformative experiences in worship and leadership." },
  { emoji: "🌍", iconBg: "bg-midnight/10", iconColor: "text-midnight", title: "Youth Exchange Programs", desc: "Connecting youth across cultures globally." },
  { emoji: "📱", iconBg: "bg-release/10", iconColor: "text-release", title: "Social Media Mentorship", desc: "Online engagement and mentorship." },
];

export default function SafeSpacePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden" aria-label="Safe Space hero">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/youth_usa/danny_kioko_young_people_meetup.jpg"
            alt=""
            fill
            className="object-cover object-center max-sm:object-[53%_center]"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,28,.51),rgba(18,16,28,.51)),radial-gradient(circle_at_50%_46%,rgba(255,255,255,.05),transparent_38%)]" />
        <div className="grid h-full place-items-center px-[70px] pb-[54px] pt-[58px] max-[980px]:px-[54px] max-[980px]:pb-[64px] max-[980px]:pt-[62px] max-sm:items-center max-sm:px-6 max-sm:pb-[76px] max-sm:pt-[58px]">
          <div className="mt-1.5 w-full max-w-[760px] text-center">
            <div className="mb-[19px] inline-flex items-center justify-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal leading-tight text-white/95 before:h-[3px] before:w-[52px] before:bg-current before:opacity-80 after:h-[3px] after:w-[52px] after:bg-[#21d0c3] max-sm:mb-[18px] max-sm:gap-[9px] max-sm:text-sm max-sm:before:h-0.5 max-sm:before:w-7 max-sm:after:h-0.5 max-sm:after:w-7">
              International Youth Project
            </div>
            <h1 className="m-0 text-[clamp(40px,5.2vw,62px)] font-medium uppercase leading-none tracking-[.1em] text-white max-sm:text-[clamp(34px,12vw,48px)] max-sm:tracking-[.06em]">
              Safe Space
            </h1>
            <p className="m-0 mt-[30px] text-[clamp(18px,2vw,22px)] font-medium uppercase leading-tight tracking-[.01em] text-white max-sm:mt-[31px] max-sm:text-[19px]">
              Empowering Youth Through Mentorship &amp; Leadership
            </p>
            <a
              className="mt-11 inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[28px] text-[clamp(17px,1.8vw,20px)] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d] focus-visible:-translate-y-0.5 focus-visible:bg-[#ff642d] max-[980px]:mt-9 max-sm:mt-8 max-sm:h-[48px] max-sm:min-w-[154px] max-sm:text-[19px]"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10"
        id="about"
        aria-labelledby="about-safe-space"
      >
        <div className="mx-auto max-w-[900px]">
          <h2
            id="about-safe-space"
            className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6 max-sm:text-[28px]"
          >
            <span>About</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Safe Space
            </span>
          </h2>
          <p className="text-center text-[16px] leading-[1.8] tracking-[.01em] text-black/90 max-sm:text-[15px]">
            <strong>Safe Space</strong> is an international youth mentorship initiative hosted by{" "}
            <strong>DK Foundation</strong>, a Washington State nonprofit organization. The project
            empowers young people through Christian mentorship, leadership development, life-skills
            training, and community engagement.
          </p>
          <p className="mt-4 text-center text-[16px] leading-[1.8] tracking-[.01em] text-black/90 max-sm:text-[15px]">
            It provides a safe and supportive environment where youth can discover their purpose,
            strengthen their faith, build healthy relationships, and become responsible members of
            society.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
            <div className="rounded-[12px] border border-black/5 bg-[#f7f7f7] p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-release/10 text-release">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-midnight">Mentorship</h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-black/60">
                Positive role models guiding youth toward purpose and success.
              </p>
            </div>
            <div className="rounded-[12px] border border-black/5 bg-[#f7f7f7] p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-harvest/20 text-[#a06800]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-midnight">Leadership</h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-black/60">
                Equipping youth with skills to lead and serve their communities.
              </p>
            </div>
            <div className="rounded-[12px] border border-black/5 bg-[#f7f7f7] p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-midnight/10 text-midnight">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-midnight">Community</h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-black/60">
                Safe spaces where youth connect, grow, and inspire one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#f7f7f7] px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>Our</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Moments
            </span>
          </h2>
          <div className="columns-2 gap-4 space-y-4 md:columns-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-[10px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f7f7f7] px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <div className="rounded-[16px] bg-white p-8 shadow-[0_6px_18px_rgba(20,18,14,.06)]">
              <h3 className="text-[18px] font-bold uppercase tracking-[.04em] text-release">
                Our Vision
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/80">
                To raise a generation of confident, respectful, faith-filled, and purpose-driven
                young people who positively impact their communities and the world.
              </p>
            </div>
            <div className="rounded-[16px] bg-white p-8 shadow-[0_6px_18px_rgba(20,18,14,.06)]">
              <h3 className="text-[18px] font-bold uppercase tracking-[.04em] text-midnight">
                Our Mission
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/80">
                To empower the next generation through mentorship, leadership development,
                life-skills training, and community engagement that promotes spiritual, personal, and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>Core</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Objectives
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-release/10 text-sm font-bold text-release">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[1.6] text-black/80">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Activities */}
      <section className="bg-[#f7f7f7] px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>Project</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Activities
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            {activities.map((item) => (
              <div key={item.emoji} className="rounded-[12px] border border-black/5 bg-white p-5 shadow-sm">
                <span className="text-lg text-release">{item.emoji}</span>
                <p className="mt-2 text-[14px] leading-[1.5] text-black/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Activities */}
      <section className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-[28px] text-center text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal max-sm:mb-6">
            <span>Current</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Activities
            </span>
          </h2>
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {currentActivities.map((item) => (
              <div key={item.title} className="rounded-[12px] bg-[#f7f7f7] p-5 text-center">
                <div
                  className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-xl ${item.iconBg} ${item.iconColor}`}
                >
                  {item.emoji}
                </div>
                <h4 className="text-[14px] font-bold text-midnight">{item.title}</h4>
                <p className="mt-1 text-[12px] text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="px-8 py-[52px] max-lg:px-6 max-sm:px-5 max-sm:py-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(24px,2.8vw,32px)] font-normal leading-none tracking-normal">
            <span>Expected</span>
            <span className="ml-4 inline-block border-b border-release pb-[10px] text-release max-sm:ml-2">
              Impact
            </span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.8] max-sm:text-[15px]">
            Safe Space inspires hope, restores purpose, and nurtures a generation that is
            spiritually grounded, socially responsible, and committed to making a lasting
            difference. By bringing together youth from diverse cultures and communities, the
            project promotes unity, mentorship, faith, and global collaboration.
          </p>
          <p className="mt-4 text-[17px] font-medium">
            Together, we are raising a generation that shines as a light in the world.
          </p>
        </div>
      </section>

      {/* Partner CTA */}
      <section
        className="bg-white px-8 py-[52px] text-black max-lg:px-6 max-sm:px-5 max-sm:py-10"
        id="donate"
      >
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(28px,3.2vw,38px)] font-medium uppercase leading-none tracking-[.06em] text-midnight">
            Partner With Us
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-black/70 max-sm:text-[15px]">
            Reach out to join our community and support the next generation of leaders.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[31px] bg-release px-[32px] text-[17px] font-medium text-white shadow-listen transition hover:-translate-y-0.5 hover:bg-[#ff642d]"
              href="https://dannykioko.org/give/"
            >
              Donate Now
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

    </main>
  );
}
