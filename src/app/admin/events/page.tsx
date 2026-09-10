import { createServiceClient } from "@/lib/supabase/server";
import Link from "next/link";
import { DeleteEventButton } from "./DeleteEventButton";

type Event = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  author_name: string;
  created_at: string;
  published_at: string | null;
};

export default async function AdminEventsPage() {
  const supabase = createServiceClient();
  const { data: events } = await supabase
    .from("events")
    .select("id, title, slug, status, author_name, created_at, published_at")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0c1a36]">Events</h1>
        <Link
          href="/admin/events/new"
          className="rounded-lg bg-[#e84c2b] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          + New event
        </Link>
      </div>

      {!events || events.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[#ececec] bg-white py-20 text-center text-gray-400">
          <span className="text-4xl">📅</span>
          <p>No events yet.</p>
          <Link href="/admin/events/new" className="text-sm text-[#e84c2b] underline">
            Create your first event
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#ececec] bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-[#ececec] bg-[#fafafa] text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-5 py-3 text-left">Title</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ececec]">
              {(events as Event[]).map((event) => {
                const date = new Date(event.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <tr key={event.id} className="hover:bg-[#fafafa]">
                    <td className="px-5 py-3.5 font-medium text-[#111]">{event.title}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          event.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400">{date}</td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/events/${event.slug}`}
                          target="_blank"
                          className="text-gray-400 hover:text-[#111]"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/events/${event.id}/edit`}
                          className="text-[#e84c2b] hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteEventButton slug={event.slug} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
