import { EventEditor } from "@/components/events/EventEditor";

export const metadata = { title: "New Event | Admin" };

export default function NewEventPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-2xl font-bold text-[#0c1a36]">New event</h1>
      <EventEditor mode="create" />
    </div>
  );
}
