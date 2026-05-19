"use client";

import { Check } from "lucide-react";

export function BioSection() {
  return (
    <section id="about" className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-8 flex items-center gap-14 flex-wrap md:flex-nowrap">
        <div className="shrink-0 relative">
          <div className="absolute -inset-4 rounded-2xl bg-[#e8f4f1] z-0"></div>
          <img
            src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/landing/jona.jpg"
            alt="Jonathan K Bett"
            className="relative z-10 w-60 h-auto object-cover rounded"
          />
        </div>

        <div className="flex-1">
          <span className="section-rule"></span>
          <h2 className="text-4xl font-bold mb-3 leading-tight">
            Jonathan K Bett
          </h2>
          <p className="text-stone-500 font-light leading-relaxed mb-3 text-sm max-w-xl">
            A distinguished business executive, Jonathan brings over 30 years of
            leadership across Kenya's financial and corporate sectors. He has
            served as:
          </p>

          <ul className="space-y-2 mb-4">
            {[
              "Finance Director — Central Bank of Kenya",
              "CEO — Kenya Deposit Insurance Corporation",
              "Independent Director — Rafiki Microfinance Bank & Automobile Association of Kenya PLC",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-stone-700 text-sm"
              >
                <Check
                  className="w-4 h-4 text-[#1A5E4E] shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-stone-500 font-light leading-relaxed text-sm max-w-xl mb-1">
            Jonathan distils his vast experience into two informative works —{" "}
            <em>How To Start and Run Your Own Business</em> and{" "}
            <em>Personal Financial and Retirement Planning</em> — guiding
            readers on entrepreneurship, wealth building, and financial
            security.
          </p>
          <p className="text-stone-400 font-light text-sm">
            He lives in Kenya with his wife, Abigael, and daughter, Claire.
          </p>
        </div>
      </div>
    </section>
  );
}
