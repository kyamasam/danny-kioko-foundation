import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danny Kioko | The Light",
};

export const dynamic = "force-dynamic";

export default function TheLightPage() {
  return (
    <main className="min-h-screen overflow-hidden border-t-[3px] border-x-2 max-sm:border-x-0">
      <section className="relative isolate overflow-hidden bg-[#f4efe6] text-ink"
        aria-labelledby="light-hero">
        <div
          className="relative mx-auto grid min-h-[530px] max-w-[1180px] grid-cols-[minmax(310px,.86fr)_minmax(420px,1fr)] items-center gap-10 px-8 py-8 max-lg:min-h-0 max-lg:grid-cols-1 max-lg:px-8 max-lg:py-10 max-sm:px-5">
          <div className="pointer-events-none absolute -right-16 bottom-7 z-0 h-[120px] w-[150px] rounded-full bg-harvest max-sm:-right-20 max-sm:h-[96px] max-sm:w-[124px]"
            aria-hidden="true"></div>

          <div className="relative z-10 max-w-[540px]">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.18em] text-release">
              <span className="h-[3px] w-[42px] bg-release"
                aria-hidden="true"></span>
              International youth project
            </p>
            <h1 id="light-hero"
              className="text-[clamp(34px,4.8vw,66px)] font-extrabold uppercase leading-[.9] tracking-normal">
              The Light
            </h1>
            <p className="mt-5 max-w-[500px] text-[17px] leading-[1.65] text-black/72 max-sm:text-[15px]">
              A DK Foundation mentorship project helping young people grow in
              faith, leadership, purpose, and life skills.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex h-[48px] min-w-[166px] items-center justify-center rounded-full bg-release px-7 text-[17px] font-semibold text-white transition hover:bg-[#ff642d]"
                href="#programs">
                Explore Programs
              </a>
              <a className="inline-flex h-[48px] min-w-[142px] items-center justify-center rounded-full border border-black/15 bg-white px-7 text-[17px] font-semibold text-midnight transition hover:bg-white/75"
                href="about.html">
                About DKF
              </a>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-[1fr_.82fr] gap-3 max-sm:grid-cols-1">
            <figure className="light-photo h-[360px] max-lg:h-[320px] max-sm:h-[235px]">
              <img src="/images/youth_usa/danny_kioko_mentorship_meetup_usa.jpg"
                alt="Danny Kioko mentorship meetup with young people" />
            </figure>
            <div className="grid gap-3">
              <div className="rounded-[8px] bg-midnight p-6 text-white shadow-heavy max-sm:p-5">
                <p className="font-mono text-[40px] font-extrabold leading-none text-harvest">
                  Faith
                </p>
                <p className="mt-4 text-[15px] leading-[1.55] text-white/82">
                  Mentorship, prayer, worship, and practical guidance for a
                  brighter future.
                </p>
              </div>
              <figure className="light-photo h-[166px] max-lg:h-[146px] max-sm:h-[205px]">
                <img src="/images/youth_usa/danny_kioko_foundation_usa_meetup.jpg"
                  alt="Danny Kioko Foundation USA meetup" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f7f7] px-8 py-[76px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
        aria-labelledby="about-light-title">
        <div className="pointer-events-none absolute -right-[130px] -top-[170px] h-[360px] w-[410px] rounded-[52%_0_0_57%/50%_0_0_56%] bg-release"
          aria-hidden="true"></div>
        <div className="pointer-events-none absolute -bottom-[92px] left-0 h-[188px] w-[220px] bg-harvest"
          aria-hidden="true"></div>

        <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-[.85fr_1.15fr] gap-14 max-lg:grid-cols-1">
          <div>
            <p className="mb-4 text-[18px] font-normal uppercase tracking-[.02em] text-release">
              About the project
            </p>
            <h2 id="about-light-title"
              className="text-[clamp(38px,5vw,64px)] font-normal leading-[1.02] tracking-normal">
              A safe place for young people to discover purpose.
            </h2>
          </div>

          <div className="grid gap-7 text-[17px] leading-[1.75] text-black/80 max-sm:text-[15px]">
            <p>
              The Light is hosted by DK Foundation, a non-profit registered in
              Washington State. It creates a positive, faith-filled environment
              where youths from different backgrounds are mentored, encouraged,
              and equipped to become responsible leaders.
            </p>
            <p>
              Through conferences, mentorship, outreach, and Christian teaching,
              the project responds to challenges such as lack of guidance,
              unemployment, depression, peer pressure, substance abuse,
              violence, and loss of direction.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 bg-white text-ink max-lg:grid-cols-1"
        aria-labelledby="light-mission-title">
        <div className="bg-midnight px-10 py-[74px] text-white max-lg:px-8 max-sm:px-5 max-sm:py-14">
          <div className="mx-auto max-w-[520px]">
            <p className="mb-5 text-[16px] font-medium uppercase tracking-[.12em] text-harvest">
              Mission
            </p>
            <h2 id="light-mission-title"
              className="text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.05]">
              Mentor, train, and empower the next generation.
            </h2>
            <p className="mt-7 text-[18px] leading-[1.72] text-white/80 max-sm:text-[16px]">
              We provide Christian mentorship, leadership training, educational
              support, and opportunities that help young people grow
              spiritually, emotionally, socially, and professionally.
            </p>
          </div>
        </div>

        <div className="bg-harvest px-10 py-[74px] text-ink max-lg:px-8 max-sm:px-5 max-sm:py-14">
          <div className="mx-auto max-w-[520px]">
            <p className="mb-5 text-[16px] font-bold uppercase tracking-[.12em] text-release">
              Vision
            </p>
            <h2 className="text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.05]">
              Spiritually grounded, confident, purpose-driven leaders.
            </h2>
            <p className="mt-7 text-[18px] leading-[1.72] text-black/75 max-sm:text-[16px]">
              The Light envisions young people who shine in their communities
              and positively impact the world through faith, character, and
              service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-[82px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
        aria-labelledby="objectives-title">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-12 grid grid-cols-[.72fr_1.28fr] gap-12 max-lg:grid-cols-1 max-lg:gap-6">
            <h2 id="objectives-title"
              className="text-[clamp(38px,5vw,62px)] font-normal leading-none">
              What The Light helps young people build.
            </h2>
            <p className="max-w-[690px] text-[18px] leading-[1.75] text-black/75 max-sm:text-[15px]">
              The project brings youths together for mentorship, faith
              formation, practical training, friendship, and community service.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="mb-3 text-[22px] font-bold text-midnight">
                Christian values
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/70">
                Faith, moral leadership, prayer, worship, and spiritual growth.
              </p>
            </div>
            <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="mb-3 text-[22px] font-bold text-release">
                Mentorship
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/70">
                Guidance from experienced Christian leaders, role models,
                pastors, and professionals.
              </p>
            </div>
            <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="mb-3 text-[22px] font-bold text-greenhope">
                Leadership skills
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/70">
                Communication, teamwork, integrity, confidence, and personal
                responsibility.
              </p>
            </div>
            <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="mb-3 text-[22px] font-bold text-midnight">
                Education
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/70">
                Encouragement toward learning, career development,
                entrepreneurship, and innovation.
              </p>
            </div>
            <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="mb-3 text-[22px] font-bold text-release">
                Safe spaces
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/70">
                Room for young people to share stories, ask questions, build
                friendships, and receive care.
              </p>
            </div>
            <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="mb-3 text-[22px] font-bold text-greenhope">
                Community service
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/70">
                Outreach, school visits, charity events, counseling, and
                practical acts of compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs"
        className="relative isolate overflow-hidden bg-[#f7f7f7] px-8 py-[82px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
        aria-labelledby="programs-title">
        <div className="absolute left-1/2 top-[-520px] z-0 h-[980px] w-[1060px] -translate-x-1/2 rounded-[48%] border border-harvest"
          aria-hidden="true"></div>
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="mb-12 flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
            <h2 id="programs-title"
              className="max-w-[620px] text-[clamp(38px,5vw,62px)] font-normal leading-none">
              Programs that turn encouragement into direction.
            </h2>
            <a className="inline-flex h-[52px] min-w-[220px] items-center justify-center gap-5 rounded-full bg-release px-9 text-[20px] font-normal text-white transition hover:bg-[#ff642d] max-sm:w-full max-sm:text-[18px]"
              href="#impact">
              See the impact
              <span className="text-[30px]"
                aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid gap-8">
            <div className="program-row">
              <h3 className="text-[26px] font-bold leading-tight text-midnight">
                Youth conferences
              </h3>
              <p className="text-[18px] leading-[1.65] text-black/75 max-sm:text-[16px]">
                International gatherings with worship, prayer, speakers,
                pastors, artists, counseling, networking, and talent showcases.
              </p>
            </div>
            <div className="program-row">
              <h3 className="text-[26px] font-bold leading-tight text-release">
                Christian mentorship
              </h3>
              <p className="text-[18px] leading-[1.65] text-black/75 max-sm:text-[16px]">
                Mentors provide spiritual guidance, accountability,
                encouragement, and support as youths overcome challenges and
                build strong values.
              </p>
            </div>
            <div className="program-row">
              <h3 className="text-[26px] font-bold leading-tight text-greenhope">
                Leadership training
              </h3>
              <p className="text-[18px] leading-[1.65] text-black/75 max-sm:text-[16px]">
                Workshops and team activities develop communication, emotional
                wellness, career readiness, and practical leadership.
              </p>
            </div>
            <div className="program-row">
              <h3 className="text-[26px] font-bold leading-tight text-midnight">
                Community outreach
              </h3>
              <p className="text-[18px] leading-[1.65] text-black/75 max-sm:text-[16px]">
                Charity events, school visits, counseling sessions, and service
                initiatives support vulnerable youths and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="impact"
        className="relative isolate overflow-hidden bg-release px-8 py-[76px] text-white max-lg:px-6 max-sm:px-5 max-sm:py-14"
        aria-labelledby="impact-title">
        <div className="absolute -right-[90px] -top-[96px] h-[210px] w-[310px] rounded-[50%] bg-harvest"
          aria-hidden="true"></div>
        <div className="absolute -bottom-[80px] left-[10%] h-[170px] w-[260px] rounded-[50%] bg-midnight"
          aria-hidden="true"></div>

        <div
          className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-[1.05fr_.95fr] items-center gap-12 max-lg:grid-cols-1">
          <div>
            <p className="mb-5 text-[18px] font-bold uppercase tracking-[.08em] text-white/75">
              Impact
            </p>
            <h2 id="impact-title"
              className="max-w-[780px] text-[clamp(42px,6vw,78px)] font-extrabold uppercase leading-[.9]">
              Helping young people shine.
            </h2>
            <p className="mt-7 max-w-[700px] text-[20px] leading-[1.65] text-white/90 max-sm:text-[16px]">
              The Light inspires hope, restores purpose, and nurtures young
              leaders who are spiritually strong, socially responsible, and
              committed to making a positive difference.
            </p>
          </div>

          <div className="rounded-[8px] bg-white p-7 text-ink shadow-heavy">
            <p className="text-[24px] font-normal leading-tight">
              Together, we can raise a generation that shines as a light in the
              world.
            </p>
            <p className="mt-6 border-t border-black/10 pt-6 text-[16px] leading-[1.65] text-black/70">
              Through faith, mentorship, leadership, and empowerment, The Light
              guides young people toward futures filled with purpose, hope, and
              positive impact.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
