import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  MapPin,
  MoreVertical,
  Pencil,
  Pilcrow,
  Plus,
  Sparkles,
  Star,
  Underline,
} from "lucide-react";

const paragraphs = [
  "A comprehensive guide to building practical financial habits, clarifying long-term goals, and preparing for retirement with confidence.",
  "The book brings together budgeting, saving, investment discipline, risk management, and retirement planning in language designed for everyday readers.",
  "Readers are guided through the choices that shape financial security: income allocation, debt reduction, emergency funds, protection plans, and durable wealth creation.",
  "We need another and a wiser and perhaps a more disciplined concept of money. Remote from clear planning, people often survey their future through the glass of present pressure and see thereby only a small part of the whole image.",
  "Personal finance is not measured by income alone. It is measured by choices repeated long enough to become structure, freedom, and peace of mind.",
  "In a world of changing markets and uncertain careers, the careful reader can still build a plan that is simple, resilient, and personal.",
];

const notableWorks = [
  {
    title: "Personal Financial and Retirement Planning",
    year: "2026",
    accent: "from-[#1a5e4e] to-[#7cc0a3]",
  },
  {
    title: "How To Start And Run Your Own Business",
    year: "2026",
    accent: "from-[#f2b13d] to-[#e86d45]",
  },
  {
    title: "Business Notes",
    year: "Draft",
    accent: "from-[#2b2b2b] to-[#7a7a7a]",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="min-w-0 px-5 py-5 md:px-8 lg:px-10">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-stone-500">
                <span>Authors</span>
                <ChevronRight className="h-4 w-4 text-stone-300" />
                <span>Jonathan Aggrey Bett</span>
                <ChevronRight className="h-4 w-4 text-stone-300" />
                <span className="rounded-md bg-stone-100 px-2 py-1 text-stone-900">
                  Personal Financial and Retirement Planning
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-[#151515] md:text-3xl">
                Personal Financial and Retirement Planning
              </h1>
              <p className="mt-1 text-base text-stone-600">
                Jonathan Aggrey Bett (2026)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="h-11 rounded-lg border border-stone-300 bg-white px-5 text-sm font-semibold shadow-sm transition hover:bg-stone-50">
                Save as draft
              </button>
              <button className="h-11 rounded-lg bg-[#1f1f1f] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-black">
                Publish changes
              </button>
            </div>
          </div>

          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">Featured excerpt</h2>
              <p className="mt-1 text-sm text-stone-600">
                This will be displayed on the author profile and individual book
                pages.
              </p>
            </div>
            <button className="mt-2 flex h-8 w-8 items-center justify-center rounded-md text-stone-400 hover:bg-stone-100">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>

          <EditorToolbar />

          <div className="relative rounded-lg border border-stone-200 bg-white p-5 shadow-sm md:p-6">
            <div className="space-y-5 text-[1.02rem] leading-7 text-[#191919]">
              {paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <span className="relative -mx-0.5 rounded-sm bg-[#cfe7ff] px-0.5 font-bold">
                  {paragraphs[3].split(". ")[0]}.
                </span>{" "}
                {paragraphs[3].split(". ").slice(1).join(". ")}
              </p>
              {paragraphs.slice(4).map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 1 ? "text-stone-400 blur-[1.5px]" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="absolute left-1/2 top-[46%] hidden -translate-x-1/2 rounded-lg border border-stone-200 bg-white p-1 shadow-xl md:flex">
              {[Bold, Italic, Underline, AlignLeft, AlignCenter, Link2].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ),
              )}
            </div>

            <div className="pointer-events-none absolute inset-x-3 bottom-3 h-28 bg-gradient-to-t from-white via-white/90 to-transparent" />
            <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-stone-300" />
          </div>
        </section>

        <aside className="border-t border-black/10 bg-white px-5 py-6 xl:border-l xl:border-t-0 xl:px-6">
          <AuthorPanel />
        </aside>
      </div>
    </div>
  );
}

function EditorToolbar() {
  const iconButtons = [
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    List,
    Link2,
    ImageIcon,
    Sparkles,
  ];

  return (
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <button className="flex h-11 min-w-44 items-center justify-between rounded-lg border border-stone-300 bg-white px-3 text-sm font-semibold shadow-sm">
        <span className="flex items-center gap-2">
          <Pilcrow className="h-4 w-4 text-stone-400" />
          Suisse Intl
        </span>
        <ChevronRight className="h-4 w-4 rotate-90 text-stone-400" />
      </button>
      <button className="flex h-11 w-24 items-center justify-between rounded-lg border border-stone-300 bg-white px-3 text-sm font-semibold shadow-sm">
        16px
        <ChevronRight className="h-4 w-4 rotate-90 text-stone-400" />
      </button>
      <div className="flex h-11 items-center gap-1 rounded-lg bg-white px-1">
        {iconButtons.map((Icon, index) => (
          <button
            key={index}
            className="flex h-9 w-9 items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-900"
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-stone-200" />
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-900">
          <span className="h-4 w-4 rounded-full bg-[#1f1f1f]" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-900">
          <AlignRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function AuthorPanel() {
  return (
    <div className="mx-auto max-w-sm xl:max-w-none">
      <div className="relative mb-16">
        <div className="h-32 overflow-hidden rounded-lg bg-stone-200">
          <img
            src="/library_2.png"
            alt="Library shelf"
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div className="absolute -bottom-12 left-5 h-24 w-24 rounded-full border-4 border-white bg-[#e8d7b8] shadow-sm">
          <img
            src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/jkbLogo.png"
            alt="Jonathan Aggrey Bett"
            className="h-full w-full rounded-full object-cover"
          />
          <span className="absolute bottom-2 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#2f9df4] text-white">
            <Star className="h-4 w-4 fill-white" />
          </span>
        </div>
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-stone-500 shadow-sm">
            <ExternalLink className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-stone-500 shadow-sm">
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>
        <h2 className="flex items-center gap-2 text-xl font-bold">
          Jonathan Aggrey Bett
          <Star className="h-4 w-4 fill-[#f2b13d] text-[#f2b13d]" />
        </h2>
        <p className="mt-1 text-sm text-stone-500">Author | 2026 collection</p>
      </div>

      <div className="my-5 grid grid-cols-3 divide-x divide-stone-200 text-sm">
        <Stat label="Works" value="2" icon={<BookOpen className="h-4 w-4" />} />
        <Stat label="Reviews" value="806" icon={<Pencil className="h-4 w-4" />} />
        <Stat label="Favorites" value="12,087" icon={<Star className="h-4 w-4 fill-[#f2b13d] text-[#f2b13d]" />} />
      </div>

      <div className="flex gap-3">
        <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white text-sm font-semibold shadow-sm">
          <Link2 className="h-4 w-4" />
          Copy link
        </button>
        <button className="h-10 flex-1 rounded-lg border border-stone-300 bg-white text-sm font-semibold shadow-sm">
          Author page
        </button>
      </div>

      <PanelRule />

      <section>
        <h3 className="mb-2 text-sm font-bold">About</h3>
        <p className="text-sm leading-5 text-stone-600">
          Jonathan Aggrey Bett writes about personal finance, retirement
          planning, entrepreneurship, and practical business growth for readers
          building more secure futures.
        </p>
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-stone-400" />
            Nairobi, Kenya
          </p>
          <p className="flex items-center gap-2">
            <Link2 className="h-4 w-4 text-stone-400" />
            jbett.netlify.app
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Author", "Finance", "Business", "Planning"].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-stone-200 px-2 py-1 text-xs font-semibold text-stone-700"
            >
              {tag}
            </span>
          ))}
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-stone-200 text-stone-500">
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      <PanelRule />

      <section>
        <h3 className="mb-3 text-sm font-bold">Notable works</h3>
        <div className="space-y-3">
          {notableWorks.map((work) => (
            <div
              key={work.title}
              className="flex items-center gap-3 border-b border-dotted border-stone-300 pb-3"
            >
              <div
                className={`flex h-14 w-10 shrink-0 items-end rounded border border-white bg-gradient-to-br ${work.accent} p-1 text-[0.45rem] font-bold leading-tight text-white shadow-sm`}
              >
                {work.title.split(" ").slice(0, 3).join(" ")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{work.title}</p>
                <p className="text-sm text-stone-500">
                  Jonathan Bett | {work.year}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-stone-400" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="px-3 first:pl-0">
      <p className="mb-1 text-xs text-stone-500">{label}</p>
      <div className="flex items-center gap-1.5 font-bold">
        <span className="text-stone-400">{icon}</span>
        {value}
      </div>
    </div>
  );
}

function PanelRule() {
  return <div className="my-6 border-t border-dotted border-stone-300" />;
}
