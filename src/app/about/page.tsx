import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danny Kioko Foundation | About DKF",
};

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden border-x-2 border-[#111] max-sm:border-x-0">
    <section className="relative isolate overflow-hidden bg-[#f4efe6] text-ink"
                 aria-labelledby="dkf-hero">
          <div className="relative mx-auto grid min-h-[500px] max-w-[1180px] grid-cols-[minmax(310px,.78fr)_minmax(420px,1fr)] items-center gap-10 px-8 py-8 max-lg:min-h-0 max-lg:grid-cols-1 max-lg:px-8 max-lg:py-10 max-sm:px-5"
               aria-label="About DKF overview">
            <div className="pointer-events-none absolute -right-16 bottom-7 z-0 h-[120px] w-[150px] rounded-full bg-harvest max-sm:-right-20 max-sm:h-[96px] max-sm:w-[124px]"
                 aria-hidden="true"></div>
    
            <div className="relative z-10 max-w-[500px]">
              <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.18em] text-release">
                <span className="h-[3px] w-[42px] bg-release"
                      aria-hidden="true"></span>
                Non-profit organization
              </p>
              <h1 id="dkf-hero"
                  className="text-[clamp(30px,3.7vw,48px)] font-extrabold uppercase leading-[.94] tracking-normal">
                Hope in action for vulnerable children.
              </h1>
              <p className="mt-5 max-w-[470px] text-[15px] leading-[1.65] text-black/70">
                The Danny Kioko Foundation restores dignity and opportunity
                through education, nutrition, healthcare, shelter, and spiritual
                support.
              </p>
              <div className="mt-6 grid max-w-[430px] grid-cols-3 gap-2.5 max-sm:grid-cols-3">
                <div className="rounded-[8px] bg-white/80 px-3.5 py-3 shadow-[0_10px_24px_rgba(20,18,14,.06)]">
                  <p className="font-mono text-[22px] font-extrabold leading-none text-release">
                    100+
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[.05em] text-black/60">
                    children
                  </p>
                </div>
                <div className="rounded-[8px] bg-white/80 px-3.5 py-3 shadow-[0_10px_24px_rgba(20,18,14,.06)]">
                  <p className="font-mono text-[22px] font-extrabold leading-none text-midnight">
                    52.5%
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[.05em] text-black/60">
                    poverty
                  </p>
                </div>
                <div className="rounded-[8px] bg-white/80 px-3.5 py-3 shadow-[0_10px_24px_rgba(20,18,14,.06)]">
                  <p className="font-mono text-[22px] font-extrabold leading-none text-greenhope">
                    1.57M
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[.05em] text-black/60">
                    at risk
                  </p>
                </div>
              </div>
            </div>
    
            <div className="relative z-10 grid grid-cols-[1.15fr_.85fr] gap-3 max-sm:grid-cols-1">
              <div className="relative">
                <div
                     className="absolute left-3 top-3 z-20 rounded-full bg-[#e7002a] px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                  DKF
                </div>
                <figure className="about-hero-photo h-[340px] max-lg:h-[320px] max-sm:h-[230px]">
                  <img src="/dkf/dkf-kids-2.png"
                       alt="Danny Kioko smiling with children supported by DKF" />
                </figure>
              </div>
    
              <div className="grid gap-3">
                <figure className="about-hero-photo h-[163px] max-lg:h-[154px] max-sm:h-[190px]">
                  <img src="/dkf/dkf-kids-1.png"
                       alt="Children sharing a meal during a DKF outreach" />
                </figure>
                <figure className="about-hero-photo h-[163px] max-lg:h-[154px] max-sm:h-[190px]">
                  <img src="/dkf/dkf-kids-3.png"
                       alt="Children receiving food through the Danny Kioko Foundation" />
                </figure>
              </div>
            </div>
          </div>
        </section>
    
        <section className="relative overflow-hidden bg-[#f7f7f7] px-8 py-[76px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
                 aria-labelledby="origin-title">
          <div className="pointer-events-none absolute -right-[130px] -top-[170px] h-[360px] w-[410px] rounded-[52%_0_0_57%/50%_0_0_56%] bg-release"
               aria-hidden="true"></div>
          <div className="pointer-events-none absolute -bottom-[92px] left-0 h-[188px] w-[220px] bg-harvest"
               aria-hidden="true"></div>
    
          <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-[.85fr_1.15fr] gap-14 max-lg:grid-cols-1">
            <div>
              <p className="mb-4 text-[18px] font-normal uppercase tracking-[.02em] text-release">
                Born on mission
              </p>
              <h2 id="origin-title"
                  className="text-[clamp(38px,5vw,64px)] font-normal leading-[1.02] tracking-normal">
                A foundation formed where need kept meeting the gospel.
              </h2>
            </div>
    
            <div className="grid gap-7 text-[17px] leading-[1.75] text-black/80 max-sm:text-[15px]">
              <p>
                DKF began with the many urgent cases Danny encountered during
                evangelism missions across Kenya and East Africa: children without
                school fees, families without food, guardians overwhelmed by
                illness, poverty, and loss.
              </p>
              <p>
                COVID-19, prolonged droughts, and political unrest deepened those
                hardships. Even with limited resources, DKF now helps more than
                100 children access education, nutrition, healthcare, and other
                essential needs. Many live with guardians who cannot provide
                enough support; some face severe malnutrition and serious health
                conditions.
              </p>
            </div>
          </div>
        </section>
    
        <section className="grid grid-cols-2 bg-white text-ink max-lg:grid-cols-1"
                 aria-labelledby="mission-title">
          <div className="bg-midnight px-10 py-[74px] text-white max-lg:px-8 max-sm:px-5 max-sm:py-14">
            <div className="mx-auto max-w-[520px]">
              <p className="mb-5 text-[16px] font-medium uppercase tracking-[.12em] text-harvest">
                Our Mission
              </p>
              <h2 id="mission-title"
                  className="text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.05]">
                Restore hope, dignity, and opportunity.
              </h2>
              <p className="mt-7 text-[18px] leading-[1.72] text-white/80 max-sm:text-[16px]">
                We provide access to education, healthcare, nutrition, shelter,
                and spiritual support so vulnerable children can grow in safety
                instead of survival mode.
              </p>
            </div>
          </div>
    
          <div className="bg-harvest px-10 py-[74px] text-ink max-lg:px-8 max-sm:px-5 max-sm:py-14">
            <div className="mx-auto max-w-[520px]">
              <p className="mb-5 text-[16px] font-bold uppercase tracking-[.12em] text-release">
                Our Vision
              </p>
              <h2 className="text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.05]">
                Every child gets room to thrive.
              </h2>
              <p className="mt-7 text-[18px] leading-[1.72] text-black/75 max-sm:text-[16px]">
                We envision safe, healthy, supportive communities where a child&apos;s
                future is not decided by poverty, abandonment, disability,
                illness, or where they were born.
              </p>
            </div>
          </div>
        </section>
    
        <section className="bg-[#f7f7f7] px-8 py-[82px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
                 aria-labelledby="need-title">
          <div className="mx-auto max-w-[1120px]">
            <div className="mb-12 grid grid-cols-[.75fr_1.25fr] gap-12 max-lg:grid-cols-1 max-lg:gap-6">
              <h2 id="need-title"
                  className="text-[clamp(38px,5vw,62px)] font-normal leading-none">
                The need is personal, then national.
              </h2>
              <p className="max-w-[680px] text-[18px] leading-[1.75] text-black/75 max-sm:text-[15px]">
                Many children DKF supports have lost parents young or been
                abandoned, leaving them exposed to street life, hunger, illness,
                and school dropout. DKF is also deeply committed to children with
                special needs and children directly or indirectly affected by
                HIV/AIDS.
              </p>
            </div>
    
            <div className="grid gap-6">
              <div className="need-row">
                <p className="font-mono text-[36px] font-extrabold leading-none text-release">
                  15.9M
                </p>
                <p className="text-[19px] leading-[1.55] max-sm:text-[16px]">
                  Kenyans live in monetary poverty, according to UNICEF&apos;s 2022
                  reporting.
                </p>
              </div>
              <div className="need-row">
                <p className="font-mono text-[36px] font-extrabold leading-none text-midnight">
                  50%
                </p>
                <p className="text-[19px] leading-[1.55] max-sm:text-[16px]">
                  Half the population experiences multidimensional poverty,
                  including gaps in healthcare, safe water, nutrition, housing,
                  and sanitation.
                </p>
              </div>
              <div className="need-row">
                <p className="font-mono text-[36px] font-extrabold leading-none text-greenhope">
                  46.5%
                </p>
                <p className="text-[19px] leading-[1.55] max-sm:text-[16px]">
                  Nearly half of Nairobi County residents live in informal
                  settlements, where economic shocks hit children first and
                  hardest.
                </p>
              </div>
            </div>
          </div>
        </section>
    
        <section className="relative isolate overflow-hidden bg-white px-8 py-[78px] text-ink max-lg:px-6 max-sm:px-5 max-sm:py-14"
                 aria-labelledby="work-title">
          <div className="absolute left-1/2 top-[-520px] z-0 h-[980px] w-[1060px] -translate-x-1/2 rounded-[48%] border border-harvest"
               aria-hidden="true"></div>
          <div className="relative z-10 mx-auto max-w-[1120px]">
            <div className="mb-12 flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
              <h2 id="work-title"
                  className="max-w-[560px] text-[clamp(38px,5vw,62px)] font-normal leading-none">
                What DKF puts in a child&apos;s hands.
              </h2>
              <a className="inline-flex h-[52px] min-w-[220px] items-center justify-center gap-5 rounded-full bg-release px-9 text-[20px] font-normal text-white transition hover:bg-[#ff642d] max-sm:w-full max-sm:text-[18px]"
                 href="#support">
                Partner with DKF
                <span className="text-[30px]"
                      aria-hidden="true">→</span>
              </a>
            </div>
    
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
                <h3 className="mb-3 text-[22px] font-bold text-midnight">
                  School sponsorships
                </h3>
                <p className="text-[15px] leading-[1.65] text-black/70">
                  Fees, supplies, uniforms, and the steady push that keeps a child
                  in class.
                </p>
              </div>
              <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
                <h3 className="mb-3 text-[22px] font-bold text-release">
                  Food &amp; nutrition
                </h3>
                <p className="text-[15px] leading-[1.65] text-black/70">
                  Meals and nutrition support for children facing hunger and
                  malnutrition.
                </p>
              </div>
              <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
                <h3 className="mb-3 text-[22px] font-bold text-greenhope">
                  Healthcare support
                </h3>
                <p className="text-[15px] leading-[1.65] text-black/70">
                  Medical assistance for children whose families cannot carry the
                  cost alone.
                </p>
              </div>
              <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
                <h3 className="mb-3 text-[22px] font-bold text-midnight">
                  Safe shelter
                </h3>
                <p className="text-[15px] leading-[1.65] text-black/70">
                  Child protection and loving environments for children at risk.
                </p>
              </div>
              <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
                <h3 className="mb-3 text-[22px] font-bold text-release">
                  Special needs care
                </h3>
                <p className="text-[15px] leading-[1.65] text-black/70">
                  Compassionate support for children with disabilities and
                  HIV/AIDS-related needs.
                </p>
              </div>
              <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-7">
                <h3 className="mb-3 text-[22px] font-bold text-greenhope">
                  Mentorship
                </h3>
                <p className="text-[15px] leading-[1.65] text-black/70">
                  Community outreach, empowerment, spiritual guidance, and steady
                  encouragement.
                </p>
              </div>
            </div>
          </div>
        </section>
    
        <section id="support"
                 className="relative isolate overflow-hidden bg-release px-8 py-[76px] text-white max-lg:px-6 max-sm:px-5 max-sm:py-14"
                 aria-labelledby="support-title">
          <div className="absolute -right-[90px] -top-[96px] h-[210px] w-[310px] rounded-[50%] bg-harvest"
               aria-hidden="true"></div>
          <div className="absolute -bottom-[80px] left-[10%] h-[170px] w-[260px] rounded-[50%] bg-midnight"
               aria-hidden="true"></div>
    
          <div
               className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-[1.15fr_.85fr] items-end gap-12 max-lg:grid-cols-1">
            <div>
              <p className="mb-5 text-[18px] font-bold uppercase tracking-[.08em] text-white/75">
                How you can help
              </p>
              <h2 id="support-title"
                  className="max-w-[760px] text-[clamp(42px,6vw,78px)] font-extrabold uppercase leading-[.9]">
                Relief today. A future tomorrow.
              </h2>
              <p className="mt-7 max-w-[680px] text-[20px] leading-[1.65] text-white/90 max-sm:text-[16px]">
                Your support helps provide immediate care while building
                sustainable solutions that break cycles of poverty and
                vulnerability. Together, we can give every child the chance to
                thrive.
              </p>
            </div>
    
            <div className="rounded-[8px] bg-white p-7 text-ink shadow-heavy">
              <p className="mb-5 text-[22px] font-normal leading-tight">
                Support us via:
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="inline-flex h-[48px] min-w-[142px] items-center justify-center rounded-full border border-[#ead8df] bg-white px-6 text-[20px] font-extrabold text-[#34b557] shadow-sm"
                   href="#"
                   aria-label="Support via M-PESA">
                  <img className="h-[27px] w-auto object-contain"
                       src="/m-pesa-logo.png"
                       alt="M-PESA" />
                </a>
                <a className="inline-flex h-[48px] min-w-[142px] items-center justify-center rounded-full border border-[#ead8df] bg-white px-6 text-[15px] font-extrabold text-[#1d4f99] shadow-sm"
                   href="#"
                   aria-label="Support via PayPal">
                  <img className="h-[24px] w-auto object-contain"
                       src="/paypal-logo.png"
                       alt="PayPal" />
                </a>
              </div>
              <p className="mt-7 border-t border-black/10 pt-6 text-[16px] leading-[1.65] text-black/70">
                Thank you for your support, prayers, and partnership.
              </p>
              <p className="mt-5 text-[18px] font-bold leading-tight">
                Danny Kioko<br />
                <span className="text-[14px] font-normal text-black/60">Founder &amp; Director, DKF</span>
              </p>
            </div>
          </div>
        </section>
    
      </main>
  );
}
