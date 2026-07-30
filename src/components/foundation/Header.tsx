"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Safe Space", href: "/safe-space" },
  { label: "About Us", href: "/about" },
  { label: "Music", href: "/music-and-evangelism" },
  { label: "Safe Space Gala", href: "/safe-space-gala" },
  { label: "The Light", href: "/the-light" },
  { label: "Contact", href: "/contact" },
];

const baseNavClass =
  "relative py-3 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-center after:bg-release after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 md:py-2";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-[33px] items-center justify-center bg-release px-4 text-center text-[15px] font-medium tracking-[.01em] text-white max-sm:h-[31px] max-sm:text-[13px]">
        Support Our Cause -
        <a
          href="/donate/"
          className="ml-1 underline underline-offset-2 transition-colors hover:text-white/80 hover:no-underline"
        >
          Donate now
        </a>
      </div>

      <header
        className="relative z-50 flex h-[63px] items-center justify-between gap-3.5 bg-[#f5f2ec] px-3 py-0 text-ink shadow-[0_1px_0_rgba(15,15,15,.08)] sm:h-[68px] sm:px-[18px] md:h-[64px] md:gap-6 md:pl-[36px] md:pr-[16px]"
        aria-label="Primary"
      >
        <Link
          className="whitespace-nowrap font-script text-2xl leading-none text-[#111]"
          href="/"
        >
          Danny Kioko Foundation
        </Link>

        <nav
          className={`nav-links absolute left-0 right-0 top-[63px] flex-col items-stretch gap-0 border-t border-[#ececec] bg-[#f5f2ec] px-[18px] pb-[18px] pt-2.5 text-[15px] shadow-[0_18px_32px_rgba(0,0,0,.14)] sm:top-[68px] md:relative md:left-auto md:right-auto md:top-0 md:ml-auto md:flex md:flex-row md:items-center md:justify-center md:gap-[clamp(16px,2.5vw,32px)] md:border-0 md:bg-transparent md:p-0 md:text-[clamp(13px,1.1vw,15px)] md:shadow-none ${isOpen ? "flex" : "hidden"
            }`}
          id="siteNav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                className={`${baseNavClass} ${isActive
                    ? "text-release after:scale-x-100"
                    : "after:scale-x-0"
                  }`}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="menu-button inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-[7px] border-0 bg-[#f0f1f5] text-[#121212] md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="siteNav"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="block h-0.5 w-5 rounded-sm bg-current" />
          <span className="block h-0.5 w-5 rounded-sm bg-current" />
          <span className="block h-0.5 w-5 rounded-sm bg-current" />
        </button>
      </header>
    </>
  );
}
