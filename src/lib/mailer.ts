import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: true, // port 465 = SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendNewPostEmail(subscribers: string[], post: {
  title: string;
  slug: string;
  excerpt?: string | null;
}) {
  if (subscribers.length === 0) return;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dannykioko.org";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "Danny Kioko Foundation <info@dannykioko.org>",
    bcc: subscribers,
    subject: `New post: ${post.title}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#1a1a1a">${post.title}</h2>
        ${post.excerpt ? `<p style="color:#555">${post.excerpt}</p>` : ""}
        <a href="${postUrl}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#2563eb;color:#fff;border-radius:6px;text-decoration:none">
          Read the full post
        </a>
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
        <p style="font-size:12px;color:#999">
          You're receiving this because you subscribed at dannykioko.org.
        </p>
      </div>
    `,
  });
}
