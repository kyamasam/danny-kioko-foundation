import { HeroSlideEditor } from "@/components/hero/HeroSlideEditor";

export const metadata = { title: "New Hero Slide | Admin" };

export default function NewHeroSlidePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-2xl font-bold text-[#0c1a36]">New hero slide</h1>
      <HeroSlideEditor mode="create" />
    </div>
  );
}
