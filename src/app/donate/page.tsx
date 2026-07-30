import { DonorBoxWidget } from "@/components/foundation/DonorBoxWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danny Kioko Foundation | Donate",
  description:
    "Support the Danny Kioko Foundation. Your gift restores hope for vulnerable children and families.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen overflow-hidden border-x-2 border-[#111] max-sm:border-x-0">
      <section className="bg-[#f4efe6] px-8 py-20 text-ink max-sm:px-5">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[.18em] text-release">
            <span className="h-[3px] w-[42px] bg-release" aria-hidden="true" />
            Give today
          </p>
          <h1 className="text-[clamp(30px,4vw,52px)] font-extrabold uppercase leading-[.94] tracking-normal">
            Make a difference
          </h1>
          <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-[1.65] text-black/70">
            Every gift — no matter the size — helps restore hope, dignity, and
            opportunity for vulnerable children and families in Kenya.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-16 max-sm:px-5">
        <div className="mx-auto flex w-full max-w-[820px] items-center justify-center">
          <DonorBoxWidget />
        </div>
      </section>
    </main>
  );
}
