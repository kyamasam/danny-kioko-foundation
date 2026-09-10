import { redirect } from "next/navigation";
import { createServiceClient } from "@/lib/supabase/server";
import { verifyUnsubscribeToken } from "@/lib/mailer";

export default async function UnsubscribePage(props: PageProps<"/unsubscribe">) {
  const { email, token, success } = await props.searchParams as {
    email?: string;
    token?: string;
    success?: string;
  };

  if (success === "1") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f8fa] px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-sm text-center">
          <div className="mb-4 text-4xl">✓</div>
          <h1 className="text-2xl font-bold text-[#0c1a36] mb-2">Unsubscribed</h1>
          <p className="text-gray-500">You've been removed from the mailing list. You won't receive any more emails from us.</p>
          <a href="/" className="mt-8 inline-block text-sm text-[#2563eb] hover:underline">
            Return to site
          </a>
        </div>
      </main>
    );
  }

  const invalid = !email || !token || !verifyUnsubscribeToken(email, token);

  async function unsubscribe() {
    "use server";
    if (!email || !token || !verifyUnsubscribeToken(email, token)) {
      redirect("/unsubscribe?error=1");
    }
    const supabase = createServiceClient();
    await supabase.from("subscribers").delete().eq("email", email.toLowerCase().trim());
    redirect("/unsubscribe?success=1");
  }

  if (invalid) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f8fa] px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-sm text-center">
          <h1 className="text-2xl font-bold text-[#0c1a36] mb-2">Invalid link</h1>
          <p className="text-gray-500">This unsubscribe link is invalid or has expired. Please contact us if you need help.</p>
          <a href="/" className="mt-8 inline-block text-sm text-[#2563eb] hover:underline">
            Return to site
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f8fa] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-sm text-center">
        <h1 className="text-2xl font-bold text-[#0c1a36] mb-2">Unsubscribe</h1>
        <p className="text-gray-500 mb-1">
          Remove <span className="font-medium text-[#111]">{email}</span> from the mailing list?
        </p>
        <p className="text-sm text-gray-400 mb-8">You won't receive any future updates from us.</p>
        <form action={unsubscribe}>
          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Yes, unsubscribe me
          </button>
        </form>
        <a href="/" className="mt-4 inline-block text-sm text-gray-400 hover:underline">
          Cancel
        </a>
      </div>
    </main>
  );
}
