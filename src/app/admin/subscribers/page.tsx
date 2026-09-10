import { createServiceClient } from "@/lib/supabase/server";

type Subscriber = {
  id: string;
  email: string;
  created_at: string;
};

export default async function SubscribersPage() {
  const supabase = createServiceClient();
  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("id, email, created_at")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0c1a36]">Subscribers</h1>
        <span className="rounded-full bg-[#f0f1f5] px-3 py-1 text-sm font-medium text-[#555]">
          {subscribers?.length ?? 0} total
        </span>
      </div>

      {!subscribers || subscribers.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[#ececec] bg-white py-20 text-center text-gray-400">
          <span className="text-4xl">📬</span>
          <p>No subscribers yet.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#ececec] bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-[#ececec] bg-[#fafafa] text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-5 py-3 text-left">Email</th>
                <th className="px-5 py-3 text-left">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ececec]">
              {(subscribers as Subscriber[]).map((sub) => {
                const date = new Date(sub.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <tr key={sub.id} className="hover:bg-[#fafafa]">
                    <td className="px-5 py-3.5 font-medium text-[#111]">{sub.email}</td>
                    <td className="px-5 py-3.5 text-gray-400">{date}</td>
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
