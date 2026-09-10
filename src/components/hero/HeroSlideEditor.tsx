"use client";

import { ImageUpload } from "@/components/blog/ImageUpload";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type HeroSlide = {
  id: string;
  label: string;
  label_accent_color: string;
  heading: string;
  subheading: string;
  image_url: string;
  image_position: string;
  button_label: string;
  button_url: string;
  sort_order: number;
  status: "draft" | "published";
};

type Props = {
  mode: "create" | "edit";
  initialData?: HeroSlide;
};

const ACCENT_PRESETS = [
  { label: "Teal", value: "#21d0c3" },
  { label: "Gold", value: "#fac844" },
  { label: "Orange", value: "#e84c2b" },
  { label: "White", value: "#ffffff" },
  { label: "Green", value: "#20d461" },
];

const POSITION_OPTIONS = [
  { label: "Center", value: "center" },
  { label: "Top", value: "top" },
  { label: "Bottom", value: "bottom" },
  { label: "Left center", value: "left center" },
  { label: "Right center", value: "right center" },
  { label: "53% center", value: "53% center" },
];

export function HeroSlideEditor({ mode, initialData }: Props) {
  const router = useRouter();
  const [label, setLabel] = useState(initialData?.label ?? "");
  const [labelAccentColor, setLabelAccentColor] = useState(
    initialData?.label_accent_color ?? "#21d0c3"
  );
  const [heading, setHeading] = useState(initialData?.heading ?? "");
  const [subheading, setSubheading] = useState(initialData?.subheading ?? "");
  const [imageUrl, setImageUrl] = useState(initialData?.image_url ?? "");
  const [imagePosition, setImagePosition] = useState(
    initialData?.image_position ?? "center"
  );
  const [buttonLabel, setButtonLabel] = useState(
    initialData?.button_label ?? "Learn More"
  );
  const [buttonUrl, setButtonUrl] = useState(initialData?.button_url ?? "#");
  const [sortOrder, setSortOrder] = useState(initialData?.sort_order ?? 0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save(status: "draft" | "published") {
    setError(null);
    setSaving(true);

    const url =
      mode === "create"
        ? "/api/hero-slides"
        : `/api/hero-slides/${initialData?.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    const body = {
      label,
      label_accent_color: labelAccentColor,
      heading,
      subheading,
      image_url: imageUrl,
      image_position: imagePosition,
      button_label: buttonLabel,
      button_url: buttonUrl,
      sort_order: sortOrder,
      status,
    };

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error ?? "Failed to save");
      setSaving(false);
      return;
    }

    router.push("/admin/hero-slides");
    router.refresh();
  }

  const inputCls =
    "w-full rounded-lg border border-[#ddd] px-3.5 py-2.5 text-sm text-[#111] outline-none focus:border-[#e84c2b] focus:ring-2 focus:ring-[#e84c2b]/20";

  return (
    <div className="space-y-6">
      {/* Preview */}
      {imageUrl && (
        <div
          className="relative h-48 w-full overflow-hidden rounded-xl"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: imagePosition,
          }}
        >
          <div className="absolute inset-0 bg-[rgba(18,16,28,.55)]" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-white">
            <p
              className="text-xs font-normal opacity-90"
              style={{ borderBottom: `2px solid ${labelAccentColor}`, paddingBottom: 2 }}
            >
              {label || "Label"}
            </p>
            <p className="text-2xl font-medium uppercase tracking-widest">
              {heading || "Heading"}
            </p>
            <p className="text-sm font-medium uppercase opacity-80">
              {subheading || "Subheading"}
            </p>
            <span className="mt-1 rounded-full bg-[#e84c2b] px-4 py-1 text-xs font-semibold">
              {buttonLabel}
            </span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#111]">
            Label <span className="font-normal text-gray-400">(small tag above heading)</span>
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g. Nonprofit Organization"
            className={inputCls}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#111]">
            Accent color <span className="font-normal text-gray-400">(right line)</span>
          </label>
          <div className="flex gap-2">
            {ACCENT_PRESETS.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => setLabelAccentColor(p.value)}
                title={p.label}
                className="h-7 w-7 rounded-full border-2 transition"
                style={{
                  backgroundColor: p.value,
                  borderColor: labelAccentColor === p.value ? "#111" : "transparent",
                }}
              />
            ))}
            <input
              type="color"
              value={labelAccentColor}
              onChange={(e) => setLabelAccentColor(e.target.value)}
              className="h-7 w-7 cursor-pointer rounded-full border border-[#ddd]"
              title="Custom color"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">Heading</label>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="e.g. DK Foundation"
          className={`${inputCls} text-xl font-semibold`}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">Subheading</label>
        <input
          type="text"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
          placeholder="e.g. Restoring Hope. Building Communities."
          className={inputCls}
        />
      </div>

      <ImageUpload value={imageUrl} onChange={setImageUrl} />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#111]">
          Image position
        </label>
        <select
          value={imagePosition}
          onChange={(e) => setImagePosition(e.target.value)}
          className={inputCls}
        >
          {POSITION_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#111]">
            Button label
          </label>
          <input
            type="text"
            value={buttonLabel}
            onChange={(e) => setButtonLabel(e.target.value)}
            placeholder="e.g. Donate Now"
            className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#111]">
            Button URL
          </label>
          <input
            type="text"
            value={buttonUrl}
            onChange={(e) => setButtonUrl(e.target.value)}
            placeholder="https://..."
            className={inputCls}
          />
        </div>
      </div>

      <div className="w-32">
        <label className="mb-1.5 block text-sm font-medium text-[#111]">
          Sort order <span className="font-normal text-gray-400">(lower = first)</span>
        </label>
        <input
          type="number"
          value={sortOrder}
          onChange={(e) => setSortOrder(Number(e.target.value))}
          className={inputCls}
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => save("draft")}
          disabled={saving}
          className="rounded-lg border border-[#ddd] bg-white px-5 py-2.5 text-sm font-medium text-[#111] hover:bg-gray-50 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save draft"}
        </button>
        <button
          type="button"
          onClick={() => save("published")}
          disabled={saving}
          className="rounded-lg bg-[#e84c2b] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
        >
          {saving ? "Publishing…" : "Publish"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="ml-auto text-sm text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
