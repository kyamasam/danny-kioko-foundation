import { EventCard, type Event } from "@/components/events/EventCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Danny Kioko Foundation",
  description: "Upcoming and past events from the Danny Kioko Foundation.",
};

async function getEvents(): Promise<Event[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/events`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-[#f5f2ec]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#e84c2b]">
            Get Involved
          </p>
          <h1 className="font-script text-4xl text-[#0c1a36] sm:text-5xl">Events</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Upcoming and past events from the Danny Kioko Foundation.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center text-gray-400">
            <span className="text-5xl">📅</span>
            <p className="text-lg font-medium">No events yet</p>
            <p className="text-sm">Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} priority={i === 0} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
