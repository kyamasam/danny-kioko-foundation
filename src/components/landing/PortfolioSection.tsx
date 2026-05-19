"use client";

const portfolioItems = [
  {
    name: "Central Bank of Kenya",
    role: "Finance Director",
    logo: "https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/cbk_logo.png",
  },
  {
    name: "Kenya Deposit Insurance Corporation",
    role: "CEO",
    logo: "https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/kidc.png",
  },
  {
    name: "Rafiki Microfinance Bank",
    role: "Independent Director",
    logo: "https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/rafiki.png",
  },
  {
    name: "Automobile Association of Kenya",
    role: "Independent Director",
    logo: "https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/AALogo.png",
  },
];

export function PortfolioSection() {
  return (
    <section
      className="border-t border-b border-stone-100 py-10"
      style={{ background: "#eaf5f1" }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-6">
          <span className="section-rule"></span>
          <h2 className="text-2xl font-semibold">Portfolio</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center py-2 group"
            >
              <div className="h-16 flex items-center justify-center mb-3 transition-transform group-hover:scale-105 duration-200">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
              <p className="text-xs font-medium text-stone-500 tracking-wide">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
