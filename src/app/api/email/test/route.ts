import { createClient } from "@/lib/supabase/server";
import { sendNewPostEmail } from "@/lib/mailer";

export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await sendNewPostEmail([user.email!], {
      title: "Test email from Danny Kioko Foundation",
      slug: "test",
      excerpt: "This is a test email to confirm your SMTP configuration is working correctly.",
    });
    return Response.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
