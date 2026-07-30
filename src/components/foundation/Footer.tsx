import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Safe Space", href: "/safe-space" },
  { label: "Gala 2027", href: "/safe-space-gala" },
  { label: "The Light", href: "/the-light" },
];

const involvedLinks = [
  { label: "Safe Space Program", href: "/safe-space" },
  { label: "Annual Gala", href: "/safe-space-gala" },
  { label: "Donate", href: "/donate" },
];

export function Footer() {
  return (
    <footer className="bg-midnight px-8 pb-4 pt-[32px] text-white max-lg:px-6 max-sm:px-5">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.25fr_.8fr_.9fr_auto_1.2fr] gap-10 max-xl:grid-cols-[1.2fr_.8fr_.8fr_1.1fr] max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <Link className="font-script text-[44px] leading-none text-white" href="/">
            Danny Kioko Foundation
          </Link>
          <p className="mt-8 text-[15px] font-light text-white/85">
            Restoring hope, supporting vulnerable children and families, and building stronger
            communities.
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-[15px] font-light uppercase tracking-[.04em] text-white">
            Links
          </h3>
          <nav className="flex flex-col gap-4 text-[15px] font-light text-white/90">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex gap-4 text-white">
            <a href="#" aria-label="Facebook">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.6.8-2.6 1-1.5-1.6-4.1-.8-4.7 1.3-.1.4-.1.8 0 1.1-3.2-.2-6-1.7-7.9-4-.4.7-.6 1.5-.3 2.3.2.8.7 1.5 1.4 1.9-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.4 3.1 3.7-.6.2-1.2.2-1.8.1.5 1.5 2 2.6 3.7 2.7-1.6 1.2-3.5 1.9-5.6 1.9H4c1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-[15px] font-light uppercase tracking-[.04em] text-white">
            Get Involved
          </h3>
          <div className="flex flex-col gap-4 text-[15px] font-light text-white/90">
            {involvedLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <a
            className="inline-flex items-center gap-[10px] rounded-full border border-white/15 px-[18px] py-2 text-[14px] font-normal leading-[1.4] text-[#1ed760] no-underline transition hover:border-white/30 hover:bg-white/5"
            href="https://www.youtube.com/watch?v=WoxG_B2urR8&list=RDWoxG_B2urR8&start_radio=1&pp=ygUSbXV2YW5nbyBkYW5ueSBraWtvoAcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1ed760] text-white">
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2.3}
              >
                <path d="M5 8.5c4.7-1.3 9.2-.8 13.4 1.4" />
                <path d="M6.2 12c3.7-.9 7.2-.5 10.4 1.2" />
                <path d="M7.4 15.2c2.7-.6 5.2-.3 7.4.9" />
              </svg>
            </span>
            <span>Spotify</span>
          </a>
          <a
            className="inline-flex items-center gap-[10px] rounded-full border border-white/15 px-[18px] py-2 text-[14px] font-normal leading-[1.4] text-white no-underline transition hover:border-white/30 hover:bg-white/5"
            href="https://www.youtube.com/@DannyKioko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#ff0000] text-white">
              <svg className="h-2.5 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 7.8v8.4l7.2-4.2L9 7.8z" />
              </svg>
            </span>
            <span>YouTube</span>
          </a>
          <a
            className="inline-flex items-center gap-[10px] rounded-full border border-white/15 px-[18px] py-2 text-[14px] font-normal leading-[1.4] text-white no-underline transition hover:border-white/30 hover:bg-white/5"
            href="#"
          >
            <svg className="h-[26px] w-[22px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.4 2.2c.1 1.3-.4 2.5-1.2 3.4-.9 1-2.2 1.7-3.4 1.6-.2-1.2.4-2.5 1.2-3.3.9-1 2.3-1.7 3.4-1.7zM20.5 17.1c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.4 0 2.3-1 4.4-1 1.6 0 3.2.9 4.4 2.3-3.8 2.1-3.2 7.6.6 9.5z" />
            </svg>
            <span>Apple</span>
          </a>
        </div>

        <div className="max-xl:col-span-4 max-lg:col-span-1">
          <h3 className="mb-4 text-[15px] font-light uppercase tracking-[.04em] text-white">
            Subscribe
          </h3>
          <p className="mb-5 text-[15px] font-light text-white/80">
            Get foundation updates and upcoming events in your inbox.
          </p>
          <form
            action="https://dannykioko.us21.list-manage.com/subscribe/post?u=fd4a0a1948c79b678f20ed19b&id=212a565b05&f_id=000ca8e6f0"
            method="post"
            target="_blank"
            className="flex flex-col gap-3"
            name="mc-embedded-subscribe-form"
          >
            <label className="sr-only" htmlFor="footer-mce-email">
              Email Address
            </label>
            <input
              className="min-h-11 w-full rounded-md border border-white/15 bg-white px-4 text-[15px] text-midnight outline-none transition placeholder:text-midnight/50 focus:border-harvest focus:ring-2 focus:ring-harvest/30"
              id="footer-mce-email"
              type="email"
              name="EMAIL"
              placeholder="Email address"
              required
            />
            <div aria-hidden="true" className="absolute left-[-5000px]">
              <input
                type="text"
                name="b_fd4a0a1948c79b678f20ed19b_212a565b05"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-harvest px-5 text-[14px] font-semibold text-midnight transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-harvest/40"
              type="submit"
              name="subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-[40px] max-w-[1180px] border-t border-white/20 pt-6 text-center text-[15px] font-light text-white/90">
        &copy; 2026 Danny Kioko Foundation
      </div>
    </footer>
  );
}
