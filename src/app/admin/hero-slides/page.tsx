import { createServiceClient } from "@/lib/supabase/server";
import Link from "next/link";
import { DeleteSlideButton } from "./DeleteSlideButton";

export const metadata = { title: "Hero Slides | Admin" };

type Slide = {
  id: string;
  label: string;
  heading: string;
  label_accent_color: string;
  sort_order: number;
  status: "draft" | "published";
  created_at: string;
};

export default async function AdminHeroSlidesPage() {
  const supabase = createServiceClient();
  const { data: slides } = await supabase
    .from("hero_slides")
    .select("id, label, heading, label_accent_color, sort_order, status, created_at")
    .order("sort_order", { ascending: true });

  return (
    <div className="max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0c1a36]">Hero Slides</h1>
        <Link
          href="/admin/hero-slides/new"
          className="rounded-lg bg-[#e84c2b] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          + New slide
        </Link>
      </div>

      {!slides || slides.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[#ececec] bg-white py-20 text-center text-gray-400">
          <span className="text-4xl">🖼️</span>
          <p>No slides yet.</p>
          <Link href="/admin/hero-slides/new" className="text-sm text-[#e84c2b] underline">
            Create your first slide
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#ececec] bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-[#ececec] bg-[#fafafa] text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-5 py-3 text-left">Order</th>
                <th className="px-5 py-3 text-left">Label</th>
                <th className="px-5 py-3 text-left">Heading</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ececec]">
              {(slides as Slide[]).map((slide) => (
                <tr key={slide.id} className="hover:bg-[#fafafa]">
                  <td className="px-5 py-3.5 text-gray-400 tabular-nums">{slide.sort_order}</td>
                  <td className="px-5 py-3.5">
                    <span className="flex items-center gap-2">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: slide.label_accent_color }}
                      />
                      {slide.label}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-[#111]">{slide.heading}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        slide.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {slide.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/hero-slides/${slide.id}/edit`}
                        className="text-[#e84c2b] hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteSlideButton id={slide.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
