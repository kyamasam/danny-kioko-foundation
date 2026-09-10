import { HeroSlideEditor } from "@/components/hero/HeroSlideEditor";
import { createServiceClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Hero Slide | Admin" };

export default async function EditHeroSlidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServiceClient();

  const { data: slide, error } = await supabase
    .from("hero_slides")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !slide) notFound();

  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-2xl font-bold text-[#0c1a36]">Edit hero slide</h1>
      <HeroSlideEditor
        mode="edit"
        initialData={{
          id: slide.id,
          label: slide.label,
          label_accent_color: slide.label_accent_color,
          heading: slide.heading,
          subheading: slide.subheading,
          image_url: slide.image_url,
          image_position: slide.image_position,
          button_label: slide.button_label,
          button_url: slide.button_url,
          sort_order: slide.sort_order,
          status: slide.status,
        }}
      />
    </div>
  );
}
