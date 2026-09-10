import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: true, // port 465 = SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function unsubscribeSecret() {
  return process.env.UNSUBSCRIBE_SECRET ?? process.env.SMTP_PASS ?? "fallback-secret";
}

export function generateUnsubscribeToken(email: string): string {
  return crypto.createHmac("sha256", unsubscribeSecret()).update(email.toLowerCase()).digest("hex");
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  try {
    const expected = generateUnsubscribeToken(email);
    const a = Buffer.from(token.padEnd(64, "0").slice(0, 64), "hex");
    const b = Buffer.from(expected, "hex");
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function sendNewPostEmail(subscribers: string[], post: {
  title: string;
  slug: string;
  excerpt?: string | null;
}) {
  if (subscribers.length === 0) return;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dannykioko.org";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const from = process.env.SMTP_FROM ?? "Danny Kioko Foundation <info@dannykioko.org>";

  for (const email of subscribers) {
    const token = generateUnsubscribeToken(email);
    const unsubscribeUrl = `${siteUrl}/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;

    await transporter.sendMail({
      from,
      to: email,
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
            <br/>
            <a href="${unsubscribeUrl}" style="color:#999">Unsubscribe</a>
          </p>
        </div>
      `,
    });
  }
}
